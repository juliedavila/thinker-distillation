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
live_edge_visible: false                # v1.2 — opt-in for §11 Live Edge section; defaults false
# live_edge: { ... }                    # v1.2 — only when live_edge_visible: true; see §11
---
```

**Notes:**

- `inclusion_rationale` is **backstage** — read by Julie during curation, not rendered on the reader-facing page. (Q3 lock — Popova pattern: filter is implicit in editorial choice.)
- `thinker_type` drives render hints only — it never gates which schema fields exist. (Discipline Gate 1.)
- `canonical_url` is nullable for pre-web thinkers; `active_years` accepts free-text bracketed ranges for ancient or otherwise unusual lifespans.
- `live_edge_visible` (v1.2) defaults to `false`; curator opts in per-thinker. Requires `status: alive-active`. See §11 Live Edge for full contract.

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
- `render_tier` — `foreground | deep` (defaults to `foreground`). **v1.2 (Q1 lock):** the full lattice lives in frontmatter; only `foreground` entries render inline on the thinker page. `deep` entries surface as a collapsed single-line disclosure ("12 more frames in this thinker's lattice; see long-read") with a build-time check that the count is honest. Cap: **8 foreground frames maximum, 6 typical** — render-time policy constant, no per-`thinker_type` scaling. Catalog-builder thinkers with deeper lattices push spillover to `deep` tier + long-read chapters; they do NOT get a relaxed foreground cap. Future: `thinker_type: catalog-builder` may warrant a v2 catalog-companion-page surface. Selection criterion for `foreground`: frames the thinker is cross-cited by other practitioners for, weighted by Julie's working uses.
- `also_held_by[]` — **render affordance for v1 (Q4 lock)**: list of `{ thinker_slug, role, edge_label }` for other thinkers who hold this same concept. Computed at build time from the Concept's `holders[]`, minus the current thinker. Rendered as a small "also held by:" link cluster directly beneath each frame on the thinker page.

### §5 Body of Work

Curated reading list with editorial annotation, not a complete bibliography.

**Per-item fields:** `title`, `type`, `year`, `link`, `editorial_note`, `read_first`, `canonical`, `attribution_kind` (optional, v1.2).

`type` enum: `book | essay | talk | blog-series | interview | paper | translation`. For ancient/translated thinkers, items carry an optional `translator`, `edition`, `edition_year` sub-block (translator block — TEI-style extension).

**`attribution_kind` enum (v1.2 — Q4 lock): `authored | hosted`.** Default is `authored` (implicit when omitted). `hosted` entries are **projected at build time from §8 `hosts` edges** — they are NOT independently authored data. Single source of truth: the §8 edge. The §5 render of a `hosted` item MUST display the host-attribution label and the `hosted_on_url` from the edge payload (build-pipeline test fails the render otherwise — see Anti-16). Use case: Fowler hosting Dehghani's Data Mesh series at martinfowler.com appears in Fowler's §5 reading list as a hosted item, with the host-attribution label, while the source-of-truth lives on the §8 edge.

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

**Per-edge fields:** `target_slug`, `display_name`, `edge_type` (`antecedent | extends | critiques | parallel | synthesizes | hosts`), `edge_label` (one-line in editorial voice), `strength` (`primary | secondary`), `render_tier` (v1.2), `auto_surfaced` (v1.2, computed), `editorial_demote_to` (v1.2, optional), `hosted_items[]` (v1.2, conditional on `edge_type: hosts`).

**v1.2 schema bumps (Q2 + Q4 + Q5 locks):**

- **`edge_type: hosts` (Q4 lock).** Captures the editor-platform face — a thinker who *hosts* others on infrastructure they own (Fowler hosting Dehghani / Böckeler / Lewis / Sadalage / Kua at martinfowler.com). Hosting is categorically distinct from authorship — host doesn't claim the work, just platforms it. The `hosts` edge IS the source of truth for hosted work; §5 `attribution_kind: hosted` entries are projected from these edges at build time. Note: Komoroske-style "amplifies via network" is NOT hosting — no platform Komoroske owns and edits. Use `extends` or `parallel` edges for amplification, not `hosts`.

- **`hosted_items[]` on `hosts` edges (Q4 lock).** Optional payload, only present when `edge_type: hosts`. Subfields per item: `title`, `kind` (`essay | series | talk | interview | translation`), `year`, `hosted_on_url`, `editorial_framing` (the *host's* stated framing of why they hosted this piece — NOT Julie's voice; Julie's reading of the relationship lives in §6 `what_i_take`).

- **`render_tier: foreground | deep` (Q2 lock).** Mirrors the §4 mechanism — full adjacency neighborhood lives in frontmatter, only `foreground` entries render inline on the §8 card grid. Cap: **5 foreground adjacents typical, up to 7 when site-internal mutual edges exist** (site-internal edges exempt from the typical-5 cap). Defaults to `foreground`.

- **`auto_surfaced: boolean` (Q2 lock, build-computed).** Set `true` at build when `target_slug` resolves to a published thinker page. Auto-surfaced edges **auto-promote to `render_tier: foreground` AND default to `strength: primary`** unless explicitly demoted via `editorial_demote_to`. This is what makes Brooks-on-Fowler-page mechanical, not editorial-discretionary.

- **`editorial_demote_to: secondary` (Q2 lock, optional override).** When an auto-surfaced site-internal edge should NOT render as primary (e.g., Komoroske → Senge where the editorial absence is itself the content — Komoroske rarely cites Senge), set this explicitly in frontmatter. The demotion must be visible, not silent.

- **Build-time warning (Q2 lock).** Missing the auto-promote (e.g., Fowler shipping without Brooks listed when Brooks is a published thinker page and Fowler's frontmatter names `brooks-law` as `derived_from`) produces a build-time warning, not a silent omission.

- **Critics live here too (Q5 lock).** `edge_type: critiques` already existed; v1.2 adds the build-computed `critic_has_distillery_page: boolean` property, which drives three-tier render weight:
  - Critic clears inclusion filter AND has Distillery page → `strength: primary`
  - Critic clears the named-critique-threshold only → `strength: secondary`
  - Critic clears neither → omit or optional secondary (editorial discretion)
  - Named-critique threshold: critic has named the critique in their *own* durable artifact (essay, book chapter, talk transcript) — NOT internet snark, NOT conference Q&A, NOT third-party characterization.
  - Register lane: critic `edge_label` is **Mode B (Camila-handle voice)**, NOT Mode C (Julie voice). Preserves the writing-partner discipline; Camila can author critic edge_labels because they are editorial commentary on the critic's argument, not Julie's analytical synthesis.
  - Casey-test coupling: when a critic clears the inclusion filter, the same Casey-test applies — if listing this critic would feel like Julie picking a fight she hasn't earned in her own work, demote to secondary or omit. The gate isn't "is the critic right" — it's "is naming this critic an editorial move Julie has earned the standing to make in this venue."
  - Working norm: pre-ship, run a 10-minute "who critiques this thinker in durable artifact" search; surface ≥1 critic via `edge_type: critiques` when one exists.

### §9 Further In

Reading paths: `start_here`, `then_read[]`, `if_you_want_depth`, `if_you_want_breadth`.

### §10 Long Read (optional)

For thinkers with book-length treatments. Chapters live in a separate `longReadChapters` Astro Content Collection at `src/content/long-read/{thinker_slug}/{nn-chapter}.md` — the chapter_list is *computed* at build time from that collection (filter by `thinker_slug`, sort by `chapter_number`) rather than duplicated in the thinker's frontmatter. §10 on the thinker page renders the long-read `title` + `summary` + a CTA link to `/thinkers/{slug}/long-read`; the index page lists all chapters; per-chapter pages render at `/thinkers/{slug}/long-read/{chapter}` with prev/next navigation.

**Thinker frontmatter (`long_read` block):** `title`, `summary` (2–3 paragraphs), `source_path` (path to working files in the local book project).

**Chapter frontmatter:** `thinker_slug` (kebab-case, joins to the thinker), `chapter_number` (non-negative integer; 0 for prefaces / introductions), `title`, `summary` (optional), `last_updated`.

**Rationale for two-collection design (2026-05-25):** keeping the chapter list in one place (the chapter collection, not the thinker frontmatter) prevents drift between the listing and the actual chapter files — adding a new chapter is one new markdown file, no thinker-frontmatter edit needed, and the build catches missing chapters via `getStaticPaths` instead of producing broken links.

### §11 Live Edge (optional, v1.2 — Q3 lock)

The current-era surface for alive-active thinkers whose continued production needs a home that doesn't pollute curated `body_of_work[]` or stretch `further_in.if_you_want_breadth`. Examples: Fowler post-2015 (Refactoring 2e, Data Mesh hosting, Exploring Gen AI memo series, Tech Radar); Komoroske post-2018 ongoing essays; Dalio post-2017 *Changing World Order*; Saxe-class active LLM-security research.

**Opt-in via frontmatter flag.** Defaults OFF. Curator opts in per-thinker; the section only renders when explicitly enabled. No phantom-empty rendering.

**Frontmatter:**

```yaml
live_edge_visible: boolean           # default false; curator opts in per-thinker
live_edge:                            # only present when live_edge_visible: true
  current_focus: string              # one editorial sentence, present-continuous
  summary: string                    # prose paragraph, Camila voice, present-continuous tense,
                                     # names specific work-objects (titles, dates, co-authors); 80–180 words
  recent_work:                       # optional; only when ≥3 artifacts cluster naturally
    - title: string
      year: number
      kind: string                   # book | essay | talk | series | tool | other
      with: string                   # optional co-author
      note: string                   # optional 1-sentence editorial annotation
  last_observed: YYYY-MM-DD          # MANDATORY when live_edge_visible: true
