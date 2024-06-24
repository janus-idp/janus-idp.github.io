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

import type Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import { StringParam, useQueryParams } from 'use-query-params';
import { type CategoryOptions } from '../../components';
import { Plugin } from '../../types';

export type UseSearch<
  ContentType extends Plugin,
  CategoryType extends CategoryOptions | undefined,
> = {
  content: ContentType[];
  category: CategoryType;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setQueryParams: (
    partial: Partial<{
      category: string | null;
    }>,
  ) => void;
};

type UseSearchArgs<ContentType extends Plugin, CategoryType extends CategoryOptions | undefined> = {
  CATEGORIES?: CategoryType[];
  CONTENT_FUSE: Fuse<ContentType>;
  CONTENT_LIST: ContentType[];
};

export function useSearch<
  ContentType extends Plugin,
  CategoryType extends CategoryOptions | undefined,
>(args: UseSearchArgs<ContentType, CategoryType>): UseSearch<ContentType, CategoryType> {
  const { CATEGORIES, CONTENT_FUSE, CONTENT_LIST } = args;

  // search state cannot be lifted to query params because docusaurus uses react router v5
  // which does not support a shallow updates. i.e. every time the state changes, the page
  // will lose focus on the input field.
  const [queryParams, setQueryParams] = useQueryParams({
    category: StringParam,
  });
  const [search, setSearch] = useState('');

  const category =
    CATEGORIES?.find((element) => element?.slug === queryParams.category) || CATEGORIES?.at(0);

  const content = useMemo(() => {
    let c = CONTENT_LIST;

    if (search !== '') {
      c = CONTENT_FUSE.search(search).map(({ item }) => item);
    }

    if (category !== undefined && !category.name.startsWith('All')) {
      c = c.filter((element) => element.category === category.name);
    }

    return c;
  }, [CONTENT_LIST, search, category, CONTENT_FUSE]);

  return { content, category: category as CategoryType, search, setSearch, setQueryParams };
}
