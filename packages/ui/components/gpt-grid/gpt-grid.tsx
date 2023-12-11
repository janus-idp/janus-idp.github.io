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

import Fuse from 'fuse.js';
import { useSearch } from '../../hooks';
import { GPT } from '../../types';
import { Searchbar } from '../searchbar/searchbar';
import { Tile } from '../tile/tile';

type GPTTileProps = GPT;

function GPTTile({ title, description, href }: GPTTileProps): JSX.Element {
  return (
    <Tile href={href}>
      <div>
        <h3>{title}</h3>
        <p className="line-clamp-3">{description}</p>
      </div>
    </Tile>
  );
}

type GPTsFeaturesProps = {
  GPT_FUSE: Fuse<GPT>;
  GPT_LIST: GPT[];
};

export function GPTsGrid({ GPT_FUSE, GPT_LIST }: GPTsFeaturesProps): JSX.Element {
  const {
    content: gpts,
    search,
    setSearch,
  } = useSearch({ CONTENT_FUSE: GPT_FUSE, CONTENT_LIST: GPT_LIST });

  return (
    <section className="container flex w-full flex-col p-8">
      <Searchbar search={search} setSearch={setSearch} id="GPT" />
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {gpts.map((gpt) => (
          <GPTTile key={gpt.title} {...gpt} />
        ))}
      </div>
    </section>
  );
}
