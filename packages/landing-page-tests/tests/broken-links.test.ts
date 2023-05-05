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

import { expect, test, type Locator, type Page } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

// get all the urls from the pages directory
const localUrls = getUrls(path.join(__dirname, '..', '..', '..', 'apps', 'landing-page', 'pages'));

// remove the index page from the urls since we reroute it to /blog
const indexPageIndex = localUrls.indexOf('');
localUrls.splice(indexPageIndex, 1);

const linksToIgnore = new Set(['https://open-cluster-management.io/']);

// The test cannot be parallelized because we are navigating to external websites and they think we are DDOSing them
test('broken links on pages', async ({ page }) => {
  test.setTimeout(150_000);

  const anchors = new Map<string, string[]>();

  for (const url of localUrls) {
    // networkidle is the only option that works here
    await page.goto(url, { waitUntil: 'networkidle' });

    const anchorElements = page.locator('a');
    const anchorCount = await anchorElements.count();

    // We need to grab all of the anchors before we start navigating to them
    // otherwise we will break anchor elements dom reference
    for (let i = 0; i < anchorCount; i += 1) {
      const anchorElement = anchorElements.nth(i);

      const href = await extractAnchorProperties(anchorElement);

      // ignore anchors that are not links
      if (!(href.charAt(0) === '/' || href.startsWith('http'))) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (anchors.has(href)) {
        const pages = anchors.get(href);

        // pages will already be defined since we are checking if it has the href
        (pages as string[]).push(url);
      } else {
        anchors.set(href, [url]);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  for (const [href, urls] of anchors) {
    if (linksToIgnore.has(href)) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const isBroken = await testAnchor(href, urls, page);

    if (isBroken) {
      expect([href], `broken on ${urls.join(', ')}`).toStrictEqual([]);
    }
  }
});

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

async function extractAnchorProperties(anchor: Locator): Promise<string> {
  const href = (await anchor.getAttribute('href')) || 'undefined href';

  return href;
}

async function testAnchor(href: string, urls: string[], page: Page): Promise<boolean> {
  // All anchors should have an href
  if (href === '') {
    return true;
  }

  try {
    await page.goto(href);
  } catch {
    return true;
  }

  return false;
}
