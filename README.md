# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Deployment (GitHub Pages)

This app auto-deploys to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
on every push to `main` (and via manual run from the Actions tab).

One-time setup in the GitHub repo:

1. Go to **Settings → Pages → Build and deployment**.
2. Set **Source** to **GitHub Actions**.

The site is served at: https://oskarott.github.io/oskott-home/

Because it runs under the `/oskott-home/` subpath, `vite.config.ts` sets
`base: '/oskott-home/'`. The workflow also copies `index.html` to `404.html`
so client-side routes don't return a 404.