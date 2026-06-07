# makebingocard.com — Eval-Driven Development Rubric

Use this file as the **judge** for all agent-driven edits. A task is not complete until every **Blocking** eval passes and the **Reviewer Agent** scores ≥ 4/5 on all model-based dimensions (weighted average ≥ 4.2).

Referenced agent ticket: `.cursor/agents/pdf-customization.md`

---

## How to Run Evals

```bash
# 1. Deterministic guardrails (must exit 0)
npm run build
npm run lint

# 2. Diff scope check
git diff --name-only
```

**Agent completion prompt (append to every ticket):**

> When you believe you are done, do not stop. Run `npm run build` and `npm run lint`. Then review your diff against `eval.md`. Fix any Blocking failure or any model-based score below 4/5 before reporting completion.

---

## Site Architecture Reference (Golden Set)

| Layer | Path | Purpose |
|-------|------|---------|
| Config state | `src/hooks/useBingoConfiguration.js` | Single source of truth for grid + PDF customization |
| Phrase input | `src/hooks/usePhraseManager.js`, `src/components/PhraseInput.jsx` | Phrase-first workflow |
| PDF render | `src/components/BingoDocument.jsx` | **Sole** card renderer via `@react-pdf/renderer` |
| Preview modal | `src/components/PDFPreview.jsx` | Post-generation PDF preview + customization sidebar |
| Customization UI | `src/components/CardCustomization.jsx` | Preview-panel controls only |
| Themes | `src/utils/themes.js` | Named gradient/color presets |
| Prop wiring | `src/App.jsx`, `src/components/PDFGenerator.jsx` | State → preview + download |
| Static assets | `public/` | Favicon, Tier 3 pattern PNGs (`public/backgrounds/`) |
| Build config | `vite.config.js`, `package.json` | Vite 5 + React 18 |
| Generated output | `dist/` | **Never edit** |

**Routes (SPA — must remain valid after edits):**

- `/` — main app (phrase input → generate → preview)
- `/?template=<id>` — sample phrase templates via query param

**Workflow invariant:** phrases first → grid config on main page → Preview/Download → customize in PDF preview modal only.

---

## Phase 1: Deterministic Evals (Blocking)

| ID | Check | Command / Method | Pass Criteria |
|----|-------|------------------|---------------|
| D1 | Build succeeds | `npm run build` | Exit code 0 |
| D2 | No generated-dir edits | `git diff --name-only` | `dist/` not in diff |
| D3 | Asset pipeline preserved | Inspect `vite.config.js` diff | `public/` passthrough unchanged unless ticket requests assets |
| D4 | No new frameworks | Inspect `package.json` diff | No unapproved deps |
| D5 | PDF single path | Grep `src/` | Cards render only via `BingoDocument.jsx`; no HTML card preview |
| D6 | Preview-only customization | Grep imports | `CardCustomization` imported only by `PDFPreview.jsx` |
| D7 | Phrase workflow intact | Read `App.jsx`, `PhraseInput.jsx` | No customization gate before generate; phrase flow unchanged |
| D8 | Static asset paths | Grep `BingoDocument` | Pattern `Image` src uses `/backgrounds/...` root-relative paths |
| D9 | Lint clean | `npm run lint` | Exit code 0 (or no new errors) |
| D10 | Scope boundary | `git diff --stat` | Files match ticket Execution Plan only |

---

## Phase 2: Model-Based Rubric (Reviewer Agent)

Score each dimension **1–5**. Threshold: **≥ 4**. Weighted average **≥ 4.2**.

Use **general rubric** for non-customization tickets. Use **ticket-specific rubric** (below) for PDF customization work.

### General Rubric (default tickets)

| Dim | Weight | 5 | 1 |
|-----|--------|---|---|
| A. Architectural Compliance | 25% | Shared hooks/components; zero duplication | New architecture without approval |
| B. Surgical Scope | 20% | Every changed line traceable to ticket | Broad rewrite |
| C. Spec Fidelity | 25% | Matches spec exactly | Agent improvised different feature |
| D. Visual/System Consistency | 15% | Matches existing Tailwind + component patterns | Looks like a different product |
| E. Accessibility & Interaction Safety | 15% | Keyboard reachable; modal usable on mobile | Controls inaccessible |

---

### Ticket-Specific Rubric: Post-Generation PDF Customization

**Applies when:** Ticket touches `CardCustomization`, `BingoDocument`, `themes.js`, or `useBingoConfiguration` for visual/PDF options.

**Pass bar:** All blocking deterministic evals (D1–D10 + D11–D15) + each dimension ≥ 4 + weighted average ≥ 4.2.

