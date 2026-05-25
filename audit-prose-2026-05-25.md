# Thinker Distillery — Prose-QA Audit

> Holistic audit of all published Thinker Distillery writing against the 7-file Writing Style System at `~/.claude/PAI/USER/`.
>
> **Status:** In progress. Mechanical scan complete. Per-piece deep-dive and cross-cutting synthesis pending in next session.
>
> **Started:** 2026-05-25 | **Author:** Camila | **Driving ISA:** `~/Camila/thinker-distillation/ISA.md` iteration `prose-qa-audit-2026-05-25`

---

## Scope

**In:** 7 thinker pages (Komoroske, Brooks, Fowler, Dalio, Allspaw, Woods, Dekker), 1 concept page (coordination-headwind, excluding the empty `julie_reading` slot), 2 long-read chapters (Komoroske ch01 "The Diagnosis", Fowler preface), site chrome (`Base.astro` tagline + `index.astro` hero).

**Out:** SANS keynote and `Sans.md` companion, LinkedIn waves, resume, conference bios — per locked ISA Decisions entry from session opening.

## Rubric

Internalized from all 7 files at `~/.claude/PAI/USER/`:

| File | What this audit grades against |
|---|---|
| `WritingStyle.md` | Voice mechanics, Hard No list, banned vocabulary |
| `RhetoricalStyle.md` | Argumentation moves (axiomatic base, name-the-thing, contested-claims-first), figure inventory with per-figure guardrails, persuasion approach |
| `AiWritingPatterns.md` | P0 credibility killers, P1 AI smell, P2 structural rules (wan intensifiers, throat clearers, nominalization, weak metaphorical verbs) |
| `LongFormCraft.md` | Applies to long-read chapters only — opening / turn / close, beats, escalation, citation discipline, closing-move menu |
| `DoctrineRegister.md` | Mode A/B/C identification of each subject; spine-vs-handle discipline in editorial framing |
| `PersuasionArchitecture.md` | Track B (doctrine architecture) audience: peer-practitioner-primary; should land for innovators + early adopters |
| `PrivateWritingPractice.md` | Largely N/A — this is published content |

## Severity scale

| Tag | Meaning |
|---|---|
| **STRUCTURAL** | Violates a Hard No or a load-bearing rule; affects how the piece reads at-a-glance; fix changes the prose meaningfully |
| **LOCAL** | Pattern present but the piece survives it; cleanup is high-value but not load-bearing |
| **NIT** | Worth knowing about, not worth fixing in isolation |
| **KEEP** | Working pattern worth naming so it gets repeated deliberately, not by accident |

## Methodology

1. Read all 7 guideline files in full to internalize the rubric.
2. Read all 10 in-scope prose pieces in full.
3. Mechanical scan across all 10 pieces for the rules that can be detected by grep (em dashes, banned words, P0/P1 phrases, wan intensifiers, weak metaphorical verbs).
4. Per-piece deep-dive — apply the rubric dimensions that need a human read (argumentation arc, doctrine register coherence, voice fit, structural quality of long-form pieces).
5. Cross-cutting synthesis — name the patterns that recur across multiple pieces, distinguish "site-wide voice working" from "site-wide leak."
6. Disposition recommendations Julie reviews before any edits land.

**Nothing in this audit auto-applies edits.** All findings are surfaced for Julie's call. Per writing-partner discipline.

---

## §1 — Site-wide findings (mechanical scan, complete)

### Finding 1 — Em dashes everywhere (STRUCTURAL)

**WritingStyle.md Hard No list explicitly says: "No em dashes."** Site is in flagrant violation.

237 em-dash characters (`—`, U+2014) across the 10 in-scope files:

| File | Em-dash count |
|---|---:|
| `fred-brooks.md` | 38 |
| `martin-fowler.md` | 35 |
| `john-allspaw.md` | 30 |
| `david-woods.md` | 30 |
| `ray-dalio.md` | 30 |
| `sidney-dekker.md` | 25 |
| `alex-komoroske.md` | 23 |
| `martin-fowler/00-preface.md` | 16 |
| `coordination-headwind.md` | 8 |
| `alex-komoroske/01-the-diagnosis.md` | 2 |

