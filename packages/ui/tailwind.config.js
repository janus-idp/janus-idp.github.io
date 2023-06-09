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

module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pf-black': {
          100: '#FAFAFA',
          150: '#F5F5F5',
          200: '#F0F0F0',
          300: '#D2D2D2',
          400: '#B8BBBE',
          500: '#8A8D90',
          600: '#6A6E73',
          700: '#4F5255',
          800: '#3C3F42',
          850: '#212427',
          900: '#151515',
          1000: '#030303',
        },
        'pf-blue': {
          50: '#E7F1FA',
          100: '#BEE1F4',
          200: '#73BCF7',
          300: '#2B9AF3',
          400: '#0066CC',
          500: '#004080',
          600: '#002952',
          700: '#001223',
        },
        'pf-green': {
          50: '#F3FAF2',
          100: '#BDE5B8',
          200: '#95D58E',
          300: '#6EC664',
          400: '#5BA352',
          500: '#3E8635',
          600: '#1E4F18',
          700: '#0F280D',
        },
        'pf-cyan': {
          50: '#F2F9F9',
          100: '#A2D9D9',
          200: '#73C5C5',
          300: '#009596',
          400: '#005F60',
          500: '#003737',
          600: '#002323',
          700: '#000F0F',
        },
        'pf-purple': {
          50: '#F2F0FC',
          100: '#CBC1FF',
          200: '#B2A3FF',
          300: '#A18FFF',
          400: '#8476D1',
          500: '#6753AC',
          600: '#40199A',
          700: '#1F0066',
        },
        'pf-light-blue': {
          100: '#BEEDF9',
          200: '#7CDBF3',
          300: '#35CAED',
          400: '#00B9E4',
          500: '#008BAD',
          600: '#005C73',
          700: '#002D39',
        },
        'pf-gold': {
          50: '#FDF7E7',
          100: '#F9E0A2',
          200: '#F6D173',
          300: '#F4C145',
          400: '#F0AB00',
          500: '#C58C00',
          600: '#795600',
          700: '#3D2C00',
        },
        'pf-light-green': {
          100: '#E4F5BC',
          200: '#C8EB79',
          300: '#ACE12E',
          400: '#92D400',
          500: '#6CA100',
          600: '#486B00',
          700: '#253600',
        },
        'pf-orange': {
          50: '#FFF6EC',
          100: '#F4B678',
          200: '#EF9234',
          300: '#EC7A08',
          400: '#C46100',
          500: '#8F4700',
          600: '#773D00',
          700: '#3B1F00',
        },
        'pf-red': {
          50: '#FAEAE8',
          100: '#C9190B',
          200: '#A30000',
          300: '#7D1007',
          400: '#470000',
          500: '#2C0000',
        },
      },
    },
  },
  plugins: [],
};
