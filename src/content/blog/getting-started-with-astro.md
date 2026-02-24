---
title: "Getting Started with Astro"
description: "A quick-start guide to building fast, content-focused websites with the Astro framework."
date: 2025-01-15
tags: ["Astro", "Web Development", "JavaScript"]
---

Astro is a modern static site builder that ships **zero JavaScript by default**, making it blazing fast.
In this post, we'll walk through setting up your first Astro project.

## Why Astro?

Astro takes a unique "Islands Architecture" approach — only interactive components ship JavaScript.
The result? Incredibly fast page loads, excellent SEO, and a great developer experience.

Key features:
- **Framework-agnostic** — Use React, Vue, Svelte, or no framework at all
- **Content-first** — Perfect for blogs, portfolios, and documentation sites
- **Built-in optimizations** — Image optimization, lazy loading, and more out of the box

## Installation

```bash
npm create astro@latest my-site
cd my-site
npm install
npm run dev
```

## Project Structure

```
my-site/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable UI components
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routing
│   └── content/      # Markdown / MDX content
└── astro.config.mjs  # Astro configuration
```

## Your First Page

Create `src/pages/index.astro`:

```astro
---
// Component script (runs at build time)
const greeting = "Hello, World!";
---

<!-- Template -->
<html>
  <body>
    <h1>{greeting}</h1>
  </body>
</html>
```

That's it! Astro's `.astro` files combine a **frontmatter script block** (between `---`) with an
**HTML-like template**. Any code in the frontmatter runs at build time, so there's no runtime overhead.

## Next Steps

- Explore [Astro's official docs](https://docs.astro.build)
- Add an integration like Tailwind CSS or MDX
- Deploy to GitHub Pages, Netlify, or Vercel

Happy building! 🚀