Representative quotes from `alex-komoroske.md`:
- Line 30: "Komoroske spent his career inside platforms — Google (Chrome, Salesforce platforms), Stripe (Climate, identity) — with a long arc..."
- Line 38–40: "What makes him portable as a thinker is the vocabulary. He names things — coordination headwind, the slime mold, the gardener, the bramble, the Schelling point, adjacent possible — and the names lodge."
- Line 49: "...pay a tax that grows faster than they expect, sooner than they expect — coordination headwind..."

**Why this is the headline finding:** the Komoroske long-read chapter (`01-the-diagnosis.md`) has only 2 em dashes across 147 lines — and that chapter reads as the cleanest piece on the site. The thinker-page format somehow generated em dashes at scale; the long-read format did not. The pattern is in the thinker-page authoring habit, not in the prose talent.

**Disposition options:**
- (A) Bulk replace `—` with `, ` or `:` or sentence breaks across all thinker pages. Mechanical sweep; ~one hour with light per-instance review.
- (B) Style-policy via a build-time content check (`bun build` fails on em-dash hits) — long-term enforcement, prevents recurrence.
- (C) Both — bulk fix once, then enforce.

**Camila recommends:** (C). The Hard No is unambiguous; site-wide enforcement closes the leak permanently.

---

### Finding 2 — Banned words present, low volume (STRUCTURAL where each lives, LOCAL pattern overall)

The WritingStyle Hard No banned vocabulary list shows up in three places, only:

**`leverage`** — 6 instances. Mixed disposition required:
- `alex-komoroske.md:27` — `thirty_second_take`: *"Schelling-point engineering is the leverage."* — noun use, in Camila's distilled framing. **Rewrite recommended.**
- `alex-komoroske.md:139` — `body_of_work` editorial_note: *"leverage move once you have the diagnosis"* — Camila's framing. **Rewrite recommended.**
- `john-allspaw.md:198` — *"highest-leverage cultural changes"* — adjective compound; legit per-use but pattern flag. **Per-Julie call.**
- `01-the-diagnosis.md:75` — Komoroske paraphrase: *"lowest-leverage work he could have done"* — paraphrasing his own register. **Likely KEEP** (cited speech).
- `01-the-diagnosis.md:123` — *"makes the same point with different leverage"* — Camila's narration. **Rewrite recommended** (could be "with different angle" or similar).
- `01-the-diagnosis.md:133` — *"activities that produce leverage across many outputs at once"* — paraphrasing Grove. **KEEP** (cited).

**`navigate`** (metaphor) — 1 instance:
- `david-woods.md:55` — *"using to navigate the last decade of complex-system failure"* — metaphorical use. **Rewrite recommended** ("to make sense of" / "to work through").

**`to summarize`** — 1 instance, false positive:
- `00-preface.md:31` — *"asked him to summarize his career"* — describing a hypothetical action by another, not the AiWritingPatterns "to summarize" closer-pattern. **KEEP.**

---

### Finding 3 — Wan intensifiers (LOCAL, per-instance review needed)

`AiWritingPatterns.md` Rule 1 flags: very, rather, quite, really, actually, of course.

| Word | Instances | First read |
|---|---:|---|
| `actually` | 16 | Most do real work ("what they *actually* want," "how the work is *actually* done"); per AiWritingPatterns "implies the listener was wrong" risk applies to maybe 3-4 of the 16 |
| `rather` | 15 | Mostly syntactic ("X rather than Y" — legitimate); flag only the bare adverbial uses |
| `really` | 2 | Both verbal-tic per AiWritingPatterns ("how the work is really done" — Allspaw line 60; "how the system really works" — Allspaw line 195). Both cuttable. |
| `very` | 1 | Single instance, likely cuttable |
| `quite` | 0 | Clean |
| `of course` | 0 | Clean |

Per-piece review needed for `actually` to separate load-bearing from tic.

