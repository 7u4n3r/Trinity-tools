# DEPLOY_CHECKLIST.md

## Purpose

Phone-friendly deploy and preview checklist for `Trinity-tools`.

Use this before asking Manus to redesign, rebuild, or diagnose the whole project.

## Rule

Check the project in this order:

1. Install
2. Type check
3. Build
4. Preview/dev
5. Inspect only the error that appears

Do not skip straight to redesign.

## Local / Manus check sequence

```bash
pnpm install
pnpm check
pnpm build
pnpm dev
```

## If `pnpm install` fails

Check:

- package manager mismatch
- missing lockfile
- dependency conflict
- Manus environment issue

Do not rewrite app code to fix an install issue.

## If `pnpm check` fails

Check:

- TypeScript import paths
- missing files
- component/export mismatch
- route file errors

Do not redesign the site to fix a TypeScript issue.

## If `pnpm build` fails

Check:

- Vite config
- Tailwind config
- server bundle build
- missing dependency
- bad import alias

Do not move project identities to fix a build issue.

## If preview/dev freezes or gets noisy

Check:

- `.manus-logs/`
- browser console logs
- network logs
- Manus debug collector behavior
- repeated hot reload loop

Do not delete preserved files unless they are directly named in the error.

## If homepage looks wrong

Current expected homepage:

- `client/src/pages/Home.tsx`
- should show neutral `Trinity Tools` sandbox index
- should not show the old Faceless Reclaimation handout as the live homepage

The old handout should remain preserved at:

`docs/preserved/FACELESS_RECLAMATION_HANDOUT.md`

## Known protected files

Do not delete or rewrite without a specific reason:

- `README.md`
- `PROJECT_BOUNDARY.md`
- `SORTING_MANIFEST.md`
- `BUILD_HEALTH.md`
- `DEPLOY_CHECKLIST.md`
- `docs/prompts/MANUS_RECOVERY_PROMPT.md`
- `docs/preserved/FACELESS_RECLAMATION_HANDOUT.md`
- `docs/audits/HANDOUT_CLASSIFICATION.md`

## Boundary reminder

`Trinity-tools` is a working build / tool sandbox.

It is not:

- canonical Perspection
- the full Faceless Reclaimation home
- the Trinity Framework site
- the Living Survival Guide final app
- the ABLE-KY county map

## Stop condition

If the error is unclear, stop after collecting:

- exact command run
- exact error text
- file path named in the error
- whether error appears during install, check, build, or preview

Then diagnose from that point only.

Preserve first.
Classify second.
Move only after the destination is clear.
