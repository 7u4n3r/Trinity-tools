# ANALYTICS.md

## Current status

Analytics are intentionally disabled in `Trinity-tools`.

The previous HTML shell included unresolved placeholders:

```html
<script
  defer
  src="%VITE_ANALYTICS_ENDPOINT%/umami"
  data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>
```

Those placeholders were removed from `client/index.html` to prevent broken requests or deploy confusion when environment variables are missing.

## Rule

Do not add analytics by placeholder.

Only add analytics when:

- the analytics endpoint is known
- the website/project ID is known
- the deployment environment provides those values
- the project owner intentionally wants tracking enabled

## Recommended future approach

If analytics are needed later, add them through an explicit Vite env-gated component or script injection.

Example requirement:

- `VITE_ANALYTICS_ENDPOINT` must exist
- `VITE_ANALYTICS_WEBSITE_ID` must exist
- analytics script should not load otherwise

## Boundary note

This is a sandbox/tool repo.

Analytics should not become surveillance-by-default.
Tracking should be intentional, labeled, and removable.
