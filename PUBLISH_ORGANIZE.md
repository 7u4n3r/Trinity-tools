# PUBLISH_ORGANIZE.md

## Purpose

This file marks the shift from repair mode into publish/organize mode for `Trinity-tools`.

The repo is now build-confirmed and safe enough to organize for publishing decisions.

## Current confirmed state

`Trinity-tools` is:

- bounded
- inventoried
- identity-cleaned
- homepage-neutralized
- analytics-cleaned
- ErrorBoundary-hardened
- build-confirmed

Successful verification reported from Manus:

```bash
pnpm install
pnpm check
pnpm build
```

Only notice:

- `index-BggwEdbK.js` chunk size warning: 1,441 kB
- non-blocking advisory about code splitting
- not an error

## Current public role

This repo should publish, if published, as a neutral working sandbox / tool index.

It should not publish as:

- canonical Perspection
- Faceless Reclaimation home
- Trinity Framework site
- Living Survival Guide final app
- ABLE-KY county map

## Publish-safe homepage

Current expected homepage:

`client/src/pages/Home.tsx`

Purpose:

- identify `Trinity-tools` as a working build and tool sandbox
- route related projects by function
- point to preserved material without making it the live identity

## Pre-publish checklist

Before publishing, confirm:

- [ ] `pnpm install` passes
- [ ] `pnpm check` passes
- [ ] `pnpm build` passes
- [ ] homepage shows `Trinity Tools`
- [ ] browser title shows `Trinity Tools`
- [ ] old handout is not the live homepage
- [ ] analytics are not loading by placeholder
- [ ] production error page does not expose stack traces
- [ ] boundary files remain present
- [ ] no project identity has been merged back into the homepage

## Publish decision

### Publish as sandbox if:

- you need a live staging surface
- Manus needs a stable preview target
- you want a place to inspect tool fragments
- you want to show that the build exists without claiming it is final

### Do not publish as final product if:

- you want Faceless Reclaimation as the public-facing destination
- you want Trinity Framework as the public-facing destination
- you want Perspection as the public-facing destination
- you need polished user-facing navigation

## Organization priority after publishing

1. Keep `Trinity-tools` as staging/sandbox.
2. Move/copy polished Reclaimation material to `faceless-reclaimation`.
3. Move/copy polished Trinity material to `trinity-framework-site`.
4. Keep governance in `Perspection`.
5. Keep ABLE-KY map separate.
6. Use `system-analysis-reference` for templates and evidence structures.

## Public wording if linked

Use language like:

> Trinity Tools is a working sandbox for framework and interface experiments. Materials here may be preserved, tested, or routed into separate public projects.

Avoid language like:

> This is Perspection.
> This is Faceless Reclaimation.
> This is the Trinity Framework final site.
> This is the complete ecosystem.

## Next organizing move

Create public-ready landing files in the destination repos:

- `faceless-reclaimation`: Reclaimation landing page / zine source
- `trinity-framework-site`: Trinity Method landing draft
- `Perspection`: governance/reference public entry remains separate

## Operating rule

Publish surfaces by function.

Do not publish the ecosystem as one merged identity.

Interoperable does not mean merged.
