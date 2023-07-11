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

export type Feature = {
  title: string;
  description: string;
};

export type RemoteContent<T = undefined> = Feature & {
  href: string;
  githubUrl: string;
  sourceUrl: string;
  category?: T;
};

export type PluginCategoryKind = 'Frontend' | 'Backend' | 'Custom Actions';

export type Plugin = RemoteContent<PluginCategoryKind> & {
  icon: string;
};

export type GPT = RemoteContent;

export type Homepage = Feature & {
  icon: string;
};

export type DocusaurusRemoteContent = [
  string,
  {
    name: string;
    sourceBaseUrl: string;
    outDir: string;
    documents: string[] | Promise<string[]>;
    modifyContent: (filename: string, content: string) => { filename?: string; content?: string };
  },
];
