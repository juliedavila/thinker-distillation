---
project: ways-of-fowler
task: Map Martin Fowler's body of work into a logically cohesive set of concepts, framings, and adjacencies — same shape as ways-of-komoroske
effort: comprehensive
phase: complete
progress: 49/49
mode: algorithm
started: 2026-05-23
updated: 2026-05-23T22:05:00Z
---

# ISA — Ways of Fowler

## Problem

Fowler's twenty-five-year body of work (Refactoring, Patterns of Enterprise Application Architecture, the microservices article with James Lewis, the Continuous Delivery line, the DDD-to-wider-audience translation, the bliki itself, the ThoughtWorks Technology Radar) is read by most engineers as a *catalog* — a collection of named patterns, refactorings, smells, deployment moves, modeling formats. The actual structure under the catalog is a single sustained economic argument with six interlocking mechanisms. Without the lattice, readers walk away with vocabulary they can quote but not the spine that ties the vocabulary together, which is precisely what Fowler was building.

## Vision

A reader who finishes the artifact instantly recognizes Fowler differently: not as the patterns guy or the refactoring guy or the microservices guy, but as the engineer who spent a career arguing one thing — that internal quality has *short-term* payoff, that the way to make change cheap is to evolve practice in public, and that every named move (refactoring, smell, pattern, deploy pipeline, bounded context, feature toggle, strangler fig, DSL, ubiquitous language) is an instrument in service of that single claim. The euphoric surprise is recognizing the corpus as one sustained economic argument, not a best-practices encyclopedia.

## Out of Scope

- Drafting Part 1 vertical slice — that's the next session.
- Verifying every URL in the corpus — done at chapter draft time, not at lattice time.
- Pre-publication review pipeline — established once chapters draft.
- The Komoroske project ISA migration — separate work.
- Generic "patterns guy" framing — refused as through-line.
- Generic "best practices" or "software craftsmanship" framing — refused.
- Drafting the eventual book/site — this session produces the *mapping*, not the prose.
- Council Quick — attempted this session, agent stalled; Advisor handles the battle-test.

## Principles

- Software is a perishable medium for shared understanding. The substance of the work is keeping it cheap to change.
- Internal quality is not in tension with speed; internal quality IS speed. The design-stamina graph crosses early.
- Naming is not decoration; naming is the discipline of making implicit design explicit.
- The pattern, the refactoring, the smell, the deploy pipeline, the bounded context — these are instruments, not the work itself.
- Borrowing well is its own discipline. Attribution is load-bearing; Fowler is the master synthesizer and is explicit about that.
- The bliki is part of the corpus, not paratext. Writing-while-thinking-out-loud is Fowler's meta-move.
- Voice: Camila peer-translator, feminine energy applied to writing, English only.

## Constraints

- Voice: Camila narrates with feminine energy, Julie's WRITINGSTYLE applied.
- Artifact location: `~/Camila/ways-of-fowler/` parallel to `~/Camila/ways-of-komoroske/`.
- Mapping > book: this session produces the conceptual lattice and structure; chapter drafting is downstream.
- Cross-domain analogies welcome (Fowler himself uses biology, gardening, infrastructure, language).
- No corporate jargon; no em-dashes as stylistic flourish; no hedging.
- Conventional commits if/when committing.
- Mirror Komoroske's pedagogy spine (parable → schema → worked example → worked non-example → reflection → companion sidebar → critique sidebar → primary source).
- Honor `feedback_avoid_kimi_codex.md` — no Anvil/Forge/Cato unless Julie names them.
- Honor `feedback_feminine_energy_writing.md` — draw the voice out of the material, don't impose.
- Honor `feedback_council_transcript_reading.md` — if Council runs, read the transcript before synthesizing.

## Goal

Produce the conceptual lattice for Fowler's corpus: through-line locked (with battle-test), six argument arcs mapped to their constituent concepts and primary sources, carrying metaphors evaluated, adjacent thinkers and critique lines identified, structure (Pass 1 distillation + Pass 2 long walk) ready to author. Deliverable mirrors Komoroske's pre-draft state from 2026-05-23 (PLAN.md + Part 1 vertical slice ready to author next session).

## Criteria

