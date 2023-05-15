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

import { useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Route, Switch } from 'react-router';
import remarkGfm from 'remark-gfm';
import useSWR from 'swr';
import { PluginsGrid } from 'ui/components/plugin-grid/plugin-grid';
import { PLUGINS_LIST } from '../../content/plugin-list';

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

function PluginsPage(): JSX.Element {
  return (
    <>
      <PluginsHeader />
      <main>
        <PluginsGrid pluginsList={PLUGINS_LIST} />
      </main>
    </>
  );
}

function fetcher<T>(...args: Parameters<typeof fetch>): Promise<T> {
  return fetch(...args).then((res) => res.text()) as Promise<T>;
}

function PluginPage(): JSX.Element {
  const location = useLocation();

  const plugin = PLUGINS_LIST.find((p) => p.href === location.pathname);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error, isLoading } = useSWR(plugin?.githubUrl, fetcher<string>);

  if (isLoading) {
    return <div className="flex items-center justify-center flex-1">Loading...</div>;
  }

  if (error || !data) {
    return <div className="flex items-center justify-center flex-1">Plugin not found!</div>;
  }

  return (
    <main className="container container--fluid margin-vert--lg">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
    </main>
  );
}

export default function Plugins(): JSX.Element {
  return (
    <Layout title="Plugins" description="Description will go into a meta tag in <head />">
      <Switch>
        <Route path="/plugins/:id" component={PluginPage} />
        <Route path="/plugins" component={PluginsPage} />
      </Switch>
    </Layout>
  );
}
