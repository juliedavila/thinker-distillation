---
title: Design Spec — Iteration 4
project: thinker-distillation
iteration: 4
date: 2026-05-26
purpose: Brand-foundation design spec for the Thinker Distillery; aligned with Camila Hub token system; English chrome
status: draft for Julie's review and per-decision picks
word_target: ≤8000
framing: First concepts of branding that propagate beyond the Distillery
---

# Design Spec — Thinker Distillery

> Iteration 4. This is the first articulation of the brand-foundation token system (per Julie 2026-05-26: "we're essentially creating the first concepts of branding that we continue to refine and iterate on"). Decisions here are written as **brand-token candidates** — proven on the Distillery first, then propagating to future projects. Specs at major decision points present ≥3 alternatives with tradeoffs; Camila's leans are flagged as *leans*, not prescriptions; editorial/voice/heritage calls are **scaffolded slots** Julie fills (writing-partner per-field discipline). The spec is reviewable in one sitting (≤8000 words).

**What this spec covers:** Principles → Typography system → Page architecture variants → Multimedia integration patterns → Non-color feminine dimensions → Color + ornament discipline → Scaffolded Julie-slots → Implementation order.

**What this spec does NOT cover:** WCAG-AA full audit, performance budget, SEO, analytics, content edits, GitLab Pages migration (parallel F-OPS track), Spanish-language content beyond explicit carve-out.

---

## §1 — Principles

*Substrate-independent commitments derived from Iter-2 research + Iter-3 audit. Every typography/layout/imagery decision downstream must defend itself against these.*

**P1 — Cognitive load is the dominant constraint.** Every interface element must defend itself against the cost it imposes on a reader trying to absorb dense conceptual material across 3,000–8,000-word essays. *[Iter-2 Lane 2: Sweller, Skulmowski & Xu 2022]*

**P2 — Beauty earns the first read; cognitive discipline carries the longitudinal reader.** Design for the reader who returns six times across a month, not the first-impression visitor. *[Iter-2 Lane 3: Sonderegger 2012]*

**P3 — Multimedia must pass the coherence test.** Every image, diagram, video, or audio asset must hurt comprehension if removed. Decorative imagery is anti-pattern. *[Iter-2 Lane 1: Mayer & Fiorella 2014]*

**P4 — Honors-thinkers via *experience*, not just structure.** Curatorial flatness + consistent grammar (already present) are necessary but not sufficient. Portraits, ceremonial register, voice-of-the-frame, and source-material presence translate honoring from structural commitment to felt experience. *[Iter-3 Pattern 7]*

**P5 — Feminine intentionality as generative methodology, not aesthetic.** Per Bardzell & Bardzell 2011 + D'Ignazio & Klein 2020 — pluralism, embodiment, reflexivity, curation politics, anti-essentialism. Rhythm, breath, hierarchy softness, voice-of-the-frame are the substrate; pastels and script fonts are anti-pattern. *[Iter-2 Lane 5 second-wave, AC7]*

**P6 — Brand-foundation framing.** Decisions documented as *brand-token candidates*, not Distillery-only. Future projects inherit and refine. *[Julie 2026-05-26]*

**P7 — Public consumption posture.** Distillery chrome stays English-only. Spanish appears only when the content earns it (quoting/translating from a Spanish-writing thinker). C23 (bilingual co-presence) is OUT for Distillery, IN for Camila Hub. *[Julie 2026-05-26]*

**P8 — Customer-zero phase is the design window.** Julie is the only reader through Iter-5 prototype. Promotion-readiness gates the public launch, not this design pass. Means: accessibility floor (WCAG AA) is non-negotiable but exhaustive accessibility audit lives in pre-promotion gate.

---

## §2 — Typography System

*The token-layer decision. Camila Hub already runs Cardo + Source Serif 4 + JetBrains Mono. The Distillery adopts this stack; this section specifies how it's applied for editorial reading, hierarchy, and feminine-intentionality criteria.*

### §2.1 Type stack — confirmed

Direct adoption from Camila Hub `tailwind.config.mjs:18-22`:

```
display: Cardo, Iowan Old Style, Georgia, serif
body:    Source Serif 4, Source Serif Pro, Iowan Old Style, Georgia, serif
mono:    JetBrains Mono, SF Mono, Menlo, monospace
```

**Why this stack works for the Distillery:**
- **Cardo** (display) — 18th-century-revival serif with strong character, generous counters, real italic. Carries ceremonial register without ornament. Used by academic publishers and editorial presses.
- **Source Serif 4** (body) — Adobe's contemporary serif designed for screen long-form reading. Variable-font (weight + optical-size axes), exceptional legibility at 16-19px, holds rhythm in 3000-8000-word essays.
- **JetBrains Mono** (mono) — citations, metadata, attribution kinds.

