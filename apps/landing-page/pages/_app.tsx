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

import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import { SSRProvider } from '@react-aria/ssr';
import { AnalyticsProvider } from 'ui/hooks';
import CookieConsent from 'react-cookie-consent';

const analyticsConfig = {
  writeKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY ?? '',
  client: 'landing-page',
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SSRProvider>
      <AnalyticsProvider {...analyticsConfig}>
        <Component {...pageProps} />
        {/* Important modifiers need to be used to override the default styling */}
        <CookieConsent
          contentClasses="!text-opacity-80 !text-[#E2E8F0]"
          containerClasses="!bg-[#232323]"
          buttonClasses="!bg-janus-blue !rounded-md !opacity-80 !hover:opacity-100 !text-black"
          buttonText="I accept"
        >
          This website uses cookies to collect anonymized telemetry data.
        </CookieConsent>
      </AnalyticsProvider>
    </SSRProvider>
  );
}

export default MyApp;
