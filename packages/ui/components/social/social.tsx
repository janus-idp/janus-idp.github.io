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

import Link from 'next/link';
import React from 'react';
import { type SocialLinkKind, SOCIAL_LINKS } from './social-links';

type SocialProps = {
  social: SocialLinkKind;
};

export function SocialLogo(props: SocialProps): JSX.Element {
  const { social } = props;

  const { Icon, name, href } = SOCIAL_LINKS[social];

  return (
    <Link
      href={href}
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title={`${name} Logo`}
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="h-6 w-auto" />
    </Link>
  );
}

type SocialLinkProps = {
  social: SocialLinkKind;
  text?: string;
};

export function SocialLink(props: SocialLinkProps): JSX.Element {
  const { social, text } = props;

  const { href, name } = SOCIAL_LINKS[social];

  return (
    <Link href={href} className="text-nextra-blue" target="_blank" rel="noreferrer">
      {text || name}
    </Link>
  );
}
