# janus-idp.github.io

This is an monorepo that automatically deploys to [janus-idp.io](janus-idp.io).

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- [`landing-page`](https://github.com/janus-idp/janus-idp.github.io/tree/main/apps/landing-page): The [Next.js](https://nextjs.org/) app for [janus-idp.io](janus-idp.io)
- [`ui`](https://github.com/janus-idp/janus-idp.github.io/tree/main/packages/ui): a stub React component library shared any applications in `/apps`
- [`eslint-config-custom`](https://github.com/janus-idp/janus-idp.github.io/tree/main/packages/eslint-config-custom): `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- [`tsconfig`](https://github.com/janus-idp/janus-idp.github.io/tree/main/packages/tsconfig): `tsconfig.json`s used throughout the monorepo

### Install dependencies

To install the dependencies, run the following command:

```bash
pnpm install
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm run dev
```

### Lint

To lint all apps and packages, run the following command:

```bash
pnpm run lint
```

### Build

To build all apps and packages, run the following command:

```bash
pnpm run build
```

### Fix dependency mismatches

To fix the dependency mismatches between workspaces, run the following command:

```bash
pnpm check-dependency-version-consistency . --fix
```

### Delete `node_modules` folders

To delete all the `node_modules` folders in the workspace, run the following command:

```bash
npx npkill
```

## Useful Links

Learn more about pnpm:

- [Installation](https://pnpm.io/installation)
- [Filtering packages](https://pnpm.io/filtering)

Learn more about Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
