# Bingo Card Maker

Free web app for creating, customizing, and printing custom bingo cards as PDFs. Live at [makebingocard.com](https://makebingocard.com).

## Stack

- **Vite + React** (JSX, no router — single-page app)
- **Tailwind CSS** for styling
- **@react-pdf/renderer** for generating the printable PDF cards
- **@emailjs/browser** for the in-app bug report form
- Deployed as an **Azure Static Web App** (`.github/workflows/azure-static-web-apps-*.yml` builds and deploys on push; the committed `dist/` folder in git is stale/unused — Azure builds from source)

## Commands

```bash
npm run dev      # start local dev server
npm run build    # production build to dist/, then generates the static template pages
npm run lint     # eslint (must pass with zero warnings)
```

## How it's structured

Entry point: `src/main.jsx` → `src/App.jsx`.

Core flow: [`PhraseInput`](src/components/PhraseInput.jsx) (enter/select phrases) → [`GridConfiguration`](src/components/GridConfiguration.jsx) (grid size, copies, etc.) → [`PDFSection`](src/components/PDFSection.jsx) (lazy-loaded — wraps [`PDFGenerator`](src/components/PDFGenerator.jsx) → [`BingoDocument`](src/components/BingoDocument.jsx), the actual PDF layout) → [`PDFPreview`](src/components/PDFPreview.jsx) (preview modal + [`CardCustomization`](src/components/CardCustomization.jsx) sidebar for colors/fonts/themes).

State lives in two hooks:
- [`usePhraseManager`](src/hooks/usePhraseManager.js) — phrase input state, reading the **templates** from [`src/data/templates.js`](src/data/templates.js) (see below)
- [`useBingoConfiguration`](src/hooks/useBingoConfiguration.js) — grid size, copies, colors, fonts, and every other PDF customization option

`@react-pdf/renderer` is a large dependency (~1.4MB), so `PDFSection` is loaded via `React.lazy()` behind a `Suspense` boundary in `App.jsx` rather than imported at the top level — this keeps it out of the initial page bundle.

## Templates vs. themes

These are two distinct concepts, both selectable in the UI, easy to confuse:

- **Templates** = pre-written phrase sets in [`src/data/templates.js`](src/data/templates.js), a couple of hundred of them and growing (`npm run build` prints the current count), covering things like book/movie lists, seasonal activities, travel destinations, etc. Each one lives at `/templates/<slug>` (the older `?template=<slug>` query param still loads one too), and each is its own indexable landing page with a static, crawler-readable version in `dist/templates/<slug>/index.html`.
- **Themes** = visual color/gradient presets (Christmas, Ocean, Midnight, etc.) in [`src/utils/themes.js`](src/utils/themes.js), applied via `CardCustomization`.

### Adding a new template

Three files, then the build does the rest.

1. [`src/data/templates.js`](src/data/templates.js) — add the slug to `templateTitles` (the suggested card title, house style is `"... Bingo!"`) and to `samplePhrases` (the phrase list, same key). Write at least 25 phrases: a 5×5 card needs 24 with a free space and 25 without, and extra phrases are what make a stack of copies differ from each other.
2. [`src/data/templateContent.js`](src/data/templateContent.js) — add the SEO content under the same slug: `intro` (50 to 100 words), exactly 4 `faq` `{ q, a }` pairs, and 5 or more `related` slugs. The formula and voice rules are documented at the top of that file. A slug with no entry here still works in the app but gets no static page and no sitemap entry, so it is effectively unpublished.
3. [`src/components/PhraseInput.jsx`](src/components/PhraseInput.jsx) — surface it in the picker. Most categories are hardcoded `<button>` JSX, so add one next to similar templates; travel, books and US states instead read the `travelOptions` / `bookOptions` / `stateOptions` arrays at the top of the file (travel and states are alphabetical).

`npm run build` then runs [`scripts/generate-template-pages.js`](scripts/generate-template-pages.js), which writes the static template page, regenerates `public/sitemap.xml` and `public/.well-known/llms.txt`, and re-renders the homepage with a link to every template. Never hand-edit those three generated files. The script also validates the new entry and fails the build on a missing title, an empty phrase list, a missing intro, an `faq` that is not exactly 4 pairs, fewer than 5 `related` slugs, or a `related` slug that has no content of its own to link to.

Optional: [`src/data/popularTemplates.js`](src/data/popularTemplates.js) is the homepage "Most popular" row. Keep it to three slugs.

### Adding a new theme

Add an entry to the `themes` array in `src/utils/themes.js` following the existing shape (font/color fields — see any existing theme for the full field list).

## SEO

- `public/robots.txt`, plus `public/sitemap.xml` and `public/.well-known/llms.txt` (both generated at build time, homepage + every published template URL)
- `public/ads.txt` authorizes the AdSense publisher ID
- Per-page meta tags (title/description/canonical/OG) are set client-side in `App.jsx` based on the current template; `og:image`/`twitter:image` point at the static `public/og-image.png`
