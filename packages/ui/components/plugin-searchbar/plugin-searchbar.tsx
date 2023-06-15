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

import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Form from '@radix-ui/react-form';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { PluginCategoryKind } from '../../types';

type QueryParams = {
  category: string | null;
};

type PluginCategory = {
  name: PluginCategoryKind | 'All plugins';
  slug: string | null;
};

export const PLUGIN_CATEGORIES: PluginCategory[] = [
  { name: 'All plugins', slug: null },
  { name: 'Frontend', slug: 'frontend' },
  { name: 'Backend', slug: 'backend' },
  { name: 'Custom Actions', slug: 'custom-actions' },
];

export type PluginSearchbarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setQueryParams: (partial: Partial<QueryParams>) => void;
  pluginCategory: PluginCategory;
};

export function PluginSearchbar(props: PluginSearchbarProps): JSX.Element {
  const { search, setSearch, setQueryParams, pluginCategory } = props;

  const searchRef = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    searchRef.current?.focus();
    setQueryParams({ category: pluginCategory.slug });
    /// run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (open) {
      controls.start('open').catch(() => {});
    }
  }, [controls, open]);

  return (
    <Form.Root className="mb-4">
      <Form.Field
        name="plugin-search"
        className="flex rounded-lg shadow shadow-black/20 dark:shadow-black/50"
      >
        <Form.Label className="sr-only">Search plugins</Form.Label>

        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger asChild>
            <button
              aria-label="Select plugin category"
              className="dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 dark:border-pf-cyan-300/30 border-pf-cyan-300/20 text-pf-cyan-300 ring-pf-cyan-300 z-10 flex flex-shrink-0 cursor-pointer items-center justify-between rounded-l-lg border border-solid py-2.5 px-4 text-center text-sm font-medium outline-0 focus:ring-1 sm:w-40"
              type="button"
            >
              <span className="hidden sm:inline-block">{pluginCategory.name} </span>
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>

          <AnimatePresence>
            {open && (
              <DropdownMenu.Portal forceMount>
                <DropdownMenu.Content
                  asChild
                  className="rounded-lg shadow shadow-black/20 dark:bg-[#1B1B1D] dark:shadow-black/50"
                  sideOffset={8}
                >
                  <motion.div
                    initial="closed"
                    animate={controls}
                    exit="closed"
                    variants={{
                      open: {
                        opacity: 1,
                        transition: { ease: 'easeOut', duration: 0.1 },
                      },
                      closed: {
                        opacity: 0,
                        transition: { ease: 'easeIn', duration: 0.2 },
                      },
                    }}
                  >
                    <div className="dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 dark:divide-pf-cyan-300/40 divide-pf-cyan-300/30 border-pf-cyan-300 z-10 w-36 divide-y divide-solid rounded-lg border border-solid py-2">
                      {PLUGIN_CATEGORIES.map(({ name, slug }) => (
                        <DropdownMenu.Item key={name} className="border-0 outline-none">
                          <button
                            type="button"
                            className="text-pf-cyan-300 hover:bg-pf-cyan-300/20 inline-flex w-full cursor-pointer border-0 bg-transparent px-4 py-2 text-sm"
                            onClick={(): void => setQueryParams({ category: slug })}
                          >
                            {name}
                          </button>
                        </DropdownMenu.Item>
                      ))}
                    </div>
                  </motion.div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            )}
          </AnimatePresence>
        </DropdownMenu.Root>

        <div className="relative w-full">
          <input
            type="search"
            ref={searchRef}
            value={search}
            onChange={(e): void => setSearch(e.target.value)}
            id="plugin-search"
            className="text-pf-cyan-300 dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 placeholder-pf-cyan-300 dark:border-pf-cyan-300/30 border-pf-cyan-300/20 ring-pf-cyan-300 outline-pf-cyan-300 outline-solid z-20 block w-full rounded-r-lg border border-x-0 border-solid p-2.5 text-sm outline-0 focus:ring-1"
            placeholder="Search plugins..."
            required
          />
          <div className="border-pf-cyan-300 bg-pf-cyan-300 absolute top-0 right-0 h-[42px] rounded-r-lg border border-solid p-2 text-sm font-medium text-white shadow shadow-black/20 dark:shadow-black/50">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </div>
        </div>
      </Form.Field>
    </Form.Root>
  );
}
