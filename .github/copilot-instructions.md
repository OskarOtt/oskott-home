# Copilot Instructions — oskott-home

Single-page personal portfolio site: React 19 + TypeScript + Vite, deployed to GitHub Pages (custom domain `oskott.com`, see `CNAME`).

## Commands

- `npm run dev` — start Vite dev server.
- `npm run build` — type-check (`tsc -b`) then `vite build` into `dist/`. This is the CI build step; both must pass.
- `npm run lint` — ESLint over the whole project (flat config, `eslint.config.js`). No file-scoped lint script; run `npx eslint <path>` for a single file.
- `npm run preview` — serve the built `dist/` locally.
- No test suite / test runner exists in this repo.

CI (`.github/workflows/deploy.yml`) runs `npm ci` → `npm run lint` → `npm run build` on every push/PR to `main`/`master`, then deploys `dist/` to GitHub Pages on `main`.

## Architecture

- Single page, scroll-driven, not client-side routed. `src/App.tsx` tracks `window.scrollY` to derive:
  - a `progress` value (0→1) that interpolates the page background color between blue and white as the user scrolls from Home into About, and
  - `activeSection` (`'home' | 'about' | 'projects'`, defined in `src/types.ts`) used to highlight the active nav link in `Header`.
  - All three "pages" (`src/pages/Home.tsx`, `About.tsx`, `Projects.tsx`) are rendered simultaneously inside `<main>` as stacked sections (anchored via `#home`, `#about`, `#projects`), not swapped by a router.
- `src/components/` holds presentational components (`Header`, `Sidebar`, `EducationItem`, `ProjectCard`, `SocialLinks`) consumed by the pages.
- `src/data/` holds static content as typed constants (`contact.ts`, `education.ts`, `projects.ts`) — this is where to edit portfolio content (name, contact info, tech stack, project list) rather than inside components.
- `src/styles/` has one CSS file per component/page (`header.css`, `about.css`, `home.css`, etc.), each imported directly by its component/page file. There is no CSS-in-JS or CSS modules.

## Conventions

- CSS class names follow BEM-ish convention scoped by component, e.g. `about__sidebar`, `about__info-label`, `nav__link`, `header--light`, `is-active` state modifier.
- Static content lives in typed `src/data/*.ts` files (e.g. `PROJECTS: Project[]`, `TECH_STACK`, `CONTACT`); components map over these rather than hardcoding content.
- Asset references use `import.meta.env.BASE_URL` prefix for files served from `public/` (e.g. `${import.meta.env.BASE_URL}logo.png`) so paths work regardless of the deployed base path. Images imported from `src/assets/` (e.g. profile photo) use normal ES imports instead.
- `vite.config.ts` sets `base: '/'` (custom domain via `CNAME`); don't reintroduce a `/oskott-home/` subpath base unless the custom domain setup changes.
