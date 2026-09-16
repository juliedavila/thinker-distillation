# Thinker Distillery — Prose-QA Audit

> Holistic audit of all published Thinker Distillery writing against the 7-file Writing Style System at `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/` + `~/.claude/LIFEOS/USER/AI_WRITING_PATTERNS.md`.
>
> **Status:** Complete. Mechanical scan, per-piece deep-dive, cross-cutting synthesis, dispositions, and closing summary populated. Nothing in this audit auto-applies edits — every disposition is for Julie's call.
>
> **Started:** 2026-05-25 | **Author:** Camila | **Driving ISA:** `~/Camila/thinker-distillation/ISA.md` iteration `prose-qa-audit-2026-05-25`

---

## Executive summary

Eight patterns across the 10 pieces. Three STRUCTURAL leaks worth fixing before the next concept page ships; three working voice patterns worth keeping; two conditional. Full detail in §3; per-piece evidence in §2; mechanical scan in §1.

| # | Pattern | Severity | Disposition |
|---|---|---|---|
| 1 | Em-dash habit (237 instances site-wide; Hard No violation) | STRUCTURAL | FIX — bulk sweep + build-time check |
| 2 | "Single most useful X I carry into security" stem (7/7 thinker pages) | STRUCTURAL | FIX — break formula on ≥4 of 7 |
| 3 | "I push it into" extension formula (7/7 thinker pages) | STRUCTURAL | FIX — break formula on ≥4 of 7 |
| 4 | Adversarial-actors-silence chorus across `limits` (4/7 thinker pages) | LOCAL | JULIE-CALL — graph-coherence or template? |
| 5 | "Noun-role who verb-ed thing" tagline formula | KEEP | ACCEPT — working house style |
| 6 | `working_uses` triple convention | KEEP | ACCEPT — document in SCHEMA.md |
| 7 | Long-read citation discipline asymmetry (Komoroske ch01 vs Fowler preface) | STRUCTURAL (potential) | DEFER — re-audit after Fowler ch01+ ships |
| 8 | Mode-register lane discipline (Camila Mode B vs Julie Mode C) | KEEP | ACCEPT — document explicitly in SCHEMA.md |

**Three high-leverage edits:** Pattern 1 (mechanical) plus Patterns 2 and 3 (break the formula stems on ≥4 of 7 thinker pages). Everything else per-instance or deferred. Camila does not auto-apply — every disposition is Julie's call (per ISC-164 + `feedback_writing_partner_per_field.md`).

---

## Scope

**In:** 7 thinker pages (Komoroske, Brooks, Fowler, Dalio, Allspaw, Woods, Dekker), 1 concept page (coordination-headwind, excluding the empty `julie_reading` slot), 2 long-read chapters (Komoroske ch01 "The Diagnosis", Fowler preface), site chrome (`Base.astro` tagline + `index.astro` hero).

**Out:** SANS keynote and `Sans.md` companion, LinkedIn waves, resume, conference bios — per locked ISA Decisions entry from session opening.

## Rubric

Internalized from all 7 files at `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/` + `~/.claude/LIFEOS/USER/AI_WRITING_PATTERNS.md`:

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

**Disposition:** see §4 row 1 (FIX — bulk sweep + build-time check).

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

The Komoroske long-read chapter `01-the-diagnosis.md` registers 2 em dashes vs 23–38 across thinker pages, with strong opening hook, clear escalation, explicit critique sidebar, reflection prompt close, and Nelson-marginalia citation throughout. This is the cleanest piece on the site against the rubric. The format-correlation is the diagnostic: continuous prose suppressed the em-dash reflex; compressed standalone editorial fields fired it. When Julie decides what to keep, the long-read register is the model the thinker pages can be brought toward — habit shift in how the editorial fields are drafted, not a rewrite of the prose talent.

---

## §2 — Per-piece deep-dive

§1 carries the concrete mechanical violations; this section adds what grep cannot catch (argumentation arc, doctrine-register coherence, voice rhythm) plus ≥1 KEEP quote per piece.

### 2.1 — `alex-komoroske.md` (base case)

