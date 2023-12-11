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
  plugins: ['eslint-comments', 'promise', 'unicorn', 'license-header'],
  extends: [
    'turbo',
    'airbnb',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
        // SSR does not support useLayoutEffect
        'no-restricted-imports': [
          'error',
          {
            name: 'react',
            importNames: ['useLayoutEffect'],
            message: '`useLayoutEffect` causes a warning in SSR. Use `useEffect`',
          },
        ],
        // Enables for of and for in loops since airbnb does not allow them
        'no-restricted-syntax': 'off',
        // Enforces camelcase
        camelcase: [
          'error',
          {
            ignoreDestructuring: true,
          },
        ],
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        // Does not allow unreachable loops unless its a for of loop
        'no-unreachable-loop': ['error', { ignore: ['ForInStatement', 'ForOfStatement'] }],
        // The default case may not be necessary when explicitly knowing return types
        'default-case': 'warn',
        // Can make ugly code
        'consistent-return': 'off',
        // Can make ugly code
        'no-case-declarations': 'off',
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        'react/jsx-filename-extension': 'off',
        // Allow only arrow function based components
        'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
        // Common practice in React
        'react/jsx-props-no-spreading': 'off',
        // Warn when the index is used as a key instead of a unique value
        'react/no-array-index-key': 'warn',
        // Sometimes its useful to return a useless fragment instead of adding a null as a union type
        'react/jsx-no-useless-fragment': 'warn',
        // Automatic JSX runtime is enabled
        'react/react-in-jsx-scope': 'off',
        // Airbnb prefers forEach
        'unicorn/no-array-for-each': 'off',
        // React prefers capitalized file names for components
        'unicorn/filename-case': 'off',
        // Enables Array.reduce()
        'unicorn/no-array-reduce': 'off',
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        'import/prefer-default-export': 'off',
        // It's not accurate in the monorepo style
        'import/no-extraneous-dependencies': 'off',
        // Import for import of components
        'import/no-cycle': 'off',
        'eslint-comments/disable-enable-pair': 'off',
        'promise/no-nesting': 'off',
        'react/require-default-props': 'off',
        'unicorn/no-abusive-eslint-disable': 'off',
        'eslint-comments/no-unlimited-disable': 'off',
        'unicorn/no-null': 'off',
        'unicorn/prefer-module': 'off',
        'license-header/header': ['error', './license-header.js'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', 'typescript-enum'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // enums are bad https://www.youtube.com/watch?v=jjMbPt_H3RQ
        'plugin:typescript-enum/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 13,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        // It's not accurate in the monorepo style
        'import/no-extraneous-dependencies': 'off',
        // Required for react component imports
        'import/no-named-as-default': 'off',
        // Requires return type
        '@typescript-eslint/explicit-function-return-type': 'error',
        // Allows the use of functions before definition
        '@typescript-eslint/no-use-before-define': ['off'],
        // Allows variables starting with _ to be ignored if not used
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        // Disallows function overloading
        '@typescript-eslint/unified-signatures': 'error',
        // Requires function return types
        '@typescript-eslint/prefer-function-type': 'error',
        // Requires classes to make member access explicit
        '@typescript-eslint/explicit-member-accessibility': 'error',
        // Requires the use of type over interface when possible
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        // Requires consistent type casting
        '@typescript-eslint/consistent-type-assertions': 'error',
        // Requires the T[] type syntax for an array
        '@typescript-eslint/array-type': 'error',
        // Next.js does not require all anchor tags to have an href
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/no-unused-prop-types': 'off',
        'no-case-declarations': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/naming-convention': 'warn',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.mjs'],
      rules: {
        // Allow CJS until ESM support improves
        'unicorn/prefer-module': 'off',
        'unicorn/import-style': 'off',
        'no-param-reassign': 'off',
        'import/extensions': 'off',
      },
    },
    {
      files: ['*.stories.jsx', '*.stories.tsx'],
      rules: {
        'react/function-component-definition': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
      },
    },
    {
      files: ['*.spec.js', '*.spec.ts', '*.spec.jsx', '*.spec.tsx'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
    {
      files: ['.md', '.mdx'],
      extends: ['plugin:mdx/recommended'],
      parserOptions: {
        extensions: ['.md', '.mdx'],
      },
      settings: {
        'mdx/code-blocks': 'error',
      },
    },
  ],
};
