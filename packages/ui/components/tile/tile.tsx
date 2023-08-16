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
import React, { useCallback, useContext, type PropsWithChildren } from 'react';
import { EnvironmentContext } from '../../contexts';

export type TileProps = {
  href: string;
};

export function Tile({ href, children }: PropsWithChildren<TileProps>): JSX.Element {
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
      className="dark:border-pf-cyan-300/30 border-pf-cyan-300/20 dark:bg-pf-cyan-300/[0.15] bg-pf-cyan-50 dark:shadow-2x ring-pf-cyan-300 @container/tile group relative flex flex-col items-center justify-between rounded-xl border border-solid shadow shadow-black/20 outline-0 transition-shadow hover:no-underline hover:shadow-md focus:ring-1 dark:shadow-black/50"
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
      <div className="@sm/tile:px-8 @sm/tile:py-6 container flex h-full flex-col justify-between px-4 py-3">
        {children}
      </div>
    </Link>
  );
}
