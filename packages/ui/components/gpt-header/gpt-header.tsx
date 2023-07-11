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

import React, { useContext } from 'react';
import { EnvironmentContext } from '../../contexts';
import { GPT } from '../../types';

export type GPTHeaderProps = {
  remoteContent: GPT;
};

export function GPTHeader(props: GPTHeaderProps): JSX.Element {
  const { remoteContent } = props;
  const { Link } = useContext(EnvironmentContext);

  return (
    <div className="mb-4 flex flex-col sm:flex-row">
      <div className="flex-1">
        <h1>{remoteContent.title}</h1>
        <p>{remoteContent.description}</p>
      </div>
      <div>
        <Link href={remoteContent.sourceUrl}>Github Repo</Link>
      </div>
    </div>
  );
}
