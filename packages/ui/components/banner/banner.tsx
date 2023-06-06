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

import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

export type BannerProps = {
  debug?: boolean;
};

export function Banner(props: BannerProps): JSX.Element {
  const { debug } = props;

  const [cookies, setCookie] = useCookies(['banner-state']);

  useEffect(() => {
    if (debug) {
      setCookie('banner-state', 'open');
    }
    // run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={clsx(
        'border-solid border-x-0 border-t-2 border-b-[1px] border-b-pf-black-300 border-t-pf-red-100 flex justify-between gap-x-6 bg-pf-red-50 px-6 py-2.5 sm:px-3.5',
        cookies['banner-state'] === 'closed' && 'hidden',
      )}
    >
      <div className="hidden 2xl:block" />
      <div className="text-pf-red-300 max-w-screen-2x font-semibold text-sm flex">
        <ExclamationCircleIcon className="text-pf-red-100 h-5 w-5 mr-2 flex-none" />
        <div>
          Our Janus Showcase application is currently unavailable. We anticipate it back up and
          running by Tuesday, June 20th at the latest. We apologize for the inconvenience.
        </div>
      </div>

      <button
        type="button"
        className="border-none bg-inherit cursor-pointer"
        onClick={(): void => {
          setCookie('banner-state', 'closed');
        }}
      >
        <span className="sr-only">Dismiss</span>
        <XMarkIcon className="h-5 w-5 text-pf-black-600" aria-hidden="true" />
      </button>
    </div>
  );
}