| Dim | Weight | 5 (exemplary) | 3 (acceptable) | 1 (fail) |
|-----|--------|---------------|----------------|----------|
| **A. PDF Architecture** | 30% | All visual changes flow hook → `BingoDocument`; preview regen deps complete; download ≡ preview; react-pdf constraints respected (layer gradients, `Image` for patterns) | Minor prop-drilling redundancy but render path correct | HTML preview added, main-page customization, or PDF bypassed |
| **B. Workflow Preservation** | 25% | Phrase-first flow intact; customization only in `PDFPreview` sidebar; no new gates before generate | Subtitle text moved to modal but flow otherwise OK | Customization on main page or workflow reordered |
| **C. Spec Fidelity** | 25% | Every Tier 1+2 AC met; ≥12 new themes; printer-friendly is render-only override; free-space label works | Core Tier 1 works; Tier 2 partial (e.g. missing diagonal or <12 themes) | Missing Tier 1 items or improvised out-of-scope features |
| **D. UI Consistency** | 10% | New controls match existing picker/slider/toggle patterns; compact sidebar usable | Functional but visually disjoint | Cluttered or breaks modal layout |
| **E. Static-Asset & Cost Safety** | 10% | No new deps; Tier 3 uses only `public/backgrounds/*.png`; no uploads/AI/server calls | Tier 3 skipped cleanly with no dead UI | New paid service, user uploads, or runtime-generated backgrounds |

#### Deterministic add-ons for customization tickets (blocking)

| ID | Check | Pass |
|----|-------|------|
| D11 | Phrase workflow | `PhraseInput` / generate gating unchanged; no `CardCustomization` in `App.jsx` |
| D12 | PDF single path | `BingoDocument.jsx` is sole card renderer; no parallel HTML card |
| D13 | Preview sync | `PDFPreview.jsx` `useEffect` deps include every new customization prop |
| D14 | Theme count | `themes.js` exports ≥ 21 themes (9 legacy + ≥12 new) when Tier 2 in scope |
| D15 | Printer mode | `printerFriendly` does not permanently overwrite user color state |

#### Regression checklist (manual)

- [ ] 3×3, 4×4, 5×5 grids render without layout break
- [ ] Free space disabled on 4×4 still works
- [ ] Existing 9 theme presets still apply
- [ ] Multi-page PDF (copies > 1) respects customization
- [ ] Pattern opacity 0 → pattern invisible; None → no `Image` fetch

---

## UX Change Patterns

### ✅ Good change

```
Ticket: Post-Generation PDF Customization (Tier 1)

Expected file touches: useBingoConfiguration.js, BingoDocument.jsx, CardCustomization.jsx, PDFPreview.jsx, PDFGenerator.jsx, App.jsx
Expected behavior: cell text color control in preview sidebar; PDF preview + download both update
Grades: D1–D15 pass · A=5 B=5 C=5 D=4 E=5 → APPROVED
```

### ❌ Bad change

```
Ticket: Post-Generation PDF Customization

Agent actually did: Added CardCustomization to main page right column; added html2canvas preview
Grades: BLOCKED — D6, D11, D12 fail · A=1 B=3 C=2
```

---

## Reviewer Agent Prompt Template

```
You are the Reviewer Agent for makebingocard.com.

TICKET SPEC: [paste]
AGENT DIFF: [paste git diff]
EXECUTION PLAN: [paste]
MANUAL SMOKE: [paste]

Grade against eval.md:

1. D1–D15 — PASS/FAIL per ID (use D11–D15 only for customization tickets)
2. Rubric — use ticket-specific weights if customization ticket, else general
3. Scores (1–5) with one-sentence justification per dimension
4. Weighted average
5. Tier 1/2/3 checklist: met / partial / missing (customization tickets)
6. Verdict: APPROVED | RETURN with numbered fixes (file hints)
```

### Customization ticket reviewer snippet

```
Grade makebingocard customization ticket against eval.md § Post-Generation PDF Customization.

Weights: A:30%, B:25%, C:25%, D:10%, E:10%
```

---

## Ticket Template

```markdown
## Ticket: [title]

### Spec
- Reference: `.cursor/agents/[ticket].md` or description
- Files affected: [list]
- Must preserve: phrase-first workflow, PDF-only render, no new deps

### Constraints
- Allowed files: [list]
- Forbidden: main-page customization, HTML card preview, dist/ edits, new npm deps

### Acceptance
- [ ] npm run build exits 0
- [ ] npm run lint exits 0
- [ ] [specific behavior]
- [ ] Passes eval.md (blocking + rubric ≥ 4.2)
```

---

## Version

- **Rubric version:** 1.0
- **Project:** makebingocard.com (bingo-maker)
- **Created:** 2026-06-07
