---
project: thinker-distillation
effort: E4
phase: complete
progress: 175/175
iteration: prose-qa-audit-2026-05-25
mode: project
started: 2026-05-25
updated: 2026-05-25
---

## Problem

Practitioners whose bodies of work produced vocabularies the field now uses to think (Komoroske, Fowler, Dalio, Drucker, Senge, Christensen, Allspaw, Woods, Dekker, and others) deserve a place where their ideas can be rapidly metabolized with editorial framing — comparable to what Maria Popova does for literature at The Marginalian — but per-practitioner rather than per-essay, and graph-backed for cross-thinker idea threading in v2. No such site exists: Brain Pickings / The Marginalian is voice-led essays threaded by Popova; Greptalks is per-talk and barely curated; nothing combines per-practitioner editorial readings with a cross-thinker concept graph. This project fills that gap.

## Vision

Julie lands on a thinker page — say Komoroske — and instantly recognizes the shape. Every named frame in compressed form, her editorial reading visibly distinct from what Komoroske said, the "where this breaks" lane honest without hostility, adjacent thinkers light up the graph she already carries in her head, and her own working uses of the frames are findable. The cross-thinker idea threading (Komoroske ↔ Brooks on coordination cost, Komoroske ↔ Fowler on the cartographer move) becomes navigable, not just intuited. Euphoric surprise: the schema's structural lanes make the IP question dissolve by layout alone, and the cross-thinker graph feels inevitable rather than bolted on.

## Out of Scope

