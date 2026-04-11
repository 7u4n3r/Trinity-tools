import { Streamdown } from 'streamdown';

/**
 * perspection.org: Faceless Reclamation Handout
 * 
 * Design constraint: Visually neutral and minimal
 * - Plain typography
 * - Plain layout
 * - No symbolic or branded elements
 * - Archival presence only
 * - Content verbatim from source
 */

export default function Home() {
  const content = `
# FACELESS RECLAMATION

A Framework for Taking Back Your Story

facelessreclamation.com · perspection.org

---

## The Core Problem

You are standing in the fire. An experience, a feeling, or a fear is consuming you — it feels total, absolute, and real. This raw, unfiltered experience is the Lived Fire. It is the starting point. But it is not the end.

Our default reaction is to fuse with this fire — to believe the story it tells us without question. This is how fear becomes a faceless force that dictates our lives, and how perception stagnates into illusion.

**Perspection** is the art of seeing clearly in the middle of the fire. It is the master skill that allows you to separate yourself from the chaos and reclaim your power — the practice of inspecting your perception before you settle on a perspective.

---

## The Skill: Perspection

Perspection is a living neologism that fuses three essential elements:

| Term | Definition |
|------|------------|
| Perception | The raw data you receive |
| Inspection | The conscious examination of that data |
| Perspective | The meaning you choose to assign |

Most people collapse these three into one automatic reaction. Perspection is the practice of **separating them** — creating a gap where your power lives. This gap is where you reclaim your story from the faceless forces of fear and conditioning.

---

## The Method: The Trinity

Perspection is powered by the **Trinity Method** — a recursive system that keeps your understanding alive, tested, and constantly refined. It is the circuit-breaker for distortion.

### 01 ENCOUNTER

**Perception**

The raw intake. Unfiltered signal from your senses and nervous system. Messy, noisy, biased by first contact.

*"What am I experiencing right now?"*

Mantra: *"I am noticing the perception of..."*

### 02 INTERROGATION

**Inspection**

The pressure test. Pause. Break down the perception. Compare against evidence, memory, external input. Contradictions and hidden assumptions surface here.

*"What do I know — and what still hides in shadow?"*

Mantra: *"How is this showing up in me? Let me observe."*

### 03 INTEGRATION

**Perspective**

The synthesis. Inspected fragments arrange into a functional, lived truth — not ultimate Truth, but a working frame. This new perspective seeds your next Encounter.

*"What does this mean for how I move, act, or respond?"*

Mantra: *"What is a more true and useful story about this?"*

Perspective doesn't end the cycle — it seeds the next Encounter. Each loop sharpens the lens. This is Perspection in action: ever-evolving clarity.

---

## Perspection in Action

**Scenario: You make a mistake at work and your boss points it out.**

| Phase | Without Perspection | With Perspection (Trinity Method) |
|-------|-------------------|----------------------------------|
| 1. Encounter | Hot flush of shame. "I'm an idiot." A feeling of dread. | "I am perceiving a hot flush of shame. I am noticing the thought, 'I'm an idiot.'" |
| 2. Interrogation | Skipped entirely. | "Is this thought true? The mistake was real, but does it make me an 'idiot'? I've done good work before. This is my default Installed Myth." |
| 3. Integration | "I'm going to get fired. I'm terrible at my job. I can't do anything right." | "The feedback was about one action, not my whole identity. This shame is an overreaction. This is data for improvement." |
| Outcome | Avoid boss. Confidence shattered. Myth gets stronger. | Thank boss. Ask clarifying question. Make a note. Move forward. |

---

## The Core Truth

**Your freedom lives in the gap between Perception and Perspective.**

That gap is created by Inspection. The practice of creating and using that space is called Perspection. It is not a destination — it is a living process. Practice this, and you will learn to harness your fire, not be consumed by it.

**This is the first step in Faceless Reclamation.**

---

Faceless Reclamation · perspection.org · Free to share. Hold the line.
  `;

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-2xl mx-auto px-4 py-12 prose prose-sm">
        <Streamdown>{content}</Streamdown>
      </main>
    </div>
  );
}