---

### Finding 4 — One "not just" construction (STRUCTURAL, per Hard No)

- `sidney-dekker.md:214` — *"the gap is therefore a security defect, not just a safety defect"* — WritingStyle Hard No: "No 'not just X, but Y' constructions." Single instance; clean rewrite available ("the gap is therefore a security defect, and a safety one").

---

### Finding 5 — Long-read chapter dramatically cleaner than thinker pages (KEEP this signal)

The Komoroske long-read chapter `01-the-diagnosis.md` registers:
- 2 em dashes vs 23–38 across thinker pages
- Substantive prose at ~3,500 words
- Strong opening hook ("There is a single-celled organism..."), clear escalation (slime mold → headwind → Schelling point → heroics smell → worked example → worked non-example → where this lands), explicit critique sidebar with named counter-positions, reflection prompt close, Nelson-marginalia citation throughout

**This is the cleanest piece on the site against the rubric.** The Fowler preface is close but uses 16 em dashes (the bulk-fix sweep gets it). The long-read format brought out something the thinker-page format didn't — likely because the long-read was written as continuous prose (where em-dash habit shows up less) while the thinker-page editorial fields were written as compressed standalone units (where the em-dash habit fires reflexively to compress).

**Why this matters:** when Julie decides what to keep, the long-read register is the model the thinker pages can be brought toward — not a rewrite, but a habit shift in how the editorial fields are drafted.

---

## §2 — Per-piece deep-dive (PENDING — pick up here next session)

The mechanical-scan findings above hit the highest-leverage cleanup. The per-piece deep-dive covers what grep cannot detect — argumentation arc fit, doctrine-register coherence, voice rhythm, structural-craft assessment of the long-reads.

### Per-piece checklist (one block per piece, populated next session)

For each piece, populate:
- **What works (KEEP):** ≥1 specific quote with line reference + why it lands per the rubric
- **Where it lands off (STRUCTURAL / LOCAL / NIT):** quote with line ref + rule cited + suggested disposition
- **Doctrine register identified:** Mode A / Mode B / Mode C with brief justification; coherence with §6 `what_i_take` / `where_i_extend`
- **Audience fit:** does the piece land for the Track B peer-practitioner-primary audience (innovator + early-adopter), or does it drift?

**Pieces to cover:**

1. `alex-komoroske.md` — base case (Mode A subject + Mode C handles); Komoroske is the thinker the site was scoped around
2. `fred-brooks.md` — book-author; highest em-dash count
3. `martin-fowler.md` — mixed thinker_type; Mode A + Mode B handles; cartographer move
4. `ray-dalio.md` — `principles-distiller` thinker_type, first exercise of the type-extension
5. `john-allspaw.md` — mixed; carrier-into-software-ops role; co-authored frames
6. `david-woods.md` — mixed; theoretical foundation; the resilience-cluster anchor
7. `sidney-dekker.md` — book-author; safety-culture lineage; contains the one `not just` violation
8. `coordination-headwind.md` (concept page) — limits/adjacents only; `julie_reading` empty by design
9. `01-the-diagnosis.md` (Komoroske long-read ch01) — long-form-craft graded; the cleanest piece, but doesn't get a pass — applies LongFormCraft.md fully
10. `00-preface.md` (Fowler long-read preface) — preface form; bio + TLDR + handoff to ch01

### Per-piece method note

Each block should be ≤300 words. The mechanical-scan findings above provide most of the per-piece concrete violations already; the deep-dive captures what's left (argumentation arc, doctrine register, voice rhythm) plus ≥1 KEEP quote per piece so the audit doesn't read as flaw-list.

---

## §3 — Cross-cutting pattern synthesis (PENDING — pick up here next session)

Goal: 3–8 named patterns that recur across multiple pieces. Initial candidates from the reading + mechanical scan:

**Candidate patterns (to validate, sharpen, or drop):**

1. **The em-dash habit IS the headline pattern.** Site-wide, format-correlated (thinker pages > long-reads), unambiguous Hard No, mechanical to fix. Already documented above; cross-cutting status confirmed.

