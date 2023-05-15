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

import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import React from 'react';
import { AnalyticsProvider } from 'ui/providers';
import { EnvironmentProvider } from '../lib/providers/environment-provider';
import { CustomFields } from '../lib/types';

export default function Root({ children }: { children: React.ReactNode }): JSX.Element {
  const location = useLocation();
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const isBrowser = useIsBrowser();

  return (
    <EnvironmentProvider>
      <AnalyticsProvider
        writeKey={(customFields as CustomFields).writeKey}
        pathname={location.pathname}
        isSSR={!isBrowser}
      >
        {children}
      </AnalyticsProvider>
    </EnvironmentProvider>
  );
}
