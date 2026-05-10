import { Streamdown } from 'streamdown';

/**
 * Trinity Tools: neutral sandbox index
 *
 * This page intentionally avoids presenting Perspection, Trinity,
 * Faceless Reclaimation, or the Living Survival Guide as one merged identity.
 */

export default function Home() {
  const content = `
# Trinity Tools

Working build and tool sandbox.

This surface holds experiments, Manus exports, UI drafts, handout fragments, and tool prototypes while they are being sorted into the correct project containers.

It is not the canonical Perspection governance surface.

---

## Current role

This repository is used for material that is still being tested, preserved, or routed.

Useful fragments may later move into:

| Destination | Function |
|---|---|
| Perspection | Governance, refusal rules, observation-only constraints |
| Faceless Reclaimation | Public Reclaimation material, zines, artifacts, story-facing offers |
| Trinity Framework Site | Trinity-specific method explanation, diagrams, and site structure |
| System Analysis Reference | Neutral evidence mapping, timelines, claim-boundary templates |
| KY County Map | ABLE-KY county navigation and civic/legal-access routing |

---

## Preserved material

The previous homepage handout has been preserved here:

\`docs/preserved/FACELESS_RECLAMATION_HANDOUT.md\`

That handout is valuable, but it blends multiple project identities. It should be reviewed before being used as public entry copy.

---

## Operating rule

Interoperable does not mean merged.

No project may redefine another project's purpose.

---

## Next sorting target

Review preserved handout material and classify sections as:

- Reclaimation-facing
- Trinity-specific
- Perspection-governance-adjacent
- Archive only
  `;

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-2xl mx-auto px-4 py-12 prose prose-sm">
        <Streamdown>{content}</Streamdown>
      </main>
    </div>
  );
}