2. **The "single most useful X I carry into security" sentence stem.** Recurs across what_i_take fields on Komoroske, Brooks, Fowler, Dalio, Allspaw, Woods, Dekker. Working pattern OR a tic? On first read it seems to be working pattern (signals Julie's domain consistently) but worth checking whether the rhythm becomes predictable across 7 hits.

3. **The "X built the theory for Y; I push it into Z" structure on `where_i_extend`.** Same recurrence across multiple thinker pages. Working pattern (signals Julie's extension move) or formula leaking?

4. **The "limits" lane: each piece has the same kind of limit categories (adversarial-actors silence, vocabulary-becoming-jargon, scope assumes-shared-goals).** Real-pattern-in-Julie's-reading OR over-projection by Camila during authoring? Worth a structural check — is the audit catching authentic recurring critique-territory, or templated language across pieces?

5. **Adjacent-thinker `edge_label` density and voice.** Edge labels are short but do real work. Audit each one for: voice-fit, doctrine-attribution accuracy, AI-tell scan.

6. **Long-read citation discipline (Nelson marginalia) — `01-the-diagnosis.md` uses it heavily and well; `00-preface.md` uses it lightly. Inconsistency to flag.** Per LongFormCraft §6, Nelson marginalia is the doctrine-essay default; both long-reads should be at the same density.

7. **Voice register: Camila's editorial framing on `thirty_second_take` vs. Julie's voice on `what_i_take` — does the boundary read clearly across all 7 thinker pages, or does it blur?** Critical check — the site's whole IP-firewall argument depends on the lanes staying visually + linguistically distinct.

8. **Hed-phrase tells in `tagline`** ("The X who named Y", "The translator who turned Y into Z"). Strong formula. Working pattern or AI tell? Worth audit-naming as deliberate-house-style-or-not.

The per-piece deep-dive feeds this section. Final patterns get severity tags + dispositions.

---

## §4 — Recommended dispositions (PENDING — populates after §2 + §3)

For each pattern named in §3, propose: **FIX** (act on it before next concept page ships), **DEFER** (worth doing, not urgent), or **ACCEPT** (KEEP — working pattern that should be made explicit, not removed).

Julie reviews and decides which dispositions land. Camila does not apply edits without explicit per-piece approval.

---

## §5 — Camila's editorial summary (PENDING — one paragraph, populates at audit close)

To populate at the end. One paragraph in Camila-voice, not a bullet list — the honest reaction to what the site reads like against the rubric, including what's working and what's leaking.

---

## Session-handoff state (PICK UP HERE)

**What's done:**
- All 7 guideline files at `~/.claude/PAI/USER/` read in full and internalized
- All 10 in-scope prose pieces read in full
- Mechanical scan complete: em dashes (237 instances), banned vocabulary (8 hits split across 3 words), wan intensifiers counted, hard-no constructions counted
- §1 site-wide findings populated with quote-and-line evidence
- §2 / §3 / §4 / §5 scaffolded with the structure each needs

**What's pending:**
- §2 per-piece deep-dive (10 blocks, ≤300 words each)
- §3 cross-cutting pattern synthesis (validate the 8 candidates, drop / sharpen / add)
- §4 disposition recommendations Julie approves
- §5 closing editorial paragraph

**Next-session opening move:** Read this file top-to-bottom, confirm scope still locked, then work through the 10 per-piece blocks in roster order starting with Komoroske. The mechanical-scan findings in §1 are already populated for each piece — deep-dive only adds what grep cannot detect.

**Reference state at session-open:**
- ISA: `~/Camila/thinker-distillation/ISA.md` — iteration `prose-qa-audit-2026-05-25`, `phase: execute`, intake ISCs (71-85) complete, per-piece ISCs (86-147) pending, synthesis + output + advisor ISCs (148-175) pending
- Working tree: clean after the save-point commit
- Live site: `https://thinkerdistillery.netlify.app/` (concept page + 7 thinker pages + 2 long-reads), no changes to live content yet
