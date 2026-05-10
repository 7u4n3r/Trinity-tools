# MANUS_RECOVERY_PROMPT.md

## Purpose

Use this prompt in Manus when the `Trinity-tools` project becomes unstable, overloaded, confusing, or starts merging separate project identities.

This prompt is for diagnosis and stabilization only.

It is not a redesign prompt.
It is not a feature request.
It is not a content rewrite request.

---

## Prompt to paste into Manus

```text
You are working inside the `Trinity-tools` repository.

Do not redesign the site.
Do not rewrite project identity.
Do not merge Perspection, Trinity, Faceless Reclaimation, Living Survival Guide, System Analysis Reference, or KY County Map into one project.
Do not delete files.
Do not rename routes.
Do not add features.

First, read these files:

- README.md
- PROJECT_BOUNDARY.md
- SORTING_MANIFEST.md
- BUILD_HEALTH.md
- docs/audits/HANDOUT_CLASSIFICATION.md

Then inspect the app/build files:

- package.json
- vite.config.ts
- client/src/App.tsx
- client/src/pages/Home.tsx
- server/index.ts

Your task is to diagnose project health only.

Return a report with:

1. Build/deploy risk findings
2. Files likely responsible for instability
3. Whether `.manus-logs` or debug collection appears to be causing noise
4. Whether route structure is intact
5. Whether any file violates the project boundary
6. The smallest safe change set required to stabilize the project

Do not perform changes until the report is complete.

Use this operating rule:

Interoperable does not mean merged.
No project may redefine another project's purpose.

Preserve first.
Classify second.
Move only after the destination is clear.
```

---

## Use when

Use this when Manus:

- starts producing huge logs
- freezes during preview
- tries to redesign everything
- treats Perspection as Faceless Reclaimation
- treats Trinity as the whole ecosystem
- starts rewriting boundaries
- loses track of the repo purpose
- suggests deleting preserved files

## Do not use when

Do not use this as a normal content-writing prompt.

Do not use it to generate public copy.

Do not use it to ask Manus to “improve” the site visually.

This is a containment and recovery prompt only.