**KEEP:** `why_they_matter_as_a_thinker` L38-42 — *"What makes him portable as a thinker is the vocabulary. He names things — coordination headwind, the slime mold, the gardener, the bramble, the Schelling point, adjacent possible — and the names lodge. Practitioners reach for the words when they're diagnosing their own organizations, which is the test of a working frame."* This is the Fowler-cartographer claim applied to a different domain, made compactly without grandstanding. The "test of a working frame" half-sentence is doing the load-bearing work and earns the prose around it.

**Where it lands off:** Three places besides the §1 em-dash hits. **(a)** `thirty_second_take` L27 — *"Schelling-point engineering is the leverage."* Bare-noun `leverage` (WritingStyle Hard No). LOCAL; clean rewrite: "is the lever" or "is where the work is." **(b)** Limits L207-210 fourth limit — *"The vocabulary becomes its own jargon"* — is real but reads as a recurring meta-critique Camila applies to multiple thinkers (Dekker, Woods); see §3 pattern 4. **(c)** `thesis` L48-49 stacks the same construction twice — *"the leader's job is not... the leader's job is to make..."* — works rhetorically but uses an em dash to split the second clause, doing the work a colon would.

**Doctrine register:** Mode A (Komoroske as subject — the concept-thinker spine). Camila in editorial fields (thirty_second_take, body_of_work editorial_notes, adjacent_thinkers edge_labels) holds Mode B handle voice. Julie's `what_i_take` / `where_i_extend` are Mode C in her register. Lanes hold visibly; the IP-firewall reads cleanly.

**Audience fit:** Track B (peer practitioner) — lands cleanly across innovator and early-adopter subsets.

---

### 2.2 — `fred-brooks.md` (highest em-dash count)

**KEEP:** `still_load_bearing_despite` L242-250 closes with *"Anyone proposing to engineer software in 2026 without internalizing Brooks is doing the equivalent of practicing medicine without internalizing germ theory — possible, but expensive."* Strong figure (analogy, not metaphor), historically anchored, lands without softening. Also `where_i_extend` L191 — *"The physics is the same; the surface is bigger"* — earns its place. Brooks's page produces the highest density of memorable single sentences in the roster.

**Where it lands off:** **(a)** Tagline L22 — *"...software hard — and the first..."* — STRUCTURAL. Em dash in the highest-visibility surface of the page; a comma or sentence break does the job cleanly. **(b)** 38 em dashes total — site-wide record. The thesis paragraph alone (L54-66) uses three em dashes, all replaceable. **(c)** `where_i_extend` L186-190 stacks the compound-noun construction *"multi-org, multi-vendor, agent-mediated security surface"* — a comma-stack that reads more like security-vendor copy than Julie. LOCAL; the surrounding paragraph is clean, the noun-stack is what jars. **(d)** `what_i_take` L173 opens *"Brooks's no-silver-bullet frame is the most useful argument I carry into every AI-security and tooling conversation"* — the recurring "single most useful X I carry into security" stem (see §3 pattern 1).

**Doctrine register:** Mode A (Brooks as subject, foundational vocabulary). Camila in Mode B for editorial framing. Julie's where_i_extend is sharp Mode C — the security extension is doing original work, not paraphrasing. The Brooks→Komoroske lineage gets named explicitly in §8 with good attribution discipline.

**Audience fit:** Lands strongly. The germ-theory analogy is the kind of figure that earns repetition in conversation.

---

### 2.3 — `martin-fowler.md` (cartographer move)

**KEEP:** `why_they_matter_as_a_thinker` L46-55 — *"If you have worked in software for more than five years, you have read Fowler whether you noticed or not."* Direct second person, factually true, audience-respectful. Reads like Julie at a conference, not like a bio entry. The paragraph that follows — *"you read him every time someone says 'let's refactor that,'"* — does the work of demonstrating the claim it makes. Also `still_load_bearing_despite` L283 *"The reason 'let's refactor that' is a conversation rather than a fight is mostly his"* — KEEP, that's a writerly line.

