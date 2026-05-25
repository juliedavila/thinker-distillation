# Thinker Page Schema — v1 (TEI Pattern, Locked)

> Canonical shape of a thinker page on the distillation site. Locked through a six-question walk-through with Julie (2026-05-24 / 2026-05-25). One thinker per page, graph-backed for cross-thinker views in v2+. Customer-zero is Julie; depth tuned for senior practitioners triangulating fast, readable by curious generalists. Inclusion filter — ≥2 years of consistent body of work AND produced a vocabulary or set of frames practitioners now use to think — is backstage curatorial discipline, not reader-facing justification.

---

## 0. Discipline Gates (hard architectural invariants)

The three gates that hold Path C (core schema + named optional type-extensions, TEI-pattern) from drifting into Path B (per-type sub-templates) over time. Council 5/5 verdict.

1. **Node-type uniformity.** Only `Thinker` and `Frame` are primary node types. New `thinker_type` values add property shapes and optional edges; they never introduce new node types. This is the load-bearing constraint that makes the v2 cross-thinker concept graph queryable.
2. **Frame-level attribution from v0.** Every `Frame` node carries `attribution_kind`, `primary_author`, `co_originators[]`, optional `derived_from` edge. Required from the first thinker page, not retrofitted. Skipping this means re-curating every prior page when the first company-distributed thinker arrives.
3. **Casey-test as v0 acceptance gate.** Before any thinker ships at v1, draft their page. If the byline would read as a quiet false claim, fix the schema or move the subject to a different page type. Casey Rosenthal triggered this gate during v0→v1 design; resolution was to exclude him from v1 and treat him as a v2 concept-page anchor instead.

---

## 1. Frontmatter (machine-readable, mostly backstage)

```yaml
---
slug: alex-komoroske
name: Alex Komoroske
canonical_url: https://komoroske.com    # nullable for pre-web thinkers
active_years: 2014–present              # free-text bracketed range; ancient OK
primary_domains: [organization-design, platforms, complexity]
status: alive-active                    # alive-active | alive-inactive | deceased
inclusion_rationale: >                  # CURATORIAL DISCIPLINE — not rendered on page
  Produced a portable vocabulary for organizational complexity that
  practitioners now use to think about their own work.
thinker_type: essay-corpus              # essay-corpus | book-author | principles-distiller | catalog-builder | mixed
has_long_read: true
long_read_path: /thinkers/alex-komoroske/long-read
last_updated: 2026-05-25
---
```

**Notes:**

- `inclusion_rationale` is **backstage** — read by Julie during curation, not rendered on the reader-facing page. (Q3 lock — Popova pattern: filter is implicit in editorial choice.)
- `thinker_type` drives render hints only — it never gates which schema fields exist. (Discipline Gate 1.)
- `canonical_url` is nullable for pre-web thinkers; `active_years` accepts free-text bracketed ranges for ancient or otherwise unusual lifespans.

---

## 2. Page Sections (fixed order, omitted when empty)

### §1 Header / Hero

`thirty_second_take` IS the editorial framing per thinker — no separate "Why this thinker matters" line. Reader experiences editorial voice, never compliance language.

Fields: `name`, `tagline`, `domain_badges`, `thirty_second_take`.

(`inclusion_rationale_visible` from v0 spec — removed.)

### §2 Who They Are

Background and trajectory as it makes thinking legible, not biography for biography's sake.

Fields: `background`, `why_they_matter_as_a_thinker`.

### §3 Core POV

The single thesis holding the body of work together. 1–2 paragraphs editorial voice; optional `working_line` pull-quote in their voice.

Fields: `thesis`, `working_line` (optional).

### §4 Named Frames

The portable vocabulary. Each frame is a Concept (`Frame` node) held by this thinker, with **its own attribution** — different frames from the same thinker can have different attribution shapes.

**Per-frame fields:**

- `concept_slug` — stable, global, kebab (graph join key)
- `display_name`
- `one_line_gloss`
- `attribution_kind` — `original | extended | popularized | distributed | co-authored | translated | community`
- `primary_author` — usually the current thinker; other slug allowed for distributed-attribution
- `co_originators[]` — array of `{ slug, role }` for multi-author origin frames
- `source_link` — canonical place this thinker writes about it (or canonical translation, for ancient)
- `derived_from` — optional edge to an antecedent Frame
- `also_held_by[]` — **render affordance for v1 (Q4 lock)**: list of `{ thinker_slug, role, edge_label }` for other thinkers who hold this same concept. Computed at build time from the Concept's `holders[]`, minus the current thinker. Rendered as a small "also held by:" link cluster directly beneath each frame on the thinker page.

