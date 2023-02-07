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

/* eslint-disable no-await-in-loop */

import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

// Run tests in parallel
test.describe.configure({ mode: 'parallel' });

// get all the urls from the pages directory
const urls = getUrls(path.join(__dirname, '..', '..', '..', 'apps', 'landing-page', 'pages'));

// remove the index page from the urls since we reroute it to /blog
const indexPageIndex = urls.indexOf('');
urls.splice(indexPageIndex, 1);

// test each url separately for parallelism
for (const url of urls) {
  test(`broken links on page ${url}`, async ({ page }) => {
    // The default timeout isn't long enough
    test.slow();

    await page.goto(`http://localhost:3000${url}`);

    const anchors = page.locator('a');
    const brokenAnchors: { text: string; href: string }[] = [];

    for (let i = 0; i < (await anchors.count()); i += 1) {
      const anchor = anchors.nth(i);
      const text = (await anchor.textContent()) || '';
      const href = await anchor.getAttribute('href');

      if (!href) {
        brokenAnchors.push({ text, href: '' });
      }

      // if the href is relative, prepend the url
      if (href && !href.startsWith('http')) {
        try {
          await page.goto(`http://localhost:3000${url}`);
        } catch {
          brokenAnchors.push({ text, href });
        }
      }

      // if the href is absolute, navigate to it
      if (href && href.startsWith('http')) {
        try {
          await page.goto(href);
        } catch {
          brokenAnchors.push({ text, href });
        }
      }
    }

    expect(brokenAnchors).toEqual([]);
  });
}

function getUrls(directory_path: string): string[] {
  const newUrls: string[] = [];
  const directory = fs.readdirSync(directory_path, { withFileTypes: true });

  for (const item of directory) {
    if (item.isFile() && !item.name.startsWith('_')) {
      const absoluteFilePath = path.join(directory_path, item.name);
      // get the relative file path under the pages directory
      const relativeFilePath = absoluteFilePath.split(
        path.join('apps', 'landing-page', 'pages'),
      )[1];
      const url = relativeFilePath
        // replace replace \\ with /
        .replace(/\\/g, '/')
        // remove the file extension
        .replace(/\.[^./]+$/, '')
        // replace /index with an empty string
        .replace(/\/index$/, '');

      newUrls.push(url);
    } else if (item.isDirectory()) {
      newUrls.push(...getUrls(path.join(directory_path, item.name)));
    }
  }

  return newUrls;
}
