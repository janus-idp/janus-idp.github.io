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

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { useCallback, useContext } from 'react';
import { EnvironmentContext } from '../../contexts';
import { Plugin } from '../../types';

type PluginTileProps = Plugin;

function PluginTile({ icon, title, description, href }: PluginTileProps): JSX.Element {
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
      className="dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 group relative flex max-w-md flex-col items-center justify-between rounded-xl border border-white/10 p-4 text-center shadow hover:no-underline dark:shadow-2xl"
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
      <div>
        <img className="mb-2 h-[75px] w-[75px]" src={icon} alt={`${title} icon`} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-center pb-4">Learn more!</div>
    </Link>
  );
}

type PluginsFeaturesProps = {
  pluginsList: Plugin[];
};

export function PluginsGrid({ pluginsList }: PluginsFeaturesProps): JSX.Element {
  return (
    <section className="container flex w-full p-8">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pluginsList.map((plugin) => (
          <PluginTile key={plugin.title} {...plugin} />
        ))}
      </div>
    </section>
  );
}
