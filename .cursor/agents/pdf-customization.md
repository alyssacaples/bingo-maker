# Ticket: Post-Generation PDF Customization (Tier 1 + Tier 2, optional Tier 3)

**Project:** `/Users/alyssacaples/Documents/coding/bingo-maker`  
**Eval:** `eval.md` (§ Post-Generation PDF Customization)  
**Site:** [makebingocard.com](https://makebingocard.com)

---

## Role

You are a **surgical React + @react-pdf/renderer engineer** for makebingocard.com. You extend **post-generation** customization controls in the PDF preview modal only. Cards render **exclusively** via `BingoDocument.jsx`; there is no HTML card preview and you must not add one.

---

## Context

| Layer | Path | Role |
|-------|------|------|
| Config state | `src/hooks/useBingoConfiguration.js` | Single source of truth for card/PDF options |
| PDF render | `src/components/BingoDocument.jsx` | All visual output via `@react-pdf/renderer` |
| Preview UI | `src/components/PDFPreview.jsx` | Modal; hosts customization sidebar |
| Controls | `src/components/CardCustomization.jsx` | **Only** place to add new customization UI |
| Themes | `src/utils/themes.js` | Named presets; `applyTheme()` |
| Prop wiring | `src/App.jsx`, `src/components/PDFGenerator.jsx` | Pass state into preview + `BingoDocument` |

**Current hardcoded values to replace** (in `BingoDocument.jsx`):

- Subtitle color: `#4b5563`
- Cell text color: `#1f2937`
- Grid border: `3pt`; cell border: `1.5pt`
- Grid `borderRadius`: `8`
- Cell background: `#ffffff` always
- Center cell label: hardcoded `"FREE SPACE"` in JSX (line ~257)
- Gradient: vertical only, 30 stacked `View` layers, 2-color `interpolateColor`

**Workflow invariant:** phrases → grid config on main page → **Generate/Preview** → customize in modal sidebar. `CardCustomization` is imported **only** by `PDFPreview.jsx`.

---

## Constraints

### Always

- Implement new controls in **`CardCustomization.jsx`** and wire: `useBingoConfiguration` → `App` → `PDFGenerator` → `PDFPreview` → `CardCustomization` **and** `BingoDocumentWithProps`.
- Apply every visual change in **`BingoDocument.jsx`** so preview **and** download PDF match.
- Add new state defaults in **`useBingoConfiguration.js`** (backward-compatible).
- Update `PDFPreview.jsx` `useEffect` deps for every new customization prop.
- Tier 3: static PNGs in `public/backgrounds/`, served at `/backgrounds/...`.
- Reuse existing UI patterns: Tailwind, color picker + hex input, checkboxes, `input-field`.
- Extend `themes.js` and `applyTheme()` with fallbacks for new fields.

### Never

- Move customization to main page or import `CardCustomization` in `App.jsx`.
- Change phrase-first flow or require customization before generate.
- Add AI backgrounds, user uploads, or server-side costs.
- Add npm dependencies without approval.
- Edit `dist/`.
- Add HTML/CSS card preview.
- Register custom fonts (`Font.register`) — built-in fonts only.
- Broad refactors or unrelated cleanup.

---

## Non-Goals

- Custom font picker beyond existing built-in options
- Per-cell manual editing or drag-and-drop layout
- Saving themes to localStorage / accounts
- Changing grid size, phrase logic, or randomization
- Moving subtitle **text** into preview (subtitle **color** only)
- Replacing 30-layer gradient with a library

---

## react-pdf Limitations

1. **No CSS gradients.** Fake with stacked absolute `View` layers + `interpolateColor`.
2. **Three-stop gradients:** `color1 → color2` first half, `color2 → color3` second half. Skip when `gradientColor3` null.
3. **`borderRadius`** on `View` — numeric pt from state.
4. **Borders:** `` `${width}pt solid ${color}` `` in `StyleSheet.create`.
5. **Patterns (Tier 3):** `import { Image } from '@react-pdf/renderer'`; `src="/backgrounds/dots.png"`; opacity on `Image`.
6. **Diagonal gradients:** Row/column strips; comment if strip count differs from vertical (30).
7. **Card mat:** White padded `View` behind grid — no `box-shadow`.

---

## Discovery Steps (read first)

1. `src/hooks/useBingoConfiguration.js`
2. `src/components/BingoDocument.jsx`
3. `src/components/CardCustomization.jsx`
4. `src/components/PDFPreview.jsx`
5. `src/components/PDFGenerator.jsx`
6. `src/App.jsx` — `BingoDocumentWithProps` `useCallback` deps
7. `src/utils/themes.js`

---

## Implementation Plan (dependency order)

### Phase 0 — State (`useBingoConfiguration.js`)

| Key | Type | Default |
|-----|------|---------|
| `cellTextColor` | hex | `#1f2937` |
| `subtitleColor` | hex | `#4b5563` |
| `borderWidth` | number (pt) | `1.5` |
| `gridBorderRadius` | number (pt) | `8` |
| `cellBackgroundMode` | `'white' \| 'softTint' \| 'alternating'` | `'white'` |
| `cellBackgroundTint` | hex | `#f8fafc` |
| `freeSpaceLabel` | string | `'FREE SPACE'` |
| `printerFriendly` | boolean | `false` |
| `gradientDirection` | `'vertical' \| 'horizontal' \| 'diagonal'` | `'vertical'` |
| `gradientColor3` | hex \| null | `null` |
| `cardMatEnabled` | boolean | `false` |
| `backgroundPattern` | null \| preset id | `null` |
| `backgroundPatternOpacity` | 0–1 | `0.15` |

**Printer-friendly** (render-only in `BingoDocument`, do not mutate hook state):

- No gradient; thin borders (≤0.5pt); B&W colors; white cells.

### Phase 1 — PDF (`BingoDocument.jsx`)

- Extend `createStyles`; dynamic borders, radius, colors.
- Per-cell background from `cellBackgroundMode`.
- Render `{freeSpaceLabel}` for center cell.
- Card mat wrapper when `cardMatEnabled`.
- Gradient direction + 3-stop refactor.
- Tier 3: conditional `Image` layer.

### Phase 2 — Themes (`themes.js`)

- Add **≥12 new themes** (21+ total). Examples: aurora, matcha, coquette-blush, lavender-dream, midnight, citrus, sage, coral, slate, golden-hour, berry, rainbow-soft.
- Update `applyTheme()` for all supported keys.

### Phase 3 — UI (`CardCustomization.jsx`)

**Tier 1:** cell text color, subtitle color, border width, grid radius, cell background + tint, free space label presets (FREE SPACE / FREE / ★ + custom ≤12 chars), printer-friendly toggle.

**Tier 2:** gradient direction, optional 3rd color, card mat toggle.

**Tier 3 (if time):** pattern picker, opacity slider, None option.

### Phase 4 — Wiring

`PDFPreview.jsx`, `PDFGenerator.jsx`, `App.jsx`.

### Phase 5 — Tier 3 assets (optional)

`public/backgrounds/`: `dots.png`, `hearts.png`, `linen.png`, `watercolor.png`, `stripes.png`.

---

## Acceptance Criteria

### Workflow
- [ ] Phrases → config → Preview; no main-page customization panel
- [ ] Preview regenerates on every new option change
- [ ] Download PDF matches preview

### Tier 1
- [ ] Cell text color, subtitle color, border width, grid radius
- [ ] Cell backgrounds: white / soft tint / alternating
- [ ] Free space label presets + custom
- [ ] Printer-friendly: B&W, thin borders, no gradient

### Tier 2
- [ ] ≥21 themes; gradient direction; optional 3rd stop; card mat

### Tier 3 (if implemented)
- [ ] 5 PNGs; pattern picker + opacity; PDF `Image` render

### Build
- [ ] `npm run build` and `npm run lint` exit 0
- [ ] No `dist/` in diff; no new deps

---

## Verification Commands

```bash
cd /Users/alyssacaples/Documents/coding/bingo-maker
npm run build
npm run lint
git diff --name-only
```

**Manual smoke:** add ≥25 phrases → Preview → toggle each Tier 1 control → apply new theme → test gradient direction + card mat → printer-friendly → Download PDF → confirm main page unchanged.

---

## Agent Completion Clause

When you believe you are done, do **not** stop. Run `npm run build` and `npm run lint`. Review diff against `eval.md`. Fix blocking failures or rubric < 4/5. Report: files changed, Tier 3 status, manual smoke results.
