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

import Link from '@docusaurus/Link';
import { GPT_LIST } from '@site/content/gpts-list';
import Layout from '@theme/Layout';
import Fuse from 'fuse.js';
import { GPTsGrid } from 'ui/components';
import { GPT } from 'ui/types';

const GPT_FUSE = new Fuse(GPT_LIST as GPT[], {
  threshold: 0.25,
  ignoreLocation: true,
  keys: [{ name: 'title', weight: 2 }, 'description'],
});

function GPTsHeader(): JSX.Element {
  return (
    <header className="hero hero--primary relative overflow-hidden px-0 py-16 text-center">
      <div className="container">
        <h1 className="hero__title">Janus Software Template Examples</h1>
        <p className="hero__subtitle">Have a Software Template Example idea?</p>
        <div className="flex items-center justify-center">
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/janus-idp/software-templates/issues/new?assignees=&labels=template&projects=&template=gpts.yaml&title=GPT%3A+"
          >
            Submit a proposal for a Software Template Example!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Plugins(): JSX.Element {
  return (
    <Layout
      title="Software Templates"
      description="Description will go into a meta tag in <head />"
    >
      <GPTsHeader />
      <main>
        <GPTsGrid GPT_FUSE={GPT_FUSE} GPT_LIST={GPT_LIST as GPT[]} />
      </main>
    </Layout>
  );
}