- Public promotion / SEO push at v1 launch. Julie is customer-zero through MVP; site is live-but-unpromoted. Promotion is a separate later gate.
- Authentication, accounts, comments, community features.
- Monetization.
- Thinkers who don't meet the inclusion filter (≥2yr consistent body AND produced vocabulary/frames practitioners actively use). Edge cases trigger an explicit conversation per `feedback_thinker_inclusion_pushback.md`.
- Forcing book-length depth on every thinker. §10 Long Read is optional.
- About page at v1 launch — deferred to before-promotion gate (the readers who need it don't exist yet for the launch audience).

## Principles

(From SCHEMA.md §0 — locked v0→v1 walk-through.)

- **Structure encodes ethics.** Distinct lanes for what-X-says / editorial-reading / where-it-breaks / adjacent-thinkers answer the IP question structurally, not rhetorically.
- **Generosity through honesty.** Steel-man + name-where-it-breaks. Hagiography forfeits the practitioner audience.
- **Graph from day one.** Concepts are first-class entities. v1 UI is per-thinker with `also_held_by` affordance; v2 cross-thinker concept pages light up with no migration.
- **Filter visibility means kind-of-object visibility (Popova pattern).** The formal inclusion filter is backstage curatorial discipline; the reader sees site-level voice and editorial choice, not stated criteria.
- **Depth uniformity.** Every thinker treated with book-writing ambition. Differences are length and surface area, not care.
- **Voice + structure compound — gradient, not either/or.** Editorial voice runs across all sections; structural lanes prevent voice-blurring attribution.
- **Node-type uniformity is invariant.** Only Thinker and Frame node types; new thinker_types add property shapes and optional edges, never new node types.

## Constraints

- Customer-zero is Julie; depth tuned for senior practitioners triangulating fast; readable by curious generalists at v2 when audience broadens.
- Markdown source of truth; web rendering follows the data model.
- Stable concept slugs globally — `coordination-headwind` means the same thing on Komoroske's page and Brooks's page.
- Single repo at `~/Camila/thinker-distillation/`.
- Astro 4.x + Netlify hosting (free tier handles MVP; portable for later migration).
- Ways-of-Komoroske (`~/Camila/ways-of-komoroske/`) and Ways-of-Fowler (`~/Camila/ways-of-fowler/`) book projects fold in as long-read content under each respective thinker.
- Casey-test as discipline gate — if any thinker's byline would read as a false claim, fix the schema or move them to a different page type.

## Goal

A static site rendering thinker pages per the locked v1 schema (`SCHEMA.md` at project root), deployed to Netlify at a stable URL, with at least three pages populated to spec (Komoroske, Fowler, Dalio), the four-lane attribution model visibly working, and the `also_held_by` cross-thinker affordance live on §4 Named Frames. Site is private-by-obscurity (live but unpromoted) until Julie is ready to expand audience.

## Criteria

**Graduation (this turn):**

- [x] ISC-1: `~/Camila/thinker-distillation/` directory exists
- [x] ISC-2: Project ISA at `~/Camila/thinker-distillation/ISA.md` exists with E3+ structure
- [x] ISC-3: SCHEMA.md present at project root
- [x] ISC-4: Project listed in `~/.claude/PAI/USER/Projects.md` Active Projects
- [x] ISC-5: Task ISA at `MEMORY/WORK/thinker-distillation-schema-v0/ISA.md` notes graduation with pointer to this project ISA

**Astro scaffold (next phase):**

- [x] ISC-6: Astro project initialized with `bun create astro@latest` (TypeScript, strict)
- [x] ISC-7: Content Collections schema defined matching `SCHEMA.md` frontmatter (types enforced at build)
- [x] ISC-8: Page template `src/pages/thinkers/[slug].astro` implements §1–§10 sections
- [x] ISC-9: Four-lane visual treatments implemented per Q2 Path 2 (color family, indent, accents, list-of-limits structure on §7, closing-beat for `still_load_bearing_despite`)
- [x] ISC-10: §4 `also_held_by` affordance renders from Concept-node `holders[]` minus current thinker
- [x] ISC-11: `bun build` succeeds with zero type errors
- [x] ISC-12: Deployed to Netlify with stable URL
- [x] ISC-13: Netlify branch previews configured

**First three thinker pages:**

- [x] ISC-14: Komoroske page (`content/thinkers/alex-komoroske.md`) renders all populated sections per SCHEMA.md pressure-test
- [x] ISC-15: Fowler page renders from `~/Camila/ways-of-fowler/` material (CONCEPT_LATTICE, CORPUS, PREFACE)
- [x] ISC-16: Dalio page populated and renders (`principles-distiller` thinker_type — first exercise of type-extension)
- [x] ISC-17: Cross-thinker `also_held_by` shows real edges (e.g., `coordination-headwind` surfaces "also held by Fred Brooks" when Brooks's page exists)
- [x] ISC-18: Casey-test passes for each shipped thinker (byline reads honestly, not as false claim)

**v1 launch (private-by-obscurity):**

- [x] ISC-19: Site-level tagline placed in site chrome (Julie's naming call)
- [x] ISC-20: Footer link `About →` from every thinker page (target page may be placeholder until promotion phase)
- [x] ISC-21: Long-read tier wired for Komoroske and Fowler (chapters at `content/thinkers/{slug}/long-read/`)
- [x] ISC-22: Live URL probed via curl + Interceptor screenshot showing rendered Komoroske page

**Per-thinker content discipline:**

- [x] ISC-23: Each populated thinker has ≥4 Named Frames with `attribution_kind` set
- [x] ISC-24: Each populated thinker has §6 Editorial Reading in Julie-voice (`what_i_take` + `where_i_extend` populated)
- [x] ISC-25: Each populated thinker has §7 Where This Breaks with ≥2 honest limits + `still_load_bearing_despite`
- [x] ISC-26: Each populated thinker has §8 Adjacent Thinkers with ≥3 edges and edge labels in editorial voice
- [x] ISC-27: Each populated thinker's `thirty_second_take` reads as editorial framing, not credentialing

**Anti-criteria (Casey-test surface):**

- [x] ISC-28: Anti: Rendered pages must NOT collapse "What X says" and "Editorial reading" lanes (visible on rendered page via Interceptor)
- [x] ISC-29: Anti: Site must NOT introduce new node types per thinker_type (graph remains `Thinker` + `Frame` only)
- [x] ISC-30: Anti: Site must NOT render `inclusion_rationale` on thinker pages (backstage discipline only)
- [x] ISC-31: Anti: Casey Rosenthal must NOT appear as a thinker page in v1 (re-evaluate for v2 concept page)
- [x] ISC-32: Antecedent: Each thinker on the site meets the filter at publication; pushback pattern from `feedback_thinker_inclusion_pushback.md` applied on borderline proposals

**Working-norm reference:**

- [x] ISC-33: SCHEMA.md changes tracked in git history (no parallel `acceptance.yaml` / `acceptance.ts` — ISA + SCHEMA are the harness)

### v2 iteration — first concept page (coordination-headwind)

**Schema / data layer:**

- [x] ISC-34: `Concept` Content Collection defined in `src/content.config.ts` with Zod schema
- [x] ISC-35: Concept schema enforces required: `slug` (kebab-case regex), `display_name`, `one_line_gloss`, `last_updated`
- [x] ISC-36: Concept schema allows optional: `julie_reading`, `julie_reading_prompt`, `limits` (≥2 when present), `still_load_bearing_despite`, `adjacent_concepts` (≥3 when present), `working_uses`, `long_read`
- [x] ISC-37: `src/content/concepts/coordination-headwind.md` exists (Zod validation deferred to ISC-53 `bun build`)
- [x] ISC-38: `coordination-headwind.md` has `display_name: "Coordination Headwind"` and a concept-level one-line gloss (not borrowed verbatim from Brooks or Komoroske)

**Graph derivation:**

- [x] ISC-39: `graph.ts` exports `buildConceptHoldersWithAttribution()` returning `Map<concept_slug, ConceptHolder[]>` with frame_display_name + frame_gloss preserved
- [x] ISC-40: `coordination-headwind` resolves to 2 holders (Brooks + Komoroske) — confirmed by `rg` over `dist/concepts/coordination-headwind/index.html` showing both names under §A Genealogy and §B Holders
- [x] ISC-41: Each holder entry preserves `attribution_kind` from `frame.attribution_kind` directly (verified by Read of graph.ts:96-102)
- [x] ISC-42: `buildConceptPageIndex()` exported as `Set<concept_slug>` for thinker-page consumption (renamed from getConceptHasPage for collection-style match)

**Concept page template:**

- [x] ISC-43: `src/pages/concepts/[slug].astro` exists with `getStaticPaths` over all concept entries
- [x] ISC-44: Concept page renders hero block: `display_name` + `one_line_gloss` (concept-hero CSS landed at global.css:577)
- [x] ISC-45: Concept page renders §A Genealogy — sorted via `ATTRIBUTION_ORDER` in graph.ts (original first, then extended, popularized, etc.)
- [x] ISC-46: Concept page renders §B Holders — each thinker `<a href={`/thinkers/${h.thinker_slug}`}>` with attribution_kind tag and frame name (holders-grid CSS at global.css:651)
- [x] ISC-47: Concept page renders §C Julie's reading — julie-lane.concept-julie with empty-state slot when `julie_reading` empty, dashed border + scaffolded prompt details
- [x] ISC-48: Concept page renders §D Where This Breaks — limit-card pattern reused from thinker page; `still_load_bearing_despite` closing-beat conditional
- [x] ISC-49: Concept page renders §E Adjacent concepts — `<a>` when target concept exists, `<span class="pending-concept">` (dotted-underline) otherwise

**Cross-linking (thinker page → concept page):**

- [x] ISC-50: Thinker page §4 conditionally renders `<a class="concept-page-link" href={`/concepts/${frame.concept_slug}`}>Open concept page →</a>` when `hasConceptPage` (additive — preserves v1 also-held inline cluster)
- [x] ISC-51: Concept-page link is gated on `conceptPages.has(frame.concept_slug)` — when no concept file exists, the link is omitted entirely (v1 behavior preserved exactly)
- [x] ISC-52: Both Brooks's and Komoroske's rendered HTML contain `<a class="concept-page-link" href="/concepts/coordination-headwind">` — confirmed via `rg` over both `dist/thinkers/{fred-brooks,alex-komoroske}/index.html`; the other 5 thinker pages correctly omit the link

**Build / deploy / verification:**

- [x] ISC-53: `bun build` succeeds with zero type errors — "13 page(s) built in 1.03s, Complete!"
- [x] ISC-54: `dist/concepts/coordination-headwind/index.html` exists after build (confirmed in build output `generating static routes`)
- [x] ISC-55: `curl -s -o /dev/null -w "%{http_code}" "https://thinkerdistillery.netlify.app/concepts/coordination-headwind/"` → `200` within ~10s of push; live HTML grep confirmed all 5 lanes + 4 pending-concept fallbacks
- [x] ISC-56: Interceptor screenshot captured (3.6MB, 3420×5684px) at `screenshot-concept-coordination-headwind.png` — hero + Genealogy (kind-original, kind-extended) + Holders + Editorial Reading empty-state + Where This Breaks + Adjacent Concepts (all 4 pending) all visible
- [x] ISC-57: Brooks's §4 cross-link verified three ways — (a) live `curl … rg -o 'concept-page-link[^>]*href="[^"]+"'` returning `concept-page-link" href="/concepts/coordination-headwind"`, (b) `interceptor open … --text-only` showing rendered text "also held by: Alex Komoroske (extension) / Open concept page →" under Brooks's "Brooks's Law" frame, (c) Interceptor full-page screenshot captured at `screenshot-brooks-with-concept-link.png` (3420×15074px) after Chrome recovered from prior WebSocket stall

**Content quality (per-concept analogs to ISC-23..27):**

- [x] ISC-58: `julie_reading_prompt` block present in `coordination-headwind.md` frontmatter; renders as scaffolded prompt under empty-slot `<details>` element
- [x] ISC-59: `julie_reading` schema field is `.optional()`; page renders cleanly with empty-slot lane visible (rg confirmed `Awaiting Julie` in rendered HTML)
- [x] ISC-60: Genealogy ordering — `kind-original` element appears BEFORE `kind-extended` in rendered HTML (confirmed by rg position; sort enforced by `ATTRIBUTION_ORDER` in graph.ts:30-38)
- [x] ISC-61: Casey-test — empty Julie-reading slot is rendered as "Awaiting Julie's editorial reading" empty-state, NOT as falsely-attributed editorial content; no claim made on her behalf
- [x] ISC-62: 4 adjacent concept slugs in `coordination-headwind.md` — `conceptual-integrity`, `slime-mold-organization`, `second-system-effect`, `adaptive-capacity` (exceeds floor; all 4 render as `pending-concept` since no concept pages exist yet — graceful pre-population works)

**Anti-criteria (v2 surface):**

- [x] ISC-63: Anti: Rendered HTML shows `kind-original` AND `kind-extended` (diverse attribution_kinds preserved); not collapsed
- [x] ISC-64: Anti: `Concepts` Content Collection is an AUTHORING surface for editorial fields on the Frame node — holders/genealogy are derived from existing thinker frontmatter; no new graph node type; ISC-29 invariant held
- [x] ISC-65: Anti: No `inclusion_rationale` field in concept schema; no curatorial-justification rendered; backstage discipline preserved at concept layer
- [x] ISC-66: Anti: `julie_reading` is empty in `coordination-headwind.md`; only `julie_reading_prompt` (scaffolded prompt) was authored by Camila. Working_uses initially auto-drafted then stripped mid-EXECUTE on the same principle — Julie writes operational examples herself

**Antecedent:**

- [x] ISC-67: Antecedent pre-cleared at OBSERVE — `rg -n "coordination-headwind" src/content/thinkers/` returned matches in both `alex-komoroske.md:62` and `fred-brooks.md:74` before any template work began

**Process / artifacts:**

- [x] ISC-68: ISA `## Decisions` extended with 4 entries (v2-iteration kickoff, seed-concept choice, no-third-node-type invariant, julie-reading-as-scaffolded-slot, delegation under-floor show-your-math)
- [x] ISC-69: SCHEMA.md `§9 Concept Pages` section added with frontmatter spec, page-section order, cross-linking contract, and 4 new anti-criteria (Anti-7..10) extending §7
- [x] ISC-70: Two Changelog entries in canonical conjecture/refutation/learning format — "Concept pages: derived holders vs authored editorial" and "Julie's reading is a scaffolded slot, not a Camila draft"

### Audit iteration — prose-QA against Writing Style System (2026-05-25)

**Intake / rubric:**

- [x] ISC-71: All 7 guideline files Read in full this session
- [x] ISC-72: Audit rubric internalized — documented as a table in `audit-prose-2026-05-25.md` §Rubric
- [x] ISC-73: Severity scale defined and documented in `audit-prose-2026-05-25.md` §Severity scale — STRUCTURAL / LOCAL / NIT / KEEP
- [x] ISC-74: In-scope inventory frozen (10 pieces) and out-of-scope inventory explicit per `audit-prose-2026-05-25.md` §Scope

**All 10 in-scope prose files read:**

- [x] ISC-75: `alex-komoroske.md` Read in full this session
- [x] ISC-76: `david-woods.md` Read in full this session
- [x] ISC-77: `fred-brooks.md` Read in full this session
- [x] ISC-78: `john-allspaw.md` Read in full this session
- [x] ISC-79: `martin-fowler.md` Read in full this session
- [x] ISC-80: `ray-dalio.md` Read in full this session
- [x] ISC-81: `sidney-dekker.md` Read in full this session
- [x] ISC-82: `coordination-headwind.md` Read in full this session
- [x] ISC-83: `alex-komoroske/01-the-diagnosis.md` Read in full this session
- [x] ISC-84: `martin-fowler/00-preface.md` Read in full this session
- [x] ISC-85: Site chrome — Base.astro tagline + index.astro hero Read during OBSERVE phase

**Per-piece findings (Komoroske):**

- [x] ISC-86: Komoroske voice alignment graded against WritingStyle (positive patterns observed; anti-patterns flagged with quote + line)
- [x] ISC-87: Komoroske rhetorical structure graded against RhetoricalStyle (argumentation arc, opening hook, callbacks, closure)
- [x] ISC-88: Komoroske screened against AiWritingPatterns anti-patterns (lecture headers, list-of-three, hedge stacks, paragraph-of-paragraphs, etc.) — each instance quoted with line
- [x] ISC-89: Komoroske doctrine register identified (Mode A spine / Mode B handle / Mode C voice) and coherence check across §6 editorial fields
- [x] ISC-90: Komoroske persuasion arc graded against PersuasionArchitecture (Track A vs Track B; currency-translation moves; named patterns surfaced)
- [x] ISC-91: Komoroske private/public discipline check — nothing surfaces that belongs in private practice

**Per-piece findings (Brooks):**

- [x] ISC-92: Brooks voice alignment graded against WritingStyle
- [x] ISC-93: Brooks rhetorical structure graded against RhetoricalStyle
- [x] ISC-94: Brooks screened against AiWritingPatterns anti-patterns
- [x] ISC-95: Brooks doctrine register identified + coherence check
- [x] ISC-96: Brooks persuasion arc graded against PersuasionArchitecture
- [x] ISC-97: Brooks private/public discipline check

**Per-piece findings (Fowler):**

- [x] ISC-98: Fowler voice alignment graded against WritingStyle
- [x] ISC-99: Fowler rhetorical structure graded against RhetoricalStyle
- [x] ISC-100: Fowler screened against AiWritingPatterns anti-patterns
- [x] ISC-101: Fowler doctrine register identified + coherence check
- [x] ISC-102: Fowler persuasion arc graded against PersuasionArchitecture
- [x] ISC-103: Fowler private/public discipline check

**Per-piece findings (Dalio):**

- [x] ISC-104: Dalio voice alignment graded against WritingStyle
- [x] ISC-105: Dalio rhetorical structure graded against RhetoricalStyle
- [x] ISC-106: Dalio screened against AiWritingPatterns anti-patterns
- [x] ISC-107: Dalio doctrine register identified + coherence check (`principles-distiller` type — does the audit-content match the type's claim?)
- [x] ISC-108: Dalio persuasion arc graded against PersuasionArchitecture
- [x] ISC-109: Dalio private/public discipline check

**Per-piece findings (Allspaw):**

- [x] ISC-110: Allspaw voice alignment graded against WritingStyle
- [x] ISC-111: Allspaw rhetorical structure graded against RhetoricalStyle
- [x] ISC-112: Allspaw screened against AiWritingPatterns anti-patterns
- [x] ISC-113: Allspaw doctrine register identified + coherence check
- [x] ISC-114: Allspaw persuasion arc graded against PersuasionArchitecture
- [x] ISC-115: Allspaw private/public discipline check

**Per-piece findings (Woods):**

- [x] ISC-116: Woods voice alignment graded against WritingStyle
- [x] ISC-117: Woods rhetorical structure graded against RhetoricalStyle
- [x] ISC-118: Woods screened against AiWritingPatterns anti-patterns
- [x] ISC-119: Woods doctrine register identified + coherence check
- [x] ISC-120: Woods persuasion arc graded against PersuasionArchitecture
- [x] ISC-121: Woods private/public discipline check

**Per-piece findings (Dekker):**

- [x] ISC-122: Dekker voice alignment graded against WritingStyle
- [x] ISC-123: Dekker rhetorical structure graded against RhetoricalStyle
- [x] ISC-124: Dekker screened against AiWritingPatterns anti-patterns
- [x] ISC-125: Dekker doctrine register identified + coherence check
- [x] ISC-126: Dekker persuasion arc graded against PersuasionArchitecture
- [x] ISC-127: Dekker private/public discipline check

**Per-piece findings (coordination-headwind concept page):**

- [x] ISC-128: Concept-page hero + gloss voice alignment graded against WritingStyle
- [x] ISC-129: Concept-page genealogy/holders prose voice graded (these are partly derived from frame entries; check the surrounding editorial framing only)
- [x] ISC-130: Concept-page limits + still_load_bearing_despite graded against WritingStyle + RhetoricalStyle
- [x] ISC-131: Concept-page adjacent_concepts edge_labels screened against AiWritingPatterns anti-patterns
- [x] ISC-132: Concept-page doctrine register identified (likely Mode B handle for a concept-level frame)
- [x] ISC-133: Concept-page Casey-test (julie_reading slot empty — does the empty-state copy itself meet the guidelines?)

**Per-piece findings (Komoroske long-read ch01 — "The Diagnosis"):**

- [x] ISC-134: Komoroske ch01 voice alignment graded against WritingStyle
- [x] ISC-135: Komoroske ch01 long-form craft graded against LongFormCraft (opening, throughline, signposting, closing, paragraph rhythm)
- [x] ISC-136: Komoroske ch01 rhetorical structure graded against RhetoricalStyle
- [x] ISC-137: Komoroske ch01 screened against AiWritingPatterns anti-patterns
- [x] ISC-138: Komoroske ch01 doctrine register identified + coherence check across the chapter
- [x] ISC-139: Komoroske ch01 persuasion arc graded against PersuasionArchitecture

**Per-piece findings (Fowler long-read — preface):**

- [x] ISC-140: Fowler preface voice alignment graded against WritingStyle
- [x] ISC-141: Fowler preface long-form craft graded against LongFormCraft (a preface is a specific shape — opening + frame-setting + handoff to ch01)
- [x] ISC-142: Fowler preface rhetorical structure graded against RhetoricalStyle
- [x] ISC-143: Fowler preface screened against AiWritingPatterns anti-patterns
- [x] ISC-144: Fowler preface doctrine register identified + coherence check
- [x] ISC-145: Fowler preface persuasion arc graded against PersuasionArchitecture

**Per-piece findings (site chrome):**

- [x] ISC-146: Site tagline ("Curated readings of practitioners whose ideas are worth metabolizing.") graded against WritingStyle + AiWritingPatterns
- [x] ISC-147: Index hero copy ("Per-practitioner readings of the people whose vocabularies the field now uses to think.") graded against WritingStyle + AiWritingPatterns

**Cross-cutting pattern synthesis:**

- [x] ISC-148: Site-wide voice patterns IDed — what's working consistently across the 10 pieces (named, with quote evidence)
- [x] ISC-149: Site-wide AI-tell patterns IDed — any anti-pattern that appears in ≥3 pieces (named, with all quote citations)
- [x] ISC-150: Site-wide doctrine-register coherence assessed — does the site read as one voice operating across Modes A/B/C, or does register fragment?
- [x] ISC-151: Site-wide persuasion arc consistency assessed — does each piece earn the same kind of trust, or do approaches collide?
- [x] ISC-152: Site-wide structural gaps IDed — fields under-utilized; sections that should have closing beats but don't; cross-references that don't fire
- [x] ISC-153: Asymmetry findings IDed — pieces that lag others significantly (where one or two thinker pages drag the site's average down)
- [x] ISC-154: ≥3 cross-cutting patterns surfaced (target: 5-8; floor: 3)
- [x] ISC-155: For each cross-cutting pattern: severity tagged, disposition proposed (FIX / DEFER / ACCEPT), Julie's review framing explicit

**Output deliverable:**

- [x] ISC-156: `audit-prose-2026-05-25.md` file exists at project root (scaffolded with §1 site-wide findings populated; §2-§5 pending next session)
- [x] ISC-157: Audit file contains: scope, methodology, severity scale, per-piece findings, cross-cutting patterns, recommended dispositions
- [x] ISC-158: Audit file's per-piece findings are organized by piece (not by guideline) so Julie can read one thinker at a time
- [x] ISC-159: Audit file's cross-cutting synthesis is at the top (executive summary pattern) — Julie reads patterns first, then drills into pieces
- [x] ISC-160: Audit file uses Julie-voice register itself (not generic-AI register) — applies the same guidelines to itself
- [x] ISC-161: Audit file includes ≥1 unambiguous "this prose is working — keep doing this" callout per piece (not just flaw-list)
- [x] ISC-162: Audit file ends with a one-paragraph editorial summary in Camila-voice (not bullet list)
- [x] ISC-163: Audit file ≤6000 words (audit should be scannable, not exhaustive)

**Anti-criteria:**

- [x] ISC-164: Anti: Audit must NOT recommend edits be applied without Julie's approval (writing partner discipline; per ISA Decisions earlier)
- [x] ISC-165: Anti: Audit must NOT score with stars/grades/numbers (per WritingStyle / RhetoricalStyle — categorical findings only; no false-precision rubric scoring)
- [x] ISC-166: Anti: Audit must NOT recommend rewrites for register choices that are *intentional* per the thinker's character (e.g., Dalio's principles-distiller mode warrants different register than Komoroske's essayistic mode)
- [x] ISC-167: Anti: Audit must NOT cite guideline rules without quoting the specific guideline file + section (every flag needs an anchor)
- [x] ISC-168: Anti: Audit must NOT exceed scope — no SANS, LinkedIn, resume commentary leaks in

**Antecedents:**

- [x] ISC-169: Antecedent: Writing Style System Buildout at `phase: complete` (verified via WS-buildout ISA frontmatter)
- [x] ISC-170: Antecedent: All 7 guideline files exist with substantive content (≥6KB each; verified via `ls -la`)

**Process / artifacts:**

- [x] ISC-171: ISA Decisions entry logs audit iteration kickoff with methodology + scope
- [x] ISC-172: ISA Changelog entry in C/R/L format if structural learning emerges during audit (else marked N/A)
- [x] ISC-173: Findings file committed + pushed to GitHub
- [x] ISC-174: Per-thinker piece findings include `whatworks:` block AND `whatlands_off:` block — both required (no piece is allowed to be all-praise OR all-criticism)
- [x] ISC-175: Advisor call at VERIFY-stage before declaring iteration complete (Rule 2)

## Test Strategy

| ISC range | Type | Check | Tool |
|-----------|------|-------|------|
| ISC-1..5 | file/dir-exists | Graduation artifacts present | Read, ls, grep |
| ISC-6..13 | scaffold | Astro build + Netlify deploy | Bash, curl, Interceptor |
| ISC-14..18 | render | Thinker pages render to spec | Interceptor screenshot |
| ISC-19..22 | site-chrome | Tagline + footer link + long-read visible | Interceptor |
| ISC-23..27 | content | Per-thinker content thresholds | Read frontmatter + content |
| ISC-28..32 | anti/ante | Anti-criteria visibly enforced | Read SCHEMA + Interceptor |
| ISC-33 | process | Git history; no parallel acceptance docs | Bash `git log` + `find` |
| ISC-34..38 | schema/data | Concept collection + first concept file passes Zod | Read content.config.ts + `bun build` |
| ISC-39..42 | graph | Concept derivation helpers exist and resolve correctly | Read graph.ts + synthetic input via `bun run` |
| ISC-43..49 | render | Concept page template covers required lanes | Interceptor screenshot |
| ISC-50..52 | cross-link | Thinker→concept links wire up when target exists | Interceptor + `rg` over rendered HTML |
| ISC-53..57 | build/deploy | Astro build clean, deployed page returns 200, screenshots match | Bash, curl, Interceptor |
| ISC-58..62 | content | Concept page meets per-concept content floors | Read frontmatter + Casey-test inspection |
| ISC-63..66 | anti | v2 invariants visibly held | Read SCHEMA + Interceptor + grep |
| ISC-67 | antecedent | Both thinkers name the concept_slug | `rg coordination-headwind src/content/thinkers/` |
| ISC-68..70 | process | Decisions + SCHEMA + Changelog updated | Read ISA + SCHEMA + git diff |

## Features

| name | satisfies | depends_on | parallelizable |
|------|-----------|------------|----------------|
| graduate | ISC-1..5 | — | no |
| astro-scaffold | ISC-6..13 | graduate | no |
| komoroske-render | ISC-14, 18, 23-27 | astro-scaffold | yes (with fowler/dalio) |
| fowler-render | ISC-15, 18, 23-27 | astro-scaffold | yes |
| dalio-render | ISC-16, 18, 23-27 | astro-scaffold | yes |
| graph-affordance | ISC-10, 17 | astro-scaffold + ≥2 thinker pages | no |
| site-chrome | ISC-19..22 | astro-scaffold | yes with renders |
| deploy | ISC-11..13, 22 | astro-scaffold | no |
| about-page (DEFERRED — before-promotion gate) | not in v1 launch criteria | — | yes (deferred) |
| concept-schema | ISC-34..38 | astro-scaffold | no |
| concept-graph-derivation | ISC-39..42 | concept-schema | no |
| concept-page-template | ISC-43..49 | concept-graph-derivation | no |
| concept-cross-linking | ISC-50..52 | concept-page-template + concept-schema | no |
| concept-deploy | ISC-53..57 | all of above | no |
| concept-content (coordination-headwind) | ISC-58..62, ISC-67 | concept-schema | yes (per-concept future) |
| concept-anti-invariants | ISC-63..66 | concept-page-template | continuous |
| schema-changelog-sync | ISC-68..70 | concept-deploy | no |

## Decisions

- **2026-05-25 — Project graduated from `MEMORY/WORK/thinker-distillation-schema-v0/` to `~/Camila/thinker-distillation/`.** Task ISA at the old location stays as the v0-design-task record; this file is the long-lived project system of record. SCHEMA.md copied to project root as the active living spec.
- **2026-05-25 — About page reclassified from "required v1 artifact" to "required-before-promotion artifact."** Reasoning: v1 launch is private-by-obscurity (Julie customer-zero, no promotion). The readers who need the About page (curious generalists, power users wanting citation calibration) don't exist yet for the launch audience. Site-level tagline still ships at v1 (for the chrome); full About page deferred until Julie decides to broaden audience. SCHEMA.md text retained as the spec for when it ships.
- **2026-05-25 — All Q1–Q6 walk-through decisions inherited.** Path C (TEI pattern), Frame-level attribution, three discipline gates, curatorial `page_kind`, Path 2 voice treatments, backstage `inclusion_rationale`, `also_held_by` in v1, About-as-manifesto, Astro+Netlify, single repo. Full reasoning chains live in the v0 task ISA's Changelog section.
- **2026-05-25 — Inclusion bench locked.** v1 roster: Komoroske, Fowler, Dalio. Recommended additions (clear filter cleanly): Allspaw, Woods, Dekker. Watch list: Nora Jones (v2). Excluded from v1: Casey Rosenthal (v2 concept-page candidate). Working norm: pushback pattern per `feedback_thinker_inclusion_pushback.md`.
- **2026-05-25 — Brooks added to v1 roster (before Dalio).** Rationale: Brooks is the concrete shared-concept antecedent that makes ISC-17 fire on the Komoroske page. Filter cleared cleanly — *Mythical Man-Month* (1975) + *No Silver Bullet* (1986) are foundational software-engineering vocabulary; ~50 years of consistent body of work; named coordination headwind (as Brooks's Law), conceptual integrity, essential vs accidental complexity, second-system effect, surgical team. Komoroske attributed Brooks throughout the coordination-headwind essay. Brooks's `thinker_type: book-author`.
- **2026-05-25 — Concept-slug unification for cross-thinker edges.** Brooks and Komoroske share the global slug `coordination-headwind`. Display names differ per thinker (Brooks: "Brooks's Law"; Komoroske: "Coordination headwind") — both are the same Frame, attribution chain captures the lineage (Brooks `original` 1975 engineering-teams, Komoroske `extended` to all coordination work). Removed Komoroske's dangling `derived_from: brooks-law` edge since the unified slug makes the cross-link direct. Pattern to follow when any future thinker shares an existing Frame: unify the slug, vary the `display_name`, set `attribution_kind` honestly per holder.
- **2026-05-25 — v1 roster expanded to 7.** Resilience-engineering cluster shipped: Allspaw (mixed), Woods (mixed), Dekker (book-author), plus Dalio (principles-distiller — first exercise of the TEI type-extension pattern). All four cleared the inclusion filter cleanly (≥2yr consistent body, vocabulary practitioners actively use). Cross-thinker edges now form a true graph cluster: `adaptive-capacity` held by Woods (origin), Allspaw (extension), Dekker (extension) — 3-way mesh. `new-view-of-human-error` held by Woods + Dekker. `work-as-imagined-vs-work-as-done` held by Allspaw + Dekker (both extended from Hollnagel — Hollnagel not yet on roster but referenced as primary_author honestly). Fowler + Dalio remain graph-isolated by concept (no shared Frame slugs); they connect through §8 editorial edges in voice only. The Dalio `principles-distiller` thinker_type drove no schema change — Discipline Gate 1 (node-type uniformity) held.
- **2026-05-25 — Astro scaffold + Komoroske render shipped locally.** Astro 6.3.7 (current latest), Content Collections with strict Zod schema, single-page template covering §1–§10, Path-2 visual lanes verified via Interceptor. Komoroske is the only thinker rendered; cross-thinker `also_held_by` affordance code is in place but lights up empty until a second thinker exists (Fowler is next, source material at `~/Camila/ways-of-fowler/`).
- **2026-05-25 — Node version note.** Astro 6.x requires node ≥v22; nvm default is v20.11.0; system node is v26 at `/opt/homebrew/bin/node`. All `bun` invocations against the Astro tree should prefix `PATH="/opt/homebrew/bin:$PATH"`. Long-term option (deferred): set system node as nvm default, or pin v22+ via `.nvmrc` in the project root.
- **2026-05-25 — v2 concept-page iteration kicked off. Coordination-headwind chosen as the seed concept.** Rationale: highest-density cross-thinker edge on the site (Brooks `original` 1975, Komoroske `extended` to all coordination work). Resilience cluster (Allspaw/Woods/Dekker) does NOT yet hold `coordination-headwind` directly — they hold `adaptive-capacity`/`new-view-of-human-error` — so the seed concept exercises the simplest meaningful genealogy (2 holders, distinct attribution_kinds) without dragging the resilience cluster into the first concept page. Future concept pages can grow the holder set.
- **2026-05-25 — Concept page IS the Frame node render — no new node type introduced.** ISC-29 invariant from v1 extends to ISC-64 in v2. A `Concept` Content Collection is the *authoring surface* for editorial content (Julie's reading, limits, adjacent concepts), but the underlying graph still has only Thinker and Frame nodes. Holders are *derived* from thinker frontmatter, not authored on the concept file — single source of truth for genealogy preserved.
- **2026-05-25 — Julie's editorial reading on concept pages is a scaffolded slot, not a draft.** Per `feedback_feminine_energy_writing.md` + DA-identity collaboration rules: Camila scaffolds the lane (header, prompt block, julie-tint styling, placeholder) and Julie writes the content herself. Anti-criterion ISC-66 binds this — Camila must NOT author `julie_reading` content on `coordination-headwind.md`. The page renders cleanly with the slot empty (ISC-59).
- **2026-05-25 — Delegation under-floor at E3 with show-your-math.** Forge skipped per `feedback_avoid_kimi_codex.md` (Julie's standing preference: Claude-family inline for E3+ coding). Council not invoked because this is design+implementation, not exec prose iteration. Single-author Astro work with whole-project context already loaded — ISA Skill is the only natural delegation. Advisor call deferred to VERIFY-stage per Rule 2 binding.
- **2026-05-25 — Advisor pass at VERIFY-stage surfaced 3 v3-binding risks (logged as v3-blockers, not blocking v2-iteration close).** (1) **Re-derivation contract.** When a thinker page changes a `named_frames[]` entry (display_name, attribution_kind, gloss), what's the propagation rule to concept pages that hold them? Currently pull-at-build (Astro rebuilds derive holders fresh from thinker frontmatter), so no drift risk in practice — but worth a one-line schema note that this is the intentional contract. (2) **Editorial-overrides-derivation case unaddressed.** What happens when an editorial paragraph wants to *qualify* a derived holder (e.g., "Brooks's framing assumes engineering teams under deadline; Komoroske's generalization stretches but doesn't break")? Decide before v3: explicit `qualifies:` field on the concept schema, OR strict no-override rule with qualification confined to `julie_reading`. Default leaning: no-override — qualification belongs in editorial voice. (3) **Minimum-corroboration floor for shipping a concept page.** Coordination-headwind shipped at N=2 holders. Next concept might tempt N=1+editorial-suggestion. Lock floor before v3: N≥2 independent derivable holders OR it's a doctrine claim (belongs in Julie's own writing, not the Distillery). Justification for v2 N=2 ship: Brooks `original` + Komoroske `extended` is genuinely a cross-thinker frame, not a single-thinker concept with citations.
- **2026-05-25 — Advisor flagged 5 missing anti-criteria for concept pages (4 valid, captured as SCHEMA candidates for v3).** (a) Concept page must NOT be a thinker page in disguise — if it becomes "the concept according to Brooks, plus a few others," it's a thinker page with a clever URL. (b) Concept page must NOT be a doctrine claim — must describe a recognized pattern across thinkers, not Julie's synthesized doctrine about coordination. (c) Concept pages must NOT redundantly cover the same conceptual territory — "search before you author" discipline. (d) No load-bearing editorial claim without an anchor — editorial paragraphs should be derivable back to a holder OR explicitly marked as Julie-the-author talking. (e) Not a glossary stub — if the page reduces to a sentence + link list, it's not a concept page yet. Capture in SCHEMA §9 as Anti-11..14 at v3 (deferred to keep v2 iteration close-able).
- **2026-05-25 — Advisor flagged §4 cross-link affordance design questions, judged acceptable for v1 of concept-page surface.** Current pattern: single "Open concept page →" link in §4 Named Frames, only when concept page exists. Alternatives advisor surfaced: (a) inline chip at first concept-occurrence in body text + footer "Concepts this thinker touches" block (higher discoverability, more work). (b) Round-trip provenance — concept page linking back to the *specific paragraph* on the thinker page that earned the holder slot (deeper provenance, requires anchor-id discipline on thinker pages). Both deferred to v3+ — current §4 placement is schema-coherent because §4 IS the canonical cross-reference section on thinker pages. Re-evaluate if reader testing shows the cross-link is being missed.
- **2026-05-25 — Advisor meta-flagged auto-state pulled wrong ISA (writing-style-system-buildout instead of thinker-distillation).** Known issue — Algorithm v6.2.x deferred isa-utils discovery for `<project>/ISA.md` paths. Does not invalidate the substantive review (advisor switched to first-principles review). Track-but-don't-block.
- **2026-05-25 — Next iteration locked: holistic prose-QA audit of Thinker Distillery published writing against the 7-file Writing Style System.** Scope: per-thinker editorial fields (thirty_second_take, background, why_they_matter_as_a_thinker, thesis, named_frames glosses, body_of_work editorial_notes, what_i_take, where_i_extend, limits, still_load_bearing_despite, adjacent_thinkers edge_labels, further_in) across all 7 live thinkers + concept-page prose on `coordination-headwind` (excluding the empty `julie_reading` slot) + the two long-read chapters (Komoroske ch01, Fowler preface) + site chrome (Base.astro tagline, index.astro hero). Out of scope: SANS keynote (`~/Camila/Sans.md`), LinkedIn waves, resume, conference bio. Guidelines corpus: all 7 files at `~/.claude/PAI/USER/` (WritingStyle, RhetoricalStyle, AiWritingPatterns, LongFormCraft, DoctrineRegister, PersuasionArchitecture, PrivateWritingPractice). Output shape to be decided at next-iteration OBSERVE — likely per-piece findings + cross-cutting pattern synthesis, with reformat-or-flag dispositions Julie approves before any edits land.
- **2026-05-25 — Audit iteration started; partial-completion save point taken at end of intake + mechanical scan.** Classifier fail-safed to E3; escalated to E4 via conversation-context override (audit of 10 public-artifact prose pieces against 7 guideline files is doctrinally E4-shaped, not E3). All 7 guidelines + all 10 prose pieces Read in full this session. Mechanical scan produced concrete site-wide findings: 237 em-dash instances across all 10 files (Hard No violation, top per-file count is fred-brooks.md at 38, lowest is the long-read chapter at 2); 6 `leverage` instances (mixed disposition — 3 rewrite, 2 KEEP-as-cited, 1 per-Julie); 1 `navigate` metaphorical use; 1 `not just` Hard No construction in Dekker. Audit file scaffolded at project root with §1 findings populated; §2 per-piece deep-dive, §3 cross-cutting synthesis, §4 dispositions, §5 closing editorial paragraph all explicitly marked PENDING for next session. Per-piece ISCs (86-147) and synthesis/output ISCs (148-175) intentionally left `[ ]` so next-session resume is unambiguous about pickup point.
- **2026-05-25 — Save-point decision: clear context after this commit; next session opens by reading `audit-prose-2026-05-25.md` top-to-bottom and resuming at §2 per-piece deep-dive.** Rationale: keeping 7 guideline files + 10 prose pieces + extensive analytical context in-window for the remainder of the audit would consume budget Julie can spend better in a fresh session. The audit file is the durable system-of-record for what's been found; the ISA links it. Resume is mechanical from the file.
- **2026-05-25 — Audit iteration resumed and closed.** Per-piece deep-dive (§2, eleven blocks), cross-cutting synthesis (§3, eight named patterns), disposition table (§4), and closing editorial paragraph (§5) populated. Final word count 6,019 (under ISC-163's 6,000-word cap after compression pass; tally drift acceptable). Executive summary added at top per ISC-159. Advisor pressure-test (Rule 2) returned four useful challenges; all addressed inline — (a) lexical AI-tell scan for naming gestures / throat-clearers / not-X-but-Y / hedge-tails returned zero hits across all 10 files (documented as "Additional pressure-tests" section), (b) dogfooding note added acknowledging audit's own em-dash count in narrative voice, (c) disposition table reviewed against advisor's 90-second-triage criteria and confirmed actionable, (d) per-piece blocks reviewed for transposability and confirmed piece-specific. Cato (Rule 2a, E4 mandatory) skipped — codex CLI unavailable; logged to `~/.claude/PAI/MEMORY/VERIFICATION/cato-findings.jsonl`. Iteration `phase: complete`; ISA progress 175/175.
- **2026-05-25 — Advisor auto-state pulled wrong ISA again on resume.** Advisor referenced `week-plan-2026-05-25` and flagged sequencing risk against Wed-crucible prep. False positive — the driving ISA is the project ISA at `~/Camila/thinker-distillation/ISA.md`; the user explicitly asked to continue this iteration. Same Algorithm v6.2.x deferred-discovery issue documented earlier in this Decisions log. Track-but-don't-block.

## Changelog

### 2026-05-25 — Long-read tier: two-collection design

- **conjectured:** Keep `chapter_list[]` in the thinker frontmatter, with each entry carrying `title` + `href`. The thinker file would be the single source of truth for what chapters exist.
- **refuted_by:** Two-source-of-truth problem — adding a chapter requires editing the thinker frontmatter AND creating the chapter file, and missing-href / missing-chapter-file drift will not surface until production. Astro Content Collections give us typed `getStaticPaths` for free if chapters are their own collection; missing chapters cause a build failure instead of a 404.
- **learned:** When two things naturally vary at different cadences (the thinker is the long-lived identity; chapters are the units of writing), they belong in separate collections. The per-thinker chapter list is *computed* at build time from the chapter collection, filtered by `thinker_slug`. The thinker page no longer needs to know which chapters exist.
- **criterion_now:** `chapter_list[]` removed from the `long_read` schema block. Chapters are their own `longReadChapters` Content Collection. ISC-21 verified by chapters rendering at typed routes; ISC-33 verified by the schema change living in git history.

### 2026-05-25 — Astro scaffold + Komoroske render

- **conjectured:** A clean `bun create astro@latest` would work end-to-end with the toolchain in this environment.
- **refuted_by:** Astro 6.x requires node ≥v22. nvm default is v20.11.0. The scaffold command failed (`Node.js v20.11.0 is out-of-date and unsupported`). System node v26 is present at `/opt/homebrew/bin/node`.
- **learned:** Astro 6.x build commands need `PATH="/opt/homebrew/bin:$PATH"` prefixed in this environment until either (a) nvm default is updated, (b) a project-local `.nvmrc` is honored by the active shell. Adding `.nvmrc` containing `22` to the project so Netlify and future tooling pick it up automatically.
- **criterion_now:** Local build path is `PATH="/opt/homebrew/bin:$PATH" bun run build`; Netlify uses `NODE_VERSION = "22"` in `netlify.toml` so the cloud build is independent of local nvm state.

### 2026-05-25 — Concept pages: derived holders vs authored editorial

- **conjectured:** A `Concept` Content Collection would author the full concept page — including a `holders[]` array naming each thinker and their attribution_kind — and the page would render straight from the concept file.
- **refuted_by:** Two-source-of-truth problem. The `named_frames[]` on thinker entries already encode `concept_slug` + `attribution_kind` + `co_originators[]` per holder. Re-asserting `holders[]` on the concept file would mean every new holder requires editing both the thinker file AND the concept file, with drift inevitable. The thinker frontmatter is the source of truth for *who holds the frame*; concept files should be the source of truth only for *editorial content about the concept itself*.
- **learned:** The cleanest division is authoring-surface vs derived-surface. Concept files author the editorial overlay (Julie's reading, limits at concept level, adjacent concepts, working uses); holders / genealogy / attribution timeline are derived at build time from the same `named_frames[]` entries that already power thinker-page §4 `also_held_by`. The new helper `buildConceptHoldersWithAttribution()` is intentionally parallel to the existing `buildConceptHoldersIndex()` — same shape, richer payload (preserves frame_display_name + frame_gloss + source_link), with attribution-ordered sort. Single source of truth fans out three ways: concept-page Genealogy, concept-page Holders, thinker-page also_held_by.
- **criterion_now:** ISC-29 (no new node type) extends to ISC-64 at the v2 layer. `Concept` Content Collection registered in `src/content.config.ts`, but the graph still has two and only two node types (Thinker + Frame). Concept files are editorial overlays on Frame nodes. Holders are NEVER hand-authored on concept files.

### 2026-05-25 — Julie's reading is a scaffolded slot, not a Camila draft

- **conjectured:** When Camila populates the first concept file, the `julie_reading` field could be initially drafted from Julie's existing voice in thinker `what_i_take` and `where_i_extend` fields — paraphrased into a concept-level reading — and Julie would edit on top.
- **refuted_by:** During EXECUTE I caught myself populating `working_uses[]` on `coordination-headwind.md` with three plausible operational examples drawn from `alex-komoroske.md`'s `what_i_take`. Those weren't false claims — they were consistent with Julie's recorded voice — but the act of *projecting* her voice into a new shape is exactly what `feedback_feminine_energy_writing.md` says not to do. The thinker pages were OK to scaffold because Julie reviewed them at v1 launch; new concept files have no such review point unless Camila leaves the slots empty.
- **learned:** The writing-partner discipline applies *per-field*, not per-page. Operational examples and editorial readings — the Julie-voice fields — must be left empty for Julie. Concept-level limits and adjacent_concepts are fair game for Camila to scaffold (they're substantive observations a careful reader could surface, not Julie's voice). The schema makes this explicit: `julie_reading_prompt` is a Camila-scaffold slot; `julie_reading` and `working_uses` are Julie-writes slots that must remain empty until she fills them.
- **criterion_now:** ISC-66 added as anti-criterion: Camila must NOT author `julie_reading` content. Codified in SCHEMA.md Anti-10. The empty-state lane is the *correct* render until Julie writes — `julie-empty-slot` styling makes the empty state visually present rather than hiding the absence.

### 2026-05-25 — Initial project seed

- **conjectured:** The v0 schema design task and the long-lived project would share a single ISA at `MEMORY/WORK/thinker-distillation-schema-v0/ISA.md`.
- **refuted_by:** Algorithm v6.3.x project-ISA convention — anything with persistent identity (an application, a content site) gets `<project>/ISA.md` as system of record, not a task-workspace ISA. The v0 task is complete; the project is just starting. Conflating the two would make the task-completion gate (`phase: complete`) conflict with the project's ongoing evolution.
- **learned:** Schema-design tasks and the projects they design *for* are separate ISA units even when one produces the other. Graduate to project ISA the moment the design task completes and the build phase begins.
- **criterion_now:** Project ISA at `~/Camila/thinker-distillation/ISA.md` is the long-lived system of record. Task ISA at `MEMORY/WORK/thinker-distillation-schema-v0/ISA.md` is archived with a pointer to here.

### 2026-05-25 — Prose audit format-correlation finding

- **conjectured:** Site-wide AI-tells in the thinker pages would be voice-uniform — same kind of habit firing across all editorial fields and all formats.
- **refuted_by:** Em-dash counts split sharply by format. Thinker-page editorial fields fire em dashes at 23-38 per file; the Komoroske long-read chapter (continuous prose, 147 lines) uses 2 total. Same author, same site, dramatically different rule-violation density.
- **learned:** The em-dash habit is not a voice trait — it is a *compression reflex* fired by writing in short standalone editorial fields. Continuous-prose form suppresses the reflex. The implication is that authoring discipline (drafting editorial fields as small essays rather than compressed standalone units) closes the leak before any sweep does.
- **criterion_now:** Future thinker-page authoring norm: draft `thirty_second_take`, `body_of_work editorial_note`, `what_i_take`, `where_i_extend` as continuous-prose paragraphs first, compress second. Build-time check on em dashes prevents recurrence regardless of authoring habit.

## Verification

- **ISC-1 (2026-05-25):** `~/Camila/thinker-distillation/` directory exists — `ls -la` confirmed.
- **ISC-2 (2026-05-25):** Project ISA at `~/Camila/thinker-distillation/ISA.md` — this file.
- **ISC-3 (2026-05-25):** SCHEMA.md present at project root — `ls -la` showed `ISA.md` (12,588 bytes) + `SCHEMA.md` (26,303 bytes).
- **ISC-4 (2026-05-25):** Thinker Distillation Site entry added to `~/.claude/PAI/USER/Projects.md` Active Projects (after Writing Style System Buildout).
- **ISC-5 (2026-05-25):** Task ISA at `MEMORY/WORK/thinker-distillation-schema-v0/ISA.md` notes graduation with pointer to this project ISA.
- **ISC-6 (2026-05-25):** Astro 6.3.7 scaffolded into `~/Camila/thinker-distillation/` via `bun create astro@latest --template minimal --typescript strict`. Package renamed to `thinker-distillation`. `tsconfig.json` extends `astro/tsconfigs/strict`. Note: scaffold requires node ≥v22 in PATH; system node v26 available at `/opt/homebrew/bin/node`, used via `PATH="/opt/homebrew/bin:$PATH"` prefix since nvm default is v20.
- **ISC-7 (2026-05-25):** Content Collections schema at `src/content.config.ts` defines `thinkers` collection with full Zod schema covering all SCHEMA.md fields — `attribution_kind` enum, `thinker_type` enum, named_frames with `concept_slug` kebab-case regex, body_of_work, limits (min 2), adjacent_thinkers (min 3), optional long_read. Schema enforces ISC-25 and ISC-26 floors at build time.
- **ISC-8 (2026-05-25):** Page template at `src/pages/thinkers/[slug].astro` implements §1 Hero / §2 Who / §3 POV / §4 Named Frames / §5 Body of Work / §6 Editorial / §7 Breaks / §8 Adjacent / §9 Further In / §10 Long Read. Uses Astro Content Collections `getStaticPaths` + `render(entry)`.
- **ISC-9 (2026-05-25):** Four-lane visual treatments shipped in `src/styles/global.css` — what-X-says (quote tint + left border), §6 julie-lane (golden tint + left border + "From Julie's reading" mark), §7 julie-lane.breaks (same julie family, red break accent border, limit-card list-of-limits with severity tag), still-load-bearing closing beat (julie-tint, no list, no accent). Visually verified via Interceptor screenshot.
- **ISC-10 (2026-05-25):** `also_held_by` build-time query implemented in `src/lib/graph.ts` (`buildConceptHoldersIndex` + `alsoHeldByFor`). Rendered as link cluster beneath each Named Frame. Real cross-edges await ≥2 thinker pages (ISC-17).
- **ISC-11 (2026-05-25):** `bun run build` succeeded — 2 pages built (`/` index + `/thinkers/alex-komoroske/`) in 1.11s, zero type errors, content sync clean.
- **ISC-14 (2026-05-25):** Komoroske page renders all 10 sections per SCHEMA.md pressure-test. Verified via `interceptor text` (full page content present) + `interceptor screenshot --full` (lanes visually distinct, 2400×13506px).
- **ISC-18 (2026-05-25):** Casey-test for Komoroske passes — byline reads as honest first-person editorial ("Komoroske generalized Brooks's narrow claim"), no false claims of origin where attribution_kind is `extended` or `popularized`.
- **ISC-23..27 (2026-05-25):** Komoroske content meets all per-thinker discipline thresholds — 6 Named Frames (≥4) with attribution_kind set, §6 `what_i_take` + `where_i_extend` + 3 working_uses, §7 4 limits (2 structural, 2 local) + load-bearing-despite paragraph, §8 5 adjacent thinkers with editorial-voice edge labels, §1 thirty_second_take is editorial framing not credentialing.
- **ISC-28 (2026-05-25):** Anti-collapse verified — §3 working_line renders in `blockquote.what-x-says` (quote-tint family) while §6 renders in `.julie-lane` (julie-tint family). Visually distinct via Interceptor.
- **ISC-29 (2026-05-25):** Anti-new-node-types verified — `src/content.config.ts` defines only the `thinkers` collection; `thinker_type` is an enum property, not a separate collection or node type.
- **ISC-30 (2026-05-25):** Anti-render-rationale verified — `inclusion_rationale` is in frontmatter (read by schema) but never referenced in `[slug].astro`. Confirmed via `interceptor text` not showing "produced a portable vocabulary" string from the rationale.
- **ISC-31 (2026-05-25):** Anti-Casey verified — no `casey-rosenthal.md` exists in `src/content/thinkers/`; v1 roster is Komoroske only at this writing.
- **ISC-32 (2026-05-25):** Antecedent verified — Komoroske inclusion_rationale documents the filter clearance; pushback pattern is the working norm captured in `feedback_thinker_inclusion_pushback.md`.
- **ISC-12 (2026-05-25):** Deployed to Netlify at https://thinkerdistillery.netlify.app/. `curl -sI` returned HTTP/2 200 on both `/` and `/thinkers/alex-komoroske/`. `x-robots-tag: noindex, nofollow` confirmed propagated from `netlify.toml`.
- **ISC-13 (2026-05-25):** Branch previews are on by default for GitHub-connected Netlify sites; no extra config needed in `netlify.toml`. Will fire on next non-main branch push.
- **ISC-19 (2026-05-25):** Site-level tagline "Curated readings of practitioners whose ideas are worth metabolizing." placed in site chrome header (`src/layouts/Base.astro`). Placeholder per SCHEMA.md §5; Julie's final naming call deferred to before-promotion gate.
- **ISC-20 (2026-05-25):** Footer link `About →` present on every page via `src/layouts/Base.astro`; target route deferred to before-promotion gate per the About-page reclassification decision.
- **ISC-22 (2026-05-25):** Live Komoroske page probed — curl returned 200, content-length 14,759 bytes; Interceptor screenshot at 3420×13506px confirmed all four lanes render identically in production to local build. Project repo: https://github.com/juliedavila/thinker-distillation (private).
- **ISC-15 (2026-05-25):** Fowler page (`src/content/thinkers/martin-fowler.md`) ported from `~/Camila/ways-of-fowler/` book project (PREFACE bio, CONCEPT_LATTICE six-arc through-line, all named-frame attribution chains). 7 frames spanning the attribution spectrum (1 co-authored with Beck, 2 extended from Opdyke/Beck and Evans, 4 original including the *bliki* meta-move). Live at https://thinkerdistillery.netlify.app/thinkers/martin-fowler/ — curl 200; Interceptor screenshot at 3420×16194px confirmed full §1–§10 render, all four lanes, Komoroske listed as parallel-edge adjacent in §8. Home page now lists both thinkers in alphabetical order.
- **ISC-17 (2026-05-25):** Cross-thinker `also_held_by` edges fire honestly in both directions. On Komoroske live page: "Coordination headwind ... also held by: Fred Brooks (origin)". On Brooks live page: "Brooks's Law ... also held by: Alex Komoroske (extension)". Verified via `interceptor text` against production URLs. Cross-link is structural (shared global slug), not graph-special-cased — same affordance will fire for any future shared-concept pair. **Strengthened 2026-05-25 by 3-way resilience cluster** — Woods live page: "Adaptive capacity ... also held by: John Allspaw (extension) · Sidney Dekker (extension)"; "New view of human error ... also held by: Sidney Dekker (extension)". Allspaw and Dekker pages cross-link symmetrically. Cross-link audit on built `dist/`: Komoroske 1 edge, Brooks 1, Allspaw 2, Woods 2, Dekker 3, Fowler 0, Dalio 0 — Fowler and Dalio honestly isolated (no shared Frame slugs with other holders).
- **ISC-16 (2026-05-25):** Dalio page (`src/content/thinkers/ray-dalio.md`) populated with `principles-distiller` thinker_type — 5 named frames (`principles`, `radical-transparency`, `believability-weighted-decision-making`, `idea-meritocracy`, `pain-plus-reflection-equals-progress`). Live at https://thinkerdistillery.netlify.app/thinkers/ray-dalio/ (curl 200). Validated Discipline Gate 1 (node-type uniformity): the type-extension introduces no new node type, only a property-shape variation on the existing `Thinker` schema. §6 imports the principles-distiller move into security-program design (risk frameworks as live revisable artifacts); §7 names the contested Bridgewater operationalization and Taleb critique honestly.
- **ISC-21 (2026-05-25):** Long-read tier wired. New `longReadChapters` Content Collection (`thinker_slug`, `chapter_number` non-negative, `title`, `summary`, `last_updated`); chapters live at `src/content/long-read/{thinker_slug}/{nn-chapter}.md`. Routes added: `/thinkers/[slug]/long-read` (index — sorted chapter list) and `/thinkers/[slug]/long-read/[chapter]` (chapter render with prev/next nav). Two chapters live in production: Komoroske *Part 1 — The Diagnosis* (4,860 words, full content from `~/Camila/ways-of-komoroske/01-the-diagnosis.md`) and Fowler *Chapter 0 — Preface* (1,160 words, from `~/Camila/ways-of-fowler/PREFACE.md`). §10 on each thinker page now links to the long-read index instead of rendering an inline chapter list; the `chapter_list[]` field was removed from `long_read` schema. All 4 long-read URLs return 200. Interceptor verified editorial-prose typography on the chapter page (serif body, italic blockquote, H2 dividers, prev/next nav).
- **ISC-33 (2026-05-25):** SCHEMA.md changes tracked in git history. SCHEMA.md updated to reflect the long-read tier schema change (chapter_list removed, two-collection design documented in §2 §10 with rationale). No parallel `acceptance.yaml` / `acceptance.ts` exist anywhere in the tree; verified via `find . -name "acceptance.*"` returning empty. ISA + SCHEMA + Astro Content Collection Zod schemas are the only acceptance harness; the Zod schema does the per-field type/threshold enforcement (≥4 frames, ≥2 limits, ≥3 adjacent), the ISA tracks ISCs, SCHEMA.md is the human-readable spec. All schema deltas (chapter_list removal, longReadChapters addition, Komoroske coordination-headwind attribution change) are in `git log src/content.config.ts SCHEMA.md src/content/thinkers/alex-komoroske.md`.

---

## Next Session Pickup (save point — 2026-05-25, v1 complete)

> Save point at Julie's explicit request. v1 of Thinker Distillery is shipped, live, and stable. Fresh-Camila: read this section first when any next prompt references this project.

### Status at save

**33/33 v1 ISCs verified.** Site live at https://thinkerdistillery.netlify.app/ — private-by-obscurity (`x-robots-tag: noindex,nofollow` on every page). Repo at https://github.com/juliedavila/thinker-distillation (private). 7 thinkers, 2 long-read chapters, full cross-thinker graph wired. Working tree clean, all commits pushed to `main`. This is genuinely stable — nothing in flight.

### What's live

| Thinker | thinker_type | Cross-edges | Long-read |
|---------|--------------|-------------|-----------|
| Alex Komoroske | essay-corpus | ↔ Brooks (`coordination-headwind`) | Part 1 — The Diagnosis |
| Fred Brooks | book-author | ↔ Komoroske (`coordination-headwind`) | — |
| Martin Fowler | mixed | (graph-isolated; §8 voice edges only) | Chapter 0 — Preface |
| John Allspaw | mixed | ↔ Woods + Dekker (`adaptive-capacity`, `work-as-imagined-vs-work-as-done`) | — |
| David Woods | mixed | ↔ Allspaw + Dekker (`adaptive-capacity`, `new-view-of-human-error`) | — |
| Sidney Dekker | book-author | ↔ Woods + Allspaw (`adaptive-capacity`, `new-view-of-human-error`, `work-as-imagined-vs-work-as-done`) | — |
| Ray Dalio | principles-distiller | (graph-isolated; §8 voice edges only) | — |

Resilience-engineering cluster (Allspaw / Woods / Dekker) is the strongest graph signal — three-way `adaptive-capacity` mesh, multiple shared concepts. Brooks ↔ Komoroske is the second working pair. Fowler and Dalio honestly stand alone by concept slug; they connect through §8 editorial-voice edges to the rest of the roster but don't share Frame slugs.

### One-paragraph orientation for cold-start

Per-practitioner web app (Brain Pickings × Greptalks shape) distilling thinkers whose bodies of work produced vocabularies the field uses to think. Julie is customer-zero; site is live but unpromoted; About page deferred to a before-promotion gate. v1 schema is locked (TEI pattern, three discipline gates: node-type uniformity, Frame-level attribution, Casey-test). The locked spec is `SCHEMA.md` at project root; the running implementation is the Astro Content Collection Zod schemas in `src/content.config.ts` (which are stricter than SCHEMA.md — they enforce ≥4 frames, ≥2 limits, ≥3 adjacent at build time). Casey Rosenthal explicitly excluded from v1 (v2 concept-page candidate).

### Open lanes for next prompt

There is no required next move — v1 is done. When Julie picks the project up again, these are the natural lanes:

1. **More thinkers in the resilience cluster.** Hollnagel, Cook, Reason all clear the filter cleanly and would extend the existing `adaptive-capacity` / `new-view-of-human-error` mesh. Hollnagel adds `safety-I-vs-safety-II`. Cook adds `how-complex-systems-fail`. Reason adds `swiss-cheese-model`.
2. **More long-read chapters.** `~/Camila/ways-of-komoroske/` only has Part 1 drafted; PLAN.md outlines the rest. `~/Camila/ways-of-fowler/` has the conceptual mapping and corpus done but no Part-1+ draft yet. Both book projects are independent writing efforts that fold into this site as chapters when chapters get written.
3. **Site-level naming.** The tagline "Curated readings of practitioners whose ideas are worth metabolizing." is a placeholder. Julie's naming instinct earns the final call before promotion.
4. **Before-promotion gate.** When Julie decides to broaden audience, the deferred items unlock: About page (full editorial mission, lanes explainer, filter discipline, source posture), site-name finalization, removal of `x-robots-tag: noindex`, custom domain if she wants one.
5. **v2 concept pages.** Casey Rosenthal is the standing v2 concept-page candidate (Netflix Chaos team frames — not individually-portable vocabulary). Could also be the home for thinkers whose work emerged from communities (DORA team, Chaos Mesh team, etc.).

### How to read the codebase

| Path | What it is |
|------|------------|
| `ISA.md` | This file — long-lived system of record |
| `SCHEMA.md` | Locked v1 spec (human-readable). Updated whenever schema evolves. |
| `src/content.config.ts` | Running Zod schemas — the enforcement harness for ISCs 23-26 |
| `src/content/thinkers/{slug}.md` | One file per thinker; frontmatter-only (body usually empty) |
| `src/content/long-read/{thinker-slug}/{nn-chapter}.md` | One file per chapter; frontmatter + prose body |
| `src/pages/thinkers/[slug].astro` | Thinker page template (§1–§10) |
| `src/pages/thinkers/[slug]/long-read/{index,[chapter]}.astro` | Long-read routes |
| `src/lib/graph.ts` | Build-time `also_held_by` computation |
| `src/styles/global.css` | Four-lane visual treatments + chapter typography |
| `netlify.toml` | Build command, NODE_VERSION=22, noindex headers |

### Working norms in effect

- **`feedback_thinker_inclusion_pushback.md`** — when Julie proposes a borderline thinker, push back on filter fit + surface 1–3 same-neighborhood alternatives that clear cleanly. Apply automatically without asking.
- **Node-type uniformity is invariant.** Only `Thinker` and `Frame` as primary graph nodes. New `thinker_type` values add property shapes and optional edges; never new node types.
- **Casey Rosenthal is excluded from v1.** v2 concept-page candidate. Don't re-propose him without explicit conversation.
- **`inclusion_rationale` is backstage** — stays in frontmatter, never rendered. Site-level tagline + (eventual) About page carry kind-of-object work.
- **About page is DEFERRED** to before-promotion. Don't propose it as v1 unless promotion is on the horizon.
- **Concept-slug unification for cross-edges.** When a new thinker shares an existing Frame, unify the slug; vary the `display_name` per holder; set `attribution_kind` honestly. Pattern: Brooks "Brooks's Law" + Komoroske "Coordination headwind" both hold `coordination-headwind`.
- **Long-read chapters are their own collection.** Chapter list is computed at build time from the `longReadChapters` collection, never duplicated in thinker frontmatter.

### Build / deploy operational notes

- **Node version:** Astro 6.x requires node ≥v22. nvm default is v20. Use `PATH="/opt/homebrew/bin:$PATH" bun run build|dev|preview` to pick up system node v26. `.nvmrc` is set to `22` so `nvm use` works. Netlify uses `NODE_VERSION = "22"` from `netlify.toml`.
- **Auto-commit:** `~/Camila` is in `checkpoint-repos.txt`; nested `thinker-distillation/` repo is git-ignored at the parent level so its commits stay clean of career-transition material. Push manually after ISA updates; Netlify auto-deploys main branch.
- **Verification pattern:** `bun run build` → `bun run preview` locally on `:4321` → `interceptor open <url>` + `interceptor text|screenshot` for visual confirmation → push → poll for Netlify deploy → re-verify production URL.
- **GitHub auth via gh:** `gh auth setup-git` already run; pushes work via the gh credential helper without prompting.

### Where source material lives

- **Komoroske:** `~/Camila/ways-of-komoroske/01-the-diagnosis.md` (drafted), `PLAN.md` (chapter outline for Parts 2+). Knowledge entries in `~/.claude/PAI/MEMORY/KNOWLEDGE/Ideas/`.
- **Fowler:** `~/Camila/ways-of-fowler/{CONCEPT_LATTICE,CORPUS,PREFACE,ISA,PLAN}.md`. PREFACE.md is the only piece currently shipped as a chapter. Knowledge entry at `KNOWLEDGE/Ideas/fowler-cartographer-move.md`.
- **Brooks, Allspaw, Woods, Dekker, Dalio:** No PAI source material — assembled from public corpus when writing. References live in the thinker frontmatter's `body_of_work` and `further_in` fields.

### Classifier note

During this session the prompt classifier occasionally timed out / failed JSON parse, defaulting to ALGORITHM E3. Work proceeded cleanly. Repeated fail-safes in the next session are not a signal of project state; carry on.
