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

import Layout from '@theme/Layout';
import React from 'react';
import { PluginsGrid } from 'ui/components/plugin-grid/plugin-grid';
import { PLUGINS_LIST } from '../../../content/plugin-list';

function PluginsHeader(): JSX.Element {
  return (
    <header className="hero hero--primary text-center relative overflow-hidden px-0 py-16">
      <div className="container">
        <h1 className="hero__title">Janus Plugins</h1>
        <p className="hero__subtitle">Check out our plugins for Backstage</p>
      </div>
    </header>
  );
}

export default function Plugins(): JSX.Element {
  return (
    <Layout title="Hello!" description="Description will go into a meta tag in <head />">
      <PluginsHeader />
      <main>
        <PluginsGrid pluginsList={PLUGINS_LIST} />
      </main>
    </Layout>
  );
}
