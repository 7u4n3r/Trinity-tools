# SORTING_MANIFEST.md

## Purpose

This manifest tracks sorting work inside `Trinity-tools` so useful material is preserved while project identities are separated.

This file is not a deletion list.
It is a relocation and review list.

## Repo status

`Trinity-tools` is currently treated as a working build / tool sandbox.

It may contain Manus exports, UI experiments, Trinity tools, Faceless Reclaimation handouts, and Living Survival Guide fragments that need sorting.

## Sorting rule

Preserve first.
Classify second.
Move only after the destination is clear.

## Known file observations

| Path | Current role | Status | Likely route |
|---|---|---|---|
| `README.md` | Repo identity file | Rewritten / bounded | Keep here |
| `PROJECT_BOUNDARY.md` | Repo containment rule | Added / protected | Keep here |
| `package.json` | App/build configuration | Preserve | Keep here unless app is split |
| `client/src/App.tsx` | App route entry | Preserve | Keep here during audit |
| `client/src/pages/Home.tsx` | Current homepage content | Review needed | Contains Faceless Reclaimation / Perspection / Trinity merge |

## Homepage audit note

`client/src/pages/Home.tsx` currently presents a Faceless Reclamation handout that blends Perspection, Trinity Method, and Reclaimation-facing language into one page.

That page may be valuable, but it should not be treated as canonical Perspection entry copy.

Possible routes:

1. Keep in `Trinity-tools` as a preserved handout experiment.
2. Copy or migrate Reclaimation-facing text to `faceless-reclaimation`.
3. Extract Trinity-specific method explanation to `trinity-framework-site`.
4. Keep Perspection governance separate in `7u4n3r/Perspection`.

## Classification buckets

### Keep here

Use this bucket for:

- Build setup
- Shared UI experiments
- Manus exports pending review
- Temporary tool drafts
- Components used by multiple experimental surfaces

### Move or copy to `faceless-reclaimation`

Use this bucket for:

- Reclaimation-facing public copy
- Story reclaiming language
- Zine or artifact material
- Product/landing page content

### Move or copy to `trinity-framework-site`

Use this bucket for:

- Trinity-specific method explanation
- Trinity diagrams
- Trinity public site copy
- Framework-specific routing pages

### Move or copy to `Perspection`

Use this bucket only for:

- Governance rules
- Refusal constraints
- Copy lint material
- Observation-only interface standards
- Code references that demonstrate Perspection governance

### Move or copy to `system-analysis-reference`

Use this bucket for:

- Evidence organization templates
- Timeline formats
- Claim/source/interpretation separation tools
- Neutral case-study structures

### Move or copy to `ky-county-map`

Use this bucket for:

- Kentucky county map improvements
- ABLE-KY resource routing
- Civic/legal-access navigation features

## Do not do yet

- Do not delete `client/src/pages/Home.tsx`.
- Do not rename the app without checking deploy settings.
- Do not move code until route/import effects are reviewed.
- Do not collapse all project language into one homepage.

## Next audit target

Review `client/src/pages/Home.tsx` and decide whether to:

- preserve as a handout experiment,
- split into Reclaimation + Trinity surfaces,
- or replace the homepage with a neutral sandbox index.