```

**Validator rules:**
- `live_edge_visible: true` requires `status: alive-active` (else build error).
- `live_edge_visible: true` requires `live_edge.summary` AND `live_edge.last_observed` (else build error).
- `live_edge.recent_work` is optional; each entry requires `title`, `year`, `kind`.
- **No `frame_ref` / `frame_id` / link-to-Frame-node fields permitted inside `live_edge`** (validator rejects). Emerging frames may be *mentioned* in prose; they cannot *link* to Frame nodes until those Frames clear the Casey gate. Protects Discipline Gate 2 (Frame-level attribution honesty).

**Render contract:**
1. Section heading: **Live Edge** (or Spanish-bilingual equivalent if/when the Distillery adopts bilingual section labels).
2. One-line subtitle: `Last surveyed {last_observed} · {N} days ago` — greyed / de-emphasized when N > 90.
3. Body: prose paragraph in Camila voice, **present-continuous tense** (not retrospective — same editorial voice as the rest of the page, with tense shifted). Names specific work-objects (titles, dates, co-authors) inline.
4. Optional: compact `recent_work` inline list (NOT a dated bullet column) — title + year + kind + inline note as aside.

**Render-time behavior:**
- `live_edge_visible: false` → section does not render. No phantom empty.
- `live_edge_visible: true` + fresh (`last_observed` within 90 days) → full render, normal styling.
- `live_edge_visible: true` + stale (`last_observed` > 90 days) → render with greyed-out subtitle + "refresh pending" badge.
- `live_edge_visible: true` + missing required fields → build fails (validator rejects).

**Maintenance cadence (Q3 lock).** Refresh rides the weekly discovery pass — no separate live-edge cadence. For each thinker with `live_edge_visible: true`, the discovery pass asks: "Has anything new surfaced in the last 90 days?" Yes → update `summary` + `recent_work[]` as needed; bump `last_observed`. No → bump `last_observed` only (signal: still-surveyed, nothing new). 90+ days without a bump → render shows visible-staleness automatically.

**Working norm:** `live_edge.summary` prose is Camila writing-partner lane — present-continuous, hedged where uncertain, names specific work. This entry lives in `feedback_writing_partner_per_field.md`. Schema affords the slot; norms govern the voice.

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

- **Framework:** Astro 6.x. Content Collections give typed frontmatter; components handle structured sections; islands-of-interactivity available for v2 graph viz without committing to a full app framework.
- **Host:** GitLab Pages (`gitlab.com/juliedavila/thinker-distillery`, Private + `pages_access_level=private`, project members only). Bun container CI via `.gitlab-ci.yml`. Migrated from Netlify Iter-6 2026-05-27 after free-tier exhaustion; Astro build output stays portable.
- **Repo:** Single repo at `~/Camila/thinker-distillation/`. Per-thinker markdown under `content/thinkers/{slug}.md`. Long-read content under `content/thinkers/{slug}/long-read/`.
- **Long-read working notes:** Live at `~/Camila/thinker-distillation/_working/{thinker-slug}/` (workspace-cohesive convention ratified Iter-7 step 1 2026-05-27, resolves Q6 from Fowler audit). Published chapters get content-collection-shaped versions under the long-read content path above. Standalone `~/Camila/ways-of-{slug}/` dirs are the retired legacy convention — Fowler migrated into `_working/martin-fowler/`; Komoroske archived at `~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/` (chapter content already merged into the site).

---

## 7. Anti-Criteria

- **Anti-1:** Schema must NOT collapse "What X says" and "Editorial reading" into one voice lane. Layout-as-attribution is the IP firewall.
- **Anti-2:** Schema must NOT force book-length depth onto every thinker. §10 Long Read is optional; absence is not a lesser tier.
- **Anti-3 (reframed Q3):** Schema must NOT hide the *kind-of-object* (curated reading, not authoritative biography) from the reader. Site-level tagline + About page carry this; per-page rendering of `inclusion_rationale` is not required.
- **Anti-4:** Schema must NOT introduce new node types per `thinker_type` value. New types add property shapes and optional edges only. (Discipline Gate 1.)
- **Anti-5 (Q5 lock):** Schema must NOT push the IP/attribution explanation into a per-page colophon. The About page does that work once; every thinker page footer links to it.
- **Anti-6:** Schema must NOT pretend a thinker is the sole originator of frames that emerged from a team or movement. `attribution_kind: distributed` + `co_originators[]` are required for those cases. (Marcus's invariant from Council.)

**v1.2 anti-criteria (Q1–Q5 schema bump locks):**

- **Anti-16 (Q4 lock — hosted-vs-authored firewall).** Schema and renderer must NOT collapse the host-vs-author distinction. `body_of_work[]` items with `attribution_kind: hosted` MUST render with the host-attribution label and `hosted_on_url` link, sourced from the §8 `hosts` edge payload. Build pipeline fails if a `hosted` item renders without the label. Decorative-only attribution (CSS-class-only differentiation) is explicitly insufficient — the structural separation lives in the schema, not the stylesheet.
- **Anti-17 (Q3 lock — phantom Live Edge).** Schema must NOT render the §11 Live Edge section when `live_edge_visible: false` or when the `live_edge` block is absent. No phantom-empty headers. Opt-in is the curator's affirmative act; default is silence.
- **Anti-18 (Q3 lock — stale Live Edge masquerading as current).** Schema must NOT render a populated Live Edge section without visible-staleness degradation when `last_observed` is older than 90 days. Honesty about freshness is part of the section's contract — if the page can't show currency, it must show that it can't.
- **Anti-19 (Q3 lock — Live Edge as Frame-attribution backdoor).** Schema must NOT accept `frame_ref` / `frame_id` / Frame-node-link fields inside `live_edge`. Emerging frames are *mentioned* in prose; they cannot *link* to Frame nodes until those Frames clear the Casey gate. Validator rejects at build.
- **Anti-20 (Q1 lock — silent foreground/deep mismatch).** Schema must NOT allow a thinker page to ship with `named_frames[]` where the deep-tier disclosure count does not match the actual deep-tier entry count. Build-time validation enforces honest count. If the page says "12 more frames in the lattice," the lattice MUST contain 12 more frames.
- **Anti-21 (Q2 lock — silent site-internal omission).** Schema must NOT permit a thinker page to ship with an `adjacent_thinkers[]` derived_from edge to a published-on-site thinker that is silently absent from §8. Build emits a warning when (a) a frontmatter `derived_from` or named-frame antecedent points to a slug that resolves to a published thinker page AND (b) that slug is not present in `adjacent_thinkers[]`.
- **Anti-22 (Q5 lock — critic register collapse).** Schema must NOT permit `edge_type: critiques` edge_labels in Mode C (Julie voice / first-person editorial). Critic edge_labels are Mode B (Camila-handle voice) — editorial commentary on the critic's argument, NOT Julie's analytical synthesis. The §7 `limits[]` lane remains Julie's; §8 critic edges are Camila's.

---

## 8. Antecedent

- **Antecedent-1:** Each thinker on the site meets the inclusion filter at the time of publication. Edge cases trigger an explicit conversation: recommend exclusion + surface 1–3 same-neighborhood alternatives that clear the filter more cleanly. Saved as feedback memory.

---

## 9. Concept Pages (v2 surface — added 2026-05-25 with `coordination-headwind` as the seed concept)

The v2 surface promised by Principle "Graph from day one." Per-concept pages are the canonical render of the Frame node — they exist alongside thinker pages, share the same source of truth, and add NO new node type to the graph.

**Authoring surface vs derived surface.** A `Concept` Content Collection at `src/content/concepts/{slug}.md` is the AUTHORING surface for editorial content about the concept itself. Holders, attribution timeline, and frame glosses are DERIVED from the existing `named_frames[]` entries in `src/content/thinkers/`. There is exactly one source of truth for "who holds this frame": the thinker frontmatter. Discipline Gate 1 (node-type uniformity) holds — Concept files are not graph nodes; they are editorial overlays on the Frame nodes already encoded in thinker entries.

**Concept frontmatter (locked 2026-05-25):**

```yaml
slug: coordination-headwind              # globally stable; matches concept_slug in thinker frames
display_name: Coordination Headwind      # concept-level display, not borrowed from any one holder
one_line_gloss: >                        # concept-level gloss, not borrowed verbatim from holder frame
  The invisible drag on collaborative work — the cost of every agreement
  a decision depends on — that grows superlinearly with team size.
