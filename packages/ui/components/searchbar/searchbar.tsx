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
import { CategoryOptions } from './types';

type SearchbarCategoryProps<T extends CategoryOptions> = {
  category: T;
  setQueryParams: (
    partial: Partial<{
      category: string | null;
    }>,
  ) => void;
  CATEGORIES: { name: string; slug: string | null }[];
};

export type SearchbarProps<T extends CategoryOptions | undefined> = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  id: string;
} & (T extends CategoryOptions
  ? SearchbarCategoryProps<T>
  : Partial<SearchbarCategoryProps<CategoryOptions>>);

function hasCategories(
  props: SearchbarProps<CategoryOptions | undefined>,
): props is SearchbarProps<CategoryOptions> {
  if (props.category === undefined) {
    return false;
  }

  if (props.setQueryParams === undefined) {
    return false;
  }

  if (props.CATEGORIES === undefined) {
    return false;
  }

  return true;
}

export function Searchbar<T extends CategoryOptions | undefined>(
  props: SearchbarProps<T>,
): JSX.Element | null {
  const { search, setSearch, id } = props;

  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    searchRef.current?.focus();
    if (hasCategories(props)) {
      const { setQueryParams, category } = props;

      setQueryParams({ category: category.slug });
    }
    /// run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Form.Root className="mb-4">
      <Form.Field
        name={`${id}-search`}
        className="flex rounded-lg shadow shadow-black/20 dark:shadow-black/50"
      >
        <Form.Label className="sr-only">Search {id}s</Form.Label>

        {hasCategories(props) ? (
          <SearchbarDropdown {...props} />
        ) : (
          <div className="dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 dark:border-pf-cyan-300/30 border-pf-cyan-300/20 text-pf-cyan-300 ring-pf-cyan-300 z-10 flex flex-shrink-0 items-center justify-between rounded-l-lg border border-solid px-4 py-2.5 text-center text-sm font-medium outline-0 focus:ring-1 sm:w-40">
            All {id}s
          </div>
        )}

        <div className="relative w-full">
          <input
            type="search"
            ref={searchRef}
            value={search}
            onChange={(e): void => setSearch(e.target.value)}
            id={`${id}-search`}
            className="text-pf-cyan-300 dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 placeholder-pf-cyan-300 dark:border-pf-cyan-300/30 border-pf-cyan-300/20 ring-pf-cyan-300 outline-pf-cyan-300 outline-solid z-20 block w-full rounded-r-lg border border-x-0 border-solid p-2.5 text-sm outline-0 focus:ring-1"
            placeholder={`Search ${id}s...`}
            required
          />
          <div className="border-pf-cyan-300 bg-pf-cyan-300 absolute right-0 top-0 h-[42px] rounded-r-lg border border-solid p-2 text-sm font-medium text-white shadow shadow-black/20 dark:shadow-black/50">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </div>
        </div>
      </Form.Field>
    </Form.Root>
  );
}

function SearchbarDropdown<T extends CategoryOptions>(props: SearchbarProps<T>): JSX.Element {
  const { category, setQueryParams, CATEGORIES, id } = props;

  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (open) {
      controls.start('open').catch(() => {});
    }
  }, [controls, open]);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label={`Select ${id} category`}
          className="dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 dark:border-pf-cyan-300/30 border-pf-cyan-300/20 text-pf-cyan-300 ring-pf-cyan-300 z-10 flex flex-shrink-0 cursor-pointer items-center justify-between rounded-l-lg border border-solid px-4 py-2.5 text-center text-sm font-medium outline-0 focus:ring-1 sm:w-40"
          type="button"
        >
          <span className="hidden sm:inline-block">{category.name}</span>
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
                  {CATEGORIES.map(({ name, slug }) => (
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
  );
}
