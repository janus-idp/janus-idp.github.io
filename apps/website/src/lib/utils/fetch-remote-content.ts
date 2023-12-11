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

import type { DocusaurusRemoteContent, RemoteContent } from 'ui/types';

const linkRegex = /(!?)\[([\w .-]+)]\(\.\/([\w ./-]+)\)/gm;

function transformContent(args: {
  entity: RemoteContent;
  component: string;
}): DocusaurusRemoteContent {
  const { entity, component } = args;

  return [
    'docusaurus-plugin-remote-content',
    {
      name: `${entity.title}-content`,
      sourceBaseUrl: entity.rawDocUrl,
      outDir: `src/pages/${entity.href}`,
      documents: ['README.md'],
      modifyContent: (_, content): { filename: string; content: string } => {
        // Replace relative links with absolute links
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        const newContent = content.replaceAll(
          linkRegex,
          (...match: string[]) =>
            // images require the rawDocUrl
            `${match[1]}[${match[2]}](${match[1] === '!' ? entity.rawDocUrl : entity.docUrl}/${
              match[3]
            })`,
        );

        const remoteContent = Object.entries(entity)
          .map(([key, value]) => `${key}:"${value}"`)
          .join(',');

        return {
          filename: 'index.mdx',
          content: `---
title: ${entity.title}
description: ${entity.description}
---
import { ${component} } from 'ui/components';

<${component} remoteContent={{${remoteContent}}} />

${newContent}`,
        };
      },
    },
  ];
}

export function fetchRemoteContent(
  remoteContent: RemoteContent[],
  component: string,
): DocusaurusRemoteContent[] {
  return remoteContent.map((entity) => transformContent({ entity, component }));
}
