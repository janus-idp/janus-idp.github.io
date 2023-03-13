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

import { FaGithubAlt as GithubLogo } from 'react-icons/fa';
import {
  BsSlack as SlackLogo,
  BsYoutube as YoutubeLogo,
  BsFillCalendarEventFill as CalendarLogo,
} from 'react-icons/bs';
import { MdEmail as MailLogo } from 'react-icons/md';
import { type IconType } from 'react-icons';

export const SOCIAL_LINKS = {
  slack: {
    Icon: SlackLogo,
    name: 'Slack',
    href: 'https://join.slack.com/t/janus-idp/shared_invite/zt-1pxtehxom-fCFtF9rRe3vFqUiFFeAkmg',
  },
  github: {
    Icon: GithubLogo,
    name: 'GitHub',
    href: 'https://github.com/orgs/janus-idp/repositories',
  },
  youtube: {
    Icon: YoutubeLogo,
    name: 'YouTube',
    href: 'https://www.youtube.com/@januscommunity',
  },
  mailingList: {
    Icon: MailLogo,
    name: 'Community Mailing List',
    href: 'https://groups.google.com/g/janus-idp-community',
  },
  calendar: {
    Icon: CalendarLogo,
    name: 'Community Calender',
    href: 'https://calendar.google.com/calendar/u/0?cid=amFudXMuaWRwLmNvbW11bml0eUBnbWFpbC5jb20',
  },
} satisfies Record<string, SocialLinkDetails>;

export type SocialLinkKind = keyof typeof SOCIAL_LINKS;
export interface SocialLinkDetails {
  Icon: IconType;
  name: string;
  href: string;
}
