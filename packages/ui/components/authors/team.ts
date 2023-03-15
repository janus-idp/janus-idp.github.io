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

export const JANUS_IDP_TEAM = {
  _div_gupta: {
    name: 'Divyanshi Gupta',
    twitterUsername: '_div_gupta',
    picture: '/images/people/_div_gupta.jpg',
  },
  frmenesesg: {
    name: 'Francisco Meneses',
    twitterUsername: 'frmenesesg',
    picture: '/images/people/frmenesesg.jpg',
  },
  sabre1041: {
    name: 'Andrew Block',
    twitterUsername: 'sabre1041',
    picture: '/images/people/sabre1041.jpg',
  },
  tumido_: {
    name: 'Tom Coufal',
    twitterUsername: 'tumido_',
    picture: '/images/people/tumido_.jpg',
  },
} satisfies Record<string, AuthorDetails>;

export type Author = keyof typeof JANUS_IDP_TEAM;
export type AuthorDetails = {
  name: string;
  twitterUsername?: string;
  picture: string;
};
