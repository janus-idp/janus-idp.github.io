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

import { Feed, type FeedOptions } from 'feed';
import { getPagesUnderRoute } from 'nextra/context';
import { promises as fs } from 'node:fs';

export async function generateRssFeed(): Promise<void> {
  const allPosts = getPagesUnderRoute('/blog');
  const siteUrl = process.env.SITE_URL || 'localhost:3000';

  const feedOptions: FeedOptions = {
    title: 'Janus-IDP Feed',
    description: 'This is the Janus-IDP Feed!',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    image: `${siteUrl}/images/favicon/favicon-32x32.png`,
    favicon: `${siteUrl}/images/favicon/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} Janus Authors. All rights reserved. Apache License 2.0 open source project`,
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
      json: `${siteUrl}/rss.json`,
      atom: `${siteUrl}/atom.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((page) => {
    if (page.kind === 'MdxPage') {
      feed.addItem({
        title: page.frontMatter?.title as string,
        description: page.frontMatter?.description as string,
        id: `${siteUrl}${page.route}`,
        link: `${siteUrl}${page.route}`,
        date: new Date(page.frontMatter?.date as string),
      });
    }
  });

  await fs.writeFile('./public/rss.xml', feed.rss2());
  await fs.writeFile('./public/rss.json', feed.json1());
  await fs.writeFile('./public/atom.xml', feed.atom1());
}
