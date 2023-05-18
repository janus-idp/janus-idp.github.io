# janus-idp.github.io

This is a monorepo that contains the source code of the community website and automatically deploys to [janus-idp.io](http://www.janus-idp.io).

## Status

[![Deploy the Website to Pages](https://github.com/janus-idp/janus-idp.github.io/actions/workflows/deploy-website.yaml/badge.svg)](https://github.com/janus-idp/janus-idp.github.io/actions/workflows/deploy-website.yaml)
[![Push website](https://github.com/janus-idp/backstage-plugins/actions/workflows/push-website.yaml/badge.svg)](https://github.com/janus-idp/backstage-plugins/actions/workflows/push-website.yaml)

## Prerequisite

* pnpm package manager. [Installation instructions](https://pnpm.io/installation)

## How to run the website locally

### Install the dependencies

After getting the latest website version with `git pull`, you need to install the required dependencies with the following command:

```bash
pnpm i
```

### Start the website locally

Run the following command to start the web server:

```bash
pnpm dev --filter=website
```

## How to update the website

Go to the `apps/website` folder

### Blog

To add or update a blog, you need to go to the `blog` sub folder. The blog must be in Markdown format (MDX).

### Documentation

To add or update documentation, you need to go to the `docs` sub folder. The documentation must be in Markdown format (MD).

### Plugins

To add or update a plugin, you need to edit the `content/plugin-list.ts` file. The content of the plugin page is coming from the README of the plugin itself in the [plugin repo](https://github.com/janus-idp/backstage-plugins/tree/main/plugins).

If you need to change the page template for plugins, you may need to update these files:
* apps/website/docusaurus.config.js
* packages/ui/components/plugin-header/plugin-header.tsx
* packages/ui/types/index.ts

## How to deploy the website

The deployment is automated as soon as a PR is merged. The build takes 2 to 3 minutes to build and deploy.

If you do not see your changes, please refresh the page in your browser.
