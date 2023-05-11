/**
 * Copyright 2023 Janus Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Analytics, AnalyticsBrowser } from '@segment/analytics-next';
import merge from 'deepmerge';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  type PropsWithChildren,
} from 'react';
import { type UseAnalytics } from '../../hooks';
import { getUserCountry } from '../../utils';

export type AnalyticsProviderProps = {
  writeKey: string;
  pathname: string;
  isSSR?: boolean;
};

const PII_OPTIONS = { context: { ip: '0.0.0.0' } } as const;

export const AnalyticsContext = createContext<UseAnalytics | undefined>(undefined);

export function AnalyticsProvider(props: PropsWithChildren<AnalyticsProviderProps>): JSX.Element {
  const { children, writeKey, pathname, isSSR } = props;

  const analytics = useMemo(() => AnalyticsBrowser.load({ writeKey }), [writeKey]);
  const country = getUserCountry(isSSR ? '' : navigator.language);

  const track = useCallback(
    async (...args: Parameters<Analytics['track']>) => {
      const [eventName, properties, argOptions, callback] = args;
      const options = merge({ ...argOptions }, { ...PII_OPTIONS, location: { country } });

      await analytics.track(eventName, properties, options, callback);
    },
    [analytics, country],
  );

  const value = useMemo(() => ({ track }), [track]);

  // run on every route change
  useEffect(() => {
    const sendAnalytics = async (): Promise<void> => {
      const options = { ...PII_OPTIONS, location: { country } };

      await analytics.page(
        {
          path: pathname,
        },
        options,
      );
    };

    sendAnalytics().catch(() => {});
  }, [analytics, track, country, pathname]);

  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>;
}
