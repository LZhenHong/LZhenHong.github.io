# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project overview

Static site hosted on GitHub Pages at `https://lzhenhong.github.io`. Its sole
purpose is to serve the **Support URL** and **Privacy Policy URL** that App
Store Connect requires for each of the author's apps. There is one content
folder per app, each holding a support page and a privacy policy written in
Markdown (kept readable directly in the GitHub UI).

The site is multilingual: **English (`en`) is the default and required
locale**, with `zh-cn` and `zh-tw` translations. The default locale is served
unprefixed (`/apps/<slug>/`); other locales are prefixed
(`/zh-cn/apps/<slug>/`). A page missing its translation falls back to the
English content under the localized URL.

- Framework: [Astro](https://astro.build) 7 (`astro` is the only dependency).
- Output: fully static HTML in `dist/`, **no client-side JavaScript**.
- Styling: a single hand-written stylesheet (`src/styles/main.css`), light/dark
  aware via `prefers-color-scheme`, inlined into each page at build time.
- TypeScript: `astro/tsconfigs/strict` (see `tsconfig.json`); used only for the
  small amount of frontmatter code in `.astro` files and `src/*.ts`.
- `astro.config.mjs` only sets `site: 'https://lzhenhong.github.io'`.

Historical note: the author's previous Gridea blog lives on the `master`
branch; this site is developed on `main`.

## Repository layout

```
src/
  i18n.ts                  Locale list, UI strings, URL helpers (single source for i18n)
  lib/content.ts           Collection queries + locale fallback (getAppPageProps, getAppCards)
  content.config.ts        Astro content collection definition (the "apps" collection)
  content/apps/<app-slug>/
    en/support.md          Support page source (required)   -> /apps/<app-slug>/
    en/privacy.md          Privacy policy source (required) -> /apps/<app-slug>/privacy/
    zh-cn/support.md       Simplified Chinese (optional)    -> /zh-cn/apps/<app-slug>/
    zh-cn/privacy.md                                       -> /zh-cn/apps/<app-slug>/privacy/
    zh-tw/...              Traditional Chinese (optional)   -> /zh-tw/apps/<app-slug>/...
  pages/index.astro        Default-locale landing
  pages/[locale]/index.astro          Localized landings (zh-cn, zh-tw)
  pages/apps/[...slug].astro          Default-locale app pages
  pages/[locale]/apps/[...slug].astro Localized app pages
  components/Landing.astro Landing page body (shared by the two landing routes)
  components/AppPage.astro Support/privacy page body (shared by the two app routes)
  layouts/Base.astro       HTML shell (<head>, meta, language switcher)
  styles/main.css          Shared styles, CSS custom properties for theming
templates/app/             Copy this folder when adding a new app (en/zh-cn/zh-tw)
.github/workflows/deploy.yml Push to main -> build -> deploy to Pages
public/.nojekyll           Disables Jekyll processing on GitHub Pages
```

Content entry ids look like `<app-slug>/<locale>/<kind>` (e.g.
`americano/zh-cn/support`). Routing is locale-aware: `en` pages are served at
unprefixed URLs so existing App Store Connect links never change; `zh-cn` /
`zh-tw` pages live under their locale prefix. Route files are thin wrappers —
page bodies and path generation are shared via `src/components/` and
`src/lib/content.ts`, so a routing change is made in exactly one place.

## Build and dev commands

Requires Node.js >= 22.12 (CI uses Node 24).

```
npm install        # or npm ci
npm run dev        # local dev server with hot reload
npm run build      # outputs the static site to dist/
npm run preview    # serve dist/ locally
```

There are **no tests, no linter, and no formatter** configured in this project.
Verification is: `npm run build` must succeed, plus a visual check via
`npm run dev` / `npm run preview`. Keep it that way unless explicitly asked.

## Content conventions

Every markdown file under `src/content/apps/` starts with YAML front matter
validated by a Zod schema in `src/content.config.ts`:

```
---
title: Example App — Support      # page <title>
description: Technical support…   # meta description
app: Example App                  # display name (cards, back-links)
kind: support                     # support | privacy
---
```

`title`, `app`, and `kind` are required; `description` defaults to `''`.
Breaking the schema fails the build, so `npm run build` doubles as content
validation.

Locale rules:

- `en` is **required** for every app — it is the fallback when a translation
  is missing. An app without `en/` files produces no pages at all.
- `zh-cn` and `zh-tw` are optional; add them per app as needed.
- `app` stays identical across locales (it is a brand name).
- Links between an app's own pages (e.g. support -> privacy) must stay within
  the same locale: `/zh-cn/apps/<slug>/privacy/`, not `/apps/<slug>/privacy/`.
- UI chrome (site title, back-links, card labels, language switcher) is
  translated in `src/i18n.ts`, not in the markdown.

### Adding a new app

1. `cp -r templates/app src/content/apps/<app-slug>` — slug is lowercase and
   hyphenated (e.g. `my-cool-app`). The template carries `en/`, `zh-cn/`, and
   `zh-tw/` folders; delete the locale folders you don't intend to maintain.
2. Edit `support.md` and `privacy.md` in each locale you keep: replace
   `[App Name]`, `[app-slug]`, `[Effective Date]`, and `support@example.com`,
   and make every privacy section match what the app **actually** does (data
   collection, third-party SDKs, retention). The template is a starting point,
   not legal advice.
3. Preview with `npm run dev`; the landing pages pick up the new app
   automatically (no manual registration anywhere).
4. The App Store Connect URLs for the app are:
   - Support URL: `https://lzhenhong.github.io/apps/<app-slug>/`
   - Privacy Policy URL: `https://lzhenhong.github.io/apps/<app-slug>/privacy/`

`src/content/apps/example/` is a filled-in sample derived from the template
(English only, demonstrating the fallback for untranslated locales).

## Code style

- Language of code, comments, and docs: English.
- `.astro` files: frontmatter script at the top, markup below; pages compose
  `layouts/Base.astro` and the shared components rather than duplicating markup.
- CSS: theme values live as CSS custom properties in `:root` (with a
  `prefers-color-scheme: dark` override); 4-space indentation in
  `src/styles/main.css`. Prefer adding a rule there over inline styles.
- Keep the site static: do not add client-side JavaScript, UI frameworks, or
  new dependencies without an explicit reason — the current design goal is
  plain HTML + inlined CSS.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main` (and via
`workflow_dispatch`): `npm ci` → `npm run build` → upload `dist/` →
`actions/deploy-pages`. One-time repo setup: **Settings → Pages → Source** must
be **GitHub Actions**. There is no other release process; merging/pushing to
`main` *is* the release.

## Security considerations

- Content is legal-facing: privacy policies must truthfully describe each app's
  data practices. Never invent data-collection claims; when unsure, flag it to
  the author instead of guessing.
- No secrets, credentials, or backend exist in this repo; do not add any.
- Contact email addresses in the markdown are public once deployed — use only
  addresses the author actually monitors.
