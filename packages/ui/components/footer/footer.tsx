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
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { ThemeSwitch } from 'nextra-theme-docs';
import { JanusLogo } from '../janus-logo/janus-logo';

interface FooterLinkProps {
  href: string;
}

function FooterLink(props: React.PropsWithChildren<FooterLinkProps>): JSX.Element {
  const { href, children } = props;

  const classes =
    'text-sm text-[#666666] dark:text-[#888888] no-underline hover:text-gray-700 hover:dark:text-white transition';
  if (href.startsWith('http')) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterHeader(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  return <h3 className="text-sm text-black dark:text-white">{children}</h3>;
}

const navigation = {
  general: [
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@januscommunity'
    },
  ],
  support: [
    {
      name: 'GitHub',
      href: 'https://github.com/orgs/janus-idp/repositories',
    },
    {
      name: 'Slack',
      href: 'https://join.slack.com/t/janus-idp/shared_invite/zt-1nii16o6e-SGscZ4YtAktL6rRtZZBUfA',
    },
  ],
};

export function FooterContent(): JSX.Element {
  return (
    <div className="w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="w-full py-8 mx-auto">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8">
              <div className="mt-12 md:mt-0">
                <FooterHeader>Resources</FooterHeader>
                <ul className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.general.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeader>Support</FooterHeader>
                <ul className="mt-4 space-y-1.5 list-none ml-0">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <a
              className="text-current"
              target="_blank"
              rel="noopener noreferrer"
              title="janus-idp.io homepage"
              href="/"
            >
              <JanusLogo />
            </a>
            <p className="mt-4 text-xs text-gray-500 dark:text-[#888888]">
              &copy; {new Date().getFullYear()} Janus Authors. All rights reserved. <br />
              Apache License 2.0 open source project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FooterProps {
  menu?: boolean;
}

export function Footer(props: FooterProps): JSX.Element {
  const { menu } = props;

  return (
    <footer className="bg-[#FAFAFA] pb-[env(safe-area-inset-bottom)] relative dark:bg-[#111111]">
      <div className="absolute top-0 h-12 w-full -translate-y-full bg-gradient-to-t from-[#FAFAFA] to-transparent dark:from-black pointer-events-none" />
      <div className={clsx('mx-auto max-w-[90rem] py-2 px-4 flex gap-2', menu ? 'flex' : 'hidden')}>
        <ThemeSwitch />
      </div>
      <hr className="dark:border-neutral-800" />
      <div
        className={clsx(
          'mx-auto max-w-[90rem] py-12 flex justify-center md:justify-center text-black dark:text-white',
          'pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]',
        )}
      >
        <FooterContent />
      </div>
    </footer>
  );
}