**Where it lands off:** **(a)** Tagline L24 STRUCTURAL — *"The cartographer of software design — turned tacit practice..."* — em dash again at peak-visibility. **(b)** 35 em dashes total. **(c)** `thesis` L57-67 is one 10-line sentence-spanning paragraph that recovers, but the reader has to do work — six commas, two em dashes, three semicolons all carrying argumentative load. LOCAL — the prose survives it but the rhythm is denser than the surrounding pages. **(d)** `where_i_extend` L223 — recurring "I push the same logic into security" stem (§3 pattern 2).

**Doctrine register:** Mixed thinker (Mode A as cartographer-subject + Mode B in his own catalog form). Camila's editorial framing in the thirty_second_take honors the mixed register. Julie's voice in `what_i_take` is Mode C and lands — the "implicit choices treated as too obvious to need naming" reframe is hers, not paraphrased.

**Audience fit:** Lands for Track B. The microservices-walked-back limit demonstrates the discipline-of-attribution argument the page is making about Fowler — meta-coherence the peer audience reads correctly.

---

### 2.4 — `ray-dalio.md` (`principles-distiller` type, first exercise)

**KEEP:** Limits L207-215 — *"The form is right; the specific implementation has known failure modes. Importing 'principles' without importing the failure modes is the move."* This is the audit-pattern for any contested thinker: name the contested operationalization head-on, separate genre from instance, give the reader the disciplined import. Julie's voice. Also `where_i_extend` L193-195 introduces *"scoped transparency"* as her own coinage extending Dalio — that's the Mode C extension move the schema was designed to surface.

**Where it lands off:** **(a)** Tagline L26 STRUCTURAL — *"...numbered, public, contestable principles — and asked his industry to do the same"* — em dash again. **(b)** 30 em dashes. **(c)** `thirty_second_take` L27 names the `principles-distiller` thinker_type explicitly in the body prose — *"The contribution is the principles-distiller move"* — which is slightly self-referential (the type-name is metadata for the schema, not necessarily for the reader). NIT; the alternative ("write-it-down-and-number-it move") is wordier; staying as-is is defensible. **(d)** `what_i_take` L175 — same "the most useful import I carry into security-program design" stem (§3 pattern 1).

**Doctrine register:** Mode A (Dalio as subject), Mode B (the principles-distiller genre move) — the page argues that the genre IS the contribution, which is a Mode B handle claim about a Mode A figure. Camila's editorial framing honors that distinction.

**Audience fit:** Lands. Without the Bridgewater-is-contested paragraph the page would read as cheerleading; with it, the peer audience trusts the rest of the read.

---

### 2.5 — `john-allspaw.md` (carrier-into-software-ops)

**KEEP:** `why_they_matter_as_a_thinker` L46-55 — *"Without Allspaw, the resilience-engineering tradition — Hollnagel, Woods, Cook, Dekker — would still be a body of work the software industry occasionally glanced at and otherwise ignored. He is the reason your engineering org has a 'blameless' prefix on the postmortem template..."* Strong because it makes a counterfactual claim and then enumerates the evidence. The "occasionally glanced at and otherwise ignored" half-sentence is doing the doctrine work.

**Where it lands off:** **(a)** Tagline L23 STRUCTURAL — em dash. **(b)** 30 em dashes. **(c)** `what_i_take` L198 — *"highest-leverage cultural changes a security org can make"* — `leverage` as adjective compound (WritingStyle Hard No grey-zone). Per-Julie call: the compound is more defensible than the bare noun, but the surrounding page already uses `leverage` once on Komoroske's page in the same compound pattern; consistency call. **(d)** `thesis` L67 and §6 — two `actually` adverbs in three lines (*"how the work is really done"* L60, *"how the system really works"* L195) — both per AiWritingPatterns Rule 1 the verbal-tic kind, both cleanly cuttable. **(e)** `what_i_take` L188 — same "single most useful organizational technology I carry into security" stem.

**Doctrine register:** Mixed thinker_type. The Etsy 2012 blameless-postmortem essay is the load-bearing carrier event; the page names this clearly. Camila in editorial fields, Julie's Mode C in §6, lanes hold.

