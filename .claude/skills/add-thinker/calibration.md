# Calibration log

What the Councils have caught so far, turned into checks. Read this before drafting. Append to it after every run (stage 8 of `SKILL.md`). A pattern caught twice becomes a checklist item.

## Pre-draft checklist

Run each item against the draft before running the gates.

**Attribution**
- [ ] No frame is marked `original` without an antecedent search. Earlier uses found so far: Patrick Kua on the tech lead role, Evan Bottcher on the platform definition, Dan McKinley on boring technology.
- [ ] Every co-author of a coined term is named in `co_originators` and wherever the term appears in prose.
- [ ] A counterposition that never names the thinker is a `parallel` edge, not `critiques`.
- [ ] No compressed phrasing in the tagline, take, thesis or reading presents the site's interpretation as the thinker's claim or intent ("as Forsgren built them" implied a design intent no source supports).

**Grounding**
- [ ] Every citation supports its own sentence. A Lens citation belongs on the sentence that makes the Lens argument, not the setup sentence before it (Komoroske, Woods, Fournier).
- [ ] Inference lives in `extension`. A `reading` sentence that draws a conclusion the sources do not state moves to `extension` or goes.
- [ ] Limits stay limits. Do not recast a limit as evidence the method works (Fowler's microservices retraction, Dalio's Bridgewater gap).
- [ ] Rewrites get re-audited. A revision that adds a new claim can add a new unsupported one ("compromised account" on Komoroske).
- [ ] Chronology holds. A book cannot draw on a job the author took later (Fournier's 2017 book and 2022 role).
- [ ] Superlatives and "usually" claims need a source ("the largest attack in decades," "usually where authority changes").

**Argument**
- [ ] The extension does not walk into a failure mode the page's own limits name (proposing a new metric right after citing Goodhart, Forsgren).
- [ ] The prescription names its preconditions (leadership must change the scorecard, Allspaw) and the risks it creates (ungoverned shadow tooling, Fournier; rubber-stamp renewals, Dekker).
- [ ] Adversaries, when they appear, change the mechanism. A closing sentence that just adds "and attackers exploit the gap" is a bolt-on (Woods and Dekker, round 1).
- [ ] Contested claims stay contested. Do not state as settled what the page's limits call contested (essential versus accidental complexity, Brooks).

**Sameness**
- [ ] The opener differs from other pages ("X's thesis is that" appeared three times in one batch).
- [ ] The closer differs from other pages ("becomes the default" echoed Komoroske on Fournier).
- [ ] The Lens position and the angle are not already used by a neighbor. Current uses: Komoroske P:2 and P:3 (garden versus enforce); Fowler P:7 (bounded context, confused deputy); Brooks P:4 (AI and accidental complexity); Allspaw P:5 (dark debt); Woods P:2 (slack as reserve); Dekker P:6 (exception drift); Dalio P:1 (principles on decisions); Forsgren P:4 and P:2 (delivery metrics); Fournier P:2 (who pays for migrations).
- [ ] A term repeated many times on one page reads as machine prose even when it is the right word (Dalio's five uses of "operationalization").

**Research**
- [ ] Every fact in the candidate issue is re-verified. The Fournier case had three errors.
- [ ] Anything the draft adds beyond `sources.md` (URLs, essay dates, what an essay argues) gets verified and appended. The first Fournier draft embellished what "The Manager as Debugger" argues.

## Run log

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-16 | Forsgren (pilot) | earlier | 2 | R1: 3 accept-with-edits, 2 revise; R2: 2 accept | Unsourced "performance reviews" intent (4 of 5 seats); new metric with no Goodhart guard |
| 2026-09-16 | Komoroske, Fowler, Brooks, Allspaw, Woods, Dekker, Dalio (batch) | earlier | 3 | R1: 20 accept, 14 accept-with-edits, 1 revise; R2: 1 revise (new claim); R3: accept | Limits inverted to validation; bolt-on adversary closers; repeated openers; rewrite added unsupported claim |
| 2026-09-16 | Fournier (new page) | 4 accept, 1 reject | 1 | 5 accept-with-edits | Three errors in candidate case; closer echoed Komoroske; chronology slip; shadow tooling risk; embellished essay gloss |

**Trend:** the Fournier page, drafted after the batch lessons, needed one review round and no revisions. The goal for the next page is the same result with a shorter edit list.
