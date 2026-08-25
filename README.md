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
npm run build    # production build to dist/
npm run lint     # eslint (must pass with zero warnings)
```

## How it's structured

Entry point: `src/main.jsx` → `src/App.jsx`.

Core flow: [`PhraseInput`](src/components/PhraseInput.jsx) (enter/select phrases) → [`GridConfiguration`](src/components/GridConfiguration.jsx) (grid size, copies, etc.) → [`PDFSection`](src/components/PDFSection.jsx) (lazy-loaded — wraps [`PDFGenerator`](src/components/PDFGenerator.jsx) → [`BingoDocument`](src/components/BingoDocument.jsx), the actual PDF layout) → [`PDFPreview`](src/components/PDFPreview.jsx) (preview modal + [`CardCustomization`](src/components/CardCustomization.jsx) sidebar for colors/fonts/themes).

State lives in two hooks:
- [`usePhraseManager`](src/hooks/usePhraseManager.js) — phrase input state, and all the sample-phrase **templates** (see below)
- [`useBingoConfiguration`](src/hooks/useBingoConfiguration.js) — grid size, copies, colors, fonts, and every other PDF customization option

`@react-pdf/renderer` is a large dependency (~1.4MB), so `PDFSection` is loaded via `React.lazy()` behind a `Suspense` boundary in `App.jsx` rather than imported at the top level — this keeps it out of the initial page bundle.

## Templates vs. themes

These are two distinct concepts, both selectable in the UI, easy to confuse:

- **Templates** = pre-written phrase sets (~155 of them) in [`usePhraseManager.js`](src/hooks/usePhraseManager.js), covering things like book/movie lists, seasonal activities, travel destinations, etc. Selected via the `?template=<id>` URL query param, which also drives the page's `<title>`/meta description/canonical URL (see the `useEffect` in `App.jsx`) — each template is effectively its own indexable landing page, listed in `public/sitemap.xml`.
- **Themes** = visual color/gradient presets (Christmas, Ocean, Midnight, etc.) in [`src/utils/themes.js`](src/utils/themes.js), applied via `CardCustomization`.

### Adding a new template

1. Add an entry to `templateTitles` (the suggested card title) and `samplePhrases` (the phrase list) in `usePhraseManager.js`, keyed by the same id.
2. Add a button for it under the matching section in `PhraseInput.jsx` (category groupings there are hardcoded JSX, not derived from data — add near similar templates).
3. Add its URL to `public/sitemap.xml` (`https://makebingocard.com/?template=<id>`) so it's discoverable by search engines.

### Adding a new theme

Add an entry to the `themes` array in `src/utils/themes.js` following the existing shape (font/color fields — see any existing theme for the full field list).

## SEO

- `public/robots.txt` + `public/sitemap.xml` (homepage + all template URLs)
- `public/ads.txt` authorizes the AdSense publisher ID
- Per-page meta tags (title/description/canonical/OG) are set client-side in `App.jsx` based on the current template; `og:image`/`twitter:image` point at the static `public/og-image.png`
