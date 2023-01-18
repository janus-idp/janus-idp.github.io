/**
 * Copyright 2022 Red Hat, Inc.
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

import {
  createContext,
  useMemo,
  useContext,
  useEffect,
  useCallback,
  type PropsWithChildren,
} from 'react';
import { useRouter } from 'next/router';
import { AnalyticsBrowser, type ID } from '@segment/analytics-next';
import { useIsSSR } from '@react-aria/ssr';
import { getUserCountry } from '../../utils';

export interface AnalyticsProviderProps {
  writeKey: string;
  client: string;
}

export interface UseAnalytics {
  dispatch: (eventName: string, properties: Record<string, unknown>) => Promise<void>;
}

const AnalyticsContext = createContext<UseAnalytics | undefined>(undefined);

export function AnalyticsProvider(props: PropsWithChildren<AnalyticsProviderProps>): JSX.Element {
  const { children, writeKey, client } = props;

  const isSSR = useIsSSR();
  const router = useRouter();
  const analytics = useMemo(() => AnalyticsBrowser.load({ writeKey }), [writeKey]);
  const country = getUserCountry(isSSR ? '' : navigator.language);

  const dispatch = useCallback(
    async (eventName: string, properties: Record<string, unknown>) => {
      const anonymousId = await getAnonymousId(analytics);

      await analytics.track(eventName, properties, {
        context: { ip: '0.0.0.0', location: { country } },
        userId: anonymousId ?? undefined,
      });
    },
    [analytics, country],
  );

  const value = useMemo(() => ({ dispatch }), [dispatch]);

  // run only on first render
  useEffect(() => {
    const sendAnalytics = async (): Promise<void> => {
      const anonymousId = await getAnonymousId(analytics);

      await analytics.identify(
        anonymousId,
        {
          id: anonymousId,
        },
        {
          context: { ip: '0.0.0.0', location: { country } },
        },
      );
    };

    sendAnalytics().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // run on every route change
  useEffect(() => {
    const sendAnalytics = async (): Promise<void> => {
      await dispatch(router.asPath, { client });
    };

    sendAnalytics().catch(() => {});
  }, [router.asPath, analytics, client, dispatch, country]);

  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>;
}

async function getAnonymousId(analytics: AnalyticsBrowser): Promise<ID> {
  const [analyticsResponse] = await analytics;
  const anonymousId = analyticsResponse.user().anonymousId();

  return anonymousId;
}

export const useAnalytics = (): UseAnalytics => {
  const value = useContext(AnalyticsContext);
  if (!value) {
    throw new Error('Context used outside of its Provider!');
  }

  return value;
};

export default useAnalytics;
