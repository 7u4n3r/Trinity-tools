# MANUS_PUBLISH_ORGANIZE_PROMPT.md

## Purpose

Use this prompt in Manus when preparing `Trinity-tools` for publishing or deployment review.

This prompt is for publish organization only.

It is not a redesign prompt.
It is not a content rewrite prompt.
It is not a merge prompt.

---

## Prompt to paste into Manus

```text
You are working inside the `Trinity-tools` repository.

The project has already passed:

pnpm install
pnpm check
pnpm build

Do not redesign the site.
Do not rewrite public copy.
Do not merge project identities.
Do not delete preserved files.
Do not add analytics.
Do not add new features.

First read:

- README.md
- PROJECT_BOUNDARY.md
- PUBLISH_ORGANIZE.md
- BUILD_HEALTH.md
- DEPLOY_CHECKLIST.md
- INVENTORY.md

Your task is to prepare a publish/deployment readiness report only.

Confirm:

1. The homepage shows Trinity Tools as a neutral sandbox.
2. The browser title is Trinity Tools.
3. The old Faceless Reclaimation handout is preserved but not live as homepage.
4. Analytics are disabled and no placeholder analytics script loads.
5. ErrorBoundary does not show stack traces in production.
6. Build status is still clean.
7. The repo is safe to publish as a sandbox, not as a final product.

Return a report with:

- publish readiness status
- any blockers
- any non-blocking warnings
- exact files checked
- recommended publish label
- recommended public description

Use this publish label:

Trinity Tools Sandbox

Use this public description:

Trinity Tools is a working sandbox for framework and interface experiments. Materials here may be preserved, tested, or routed into separate public projects.

Do not change files unless explicitly asked after the report.

Operating rule:

Publish surfaces by function.
Interoperable does not mean merged.
No project may redefine another project's purpose.
```

---

## Use when

Use this when:

- preparing to publish a Manus preview
- checking deploy readiness
- deciding whether this repo can be live as a sandbox
- preventing Manus from turning sandbox into a final ecosystem homepage

## Do not use when

Do not use this to polish Faceless Reclaimation.

Do not use this to polish Perspection.

Do not use this to polish Trinity Framework.

Those belong in their destination repos.
