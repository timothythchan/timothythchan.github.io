# timothythchan.github.io

Personal website of Timothy Chan, built with [Astro](https://astro.build/) and a
customized [Growing Galaxy](https://github.com/OwenCedaric/GrowingGalaxy) theme
(blog + projects; the gallery and traces sections were removed).

## Development

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:4321
npm run check    # astro + TypeScript diagnostics
npm run build    # production build + Pagefind search index
npm run preview  # preview the production build
```

Requires Node.js >= 22.22.0.

## Structure

- `src/config.ts` — site metadata, navigation, socials, footer
- `src/content/blog/` — blog posts (Markdown / MDX, KaTeX math supported)
- `src/content/projects/` — project entries
- `src/content/pages/about.md` — About page (also feeds the home page intro)

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml),
which builds the site and deploys it to GitHub Pages.

## Credits

Theme: [Growing Galaxy](https://github.com/OwenCedaric/GrowingGalaxy) by
Owen Cedaric, MIT licensed.
