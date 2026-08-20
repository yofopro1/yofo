# YoFo Studios

React + Vite foundation for the YoFo Studios gaming database, media, and
community platform. This is the clean base — pages, routing, accounts, the
forum, and the database layer get built on top of this as separate features.

## Structure

```
index.html          entry HTML (mounts #root)
src/
  main.jsx           React entry point
  App.jsx            root component / shell
  style.css          global styles + design tokens (colors, fonts)
  components/        shared, reusable UI pieces (buttons, cards, nav...)
  pages/             route-level views (Home, Games, Community, Admin...)
  hooks/             shared React hooks
  lib/               API clients, helpers, utilities
  assets/            images/icons imported directly into components
public/
  images/            static assets served as-is (logo, favicon, og-image...)
```

`src/assets` is for files you `import` into a component (Vite processes/
hashes them). `public/` is for files referenced by a plain URL path
(`/images/logo.png`) that should be copied as-is — favicons, the logo,
social preview images, etc.

## Design tokens

Defined as CSS variables in `src/style.css`:

- Background: `#000000`
- Text: `#ffffff`
- Accent: `#8700FA`
- Font: Montserrat

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static production build to `dist/`.

## Deploying to Cloudflare Pages

**Option A — Git integration (recommended)**
1. Push this project to a GitHub/GitLab repo.
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages → connect
   the repo.
3. Build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Every push to your main branch redeploys automatically.

**Option B — Direct upload via Wrangler**
```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist
```

No environment variables are required yet. When backend/API features are
added, copy `.env.example` to `.env` and also set the same variables in the
Cloudflare Pages project settings (Settings → Environment variables).
