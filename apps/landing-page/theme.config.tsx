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

import { useState, useEffect } from 'react';
import { useConfig } from 'nextra-theme-docs';

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const theme = {
  sidebar: {
    defaultMenuCollapseLevel: Number.POSITIVE_INFINITY,
  },
  docsRepositoryBase: 'https://github.com/vercel/turbo/blob/main/docs',
  useNextSeoProps: function SEO(): {
    description: string;
    defaultTitle: string;
    titleTemplate: string;
  } {
    const { frontMatter } = useConfig();

    const section = 'janus-idp';

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
  unstable_flexsearch: true,
  unstable_staticImage: true,
  toc: {
    float: true,
  },
  font: false,
  feedback: {
    link: 'Question? Give us feedback →',
  },
  logoLink: false,
  editLink: {
    text: 'Edit this page on GitHub',
  },
  search: {
    placeholder: 'Search documentation…',
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
};

export default theme;