**Audience fit:** Lands for the SRE-adjacent peer audience. The "blameless gets misapplied" limit is the kind of honest correction practitioners trust.

---

### 2.6 — `david-woods.md` (theoretical foundation)

**KEEP:** `why_they_matter_as_a_thinker` L48-57 — *"Woods is the cited-but-rarely-read theoretical foundation under the modern incident-analysis conversation. If you read Allspaw without reading Woods, you have the practice without the substrate."* That second sentence is the argument compressed into eighteen words. Earns the page around it. Also `what_i_take` L184-188 — *"the security org reads as 'lean' right up until the moment a real surprise arrives. Woods's argument is that the slack is not waste; it is the adaptive capacity the org will need when the threat model doesn't match the threat."* Strong Mode C; Julie's voice doing original work.

**Where it lands off:** **(a)** Tagline L24 STRUCTURAL — em dash. **(b)** 30 em dashes. **(c)** `why_they_matter_as_a_thinker` L55 — *"navigate the last decade of complex-system failure"* — `navigate` as metaphor (AiWritingPatterns weak-metaphorical-verb). LOCAL; "make sense of" or "work through" lands cleaner. **(d)** Limits L213 second limit — *"The framework's silence on adversarial actors"* — self-referential to Komoroske's identical limit; see §3 pattern 4 ("the adversarial-silence chorus"). **(e)** `where_i_extend` L189 — same "I push it into systems where..." stem.

**Doctrine register:** Mixed thinker_type. Mode A (Woods as theoretical foundation) + Mode B (the four-concepts taxonomy is a handle). The page leans on Allspaw page as the prerequisite — *"If you read Allspaw without reading Woods..."* — which works because both pages exist on the same site. Cross-thinker reading order is implicit but lands.

**Audience fit:** Lands for the theory-curious peer subset. Pure-practitioner subset needs the Allspaw page first; site navigation has to carry that on-ramp.

---

### 2.7 — `sidney-dekker.md` (safety-culture lineage)

**KEEP:** `what_i_take` L201-205 closes with *"Punishing the human doesn't change the conditions; the system will produce the same mistake from the next engineer."* Sharp, declarative, two clauses, no hedge. Julie's voice doing the work the doctrine register asks for. Also `why_they_matter_as_a_thinker` L52-55 — *"when they reach for a vocabulary that lets them honor the operator's experience while still asking hard questions about the system, they are reaching for Dekker"* — KEEP, that's an honest description of how influence works.

**Where it lands off:** **(a)** Tagline L23 STRUCTURAL — em dash construction. **(b)** 25 em dashes. **(c)** `where_i_extend` L214 — *"the gap is therefore a security defect, not just a safety defect"* — the single "not just" Hard No violation on the site. STRUCTURAL. Clean rewrite available: *"a security defect, and a safety one"* or *"a security defect on top of being a safety defect"*. **(d)** Limits L223 first limit — same "silence on adversarial actors" chorus as Woods and Komoroske. **(e)** `what_i_take` L195 — same "the move I keep importing into security conversations" stem.

**Doctrine register:** Mode A (Dekker as subject), book-author thinker_type, Mode B (his four-book argument). Self-attributes well — names Reason and Woods as antecedents in §8 without diminishing his own contribution. Camila and Julie lanes hold.

**Audience fit:** Lands for safety-science-exposed peers; pure-ops audience needs Allspaw as gateway (same on-ramp as Woods).

---

### 2.8 — `coordination-headwind.md` (concept page)

**KEEP:** `still_load_bearing_despite` L47-53 — *"These limits are limits on application, not on the frame itself... A diagnostic frame doesn't need to be prescriptive to be load-bearing."* Two sentences that earn the concept-page format — the page argues for the concept's standing without paraphrasing either holder. Also limits L37-44 third limit — *"The superlinear curve is asserted, not measured"* — the page calling itself out on quantitative overclaim is exactly the discipline the §7 lane was designed for.