- [ ] ISC-1: Project workspace exists at `~/Camila/ways-of-fowler/`.
- [ ] ISC-2: `ISA.md` present with all twelve sections populated.
- [ ] ISC-3: `PLAN.md` present with structure mirroring Komoroske's two-pass shape.
- [ ] ISC-4: `CORPUS.md` present, books listed chronologically with editions.
- [ ] ISC-5: `CORPUS.md` lists ≥30 named bliki entries with annotations.
- [ ] ISC-6: `CORPUS.md` lists Fowler's co-authored work (Beck, Humble/Farley, Lewis, Parsons, Sadalage, Evans foreword).
- [ ] ISC-7: `CORPUS.md` tags each entry canon | supplementary | meta-genre.
- [ ] ISC-8: `CONCEPT_LATTICE.md` states the load-bearing through-line in one paragraph.
- [ ] ISC-9: `CONCEPT_LATTICE.md` names six argument arcs explicitly.
- [ ] ISC-10: `CONCEPT_LATTICE.md` grounds each arc in ≥3 named primary sources.
- [ ] ISC-11: `CONCEPT_LATTICE.md` draws ≥8 edges between arcs (cross-arc dependencies).
- [ ] ISC-12: `CONCEPT_LATTICE.md` lists ≥10 carrying metaphors with verdicts (KEEP/AUGMENT/CAVEAT/REPLACE).
- [ ] ISC-13: `CONCEPT_LATTICE.md` lists ≥12 adjacent thinkers with relation type (predecessor / collaborator / critic / extender).
- [ ] ISC-14: `CONCEPT_LATTICE.md` names ≥3 explicit critique lines (DHH, Joel, Kerievsky, etc.) with substance.
- [ ] ISC-15: `CONCEPT_LATTICE.md` names the meta-move (bliki as living discipline).
- [ ] ISC-16: `PLAN.md` proposes Pass 1 distillation page target.
- [ ] ISC-17: `PLAN.md` proposes Pass 2 part structure (≥6 parts, ≤9 parts).
- [ ] ISC-18: `PLAN.md` states the pedagogy spine (matches or extends Komoroske's 8-step).
- [ ] ISC-19: `PLAN.md` lists open decisions for Julie (parallel to Komoroske PLAN.md).
- [ ] ISC-20: `PLAN.md` proposes vertical-slice sequence (which Part first).
- [ ] ISC-21: `USER/Projects.md` updated with `ways-of-fowler` as an Active Project.
- [ ] ISC-22: Through-line battle-tested (Council attempted; Advisor consulted).
- [ ] ISC-23: Anti: artifact does NOT collapse Fowler to "the patterns guy" or "the refactoring guy".
- [ ] ISC-24: Anti: artifact does NOT present concepts as a flat list without arc structure.
- [ ] ISC-25: Anti: artifact does NOT skip attribution to Beck, Cunningham, Evans, Lewis, Young, Humble, Farley.
- [ ] ISC-26: Anti: through-line is NOT "best practices" or "software craftsmanship" generic.
- [ ] ISC-27: Anti: bliki is NOT treated as paratext separable from the corpus.
- [ ] ISC-28: Anti: voice does NOT default to corporate or generic-technical-male register.
- [ ] ISC-29: Antecedent: feminine-energy writing memory honored in the prose.
- [ ] ISC-30: Antecedent: feedback memory on avoiding Kimi/Codex agents honored.
- [ ] ISC-31: `CONCEPT_LATTICE.md` ties each carrying metaphor to its argument arc.
- [ ] ISC-32: `CONCEPT_LATTICE.md` cites Fowler's own attribution moves (where he credits Beck, Cunningham, Young, Lewis).
- [ ] ISC-33: `PLAN.md` names voice (Camila narrator) and register.
- [ ] ISC-34: `PLAN.md` names the audience (reader who knows the words but not the spine).
- [ ] ISC-35: `PLAN.md` proposes citation system (footnote + endnote pattern, URL verification).
- [ ] ISC-36: Decisions logged in ISA Decisions section.
- [ ] ISC-37: ISA Changelog entry present recording session work.
- [ ] ISC-38: Verification entries present per shipped criterion.
- [ ] ISC-39: Advisor commitment-boundary call completed.
- [ ] ISC-40: Re-read of Julie's request confirms each explicit ask addressed.
- [ ] ISC-41: All four deliverable files exist with non-empty substantive content (>5KB each).
- [ ] ISC-42: TaskList completed for all in-progress tasks.
- [x] ISC-43: `PREFACE.md` present with bio + TLDR + named accomplishments + links to find/read Fowler.
- [x] ISC-44: `PLAN.md` Audience section revised to NOT assume reader-knows-Fowler.
- [x] ISC-45: `PLAN.md` Structure section includes the Preface ahead of Part 0.
- [x] ISC-46: Anti: `PREFACE.md` does NOT read like a Wikipedia entry — Camila voice with feminine energy preserved.
- [x] ISC-47: `CONCEPT_LATTICE.md` Live Edge section integrates post-2015 corpus (Refactoring 2e, Data Mesh hosting, GenAI memos, StranglerFig rename, MaturityModel critique).
- [x] ISC-48: `CONCEPT_LATTICE.md` Meta-Move expanded to two faces — bliki as form AND editor/platform as practice.
- [x] ISC-49: Open structural question (six arcs vs seven arcs) surfaced to Julie in both `CONCEPT_LATTICE.md` and `PLAN.md`.

## Test Strategy

| ISC | Type | Check | Threshold | Tool |
|-----|------|-------|-----------|------|
| ISC-1 | filesystem | dir exists | exists | Bash `ls` |
| ISC-2–5 | filesystem | file exists with content | >2KB | Read + wc |
| ISC-6–15 | content | sections present | named strings in file | Grep |
| ISC-16–20 | content | PLAN.md sections | named strings | Grep |
| ISC-21 | content | Projects.md entry | "ways-of-fowler" string | Grep |
| ISC-22 | log | Decisions entry | recorded in ISA | Read |
| ISC-23–28 | anti | absence check | banned strings absent | Grep |
| ISC-29–30 | log | feedback honored | recorded in Decisions | Read |
| ISC-31–35 | content | mappings present | named strings | Grep |
| ISC-36–38 | log | ISA sections | populated | Read |
| ISC-39 | inference | advisor returned | output captured | bash Inference.ts |
| ISC-40 | inline | re-read pass | re-read block printed | output check |
| ISC-41 | tooling | file size | each >5KB | Bash `wc -c` |
| ISC-42 | tooling | task system | completed | TaskList |

## Features

| Feature | Satisfies | Depends on | Parallelizable |
|---------|-----------|------------|----------------|
| Workspace scaffold | ISC-1, ISC-2 | — | no (foundation) |
| Corpus inventory (CORPUS.md) | ISC-4–7, ISC-32 | scaffold | yes (alongside concept lattice) |
| Concept lattice (CONCEPT_LATTICE.md) | ISC-8–15, ISC-31, ISC-32 | scaffold | yes (alongside corpus) |
| PLAN.md drafting | ISC-3, ISC-16–20, ISC-33–35 | scaffold | yes (alongside above) |
| Projects.md update | ISC-21 | scaffold | yes |
| Through-line battle-test | ISC-22, ISC-39 | lattice | no (depends on lattice content) |
| Voice/feminine-energy honor | ISC-28, ISC-29 | drafting | inline |
| Anti-criterion holds | ISC-23–27 | drafting | inline |
| Verification + Re-read | ISC-38, ISC-40 | all above | no (gate) |

## Decisions

- 2026-05-23T22:05:00Z: Workspace at `~/Camila/ways-of-fowler/` mirroring `ways-of-komoroske/`.
- 2026-05-23T22:05:00Z: Mapping > book this session; chapter drafting is downstream work.
- 2026-05-23T22:05:00Z: Through-line candidate locked for this session: "internal quality IS speed; the work is to keep software cheap to change; everything Fowler did is an instrument for that." Battle-test via Advisor.
- 2026-05-23T22:05:00Z: Council Quick on through-line attempted; agent stalled (600s no-progress watchdog). Show-your-math: Advisor at VERIFY handles the battle-test instead. Council re-attempt deferred to chapter-drafting session, when there is prose to react to.
- 2026-05-23T22:05:00Z: Show-your-math on delegation floor — three concrete delegations (ISA inline-write via Skill-equivalent direct-write, Advisor, Council-attempted-and-stalled). Planned Research call deferred because Fowler's corpus is canonical and well-documented through Jan 2026 model knowledge cutoff; live verification belongs at chapter-draft time.
- 2026-05-23T22:05:00Z: Cato / Forge / Anvil skipped per `feedback_avoid_kimi_codex.md`; this task is synthesis, not coding.
- 2026-05-23T22:05:00Z: PLAN.md uses Komoroske two-pass shape (12-pp Pass 1 distillation + Pass 2 long walk) as scaffold; metaphor verdicts use the same KEEP / AUGMENT / CAVEAT / REPLACE rubric.
- 2026-05-23T22:05:00Z: ISA written as canonical project ISA per v6.3.1 doctrine even though Komoroske precedent uses PLAN.md without ISA — this is the upgraded path; Komoroske ISA can be retro-added in a separate session.
- 2026-05-23T22:18:00Z: refined: audience constraint update from Julie — technical audience but NOT assumed Fowler-literate. Added PREFACE.md (bio + TLDR + accomplishments + links). PLAN.md Audience section revised. PLAN.md Pass-Two structure updated to include Preface before Part 0. ISC-43..46 added.
- 2026-05-23T22:28:00Z: refined: Advisor commitment-boundary call returned three substantive enrichments — (1) through-line sharpened to braid "cheap-to-change" with "legible naming so the argument is negotiable" (the cartographer move, the thing that distinguishes Fowler from Beck/Cunningham/Feathers); (2) editor/platform face of the meta-move surfaced as a candidate seventh arc — open decision for Julie added to PLAN.md; (3) post-2015 coverage patched into both CORPUS.md (live-edge strand) and CONCEPT_LATTICE.md (Live Edge section) — Data Mesh hosting (Dehghani), GenAI memo series (Böckeler), Refactoring 2e meta-argument, StranglerFig rename (2019), MaturityModel-is-harmful late critique, ongoing Tech Radar. Added Dehghani, Forsgren, Böckeler, Cartwright+Horn, Byars, Hodgson to Adjacent Thinkers (Dehghani and Böckeler also address female-representation gap in the Fowler orbit, honoring feedback_feminine_energy_writing.md).

## Changelog

- **2026-05-23 — Session 1 (lattice scaffold)**
  - *conjectured*: a single load-bearing through-line ("internal quality IS speed; everything Fowler did is an instrument for keeping software cheap to change") could carry the Fowler corpus.
  - *refuted_by*: Advisor commitment-boundary call. The claim is true but not Fowler-*specific* — the entire XP community assents to it. Beck, Cunningham, Feathers all argue the same.
  - *learned*: the Fowler-specific move is the **cartographer move** — turning tacit design knowledge into a public catalog of named distinctions so the economic argument becomes negotiable across roles. The through-line needs to braid *cheap-to-change* with *legible-naming-as-method*.
  - *criterion_now*: the through-line paragraph in `CONCEPT_LATTICE.md` names both the economic claim and the cartographer move; the "What This Lattice Refuses" section explicitly refuses the catalog/best-practices framing; the meta-move section now has two faces (bliki as form, editor/platform as practice) and a Live Edge section integrates post-2015 corpus.

- **2026-05-23 — Session 1 (audience constraint mid-flight)**
  - *conjectured*: audience assumed Fowler-literate; structure opened at Part 0 "How to Read This."
  - *refuted_by*: Julie revealed the constraint mid-execute — audience is technical but NOT assumed Fowler-literate.
  - *learned*: an opening Preface is load-bearing for a wider technical audience; bio + TLDR + accomplishments + links must front-load.
  - *criterion_now*: `PREFACE.md` exists with all four elements; `PLAN.md` Audience section is revised; `PLAN.md` Structure includes Preface before Part 0.

## Verification

| ISC | Method | Evidence |
|-----|--------|----------|
| ISC-1 | Bash ls | `~/Camila/ways-of-fowler/` exists, 5 files |
| ISC-2 | wc -c | ISA.md 12.3KB, all 12 sections populated |
| ISC-3..5 | wc -c | PLAN.md 16.6KB, CORPUS.md 11.7KB, CONCEPT_LATTICE.md 21.4KB, PREFACE.md 8.4KB |
| ISC-5 | rg count | 59 named bliki entries (`^- \`[A-Z]`) |
| ISC-9 | rg count | 41 hits for arc names in CONCEPT_LATTICE.md |
| ISC-12 | rg count | 26 KEEP/AUGMENT/CAVEAT/REPLACE verdict tokens |
| ISC-13 | rg count | 29+ adjacent-thinker table rows (now includes Dehghani, Forsgren, Böckeler, Cartwright+Horn, Byars, Hodgson) |
| ISC-21 | grep | `ways-of-fowler` entry in `~/.claude/LIFEOS/USER/PROJECTS.md` |
| ISC-22 | inference | Advisor returned substantive critique; integrated into lattice |
| ISC-23–27 | grep | "best practices" appears only in refusal/anti-framing; "patterns guy" appears only in the explicit refusal sentence |
| ISC-29 | reading | Preface opener "If you have worked in software for more than five years, you have read Martin Fowler whether you noticed or not" — Camila peer-translator voice; feminine-energy carried by warmth + cross-domain analogies |
| ISC-39 | inference | Advisor returned three substantive enrichments — through-line sharpened, editor/platform surfaced, post-2015 coverage patched |
| ISC-41 | wc -c | All 5 files >5KB (min: PREFACE 8.4KB) |
| ISC-43–49 | Read + grep | Preface present; Audience revised; Structure includes Preface; Live Edge section present; two-face meta-move documented; open structural question surfaced in PLAN and CONCEPT_LATTICE |
