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
import { PLUGINS_LIST } from '@site/content/plugin-list';
import Layout from '@theme/Layout';
import Fuse from 'fuse.js';
import React from 'react';
import { PluginsGrid } from 'ui/components';
import { Plugin } from 'ui/types';

const PLUGIN_FUSE = new Fuse(PLUGINS_LIST as Plugin[], {
  threshold: 0.25,
  ignoreLocation: true,
  keys: [{ name: 'title', weight: 2 }, 'description'],
});

function PluginsHeader(): JSX.Element {
  return (
    <header className="hero hero--primary relative overflow-hidden px-0 py-16 text-center">
      <div className="container">
        <h1 className="hero__title">Janus Plugins</h1>
        <p className="hero__subtitle">Have a plugin idea?</p>
        <div className="flex items-center justify-center">
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/janus-idp/backstage-plugins/issues/new?assignees=&labels=plugin&projects=&template=plugin.yaml&title=%F0%9F%94%8C+Plugin%3A+ins"
          >
            Submit a proposal for a plugin!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Plugins(): JSX.Element {
  return (
    <Layout title="Plugins" description="Description will go into a meta tag in <head />">
      <PluginsHeader />
      <main>
        <PluginsGrid PLUGIN_FUSE={PLUGIN_FUSE} PLUGIN_LIST={PLUGINS_LIST as Plugin[]} />
      </main>
    </Layout>
  );
}
