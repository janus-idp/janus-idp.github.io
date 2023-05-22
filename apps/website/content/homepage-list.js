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
    icon: '/images/janus-gpt-image.png',
    description: 'Provide your developers with Self Service via Golden Path Templates',
    href: '/docs/golden-path-templates',
  },
  {
    title: 'Plugins',
    icon: '/images/janus-plugin.png',
    description: 'Extend your developer portal with plugins for backstage',
    href: '/docs/plugins',
  },
  {
    title: 'Service Catalog',
    icon: '/images/janus-hero-image.png',
    description: 'Service catalog',
    href: '/docs/service-catalog',
  },
];

module.exports = HOMEPAGE_LIST;
