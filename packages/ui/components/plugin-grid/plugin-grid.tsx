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
import type Fuse from 'fuse.js';
import React from 'react';
import { FaNodeJs as NodejsIcon, FaReact as ReactIcon } from 'react-icons/fa';
import { useSearch } from '../../hooks';
import { Plugin } from '../../types';
import { Searchbar } from '../searchbar/searchbar';
import { PLUGIN_CATEGORIES } from '../searchbar/types';
import { Tile } from '../tile/tile';
import { Tooltip } from '../tooltip/tooltip';

type PluginTileProps = Plugin;

function PluginTile({ icon, title, description, href, category }: PluginTileProps): JSX.Element {
  return (
    <Tile href={href}>
      <div>
        <img className="mb-4 h-[75px] w-[75px]" src={icon} alt={`${title} icon`} />
        <h3>{title}</h3>
        <p className="line-clamp-3">{description}</p>
      </div>
      <div className="flex flex-row-reverse">
        {/* Node.js brand guidelines require us to use a white icon on a dark background and vice versa */}
        {category === 'Backend' && (
          <Tooltip
            buttonContent={
              <NodejsIcon className="h-8 w-auto cursor-help text-black dark:text-white" />
            }
            popupContent={category}
          />
        )}
        {category === 'Frontend' && (
          <Tooltip
            buttonContent={
              <ReactIcon className="h-8 w-auto cursor-help text-black dark:text-white" />
            }
            popupContent={category}
          />
        )}
        {category === 'Custom Actions' && (
          <Tooltip
            buttonContent={
              <Cog8ToothIcon className="h-8 w-auto cursor-help text-black dark:text-white" />
            }
            popupContent={category}
          />
        )}
      </div>
    </Tile>
  );
}

type PluginsFeaturesProps = {
  PLUGIN_FUSE: Fuse<Plugin>;
  PLUGIN_LIST: Plugin[];
};

export function PluginsGrid({ PLUGIN_FUSE, PLUGIN_LIST }: PluginsFeaturesProps): JSX.Element {
  const {
    content: plugins,
    category,
    search,
    setSearch,
    setQueryParams,
  } = useSearch({
    CATEGORIES: PLUGIN_CATEGORIES,
    CONTENT_FUSE: PLUGIN_FUSE,
    CONTENT_LIST: PLUGIN_LIST,
  });

  return (
    <section className="container flex w-full flex-col p-8">
      <Searchbar
        search={search}
        setSearch={setSearch}
        setQueryParams={setQueryParams}
        category={category}
        CATEGORIES={PLUGIN_CATEGORIES}
        id="plugin"
      />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plugins.map((plugin) => (
          <PluginTile key={plugin.title} {...plugin} />
        ))}
      </div>
    </section>
  );
}