### §5 Body of Work

Curated reading list with editorial annotation, not a complete bibliography.

**Per-item fields:** `title`, `type`, `year`, `link`, `editorial_note`, `read_first`, `canonical`.

`type` enum: `book | essay | talk | blog-series | interview | paper | translation`. For ancient/translated thinkers, items carry an optional `translator`, `edition`, `edition_year` sub-block (translator block — TEI-style extension).

### §6 Editorial Reading

Julie's voice lane — analytical synthesis, what she takes, where she extends, working uses.

**Fields:** `what_i_take`, `where_i_extend`, `working_uses` (optional bullets).

**Visual treatment:** indented block, "From Julie's reading:" header, slight color shift, sans-serif at base.

### §7 Where This Breaks

Julie's honest-limits lane. Required, not optional.

**Fields:**

- `limits[]` — each: `headline`, `elaboration`, `severity` (`local | structural`)
- `still_load_bearing_despite` — short paragraph at the close

**Visual treatment (Q2 lock — Path 2):** Same color family + same indent + same Julie-voice mark as §6. Distinguished by §7's structural list-of-limits layout (each limit as a card with headline / severity / elaboration) AND a subtle typographic accent (left-border weight or a small mode-marker icon — final call at design time).

**Closing-beat treatment:** The `still_load_bearing_despite` paragraph at the end of §7 renders in §6 style — no list structure, no accent — to signal the rhetorical shift from critique back to synthesis. Reader experiences critique → critique → critique → "and yet, here's why this is still load-bearing."

### §8 Adjacent Thinkers

Graph surfaced at page level.

**Per-edge fields:** `target_slug`, `display_name`, `edge_type` (`antecedent | extends | critiques | parallel | synthesizes`), `edge_label` (one-line in editorial voice), `strength` (`primary | secondary`).

### §9 Further In

Reading paths: `start_here`, `then_read[]`, `if_you_want_depth`, `if_you_want_breadth`.

### §10 Long Read (optional)

For thinkers with book-length treatments. Chapters live in a separate `longReadChapters` Astro Content Collection at `src/content/long-read/{thinker_slug}/{nn-chapter}.md` — the chapter_list is *computed* at build time from that collection (filter by `thinker_slug`, sort by `chapter_number`) rather than duplicated in the thinker's frontmatter. §10 on the thinker page renders the long-read `title` + `summary` + a CTA link to `/thinkers/{slug}/long-read`; the index page lists all chapters; per-chapter pages render at `/thinkers/{slug}/long-read/{chapter}` with prev/next navigation.

**Thinker frontmatter (`long_read` block):** `title`, `summary` (2–3 paragraphs), `source_path` (path to working files in the local book project).

**Chapter frontmatter:** `thinker_slug` (kebab-case, joins to the thinker), `chapter_number` (non-negative integer; 0 for prefaces / introductions), `title`, `summary` (optional), `last_updated`.

**Rationale for two-collection design (2026-05-25):** keeping the chapter list in one place (the chapter collection, not the thinker frontmatter) prevents drift between the listing and the actual chapter files — adding a new chapter is one new markdown file, no thinker-frontmatter edit needed, and the build catches missing chapters via `getStaticPaths` instead of producing broken links.

---

## 3. Voice / Structure Lanes (attribution model — Q5 lock)

Four lanes. Every content block on every thinker page belongs to exactly one. Visual treatment makes the lane unambiguous. **Meta-explanation lives in the About page, not as a per-page colophon.**

| Lane | Content | Attribution | Visual Treatment |
|------|---------|-------------|------------------|
| **What X says** | Direct quotation, close paraphrase | Inline attribution every block | Quote block, distinct color/border |
| **Editorial reading (§6)** | Julie's analytical synthesis | "From Julie's reading:" header | Indented, color shift, sans-serif at base |
| **Where this breaks (§7)** | Julie's honest-limits critique | "Where I think this breaks:" header | Same family as §6 + list-of-limits structure + subtle accent |
| **Adjacent thinkers (§8)** | Graph edges with editorial labels | Card list with edge-type tags | Card grid, edge labels in editorial voice |

