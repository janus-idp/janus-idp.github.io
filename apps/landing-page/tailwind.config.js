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

const merge = require('deepmerge');
const uiTailwindConfig = require('ui/tailwind.config');

// Do not copy the content from ui/tailwind.config.js
uiTailwindConfig.content = [];

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './{pages,components}/**/*.{js,ts,jsx,tsx,md,mdx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = merge(tailwindConfig, uiTailwindConfig);
