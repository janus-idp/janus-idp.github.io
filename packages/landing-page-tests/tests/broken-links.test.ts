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

import { test, expect, type Locator, type Page } from '@playwright/test';
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

    await page.goto(url);

    const anchorElements = page.locator('a');
    const anchorCount = await anchorElements.count();
    const anchors: (AnchorProperties | null)[] = [];
    const brokenAnchors: (AnchorProperties | null)[] = [];

    // We need to grab all of the anchors before we start navigating to them
    // otherwise we will break anchor elements dom reference
    for (let i = 0; i < anchorCount; i += 1) {
      const anchorElement = anchorElements.nth(i);

      anchors.push(await extractAnchorProperties(anchorElement));
    }

    // test each anchor
    for (const anchor of anchors) {
      if (
        [
          'https://join.slack.com/',
          'https://github.com/orgs/janus-idp/repositories',
          'https://open-cluster-management.io/',
        ].includes(anchor?.href || '')
      ) {
        // Slack join links are always broken
        // eslint-disable-next-line no-continue
        continue;
      }

      if (anchor?.href.charAt(0) === '#' || anchor?.href === '/') {
        // Anchors that link to other anchors on the same page are always broken
        // eslint-disable-next-line no-continue
        continue;
      }

      if (/join\.slack\.com/.test(anchor?.href || '')) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (!anchor) {
        brokenAnchors.push(anchor);
      }

      const isBroken = await testAnchor(anchor as AnchorProperties, page);

      if (isBroken) {
        brokenAnchors.push(anchor);
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

type AnchorProperties = {
  text: string;
  href: string;
};

async function extractAnchorProperties(anchor: Locator): Promise<AnchorProperties | null> {
  let text = await anchor.textContent();
  let href = await anchor.getAttribute('href');

  // No information about the anchor
  if (!text && !href) {
    return null;
  }

  text ||= '';
  href ||= '';

  return { text, href };
}

async function testAnchor(anchorProperties: AnchorProperties, page: Page): Promise<boolean> {
  const { href } = anchorProperties;

  // All anchors should have an href
  if (href === '') {
    return true;
  }

  try {
    await page.goto(href, { timeout: 0 });
  } catch {
    return true;
  }

  return false;
}
