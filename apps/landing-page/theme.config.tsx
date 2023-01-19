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

import { useState, useEffect } from 'react';
import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs';
import { Footer, GithubLogo, JanusLogo, SlackLogo } from 'ui/components';

const theme: DocsThemeConfig = {
  sidebar: {
    defaultMenuCollapseLevel: Number.MAX_VALUE,
  },
  docsRepositoryBase: 'https://github.com/janus-idp/janus-idp.io/tree/main/apps/landing-page',
  useNextSeoProps: function SEO(): {
    description: string;
    defaultTitle: string;
    titleTemplate: string;
  } {
    const { frontMatter } = useConfig();

    const section = 'Janus';

    const defaultTitle = String(frontMatter.overrideTitle) || section;

    return {
      description: String(frontMatter.description),
      defaultTitle,
      titleTemplate: `%s – ${section}`,
    };
  },
  gitTimestamp({ timestamp }: { timestamp: Date }): JSX.Element {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(
          timestamp.toLocaleDateString(navigator.language, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
        );
      } catch {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [timestamp]);

    return <>Last updated on {dateString}</>;
  },
  toc: {
    float: true,
  },
  feedback: {
    content: <>Question? Give us feedback →</>,
  },
  logo: JanusLogo,
  logoLink: '/',
  head: function Head() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </>
    );
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  search: {
    placeholder: 'Search documentation…',
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
  project: {
    link: 'https://github.com/orgs/janus-idp/repositories',
    icon: GithubLogo,
  },
  chat: {
    link: 'https://join.slack.com/t/janus-idp/shared_invite/zt-1lap9hwgi-3tm9VW8DkinqGcdRkGowlg',
    icon: SlackLogo,
  },
  footer: {
    component: Footer,
  },
};

export default theme;
