# seth-woo.github.io

Personal/Academic website for Seth Woo. This repository combines a Hugo site (PaperMod theme) with a small Vite + React app used for the ASCII overlay experience, all deployed to GitHub Pages.

## Introduction

+ Purpose of the website is to showcase (but not limited to):
  * My updated Curriculum Vitae
  * My Socials
  * Relevant news/updates
  * Courses that I've taken/currently taking/currently teaching
  * Projects old/new
  * Publications (conference papers, journal papers, workshop, preprints, etc.)  AND
  * My Obsidian Vault, hosted as a functional website (I've termed this :re garden for now) on GitHub Pages with the help of Quartz 4 (https://quartz.jzhao.xyz/)
+ It serves as a personal portfolio for all things ME :D
+ The website is built with Hugo v0.147.2 via GitHub Actions, and hosted on GitHub Pages.

**Quick links**

- Site config: `config.yml`
- Hugo content: `content/`
- Theme: `themes/PaperMod/`
- Vite app: `ascii-overlay/`
- Vite build output (checked in): `static/vite/`

**Tech stack**

- Hugo (extended) for static site generation
- PaperMod theme
- Vite + React for the ASCII overlay
- GitHub Actions for CI/CD
- GitHub Pages for hosting

**Build & deploy overview**

- Vite app builds to `static/vite/` and is served by Hugo as static assets.
- Hugo renders the site to `public/`.
- GitHub Actions builds on every push to `main` and deploys to GitHub Pages.

**Local development**

1. Install Hugo (extended) and Node.js.
2. Install Vite app dependencies: `cd ascii-overlay` then `npm install`.
3. Run the ASCII overlay app in dev mode: `npm run dev`.
4. In a separate terminal, run Hugo locally: `hugo server -D`.

**Full build (matching CI)**

1. Build the Vite app: `cd ascii-overlay` then `npm run build`.
2. Build the Hugo site: `hugo --minify`.
3. The generated site is in `public/`.

**Repository structure**

- `archetypes/`: Hugo content templates
- `assets/`: Hugo Pipes assets (processed during build)
- `content/`: Markdown content for pages and sections
- `layouts/`: Hugo layout overrides
- `static/`: Static files served as-is
- `static/vite/`: Compiled Vite bundle (ASCII overlay)
- `themes/PaperMod/`: Theme source
- `ascii-overlay/`: Vite + React source
- `public/`: Hugo build output (generated)

**Versioning**

- Site releases are implicitly versioned by git commits on `main`.
- CI pins Hugo to `0.147.2` (see `.github/workflows/hugo.yml`).
- The Vite app declares `version: 0.0.0` in `ascii-overlay/package.json`.
- Frontend toolchain versions are locked by `ascii-overlay/package-lock.json`.

**Notes**

- The Vite build config outputs a deterministic bundle (`static/vite/vite.js` and `static/vite/vite.css`) to keep the Hugo integration simple.
- If you change the Vite app, re-run its build so the Hugo site picks up the updated bundle.

## Credits

This project is based on the template provided by [hugo-website](https://github.com/pmichaillat/hugo-website).

## License

This repository is licensed under the [MIT License](LICENSE.md).
