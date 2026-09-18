# Calibration log

What the Councils have caught so far, turned into checks. Read this before drafting. Append to it after every run (stage 8 of `SKILL.md`). A pattern caught twice becomes a checklist item; a pattern caught once waits in the "Caught once" section below, which exists so the second catch has something to match against. The seat-report gap was recorded once and nearly lost before the second run found it again.

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
- [ ] The Lens position and the angle are not already used by any page on the site. Check the running list below, not the neighbours in the grounding pack. Willison's extension cites P:5 three times and Allspaw's reading already used it; three review rounds passed over the collision because Allspaw is not a neighbour and the item used to read "not already used by a neighbor." Current uses: Komoroske P:2 and P:3 (garden versus enforce); Fowler P:7 (bounded context, confused deputy); Brooks P:4 (AI and accidental complexity); Allspaw P:5 (dark debt) and Willison P:5 (combinatorial tool grants on agents), so a third P:5 page needs a distinct angle; Woods P:2 (slack as reserve); Dekker P:6 (exception drift); Dalio P:1 (principles on decisions) and Majors P:1 (telemetry after an agent incident), so a third P:1 page needs a different opener as well as a different argument; Forsgren P:4 and P:2 (delivery metrics); Fournier P:2 (who pays for migrations); Hickey P:6 and P:3 (place-oriented storage of access grants, separate write path for the log); Larson P:8 (authority as a loan, and the floor a regulation puts under it).
- [ ] A term repeated many times on one page reads as machine prose even when it is the right word (Dalio's five uses of "operationalization").

**Research**
- [ ] Every fact in the candidate issue is re-verified. The Fournier case had three errors; the Saxe case had six, including every frame it named.
- [ ] Before convening the inclusion Council, run the uptake check: for each candidate frame, its first date and any use by other practitioners. If every frame is under two years old with no outside use, bring it to Julie first instead of spending five seats (Saxe: research already showed this, and the Council went 5 to 0 against).
- [ ] Verify every fact a Council seat asserts before it reaches the page. Seats have been wrong: Saxe seat 2 called a disclosed interest "undisclosed"; Hickey seat 2 proposed Kyle Mitchell as a critic when his essay is sympathetic; Hickey seat 1 quoted uptake evidence with no source. Since 2026-09-17 the fact ledger enforces this structurally, because a seat report is a research request and never a fact.
- [ ] Ask `bun scripts/review-policy.ts <slug>` for the round count instead of recalling it. The three-round rule for `mode-a` lived only in SCHEMA section 7 and two pages shipped with one round.
- [ ] Check the opening of every talk or essay the page cites for a credited premise. "Simple Made Easy" opens by quoting Dijkstra, which changes the attribution of the frame built on it.
- [ ] Anything the draft adds beyond `sources.md` (URLs, essay dates, what an essay argues) gets verified and appended. The first Fournier draft embellished what "The Manager as Debugger" argues.
- [ ] On a pipeline run, confirm the seat reports are on disk under `_working/_council/<date>/` before treating the transcript as a transcript. Caught on Larson and again on Willison: the workflow held verdicts in memory and wrote nothing until Ship, so rounds 2 and 3 answered a verdict list while their briefs told them to quote seats by number. Fixed on 2026-09-17 and not yet exercised, so check rather than assume.

**Return edges**

The first two items were caught twice, on Larson and again on Willison. The last four entered on a single catch each, because they are facts about how the tooling behaves rather than judgment calls waiting on a second sighting, and two of them broke a build and a ledger on 2026-09-17. Julie can send any of them back to "Caught once" if the group is carrying more than it earns.

- [ ] When the seven-neighbour cap forces a demotion, look first for the edge whose claim is already carried in full by a frame's `one_line_gloss` and `co_originators`. Collapsing that edge into the deep tier costs the page nothing, and it was the right answer three times (Patrick Kua on Fournier, Rudolf Kálmán on Majors twice over).
- [ ] When no candidate for demotion is redundant, rank them by what each edge carries that appears nowhere else on the page, then put the choice to Julie as a decision rather than a note. Fowler's demotion came down to Kent Beck, Ward Cunningham and Eric Evans, all three load-bearing, and it went through as a footnote.
- [ ] Count every on-site neighbour as foreground when planning return edges. `orderNeighbors` in `src/lib/checks.ts` ignores `render_tier` on a neighbour that has a page here, so a file that looks under the cap can be at it in the build. The Larson plan counted Majors at six and the build counted seven.
- [ ] Append a return edge at the end of `adjacent_thinkers`, or renumber `page-claims.md` in the same edit. Claims lines address edges positionally, so an edge inserted mid-list shifts every later index and either fails the ledger or passes against the wrong source.
- [ ] Write a return-edge label from the neighbour's side, opening with what the new thinker adds, then check it against the new page's label for the same pair. Three labels drafted in one pass restated the new page's own wording almost sentence for sentence.
- [ ] Record whether a neighbour's fact ledger already exits 1 before editing it. `rich-hickey` and `martin-fowler` fail on `main` because those legacy pages have no `facts.md`, so running the ledger after an edit says nothing. A page with no ledger can take a `parallel` return edge, which adds no required line, and not a `critiques` or `antecedent` one, which does.

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
| 2026-09-17 | Larson (new page, mode-a, first pipeline run) | 5 accept | 3 (round 2 left two REVISE, so round 3 went back to five seats) | R1: 3 revise, 2 accept-with-edits; R2: 2 revise, 3 accept-with-edits; R3: 5 accept-with-edits | Shipped `critiques` edge on Forsgren asserted the opposite of the primary sources; seat-level findings never reached disk; on-site neighbours count as foreground whatever their `render_tier`, and the build failed at eight; positional `page-claims.md` lines broke when an edge was inserted mid-list; round 3 caught an extension sentence that said the regulator designates the CISO where 23 NYCRR 500.4(a) says the entity does, four of five seats |
| 2026-09-17 | Willison (new page, mode-a, pipeline run) | 5 accept | 3 (round 2 left one REVISE, so round 3 went back to five seats) | R1: 2 revise, 3 accept-with-edits; R2: 1 revise, 4 accept-with-edits; R3: 5 accept-with-edits | Extension credited Willison with Meta's "within a session" scoping, which appears nowhere in his post; a body-of-work link resolved to the series index and duplicated the entry above it; the slop gloss compressed @deepfates's own sentence into the site's paraphrase; Chromium's Rule Of 2 tested as an antecedent for the trifecta and ruled convergence; three round 3 seat assertions held as research and changed no page text; the Fowler return edge forced a demotion heavier than the edge it made room for |

On both runs the dissenting seats were the ones the skill already predicts. Larson: seats 1, 2 and 5 in round 1, then 3 and 5 in round 2. Willison: seats 1 and 3 in round 1, then 5 in round 2. Seats 3 and 5 audit a rewrite for claims that were not there before, and round 2 is the first text they see.

**Trend:** the Fournier page, drafted after the batch lessons, needed one review round and no revisions. Then the first two pipeline pages both ran the full three rounds with round 2 leaving dissent, which is the widest edit list since the opening batch. Hand-drafting and pipeline drafting are not the same starting point, and the Fournier result has not been reproduced by the pipeline yet. The goal for the next run is a round 2 that leaves nothing below ACCEPT-WITH-EDITS, since that is the condition the round 3 narrowing hangs on.

**Round 3 narrowed, 2026-09-17 (Julie).** Read the run log column above: every recorded round 3 ended with all five seats accepting and no page changed, while rounds 1 and 2 caught something on every run. Round 3 is now a single adjudication pass (`briefs/review-adjudicate.md`), and the five seats return whenever round 2 leaves any verdict below ACCEPT-WITH-EDITS. Watch this: if an adjudication pass ever catches something a five-seat round would have caught, or misses something that reaches a merge request, record it here. That is the evidence that decides whether the narrowing holds.

**The narrowing is untested, and the evidence behind it has turned, 2026-09-17.** Both pipeline pages escalated. Round 2 left two REVISE on Larson and one on Willison, so the five seats came back on each and the adjudication pass has still never run on a live page.

What changed is the premise. The narrowing rested on four runs where a five-seat round 3 accepted and changed nothing. Round 3 changed a page on both of these runs, and on Larson it caught an error of the kind the whole ledger exists to stop: the extension said the regulator designates the security officer, where 23 NYCRR 500.4(a) reads "Each covered entity shall designate a CISO" [S:45], which the sentence's own ledger line carries. Four of five seats caught it in round 3, after two rounds and an editor pass had read the sentence. On Willison, round 3 replaced the site's compressed gloss of @deepfates's sentence with the wording the post actually quotes. Two of two escalated rounds found something.

That does not settle the question, and it narrows it usefully. Both catches came from the escalated five-seat form on pages where round 2 had left dissent, which is the case the adjudication rule already routes to five seats. The open question is the other branch, the quiet page where round 2 leaves nothing below ACCEPT-WITH-EDITS and a single adjudicator carries the last read. No run has produced that case yet. Record the next one carefully.

One more thing the Larson catch exposes: it is in `_working/will-larson/reading-claims.md` and nowhere in the transcript. The Council record kept what round 3 voted and lost what it found.

## Caught once

Patterns with one sighting. They are here so the second sighting is recognisable rather than novel. Move an item up to the checklist when it happens again, and delete it if a run demonstrates it was specific to one page.

- **The novelty check reads the grounding pack, and the grounding pack holds neighbours.** Willison's P:5 collision with Allspaw survived three rounds because no edge joins the two pages. The checklist item has been rewritten to read across every page, so the second sighting would be a failure of the new wording rather than the old.
- **A neighbour's fact ledger can already be failing before a return edge arrives.** Running `bun scripts/fact-ledger.ts` on a legacy page after editing it proves nothing, since `rich-hickey` and `martin-fowler` exit 1 on `main` for want of a `facts.md`.
- **An uncommitted fix to a recurring failure is the failure.** The seat-report fix sat in the working tree while the Willison entry was written, and the entry said so. It was committed on 2026-09-17 in `chore/pipeline-2026-09-17`. If a later run finds a fix parked in a working tree again, this becomes a checklist item about the Ship stage.
- **Two candidates in one batch can plan the same demotion on a shared neighbour.** Larson and Willison both demoted Rudolf Kálmán on Majors to make room, each correctly for itself. Two merge requests, one seat of room. The Draft stage is deliberately barred from editing neighbours so candidates do not collide there, and the collision moved to Ship instead, where the branches cannot see each other.
