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

// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const dotenv = require('dotenv');

dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

const copyright = `Copyright © ${new Date().getFullYear()} Janus -- All Rights Reserved <br> Apache License 2.0 open source project`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Janus',
  // TODO: add tagline
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
      ({
        gtag: {
          trackingID: process.env.G_TAG || 'G_TAG',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/janus-idp/janus-idp.io/tree/main/apps/website/',
        },
        blog: {
          feedOptions: {
            type: 'all',
            copyright,
          },
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/janus-idp/janus-idp.io/tree/main/apps/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: add logo
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Janus Icon',
          src: '/images/icon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/community', label: 'Community', position: 'left' },
          { to: '/plugins', label: 'Plugins', position: 'left' },
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
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
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
      },
    }),

  plugins: [
    'docusaurus-plugin-tailwind',
    [
      'docusaurus-plugin-dynamic-routes',
      {
        routes: [
          {
            path: '/plugins',
            exact: false,
            component: '../src/pages/plugins',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
