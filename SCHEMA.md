# Thinker Distillery: Content Model and Editorial Rules

The Thinker Distillery publishes one page per thinker: a practitioner whose vocabulary other practitioners now use to reason about their own work. Each page is an editorial reading of that person's ideas. It names their central argument, the named concepts they gave the field, where those concepts fail, and who they connect to. The audience is senior engineering and security leaders who want to get oriented in a body of work fast, and the pages should also read well for a curious generalist. Alongside thinker pages, concept pages cover a single idea that several thinkers hold.

This document defines the fields each page carries, the order the site renders them in, and the editorial rules for writing them. The enforced schema is `src/content.config.ts`. If this document and that file disagree, the code is correct and this document needs fixing.

For the project's working log and full decision history, see `ISA.md`.

## Contents

1. Glossary
2. Core rules
3. Who writes what
4. Thinker pages
5. Long-read chapters
6. Concept pages
7. The Reading Protocol
8. Writing rules
9. Site-level pages
10. What the build enforces today
11. Decision history

---

## 1. Glossary

| Term | Meaning |
|------|---------|
| Thinker | A person with their own page. Stored in `src/content/thinkers/<slug>.md`. |
| Frame | A named concept a thinker uses, such as "coordination headwind." Each frame has a global slug (`concept_slug`) so several thinkers can hold the same one. |
| Holder | A thinker who lists a given frame in their `named_frames`. |
| Concept page | A page about one frame held by two or more thinkers. Stored in `src/content/concepts/<slug>.md`. |
| Editorial voice | Third-person prose written for the site. Never says "I." |
| Julie's voice | First-person prose written by Julie Davila, the site's curator, and by nobody else. |
| Camila | Julie's AI writing assistant. It drafts most editorial-voice prose and is never allowed to draft Julie's voice. |
| Council | A panel of AI reviewers, each given a specific role, that reads a draft and returns a verdict. Used in the Reading Protocol. |
| Byline test | Before a page ships, ask: would the byline, or any attribution on the page, quietly claim something false about who originated an idea? If yes, fix the attribution or move the subject to a different kind of page. Older notes call this the "Casey test," after the case that prompted it. |
| Reading Protocol | The fixed procedure that produces the Editorial Reading section (section 7 of this document). |
| Grounding pack | A generated file listing everything the site already says about a thinker and their neighbors, with a citable ID per item. |
| Lens | Julie's published positions, which the `extension` field must connect to. |

---

## 2. Core rules

These rules hold the content model together. Changing any of them means changing the model, so treat them as fixed unless Julie decides otherwise.

**Only two kinds of entity.** The graph has thinkers and frames, nothing else. A new `thinker_type` value may add optional fields or edges, but it never adds a new entity type. Concept pages are editorial overlays on frames and do not count as a third type. This rule keeps cross-thinker views (concept pages today, graph views later) queryable.

**Attribution lives on each frame.** Every frame records its own `attribution_kind`, `primary_author`, and, where relevant, `co_originators` and `derived_from`. Two frames from the same thinker can have different origins. A thinker must never be presented as the sole originator of a frame that came from a team or a movement: use `attribution_kind: distributed` with `co_originators` for those.

**Run the byline test before shipping.** Defined in the glossary. The test also applies to live-edge prose and to naming critics (see Adjacent Thinkers).

**Inclusion filter.** A thinker qualifies when they have at least two years of consistent work and have produced vocabulary or frames that practitioners now use to think. The filter is a private curation discipline. It is recorded in `inclusion_rationale` and never shown to readers. For a borderline case, recommend exclusion and suggest one to three people from the same area who clear the filter more cleanly.

**Frame slugs are permanent.** A `concept_slug` is a global join key. Renaming one is a migration across every thinker and concept file that uses it, never a casual edit.

**Layout shows who is speaking.** Quotation of the thinker, editorial reading, critique, and graph edges each have a distinct visual treatment. Readers should always be able to tell the thinker's words from the site's interpretation. The explanation of this attribution model lives once on the About page, never as a note repeated on each page.

---

## 3. Who writes what

| Content | Voice | Drafted by |
|---------|-------|------------|
| Editorial Reading: `reading`, `extension` | Editorial voice, no first person | Camila, through the Reading Protocol |
| Editorial Reading: `margin_note` | Julie's voice | Julie only |
| Concept page: `julie_reading` | Julie's voice | Julie only. Camila may write `julie_reading_prompt` to scaffold it. |
| `working_uses` (thinker and concept pages) | Factual record | Camila records real uses from joint work; Julie may also add entries |
| Everything else: hero, background, thesis, frame glosses, reading-list notes, limits, edge labels, Further In, live edge | Editorial voice | Camila, reviewed by Julie |

Labels for critics in Adjacent Thinkers are editorial voice. They comment on the critic's argument and never speak for Julie.

Both voices follow the same writing rules (section 8).

---

## 4. Thinker pages

One Markdown file per thinker at `src/content/thinkers/<slug>.md`. Almost everything lives in YAML frontmatter. The `slug` field must match the file name, because long-read pages look thinkers up by file name. Files whose names start with `_` are disabled drafts and are skipped by the build.