Every thinker page footer carries a small `About →` link to the manifesto.

---

## 4. Data Model

### Nodes (two and only two, per Discipline Gate 1)

**Thinker**

| field | type | required |
|-------|------|----------|
| slug | string (kebab) | yes |
| name | string | yes |
| frontmatter | object | yes |
| sections | object keyed by section number | yes |

**Frame**

| field | type | required |
|-------|------|----------|
| slug | string (kebab) — **globally stable** | yes |
| display_name | string | yes |
| one_line_gloss | string | yes |
| attribution_kind | enum (see above) | yes |
| primary_author | thinker_slug | yes |
| co_originators[] | array of `{ slug, role }` | optional |
| holders[] | computed: all `(:Thinker)-[:HOLDS]->(:Frame)` | computed |

**Source** — secondary node for source materials (books, essays, talks, translations). Used as edge target, not as primary page entity at v1.

### Edges

| edge_type | from | to | semantics |
|-----------|------|-----|-----------|
| `introduces` | Thinker | Frame | This thinker originates this frame |
| `extends` | Thinker | Frame | Builds on an existing frame |
| `critiques` | Thinker | Frame | Pushes back on this frame |
| `holds` | Thinker | Frame | Uses without claiming origin |
| `derived_from` | Frame | Frame | One frame builds on another |
| `appears_in` | Frame | Source | Source is primary material for the frame |
| `adjacent-to` | Thinker | Thinker | Same neighborhood; symmetric |
| `antecedent-of` | Thinker | Thinker | Historical precedence and influence |

Edge metadata: `label`, `strength` (`primary | secondary`), `source_link`.

**Concept slug stability:** Frame slugs are global. Renaming is a migration with alias support, not an edit. `also_known_as[]` added before renaming.

---

## 5. Site-Level Artifacts (Q3 + Q5 locks)

### Site-level tagline

Voice-led, criterion-free one-liner in the site chrome — establishes kind-of-object once for the curious generalist landing from search. Wording is Julie's call (naming instinct). Placeholder: *"Curated readings of practitioners whose ideas are worth metabolizing."*

### About page

The project's manifesto. Single page doing four jobs:

