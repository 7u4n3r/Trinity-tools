# BUILD_HEALTH.md

## Purpose

This file records the current build/deploy health observations for `Trinity-tools`.

The goal is to keep the app usable while preventing Manus/debug/export noise from becoming project identity or repo bloat.

## Current app stack

Observed from `package.json` and app files:

- Vite
- React
- TypeScript
- Tailwind
- Express production server
- Manus runtime plugin
- Manus debug collector plugin
- Wouter routing
- Streamdown markdown rendering

## Current route state

`client/src/App.tsx` routes `/` to `client/src/pages/Home.tsx`.

The homepage has been replaced with a neutral sandbox index.

The previous merged handout was preserved at:

`docs/preserved/FACELESS_RECLAMATION_HANDOUT.md`

## Build scripts

From `package.json`:

```bash
pnpm dev
pnpm build
pnpm start
pnpm check
pnpm format
```

The production build runs:

```bash
vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
```

The production server serves static files from `dist/public`.

## Manus debug collector note

`vite.config.ts` includes a Manus debug collector that writes browser logs, network requests, and session replay events into `.manus-logs` during development.

Each log file is trimmed around a 1MB limit, but the collector can still create local noise and confusion during active preview/debug sessions.

`.gitignore` has been added to prevent `.manus-logs/`, build output, dependencies, env files, and log files from being committed.

## Analytics status

Analytics are currently disabled.

Unresolved analytics placeholders were removed from `client/index.html` to prevent broken requests or deploy confusion when environment variables are missing.

See:

`docs/ANALYTICS.md`

Rule:

Do not add analytics by placeholder. Only add tracking when endpoint, website ID, deployment env values, and intent are clear.

## Added guardrails

`.gitignore` now excludes:

- `node_modules/`
- `dist/`
- `build/`
- `.vite/`
- `.manus-logs/`
- `*.log`
- `.env` files
- OS/editor noise

`ErrorBoundary.tsx` has been hardened:

- development mode shows stack traces
- production mode shows a generic reload message

## Safe local check sequence

Use this order when checking the app locally or in Manus:

```bash
pnpm install
pnpm check
pnpm build
pnpm dev
```

If the app fails, inspect:

1. TypeScript errors from `pnpm check`
2. build errors from `pnpm build`
3. runtime preview errors from Manus logs or browser console
4. whether `.manus-logs` is growing too quickly during debug

## Do not do yet

- Do not remove Manus runtime plugin until deploy behavior is confirmed.
- Do not remove the debug collector unless it is causing active failures.
- Do not split the app code until current build health is known.
- Do not turn this repo into the canonical site for all projects.
- Do not re-add analytics unless intentionally configured.

## Next recommended repair

Run or request a real build/check pass in Manus using:

```bash
pnpm install
pnpm check
pnpm build
```

Then record the exact result before making further code changes.