For a complete, current example, read `src/content/thinkers/nicole-forsgren.md`, which uses the newest fields (a protocol-built reading, live edge, deep frames, critics).

### 4.1 Backstage fields (never rendered)

| Field | Required | Holds |
|-------|----------|-------|
| `slug` | yes | Kebab-case ID, same as the file name |
| `canonical_url` | no | The thinker's home on the web. May be `null` for thinkers who predate the web. |
| `active_years` | yes | Free text, for example `2014–present` |
| `status` | yes | `alive-active`, `alive-inactive`, or `deceased` |
| `inclusion_rationale` | yes | Why the thinker clears the inclusion filter. Private. |
| `thinker_type` | yes | The form of their output: `essay-corpus`, `book-author`, `principles-distiller`, `catalog-builder`, or `mixed`. It may shape how a page is presented, but it never changes which fields exist. |
| `doctrine_mode` | yes | The site's editorial stance toward the thinker. See 4.2. |
| `has_long_read` | no (default `false`) | Set `true` to generate the long-read index page |
| `long_read_path` | no | Informational path to the long read; the site does not read it |
| `last_updated` | yes | Date |
| `reading_review` | no | Record of the Reading Protocol run. See 4.9. |
| `live_edge_visible`, `live_edge` | no | See 4.14 |

### 4.2 Doctrine mode

`doctrine_mode` tells the drafter how much naming work the page should do. It describes the site's approach to the thinker, which can differ from how the thinker's own corpus is shaped. The renderer never reads it.

- **`mode-c`**: the thinker has a clear central argument but left many ideas unnamed. The page separates the argument (`thesis`) from the named concepts (`named_frames`) and may coin portable names for ideas the thinker described without naming. Current examples: Komoroske, Fowler, Brooks, Allspaw, Woods, Dekker.
- **`mode-a`**: the page should avoid coining names. A page like this fails if it invents frames the thinker would not recognize, so `named_frames` stays short and close to the source.
- **`mode-b`**: the thinker's named artifact is itself the doctrine, such as DORA or *Principles*. The page presents the artifact faithfully and extends from it. Current examples: Dalio, Forsgren.

`doctrine_mode` and `thinker_type` are independent. Brooks is a `book-author` with `mode-c`.

