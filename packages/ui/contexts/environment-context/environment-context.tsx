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

// ImageProps line complains
/* eslint-disable @typescript-eslint/indent */

import React, { createContext, type ComponentProps, type FunctionComponent } from 'react';

export type LinkProps = Omit<ComponentProps<'a'>, 'href'> &
  Pick<Required<ComponentProps<'a'>>, 'href'>;

// require src and alt props
export type ImageProps = Omit<ComponentProps<'img'>, 'src' | 'alt'> &
  Pick<Required<ComponentProps<'img'>>, 'src' | 'alt'>;

export const EnvironmentContext = createContext<{
  Link: FunctionComponent<ComponentProps<'a'>>;
  Image: FunctionComponent<ImageProps>;
}>({
  // children will always exist
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  Link: (props) => <a {...props} />,
  // alt will always exist
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props) => <img {...props} />,
});
