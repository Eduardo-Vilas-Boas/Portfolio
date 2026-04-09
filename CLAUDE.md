# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:5137
npm run build     # Type-check and build for production (tsc && vite build)
npm run lint      # Lint JS/JSX files (max-warnings 0)
npm run serve     # Preview production build
npm test          # Run Jest tests
```

## Architecture

React + TypeScript SPA built with Vite, deployed to GitHub Pages via HashRouter.

**Routing:** Uses `HashRouter` (not `BrowserRouter`) to support GitHub Pages static hosting. Routes: `/` (Home), `/about` (About), `/resume` (Resume). All unknown routes redirect to `/`.

**Internationalization:** `react-i18next` with `i18next-http-backend`. Translation files live in `public/locales/{en,fr,pt}/{namespace}.json`. Namespaces: `common`, `errors`, `home`, `about`, `navbar`, `footer`, `resume`. Language preference is persisted to `localStorage` under key `"lng"`. Language is initialized in `App.tsx`'s `useEffect`.

**Pages:** `src/pages/` contains `Home/`, `About/`, `Resume/` — each a folder with one or more component files. `src/components/` holds shared components (Navbar, Footer, Particle background, Preloader, ScrollToTop).

**Styling:** Global styles in `src/style.css` and `src/App.css`. Bootstrap 5 via `react-bootstrap`. Component-level CSS files colocated with components.

**No Projects page** — project data is rendered within the Home or About pages, not a separate route.

**Adding/editing content:** Most visible content is driven by translation JSON files in `public/locales/`. Update all three language files (`en`, `fr`, `pt`) when changing user-facing text.
