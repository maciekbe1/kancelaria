# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for a Polish law firm (kancelaria). Static-export Next.js site deployed on Vercel. Content is in Polish.

## Commands

Package manager: **pnpm** (lockfile is `pnpm-lock.yaml`). Node 22 (`.nvmrc`).

- `pnpm dev` - dev server at http://localhost:3000
- `pnpm build` - production build
- `pnpm lint` / `pnpm lint:fix` - ESLint over `.{js,jsx,ts,tsx}`
- `pnpm prettier` / `pnpm prettier:fix` - Prettier check/format
- `pnpm fix` - prettier + eslint fix combo

No test runner is configured.

## Architecture

**Next.js 13 Pages Router** (not App Router) with TypeScript strict mode.

- `src/pages/` - routes (`index`, `specjalizacje`, `zespol`, `privacy-policy`) plus `_app.tsx` and `_document.tsx`. `_document.tsx` sets `lang="pl"`.
- `src/components/` - one folder per component; `src/components/index.ts` is the barrel re-exporting the public surface. Import from `"components"` rather than reaching into subpaths.
- `src/hooks/`, `src/constants/`, `src/icons/`, `src/styles/` - shared utilities and assets.
- `next.config.js` sets `images.unoptimized: true` (required for static export; use plain `<img>` or `next/image` accordingly).

**Path aliases:** `tsconfig.json` maps `"*": ["./src/*"]`, so imports look like `import { Layout } from "components"` and `import useHeaderState from "hooks/useHeaderState"` - no `@/` prefix, no relative paths into `src`.

**Layout shell:** `pages/_app.tsx` wraps every page in `<Styles />` (injects Google Fonts CSS variables) and `<Layout>` (renders `<Meta />`, `<Header />`, `<main>`, `<Footer />`). New pages should just export their content - the chrome is handled globally.

**Header behavior:** `useHeaderState` exposes `isViewportScrolled` and `isMobile`; `Layout` uses it to animate the negative top-margin on `<main>`. If you change header height, update the `-mt-[64px]` / `-mt-[86px]` classes in `Layout.tsx` together with the header itself.

**Styling stack:** Tailwind + daisyUI + `@tailwindcss/forms`. Custom theme additions in `tailwind.config.js`:
- Fonts wired through CSS vars (`--lora-font`, `--open-sans-font`, `--domine-font`, `--raleway-font`) set by `components/Styles/Styles.tsx` using `next/font/google`. Reference via `font-sans` / `font-serif` / `font-domine` / `font-raleway`.
- Custom `gold: #D4AF37` color, `header-sm/md/xl` font sizes, `xs` max-width screen, and a custom `.container` component with explicit max-widths per breakpoint (overrides Tailwind's default container).

**Constants:** Phone numbers, address, and structured `officeAddress` (for schema.org SEO) live in `src/constants/index.ts`. Reuse these instead of hardcoding contact info in components.

**Client-only components:** Heavy/interactive components like `AgentSwiper` are loaded via `next/dynamic` from `pages/index.tsx`. Follow the same pattern for anything that pulls in large client-side libs (e.g. `swiper`, `framer-motion`).

## Conventions

- ESLint enforces `@typescript-eslint/no-unused-vars` and `no-explicit-any` as **errors** - no `any`, no dead vars.
- Prettier is enforced through ESLint (`prettier/prettier: error`).
- User-facing strings are Polish; preserve diacritics.
