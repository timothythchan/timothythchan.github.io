# timothythchan.github.io

Personal website of Timothy Chan, built with [Astro](https://astro.build/) and
the [AstroPaper](https://github.com/satnaing/astro-paper) theme.

## Development

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # type-check, build, and generate the Pagefind search index
npm run preview  # preview the production build locally
```

Requires Node.js >= 22.23.4.

## Configuration

Site metadata, social links, and feature flags live in
[`astro-paper.config.ts`](./astro-paper.config.ts). Pages are in `src/content/pages/`
and blog posts in `src/content/posts/`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds the
site and deploys it to GitHub Pages.

## Credits

Theme: [AstroPaper](https://github.com/satnaing/astro-paper) by
[Sat Naing](https://satna.ing), MIT licensed.