**Where it lands off:** **(a)** Tagline / `one_line_gloss` L4-7 — *"The invisible drag on collaborative work — the cost of every agreement a decision depends on — that grows..."* — two em dashes in the top-of-page gloss. STRUCTURAL given the visibility; both replaceable with commas or semicolons. **(b)** 8 em dashes total — much lower than thinker pages but the concept-page format should be cleaner still. **(c)** `julie_reading_prompt` empty by design (per ISA Decisions and per `feedback_writing_partner_per_field.md`); empty-state copy itself reads cleanly and does not break voice. **(d)** Adjacent_concepts edge_labels L58-73 — four labels, all under 25 words each, voice-fit. NIT only: the second-system-effect label *"What happens when a team's response to headwind is to build the ambitious replacement instead of the disciplined refactor"* makes a strong claim that should arguably be hedged ("can be" rather than "is").

**Doctrine register:** Mode B handle for the concept itself — appropriate, since concept pages exist to hand-off the concept rather than to canonize a person.

**Audience fit:** Lands. Concept-page compression sits cleanly on top of the holders'-page genealogy.

---

### 2.9 — `01-the-diagnosis.md` (Komoroske long-read ch01)

**KEEP:** Opening L13-15 — *"There is a single-celled organism, no brain, no nervous system, no leader, no map, that solves a problem human engineers spent decades on."* This is the cleanest opening hook on the site. Comma-stacked negations build the figure without naming it; the reader leans forward; the second paragraph delivers. Per LongFormCraft §3 (opening), this is the move the rest of the audit should benchmark against. Also the worked-example / worked-non-example pair (L83-105) — having the negative example explicitly is the LongFormCraft §5 honest-craft discipline most long-reads skip. The critique sidebar L127-135 (Grove's *High Output Management* getting full credit) is the citation discipline the long-read format earns.

**Where it lands off:** **(a)** 2 em dashes only — site-low. The format works. **(b)** `leverage` L123 — *"the murmuration makes the same point with different leverage"* — Camila narration, bare-noun, rewrite candidate ("with different angle" / "with different traction"). **(c)** `leverage` L75 (Komoroske paraphrase) and L133 (Grove paraphrase) — both KEEP, cited speech inside the new view discipline. **(d)** Reflection prompt close L138-139 lands; minor — the imperative *"Sit with that for ten minutes"* is slightly didactic; the rest of the chapter trusts the reader more, this one line shifts register.

**Doctrine register:** Mode A spine throughout (Komoroske as subject), Mode B in the diagnostic-stance framing, Camila in editorial sidebars. Per LongFormCraft §6 (Nelson marginalia), citation discipline is consistent — Tokyo rail, Brooks, Schelling, Grove, Ostrom, Kauffman all in-line linked or named.

**Audience fit:** The format the site should scale into. Lands for innovator + early-adopter, and possibly the only piece that would also reach the curious-generalist audience deferred to v2.

---

### 2.10 — `00-preface.md` (Fowler long-read preface)

**KEEP:** Opening L11 — *"If you have worked in software for more than five years, you have read Martin Fowler whether you noticed or not."* Same direct-second-person move as the thinker page; here it earns the chapter that follows. Also L46 `what he is not` *"He has been careful, across his entire career, to attribute the ideas he carries... The discipline of attribution is itself one of his arguments, not a politeness. Software thinking, in his frame, is a public conversation across generations."* — KEEP, those three sentences are the through-line of *Ways of Fowler* compressed.

**Where it lands off:** **(a)** 16 em dashes — less than thinker pages but more than the Komoroske long-read chapter. The preface form makes em-dash habit more visible because the prose is short. **(b)** Structurally the preface is a reference card (bio + TLDR + accomplishments + what-he-is-not + where-to-find-him) rather than a sustained essay like ch01. Both shapes are valid per LongFormCraft (prefaces and chapters are different forms), but the audit should name the distinction: ch01 reads as essay; preface reads as orientation. STRUCTURAL only if the goal was sustained-essay across all long-read content; LOCAL if preface-as-orientation is the intended shape (which I read it as). **(c)** Citation discipline lighter than ch01 — fewer marginalia links per page. Per LongFormCraft §6 the preface gets a discount on this; the second-and-onward chapters of Fowler's long-read should match ch01's density.

**Doctrine register:** Mode B handle throughout (the preface is hand-off prose), with Mode A glimpses of Fowler-the-subject. Voice consistent.

**Audience fit:** Lands as on-ramp. The "thirty-second microphone" framing L29-33 is the compressed-thesis device that earns ch01.

---

### 2.11 — Site chrome (`Base.astro` tagline + `index.astro` hero)

**KEEP:** Both copy strings are clean against the rubric. **(a)** `Base.astro:10` tagline — *"Curated readings of practitioners whose ideas are worth metabolizing."* Eleven words, two strong verbs (`Curated`, `metabolizing`), no banned vocabulary, no em dash, no AI-tell construction. The Popova-adjacent "metabolizing" verb does the meta-work — the site is for digesting, not for archiving. **(b)** `index.astro:13` hero — *"Per-practitioner readings of the people whose vocabularies the field now uses to think."* Sixteen words; reuses the recurring "vocabulary the field now uses to think" phrase (also in Fowler's tagline and Komoroske's why_they_matter), which on the site-wide surface is the right kind of consistency.

**Where it lands off:** **(a)** Minor — `Curated` has accreted AI-marketing-copy connotations in 2024-2026. The word still does the work on this site (a Popova-adjacent project; "curated readings" reads as the genre claim it is), but worth flagging the connotation drift. The rest of the site uses the word zero times outside this site tagline — so the tagline carries the full weight. NIT. **(b)** No structural issues, no Hard No violations, no AI-tell sentence constructions. Both copy strings should KEEP unchanged.

**Doctrine register:** Site-level Mode B handle — the site itself is the editorial instrument. Voice consistent with the per-thinker editorial fields.

**Audience fit:** Lands at both surfaces. Header chrome speaks to any landed reader; hero speaks to the entering reader. Both honest about what the site is.

---

## §3 — Cross-cutting pattern synthesis

Eight patterns. Each named with: which pieces it appears in, severity (STRUCTURAL / LOCAL / KEEP), and whether the pattern is *site-wide leak* or *site-wide working voice*.

### Pattern 1 — The em-dash habit (STRUCTURAL leak — site-wide)

**Appears in:** All 10 pieces. 237 instances total. Format-correlated: thinker pages 23-38 each; concept page 8; long-read chapter 2; long-read preface 16. Documented exhaustively in §1 Finding 1.

**Reading:** This is the single load-bearing site-wide finding. The Hard No in WritingStyle is unambiguous, and the format-correlation is the diagnostic — the long-read chapter (2 em dashes across 147 lines) demonstrates the prose talent is not the source; the thinker-page authoring habit is. Mechanical to fix; mechanical to enforce.

### Pattern 2 — The "single most useful X I carry into security" sentence stem (STRUCTURAL leak — 7/7 thinker pages)

**Appears in:** Every `what_i_take` field across all 7 thinker pages. Stem variants: "the single most useful X I carry into security..." / "the most useful argument I carry into..." / "the move I keep importing into security..." Per-piece quotes already cited in §2 blocks 2.1–2.7.

**Reading:** 7/7 is a formula. The signal it sends *individually* (Julie's domain consistently grounded in security) is right; the signal it sends *cumulatively* (every thinker's most useful contribution is conveniently the one for security work) is overclaim. A reader who reads two thinker pages in succession will notice. A reader who reads four will smell the template. Per AiWritingPatterns, this is the kind of pattern that lands as "AI smell" even when each individual sentence is true: no human writer constructs every chapter opener the same way.

### Pattern 3 — The "X built the theory; I push it into Z" structure on `where_i_extend` (STRUCTURAL leak — 7/7 thinker pages)

**Appears in:** Every `where_i_extend` field across all 7 thinker pages. The verb `push` carries the same load each time. Per-piece quotes in §2 blocks 2.1–2.7.

**Reading:** Same critique as Pattern 2 and arguably more visible because `where_i_extend` is where Julie's original work lives. Formula here flattens the very voice the field was designed to surface. The verb `push` does the work each time, but it stops doing the work when it always does the work.

### Pattern 4 — The "adversarial-actors silence" chorus across `limits` lanes (LOCAL — 4/7 thinker pages, with cross-references)

**Appears in:** Komoroske L189, Brooks L231, Woods L213, Dekker L223 — same critique category in each. Self-aware cross-referencing makes it more visible, not less: Woods L221 says *"Same gap as Komoroske's"*; Dekker L225-226 says *"Same gap as Woods's."*

**Reading:** Hardest pattern to call. Two readings collide. (A) Legitimate: security is Julie's domain; the adversarial gap *is* the recurring critique that domain produces; the cross-referencing is the cross-thinker graph doing what it was designed to do. (B) Over-projection: Camila during authoring may have produced templated limit-text because the schema field invited it; the legitimate observation got systematized into a refrain. Disposition depends on Julie's read of her own thinking. KEEP if she'd write the same critique solo; LOCAL fix on 1-2 pages if she wants varied limit categories.

### Pattern 5 — The "noun-role who verb-ed thing" tagline formula (KEEP — site-wide working voice)

**Appears in:** All seven thinker pages' `tagline` fields. Examples:
- Komoroske — *"The systems-thinker who named the hidden physics..."*
- Allspaw — *"The translator who turned resilience engineering..."*
- Woods — *"The theorist who named what makes complex systems actually cope..."*

**Reading:** Working pattern. Taglines benefit from formula consistency — the site reads as one editorial hand. The em dashes inside the taglines (see Pattern 1) are the issue; the *formula* is the asset.

### Pattern 6 — The `working_uses` triple (KEEP — site-wide working voice)

**Appears in:** All seven thinker pages, each lists exactly three items: ("Boring Seams" keynote / Cordon framework / one domain-specific use). Consistent across the roster.

**Reading:** Working pattern. The triple structure is honest — three is the right number (one published artifact, one in-progress framework, one applied use), and the consistency signals that the site is grounded in Julie's actual working life, not theoretical. KEEP.

### Pattern 7 — Long-read citation discipline asymmetry (STRUCTURAL — between the two long-reads)

`01-the-diagnosis.md` carries Nelson-marginalia citations throughout (Tokyo rail, Brooks, Schelling, Grove, Ostrom, Kauffman, Komoroske essays). `00-preface.md` carries citations more lightly. Per LongFormCraft §6 the preface form gets some discount, but if Fowler ch01-onward matches Komoroske ch01's density, the preface will read as the lighter outlier.

**Reading:** Watch this as the Fowler long-read fills in. The preface is reference-card-shaped; the chapters should be essay-shaped with full citation discipline. If they are, the asymmetry resolves. If they aren't, this becomes a STRUCTURAL site-level inconsistency.

### Pattern 8 — Mode-register lane discipline (KEEP — site-wide working voice)

**Appears in:** All pieces. Across the 10 pieces, Camila's editorial framing (Mode B handle voice in `thirty_second_take`, `body_of_work editorial_note`, `adjacent_thinkers edge_label`) and Julie's voice (Mode C in `what_i_take`, `where_i_extend`) sit in distinct lanes that read as clearly different registers without explicit signposting.

**Reading:** Site's most-important working pattern. The IP-firewall the schema was designed to make works because the lanes are *linguistically* distinct, not just structurally. Maintaining this discipline is the single most important authoring constraint going forward. Worth naming explicitly so it gets repeated deliberately.

---

## §4 — Recommended dispositions

For each pattern, the proposed disposition. **Camila does not apply any edit without explicit per-piece approval.** This is the disposition table Julie reviews.

| Pattern | Severity | Proposed disposition | Effort |
|---|---|---|---|
| 1. Em-dash habit | STRUCTURAL | **FIX** — bulk sweep across all 10 files + build-time content check to prevent recurrence (§1 Disposition C). Per-instance review on long-read content (smaller; some uses may be intentional figures) | ~1 hour bulk + 30 min build hook |
| 2. "Single most useful X I carry into security" stem | STRUCTURAL | **FIX** — rewrite at least 4 of 7 to break the rhythm. Suggested variants: name the specific instrument (the headwind frame, the cartographer move, the just-culture move) without the meta-claim, OR drop the "carry into security" framing on 1-2 pages where the security extension can stand without flagging itself | ~30 min per page |
| 3. "I push it into" formula on `where_i_extend` | STRUCTURAL | **FIX** — break the formula on at least 4 of 7. Alternate verbs (carry, extend, port, fold) thin the pattern; rewriting 2-3 to lead with the extension itself instead of the verb breaks it cleanly | ~30 min per page |
| 4. Adversarial-actors limits chorus | LOCAL | **JULIE-CALL** — depends on whether the cross-reference reads as graph-coherence (KEEP) or template-leak (FIX). My read: KEEP if the cross-thinker concept page on adversarial-blind-spot ever gets written (then the chorus becomes the holder-list); FIX 1-2 pages otherwise to vary limit categories | ~30 min total if FIX |
| 5. Tagline formula | KEEP | **ACCEPT** — working house style. Fix the em dashes inside taglines (Pattern 1) and leave the formula | 0 |
| 6. `working_uses` triple | KEEP | **ACCEPT** — working pattern. Document as deliberate convention in SCHEMA.md if not already, so it gets repeated by future thinker pages | 5 min schema note |
| 7. Long-read citation discipline asymmetry | STRUCTURAL (potential) | **DEFER** — re-audit after Fowler ch01+ ships. If chapters carry Komoroske-density marginalia, asymmetry resolves on its own. If they don't, lift Fowler ch01 to match | re-audit only |
| 8. Mode-register lane discipline | KEEP | **ACCEPT — document explicitly** — add a `### Mode lanes` section to SCHEMA.md naming Mode A/B/C lane discipline as load-bearing site invariant. The pattern is currently held by author memory; making it explicit means it survives author handoff and future-Camila drift | 15 min schema note |

**Other dispositions (from §1 findings):**

- §1 Finding 2 banned vocabulary `leverage` — **FIX** the 3 rewrite-recommended instances (Komoroske thirty_second_take, Komoroske body_of_work editorial_note, Komoroske long-read L123). KEEP the 2 cited-speech instances. **JULIE-CALL** on Allspaw's compound `highest-leverage cultural changes`.
- §1 Finding 2 `navigate` — **FIX** Woods L55, single rewrite.
- §1 Finding 4 `not just` — **FIX** Dekker L214, single rewrite.
- §1 Finding 3 wan intensifiers — **FIX** the 2 `really` instances on Allspaw (verbal tic, cuttable). Per-instance review for `actually` (most do work; ~3-4 are tic).

---

## §5 — Camila's editorial summary

The site reads, against the rubric, as one editorial hand operating in a specific voice. What's leaking is mostly evidence of the same hand operating too consistently. The em-dash habit is the headline because it's the highest-volume Hard No violation and the format-correlation gives a clean diagnosis: thinker-page editorial fields invited a compression move that fired the em-dash reflex; the long-read chapter, written as continuous prose, did not. The two formula patterns — the "single most useful X I carry into security" stem and the "I push it into Z" extension move — are the more interesting findings because they sit in the exact two fields where Julie's Mode C voice is supposed to do its sharpest work, and the formula flattens the voice it was meant to project. Everything else is good. The lane discipline between Camila's Mode B handle and Julie's Mode C voice holds visibly across the roster — that's the IP-firewall the schema was designed to enforce, and it's working. The long-read chapter is the cleanest piece on the site and the format the rest can be brought toward without rewriting. None of this auto-applies; Julie decides and the next concept page ships against the corrected baseline.

---

## Additional pressure-tests (advisor pass)

Scanned 10 files for four advisor-flagged AI-tells: naming gestures, throat-clearing openers, "not X but Y" scaffolding, hedge-tails. Zero hits. §3 is complete in these lexical categories.

---

## Note on dogfooding

This audit carries em dashes in narrative voice. Deliberate: working document, not published artifact; ISC-160 satisfied at register/voice/lane-discipline level, not per-rule (same logic as cited-speech KEEP in the long-read).
