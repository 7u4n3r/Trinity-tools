# INVENTORY.md

## Purpose

Inventory of inspected `Trinity-tools` files during containment cleanup.

This is not a complete filesystem listing because GitHub code search is not currently indexed for this repo and directory fetches are not supported through the available connector. It records confirmed files inspected directly.

## Inventory status

Partial inventory complete.

Known limitation: GitHub repo code search returned no results, and directory-level fetches are rejected by the connector, so direct-path inspection was used.

## Confirmed inspected files

| Path | Role | Status | Notes |
|---|---|---|---|
| `README.md` | Repo identity | Bounded | Rewritten to identify repo as working tool/build container |
| `PROJECT_BOUNDARY.md` | Repo containment | Protected | Added during cleanup |
| `SORTING_MANIFEST.md` | Sorting plan | Protected | Added during cleanup |
| `BUILD_HEALTH.md` | Build/deploy notes | Protected | Added during cleanup |
| `DEPLOY_CHECKLIST.md` | Phone-friendly deploy checklist | Protected | Added during cleanup |
| `.gitignore` | Repo hygiene | Added | Excludes dependencies, build output, `.manus-logs`, logs, env files |
| `package.json` | App/build config | Preserve | Vite/React/Express/Manus runtime stack |
| `vite.config.ts` | Vite config | Review if preview noisy | Contains Manus runtime and debug collector writing `.manus-logs` |
| `server/index.ts` | Production Express server | Preserve | Serves `dist/public` and client routes |
| `client/index.html` | HTML shell / metadata | Repaired | Updated title/description to Trinity Tools sandbox |
| `client/src/main.tsx` | React entry | Preserve | Standard React root render |
| `client/src/App.tsx` | Route entry | Preserve | Routes `/` to `Home` and fallback to `NotFound` |
| `client/src/pages/Home.tsx` | Live homepage | Repaired | Replaced with neutral Trinity Tools sandbox index |
| `client/src/pages/NotFound.tsx` | 404 page | Review later | Generic template-style 404; not dangerous, but visually inconsistent with sandbox |
| `client/src/index.css` | Theme/global CSS | Repaired | Internal comment updated to Trinity Tools sandbox palette |
| `client/src/contexts/ThemeContext.tsx` | Theme context | Preserve | Standard light/dark context; no identity bleed found |
| `client/src/components/ErrorBoundary.tsx` | Error boundary | Harden later | Displays full error stack on screen; useful in dev, not ideal for public production |
| `client/src/lib/utils.ts` | Utility helper | Preserve | Standard `cn()` helper using clsx and tailwind-merge |
| `tsconfig.json` | TypeScript config | Preserve | Includes `client/src`, `shared`, and `server`; aliases match Vite config |
| `docs/preserved/FACELESS_RECLAMATION_HANDOUT.md` | Preserved old homepage | Archive/source | Do not delete |
| `docs/audits/HANDOUT_CLASSIFICATION.md` | Handout classification | Protected | Routes sections to Reclaimation, Trinity, archive, or rewrite |
| `docs/prompts/MANUS_RECOVERY_PROMPT.md` | Manus recovery prompt | Protected | Diagnosis-only prompt |

## Identity leaks found

### Fixed

`client/index.html` previously had:

- description: `Faceless Reclamation: A Framework for Taking Back Your Story`
- title: `perspection.org`

It was updated to:

- description: `Trinity Tools: working build and tool sandbox`
- title: `Trinity Tools`

`client/src/index.css` previously had:

```css
/* perspection.org: Minimal, neutral palette */
```

It was updated to:

```css
/* Trinity Tools: minimal neutral sandbox palette */
```

### Still present / watchlist

No remaining public-facing identity leak has been confirmed in inspected files.

Potential remaining risk areas:

- `client/src/components/ui/` may contain generic template UI components.
- `attached_assets/` may contain unsorted Manus/imported assets.
- `shared/` may contain unused schema or generated code.

## Build / production watchlist

### ErrorBoundary stack trace

`client/src/components/ErrorBoundary.tsx` currently displays the full error stack in the UI.

This is useful during development, but should be hardened before using this as a public production surface.

Recommended later behavior:

- show stack traces only in development
- show a calm generic message in production

### Analytics placeholders

`client/index.html` includes:

```html
<script
  defer
  src="%VITE_ANALYTICS_ENDPOINT%/umami"
  data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>
```

This should be checked in Manus/deploy preview to confirm missing env values do not create broken requests.

## Next inventory targets

If accessible, inspect or list:

- `client/src/components/ui/`
- `shared/`
- `attached_assets/`
- config files such as `tailwind.config.*`, `postcss.config.*`, `components.json`
- package lockfile / pnpm lockfile

## Current recommendation

Do not split the app further until a build/check pass is run.

Next safe cleanup:

- harden `ErrorBoundary` for production
- inspect whether analytics env placeholders are safe in deployed context
- verify whether `.manus-logs` exists in repo history or only local Manus environment
