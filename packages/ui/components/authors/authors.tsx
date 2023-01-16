/**
 * Copyright 2022 Red Hat, Inc.
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

import Image from 'next/image';
import clsx from 'clsx';
import { JANUS_IDP_TEAM, type AuthorDetails, type Author } from './team';

export function Avatar(props: AuthorDetails): JSX.Element {
  const { name, picture, twitterUsername } = props;

  return (
    <div className="flex items-center flex-shrink-0 md:justify-start">
      <div className="w-[32px] h-[32px]">
        <Image
          src={picture}
          height={32}
          width={32}
          loading="lazy"
          title={name}
          className="w-full rounded-full"
          alt={name}
        />
      </div>
      <dl className="ml-2 text-sm font-medium leading-4 text-left whitespace-no-wrap">
        <dt className="sr-only">Name</dt>
        <dd className="text-gray-900 dark:text-white">{name}</dd>
        {twitterUsername && (
          <>
            <dt className="sr-only">Twitter</dt>
            <dd>
              <a
                href={`https://twitter.com/${twitterUsername}`}
                className="text-xs text-blue-500 no-underline hover:text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`@${twitterUsername}`}
              </a>
            </dd>
          </>
        )}
      </dl>
    </div>
  );
}

export function Authors(props: { authors: Author[] }): JSX.Element {
  const { authors } = props;
  const validAuthors = authors.filter((author) => JANUS_IDP_TEAM[author]);

  return (
    <div className="w-full border-b border-gray-400 authors border-opacity-20">
      <div
        className={clsx(
          'flex flex-wrap justify-center py-8 mx-auto gap-7',
          authors.length > 4 && 'max-w-3xl',
        )}
      >
        {validAuthors.map((username) => (
          <Avatar key={username} {...JANUS_IDP_TEAM[username]} />
        ))}
      </div>
    </div>
  );
}
