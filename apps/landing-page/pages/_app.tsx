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

import { SSRProvider, useIsSSR } from '@react-aria/ssr';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import CookieConsent from 'react-cookie-consent';
import { AnalyticsProvider } from 'ui/providers';
import '../styles/tailwind.css';

const ANALYTICS_CONFIG = {
  writeKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY ?? '',
};

function SSRWrapper(props: AppProps): JSX.Element {
  return (
    <SSRProvider>
      <MyApp {...props} />
    </SSRProvider>
  );
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const isSSR = useIsSSR();

  return (
    <AnalyticsProvider {...ANALYTICS_CONFIG} pathname={router.asPath} isSSR={isSSR}>
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
  );
}

export default SSRWrapper;