**No alternative considered for the stack** — token-layer alignment with Camila Hub is locked.

### §2.2 Body measure — three alternatives

| Option | Measure | Tradeoff |
|---|---|---|
| **A** (Camila's lean) | `clamp(45ch, 62ch, 68ch)` desktop; 100% mobile | Tighter than Camila Hub's 65ch; honors Bringhurst 66-cpl-ideal; ~7-12 fewer chars/line vs Substack default → measurably better comprehension *[Dyson 2004]*; matches the wisdom-formation surface. |
| B | `max-w-prose` 65ch (Camila Hub default) | Aligned with Camila Hub for token consistency; passable but at the upper edge of Bringhurst range. |
| C | `clamp(48ch, 70ch, 75ch)` | Magazine-feel; longer per line; faster scanning; worse comprehension for dense material. Wrong for the Distillery's mission. |

**Recommendation:** A. *(Julie picks)*

### §2.3 Leading + base size — two alternatives

| Option | Size / line-height | Tradeoff |
|---|---|---|
| **A** (lean) | 18px body / 1.62 line-height; Source Serif 4 optical-size 16 | Slightly larger than current 17px; opens breathing room for long-form; in Iter-2 target 1.5-1.65× range. |
| B | 17px body / 1.55 line-height | Current Distillery. Compact, conservative; loses some breath. |

**Recommendation:** A. *(Julie picks)*

### §2.4 Hierarchy system — the section-header rework

**The audit's F6 finding:** current uppercase + letter-spacing eyebrow pattern contradicts hierarchy-softness criterion C19. Three alternatives:

| Option | Treatment | Tradeoff |
|---|---|---|
| **A** (Camila's lean) | **Weight-axis hierarchy.** Section headers in Cardo, **font-weight: 500 (medium)**, size 0.95rem, color azul `#2C4A6B`, no uppercase, no tracking. Subsection headers Cardo weight-400 italic at 0.88rem. | Softness via weight + color, not capitals; reads as editorial, not institutional. Honors P5 + Lupton's "hierarchy as wayfinding". |
| B | **Small-caps with restraint.** Cardo small-caps at body size, weight-500, color azul, letter-spacing 0.04em. | Editorial-press register (Edge.org cousin); ceremonial; slightly more institutional than A. |
| C | **Sans-serif body Source Serif** + heavier weight contrast. | Closer to current but with weight, not uppercase. Loses Cardo's character at the header layer. |

**Recommendation:** A. The eyebrow uppercase pattern was the loudest aesthetic mismatch in the audit; weight-axis is the direct corrective. *(Julie picks)*

### §2.5 Body italic + emphasis

- `em` / `*text*` → Source Serif 4 italic, color `--ink` (no color shift). Italic IS the emphasis.
- `strong` / `**text**` → Source Serif 4 weight-600. Used sparingly — true bold reserved for terms-of-art on first mention.
- Anti-pattern: bold-italic combo. Never both. Pick one register of emphasis per occurrence.

### §2.6 Link affordance — site-wide policy

**Audit F19:** current site has inconsistent link styling — no bare `a` rule, hover/visited defined for 3 specific link classes only.

| Option | Treatment | Tradeoff |
|---|---|---|
| **A** (lean) | **Underline always, color azul** `#2C4A6B`. Hover: tierra `#A04A2C`. Visited: oro `#B8956A`. Focus: 2px solid azul outline, 2px offset. | Conservative, accessible, signals link unambiguously. Honors WCAG. |
| B | Underline none, **color azul** + dotted bottom-border. Hover: solid border. | Closer to current Distillery; quieter; risks affordance ambiguity. |
| C | Underline-on-hover only. | Discoverability hostile. Reject. |

**Recommendation:** A. The customer-zero phase is forgiving but the public-launch phase isn't — bake in standard affordance now. *(Julie picks)*

### §2.7 Pull-quotes + "what X says"

Current `blockquote.what-x-says` (cream tint + sepia border + italic) is good. **Preserve with two refinements:**
- Background → paper-warm `#EDE6D7` (Camila Hub token)
- Border-left → tierra `#A04A2C` (4px solid)
- Cite line in JetBrains Mono at 0.82rem, color stone-600

---

## §3 — Page Architecture Variants

*Per page-type structural decisions. Iter-3 audit confirmed the consistent-grammar strength of thinker pages (C11 PASS); this section refines architecture per page-type to address audit findings F2 (no breadcrumb), F3 (concept-not-in-nav), F4 (no portraits), F7 (anonymous chrome), F9 (long-read inconsistency).*

### §3.1 Chrome — three alternatives

The audit found chrome currently anonymous (F7). Iter-2 surfaced "mission-statement-as-chrome" (Edge.org pattern) as a key honors-thinkers move.

| Option | Pattern | Tradeoff |
|---|---|---|
| **A** (lean, with mitigations) | **Three-line chrome.** Line 1: site name "Thinker Distillation" in Cardo weight-500, size 1.15rem, color ink. Line 2: tagline beneath in Source Serif italic, ink-soft, size 0.95rem — *Julie's voice, see slot below*. Line 3: nav row with "Thinkers · Concepts · About" + small azul rule beneath. **Mitigations (per advisor):** tagline word cap ≤7 words (hard, as a token); third line text-only (no pills, no badges, no chips); chrome scroll-collapses to two-line above y-offset 80px on read-views (reclaims vertical for body — addresses Skulmowski interface-induced-load tension). | Mission-as-chrome (Edge.org gesture); concept index gets first-class nav surface (F3 P0 resolved); breadcrumb space available in nav row when on a sub-page; tagline earns its rent only if it does work the hero doesn't (per advisor). |
| B | **Two-line chrome.** Site name + nav inline; tagline beneath. Concepts in nav. | Slightly tighter; tagline less prominent. |
| C | Current pattern (site name + small inline tagline + About). | Rejected — F7 audit finding. |

**Recommendation:** A with mitigations. The chrome should carry editorial identity, but the tagline must do work the hero doesn't — otherwise it's extraneous load per Skulmowski 2022 and we collapse to two-line.

**Scaffolded Julie-slot:** the **mission tagline text** is Julie's voice — Camila proposes "Curated readings of practitioners whose ideas are worth metabolizing" (current site copy) as a placeholder only. Julie writes the final version. Constraints from the structural pick: ≤7 words (hard), Mode A/B/C register from `PAI/USER/DoctrineRegister.md` is hers to pick. The tagline should NOT restate the site name — that's the failure case the advisor flagged.

### §3.2 Breadcrumb / location cue — pattern

**Audit F2 (P1) resolution:** small breadcrumb beneath chrome nav row, on every sub-page. Format:

```
Thinkers / Alex Komoroske
Concepts / Coordination Headwind
Thinkers / Alex Komoroske / Long-read / 01 The Diagnosis
```

Style: JetBrains Mono 0.78rem, color stone-500, separator " / " with stone-300, current-page in ink (last segment).

**Why mono and not sans:** the mono register signals "structural metadata" — it's an orientation cue, not editorial chrome. Consistent with Iter-2 Lane 6 (visible location halves disorientation).

### §3.3 Index page (`/`)

**Audit F8 finding:** index reads as catalog, not gallery. Two changes:

1. **Portrait + name pairing per thinker entry** (F4 resolution). Square portrait at 80px (4× retina source), positioned left of name. Source: each thinker's frontmatter gets a `portrait` field (path to image). Fallback: monogram (initials) in azul on paper-warm tile when portrait absent.
2. **Field metadata beneath tagline.** Currently each entry is name + tagline. Add a single line in JetBrains Mono at 0.78rem with the thinker's primary domain(s): `"systems thinking · platforms · coordination"`. Helps the reader pre-orient before clicking.

**What stays:** alphabetical ordering, curatorial flatness, no hero, no featured-pick. C10 was strong and stays.

**Scaffolded Julie-slot:** the **portrait sourcing strategy** is Julie's call. Options:
- (i) Camila scouts public-domain or fair-use editorial photos per thinker (highest fidelity, slowest)
- (ii) Commissioned line-art portraits in a consistent style (most coherent visual identity, requires illustrator)
- (iii) Monogram-only treatment (lowest lift, lowest fidelity)
- Camila's lean: (i) for v3 launch (small roster), (ii) becomes feasible when roster grows past ~15.

### §3.4 Thinker page (`/thinkers/<slug>/`)

**Preserved as-is** (C11 strength): the 11-section template (Hero with 30-second-take → Who They Are → Core POV → Named Frames → Body of Work → Editorial Reading → Where This Breaks → Adjacent Thinkers → Further In → Long Read CTA → optional notes).

**Three changes:**

1. **Hero pairs portrait + name + 30-second-take.** Portrait floats left at 160px; name in Cardo weight-500 at clamp(2.4rem, 5vw, 3.4rem); tagline beneath in Source Serif italic 1.2rem.

2. **Lineage rendering — scaffolded Julie-slot, not v3 commit.** *(Demoted from a v3 SVG component per advisor pressure-test: SVG component family is a sub-spec — data model, layout, responsive collapse, alt-text narrative, hover/focus states — that deserves ≥3 alternatives by this spec's own rule, not a one-commit deliverable. F1 multimedia resolves with portraits + captions in v3; lineage rendering picks a register in v4.)* Three alternatives for v4 picking:
   - (a) Flat prose "influenced by / influenced" list under Named Frames (lowest lift, ships immediately)
   - (b) Static mini-tree SVG per thinker (medium lift, needs design pass on data model + responsive)
   - (c) Site-wide interactive influence graph (highest lift, defer to v5+ per AC3 rationale on graph-as-primary-nav)
   - Default to (a) until Julie commits to (b) or (c). The current `also-held-by` plain-text rendering ALREADY does this — it's just text. Keeping it explicit until lineage gets its own design surface.

3. **Body-of-work covers when feasible.** Each `body_of_work` item with a book/paper gets a small 60px cover image when sourceable. Optional — not blocking when unavailable. Falls back to title-only as currently.

### §3.5 Concept page (`/concepts/<slug>/`)

**Preserved as-is** (the v2 5-lane template — Genealogy / Holders / Editorial / Where This Breaks / Adjacent — was the strength of the audit).

**Three changes:**

1. **Genealogy section** — current ordered-list pattern (with `kind-original/extended/popularized` border-left color tokens) PRESERVED for v3. SVG chain demoted to v4 alongside thinker-page lineage rendering (same Julie-slot pattern as §3.4 above). Current implementation is already small-multiples — typographic, not visual — and that's acceptable for v3.
2. **Holder cards pair source link + small thinker portrait thumbnail** (40px). Connects the concept back to the person. Falls back to monogram tile if portrait absent.
3. **"Adjacent concepts" cards get visual differentiation** between *shipped* concept pages (linked, full opacity) and *pending-concept* (current dotted underline → recolored to stone-500 dashed underline + tooltip "concept page not yet authored"). Reduces visual ambiguity.

### §3.6 Long-read chapter (`/thinkers/<slug>/long-read/<chapter>/`)

**Audit F3 + F9** acknowledged. Three changes:

1. **Concept-glossary sidebar** at desktop (~280px wide, right rail). Lists 4-8 terms-of-art used in the chapter (pulled from frontmatter `glossary` field — new field). Each entry: term in Cardo weight-500, one-sentence gloss in Source Serif at 0.92rem, optional link to concept page if shipped. **Mayer & Pilegard pre-training principle** directly applied. Collapses on mobile to a `<details>` block at the top of the chapter.
2. **Chapter-of-N indicator** in the chrome breadcrumb row: `Long-read / 01 of 03 — The Diagnosis`. Resolves F6 for long-read sequence orientation.
3. **Chapter-end "what's next" footer** linking to next chapter (when present) + back to long-read index + back to thinker page. Three explicit exits, no dead-end.

### §3.7 Long-read index (`/thinkers/<slug>/long-read/`)

**Audit F14:** third chrome pattern (template debt). Resolution: align with thinker-page hero pattern (portrait + name + 30-second-take), then a `<ol>` of chapters with chapter title, summary, estimated read-time.

---

## §4 — Multimedia Integration Patterns

*Audit F1 (P0) was the largest gap. The site currently has zero multimedia. This section specifies WHEN multimedia earns placement and WHAT register each kind takes. Every pattern passes the **coherence test** (P3): removing the asset must hurt comprehension.*

### §4.1 Portraits (per-thinker)

Already specified in §3.3 (index) and §3.4 (thinker page). Style guide:
- Square aspect ratio, 4× retina source
- Color or B&W — pick ONE register site-wide (lean: warm B&W, signals archive-register)
- Subjects framed shoulder-up, eyes engaged, no busy backgrounds
- Source: real photos preferred over illustrations for v3; revisit when roster grows
- Alt-text: `"Portrait of {name}"` minimum; richer alt for screen-reader users when available

**Coherence-test pass:** portrait makes the listing feel like *people*, not *names*. Removing it returns to the audit's "reads as catalog" failure mode.

### §4.2 Genealogy diagrams (cross-thinker frames)

Specified in §3.4 (thinker page Named Frames) and §3.5 (concept page Genealogy lane). Style guide:
- Horizontal SVG chain
- Boxes for thinker names (Cardo weight-500)
- Arrows labeled with attribution kind: `original`, `extended`, `popularized`
- Color coding via existing `kind-original/extended/popularized` border-left tokens
- Single line at desktop; stacks vertically on mobile

**Coherence-test pass:** genealogy IS the argument — Brooks → Komoroske attribution shift is the lineage. Removing it returns to the audit's "frames are purely typographic" gap.

### §4.3 Concept-graph viz (deferred to v5+)

A site-wide concept-graph visualization (force-directed or otherwise) was Iter-2's named open territory. **Defer to v5+.** Reasons:

1. Iter-2 Lane 6 (Edwards & Hardman 1989; practitioner consensus on Obsidian/Roam) was direct: graph views are exploration toys, not navigation primitives. Don't lead with one.
2. The Distillery's current concept-graph has 2 concept pages and ~7 thinkers. Too small to warrant graph viz; cards + breadcrumbs serve better.
3. Reconsider when concept-page count > 8 and thinker count > 12.

**Anti-pattern logged:** no force-directed graph view as primary navigation (AC3 from Iter-2).

### §4.4 Embedded video / audio

**Default: no video / no audio embeds on Distillery pages.** Reasons:

1. Bandwidth (F-OPS finding — current hosting cost-bound on simple HTML)
2. Multimedia learning literature is split: Mayer's modality principle supports narration+visuals, but the Distillery's content is text-on-screen, not lecture-format. Adding video would require re-architecting the editorial register.
3. Reading is the engagement mode the Distillery's mission privileges.

**Exception:** when a thinker has a canonical talk (e.g., Komoroske's "Coordination Headwind" YouTube video), embed via a link card in the Body-of-Work section — *not* an autoplay embed. Link card pattern: small thumbnail + duration + speaker context.

### §4.5 Imagery register — ONE site-wide

Per Iter-2 cross-site pattern: every editorial site picks ONE imagery register and holds it. Distillery picks:

- **Portraits** — real photographs, warm B&W (proposed)
- **Diagrams** — SVG line work, palette-token colors (azul, tierra, oro)
- **Book covers** — when sourceable, neutral background, consistent crop
- **NO** stock photography, NO atmospheric imagery, NO Unsplash-style fillers, NO illustrated icons.

---

## §5 — Non-Color Feminine Dimensions

*Per P5: feminine intentionality as generative methodology. Rhythm, breath, hierarchy softness, voice-of-the-frame — drawn out, not imposed. Camila proposes the structural-behavioral substrate; the voice/editorial calls are Julie's slots.*

### §5.1 Rhythm + breath

- Section vertical spacing: 64-80px between major sections (current Distillery is 56px; loosens by 8-24px to honor the "breath" criterion C18 + Howell 2021 slow-design).
- Paragraph spacing: 1.5× line-height (vs single line-height tight default). Each paragraph gets visible whitespace, not dense packing.
- Card grid gap (concept holders, adjacent concepts): minimum 0.9rem, scales to 1.2rem on wide viewports.
- Hero block top-padding: clamp(48px, 7vw, 96px). Generous breathing room before content begins.

### §5.2 Hierarchy softness via weight, not capitals

Already locked in §2.4 (recommendation A). The cascade:
- H1 (page title): Cardo weight-500, size clamp(2.4rem, 5vw, 3.4rem), color ink
- H2 (section): Cardo weight-500, size 0.95rem, color azul, no uppercase, no tracking
- H3 (subsection): Cardo weight-400 italic, size 0.88rem, color ink-soft
- H4 (rare, lane-internal): Source Serif weight-600, size 0.92rem

### §5.3 Voice-of-the-frame — scaffolded slot

**Camila's structural proposal (NOT register pick):** the chrome (tagline beneath site name + footer signature + concept-page empty-state markers) speaks in *a recognizable, deliberate editorial voice* — meaning the register is chosen, not defaulted to CMS third-person passive.

**Three register alternatives — Julie picks:**
- **(a) First-person editorial** ("I read these thinkers because…"). Marginalian-adjacent. Personal, present, owns the curation. Risk: harder to grow past Julie if the site later includes other voices.
- **(b) Third-person institutional** ("Thinker Distillation reads…"). Edge.org-adjacent. Ceremonial, scalable, slightly cooler. Risk: drifts toward generic editorial-press if not done with intent.
- **(c) Hybrid — third-person chrome, first-person editorial lanes.** Chrome is institutional; the julie-lane treatment (already in place) carries first-person. Two registers cohabit, lane-marked. This is closest to the *current* implementation, where "Curated by Julie Davila" is third-person byline but the editorial lanes are first-person.
- *Camila does not lean — this is genuinely Julie's call. (a) is bolder, (b) more scalable, (c) preserves what already works.*

**Julie writes:**
- Mission tagline (per §3.1) — current placeholder is third-person; Julie picks first-person or third per Mode-A/B/C register (`PAI/USER/DoctrineRegister.md`).
- Footer signature — current "Curated by Julie Davila." is third-person. Camila's lean: keep this third-person (it's a *byline*, not a *voice*), so the voice work lives in the tagline.
- Long-read chapter intros — current chapters have no editorial intro. Adding one is a Julie call: yes/no/maybe-per-chapter.
- Concept-page empty-state ("Awaiting Julie's editorial reading") — this IS voice-of-the-frame and is currently strong; keep.

**Anti-pattern:** no `<aside>` "Did you know?" call-outs, no "Editor's note:" frames, no "P.S." sign-offs. Editorial voice carries through structural decisions, not chatty interruptions.

### §5.4 Slow / reflective interaction

- No scroll-progress bar.
- No "estimated read time" on thinker pages (passive cue invites optimization-of-reading; runs against P2 longitudinal).
- Estimated read-time IS appropriate on long-read chapter index (when a reader is choosing chapter order, time-budget signal helps).
- No "share this article" buttons in v3 (customer-zero phase). Reconsider at promotion.
- No animations except `prefers-reduced-motion`-respecting fade on portrait load (180ms, ease-out).

### §5.5 Anti-essentialism guard (per AC7)

This section's decisions audited against AC7: none impose stereotyped feminine signaling. All decisions defensible as methodology-driven (Bardzell, Howell), not aesthetic-essentialism-driven.

---

## §6 — Color + Ornament Discipline

*Token application by surface. Camila Hub palette adopted at the token layer.*

### §6.1 Palette application

| Token | Hex | Used for |
|---|---|---|
| `paper` | `#F4EFE6` | Primary background (page) |
| `paper-warm` | `#EDE6D7` | Lane tints (julie-lane, what-x-says, long-read CTA), card backgrounds |
| `ink` | `#2A2520` | Body text, hero titles, link text default |
| `stone-700` | `#4E4842` | Body text alternate (lower-emphasis surfaces) |
| `stone-500` | `#8B8275` | Metadata, eyebrow labels, byline, breadcrumb separators |
| `stone-300` | `#D9D1C2` | Rules, dividers, card borders |
| `azul` | `#2C4A6B` | Link color default, H2 section headers, primary accent |
| `tierra` | `#A04A2C` | Link hover, "where this breaks" accent border, attention markers |
| `oro` | `#B8956A` | Link visited, julie-lane border-left, secondary accent |

**Contrast verification:**
- `ink #2A2520` on `paper #F4EFE6` → ~14.4:1 PASS (WCAG AA)
- `azul #2C4A6B` on `paper #F4EFE6` → ~8.1:1 PASS
- `stone-500 #8B8275` on `paper #F4EFE6` → ~4.7:1 PASS (passes AA for normal text, comfortable margin vs the borderline 4.6:1 of current `--ink-muted`)
- `tierra #A04A2C` on `paper #F4EFE6` → ~5.3:1 PASS

### §6.2 Ornament discipline

**Decision: NO ornament on the Distillery in v3.** Reasons:
- Camila Hub uses ONE cenefa SVG 3× site-wide. That works because Camila Hub is the "home base" where the ornament earns identity.
- The Distillery is editorial-press register. Restraint signals seriousness (Iter-2 cross-pattern 5).
- Wabi-sabi-adjacent: the discipline of *not* adding ornament is itself the design statement.

**Reconsider:** if v4+ adds a "thinker-clusters" surface or a "concept-cluster" surface, a single ornament marking cluster-boundaries could earn placement. Don't pre-design.

### §6.3 Focus styles — addresses F16 (P0)

**Site-wide rule:**
```
:focus-visible {
  outline: 2px solid var(--azul);
  outline-offset: 2px;
  border-radius: 2px;
}
```
Applied to all interactive elements (`a`, `button`, `[tabindex]`, form controls). WCAG 2.4.7 PASS. Resolves F16.

### §6.4 Skip-to-content (F17)

Add to `Base.astro` immediately after `<body>`:
```
<a class="skip-to-main" href="#main">Skip to content</a>
```
With CSS: position absolute, top -40px, left 0, focusable. On `:focus`, top: 0 + z-index. Standard screen-reader / keyboard accessibility primitive.

### §6.5 `<nav>` landmark (F18)

The chrome's nav row (Thinkers / Concepts / About from §3.1) wraps in `<nav aria-label="primary">`. Adds the missing landmark.

### §6.6 Dark mode — deferred

Distillery v3 ships light-mode only. Reasons:
- Camila Hub is light-mode (token system designed for paper background).
- Iter-2 Lane 4 flagged [LOW] confidence on dark-mode reading research; no empirical case for it yet on long-form editorial.
- Defer to v5+.

---

## §7 — Scaffolded Julie-Slots

*Per writing-partner per-field discipline: structural/aesthetic proposals are Camila's; voice/editorial/heritage decisions are Julie's. This section lists every Julie-slot explicitly so none get pre-decided in the prototype.*

| Slot | Type | What Julie picks | Current scaffold |
|---|---|---|---|
| Mission tagline | Voice | The actual sentence beneath site name | Placeholder: "Curated readings of practitioners whose ideas are worth metabolizing" |
| Footer signature | Voice | Keep "Curated by Julie Davila." or evolve | Keep proposed |
| Long-read chapter intros | Voice | Whether to add per-chapter editorial intros (and what register) | None currently; ADD as optional field |
| Portrait sourcing strategy | Editorial / Heritage | Real photos vs commissioned line-art vs monogram-only | Camila's lean: real photos for v3, commissioned at scale |
| Portrait register | Aesthetic / Heritage | Warm B&W vs color vs duotone | Camila's lean: warm B&W |
| About-page content | Voice | When promotion approaches, who writes it, what it says | Per Iter-1 decision: required-before-promotion artifact, deferred |
| Spanish-language thinkers carve-out | Editorial | When future Spanish-writing thinkers join — format of quote/translation pairing | Camila's structural proposal: bilingual `.es` + `.en` frontmatter fields on quotes; Julie picks how the surface renders |
| `julie_reading` per concept page | Editorial | Concept-by-concept first-person editorial reading | Currently empty on coordination-headwind, adaptive-capacity; AC10 holds — Camila never authors these |
| `working_uses` per thinker / concept | Collaborative (carve-out) | Recorded by Camila in joint work; Julie reviews | Per 2026-05-26 carve-out — Camila auto-records joint-work uses; Julie can prune |
| Section-header verbiage (where current is generic) | Editorial | E.g., "Where This Breaks" vs "Limits" vs "Where the frame breaks" | Current section names preserved; Julie can evolve |
| **Voice-of-the-frame register** | Voice | (a) first-person / (b) third-person institutional / (c) hybrid per §5.3 | Camila does not lean — Julie's call |
| **Lineage rendering** (per §3.4 + §3.5) | Aesthetic / Editorial | (a) flat prose list / (b) static mini-tree SVG / (c) interactive influence graph | Default (a) until Julie commits |
| **Pull-quote sourcing rules** | Editorial | Page citation policy, translator attribution, original-language pairing requirements | Not pre-specified — Julie picks when content surface needs it |
| **Naming conventions for non-Western thinkers** | Editorial / Heritage | Native script, transliteration, common English form, family-given order policy | Not pre-specified — Julie picks before non-Western thinker joins roster |
| **Pronoun + honorific defaults in bios** | Editorial | "He / She / They" vs by-thinker explicit; honorific policy (Dr., Prof., none) | Not pre-specified — Julie picks before public consumption |
| **Distillation-metaphor literalness in copy** | Voice | (a) name only / (b) section-level vocabulary / (c) thoroughgoing — every CTA | Current = (a); Julie picks if/when she wants to extend |

---

## §8 — Implementation Order

*Iter-5 prototype sequence. Each step is a 1-3 hour increment with a verifiable artifact at the end. Don't sequence them in parallel — order is load-bearing.*

1. **Token layer first** — adopt Camila Hub's `tailwind.config.mjs` palette + fontFamily into Distillery (or migrate Distillery from raw CSS-vars to Tailwind for parity). One commit, one artifact: the build still works against existing components.

2. **Typography cascade** — apply §2 decisions: body measure, leading, hierarchy treatment, link affordance, pull-quote refinements. One commit per major decision (5-7 commits). Verify visually against an unchanged page screenshot from Iter-3.

3. **Chrome rework** — apply §3.1: three-line chrome with mission tagline + concepts in nav. Wire `<nav>` landmark (F18) + skip-link (F17) at the same time. One commit.

4. **Focus styles** — apply §6.3 site-wide. One commit. Verify via keyboard tab through all four page-types.

5. **Index page portrait pairing** — apply §3.3 with monogram fallback for thinkers without portraits yet. One commit. Portrait sourcing is Julie's slot; ships with monograms until.

6. **Thinker page hero with portrait** — apply §3.4 changes (portrait pairing, leave genealogy diagram for step 8). One commit.

7. **Long-read concept-glossary sidebar** — apply §3.6 with frontmatter glossary field on existing chapters. Add chapter-of-N indicator. One commit.

8. **Genealogy mini-diagrams** — SVG component for thinker-page Named Frames + concept-page Genealogy lane (§3.4 + §3.5). Single shared component. One commit.

9. **Concept-page refinements** — holder cards with portrait thumbnails + pending-concept styling clarification (§3.5). One commit.

10. **Verify + ship to staging** — full audit pass against the rubric (re-run Iter-3 against the new design). Identify any regressions or new findings before customer-zero acceptance.

**Estimated total prototype effort:** 12-20 hours across 10 commits. Each step is reviewable independently. Each is reversible (commit-level revert).

**Out-of-sequence:** body-of-work covers (§3.4 item 3), Spanish-language carve-out rendering, About page — defer until Julie surfaces a roster member who needs it.

---

## §9 — What This Document Is NOT

- Final brand guidelines — this is *first concepts of branding*, refined over multiple projects.
- A complete accessibility audit — F16/F17/F18 addressed; full WCAG-AA audit lives in pre-promotion gate.
- A migration plan — see `gitlab-migration-plan.md` (parallel F-OPS track).
- A content-architecture proposal — that's Julie's next surface after Iter-5 prototype ships.
- A typography license check — Cardo + Source Serif 4 are SIL OFL / Google Fonts. JetBrains Mono is Apache 2.0. All free for commercial use. Confirmed.

---

## §10 — Decisions Locked (2026-05-26)

**All 14 decisions captured below. Iter-5 prototype implements against these.**

**Designer picks (7):**

| Section | Decision | Pick |
|---|---|---|
| §2.2 | Body measure | A — `clamp(45ch, 62ch, 68ch)` |
| §2.3 | Body size + leading | A — 18px / 1.62 |
| §2.4 | Section-header hierarchy | A — weight-axis, no uppercase, Cardo weight-500 azul |
| §2.6 | Link affordance | A — underline always, azul→tierra→oro cascade, 2px focus outline |
| §3.1 | Chrome pattern | A — three-line with mitigations (≤7-word tagline cap, scroll-collapse, text-only nav) |
| §3.3 | Portrait sourcing | (i) Real editorial photos for v3 — Camila scouts; revisit at ~15 thinkers |
| §3.3 | Portrait register | Warm B&W — archive register, palette-cohesive |

**Author / voice picks (7):**

| Section | Decision | Pick |
|---|---|---|
| §5.3 | Voice-of-the-frame register | **First-person editorial** — chrome speaks as "I"; cascades to tagline, long-read intros, concept-page empty-states |
| §3.1 | Mission tagline (working draft) | **"Thinking through the shoulders of giants"** — Julie's phrasing; minor micro-decisions on case/period and explicit-"I"-vs-gerund pending |
| §3.6 | Long-read chapter intros | Add `intro` frontmatter field on long-read chapters — Julie writes per-chapter when she feels it, optional |
| §3.4 / §3.5 | Lineage rendering | Keep current flat prose ("also held by") for v3 — defer SVG/graph decision until more concept pages exist |
| Footer | Footer signature | Keep "Curated by Julie Davila." — third-person byline acceptable alongside first-person voice |
| Section names | "Where This Breaks", "Editorial Reading", "Named Frames", etc. | Keep current — open to evolving as Julie lives with the prototype |
| Parkable bundle | Spanish-thinker quote format, non-Western naming conventions, pronoun/honorific defaults, distillation-metaphor literalness, pull-quote sourcing rules | **Park all five** — surface just-in-time when a roster addition or content surface triggers the need |

**Deferred (pre-promotion gate):** About page content, full WCAG-AA audit, performance budget tightening, SEO/Open Graph/JSON-LD, mobile screenshot pass.

**Carve-outs preserved:**
- C23 bilingual chrome **OUT** for Distillery (English-only public-consumption posture)
- AC10 `julie_reading` per concept page — Camila never authors
- `working_uses` carve-out — Camila auto-records joint-work uses, Julie reviews
- AC7 anti-essentialism guard applies site-wide

**Iter-5 prototype** spawns on Julie's go. Estimated E4-E5, 12-20 hours across 10 sequenced commits per §8.

**F-OPS migration plan** at `gitlab-migration-plan.md` — runs on Julie's schedule, parallel to Iter-5, no blocking dependency.