1. **Editorial mission** (Popova-style — what this site is, in Julie's voice).
2. **How these pages are written** (names the four lanes; explains attribution; serves as the colophon for power users who care about citation accuracy).
3. **The inclusion filter as backstage discipline** (for the curious — "here's how I choose; this is not authoritative biography").
4. **Posture toward the source thinkers** (gratitude, framing — where the IP question gets answered in Julie's own words).

Required v1 artifact. Treated as a real writing piece, not boilerplate.

---

## 6. Publishing Surface (Q6 lock)

- **Framework:** Astro 4.x. Content Collections give typed frontmatter; components handle structured sections; islands-of-interactivity available for v2 graph viz without committing to a full app framework.
- **Host:** Netlify. Lowest-friction setup, branch previews, free tier. Astro build output is portable — migration to Cloudflare Pages later is straightforward if Julie decides to build personal Cloudflare infra.
- **Repo:** Single repo at `~/Camila/thinker-distillation/`. Per-thinker markdown under `content/thinkers/{slug}.md`. Long-read content under `content/thinkers/{slug}/long-read/`.
- **Book projects:** Ways-of-Komoroske (`~/Camila/ways-of-komoroske/`) and Ways-of-Fowler (`~/Camila/ways-of-fowler/`) fold into the site as long-read content under each respective thinker. Working files stay where they are; published chapters get content-collection-shaped versions in the site repo.

---

## 7. Anti-Criteria

- **Anti-1:** Schema must NOT collapse "What X says" and "Editorial reading" into one voice lane. Layout-as-attribution is the IP firewall.
- **Anti-2:** Schema must NOT force book-length depth onto every thinker. §10 Long Read is optional; absence is not a lesser tier.
- **Anti-3 (reframed Q3):** Schema must NOT hide the *kind-of-object* (curated reading, not authoritative biography) from the reader. Site-level tagline + About page carry this; per-page rendering of `inclusion_rationale` is not required.
- **Anti-4:** Schema must NOT introduce new node types per `thinker_type` value. New types add property shapes and optional edges only. (Discipline Gate 1.)
- **Anti-5 (Q5 lock):** Schema must NOT push the IP/attribution explanation into a per-page colophon. The About page does that work once; every thinker page footer links to it.
- **Anti-6:** Schema must NOT pretend a thinker is the sole originator of frames that emerged from a team or movement. `attribution_kind: distributed` + `co_originators[]` are required for those cases. (Marcus's invariant from Council.)

---

## 8. Antecedent

- **Antecedent-1:** Each thinker on the site meets the inclusion filter at the time of publication. Edge cases trigger an explicit conversation: recommend exclusion + surface 1–3 same-neighborhood alternatives that clear the filter more cleanly. Saved as feedback memory.

---

# Pressure-Test: Alex Komoroske (v1 case)

## §0 Frontmatter

```yaml
slug: alex-komoroske
name: Alex Komoroske
canonical_url: https://komoroske.com
active_years: 2014–present
primary_domains: [organization-design, platforms, complexity]
status: alive-active
inclusion_rationale: >
  Produced a portable vocabulary for organizational complexity (coordination
  headwind, Schelling-point organizations, gardener-vs-architect) that
  practitioners now use to think about their own work. ~10 years across essays,
  talks, blog, and consulting practice.
thinker_type: essay-corpus
has_long_read: true
long_read_path: /thinkers/alex-komoroske/long-read
last_updated: 2026-05-25
```

## §1 Header / Hero

- **name:** Alex Komoroske
- **tagline:** The systems-thinker who named the hidden physics of why large organizations slow down.
- **domain_badges:** `organization-design`, `complexity`, `platforms`
- **thirty_second_take:** Komoroske's body of work is one argument: most organizations operate against an invisible drag that grows faster than headcount, and the leadership move is to garden the conditions where local decisions can happen rather than to centralize control. The slime mold is the working metaphor. Coordination headwind is the named cost. Schelling-point engineering is the leverage.

## §2 Who They Are

Komoroske spent his career inside platforms — Google (Chrome, Salesforce platforms), Stripe (Climate, identity) — with a long arc of writing on Medium that runs parallel to the institutional work. Platforms thinker first, org-design thinker second, but the two collapse into each other: a platform is just an organization in code, and an organization is a platform of humans. His instinct is to treat large social systems as physics problems with hidden conservation laws.

What makes him portable as a *thinker* is the vocabulary. He names things — coordination headwind, the slime mold, the gardener, the bramble, the Schelling point, adjacent possible — and the names lodge.

## §3 Core POV

Complex systems work best when they are gardened, not architected. The leader's job is not to plan the optimal answer and propagate it downward; the leader's job is to make defensible answers focal enough that local actors converge on them without being told. Organizations that ignore this pay a tax that grows faster than they expect, sooner than they expect — coordination headwind — and the standard responses (more meetings, more reorgs, more hiring) make it worse. The fix is to push decisions to where local information lives, accept the messiness, and trust that recovery time in a self-correcting system is faster than freeze-up time in a centralized one.

> *"Most organizations work like the opposite of the slime mold. There is a roadmap. There are quarterly goals. There is a project manager. And somehow, despite all of this central planning, the work moves slower the bigger the organization gets."* — paraphrased from the coordination-headwind essay (2018)

## §4 Named Frames

| Frame | attribution_kind | Source |
|-------|------------------|--------|
| **coordination-headwind** | `original` (Komoroske generalized Brooks's narrow claim; `derived_from: brooks-law`) | medium.com/@komorama coordination essay |
| **slime-mold** | `popularized` (Tero 2010 experiment; Komoroske made it the working metaphor for org coordination) | komorama medium archive |
| **schelling-point-organizations** | `extended` (Schelling 1960 *Strategy of Conflict*; Komoroske applied to org decision-making) | medium.com/@komorama/on-schelling-points-in-organizations |
| **gardener-vs-architect** | `original` (Komoroske's leadership-stance contrast) | across multiple essays |
| **heroics-smell** | `original` (if your system requires heroes, your system is broken — diagnostic, not solution) | medium.com/@komorama |
| **adjacent-possible** | `extended` (Kauffman via Johnson; Komoroske applies to org movement) | across essays, Stripe-era talks |

Each frame renders with `also_held_by:` cluster underneath at build time. Example: `coordination-headwind also held by → Fred Brooks (antecedent, "named the same cost for engineering teams in 1975")`.

## §5 Body of Work

- **The Coordination Headwind Essay** — `essay`, 2018, [link] — `read_first: true`, `canonical: true`. Keystone.
- **On Schelling Points in Organizations** — `essay`, ~2019, [link] — `canonical: true`. Hidden-physics piece; pairs with the headwind essay.
- **The Bramble / Slime Mold Essay** — `essay`. The metaphor piece; best read after Coordination Headwind so the metaphor lands in context.
- **Platform conference talks** (Google, Stripe) — `talk`. Adds the verbal hedges the written essays leave out — useful for seeing him think.
- **Blog corpus on komoroske.com** — `blog-series`. Working ideas tested before they harden into essays.

## §6 Editorial Reading

**What I take from Komoroske.** The coordination-headwind frame is the single most useful thing I carry into security organization design. Most security programs fail not because the threat model is wrong but because the coordination cost of acting on the threat model exceeds the available organizational energy. Once you have the headwind frame, you stop trying to fix slow security work by adding more security people; you start trying to reduce the coordination surface that the security work has to cross. Structural intervention, not headcount intervention.

**Where I extend.** Komoroske writes about coordination as a general organizational physics. I push it into security specifically: every security control is a coordination event with an attached headwind cost, and the right design move is to reduce the number of agreements a control depends on. Schelling points show up here too — a security culture works when the "secure default" is the focal one, the one nobody has to defend choosing. Straight Komoroske, applied to threat surface.

**Working uses:** "Boring Seams" keynote · Cordon framework · Tinkerers community sizing.

## §7 Where This Breaks

- **Regulated environments shorten the recovery-time advantage** — *severity: structural* — The slime-mold's wrong turns are recoverable only when backing out is cheap. In regulated industries (banking, healthcare, defense), wrong turns generate audit findings, breach reports, compliance debt that does not back out cheaply.
- **The gardener metaphor has no story for adversarial actors** — *severity: structural* — A garden assumes the plants are not trying to kill you. Security, fraud, political work all involve adversaries who exploit the gardener's tolerance. The framework's silence on this shows up the minute you try to apply it where some actors are optimizing against you.
- **"Push decisions to where local information lives" assumes shared goals** — *severity: local* — In organizations with misaligned incentives, pushing decisions local doesn't reduce coordination cost — it relocates it inside a single team or person. The headwind sublimates into individual stress rather than disappearing.
- **The vocabulary becomes its own jargon** — *severity: local* — Once a team has "coordination headwind" in their lexicon, every slow meeting gets blamed on it. The frame becomes a thought-terminator if not held carefully.

**Still load-bearing despite:** The diagnostic power of the headwind frame is enormous even with these limits. You can apply it to your own organization and immediately see costs you were paying invisibly. That's what a good framework does — makes the invisible legible. The limits are reasons to *combine* Komoroske with other frames (Reason on safety-critical systems, Dekker on adversarial / failure-prone systems), not reasons to ignore the headwind frame.

## §8 Adjacent Thinkers

- **Fred Brooks** — `antecedent` · `primary` — "Brooks named the coordination cost in 1975 for engineering teams under deadline. Komoroske generalized the same physics from engineering to all coordination work."
- **Thomas Schelling** — `antecedent` · `primary` — "Schelling's 1960 focal-point theory is the hidden physics under Komoroske's coordination work. Komoroske borrows it explicitly."
- **Martin Fowler** — `parallel` · `secondary` — "Fowler builds the same kind of named-vocabulary instrument for software design that Komoroske builds for org design. Different domain, same cartographer move."
- **Peter Senge** — `parallel` · `secondary` — "Same systems-thinking territory from the learning-organization angle. Komoroske rarely cites him; the absence is interesting."
- **Stuart Kauffman / Steven Johnson** — `antecedent` · `secondary` — "Komoroske's use of 'adjacent possible' borrows directly from Kauffman via Johnson."

## §9 Further In

- **start_here:** The Coordination Headwind Essay (2018) — the keystone.
- **then_read:** On Schelling Points in Organizations → The Bramble / Slime Mold Essay.
- **if_you_want_depth:** → `/thinkers/alex-komoroske/long-read` (*Ways of Komoroske*).
- **if_you_want_breadth:** Brooks's *Mythical Man-Month* (Ch. 2 — Brooks's Law) and Senge's *Fifth Discipline* (Ch. 3–5).

## §10 Long Read

- **title:** *Ways of Komoroske*
- **summary:** Power in complex systems is emergent, not authored, so the work at every scale is to garden the conditions and resist the pull of central control. Unpacks the diagnosis (slime mold, coordination headwind, heroics smell, Schelling point), the prescription (gardening conditions, focal-point engineering, distributed decision rights), and the limits (regulated environments, adversarial actors, jargon collapse).
- **chapter_list:** Part 1 — The Diagnosis [`/long-read/01-diagnosis`]; subsequent chapters per `~/Camila/ways-of-komoroske/PLAN.md`.
- **source_path:** `~/Camila/ways-of-komoroske/` (working) → `content/thinkers/alex-komoroske/long-read/` (published).

---

# Inclusion Bench

**On the v1 roster (populated or staged):** Alex Komoroske (populated above), Martin Fowler (book project ready), Ray Dalio (next).

**Recommended additions in the resilience / operational-complexity neighborhood** (each clears the filter cleanly):

- **John Allspaw** — *Web Operations* editor; Adaptive Capacity Labs co-founder; named/popularized *blameless postmortem*, *above-the-line / below-the-line*, *dark debt*.
- **David Woods** — resilience engineering theorist; Cognitive Systems Engineering Lab at Ohio State; *graceful extensibility*, *adaptive capacity*, *Law of Stretched Systems*.
- **Sidney Dekker** — *Field Guide to Understanding Human Error*, *Drift Into Failure*, *Just Culture*; *drift into failure*, *just culture*, *new view of human error*.

**Watch list (for v2):** Nora Jones — *Learning From Incidents* community, *Howie* method for incident analysis. Strong individual frame production post-Netflix; ≥2yr-consistent-body clears but practitioners-cite-her-vocabulary is younger than the others.

**Excluded from v1 — candidate for v2 concept page:** Casey Rosenthal. Filter clears on ≥2yr but the individual-portable-vocabulary clause is weak — frames he's associated with (game days, blast radius, steady-state hypothesis, Principles of Chaos Engineering) emerged from the Netflix Chaos team collectively, not from him singly. Honest byline would read "Casey Rosenthal and the Netflix Chaos team" — at which point it's a concept-page anchor, not a thinker page. Re-evaluate as concept-page subject when v2 ships.

---

# v0 → v1 Changelog

| Q | Locked path | Change captured |
|---|-------------|-----------------|
| Q1 | Path C (TEI pattern) | Council 5/5 verdict — core schema + Frame-level attribution + named optional type-extensions. Three discipline gates locked at §0. |
| Q1.5 | Curatorial `page_kind` | Thinker-vs-concept-page distinction lives in Julie's judgment, not in schema. No `page_kind` enum. |
| Q2 | Path 2 — same family, distinguishable | §6 and §7 share Julie-voice family; §7 distinguished by list-of-limits structure + subtle accent. `still_load_bearing_despite` renders in §6 style as closing beat. |
| Q3 | Refined Path 2 — rationale backstage | `inclusion_rationale` stays in frontmatter (curatorial discipline), not rendered. Site-level tagline + About page do the kind-of-object work. Anti-3 reframed. `inclusion_rationale_visible` field removed from §1. |
| Q4 | Path 2 — minimal cross-thinker in v1 | `also_held_by[]` affordance added to §4 Named Frames. Full concept-page UI deferred to v2. |
| Q5 | Path 2 — About-page-as-manifesto | About page does four jobs (mission, lanes, filter discipline, source posture). Small footer link on every thinker page. No per-page colophon. |
| Q6 | Astro + Netlify, single repo | Cloudflare Pages was overweight given Julie's setup; Netlify is lowest-friction equivalent. Single repo at `~/Camila/thinker-distillation/` with book projects folded in as long-read. |

## v1.1 — Long-read tier wired (2026-05-25)

`chapter_list[]` removed from the thinker `long_read` frontmatter block. Chapters now live in a separate `longReadChapters` Content Collection; the per-thinker chapter list is computed at build time. Cross-references rebuilt: routes added at `/thinkers/[slug]/long-read` (index) and `/thinkers/[slug]/long-read/[chapter]`. First two chapters shipped: Komoroske Part 1 — The Diagnosis; Fowler Chapter 0 — Preface.
