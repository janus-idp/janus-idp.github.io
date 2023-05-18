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
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { HomepageGrid } from 'ui/components/homepage-grid/homepage-grid';
import HOMEPAGE_LIST from '../../content/homepage-list';

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="hero hero--primary text-center relative overflow-hidden px-0 py-16">
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="flex items-center justify-center">
          <Link className="button button--secondary button--lg" to="/plugins">
            Checkout our plugins for Backstage! 🔌
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageGrid homepageList={HOMEPAGE_LIST} />
      </main>
    </Layout>
  );
}
