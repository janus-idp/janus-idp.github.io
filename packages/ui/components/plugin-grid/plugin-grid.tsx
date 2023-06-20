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

import { Cog8ToothIcon } from '@heroicons/react/20/solid';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type Fuse from 'fuse.js';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { StringParam, useQueryParams } from 'use-query-params';
import { EnvironmentContext } from '../../contexts';
import { NodejsIcon, ReactIcon } from '../../icons';
import { Plugin } from '../../types';
import { PLUGIN_CATEGORIES, PluginSearchbar } from '../plugin-searchbar/plugin-searchbar';
import { Tooltip } from '../tooltip/tooltip';

type PluginTileProps = Plugin;

function PluginTile({ icon, title, description, href, category }: PluginTileProps): JSX.Element {
  const { Link } = useContext(EnvironmentContext);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY],
  );

  return (
    <Link
      className="dark:border-pf-cyan-300/30 border-pf-cyan-300/20 dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 dark:shadow-2x ring-pf-cyan-300 group relative flex flex-col items-center justify-between rounded-xl border border-solid px-8 py-4 shadow shadow-black/20 outline-0 transition-shadow hover:no-underline hover:shadow-md focus:ring-1 dark:shadow-black/50"
      href={href}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 149, 150, 0.2),
              transparent 80%
            )
          `,
        }}
      />
      <div className="flex h-full flex-col justify-between">
        <div>
          <img className="mb-4 h-[75px] w-[75px]" src={icon} alt={`${title} icon`} />
          <h3>{title}</h3>
          <p className="line-clamp-3">{description}</p>
        </div>
        <div className="flex flex-row-reverse">
          {/* Node.js brand guidelines require us to use a white icon on a dark background and vice versa */}
          {category === 'Backend' && (
            <Tooltip
              buttonContent={<NodejsIcon className="h-8 w-auto text-black dark:text-white" />}
              popupContent={category}
            />
          )}
          {category === 'Frontend' && (
            <Tooltip
              buttonContent={<ReactIcon className="h-8 w-auto text-black dark:text-white" />}
              popupContent={category}
            />
          )}
          {category === 'Custom Actions' && (
            <Tooltip
              buttonContent={<Cog8ToothIcon className="h-8 w-auto text-black dark:text-white" />}
              popupContent={category}
            />
          )}
        </div>
      </div>
    </Link>
  );
}

type PluginsFeaturesProps = {
  pluginsFuse: Fuse<Plugin>;
  pluginsList: Plugin[];
};

export function PluginsGrid({ pluginsFuse, pluginsList }: PluginsFeaturesProps): JSX.Element {
  // search state cannot be lifted to query params because docusaurus uses react router v5
  // which does not support a shallow updates. i.e. every time the state changes, the page
  // will lose focus on the input field.
  const [queryParams, setQueryParams] = useQueryParams({
    category: StringParam,
  });
  const [search, setSearch] = useState('');

  const pluginCategory =
    PLUGIN_CATEGORIES.find(({ slug }) => slug === queryParams.category) || PLUGIN_CATEGORIES[0];

  const plugins = useMemo(() => {
    let p = pluginsList;

    if (search !== '') {
      p = pluginsFuse.search(search).map(({ item }) => item);
    }

    if (pluginCategory.name !== 'All plugins') {
      p = p.filter(({ category }) => category === pluginCategory.name);
    }

    return p;
  }, [pluginCategory.name, pluginsFuse, pluginsList, search]);

  return (
    <section className="container flex w-full flex-col p-8">
      <PluginSearchbar
        search={search}
        setSearch={setSearch}
        setQueryParams={setQueryParams}
        pluginCategory={pluginCategory}
      />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plugins.map((plugin) => (
          <PluginTile key={plugin.title} {...plugin} />
        ))}
      </div>
    </section>
  );
}
