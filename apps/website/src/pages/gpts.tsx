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

import Fuse from 'fuse.js';
import React from 'react';
import GPTS_LIST from '@site/content/gpts-list';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { GPTsGrid } from 'ui/components';

const gptsFuse = new Fuse(GPTS_LIST, {
  threshold: 0.25,
  ignoreLocation: true,
  keys: [{ name: 'title', weight: 2 }, 'description'],
});

function GPTsHeader(): JSX.Element {
  return (
    <header className="hero hero--primary relative overflow-hidden px-0 py-16 text-center">
      <div className="container">
        <h1 className="hero__title">Janus Golden Path Templates</h1>
        <p className="hero__subtitle">Have a GPT idea?</p>
        <div className="flex items-center justify-center">
          {/* TODO: change link to GPT issue template after it is created */}
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/janus-idp/software-templates/issues/new"
          >
            Submit a proposal for a GPT!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Plugins(): JSX.Element {
  return (
    <Layout title="GPTs" description="Description will go into a meta tag in <head />">
      <GPTsHeader />
      <main>
        <GPTsGrid gptsFuse={gptsFuse} gptsList={GPTS_LIST} />
      </main>
    </Layout>
  );
}
