---
project: thinker-distillation
effort: E3
phase: build
progress: 18/33
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
- [ ] ISC-4: Project listed in `~/.claude/PAI/USER/Projects.md` Active Projects
- [ ] ISC-5: Task ISA at `MEMORY/WORK/thinker-distillation-schema-v0/ISA.md` notes graduation with pointer to this project ISA

**Astro scaffold (next phase):**

- [x] ISC-6: Astro project initialized with `bun create astro@latest` (TypeScript, strict)
- [x] ISC-7: Content Collections schema defined matching `SCHEMA.md` frontmatter (types enforced at build)
- [x] ISC-8: Page template `src/pages/thinkers/[slug].astro` implements §1–§10 sections
- [x] ISC-9: Four-lane visual treatments implemented per Q2 Path 2 (color family, indent, accents, list-of-limits structure on §7, closing-beat for `still_load_bearing_despite`)
- [x] ISC-10: §4 `also_held_by` affordance renders from Concept-node `holders[]` minus current thinker
- [x] ISC-11: `bun build` succeeds with zero type errors
- [ ] ISC-12: Deployed to Netlify with stable URL
- [ ] ISC-13: Netlify branch previews configured

**First three thinker pages:**

- [x] ISC-14: Komoroske page (`content/thinkers/alex-komoroske.md`) renders all populated sections per SCHEMA.md pressure-test
- [ ] ISC-15: Fowler page renders from `~/Camila/ways-of-fowler/` material (CONCEPT_LATTICE, CORPUS, PREFACE)
- [ ] ISC-16: Dalio page populated and renders (`principles-distiller` thinker_type — first exercise of type-extension)
- [ ] ISC-17: Cross-thinker `also_held_by` shows real edges (e.g., `coordination-headwind` surfaces "also held by Fred Brooks" when Brooks's page exists)
- [x] ISC-18: Casey-test passes for each shipped thinker (byline reads honestly, not as false claim)

**v1 launch (private-by-obscurity):**

- [ ] ISC-19: Site-level tagline placed in site chrome (Julie's naming call)
- [ ] ISC-20: Footer link `About →` from every thinker page (target page may be placeholder until promotion phase)
- [ ] ISC-21: Long-read tier wired for Komoroske and Fowler (chapters at `content/thinkers/{slug}/long-read/`)
- [ ] ISC-22: Live URL probed via curl + Interceptor screenshot showing rendered Komoroske page

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

- [ ] ISC-33: SCHEMA.md changes tracked in git history (no parallel `acceptance.yaml` / `acceptance.ts` — ISA + SCHEMA are the harness)

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

## Decisions

- **2026-05-25 — Project graduated from `MEMORY/WORK/thinker-distillation-schema-v0/` to `~/Camila/thinker-distillation/`.** Task ISA at the old location stays as the v0-design-task record; this file is the long-lived project system of record. SCHEMA.md copied to project root as the active living spec.
- **2026-05-25 — About page reclassified from "required v1 artifact" to "required-before-promotion artifact."** Reasoning: v1 launch is private-by-obscurity (Julie customer-zero, no promotion). The readers who need the About page (curious generalists, power users wanting citation calibration) don't exist yet for the launch audience. Site-level tagline still ships at v1 (for the chrome); full About page deferred until Julie decides to broaden audience. SCHEMA.md text retained as the spec for when it ships.
- **2026-05-25 — All Q1–Q6 walk-through decisions inherited.** Path C (TEI pattern), Frame-level attribution, three discipline gates, curatorial `page_kind`, Path 2 voice treatments, backstage `inclusion_rationale`, `also_held_by` in v1, About-as-manifesto, Astro+Netlify, single repo. Full reasoning chains live in the v0 task ISA's Changelog section.
- **2026-05-25 — Inclusion bench locked.** v1 roster: Komoroske, Fowler, Dalio. Recommended additions (clear filter cleanly): Allspaw, Woods, Dekker. Watch list: Nora Jones (v2). Excluded from v1: Casey Rosenthal (v2 concept-page candidate). Working norm: pushback pattern per `feedback_thinker_inclusion_pushback.md`.
- **2026-05-25 — Astro scaffold + Komoroske render shipped locally.** Astro 6.3.7 (current latest), Content Collections with strict Zod schema, single-page template covering §1–§10, Path-2 visual lanes verified via Interceptor. Komoroske is the only thinker rendered; cross-thinker `also_held_by` affordance code is in place but lights up empty until a second thinker exists (Fowler is next, source material at `~/Camila/ways-of-fowler/`).
- **2026-05-25 — Node version note.** Astro 6.x requires node ≥v22; nvm default is v20.11.0; system node is v26 at `/opt/homebrew/bin/node`. All `bun` invocations against the Astro tree should prefix `PATH="/opt/homebrew/bin:$PATH"`. Long-term option (deferred): set system node as nvm default, or pin v22+ via `.nvmrc` in the project root.

## Changelog

### 2026-05-25 — Initial project seed

- **conjectured:** The v0 schema design task and the long-lived project would share a single ISA at `MEMORY/WORK/thinker-distillation-schema-v0/ISA.md`.
- **refuted_by:** Algorithm v6.3.x project-ISA convention — anything with persistent identity (an application, a content site) gets `<project>/ISA.md` as system of record, not a task-workspace ISA. The v0 task is complete; the project is just starting. Conflating the two would make the task-completion gate (`phase: complete`) conflict with the project's ongoing evolution.
- **learned:** Schema-design tasks and the projects they design *for* are separate ISA units even when one produces the other. Graduate to project ISA the moment the design task completes and the build phase begins.
- **criterion_now:** Project ISA at `~/Camila/thinker-distillation/ISA.md` is the long-lived system of record. Task ISA at `MEMORY/WORK/thinker-distillation-schema-v0/ISA.md` is archived with a pointer to here.

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

---

## Next Session Pickup (resume point — 2026-05-25)

> Save point created at Julie's explicit request so she can clear context and resume cleanly. Fresh-Camila: read this section first when any next prompt references this project.

### Status as of save

Project just graduated from the v0-schema-design task workspace into this project root. v1 schema locked through a six-question walk-through with Julie on 2026-05-24/25. **5/33 ISCs done** — graduation complete; Astro scaffold + first thinker render is the next phase.

### One-paragraph orientation for cold-start

Per-practitioner web app (Brain Pickings × Greptalks shape) distilling thinkers whose bodies of work produced vocabularies the field uses to think. Julie is customer-zero through MVP — site will be live but unpromoted; About page deferred to a before-promotion gate. v1 schema uses the **TEI pattern** (core schema + Frame-level attribution + named optional type-extensions) with **three hard discipline gates** (node-type uniformity, Frame-level attribution from v0, Casey-test acceptance gate). Komoroske is populated to spec inside `SCHEMA.md`; Fowler and Dalio are the next two to render. Casey Rosenthal explicitly excluded from v1 (v2 concept-page candidate).

### Immediate next move at user prompt

**Astro scaffold + Komoroske render.** Eight concrete steps:

1. `bun create astro@latest` inside `~/Camila/thinker-distillation/` (TypeScript strict, minimal template; check current Astro version — likely 5.x by now)
2. Define Content Collections schema matching `SCHEMA.md` frontmatter (Zod, typed at build)
3. Build `src/pages/thinkers/[slug].astro` rendering §1–§10 with the four-lane visual treatments (Q2 Path 2 — same family for §6 and §7, distinguishable accent, closing-beat treatment for `still_load_bearing_despite`)
4. Wire up the `also_held_by` build-time query (compute from Concept-node `holders[]` minus current thinker)
5. Port the Komoroske case from `SCHEMA.md` pressure-test section into `content/thinkers/alex-komoroske.md`
6. `bun run build` → fix any type/render errors
7. Connect to Netlify, deploy, get a stable URL
8. Verify with Interceptor screenshot at the live URL

**Realistic time:** 30–60 min on Camila's side, depending on Astro content-collections cleanness.

**Open question at pickup:** Julie hasn't decided whether to start scaffold immediately on resume, run it in background, or schedule a focused session. If she just says "go" — default foreground so she can react to design choices. Confirm before starting if there's ambiguity.

### What to read first (priority order)

1. **This ISA** (you're here) — long-lived system of record for the project.
2. **`SCHEMA.md`** at project root — locked v1 spec, ~600 lines. The Komoroske pressure-test at the bottom is the concrete v1 first-page target.
3. `~/.claude/PAI/MEMORY/WORK/thinker-distillation-schema-v0/ISA.md` — historical v0-design task ISA with full Changelog (conjecture/refutation/learning entries) explaining the why behind each decision. Read only when you need to understand a specific design call.
4. `~/.claude/PAI/MEMORY/COUNCIL/thinker-schema-pathA-vs-pathB/transcript.md` — 3-round Council debate that produced Path C. Read only if Julie references "the council" or pushes back on a schema decision.

### Working norms in effect

- **`feedback_thinker_inclusion_pushback.md`** — when Julie proposes a borderline thinker, push back on filter fit + surface 1–3 same-neighborhood alternatives that clear cleanly. Apply automatically without asking.
- **Node-type uniformity is invariant.** Only `Thinker` and `Frame` as primary graph nodes. New `thinker_type` values add property shapes and optional edges; never new node types.
- **Casey Rosenthal is excluded from v1** as a thinker page; he's a v2 concept-page candidate. Don't re-propose him without explicit conversation.
- **`inclusion_rationale` is backstage** — stays in frontmatter, never rendered on thinker pages. The site-level tagline + (eventual) About page carry the kind-of-object work.
- **About page is DEFERRED** to a before-promotion gate, not before-launch. Don't propose building it as part of v1 unless Julie says promotion is on the horizon.

### Source material locations for the first three thinker pages

- **Komoroske:** `~/Camila/ways-of-komoroske/01-the-diagnosis.md` (rich draft of Part 1) + `PLAN.md`. Knowledge entries in `~/.claude/PAI/MEMORY/KNOWLEDGE/Ideas/` may help.
- **Fowler:** `~/Camila/ways-of-fowler/{CONCEPT_LATTICE,CORPUS,PREFACE,ISA,PLAN}.md`. Knowledge entry at `~/.claude/PAI/MEMORY/KNOWLEDGE/Ideas/fowler-cartographer-move.md`.
- **Dalio:** No existing source material in PAI. Will need to be assembled from his public corpus (*Principles* book, BridgewaterPrinciples site, talks). Use the `principles-distiller` `thinker_type` — first exercise of the type-extension pattern.

### Long-read fold-in pattern

Ways-of-Komoroske and Ways-of-Fowler book projects fold in under each respective thinker as `content/thinkers/{slug}/long-read/{nn-chapter}.md`. Working files stay at `~/Camila/ways-of-{thinker}/`; published chapters get content-collection-shaped versions in the site repo.

### Operational notes

- **Auto-commit:** `~/Camila` is in `checkpoint-repos.txt`. Every ISC `[ ]→[x]` transition auto-commits via `CheckpointPerISC.hook.ts`. Inspect via `bun ~/.claude/PAI/TOOLS/Checkpoint.ts list thinker-distillation` (slug derived from project name when surfacing checkpoints).
- **Classifier behavior in the session that produced this:** the prompt classifier timed out repeatedly and defaulted to ALGORITHM E3 fail-safe. Work proceeded fine; flagging only so fresh-Camila doesn't treat repeat fail-safes as a signal.