last_updated: 2026-05-25

julie_reading: >                         # OPTIONAL — Julie's editorial reading of the concept itself
                                         # (distinct from her per-thinker readings of the holders)
julie_reading_prompt: >                  # OPTIONAL — Camila-scaffolded prompt for Julie to fill
  ...

limits:                                  # OPTIONAL — when present, ≥2 enforced (per ISC-36)
  - headline: ...
    severity: local | structural
    elaboration: ...
still_load_bearing_despite: >            # OPTIONAL — closing-beat analog to thinker-page ISC-25

adjacent_concepts:                       # OPTIONAL — when present, ≥3 enforced (per ISC-36)
  - target_slug: ...                     # kebab-case; target concept page may not yet exist
    display_name: ...
    edge_label: ...

working_uses:                            # OPTIONAL — collaboration-recorded (Camila auto-updates when
                                         # a frame is actually deployed in joint work; Julie can also
                                         # write directly). Evidentiary not editorial.
  - ...

long_read:                               # OPTIONAL — same shape as thinker.long_read
  ...
```

**Page sections (order; omitted when empty):**

- **Hero** — `Concept` eyebrow + `display_name` + `one_line_gloss`
- **§A Genealogy** — holders sorted by `attribution_kind` (`original` first, then `co-authored`, `distributed`, `extended`, `popularized`, `translated`, `community`); each holder rendered with frame display_name + frame gloss
- **§B Holders** — holders grid (alphabetical within attribution_kind tier); each card links back to `/thinkers/<slug>`; attribution_kind tag + frame name + primary source link
- **§C Editorial Reading** — julie-lane styling; renders `julie_reading` when populated; renders empty-state slot (dashed border + scaffolded prompt under `<details>`) when not
- **§D Where This Breaks** — limit-card pattern (same component as thinker page); `still_load_bearing_despite` closing-beat conditional
- **§E Adjacent Concepts** — links to existing `/concepts/<slug>` pages; pending-concept (dotted-underline) for slugs not yet authored
- **§F Working Uses** — julie-lane styling; only renders when `working_uses[]` populated. **Collaboration-recorded as of 2026-05-26:** Camila auto-appends entries when a frame is deployed in joint work; Julie can also write directly. The field is evidentiary (documenting actual use), distinct from `julie_reading` which remains Julie-writes-only editorial.
- **§Long Read** — same as thinker §10

**Cross-linking (thinker → concept):**

When a concept page exists for a `concept_slug`, the corresponding thinker-page §4 Named Frame renders an additive "Open concept page →" link below the inline `also_held_by` cluster. When no concept page exists, the link is omitted entirely — v1 behavior preserved exactly. The link is gated on `buildConceptPageIndex()` returning the slug; this is a build-time check, never a 404 risk.

**Derivation contract (locked 2026-05-26 per v3-blocker 1A resolution):**

Holders on concept pages are derived at build time from thinker `named_frames[]` entries. Concept pages NEVER author holders in their own frontmatter. To add a holder, edit the upstream thinker's `named_frames[]` array — not the concept file. The `Concept` Content Collection schema deliberately has no `holders[]` field; if a future contributor reaches for one, the answer is "edit the thinker." This contract is what makes the IP-firewall mechanical: the source of truth is upstream of the editorial overlay. Astro rebuilds derive holders fresh from thinker frontmatter on every build, so the concept page is auto-fresh — there is no snapshot step and no manual sync.

**Editorial-overrides-derivation (locked 2026-05-26 per v3-blocker 2B resolution):**

When editorial voice wants to qualify a derived holder ("Brooks's framing assumes engineering teams under deadline; Komoroske's generalization stretches but doesn't break"), the qualification lives in editorial voice — `julie_reading` (Mode C) or concept-level editorial sections in Camila handle voice (Mode B). The concept schema deliberately has no per-holder `qualifies:` field. Three reasons: (a) preserving derivation purity per the contract above, (b) qualifications are interpretation, not fact, so structuring them in schema reads as derived when they are authored, (c) Mode A/B/C register lanes are visually distinct and load-bearing — qualification in editorial voice keeps the lanes from blurring.

**Minimum-corroboration floor (locked 2026-05-26 per v3-blocker 3A resolution):**

A concept page requires N≥2 independent derivable holders to ship. Below that, the candidate is either a doctrine claim (belongs in Julie's own writing, not the Distillery) or a single-thinker concept (lives on that thinker's page as a `named_frames[]` entry, possibly with editorial expansion in `what_i_take` / `where_i_extend`). No doctrine-claim exception with explicit attribution: the Distillery is per-thinker editorial readings with cross-thinker concept pages as the second-class entities — single-author concept pages drift toward doctrine even with author labeling, and Anti-12 below is supposed to prevent that.

**v2-surface anti-criteria (added 2026-05-25 — extend §7):**

- **Anti-7:** Concept page must NOT show all holders with the same `attribution_kind`. Diverse genealogy must be preserved — the IP-honesty discipline that lives on thinker pages extends to concept pages.
- **Anti-8:** Concept page must NOT introduce a third node type. `Concept` Content Collection is an AUTHORING surface for editorial content on the Frame node; holders are derived. Graph stays Thinker + Frame only. Discipline Gate 1 holds.
- **Anti-9:** Concept page must NOT render any `inclusion_rationale`-equivalent backstage content. Same discipline as Anti-3, applied at the concept layer.
- **Anti-10 (writing-partner invariant, refined 2026-05-26):** Camila must NOT author `julie_reading` content on concept files. Scaffold the slot, never write Julie's voice in editorial fields. Per `feedback_feminine_energy_writing.md` and DA-identity collaboration rules. **Carve-out:** `working_uses` is *evidentiary*, not *editorial* — Camila auto-records uses that actually happened in collaborative work (writing, presentations, research). The fact that a frame was deployed is documentable; Julie's editorial reading of it is not. See `feedback_writing_partner_per_field.md` for the full operational rule.
- **Anti-11 (added 2026-05-26):** Concept page must NOT read as a thinker page in disguise. If you could swap the URL prefix `/concepts/<slug>/` → `/thinkers/<dominant-holder>/` and the page would read as a defensible thinker page, it IS a thinker page in disguise — restructure or downgrade to a `named_frames[]` entry on the dominant holder. (Casey-test extension at pre-publication.)
- **Anti-12 (added 2026-05-26):** Concept page must NOT be a doctrine claim. The page must describe a recognized cross-thinker pattern, not Julie's synthesized doctrine about a topic with thinker citations as decoration. Strip-the-holders test at pre-publication: if removing the holder list leaves the editorial intact, the editorial IS the page and the holders are decoration — that is doctrine, and it belongs in Julie's own writing rather than the Distillery.
- **Anti-13 (added 2026-05-26):** No load-bearing editorial claim without an anchor. Every claim either (a) attributes to a holder via derivation, (b) lives in `julie_reading` as explicitly Julie's voice (Mode C), or (c) is bracketed in Camila handle voice (Mode B) as editorial commentary in `limits` / `still_load_bearing_despite` / `adjacent_concepts` edge labels. Mostly enforced by existing field design; the rule constrains FUTURE schema additions — new editorial fields must declare register lane up-front.
- **Anti-14 (added 2026-05-26):** Concept page must NOT reduce to a glossary stub. Minimum required content at ship: ≥2 entries in `limits`, `still_load_bearing_despite` populated, ≥3 entries in `adjacent_concepts` (the schema's existing soft floors, here reaffirmed as the hard publication gate). Empty `julie_reading` does NOT count against this — writing-partner discipline holds the slot.
- **Anti-15 (added 2026-05-26):** Concept page must NOT redundantly cover the same conceptual territory as an existing concept page. "Search before you author" discipline: walk existing concept pages before scaffolding; confirm no substantial territory overlap. When two candidates share territory, resolve to one page with sub-sections OR one page that names the other as an `adjacent_concept`. Distinct from Anti-12 and Blocker 3's N≥2 floor: a concept can clear those gates and still redundantly cover another concept's territory.

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
- **chapter_list:** Part 1 — The Diagnosis [`/long-read/01-diagnosis`]; subsequent chapters per `~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/PLAN.md`.
- **source_path:** Working notes archived at `~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/`; published chapters at `content/thinkers/alex-komoroske/long-read/`. Note: this thinker's working-notes pre-date the Iter-7 `_working/{slug}/` convention; new long-read working notes for other thinkers follow the convention.

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

## v1.2 — Fowler-audit schema bumps (2026-05-27, Q1+Q2+Q3+Q4+Q5 locks)

Iter-7 system-level Q-block resolution. Three Council passes (Q1+Q2+Q5 clustered; Q3 standalone; Q4 standalone) landed five locked decisions, applied as schema bumps below. Transcripts persisted at `~/.claude/PAI/MEMORY/COUNCIL/thinker-distillery-q{1-q2-q5-clustered,q3-live-edge,q4-hosted-canon}-20260527-*/transcript.md`.

| Q | Lock | Schema delta |
|---|------|--------------|
| Q1 | Frame surfacing depth — tiered rendering, uniform render contract | ADD `named_frames[].render_tier: foreground \| deep` (default `foreground`). Cap 8 foreground / 6 typical, no per-`thinker_type` scaling. Deep entries collapse to single-line disclosure; build verifies count. |
| Q2 | Adjacency reach + site-internal auto-surface | ADD `adjacent_thinkers[].render_tier: foreground \| deep` (default `foreground`); ADD `adjacent_thinkers[].auto_surfaced: boolean` (build-computed); ADD `adjacent_thinkers[].editorial_demote_to: secondary` (optional). Site-internal target_slug resolution auto-promotes to `foreground + primary`. Cap 5 typical / up to 7 with site-internal exemption. Build warning on silent omission. |
| Q3 | Live Edge — opt-in section for alive-active current-era work | NEW §11 Live Edge section. ADD `live_edge_visible: boolean` (default false); ADD `live_edge: { current_focus, summary, recent_work[], last_observed }` block. Validator: requires `status: alive-active`; requires `summary` + `last_observed`; rejects `frame_ref` fields. Render: prose-first, present-continuous, visible-staleness at 90 days. Maintenance rides weekly discovery pass. |
| Q4 | Hosted canon — editor-platform face | EXTEND `adjacent_thinkers[].edge_type` enum: add `hosts`. ADD optional `adjacent_thinkers[].hosted_items[]` (conditional on `edge_type: hosts`; subfields `title`, `kind`, `year`, `hosted_on_url`, `editorial_framing`). ADD optional `body_of_work[].attribution_kind: authored \| hosted` — `hosted` items are projected from §8 `hosts` edges at build time. Build-pipeline test fails any `hosted` §5 render without host-attribution label. |
| Q5 | Named critics — three-tier gating via existing `critiques` edge | NO new schema fields. ADD build-computed `adjacent_thinkers[].critic_has_distillery_page: boolean`. Three-tier rendering (primary / secondary / omit). Edge_labels in Mode B (Camila-handle voice). Casey-test gate: "has Julie earned the standing to name this critic in this venue." Working norm: 10-minute critic search per thinker pre-ship. |

**Net schema cost across all five locks:** 6 property additions (2 on `named_frames[]`, 3 on `adjacent_thinkers[]`, 1 on `body_of_work[]`) + 1 new section (§11 Live Edge) + 1 enum extension (`hosts` joins `edge_type`) + 2 frontmatter additions (`live_edge_visible`, `live_edge` block) + 7 new anti-criteria (Anti-16 through Anti-22). **Zero new node types.** Discipline Gate 1 (node-type uniformity) preserved.

**Backfill protocol for existing 7 thinkers (catalog only — done as separate task, NOT inline with schema bump):**
- All current `named_frames[]` entries default to `render_tier: foreground` — no breaking change. Audit per-thinker for entries to promote to `deep` (Fowler is the dominant case; Komoroske ch01 references additional non-foreground frames that may move).
- All current `adjacent_thinkers[]` entries default to `render_tier: foreground` — no breaking change. Build will emit auto-surface warnings; resolve each by either adding the missing adjacency, demoting via `editorial_demote_to`, or leaving (warning is informational, not blocking at first).
- Brooks ↔ Fowler ↔ Komoroske mutual edges are the highest-priority backfill (currently silently missing per the audit that triggered Q2).
- All thinkers default to `live_edge_visible: false` — no breaking change. Curator opts in per-thinker; Fowler, Saxe, Appleton, Forsgren, Fournier are the obvious starting candidates when those thinker pages reach `live_edge`-worthy state.
- `body_of_work[]` entries default to `attribution_kind: authored` (implicit) — no breaking change. Fowler's hosted canon (Dehghani / Böckeler / Lewis / Sadalage / Kua) is the v1.2 application target. Build the §8 `hosts` edges first; §5 hosted entries project from them.
- `edge_type: critiques` entries on existing 7 thinkers: pre-ship critic search per thinker as part of backfill iteration. Most thinkers have ≥1 durable critic; this raises hagiography-drift floor.

**Application order:**
1. Schema bumps land (THIS COMMIT).
2. ISA Save Point + Decisions + Changelog updated (next commit).
3. Build verification (`bun run build`) confirms schema additions are non-breaking.
4. Backfill iteration scheduled as separate work (NOT this session): per-thinker pass through the 7 live thinkers, surface auto-surface warnings, populate Brooks ↔ Fowler ↔ Komoroske mutual edges, optionally enable Live Edge on Fowler, populate Fowler hosted canon.
5. Loop activation: 5 candidate thinkers (Saxe / Forsgren / Fournier / Appleton / Hudson) go through inclusion Council under the v1.2 schema.