Keep `thesis` and `named_frames` separate on every page: the thesis is the one argument, the frames are the names people carry away. Where the site's compressed phrasing is sharper than anything the thinker wrote, the page must not present that phrasing as the thinker's. A `thesis` may include one short parenthetical naming its intellectual antecedent (for example, lean and Goldratt's theory of constraints behind Forsgren) when that strengthens it. Structured lineage still belongs in `co_originators` and `derived_from`.

This field is a deliberate one-off. Do not add more backstage fields of this kind. If five more thinker pages ship and no `doctrine_mode` value has changed a drafting decision, delete the field. Julie owns that check.

### 4.3 Rendered sections, in order

The page template is `src/pages/thinkers/[slug].astro`. Sections render in this order:

1. Hero
2. Who They Are
3. Core POV
4. Named Frames
5. Body of Work
6. Editorial Reading
7. Where This Breaks
8. Adjacent Thinkers
9. Further In
10. Long Read (only when `long_read` is present)
11. Notes (the Markdown body of the file, when there is one)

Live Edge (4.14) renders after Further In when a thinker opts in.

### 4.4 Hero

The first impression: who this is and the whole argument in thirty seconds. The thirty-second take carries the case for why the thinker matters, so there is no separate "why this thinker" line.

| Field | Required | Holds |
|-------|----------|-------|
| `name` | yes | Display name |
| `portrait` | no | Image path. A monogram renders when absent. |
| `tagline` | yes | One line; also used as the page's meta description and on the home page roster |
| `primary_domains` | yes | List of domain tags, rendered as badges |
| `thirty_second_take` | yes | A short paragraph stating the thinker's whole argument |

### 4.5 Who They Are

Background and career, only as far as they make the thinking easier to understand. This is not a biography.

| Field | Required | Holds |
|-------|----------|-------|
| `background` | yes | Career and trajectory |
| `why_they_matter_as_a_thinker` | yes | What makes their ideas portable |

### 4.6 Core POV

The single argument that holds the body of work together.

| Field | Required | Holds |
|-------|----------|-------|
| `thesis` | yes | One or two paragraphs, editorial voice |
| `working_line` | no | A short pull quote in the thinker's own voice. Renders with the credit "paraphrased," so it must be a faithful paraphrase at minimum. |

### 4.7 Named Frames

The portable vocabulary: the named concepts this thinker holds. Each entry in `named_frames` has these fields:

| Field | Required | Holds |
|-------|----------|-------|
| `concept_slug` | yes | Global kebab-case ID. Joins the frame to other holders and to its concept page. |
| `display_name` | yes | The frame's name as shown |
| `one_line_gloss` | yes | One-sentence definition |
| `attribution_kind` | yes | `original`, `extended`, `popularized`, `distributed`, `co-authored`, `translated`, or `community` |
| `primary_author` | yes | Usually this thinker's slug. May name someone else for a distributed frame. |
| `co_originators` | no | List of `{ slug, role }` for frames with several originators |
| `source_link` | no | Where the thinker writes about it (for ancient thinkers, a canonical translation) |
| `derived_from` | no | `concept_slug` of an earlier frame this one builds on |
| `render_tier` | no | `foreground` (default) or `deep` |

What the page shows under each frame:

- **"also held by"**: other thinkers who list the same `concept_slug`, computed at build time in `src/lib/graph.ts`. The label next to each name comes from that holder's `attribution_kind` (for example "origin" or "extension").
- **"Open concept page →"**: shown only when `src/content/concepts/<concept_slug>.md` exists. The check runs at build time, so the link can never 404.

**Foreground and deep frames.** A thinker's full set of frames can live in frontmatter, while the page shows only the most important ones. Foreground frames render on the page; deep frames are meant to collapse into a single line such as "12 more frames; see the long read," with a build check that the count is honest. Show at most 8 foreground frames, typically 6, whatever the `thinker_type`. Thinkers with large catalogs push the rest to `deep` and to long-read chapters. Choose foreground frames by how often other practitioners cite the thinker for them, weighted by Julie's own working uses. The build fails if a page has more than 8 foreground frames. Deep frames render as a collapsed "N more frames" disclosure, so the count is always the real count.

### 4.8 Body of Work

A curated reading list with editorial notes. It is not a complete bibliography. Each entry in `body_of_work`:

| Field | Required | Holds |
|-------|----------|-------|
| `title` | yes | Title |
| `type` | yes | `book`, `essay`, `talk`, `blog-series`, `interview`, `paper`, or `translation` |
| `year` | no | Number or string |
| `link` | no | URL; the title links when present |
| `editorial_note` | no | Why to read it, and when |
| `read_first` | no | Renders a "read first" tag |
| `canonical` | no | Renders a "canonical" tag |
| `translator`, `edition`, `edition_year` | no | For translated or ancient works |
| `attribution_kind` | no | `authored` (default) or `hosted` |

**Hosted work.** Some thinkers publish other people's work on a platform they own, as Martin Fowler does for Zhamak Dehghani's Data Mesh series on martinfowler.com. Hosting is distinct from authorship and must never read as authorship. The source of truth for hosted work is a `hosts` edge in Adjacent Thinkers (4.11). A `hosted` entry in Body of Work is meant to be generated from that edge, and must display a host label and the `hosted_on_url`; a CSS style difference alone is not enough. The page template generates a "Hosted by" list under Body of Work from each `hosts` edge, with a "hosted, not authored by" label on every item. The build fails if a `hosted` entry is written into `body_of_work` by hand, or if `hosted_items` appear on any other edge type.

### 4.9 Editorial Reading

What the site takes from the thinker, and how that extends into Julie's field. The renderer labels this block "The Distillery's reading." It is written and reviewed through the Reading Protocol (section 7) and does not wait on Julie to ship.

| Field | Required | Holds |
|-------|----------|-------|
| `reading` | yes | What the site takes from the thinker. Stays close to the grounding pack. Editorial voice, 160 words maximum. Renders under "The reading." |
| `extension` | yes | Where the reading extends the thinker through Julie's published positions. Inference is allowed, but it must read as the site's argument and never as the thinker's claim. Editorial voice, 160 words maximum. Renders under "Where it extends." |
| `reading_review` | no | Backstage record of the protocol run: `protocol`, `date`, `verdict` (`accept` or `accept-with-edits`), `council_transcript`, `grounding_pack`, `claims`, `dissent` (default `false`) |
| `margin_note` | no | Julie's own first-person note. Renders as "Julie's note." Never required, never drafted by Camila, never blocks shipping. |
| `working_uses` | no | Bullet list of places the thinker's frames were used in real work |

Pages converted before September 2026 carried a first-person pair, `what_i_take` and `where_i_extend`. Those fields have been removed from the schema.

Visual treatment: an indented block with a slight color shift and a sans-serif base.

### 4.10 Where This Breaks

An honest account of where the thinker's ideas fail. Required on every page.

| Field | Required | Holds |
|-------|----------|-------|
| `limits` | yes, at least 2 | Each entry has `headline`, `severity` (`local` or `structural`), and `elaboration` |
| `still_load_bearing_despite` | yes | A closing paragraph on why the ideas remain useful anyway |

Each limit renders as a card showing headline, severity, and elaboration. The section shares the color family and indent of Editorial Reading, with the card layout and an accent to tell them apart. The closing paragraph renders separately, under "Still load-bearing, despite," in plain paragraph style, so the section reads as a run of critiques followed by a turn back to why the ideas still hold.

The section is labeled "Where this breaks."

### 4.11 Adjacent Thinkers

The thinker's neighborhood in the graph, shown as a card grid. Each entry in `adjacent_thinkers` (at least 3):

| Field | Required | Holds |
|-------|----------|-------|
| `target_slug` | yes | The other thinker's slug. They may not have a page. |
| `display_name` | yes | Name as shown |
| `edge_type` | yes | `antecedent`, `extends`, `critiques`, `parallel`, `synthesizes`, or `hosts` |
| `edge_label` | yes | One line, editorial voice, describing the relationship |
| `strength` | yes | `primary` or `secondary` |
| `render_tier` | no | `foreground` (default) or `deep` |
| `auto_surfaced` | no | Meant to be computed by the build. Do not set by hand. |
| `editorial_demote_to` | no | `secondary`, to override automatic promotion |
| `hosted_items` | no | Only on `hosts` edges. See below. |

**How many to show.** At most 5 foreground neighbors without a page on this site, and at most 7 foreground neighbors in total. The only exception is a thinker whose on-site neighbors alone exceed 7, since those always render. Set `render_tier: deep` on off-site neighbors past the cap; they collapse into an "N more neighbors" list. The build enforces both caps.

**Neighbors with pages on this site.** When `target_slug` matches a published thinker page, that edge should be marked `auto_surfaced`, show in the foreground, and default to `primary`. To show it as secondary anyway, set `editorial_demote_to: secondary` so the demotion is visible in the file. For example, Komoroske rarely cites Senge, and a secondary edge makes that absence visible. The build computes this: neighbors with pages here always render in the foreground, link to their page, carry an "on this site" tag, and sort first. `auto_surfaced` is computed, so the build fails if it is set by hand. The build warns when a page links to a thinker whose page does not link back, when a frame credits a co-originator who has a page here but is missing from `adjacent_thinkers`, and when a critic with a page here is not `primary`.

**Hosting edges.** Use `edge_type: hosts` only when this thinker publishes others' work on a platform they own and edit. Amplifying someone through a network is not hosting; use `extends` or `parallel` for that. A `hosts` edge may carry `hosted_items`, each with `title`, `kind` (`essay`, `series`, `talk`, `interview`, or `translation`), `year`, `hosted_on_url`, and an optional `editorial_framing`. The framing is the host's own stated reason for publishing the piece. The site's view of the relationship belongs in Editorial Reading.

**Critics.** Record critics with `edge_type: critiques`. Before a page ships, spend about ten minutes looking for someone who has critiqued the thinker in a durable artifact of their own, and add at least one critic when one exists. A durable artifact is an essay, book chapter, or talk transcript by the critic. Social media posts, conference Q&A, and third-party summaries do not count. Weight critics this way:

- The critic clears the inclusion filter and has a page on this site: `strength: primary`.
- The critic has published a durable critique but does not meet the first condition: `strength: secondary`.
- Neither: omit, or add as secondary at editorial discretion.

Apply the byline test to critics too. If naming a critic would read as Julie picking a fight she has not earned standing for in her own work, demote the edge to secondary or omit it. The question is whether naming the critic is a move the site has standing to make, regardless of whether the critic is right.

### 4.12 Further In

Suggested reading paths, in a field called `further_in`:

| Field | Required | Holds |
|-------|----------|-------|
| `start_here` | yes | The single best entry point |
| `then_read` | no | Ordered list of next reads |
| `if_you_want_depth` | no | Usually the long read, if one exists |
| `if_you_want_breadth` | no | Related thinkers or works |

### 4.13 Long Read

For thinkers who warrant a book-length treatment. Optional: a page without one is not a lesser page.

| Field | Required | Holds |
|-------|----------|-------|
| `long_read.title` | yes, when `long_read` is present | Title of the long read |
| `long_read.summary` | yes, when `long_read` is present | Two or three paragraphs |
| `long_read.source_path` | no | Where the working files live. Shown on the long-read index when no chapters are published. |

The thinker page shows the title, summary, and a "Read the long version →" link to `/thinkers/<slug>/long-read/`. That index page only exists when `has_long_read: true`, so set both. Chapters are described in section 5.

### 4.14 Live Edge

A section for what a living, active thinker is working on now. It keeps recent output out of the curated Body of Work and out of Further In. Examples: Fowler's recent memo series, Forsgren's DevEx research.

The section is opt-in per thinker and should never render as an empty heading.

| Field | Required | Holds |
|-------|----------|-------|
| `live_edge_visible` | no (default `false`) | Set `true` to opt in. Only valid with `status: alive-active`. |
| `live_edge.current_focus` | yes, when `live_edge` is present | One editorial sentence in present-continuous tense |
| `live_edge.summary` | yes, when `live_edge` is present | 80–180 words, editorial voice, present-continuous tense, naming specific works, dates, and co-authors. Hedge where uncertain. |
| `live_edge.recent_work` | no | Use only when three or more recent works cluster naturally. Each entry: `title`, `year`, `kind` (`book`, `essay`, `talk`, `series`, `tool`, or `other`), optional `with` (co-author), optional `note` (one sentence). |
| `live_edge.last_observed` | yes, when `live_edge` is present | Date the thinker was last checked |

Intended rendering:

1. Heading "Live Edge."
2. Subtitle "Last surveyed {last_observed} · {N} days ago."
3. The summary paragraph.
4. Optionally, `recent_work` as a compact inline list showing title, year, kind, and note.

If `last_observed` is more than 90 days old, the subtitle greys out and a "refresh pending" badge appears. The page must never present stale information as current.

Live-edge entries may mention emerging frames in prose, but must never link to frame entries. A frame gets structured attribution only after it passes the byline test and joins `named_frames`.

Maintenance: during the weekly discovery pass, check each opted-in thinker for new work from the last 90 days. If there is some, update `summary` and `recent_work`. Either way, update `last_observed`.

The build fails when `live_edge_visible` is true without `status: alive-active` or without `live_edge`, and when `live_edge` contains any key outside the fields above (which blocks frame links). Staleness is computed at build time, so a site that has not been rebuilt in a while understates the age.

---

## 5. Long-read chapters

Chapters are a separate content collection, one Markdown file per chapter at `src/content/long-read/<thinker-slug>/<nn-name>.md`. The chapter list is built from these files, so adding a chapter means adding one file, with no change to the thinker's frontmatter.

| Field | Required | Holds |
|-------|----------|-------|
| `thinker_slug` | yes | Must match a thinker file name |
| `chapter_number` | yes | Integer, `0` for a preface. Sets the order. |
| `title` | yes | Chapter title |
| `summary` | no | Shown on the index and under the chapter title |
| `glossary` | no | List of `{ term, gloss, concept_slug? }`. Renders as a side rail (a collapsible list on mobile), linking to concept pages that exist. |
| `intro` | no | Accepted by the schema; not rendered |
| `last_updated` | yes | Date |

Routes: the index is `/thinkers/<slug>/long-read/` and each chapter is `/thinkers/<slug>/long-read/<file-name>/`, with previous and next links.

Working notes for a long read live in `_working/<thinker-slug>/`. Published chapters are rewritten into the collection above.

---

## 6. Concept pages

A concept page covers one frame that several thinkers hold. It exists alongside the thinker pages and adds no new entity to the graph.

### 6.1 Where the data comes from

The concept file holds only editorial content about the concept. Everything about who holds the frame (holders, their attribution, their glosses) is derived at build time from the `named_frames` of thinker files. The concept schema has no `holders` field on purpose. To add a holder, edit that thinker's `named_frames`. Because holders are recomputed on every build, concept pages never need a manual sync.

Qualifications about a particular holder ("Brooks's framing assumes engineering teams under deadline") go into editorial prose (`julie_reading`, limits, or edge labels). There is no per-holder field for them, because interpretation stored as structured data would read as derived fact.

### 6.2 Fields

File: `src/content/concepts/<slug>.md`.

| Field | Required | Holds |
|-------|----------|-------|
| `slug` | yes | Matches the `concept_slug` used in thinker frames |
| `display_name` | yes | A name for the concept as a whole. Do not reuse one holder's frame name by default. |
| `one_line_gloss` | yes | A definition for the concept as a whole. Do not copy one holder's gloss. |
| `last_updated` | yes | Date |
| `julie_reading` | no | Julie's own reading of the concept. Julie writes it; Camila never does. |
| `julie_reading_prompt` | no | A prompt Camila writes to help Julie fill `julie_reading` |
| `limits` | no, but at least 2 when present | Same shape as thinker limits |
| `still_load_bearing_despite` | no | Closing paragraph after limits |
| `adjacent_concepts` | no, but at least 3 when present | Each entry: `target_slug`, `display_name`, `edge_label` |
| `working_uses` | no | Record of real uses in joint work. Camila may append these as they happen, because they record facts. |
| `long_read` | no | Same shape as on thinker pages |

### 6.3 Rendered sections, in order

The template is `src/pages/concepts/[slug].astro`.

1. **Hero**: a "Concept" label, `display_name`, and `one_line_gloss`.
2. **Genealogy**: each holder with their frame name and gloss. Sorted by `attribution_kind` in this order: `original`, `co-authored`, `distributed`, `extended`, `popularized`, `translated`, `community`, then alphabetically.
3. **Who Holds This Frame**: holder cards, same order, each linking to the thinker page and showing attribution, frame name, and source link.
4. **Editorial Reading**: `julie_reading` when present. Otherwise a visible empty slot reading "Awaiting Julie's editorial reading," with the prompt available in a collapsible block.
5. **Where This Breaks**: limit cards and the closing paragraph, when present.
6. **Adjacent Concepts**: links to concept pages that exist; concepts without a page yet show with a dotted underline.
7. **Working Uses**: when present.
8. **Long Read**: title and summary, when present.
9. **Notes**: the Markdown body, when present.

### 6.4 Rules for shipping a concept page

- **At least two independent holders.** With one holder, the idea belongs on that thinker's page as a frame. An idea with no real holders is Julie's own doctrine and belongs in her own writing.
- **Varied attribution.** If every holder has the same `attribution_kind`, the page loses the genealogy it exists to show.
- **Not a thinker page in disguise.** If swapping `/concepts/<slug>/` for `/thinkers/<main-holder>/` would leave a defensible thinker page, restructure it or reduce it to a frame on that thinker's page.
- **Not a doctrine claim.** Imagine removing the holder list. If the editorial content still stands on its own, the holders are decoration and the page is doctrine. It belongs in Julie's own writing.
- **Every claim is anchored.** Each claim is attributed to a holder through the derived data, sits in `julie_reading` as Julie's view, or sits in editorial fields (`limits`, `still_load_bearing_despite`, edge labels) as the site's commentary. Any future editorial field must state its voice when it is added.
- **More than a glossary entry.** At ship time a concept page needs at least 2 limits, a `still_load_bearing_despite` paragraph, and at least 3 adjacent concepts. An empty `julie_reading` does not block shipping.
- **No overlap.** Before writing a new concept page, read the existing ones. If two candidates cover the same ground, merge them into one page with subsections, or have one list the other as an adjacent concept.
- **No backstage content.** Nothing equivalent to `inclusion_rationale` renders on a concept page.

---

## 7. The Reading Protocol

Every `reading` and `extension` is produced by the steps below, in order, with no step skipped. The output of each step is kept as a record under `_working/<slug>/`.

1. **Generate the grounding pack.**

   ```bash
   bun scripts/grounding-pack.ts <slug>
   ```

   This writes `_working/<slug>/grounding-pack.md`. It contains the thinker's thesis, frames, and limits; edges in and out, with each neighbor's thesis; frames shared with other pages; names two hops away; Julie's published positions (the Lens, read from the "Key Positions" section of her private identity file under `LIFEOS_DIR`); neighbors' existing readings, for the novelty check; and any earlier Editorial Reading draft, as input only. Every item has a citable ID such as `[F:coordination-headwind]` or `[P:3]`.

2. **Draft with a claims map.** Before drafting, read the thinker's `doctrine_mode` and the writing-style guides listed in section 8. Write `reading` and `extension` into the thinker file. Then write `_working/<slug>/reading-claims.md` with one line per sentence (`- sentence [ID] [ID]`). `reading` stays close to its sources. `extension` carries the argument and must cite at least one Lens position (`[P:n]`), or the claims file must contain the line `lens: none applies`.

3. **Run the automated gates.**

   ```bash
   bun scripts/reading-gates.ts <slug>
   ```

   ```bash
   bun scripts/fact-ledger.ts <slug>
   ```

   Both must exit 0. `fact-ledger.ts` checks that every factual field on the page cites a verified source: it reads `_working/<slug>/facts.md` (one line per verified fact, with a URL and the date checked) and `_working/<slug>/page-claims.md` (which field cites which fact), and derives the required field list from the page itself, so a new frame, critic edge or book cannot be forgotten. It covers attribution, co-originators, `critiques` and `antecedent` edges, body of work, `active_years` and `background`. Interpretation is not a fact and is not checked there.

   `reading-gates.ts` must also exit 0. The script checks `reading`, `extension`, and `margin_note` for: em-dashes, banned words, contrast constructions such as "not just X" or "not X, but Y," and first person (allowed only in `margin_note`). For `reading` and `extension` it also checks the 160-word limit, that every sentence appears in the claims file, that every citation exists in the pack, and that the Lens is cited or waived. "Leverage" and "navigate" produce warnings instead of failures, because they are banned only as a verb or metaphor; check each by hand.

4. **Council review.** Five AI reviewers, each built for this job, read the page, the pack, and the claims map. Each returns ACCEPT, ACCEPT-WITH-EDITS, REVISE, or REJECT, with exact edits.
   - *Thinker's advocate*: would the thinker recognize this reading?
   - *Strongest critic*: argues back using the page's `critiques` edges.
   - *Grounding auditor*: do the cited items actually support each claim?
   - *Security-executive reader*: does the extension earn its place for this audience?
   - *Novelty and byline check*: does it repeat neighbors or the previous draft, and could the site's compressed phrasing be mistaken for the thinker's own claim?

   **Batches.** When several pages are converted at once, each reviewer reads every page in the batch and returns a verdict per page. This keeps the review to five reviewers, and it lets the novelty reviewer compare the pages with each other, which is where sameness shows up (repeated openers, the same closing move, the same Lens position everywhere). Before drafting a batch, give each page a different angle and Lens position where the sources allow it.

5. **Revise and re-review.** Any REVISE sends the draft back. Rewrite the fixes yourself under the writing rules (never paste a reviewer's suggested text if it breaks them), rerun step 3, and have only the dissenting reviewers plus the grounding and byline reviewers review again. Allow two revision rounds. A third REVISE, or any REJECT, goes to Julie. Use the full three-round Council debate instead of the single quick round for `mode-a` thinkers, or when two or more reviewers REJECT.

   **Round 3 converges rather than debating again.** For a `mode-a` page, rounds 1 and 2 are the full five seats and round 3 is a single adjudication pass, using `briefs/review-adjudicate.md`: it reads both transcripts, confirms every concern was resolved in the text rather than waved at, audits round 2's edits as the newest and least reviewed text on the page, and checks the fact ledger still holds. ACCEPT ships; anything else goes to Julie. **If any round 2 verdict is below ACCEPT-WITH-EDITS, round 3 reverts to all five seats.** Adopted 2026-09-17 on the calibration evidence: across four runs a five-seat round 3 accepted unanimously and changed no page, while rounds 1 and 2 caught something on every run. The seats come back for the case that evidence never covered.

   **Ask for the round count rather than remembering it.** `bun scripts/review-policy.ts <slug>` reads `doctrine_mode` off the page and prints the required rounds, the seats per round, the transcript suffix and the escalation condition. It is the executable form of the paragraph above, and the only place a caller should get the number. This rule was written here and nowhere else until 2026-09-17, and two `mode-a` pages shipped with a single round because the skill driving the work never mentioned it.

   **A reviewer's factual assertion is a research request, never a fact.** Three reviewer claims have been wrong: a sympathetic essay called a critique, an uptake quote with no source, a disclosed interest called undisclosed. Verify it and give it a line in `facts.md` before it reaches the page, or drop it and record that in the transcript.

6. **Record and ship.** Save the Council transcript to `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-reading-<slug>-<timestamp>-quick/transcript.md` (a private path on the maintainer's machine). Fill in `reading_review`, setting `dissent: true` if any reviewer stayed below ACCEPT-WITH-EDITS. Run the build, then open a merge request.

**Julie's role is to audit.** She reads every page with `dissent: true` and a random one in four of the rest, and approves through the merge request. She may add a `margin_note` at any time.

**Known limit.** The graph is still small, so early grounding packs lean on a few well-connected thinkers, so readings risk converging on the same moves. The novelty reviewer exists to catch that, and batches should assign each page its own angle before drafting. Revisit the reviewer roster once ten pages have protocol readings.

---

## 8. Writing rules

All site prose follows Julie's writing-style system, whoever drafts it. Editorial voice and Julie's voice differ in who is speaking; the rules below apply to both.

**Hard rules:**

- No em-dashes.
- No contrast constructions of the form "not just X," "not only X," or "not X but Y."
- Paragraphs carry the argument. Use bullets sparingly, and tables only for real two-dimensional comparisons.
- No banned words. The list is the `BANNED` pattern in `scripts/reading-gates.ts` (for example "operationalize" and "in the realm of"), plus "leverage" as a verb and "navigate" as a metaphor. The script matches the second pair only as warnings, because it cannot tell a verb or metaphor from ordinary use.

**Apply the rules with judgment.** Their purpose is prose that doesn't read like generic AI output, and the thinkers' own vocabulary still belongs on the page. Three cases get room:

- *Quotation.* A thinker's own words inside quotation marks keep their original wording and punctuation, banned words and em-dashes included. The gates script skips quoted text for this reason.
- *Terms of art.* When a word is the accurate name for something in the thinker's field, use it. The Dalio limit "The Bridgewater operationalization is contested" keeps the word because that's what the critique is about.
- *Repetition is the tell.* A precise word used once is fine. The same word five times across a page, or a jargon verb where a plain one works, is what makes prose sound machine-written. Fix those.

When a flagged word survives on purpose, the reviewer should be able to see why from the sentence itself.

The full rules live in Julie's private writing guides on the maintainer's machine, which are not part of this repo:

- `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/WRITINGSTYLE.md`: the complete banned list and its reasoning. Applies to everything.
- `~/.claude/LIFEOS/USER/AI_WRITING_PATTERNS.md`: a checklist for detecting AI-sounding prose, in three priority tiers (P0 to P2). Applies to everything.
- `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/RHETORICALSTYLE.md`: section 4 (limits on rhetorical figures) for all editorial prose; sections 2 and 3 (registers for honesty and disagreement) for limits and critic edge labels. Step 7 of the AI-patterns checklist cross-checks section 4. Do not skip it.
- `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/DOCTRINEREGISTER.md`: every thinker page. Covers the thesis-versus-frames split, doctrine mode, and the lineage parenthetical.
- `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/LONGFORMCRAFT.md`: long-read chapters only.
- `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/PERSUASIONARCHITECTURE.md`: section 5, only where a reading translates a thinker into security-executive terms.
- `PRIVATEWRITINGPRACTICE.md` in the same folder does not apply, because it covers private writing and this site is reader-facing.

**Checklist before anything ships.** This covers thinker pages, concept pages, merge request descriptions, and issue bodies, including content drafted by an automated loop.

1. Read the applicable guides above before drafting.
2. Confirm the baseline: `grep -c $'\xe2\x80\x94' src/content/thinkers/alex-komoroske.md` returns 0 (the pattern is an em-dash written as UTF-8 bytes).
3. After drafting, run `grep -c $'\xe2\x80\x94' <file>` (target 0) and `grep -iE 'operationaliz|delv|leverag|nuance' <file>` (target: no output, or only quotations and terms of art you have checked by hand), then work through the AI-patterns checklist.
4. Merge requests and issues are read cold. Open with a plain paragraph that says what the change is and why it exists, and define or remove internal shorthand.

---

## 9. Site-level pages

**Site tagline.** One line in the site header that tells a first-time visitor what kind of site this is, without stating inclusion criteria. Julie chooses the wording. The current text in `src/layouts/Base.astro` is "Thinking through the shoulders of giants."

**About page.** The project's statement of purpose. It is where the site explains, once, what it is and how pages are written, so thinker pages do not carry per-page disclaimers. It has four jobs:

1. State the editorial mission, in Julie's voice.
2. Explain how pages are written: who is speaking in each part of a page, and how attribution works.
3. Describe the inclusion filter for curious readers, making clear that the pages are curated readings with no claim to be authoritative biography.
4. State the site's stance toward the thinkers it covers, including how it handles their intellectual property, in Julie's words.

The About page is a required piece of real writing, never boilerplate. Every page footer links to it. The page lives at `src/pages/about.astro`. Its editorial sections (how pages are written, who gets a page) are written. The mission and the stance toward the thinkers are empty slots awaiting Julie.

The home page (`/`) lists thinkers alphabetically. `/concepts/` lists concept pages.

---

## 10. What the build enforces today

**Build failures** (the site will not build until fixed):

- `src/content.config.ts`: a required field is missing, an enum value is wrong, a slug is not kebab-case; a thinker has fewer than 2 limits, fewer than 3 adjacent thinkers, or more than 8 foreground frames; `live_edge_visible` is set without `status: alive-active` or without `live_edge`; `live_edge` has an unknown key; `body_of_work` contains a hand-written `hosted` entry; `hosted_items` sit on an edge that is not `hosts`; `auto_surfaced` is set by hand; a concept page lacks 2 limits, `still_load_bearing_despite`, or 3 adjacent concepts.
- `src/lib/checks.ts` (rules that need the whole graph): more than 5 foreground neighbors without a page here, or more than 7 in total; a concept page with fewer than 2 holders.

**Build warnings** (printed in the build log, prefixed `[distillery] warning`): a page links to a thinker whose page does not link back; a frame credits a co-originator who has a page here but is not a neighbor; a critic with a page here is not `primary`; every holder of a concept page has the same `attribution_kind`.

**Prose checks**: `scripts/reading-gates.ts` enforces the checks in section 7 for the Editorial Reading fields, and it fails on those. Since 2026-09-17 it also reads every other editorial field on the page (tagline, thirty-second take, background, why they matter, thesis, inclusion rationale, limits, frame glosses, edge labels, body-of-work notes, further-in lines) and prints a warning for em-dashes, banned words, the antithesis cadence and first person there. Those are warnings because the same pattern is sometimes correct in those fields, such as a limit headline that names the critique's own word. `--strict-prose` turns the warnings into failures. The script is run by hand as part of the Reading Protocol, not by the build.

**Fact ledger**: `scripts/fact-ledger.ts` fails when a factual field on the page has no verified source behind it, when a cited `[S:n]` is not in `facts.md`, or when a ledger line has no URL or no check date. It warns on a verified fact nothing cites, which is usually a claim a rewrite dropped. Run by hand as part of the Reading Protocol and by the pipeline at three stages.

**Review policy**: `scripts/review-policy.ts` prints the required round count per page. It decides nothing on its own; it is section 7 step 5 in executable form.

**Still applied by hand**: the byline test, the inclusion filter, the ten-minute critic search, the choice of which frames go in the foreground, and the remaining concept-page rules in 6.4 (not a thinker page in disguise, not a doctrine claim, no overlap).

---

## 11. Decision history

Older notes refer to the rules above by earlier labels: "Discipline Gates 1 to 3" (the first three core rules), "Anti-1" to "Anti-22" (the prohibitions now folded into each section), "Mode B" and "Mode C" for editorial voice and Julie's voice (unrelated to the `doctrine_mode` values), "lanes" for the voice zones of a page, and "§1" to "§11" for page sections. `ISA.md` holds the full record, including Council transcripts.

- **2026-05-25. Content model chosen.** A shared core schema with optional per-type fields, frame-level attribution from the first page, and the byline test as a shipping gate. A Council review agreed five to zero. The alternative, a separate template per thinker type, was rejected.
- **2026-05-25. Byline test first applied.** Casey Rosenthal was left off the roster because his best-known frames (game days, blast radius, steady-state hypothesis) came from the Netflix Chaos team collectively. He is a candidate subject for a future concept page.
- **2026-05-25. No page-kind field.** Whether a subject gets a thinker page or a concept page is Julie's editorial call.
- **2026-05-25. Inclusion rationale kept private.** The site tagline and About page tell readers what kind of site this is, so pages do not display why each thinker was included.
- **2026-05-25. Editorial Reading and Where This Breaks share a visual family,** told apart by the card layout of limits.
- **2026-05-25. About page replaces per-page colophons.**
- **2026-05-25. Long-read chapters became their own collection,** so the chapter list cannot drift from the files. First chapters: Komoroske part 1 and the Fowler preface.
- **2026-05-25. Concept pages added,** seeded with `coordination-headwind`.
- **2026-05-26. Concept page rules settled.** Holders are always derived, qualifications live in prose, and a page needs two or more holders. `working_uses` became a factual record that Camila may append to.
- **2026-05-27. Five schema additions after the Fowler audit:** foreground and deep frames, auto-surfacing of neighbors with pages here, the Live Edge section, hosted work via `hosts` edges, and weighting rules for critics. Each came from its own Council review.
- **2026-05-27. Hosting moved from Netlify to GitLab Pages** after the Netlify free tier ran out.
- **2026-05-27. Long-read working notes moved to `_working/<slug>/`,** replacing separate per-thinker folders elsewhere.
- **2026-05-28. Writing rules made explicit.** The first page drafted by an automated loop (Forsgren) shipped with 30 em-dashes and three banned words, because the rules had never been written down. The pre-ship checklist followed.
- **2026-05-28, applied 2026-09-16. `doctrine_mode` added** and backfilled on all pages. Brooks was a close call between `mode-c` and `mode-b`, recorded in a comment in his file.
- **2026-09-16. Editorial Reading moved to the Reading Protocol.** The section became the site's third-person reading, reviewed by Council and audited by Julie, with an optional note from Julie. Piloted on Forsgren.
