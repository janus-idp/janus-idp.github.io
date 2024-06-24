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

import dotenv from 'dotenv';
import { themes } from 'prism-react-renderer';
import { GPT_LIST } from './content/gpts-list';
import { PLUGINS_LIST } from './content/plugin-list';
import { fetchRemoteContent } from './src/lib/utils/fetch-remote-content';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.vsDark;
darkCodeTheme.plain.backgroundColor = '#232323';

dotenv.config();
dotenv.config({ path: '.env.local', override: true });

const copyright = `Copyright © ${new Date().getFullYear()} Janus -- All Rights Reserved <br> Apache License 2.0 open source project`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Janus',
  tagline: 'A Red Hat sponsored community for building developer portals, built on Backstage',
  favicon: '/images/favicon/favicon.ico',
  url: 'https://janus-idp.io',
  baseUrl: '/',
  organizationName: 'janus-idp',
  projectName: 'janus-idp.io.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    writeKey: process.env.WRITE_KEY,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        gtag: {
          trackingID: process.env.G_TAG ?? 'G_TAG',
          anonymizeIP: true,
        },
        docs: false,
        blog: {
          feedOptions: {
            type: 'all',
            copyright,
          },
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/janus-idp/janus-idp.github.io/tree/main/apps/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/tailwind.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // TODO: add logo
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Janus Icon',
          src: '/images/icon.svg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/community', label: 'Community', position: 'left' },
          { to: '/plugins', label: 'Plugins', position: 'left' },
          // add url here:
          { to: '/gpts', label: 'Software Templates', position: 'left' },
          {
            href: 'https://showcase.janus-idp.io/',
            label: 'Showcase',
            position: 'right',
          },
          {
            href: 'https://github.com/orgs/janus-idp/repositories',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/janus-idp/shared_invite/zt-1pxtehxom-fCFtF9rRe3vFqUiFFeAkmg',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@januscommunity',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/JanusIDP',
              },

              {
                label: 'Mailing List',
                href: 'https://groups.google.com/g/janus-idp-community',
              },
              {
                label: 'Calendar',
                href: 'https://calendar.google.com/calendar/u/0?cid=amFudXMuaWRwLmNvbW11bml0eUBnbWFpbC5jb20',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/orgs/janus-idp/repositories',
              },
            ],
          },
        ],
        copyright,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'diff', 'json'],
        magicComments: [
          // Extend the default highlight class name
          {
            className: 'code-block-highlight-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-add-line',
            line: 'highlight-add-next-line',
            block: { start: 'highlight-add-start', end: 'highlight-add-end' },
          },
          {
            className: 'code-block-remove-line',
            line: 'highlight-remove-next-line',
            block: {
              start: 'highlight-remove-start',
              end: 'highlight-remove-end',
            },
          },
        ],
      },
    },

  plugins: [
    'docusaurus-plugin-tailwind',
    ...fetchRemoteContent(PLUGINS_LIST, 'PluginHeader'),
    ...fetchRemoteContent(GPT_LIST, 'GPTHeader'),
  ],
  markdown: {
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    },
  },
};

export default config;
