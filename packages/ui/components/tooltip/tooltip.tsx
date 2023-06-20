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

import * as RadixTooltip from '@radix-ui/react-tooltip';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export type TooltipProps = {
  popupContent: React.ReactNode;
  buttonContent: React.ReactNode;
};

export function Tooltip(props: TooltipProps): JSX.Element {
  const { buttonContent, popupContent } = props;

  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (open) {
      controls.start('open').catch(() => {});
    }
  }, [controls, open]);

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root open={open} onOpenChange={setOpen}>
        <RadixTooltip.Trigger asChild>
          <button type="button" className="border-none bg-transparent">
            {buttonContent}
          </button>
        </RadixTooltip.Trigger>

        <AnimatePresence>
          {open && (
            <RadixTooltip.Portal forceMount>
              <RadixTooltip.Content
                asChild
                sideOffset={5}
                className="rounded bg-white px-2 py-1 text-black shadow shadow-black/20 dark:bg-[#1B1B1D] dark:text-white"
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
                  {popupContent}
                  <RadixTooltip.Arrow className="fill-white dark:fill-[#1B1B1D]" />
                </motion.div>
              </RadixTooltip.Content>
            </RadixTooltip.Portal>
          )}
        </AnimatePresence>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
