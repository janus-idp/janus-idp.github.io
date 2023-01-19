# landing-page

The [Next.js](https://nextjs.org/) app for [janus-idp.io](janus-idp.io).

## How to use the application

### Develop

To develop, run the following command:

```bash
pnpm run -F landing-page dev
```

### Lint

To lint, run the following command:

```bash
pnpm run -F landing-page lint
```

### Build

To build, run the following command:

```bash
pnpm run -F landing-page build
```

### Start

To start a production server, run the following command:

```bash
pnpm run -F landing-page start
```

### Export Static HTML

To export static HTML, run the following command after you build the app:

```bash
pnpm run -F landing-page export
```

## How to add a blog post

1. Create an `.mdx` file in [/pages/blog](https://github.com/janus-idp/janus-idp.github.io/tree/main/apps/landing-page/pages/blog) with the filename as a kebab case version of the title of the blog post.

    `Example blog post title!` to `example-blog-post-title.mdx`

2. Add the frontmatter at the top of the `.mdx` file.

    ```mdx
    ---
    title: Example blog post title!
    date: 2023/01/15
    description: This is the description of the Example blog post!
    ---
    ```

3. After finishing a blog post, double check the syntax highlighting and the formatting of the blog post.

    This application uses [Nextra](https://nextra.site/) on top of [Next.js](https://nextjs.org/) to generate the pages.

    - [Markdown](https://nextra.site/docs/guide/markdown)
    - [Syntax Highlighting](https://nextra.site/docs/guide/syntax-highlighting)
    - [Built-in components](https://nextra.site/docs/docs-theme/built-ins)

4. If your blog post contains images, create a folder in [/public/images](https://github.com/janus-idp/janus-idp.github.io/tree/main/apps/landing-page/public/images) with the same name as the blog post filename. Any images the blog post uses can be stored here.

    Here's an example of a reference to an image in a blog post.

    ```mdx
    ![Example Dashboard](/images/example-blog-post-title/example-dashboard.png)
    ```

5. Update [/pages/blog/_meta.json](https://github.com/janus-idp/janus-idp.github.io/blob/main/apps/landing-page/pages/blog/_meta.json) to include the new blog post.

    To add a new entry, add a key value pair with the key as the filename and the value as the title of the blog post. Each new entry should be added in reverse chronological order.

    Click [here](https://nextra.site/docs/guide/organize-files#_metajson) for more information on `_meta.json`.

## Useful Links

Learn more about Nextra:

- [Introduction](https://nextra.site/docs)
- [Guide](https://nextra.site/docs/guide)
- [Docs Theme](https://nextra.site/docs/docs-theme)
