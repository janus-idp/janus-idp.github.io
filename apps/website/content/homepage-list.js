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

/** @type {import('ui/types').Homepage[]} */
const HOMEPAGE_LIST = [
  {
    title: 'Golden Path Templates',
    icon: '/images/icon.svg',
    description: 'Provide your developers with Self Service via Golden Path Templates',
    href: '/docs/golden-path-templates',
  },
  {
    title: 'Service Catalog',
    icon: '/images/icon.svg',
    description: 'Service catalog',
    href: '/docs/service-catalog',
  },
  {
    title: 'Plugins',
    icon: '/images/icon.svg',
    description: 'Extend your developer portal with plugins for backstage',
    href: '/docs/plugins',
  },
];

module.exports = HOMEPAGE_LIST;
