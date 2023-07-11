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

const linkRegex = /!\[([\w .-]+)]\(\.\/([\w ./-]+)\)/gm;

/**
 * @param {import('ui/types').RemoteContent[]} remoteContent
 * @param {string} component
 *
 * @returns {import('ui/types').DocusaurusRemoteContent[]}
 */
function fetchRemoteContent(remoteContent, component) {
  return remoteContent.map((plugin) => {
    const filenameIndex = plugin.githubUrl.lastIndexOf('/') + 1;
    const sourceBaseUrl = plugin.githubUrl.slice(0, Math.max(0, filenameIndex));
    const filename = plugin.githubUrl.slice(Math.max(0, filenameIndex));

    return [
      'docusaurus-plugin-remote-content',
      {
        name: `${plugin.title}-content`,
        sourceBaseUrl,
        outDir: `src/pages/${plugin.href}`,
        documents: [filename],
        modifyContent: (fname, content) => {
          if (fname.includes('README')) {
            return {
              filename: 'index.mdx',
              content: `---
title: ${plugin.title}
description: ${plugin.description}
---
import { ${component} } from 'ui/components';

<${component} remoteContent={{${Object.entries(plugin)
                .map(([key, value]) => `${key}:"${value}"`)
                .join(',')}}} />

${content.replaceAll(linkRegex, `![$1](${sourceBaseUrl}$2)`)}`,
            };
          }
        },
      },
    ];
  });
}

module.exports = { fetchRemoteContent };
