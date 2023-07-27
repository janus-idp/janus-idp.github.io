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

const linkRegex = /(!?)\[([\w .-]+)]\(\.\/([\w ./-]+)\)/gm;

/**
 * @param {{ entity: import('ui/types').RemoteContent, component: string }} args
 *
 * @returns {import('ui/types').DocusaurusRemoteContent}
 */
function transformContent(args) {
  const { entity, component } = args;

  return [
    'docusaurus-plugin-remote-content',
    {
      name: `${entity.title}-content`,
      sourceBaseUrl: entity.rawDocUrl,
      outDir: `src/pages/${entity.href}`,
      documents: ['README.md'],
      modifyContent: (fname, content) => {
        // Replace relative links with absolute links
        const newContent = content.replaceAll(linkRegex, (...match) => {
          // images require the rawDocUrl
          return `${match[1]}[${match[2]}](${match[1] === '!' ? entity.rawDocUrl : entity.docUrl}/${
            match[3]
          })`;
        });

        return {
          filename: 'index.mdx',
          content: `---
title: ${entity.title}
description: ${entity.description}
---
import { ${component} } from 'ui/components';

<${component} remoteContent={{${Object.entries(entity)
            .map(([key, value]) => `${key}:"${value}"`)
            .join(',')}}} />

${newContent}`,
        };
      },
    },
  ];
}

/**
 * @param {import('ui/types').RemoteContent[]} remoteContent
 * @param {string} component
 *
 * @returns {import('ui/types').DocusaurusRemoteContent[]}
 */
function fetchRemoteContent(remoteContent, component) {
  return remoteContent.map((entity) => transformContent({ entity, component }));
}

module.exports = { fetchRemoteContent };
