# Calibration log

What the Councils have caught so far, turned into checks. Read this before drafting. Append to it after every run (stage 8 of `SKILL.md`). A pattern caught twice becomes a checklist item.

## Pre-draft checklist

Run each item against the draft before running the gates.

**Attribution**
- [ ] No frame is marked `original` without an antecedent search. Earlier uses found so far: Patrick Kua on the tech lead role, Evan Bottcher on the platform definition, Dan McKinley on boring technology.
- [ ] Every co-author of a coined term is named in `co_originators` and wherever the term appears in prose.
- [ ] A counterposition that never names the thinker is a `parallel` edge, not `critiques`.
- [ ] No compressed phrasing in the tagline, take, thesis, reading or extension presents the site's interpretation as the thinker's claim or intent ("as Forsgren built them" implied a design intent no source supports; "Hickey's argument asks why the rule stops at the log" put a security question in the mouth of someone who never discussed audit logs; on the append-dont-overwrite concept page, "Fowler compares the event log to a git history, where a leaked secret stays in every clone" let a relative clause hang the site's point on Fowler. Put the site's point in its own sentence).

**Grounding**
- [ ] `bun scripts/fact-ledger.ts <slug>` exits 0. Every frame attribution, co-originator, `critiques` or `antecedent` edge, book, `active_years` and `background` cites a verified `[S:n]` with a URL. A claim with no ledger line does not go on the page, whoever proposed it.
- [ ] Read the ledger's `warn unused` lines. A verified fact nothing cites is usually a claim a rewrite dropped, or a seat's assertion that research could not confirm.
- [ ] Read the gate warnings, as well as its exit code. `reading-gates.ts` fails on `reading` and `extension` and only warns on the other editorial fields, because a banned cadence is sometimes right there. A shipped `thesis` carried "not X but Y" until a review seat caught it by hand on 2026-09-17.
- [ ] Every citation supports its own sentence, and every clause of it. A sentence that fuses a cited point with an uncited one fails (Hickey's privacy-deletion clause rode on a limit about unfamiliarity). A Lens citation belongs on the sentence that makes the Lens argument, not the setup sentence before it (Komoroske, Woods, Fournier).
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
- [ ] The Lens position and the angle are not already used by a neighbor. Current uses: Komoroske P:2 and P:3 (garden versus enforce); Fowler P:7 (bounded context, confused deputy); Brooks P:4 (AI and accidental complexity); Allspaw P:5 (dark debt); Woods P:2 (slack as reserve); Dekker P:6 (exception drift); Dalio P:1 (principles on decisions) and Majors P:1 (telemetry after an agent incident), so a third P:1 page needs a different opener as well as a different argument; Forsgren P:4 and P:2 (delivery metrics); Fournier P:2 (who pays for migrations); Hickey P:6 and P:3 (place-oriented storage of access grants, separate write path for the log).
- [ ] A term repeated many times on one page reads as machine prose even when it is the right word (Dalio's five uses of "operationalization").

**Research**
- [ ] Every fact in the candidate issue is re-verified. The Fournier case had three errors; the Saxe case had six, including every frame it named.
- [ ] Before convening the inclusion Council, run the uptake check: for each candidate frame, its first date and any use by other practitioners. If every frame is under two years old with no outside use, bring it to Julie first instead of spending five seats (Saxe: research already showed this, and the Council went 5 to 0 against).
- [ ] Verify every fact a Council seat asserts before it reaches the page. Seats have been wrong: Saxe seat 2 called a disclosed interest "undisclosed"; Hickey seat 2 proposed Kyle Mitchell as a critic when his essay is sympathetic; Hickey seat 1 quoted uptake evidence with no source. Since 2026-09-17 the fact ledger enforces this structurally, because a seat report is a research request and never a fact.
- [ ] Ask `bun scripts/review-policy.ts <slug>` for the round count instead of recalling it. The three-round rule for `mode-a` lived only in SCHEMA section 7 and two pages shipped with one round.
- [ ] Check the opening of every talk or essay the page cites for a credited premise. "Simple Made Easy" opens by quoting Dijkstra, which changes the attribution of the frame built on it.
- [ ] Anything the draft adds beyond `sources.md` (URLs, essay dates, what an essay argues) gets verified and appended. The first Fournier draft embellished what "The Manager as Debugger" argues.

## Run log

| Date | Page(s) | Inclusion | Review rounds | Review verdicts | Notable catches |
|------|---------|-----------|---------------|-----------------|-----------------|
| 2026-09-16 | Forsgren (pilot) | earlier | 2 | R1: 3 accept-with-edits, 2 revise; R2: 2 accept | Unsourced "performance reviews" intent (4 of 5 seats); new metric with no Goodhart guard |
| 2026-09-16 | Komoroske, Fowler, Brooks, Allspaw, Woods, Dekker, Dalio (batch) | earlier | 3 | R1: 20 accept, 14 accept-with-edits, 1 revise; R2: 1 revise (new claim); R3: accept | Limits inverted to validation; bolt-on adversary closers; repeated openers; rewrite added unsupported claim |
| 2026-09-17 | Majors (new page, mode-a) | 5 accept | 3 (required for mode-a) | R1: 1 revise, 4 accept-with-edits; R2: 1 accept, 4 accept-with-edits; R3: 5 accept | Banned cadence in an ungated `thesis` (the gates only read reading/extension until this run); a secondhand claim shipped in four places, later replaced by a first-person source; my own resolution swapped "reading" for "extension" in a limit and the stale text propagated into the grounding pack; extension opener echoed Dalio's P:1 phrasing verbatim; missing risk, the telemetry record is itself a secrets store |
| 2026-09-17 | Append, Don't Overwrite (concept page) | n/a | 2 (one revise) | R1: 1 revise, 4 accept-with-edits; re-review: 1 accept-with-edits, 1 accept | Relative clause put a leaked-secret point in Fowler's mouth (4 of 5 seats); closer lumped an authorization limit in with cost limits; replay limit named both holders when only event sourcing replays |
| 2026-09-17 | Hickey and Fournier, rounds 2 and 3 (mode-a) | n/a | 3 | R2: no revise; R3: Hickey 5 accept, Fournier 4 accept and 1 accept-with-edits | Overclaim "adoption stops depending"; limits placed after the prescription; template echo between two pages fixed the same way; claims-map citation on the setup sentence |
| 2026-09-16 | Hickey (new page) | 5 accept | 1 | 5 accept-with-edits | Dijkstra premise found on the talk's first slide; seat-proposed critic was sympathetic; extension put a site question in Hickey's mouth; append-only overclaimed (proves a change, not its legitimacy); PLOP was `original` despite its own Backus antecedent |
| 2026-09-16 | Saxe (rejected, recheck 2027) | 5 reject | 0 | n/a | Six errors in candidate case, all four frames invented; essay frames 13 months old with no outside use; marquee frames trail Willison, Florêncio and Herley, Papert, none cited by Saxe |
| 2026-09-16 | Fournier (new page) | 4 accept, 1 reject | 1 | 5 accept-with-edits | Three errors in candidate case; closer echoed Komoroske; chronology slip; shadow tooling risk; embellished essay gloss |

**Trend:** the Fournier page, drafted after the batch lessons, needed one review round and no revisions. The goal for the next page is the same result with a shorter edit list.

**Round 3 narrowed, 2026-09-17 (Julie).** Read the run log column above: every recorded round 3 ended with all five seats accepting and no page changed, while rounds 1 and 2 caught something on every run. Round 3 is now a single adjudication pass (`briefs/review-adjudicate.md`), and the five seats return whenever round 2 leaves any verdict below ACCEPT-WITH-EDITS. Watch this: if an adjudication pass ever catches something a five-seat round would have caught, or misses something that reaches a merge request, record it here. That is the evidence that decides whether the narrowing holds.
