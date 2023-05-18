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
import { Plugin } from '../../types';

export type PluginHeaderProps = {
  plugin: Plugin;
};

export function PluginHeader(props: PluginHeaderProps): JSX.Element {
  const { plugin } = props;

  const { Link } = useContext(EnvironmentContext);

  return (
    <div className="flex flex-col sm:flex-row mb-4">
      <img src={plugin?.icon} alt={plugin?.title} className="h-32 w-auto sm:mr-4" />
      <div className="flex-1">
        <h1>{plugin.title}</h1>
        <p>{plugin.description}</p>
      </div>
      <div>
        <Link href={plugin.npmUrl}>NPM</Link>
      </div>
    </div>
  );
}
