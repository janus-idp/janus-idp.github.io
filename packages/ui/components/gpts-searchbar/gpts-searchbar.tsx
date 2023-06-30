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

import * as Form from '@radix-ui/react-form';
import React, { useEffect, useRef } from 'react';

export type GPTSearchbarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export function GPTSearchbar(props: GPTSearchbarProps): JSX.Element {
  const { search, setSearch } = props;
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    searchRef.current?.focus();
    /// run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form.Root className="mb-4">
      <Form.Field
        name="gpt-search"
        className="flex rounded-lg shadow shadow-black/20 dark:shadow-black/50"
      >
        <Form.Label className="sr-only">Search GPTs</Form.Label>
        <div className="relative w-full">
          <input
            type="search"
            ref={searchRef}
            value={search}
            onChange={(e): void => setSearch(e.target.value)}
            id="gpt-search"
            className="text-pf-cyan-300 dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 placeholder-pf-cyan-300 dark:border-pf-cyan-300/30 border-pf-cyan-300/20 ring-pf-cyan-300 outline-pf-cyan-300 outline-solid z-20 block w-full rounded-r-lg border border-x-0 border-solid p-2.5 text-sm outline-0 focus:ring-1"
            placeholder="Search GPTs..."
            required
          />
        </div>
      </Form.Field>
    </Form.Root>
  );
}
