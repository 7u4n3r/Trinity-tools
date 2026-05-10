# INVENTORY.md

## Purpose

Inventory of inspected `Trinity-tools` files during containment cleanup.

This is not a complete filesystem listing because GitHub code search is not currently indexed for this repo. It records confirmed files inspected directly.

## Inventory status

Partial inventory complete.

Known limitation: GitHub repo code search returned no results, so direct-path inspection was used.

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
| `client/src/App.tsx` | Route entry | Preserve | Routes `/` to `Home` |
| `client/src/pages/Home.tsx` | Live homepage | Repaired | Replaced with neutral Trinity Tools sandbox index |
| `client/src/main.tsx` | React entry | Preserve | Standard React root render |
| `client/src/index.css` | Theme/global CSS | Review later | Still contains comment naming `perspection.org` minimal palette |
| `client/index.html` | HTML shell / metadata | Repaired | Updated title/description to Trinity Tools sandbox |
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

### Still present but lower risk

`client/src/index.css` includes a comment:

```css
/* perspection.org: Minimal, neutral palette */
```

This is not visible public copy, but it should be updated later to reduce internal confusion.

## Next inventory targets

If accessible, inspect or list:

- `client/src/components/`
- `client/src/components/ui/`
- `client/src/contexts/`
- `client/src/pages/`
- `shared/`
- `attached_assets/`
- config files such as `tsconfig.json`, `tailwind.config.*`, `postcss.config.*`

## Current recommendation

Do not split the app further until a build/check pass is run.

Next safe cleanup:

- update the internal `perspection.org` comment in `client/src/index.css`
- inspect whether analytics env placeholders are safe in deployed context
- verify whether `.manus-logs` exists in repo history or only local Manus environment
