# MANUS_BUILD_CHECK_PROMPT.md

## Purpose

Use this prompt in Manus when you want a clean build/check pass for `Trinity-tools`.

This prompt is for verification only.

It is not a redesign prompt.
It is not a feature request.
It is not a content rewrite request.

---

## Prompt to paste into Manus

```text
You are working inside the `Trinity-tools` repository.

Do not redesign the site.
Do not rewrite copy.
Do not change project boundaries.
Do not delete files.
Do not add features.
Do not move files.

This is a build/check verification pass only.

First read:

- README.md
- PROJECT_BOUNDARY.md
- BUILD_HEALTH.md
- DEPLOY_CHECKLIST.md
- INVENTORY.md

Then run these commands in order:

pnpm install
pnpm check
pnpm build

After each command, stop and record:

1. Whether it passed or failed
2. Exact command run
3. Exact error text if it failed
4. File path named by the error, if any
5. Whether the issue is install, TypeScript, build, or environment-related

Do not fix anything until the report is complete.

Return a report with:

- install result
- TypeScript check result
- build result
- exact failure point, if any
- smallest safe fix recommendation
- whether Manus debug logs appear relevant

Use this rule:

Preserve first.
Classify second.
Move only after destination is clear.

Interoperable does not mean merged.
No project may redefine another project's purpose.
```

---

## Use when

Use this when you need to know whether the app actually builds.

Good moments to use it:

- before publishing
- after GitHub cleanup
- after Manus starts acting weird
- before changing app code
- before moving routes or assets

## Do not use when

Do not use this to ask Manus for design improvements.

Do not use this to ask Manus to rewrite copy.

Do not use this to ask Manus to merge projects.

This prompt is only for install/check/build verification.
