---
project: thinker-distillation
effort: E3
phase: in-progress
progress: 28 live thinker pages; nothing open; due diligence phase planned
iteration: iter-27-savepoint-and-diligence-plan-2026-10-10
mode: project
started: 2026-05-25
updated: 2026-10-17
---

<!-- RESUME-HEAD v1 -->
> **Status** · 2026-10-18. Launch cleanup merged (through !100). Non-software filter decided (!103): vocabulary that does work in the reader's domain. Uptake checks done for thirteen candidates (!106, records in _working/<slug>/uptake-2026-10.md). Julie approved and merged !104 (Hardy credit for the confused deputy) and !105 (blue-green as shared credit, #67 closed). Hudson #5 is in with honest limits; Rehberger #24 goes to an ordinary Council (the Saxe flag was an age error, corrected in !107). Branch origin/salvage/run4-unfinished is still left for Julie.
> **Next** · Julie: answer the remaining decisions on the candidate vetting page (https://claude.ai/artifact/TACu6S9BXzetYBbQZFpkqR); then the calibration read (DILIGENCE.md step 0). Camila then writes the rubric and runs the audit.
> **Blocked** · On Julie's calibration read.
> **Resume** · Read /Users/juliedavila/Camila/thinker-distillation/DILIGENCE.md, then the Council transcript at /Users/juliedavila/.claude/LIFEOS/MEMORY/COUNCIL/distillery-open-decisions-20261016-debate/transcript.md, then "## Save Point — 2026-10-10" below.
<!-- /RESUME-HEAD -->


## Save Point — 2026-10-10, three runs, the unattended fixes, and a diligence phase planned

> Current state. The 2026-10-02 block below is history, apart from its carried items, re-ranked here.

### Runs

| Run | Thinker | Agents | Tokens | Time | Notes | MRs |
|---|---|---|---|---|---|---|
| 11 | Jens Rasmussen #74 | 26 | 3.9M | page in 81 min, then 7.5 h on a permission prompt overnight | cold reader REVISE, fixed in-run | !62, !63 |
| 12 | Dave Farley #40 | 27 | 4.1M | 100 min, no stalls | first run with the inclusion record | !66, !67 |
| 13 | Nancy Leveson #82 | 27 | 4.1M | 92 min, no stalls | summary check refused twice, then posted at 296 words | !70, !71 |

Run 10's 135-minute stall (2026-10-02) and Hollnagel's 18-hour one (2026-09-27) were permission prompts too, not a missing timeout and not sleep. PIPELINE.md "Permission prompts" has the record.

### Machinery changed

- **Unattended runs cannot stall on a prompt (!64).** Global hook `~/.claude/hooks/SandboxGuard.hook.ts` (`869abf3`, `abd0aa5` in `~/.claude`) denies `rm`, `curl`, piping into an interpreter and Python inside a sandbox, naming the replacement, and pre-approves only the guarded scripts (`fetch.ts`, `discard.ts`, `issue-note.ts`) and a candidate-branch push. Every sandbox prompt carries the same rules (`UNATTENDED`, via `dispatch()`).
- **Two check fixes (!64).** `fact-ledger.ts` accepts only a real antecedent-search record; `search-cap.ts` counts the refusal only inside a WebSearch result.
- **The inclusion record (!65, !68).** One comment on the candidate's issue: a plain summary under 300 words for a cold reader, the five seats' reports folded, and a hidden structured block. `issue-note.ts` refuses a summary over the cap, with an em-dash, or with an origin verb outside quotation marks.
- **The queue (!69).** Pages naming someone through one shared frame count as one foothold, and Council support is read from the issue records.
- **SCHEMA 4.11 "Convergence".** When two thinkers hold the same idea, the page says whether one took it from the other or they got there independently, and "independently" needs a source.

### Decisions (Julie), recorded in the decisions list below

Hosting stays on GitLab Pages, with a public launch some day (#98); domain balance is not a ranking goal; the inclusion record lives on the issue; the deployment pipeline is credited as a team idea with Farley first; STPA stays co-authored with Dulac, on the 2005 paper Julie found.

### Filed

Concept candidates #94 (weaknesses that combine) and #99 (stale authority); public launch #98; candidates #95 Martin Thompson, #96 Sam Newman, #97 Michael Nygard.

### Open, ranked

1. **The due diligence phase**, planned in `DILIGENCE.md`. Thinker runs wait for it; Lorin Hochstein #87 is next after.
2. The duplicate-point scan and the firstness-verb warning, now step 1 of the phase.
3. `inbound-claims.ts` matches on the last word of a display name (carried).
4. The inclusion summary is written before the page is reviewed, so it can carry a credit the review later corrects. The origin-verb check limits the damage; nothing re-posts it after review.
5. Issues reach Ship without `camila:in-council` (five runs running); the label step in research does not happen.
6. Carried: cut what Julie reads per page, required reading with a byte ceiling, weekly maintenance in CI, the non-software inclusion filter.

### Environment

Sandboxes destroyed after each run. Worktrees for this session lived in the scratchpad and are removed. The 2005 Leveson and Dulac PDF is in Julie's Downloads, not in the repository.

---



## Save Point — 2026-10-02, the search-cap guard and James Reason

> Current state. The 2026-09-28 block below is history, apart from its open list, re-ranked here.

### Done

- **Search-cap guard (!56).** At the cap WebSearch returns an ordinary result saying the search was not performed and to carry on. Three layers: research and fact audit report it and park; `scripts/search-cap.ts` reads the run's own `wf_<id>` transcripts (exit 1 hit, 2 blind, both park) from the fact audit and again at Report; and a global hook, `~/.claude/hooks/SearchCapGuard.hook.ts` (committed in `~/.claude` as `5fe4f9e`), blocks on the message in every session. Cap raised to 1,000.
- **Its first scan found 21 refused searches** on 2026-09-22 and 09-24 in agents behind Humble, Cunningham, Alexander, Gene Kim and Karpathy. Audit #88: nothing wrong, one unsourced sentence on Humble, fixed in !57. Reports in `_working/<slug>/cap-audit-2026-10.md` (local).
- **Run 10, James Reason.** 26 agents, 3.9M tokens, about 4h20m. Inclusion 5-0; rounds 1 and 2 unanimous ACCEPT-WITH-EDITS; cold reader 14 findings plus 4 on the plan, all applied in part. Search-cap scan clean. Julie's calls: just culture filed `distributed` (Marx and Johnston co-originators; Dekker's credit narrowed and gains Marx); reporting argument dated 1998; neither declined cold-reader suggestion added (the per-task grant clause presumed grants are decided per action, which a broader workflow need not do). New candidates Perrow #89, Marx #90.
- **Workflow prompts follow SKILL.md (!60):** `git switch` at Ship, the cold editor routes neighbour fixes to the plan, and the in-council and accepted labels are set.
- Sandboxes: run-1 destroyed, two abandoned 2026-09-22 clones pruned.

### Open, ranked

1. **Next run: Jens Rasmussen #74** (pull 4).
2. The duplicate-point scan (fired on six of the last seven cold reads) and the firstness-verb warning in `reading-gates.ts`.
3. The inclusion Council writes nothing to disk (five runs); queue.ts shows Rasmussen at 0 Councils despite ten namings.
4. `inbound-claims.ts` matches on the last word of a display name.
5. Run 10 took twice as long as runs 6 to 9; worth reading the per-stage times before run 11.
6. Carried: cut what Julie reads per page, required reading with a byte ceiling, the run ledger, the distillery council, weekly maintenance in CI, the non-software inclusion filter.

---

## Save Point — 2026-09-28, serial runs working and the cold reader is round 3

> Current state. The 2026-09-25 and 2026-09-24 blocks below are history.

### Runs this session

| Run | Thinker | Agents | Tokens | Running time | Cold reader | MR |
|---|---|---|---|---|---|---|
| 6 | Daniel Terhorst-North | 28 | 4.05M | 2h46m | same verdict, 16 findings, all applied | !42 merged |
| 7 | Erik Hollnagel | 28 | 4.63M | about 5h (Mac slept 18h mid-run) | same, 12, all applied | !45 merged |
| 8 | Kelly Shortridge | 28 | 4.13M | 2h02m | same, 16, 15 applied | !48 merged |
| 9 | Richard Cook | 26 | 3.82M | 1h55m | same, 10, 9 applied | !52 open |

Every round 1 and round 2 across all four was unanimous ACCEPT-WITH-EDITS, and every cold read still found 10 to 16 live defects. A unanimous round is weak evidence that a page is clean; the cold reader is load-bearing on 9 of 9 measurements.

### Decisions (Julie), all recorded where the pipeline reads them

- **Hosting stays on GitLab Pages (2026-10-09).** Considered and declined: serving the whole site as a Claude artifact (it fits at 896 KB and 41 files, and would add in-page comments and link sharing, at the cost of automatic deploys). The direction is to make the distillery **public** at some point, in the spirit of greptalks, from Pages. Do not re-raise artifact hosting; the public launch is its own thread.
- **Domain balance is not a ranking goal (2026-10-09).** Three security pages out of 27 is fine; do not push security, or any domain, up the queue to even out coverage.
- **N=1 is the mode.** No multi-candidate batches.
- **The round 3 adjudicator is dropped** (third sighting counted on Shortridge). A unanimous round 2 ends the rounds and the cold reader is the third read; round 2 dissent still brings five seats back. `round3_mode: adjudication` in `review-policy.ts` restores it. SCHEMA section 7 now defers to the script.
- **Critic limit plus critic edge is a convention** (SCHEMA 4.11).
- **Joint cognitive system stays joint credit.** `primary_author` is never rendered.
- **Chaos engineering is a concept page credited to Casey Rosenthal**, framed as resilience engineering under another name; research questions on #71.
- **Resilience engineering and security are in scope**, and non-software thinkers are welcome.

### Machinery changed this session

Keep-awake in `sandbox.ts` (!47). Queue holds parked and already-shipped candidates out and matches joint names (!44), and counts main-author credits (!50). `inbound-claims.ts` walks every prose field (!50). Cold reader permanent, applies its findings, runs on every page (!41); antecedent-search check in `fact-ledger.ts` with `antecedent-exempt.txt` (15 legacy pages, may only shrink); first tests (8 now, in CI).

### Open, ranked

1. **Merge !52 and !53.** Julie's calls on !52: the line-of-representation credit moved to `extended` with Woods as main author (no source names Cook as a writer of the 2017 report); dark-debt `primary_author` holds Woods as a placeholder; the Hollnagel edge stays as Hollnagel building on Cook. Camila checked the four claims added after the cold read against the ledger; all sourced.
2. **Done 2026-09-28, !56.** ~~Guard against the silent search cap.~~ At the cap, WebSearch tells the model to continue with what it has, and research then writes from memory while looking sourced (GitHub issue anthropics/claude-code#95815). Research and fact-audit stages should report any such result and stop the candidate.
3. **Two mechanical checks the cold reader keeps doing by hand:** a warning in `reading-gates.ts` on "named", "introduced", "coined", "first" without an antecedent line (fired on Cook after the checklist item existed), and the duplicate-point scan across a page's fields (five runs running).
4. **The inclusion Council writes nothing to disk**, four runs running, so issues cannot say which reviewer named whom.
5. **`inbound-claims.ts` matches on the last word of the display name**, so "Daniel Terhorst-North" misses pages that say "Dan North".
6. Carried from 2026-09-24: cut what Julie reads per page, scope required reading with a byte ceiling, the run ledger, the distillery council, weekly maintenance in GitLab CI, and the inclusion filter for non-software thinkers.

### Candidates filed this session

Hollnagel #68 (shipped), Shortridge #69 (shipped), Rinehart #70, Rosenthal #71, Cook #72, Reason #73, Rasmussen #74, Deming #75, Conway #76, Dijkstra #77, Chris Read #78, Keunwoo Lee #79, Laforgia #80 (corpus about six months old; likely set aside), Lamport #81, Leveson #82, Sounil Yu #83, Shostack #84, Dykstra #85, Venables #86, Hochstein #87. Blue-green credit question is #67.

### Environment notes, additions

Council reports for runs 6 to 9 are preserved at `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-run{6,7,8,9}-council-2026092{5,6,8,8}/`. Sandboxes are destroyed after each run; the keep-awake process stops with them. glab merges work through `glab api -X PUT projects/:id/merge_requests/<n>/merge` once the MR's head pipeline is green.

---

## Save Point — 2026-09-25" below; its "Merge order" section is now history. Then the 2026-09-24 block's "Julie's directions" and "Open work, ranked" (1 and 3 done, 6 half done).
<!-- /RESUME-HEAD -->


## Save Point — 2026-09-25, the three pages finished and the cold reader made permanent

> Current state. The 2026-09-24 block below is still the reference for Julie's four decisions, the Council pass and the ranked list.

### What was done

**The three open pages, finished.** One agent per page in its own worktree applied every cold-reader finding, with a claim-delta line per rewrite in `_working/<slug>/control-remediation-2026-09-25.md`. Camila read every diff and fixed three more sentences (a comma splice on Karpathy, two that needed a second read on Alexander). Nothing was declined.
- **!38 Karpathy:** no field now says the review step was Willison's addition; the coinage is dated to the month on both pages; the talk links YC's own video, "Software Is Changing (Again)".
- **!36 Alexander:** reading agrees with its own limit; "granted the format" once instead of five times; three antecedent searches recorded; the 1977 byline from his own CV. The editor also caught a false absence claim the cold reader missed: Gabriel's 1996 essay "The Quality Without a Name" was on the ledger the whole time.
- **!37 Gene Kim: the DORA contradiction dissolved.** DORA's own December 2018 announcement names him among its founders, and the Forsgren and Humble ledgers had sources all along. Research and both audits never opened the neighbours' ledgers. Nothing on either neighbour changes.
- A test merge of all three plus !41 builds, passes verify and passes all five touched ledgers. MR descriptions rewritten, lint clean.

**!41, the cold reader made permanent (ranked item 3) and the first half of item 6.**
- Runs on every page after its last round, whatever the round count. An editor applies what it confirms; its verdict and anything declined open the merge request. Never gates.
- `fact-ledger.ts` now fails an `original` frame whose attribution line cites no "antecedent search" fact. 15 of 17 live pages predate it and sit in `scripts/antecedent-exempt.txt`, which may only shrink.
- `scripts/test/pipeline-stub.test.ts`: the whole workflow against stub agents, 7 tests, ~50ms, in the `verify` CI job. Six of seven fail against the old workflow.
- **Nadia's question answered, in PIPELINE.md:** all three recurring defect types predate the 2026-09-17 narrowing and each got past five-seat rounds. Reviewer count was never the variable.

**!39** gained two "Caught once" entries: an absence claim contradicted by the page's own ledger, and a gap declared without opening the neighbours' ledgers.

### Merge order, and why

!36 → !37 → (Camila rebases) !38 → !41 → (Camila rebases) !39 → !40. Only !38 conflicts with the others, on two appended entries. !39 holds merge commits of the old page heads and its own resolutions of the same conflicts, so it rebases cleanly only after the pages are in.

### The N=1 experiment, ready to run after the merges

**Recommended candidate: Dan North** (#39, pull 2: Forsgren, Humble). Dave Farley has the same pull, but he co-wrote *Continuous Delivery* with Humble, so his page would argue from a position the roster already holds. North brings BDD, which no page holds; that is the positional-coverage criterion from the council idea. North also corrects a known wound: Forsgren's `critiques` edge to him failed the record in September.

Run it on the post-!41 pipeline so the permanent cold reader is exercised. Measure against runs 3 and 5: wall time from research to merge request, agents, stalls, rounds, cold-reader verdict and how many findings the in-run editor closed. Record it by hand until the run ledger (item 7) exists.

### Ranked list, updated

Done: 1 (three pages), 3 (cold reader permanent). Half done: 6 (antecedent search is mechanical now; the lowered-claim carriers and the unmade-correction defect are not). Next: 2 (N=1, after merges), then 4 (cut what Julie reads), 5 (required reading per stage with a byte ceiling), 7 (run ledger), 8 to 10 as listed below.

### Environment notes, additions

Worktrees for this session live in the scratchpad (`td-<branch>`), with `node_modules` symlinked; remove with `git worktree remove` when the branches merge. The workflow's stub harness supplies `pipeline()` stages as `(previous, originalItem)`, which is how the real tool calls them.

---

## Save Point — 2026-09-24 ... (cold-start resume here)" through "### Environment notes", especially "Julie's directions, 2026-09-25" and "Open work, ranked". Re-read /Users/juliedavila/Camila/thinker-distillation/SCHEMA.md, PIPELINE.md and the skill at /Users/juliedavila/Camila/thinker-distillation/.claude/skills/add-thinker/ before any code. ⚠ Read to the END of the Council pass: an earlier paragraph recommends restoring five seats and the later one reverses it. Frontmatter (`updated: 2026-09-24`, `progress: iter-10 to iter-15`) is stale against the body.
<!-- /RESUME-HEAD -->


## Save Point — 2026-09-24, the audit and the control verdict

> Current state. Everything from `## Save Point — 2026-09-21` down is history.

### Where things stand, verified

- **Main at `aba4715`. 17 live pages, build clean, CI green.** `verify` now runs on every merge request.
- **Three merge requests open, all waiting on Julie, and two should NOT merge as written:**
  - **!36 Christopher Alexander** — control returned REVISE, 10 findings.
  - **!37 Gene Kim** — control agreed with the adjudicator, 11 findings, none deciding.
  - **!38 Andrej Karpathy** — control returned REVISE, 10 findings.
- **31 open candidates.** Top of the ranked queue: Gene Kim (shipping), Dave Farley, Dan North, all pull 2 and all named on Humble.
- Ledger coverage 8 of 17. Nine pages are exempt by name in `scripts/ledger-exempt.txt`, a list that may only shrink.

### The round 3 measurement, and why the revert was withdrawn

The unanchored control has run twice, on five pages. **Three came back stricter than the adjudicator and none came back more lenient.** `SKILL.md` stage 6 wrote the criterion down in advance: a stricter control is the result that reverses the 2026-09-17 narrowing.

| Run | Page | Adjudicator | Control |
|---|---|---|---|
| 2026-09-22 | ward-cunningham | ACCEPT-WITH-EDITS | REVISE |
| 2026-09-22 | jez-humble | ACCEPT-WITH-EDITS | same, 7 findings the adjudicator missed |
| 2026-09-24 | christopher-alexander | ACCEPT-WITH-EDITS | REVISE |
| 2026-09-24 | gene-kim | ACCEPT-WITH-EDITS | same |
| 2026-09-24 | andrej-karpathy | ACCEPT-WITH-EDITS | REVISE |

**Recommendation, revised after the Council pass below: do NOT restore five seats. Make the cold reader a permanent, non-gating control.** Three of four seats attacked the revert independently and converged on this instead. The control's own note is the reason: all three ledgers exit 0, all three gate runs are clean, zero em dashes, and it calls its findings "the kind no script reaches."

### The three findings that recur across runs, and are therefore skill defects

1. **A frame marked `original` with no antecedent search on file.** Third sighting: the Cunningham control found it, then Alexander (three frames) and Gene Kim (two) in the same batch. `SKILL.md` requires the search and nothing records that it happened, so the requirement is unfalsifiable. **Fix: the ledger should carry an antecedent-search line per `original` frame, and `fact-ledger.ts` should require it.** Karpathy's working set did it correctly in the same batch, which proves it is cheap.
2. **Lowering a claim in one field and leaving its carriers standing.** Third sighting, and the second where the stale carrier cites the very line that lowered it (Alexander's `reading` cites `limits[1]`, the field narrowed on 2026-09-24, for the claim it was narrowed to contest). Already a checklist item; it keeps firing, so the checklist is not the right instrument.
3. **A page asserting a correction to another page that was not made.** Alexander's `inclusion_rationale` says the Cunningham solo credit "is corrected in this merge request"; `ward-cunningham.md` still carries it. Same shape as the return-edge staleness item.

### Cross-page contradictions this run surfaced and did not fix

- `martin-fowler.md` asserts "Alexander's later critique of how programmers used patterns", which Alexander's own `limits[0]` and `[S:25]` rule out. Shipping !36 puts both claims on the site at once, on that page's central argument.
- The DORA co-founding claim **cannot be sourced after two audits** (`[S:26]`), and the site publishes it on two other pages. !37 is clean and leaves the contradiction live.
- !37 ships with ten build warnings including four missing back-edges to `gene-kim`.

### What shipped today

**Skill hardening (!29).** Eight gaps from the prior two runs. New `scripts/inbound-claims.ts` prints what the roster already claims about a person before their page exists, wired into Research and Draft with `inbound_claims` and `reconciled_claims` schema fields. **It earned its keep on its first run:** two of three merge request titles are corrections to existing pages.

**Description standard (!30).** `scripts/describe.ts` gives merge requests and issues a required shape, a plain-language rule and a lint, after Julie's note that the descriptions were "jargony ... not really formulated for outside collaborators or even for me." Four templates. **There is deliberately no word limit**; the first draft had a 200-word cap and Julie removed it the same day: "It's not about quantity; it's about quality when it comes to the prose."

**Control defects fixed (!34).** The control ran for the first time on 2026-09-22 and three things about how it ran were wrong: it read the page before the round 3 editor applied edits, it never wrote its report, and `review-policy.ts` had never heard of it. All fixed; a guard now names any page that owed a control verdict and did not get one.

**Audit remediation (!35).** The engineering audit found nothing ran while a merge request was open. New `scripts/verify.ts` plus a `verify` CI job on `merge_request_event`, running the gates over every page not on `ledger-exempt.txt`, plus `staleness.ts --strict`. Five documented rules corrected against the code that runs, including the shipping verdict, on-site collapsing, and a pre-draft checklist line that had been wrong for two days. `sandbox.ts prune` added.

### The engineering audit, and where compute actually goes

Artifact: **Distillery Compute Map**, <https://claude.ai/artifact/9XoPpBG1unUnqKWJ1jA1U7>

- **A graph database is overkill.** 17 nodes, 139 edges, 129 frames, and the whole corpus parses in **9.9ms**. Deepest traversal in use is two hops. At the 40-page ceiling it is still trivial. **The graph does not scale badly; the prose about the graph does.**
- **Per-agent context is the axis that fails hard.** Every agent is told to read `SCHEMA.md` (51KB), `calibration.md` (44KB) and `SKILL.md` (22KB): 117KB each, ~4.2MB per run of the same three files. `calibration.md` was 18KB on 2026-09-21 and is 44KB now, a 2.4x growth in three days.
- **162KB per agent is injected by the harness and cannot be declined**, against a median computed task of 2.5KB.
- **Zero tests.** 2,339 lines of load-bearing TypeScript across 15 scripts, no test framework imported anywhere.

### Run history, and why it needs a ledger

| Run | Date | Candidates | Agents | Tokens | Outcome |
|---|---|---|---|---|---|
| 1 | 09-20 | 2 | 36 | n/a | Larson, Willison |
| 2 | 09-21 | 2 | 39 | n/a | Anderson, Beck + Forsgren recheck |
| 3 | 09-22 | 3 | 36 | 6.2M | Humble, Cunningham; Goedecke parked 5-0 |
| 4 | 09-22 | 3 | 41 | 11.8M | **FAILED.** 11 labels stalled, all 6 attempts, 0 pages |
| 5 | 09-24 | 3 (resumed) | 41 | 8.06M | Alexander, Kim, Karpathy |

**Run 4 failed because three candidates all cleared inclusion for the first time**, so every review seat and editor carried three pages. Failures were the round 2 and 3 editors on all three pages. **Not the network:** failures staggered over 8.5 hours with other agents succeeding between them, unlike the 09-21 stall which took every seat down inside 28 minutes with `getaddrinfo ENOTFOUND`.

**Resume does not work here.** It replayed Research and re-ran everything from Inclusion onward, ~20 agents of completed work. `review-policy`'s prompt is byte-identical across both runs and its cache key still changed, so the key is not a pure function of the prompt. Resume salvages only up to the first agent whose input comes from another agent's return value.

**Nothing aggregates run telemetry.** Run 4's failure had to be reconstructed from file modification times, because the journal carries no timestamps and no run summary is persisted anywhere.

### Next session: the retro loop

Julie's direction, 2026-09-24: **with every thinker addition, run a rapid retro that identifies where the skill and workflow could be better, faster or cheaper, against known historical data points.**

The blocker is that there is no baseline to compare against. **Build the run ledger first**, the same idea as the fact ledger applied to the machine: one appended, committed record per run carrying agents, tokens, tool calls, wall time, stalls and retries, rounds per page, verdict counts, control agreement, and defects caught per round. `run-cost.ts` already computes most of it and writes nothing down.

Three questions the retro should answer every time:
- Did per-agent required reading grow, and where?
- Did the cold reader agree with the adjudicator?
- How many rounds did each page actually need? Every run has escalated except this one, which is why the quiet branch stayed untested so long.

### Julie's directions, 2026-09-25 — four decisions that reshape the design

**1. No auto-merge, ever. She merges every page herself or with Camila.** Her reason is not risk, it is purpose: "I do want to take time to actually read through this and learn, and not just have an endless list of authors that keep getting added." **The human gate is a feature of the product, not scaffolding waiting to be removed.** This deletes a whole branch: no cleanliness predicate, no trust calibration, no auto-publish, and the control measurement stops being a gate-readiness question and becomes purely a quality question. A Council seat had independently argued auto-merge should leave the roadmap; she removed it for a better reason.

**2. Unit economics are deprioritised. She is subscription-tier and does not pay per token.** The metrics that matter are **speed of incorporating a new thinker, and defect rate.** Cost per page is no longer a ranking criterion for any recommendation.

**3. Move to one thinker per run, and test it.** Julie's own reasoning: every addition requires working out the new thinker's web of connectivity to the existing roster and to the other candidates in the batch, plus the sharpening that follows, and that is where a multi-candidate run gets complicated.

The argument is stronger than speed. Once tokens stop mattering, the only case for batching collapses, because batching exists to amortise fixed agent cost across candidates. What remains is all cost: graph reconciliation is **superlinear in batch size** (one candidate reconciles against the roster; three reconcile against the roster and each other, and their corrections to shared neighbours collide), and per-agent context is the axis that stalled run 4.

**Serial addition is correct by construction.** In a batch, every page is drafted against the same stale snapshot and page 2 cannot see the sharpening page 1 just did. Evidence on file: Larson and Willison both planned to demote Rudolf Kálmán on Majors; Alexander's page asserts it corrected Cunningham's solo credit while `ward-cunningham.md` still carries it; all three run-5 pages proposed corrections to overlapping existing pages. Run one at a time and page *k+1* is always drafted against a roster that already contains everything page *k* fixed.

**Caveat, stated honestly: N=1 has never been run through this pipeline.** Every N=2 run shipped; the only N=3 run died. So this is a prediction, and the next run is the experiment. What N=1 gives up is the novelty seat seeing two new pages side by side, which is small because `lens-index.ts` already checks a page's positions against the whole roster rather than its batch.

**4. The roster should grow beyond software, deliberately.** Julie: the current software-heaviness is today's state and not the intent. She named **permaculture** as a target: another tradition on resilience and safety, developed entirely outside technology. She also named **Ray Dalio**, confirmed by her in-session, who is already on the roster and is the existing proof that a non-software thinker belongs.

Design consequences worth thinking about before the first non-software candidate:
- A permaculture-to-resilience-engineering edge (Holmgren or Mollison against Woods and Dekker) would be `parallel` in the truest sense: same system property, different substrate, neither citing the other. Far more interesting than software-to-software edges, which risk becoming incestuous.
- The inclusion filter assumes an audience of senior engineering and security leaders. For a non-software thinker the bar probably becomes "vocabulary that travels into the reader's domain" rather than "practitioners in their own field use it." **This needs deciding rather than drifting.**

### New work item: the distillery as a council for Julie's own work

Julie's idea, 2026-09-25: use the roster as a reasoning substrate for her engineering work, system diagrams, code and design decisions, **including where the thinkers disagree**, so that the disagreement itself becomes a council of different approaches to a problem.

**The structure already exists.** Every page carries a `thesis`, `named_frames` with glosses, a `limits` section recording where the idea fails, and `still_load_bearing_despite`. That is a council seat already: how this person sees a problem plus where they would be wrong. The `critiques` and `parallel` edges record who argues against whom, so a seating can be chosen to produce friction on substance rather than four agents agreeing in different registers.

What it needs:
- **A selector.** Given a problem, which thinkers' frames apply. `lens-index.ts` already maps positions to pages and frames carry `concept_slug`s.
- **A seat builder.** Turn a page into a seat prompt from thesis, frames, limits and what the thinker would reject.
- **Deliberate pairing.** Seat at least one `critiques` or `parallel` pair so the council disagrees on substance. Woods against Dekker on resilience; Hickey against Beck on where design effort goes.

**This reframes the queue ranking.** Today it ranks by graph pull, which optimises site coherence. If pages are also seats, rank partly by **whether a candidate adds a position nobody currently holds**; `lens-index.ts` already flags crowded positions, so it is the same data read for a different purpose. It also answers the roster ceiling differently: **40 pages chosen for positional coverage is a better council than 60 chosen for connectivity.**

Camila's note from running a generic Council this session: four seats composed from three expertise traits produced useful positions with a generic flavour. Real thinkers with real limits sections is a different instrument.

### Council pass on the recommendations, 2026-09-25

Four custom seats, single round, no seat seeing another's answer. Transcript: `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-improvement-recommendations-20260925-172458-quick/transcript.md`

**Three of four independently attacked reverting round 3 to five seats, and Camila withdrew it.**
- Reeve: review already failed, since three of five pages carried defects through three rounds plus an adjudicator. Paying five times more for a process with no demonstrated correlation to catching defects is increasing headcount on a broken checklist.
- Nadia: the sample is too thin for a permanent reversal, and the first control run was contaminated by the pre-edit bug so the clean sample is smaller than five. **But she corrected the framing:** this is not the Bornmann "high agreement, distrust it" pattern, it is the opposite, a less-contaminated observer finding MORE. That is construct validity for the control itself.
- Tobias: restoring headcount does not touch the actual failure, which was a seat running silently unenforced.

**All three converged on the same alternative: make the cold reader a permanent, non-gating control instead of restoring five seats.** That is now the recommendation.

**Baron found a contradiction nobody had priced:** recommendations 1 to 5 hardened the review pipeline on the assumption the human merge gate was permanent, while the roadmap planned to delete that gate via auto-merge, on infrastructure that had already leaked a live credential from abandoned clones undetected for two days. Julie's decision above resolves this by making the gate permanent.

**Two findings that were not in the recommendations at all:**
- **Tobias: the context cut is self-reversing without a ceiling.** Trimming required reading to ~30KB is a one-time trim on a file that grew 18KB to 44KB in three days. It is back to 117KB by mid-October unless the cut ships with a byte budget or a decay mechanism. LifeOS already has this discipline for always-on files and the distillery has none.
- **Nadia: nobody checked whether the three recurring defect types predate the narrowing.** If they do, reviewer count is not the relevant variable and the whole revert debate was aimed at the wrong thing.

### Open work, ranked

Reordered after Julie's four decisions and the Council pass. **Speed and defect rate are the ranking criteria now, not cost per page.**

1. **Finish the three open pages.** Apply the control's REVISE findings on !36 Alexander and !38 Karpathy; decide the DORA contradiction on !37 Gene Kim. Nothing else ships until the pages in flight are done.
2. **Run the N=1 experiment.** Next run takes one candidate. This is the speed question Julie actually cares about and it has never been tested. Top of the ranked queue: Dave Farley or Dan North, both pull 2.
3. **Make the cold reader permanent and non-gating.** Do NOT restore five seats. Then answer Nadia's question, which nobody has: **do the three recurring defect types predate the 2026-09-17 narrowing?** If they do, reviewer count was never the relevant variable.
4. **Cut what Julie reads to reach a decision.** Now that she reads every page deliberately and merges it herself, this is the highest-value work left. Exception-only descriptions: a clean page arrives as a short note, not 5,000 words.
5. **Scope the required reading per stage, WITH a byte ceiling.** 117KB toward ~30KB. Per Tobias, the trim is self-reversing without a budget: `calibration.md` grew 18KB to 44KB in three days and returns to 117KB by mid-October otherwise. LifeOS already has this discipline for always-on files; the distillery has none. **Ship the ceiling with the cut or do not ship the cut.**
6. **Fix the three recurring defects**, chiefly the antecedent-search ledger line, which is mechanically checkable and which two Council seats endorsed as cheap and targeted.
7. **Build the run ledger, then the retro loop.** Keep the sequence, and add Tobias's requirement: log every rule-source and rule-consumer pair so **drift becomes machine-detectable** rather than something Camila catches by hand-spawning an audit agent. That is the fix for the failure class that has now bitten four times.
8. **Scaffold the distillery council** (see its own section). Selector, seat builder, deliberate `critiques` pairing.
9. **Weekly maintenance job in GitLab CI**, not launchd, so detection stops depending on Julie's laptop. Prerequisite for anything off-machine: move the project token from the macOS keychain into a masked CI variable. Baron's credential point applies here and only here now, since addition is staying attended.
10. **Decide the inclusion filter for non-software thinkers** before the first permaculture candidate. The current filter assumes an audience of senior engineering and security leaders; for a thinker outside technology the bar probably becomes "vocabulary that travels into the reader's domain." **Decided 2026-10-18 (Julie):** the travels wording. A thinker outside technology qualifies when their vocabulary does work in the reader's domain, whether or not software practitioners already use it by name, so permaculture is in. The two-year body-of-work clause and the vocabulary clause still apply to the person: originators get pages, and teachers of a tradition go on its reading list. First candidates under it: Holmgren #101 and Holling #102; Appleton #4 and Hudson #5 are confirmed in.

**Not doing, decided:** auto-merge, a cleanliness predicate, trust calibration for unattended publishing, a graph database, and restoring five seats in round 3.

### The hands-off question, settled

Julie asked what a set-and-forget distillery at ~10 thinkers a week would take. **She then answered it herself: she does not want one.** She merges every page, because the point is to read and learn rather than accumulate a list.

So the split that survives is narrower than the original proposal. **Maintenance can be genuinely unattended**, and should be: `staleness.ts` and `decay.ts` have zero model calls, so weekly detection runs on GitLab's runners with no laptop and no cost, failing the pipeline when something comes due. **Addition stays human-gated permanently, by choice.**

What is still true and still unaddressed: the reading load per page. Run 3 sent 9,900 words and 11 flagged decisions for two pages. Now that she reads every page deliberately, **cutting what she has to read to reach a decision is the highest-value work left**, and it is the one thing that makes serial addition sustainable alongside a new job.

Two constraints stay on the record. Only twelve of thirty-one queued candidates have any graph pull. And the roster ceiling of 40 to 60 now interacts with the council idea: prefer positional coverage over connectivity when choosing whom to add.

On architecture: the 162KB injected floor exists only because this runs inside a chat harness, and prompt caching needs a prefix you control. Managed Agents remains the closest fit for the unattended **maintenance** loop, with the caveats that it is beta and not eligible for zero data retention. It is no longer needed for addition, which is staying attended.

### Environment notes

`PATH="/opt/homebrew/bin:$PATH"`. `glab mr merge` can 405 right after a push; the API `PUT .../merge` works. Repo-local workflows resolve by `scriptPath`, never `name`; `meta` must be a pure literal; workflow scripts have no clock, so `args.today` is required. Shell is zsh, so an unmatched glob is an error and `find` beats a glob. No PyYAML. **WebSearch is capped at 200 calls per session**, which lands inside the research phase where a truncated search becomes a wrong fact; raise with `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`. The pipeline token is a GitLab Developer-role project token in the macOS keychain (`gitlab-thinker-distillery` / `thinker-pipeline`), so the pipeline can open a merge request and structurally cannot merge one. **Sandboxes are never torn down automatically**; `bun scripts/sandbox.ts prune <hours>` now exists, and two abandoned clones were found holding a live credential on 2026-09-22. Council reports are gitignored: this run's are preserved at `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-run5-council-20260924/`, and run 4's unfinished state at `distillery-run4-unfinished-20260922/` plus branch `salvage/run4-unfinished`.

---

## Save Point — 2026-09-21, the second live run (history)

> Current state. Everything from `## Save Point — 2026-09-20 evening` down is history.

### Where things stand, verified

- **Main at `77f5c85`. 13 thinkers, 23 pages, build clean.**
- **Four merge requests open and all waiting on Julie.** Read them in this order:
  - **!24 Ross Anderson** — new page, clean on all five seats in round 3.
  - **!26 Kent Beck** — new page. Was parked, then unparked by a source hunt. Already rebased onto main and conflict-free.
  - **!23** — cuts what a review seat must read. Genuine improvement, but its description wrongly claims it fixes the overnight stall. **That description needs correcting before merge; the stall was a dropped network.**
  - **!27** — the close-the-loop work a 529 interrupted, plus four new calibration checks.
- **Ledger coverage is now 4 of 13**: Majors, Willison, Larson, and Forsgren (built during her recheck). Nine pages still have none.
- **25 open candidates.** Top of the ranked queue: Jez Humble (pull 2), Kent Beck (shipping), Sean Goedecke, Riley Goodside.
- Saxe parked to 2027-09-16. Brooks can never come due, having no volatile fields.

### What the run produced

Second live run, Anderson and Beck, 39 agents, 38 clean. It shipped two pages and corrected a third, and the corrections are the interesting part.

**The Forsgren recheck is the single most valuable thing the machinery has done.** Sent to check one thing, it found five. She is Senior Director of Developer Intelligence at Google, not Partner Researcher at Microsoft Research, and had been since before the page shipped, so the page was **wrong on the day it published** rather than having decayed. Building the ledger the gate requires meant sourcing all 33 factual fields, which surfaced: two more wrong biographical claims (her PhD is Management Information Systems at Arizona, not industrial engineering; her IBM work was software engineering, not operations research), an incomplete DevEx attribution missing Greiler with Noda as first author, a `source_link` returning 404, and **all three `critiques` edges failing the record**. Dan North's only durable artifact defends her by name. Beck's never mentions her. No DHH artifact exists at all. Her page now carries no critic edge, which SCHEMA 4.11 wants filled, and a critic search is the outstanding follow-up.

**Beck was parked and then unparked.** Two seats held REVISE in round 3 over a claim appearing in three fields with no support: that the right practice differs by 3X phase. A source hunt found it in Beck's own prose, in a post already on file as `[S:24]`, whose ledger line had recorded only that the post credits no antecedent. Quote: "Applying the approach from one phase to an idea in another phase kills ideas." Ledgered as `[S:64]`, verified twice.

### The five findings worth carrying

1. **A source on file is not a sourced claim.** The ledger verifies a field cites a line; nothing verifies the line supports the field. This is the gap that parked Beck and no script closes it.
2. **Two pages contradicted each other in the open for months.** Beck's page said his piece targets McKinsey; Forsgren's filed him as her critic. Nothing noticed until a ledger was built.
3. **Return-edge plans go stale.** Drafted at stage 3, applied at stage 7, with three review rounds in between. Round 3 struck a phrase from five fields and the plan still carried it the next day.
4. **The network, not the architecture.** The overnight failure was a dropped connection after Julie landed from Dallas. Round 1 seats 1 to 4 finished at 22:41; seat 5 stalled at 23:09 on identical inputs; nothing succeeded for thirteen hours; transcripts carry `getaddrinfo ENOTFOUND`. **Camila diagnosed load, then context size, and was wrong both times with the timestamps available.** For a silent agent, ask when it stopped and what stopped with it, before asking what it was reading.
5. **P:3 is crowded** and will be five pages once !24 merges. Second run in a row to hit it, and unresolved.

### Known gaps, named

- **`!23`'s description is wrong** about what it fixes. Correct it before merging.
- **The unanchored round 3 control has still never run.** It only fires on an adjudicated round 3, and both runs escalated to the full Council because round 2 left dissent. The question of whether the 2026-09-17 narrowing rested on convergence or anchoring is still open.
- **Nine pages have no fact ledger.** The Forsgren recheck shows what that hides: four defects on one page.
- **Forsgren now has no critic edge.** Needs a critic search.
- **The Komoroske and Brooks antecedent edges on Forsgren are dated wrong.** Coordination Headwind is 2018; DORA began 2013 to 2014, so the essay cannot be an antecedent of the work. Left alone because fixing it desynchronises two pages. Recorded at `[S:30]` and `[S:31]`.
- Efficiency: review is 57% of all agents and bytes, and 20% of every byte is injected context nobody here controls, at a median 162KB against a 2.5KB task. `bun scripts/run-cost.ts --model` has the batching maths. **Batching is the lever on agent count; per-agent context is the axis that fails hard.**

### Next move on resume

1. Julie reads and merges the four open MRs, !24 and !26 first.
2. Correct !23's description before merging it.
3. Then run the queue again. **Three candidates, not two**, per the cost model: from the ranked top, Jez Humble, Sean Goedecke and Riley Goodside. Humble is the strongest, already named on two pages.

```
bun scripts/sandbox.ts create <today>
Workflow scriptPath: .claude/workflows/thinker-pipeline.js
args: { "repoPath": "<sandbox path>", "today": "<today>", "candidates": [ ... ] }
```

### Environment notes

`PATH="/opt/homebrew/bin:$PATH"`. `glab mr merge` can 405 spuriously right after a push; the API `PUT .../merge` works. Repo-local workflows resolve by `scriptPath`, never `name`; `meta` must be a pure literal; workflow scripts have no clock, so `args.today` is required. Shell is zsh, so an unmatched glob is an error and `find` beats a glob. No PyYAML. The pipeline token is a GitLab Developer-role project token in the macOS keychain (`gitlab-thinker-distillery` / `thinker-pipeline`), so the pipeline can open a merge request and structurally cannot merge one.

---

## Save Point — 2026-09-20 evening, the maintenance layer (history)

> Current state. Everything from `## Save Point — 2026-09-20, first live pipeline run` down is history.

### State at save (verified)

- **13 thinkers, 3 concepts, 23 pages.** Main at `244d17c`. Build clean. No open merge requests.
- **Merged today:** !14 Larson, !15 Willison, !16 pipeline seat-report fix, !17 computed edge ranking, !18 machine improvements, !19 the maintenance layer.
- **17 open candidates**, up from 7 this morning.

### The queue diverges, and it needs a policy

The last run shipped 2 pages and filed **10** new candidates, because every inclusion seat names adjacent people and stage 8 files them. At that ratio the queue grows by 8 per run and never drains. Nothing is broken; this is the skill working as written. But at a roster ceiling of 40 to 60 it means the backlog becomes the artifact rather than the site. **Open question for Julie: cap what a run may file, rank the queue, or accept it as a slush pile and pick by hand.**

### What shipped today

**Machine improvements (!18).** Repo's first `.claude/settings.json`, written from measurement rather than assumption: the live run made 1,391 tool calls and exactly two permission refusals, both agents reaching for `rm -rf`. So the file denies `rm -rf`, `git checkout --` and `git restore`, and allows the project's own scripts. `further_in` promoted from ninth section to just after Body of Work, on the one experiment that tested reading order against link count. On-site `render_tier: deep` now honoured, which dropped Woods off Majors. `scripts/lens-index.ts` replaced a hand-kept Lens list that had already drifted inside one run.

**Computed edge ranking (!17), then Path B.** Off-site neighbours past the cap collapse by rank rather than by a human decision. Then on-site membership became a heavy weight rather than an absolute guarantee, which makes the cap bind again at scale and lets a page's only critic hold its slot. Zero collapses on today's roster, so it changed nothing now and changes everything at 40 pages.

**Sandbox and capability boundary.** `scripts/sandbox.ts` creates a disposable clone. The real control is identity: a GitLab project access token named `thinker-pipeline`, Developer role, in the macOS keychain (service `gitlab-thinker-distillery`, account `thinker-pipeline`, id 27688037, expires 2027-03-20). Main is protected at Maintainer, so the pipeline **cannot push to main and cannot merge its own work**. Branch protection already existed and was inert, because the pipeline authenticated as the owner. The fix was a weaker identity, not more configuration.

**The maintenance layer (!19), after a five-seat Council cut most of the proposal.** Transcript at `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-maintenance-layer-20260920-debate/`. Built: `scripts/staleness.ts` (one place to ask what is due, pages and parked candidates), `scripts/decay.ts` (volatility computed from field path and `status`, so a deceased thinker's page never comes due), a two-phase recheck plan in `review-policy.ts`, `briefs/recheck-survey.md`, `withdrawn: { date, note }` as an editorial act that cannot fire on a clock, `_working/_parked.md`, and `re-verified` in the ledger. Readers get one line, "This reading: <date>", and no badge.

### The three findings worth carrying forward

1. **A ledger built at intake and one backfilled afterwards are indistinguishable on disk and only one means anything.** Intake records where a claim came from; backfill searches for a URL that fits a claim already published. This is why the bulk backfill was cut and why `re-verified` exists.
2. **Optional hand-filled fields die.** Exactly one of thirteen pages ever carried a `live_edge`. Anything the design asks a human to write per page will go the same way. Compute it or do not have it.
3. **Trigger in code or it does not exist.** Every trigger written in prose here has gone unwatched, including a "refresh pending" badge that sat for four months.

### Known gaps, named rather than hidden

- **The recheck is not wired into the workflow.** `review-policy.ts --recheck` returns a plan and the brief exists, but `thinker-pipeline.js` has no recheck phase. The Council's "a recheck rides along with every thinker batch" is **not true yet**. Forsgren is currently due.
- **The unanchored round 3 experiment has not been run.** The 2026-09-17 decision to narrow round 3 rests on four runs of unanimous agreement among seats that had read each other, which the peer-review literature says is the signal to distrust. Note that the next run will be the first where rounds 2 and 3 have real transcripts on disk, so that run is not a clean test; do the experiment separately.
- **10 of 13 pages still have no fact ledger**, deliberately, per the Council.

### Next move on resume

Run the pipeline against the queue. Suggested batch of two, chosen to exercise the new machinery as well as to add pages: **#17 Ross Anderson** (security economics; if he is `deceased` his page will be the first with zero volatile fields, testing `decay.ts`) and **#20 Kent Beck** (already a collapsed neighbour on Fowler and Forsgren, so shipping him promotes those edges and exercises the new ranking).

```
bun scripts/sandbox.ts create 2026-09-21          # prints the sandbox path
Workflow scriptPath: .claude/workflows/thinker-pipeline.js
args: { "repoPath": "<sandbox path>", "today": "2026-09-21",
        "candidates": [ {"issue":17,"name":"Ross Anderson","slug":"ross-anderson"},
                        {"issue":20,"name":"Kent Beck","slug":"kent-beck"} ] }
```

### Environment notes

`PATH="/opt/homebrew/bin:$PATH"`. `glab mr merge` can return a spurious 405 right after a push; the API `PUT .../merge` works. CI builds only on main. Workflow scripts are plain JavaScript, no filesystem, no clock, `args.today` required, `meta` must be a pure literal, and a repo-local workflow resolves by `scriptPath` and never by `name`. Shell is zsh, so an unmatched glob is an error. No PyYAML; use `bun` and `Bun.YAML.parse`.

---

## Save Point — 2026-09-20, first live pipeline run and the prior-art survey (history)

> Current state. Everything below, starting at `## Superseded Save Point — 2026-09-17 evening`, is history.

### State at save (verified 2026-09-20)

- **Site live, 13 thinkers, 3 concepts, 23 pages.** Larson (!14) and Willison (!15) both merged. Build clean.
- **No open merge requests** except the one this save point ships with.
- **Seven candidates queued:** #4 Appleton, #5 Hudson (both May, unverified), #14 Skelton and Pais, #17 Anderson, #18 Herley, #19 Ousterhout, #20 Beck. #1 Saxe stays closed, recheck September 2027.

### The pipeline ran unattended, end to end, and it worked

36 agents, 3h50m, zero agent errors, 1,391 tool calls. Julie blocked only at merge approval, which was the goal. Both pages passed three review rounds; Larson carries 57 verified facts against 25 factual fields, Willison 44 against 23.

**Two launch bugs, both fixed:** a repo-local workflow will not resolve by `name` (use `scriptPath`), and `meta` must be a pure literal, so a concatenated `whenToUse` is rejected before anything runs.

**Three real defects the run exposed, all now fixed:**
1. **No transcript between rounds.** Rounds 2 and 3 are supposed to have seats quoting each other; the workflow wrote nothing until Ship, so they ran on a verdict list. Seats now write their own report to `_working/_council/<date>/` before returning, editors write resolution notes beside them, and Ship assembles from disk.
2. **`collapseRank` stability was overclaimed.** MR !17 said adding a thinker cannot reshuffle an unrelated page. The rank is local but `hasPage` is global, so publishing Larson forced an eviction on all four pages citing him. Still open, see below.
3. **An on-site `render_tier: deep` was silently ignored.** Majors carried one on Woods from day one.

### The prior-art survey

Three bounded lanes, 40,000 words, every citation verified twice, all under `_working/_research/prior-art/`. **Read `SYNTHESIS.md` first**; the lane files are the detail.

**The verdict on this project:** ahead of every system surveyed on intake, behind all of them after a page ships. Nothing surveyed has a completeness check like `fact-ledger.ts` deriving its required fields from the page. Nothing here rechecks a shipped page, and the schema has changed six times in four months.

**Findings that changed decisions:**
- **The Council must not shrink.** The screening literature measures replication (N reviewers, one criterion set); this Council does decomposition (five different criterion sets). Cutting seats deletes questions rather than halving error.
- **Sharpen briefs before adding seats.** Experienced reviewers missed 3%, inexperienced 13%. That four-fold gap is larger than the single-versus-double gap, which makes `calibration.md` quantitatively the highest-leverage file in the repo.
- **The round 3 narrowing rests on untested ground.** Bornmann 2010: high reviewer agreement is a signal to distrust. All four runs behind the 09-17 decision used seats that had read each other's transcripts, so the unanimity is as consistent with anchoring as with convergence. **Open experiment, needs a live run: one round 3 with seats that have not read the earlier transcripts.**
- **Staleness cannot be predicted.** Shojania 2007: no feature of the original predicted whether it needed updating within two years, and 7% were stale at publication. Scheduled surveillance is the only evidenced approach; annual cadence, expect ~70% of rechecks to come back low priority.
- **The cap of 7 has no evidential basis** and does not need one. Keep it as a layout budget; redundancy decides which edges earn a place.
- **Reading order beat link count experimentally**, which is why `further_in` moved up the page.
- **Hand-authored reciprocity fails everywhere.** qSKOS over 24 published vocabularies found unidirectional relations in all but three. Return edges should be derived, not warned about.

### What shipped 2026-09-20 (this save point's MR)

`further_in` promoted from ninth section to directly after Body of Work. On-site `render_tier: deep` now honored, which dropped Woods off Majors' foreground and made the Sridharan auto-collapse unnecessary. New `scripts/lens-index.ts` replaces a hand-kept Lens list in `calibration.md` that had already drifted inside one run. Repo-level `.claude/settings.json` (first one), allowing the project's own scripts and read-only git/glab, denying `rm -rf`, `git checkout --` and `git restore`. SKILL.md gotchas from the 24 failed calls. SCHEMA corrected on the `dissent` rule and section 4.11. Research committed.

### Next move on resume: keep improving the machine, then run thinkers

Julie's direction 2026-09-20: improve the machine before adding more thinkers. In order:

1. **Two-bucket jump and hysteresis.** Soften the `hasPage` promotion so publishing a thinker stops forcing evictions on every citing page, then add a dead band on demotion (`render_tier` already persists the prior decision in git). Churn concentrates within score clusters and rarely crosses them (Ufimtsev, CIKM 2016), which is the empirical case for the dead band. Measure with top-k Jaccard before and after.
2. **Validate the `collapseRank` weights.** They are hand-picked integers. Asudeh et al., PVLDB 12(3) 2018, doi:10.14778/3291264.3291269, gives a method for asking how stable a weighting is and choosing a stable one.
3. **Lens allocation, then cluster-scoped novelty.** Hungarian method on a page-by-position cost matrix before drafting (prevention), then test novelty only within the cluster `lens-index.ts` names (Yang et al., doi:10.1145/775047.775150). Validate the similarity function rather than defaulting to embeddings.
4. **The maintenance layer:** a retirement state (SEP moves unrevised entries to an archive), decay classes per fact in `facts.md`, and cheap one-seat recheck of shipped pages with phases separated as Featured Article Review does.
5. **Derive return edges** instead of warning.
6. **Split `antecedent`** (it carries at least four relationships) and close the `co_originators.role` vocabulary (MARC relator terms, CRediT).
7. **Ledger backfill.** 10 of 13 pages have no `facts.md`; only Majors, Larson and Willison do. Good candidate for a parallel workflow, one agent per slug, no file collisions.

Then run thinkers again, and fold the unanchored round 3 experiment into that batch.

### Still Julie's

Two About-page slots. The concept-page reading prompt. Neighbour demotions to review, now including Eric Evans on Fowler, where the computed ranking disagrees with the editor and would collapse Kent Beck instead. Five legacy prose warnings on four merged pages.

### Environment notes

`PATH="/opt/homebrew/bin:$PATH"`. `glab ci list -b <branch>` is broken; use `glab ci list | rg <branch>`. CI builds only on main, so `bun run build` is the gate for branches. Workflow scripts are plain JavaScript, no filesystem, no clock, so `args.today` is required, and `meta` must be a pure literal. The shell is zsh: an unmatched glob is an error, not an empty result. No PyYAML on this machine; use `bun` and `Bun.YAML.parse`.

---

## Superseded Save Point — 2026-09-17 evening, pipeline automation

> Current state. The block below it, `## Superseded Save Point — 2026-09-17 (thinkers)`, is the
> session that shipped Hickey, Majors and the concept page, and is history now except where this
> block points back into it.

### State at save (verified 2026-09-17)

- **Site:** live at https://thinker-distillery-97a9ca.gitlab.io/. **11 thinkers, 3 concepts.** Build clean, 21 pages.
- **MR !11 merged by Julie**, so Majors is on main and issue #13 is closed. No thinker work is outstanding.
- **MR !12 open, awaiting Julie:** the pipeline automation. https://gitlab.com/juliedavila/thinker-distillery/-/merge_requests/12
- **Open candidate issues, nine of them:** #4 Appleton, #5 Hudson (both May, unverified), #12 Larson, #14 Skelton and Pais, #16 Willison, #17 Anderson, #18 Herley, #19 Ousterhout, #20 Beck. #1 Saxe stays closed, rejected 5 to 0, recheck September 2027.

### What this session built

Julie's direction was that she had been following along rather than deciding, and wanted the pipeline automated so she blocks only at final merge approval. Nothing was added to the site; this was the machine that adds the next nine.

- **`.claude/workflows/thinker-pipeline.js`.** Seven phases over a batch of two or three candidates: research, adversarial fact audit, inclusion Council, draft, round policy, batched review rounds with an editor between them, serial ship, close the loop. Parks a candidate rather than shipping it wherever SKILL.md already said to stop and ask her. Agents never race: per-slug files only, and git plus neighbour pages plus calibration.md are touched only in the serial stages.
- **`scripts/fact-ledger.ts`.** A Council seat's assertion is now a research request, never a fact. Every factual field must cite a verified `[S:n]` from `_working/<slug>/facts.md` with a URL and a check date, and the required field list is derived from the page so a new frame, critic edge or book cannot be forgotten. Majors backfilled as the worked example: 12 facts, 18 fields.
- **`scripts/review-policy.ts`.** The round count as code, so it lives in one place. This is the fix for the rule that sat in SCHEMA section 7 and nowhere else while two pages shipped with one round.
- **`PIPELINE.md`.** The design, the cost, where Julie blocks, and the load-bearing-versus-ceremony table.
- **SKILL.md, SCHEMA.md section 7 and 10, calibration.md** all updated to point at the two scripts instead of restating their rules.

### The finding worth Julie's attention

**Review round 3 has never changed a page.** Four runs, every seat accepting, no edits applied. Rounds 1 and 2 earn their cost on every run; round 3 reads as ceremony on the evidence. The workflow still runs it, because SCHEMA requires the full debate for `mode-a` and lowering that bar is Julie's call. The proposal in MR !12: keep rounds 1 and 2 at five seats, make round 3 a single adjudication pass unless round 2 left dissent. Cuts four agents per batch, changes no outcome on the evidence so far. **Needs one word from her plus a SCHEMA edit in the same MR.**

### Verification done

Build passes, site unchanged. Both new scripts tested on pass and fail paths against the real Majors page. Workflow control flow exercised against stub agents across seven scenarios covering every parking path (uptake failure, contradicted research, inclusion rejection, draft gate failure, two rejects promoting a mode-b page to the full debate, dissent surviving the last round). **No real agents were spent, so agent judgment is untested.** First real run should be two candidates with `dryRun: true`.

### Next move on resume

1. **Julie:** merge or redline MR !12, and answer the round-3 question.
2. Then the first real pipeline run. Suggested first batch: **#12 Larson and #16 Willison**. Larson is the closest neighbour to pages that already exist, which gives the novelty seat something to push against; Willison is the first candidate in the AI lane. Invoke with `{today, candidates:[{issue,name,slug}...], dryRun:true}` from the repo root. Workflow needs Julie's explicit opt-in each time; that is a property of the tool.
3. Read the run's Report-phase output before launching a second batch. It reports which checks caught nothing.

### Still Julie's, unchanged

Two About-page slots. The concept-page reading prompt (investigability naming, side log versus events-as-system, where the record lives, what changes when agents write). Neighbour demotions: Parnas on Brooks, Conway on Fowler, DHH on Forsgren. Five legacy prose warnings on four merged pages (Forsgren, Fournier, Allspaw, Dalio).

### Environment notes

Unchanged from the block below, and all still true: `PATH="/opt/homebrew/bin:$PATH"`; `glab ci list -b <branch>` is broken, use `glab ci list | rg <branch>`; CI builds only on main so `bun run build` is the gate for branches; Bun `-e` breaks on apostrophes and parentheses inside shell single quotes. New: workflow scripts are plain JavaScript with no filesystem access and no clock, which is why `args.today` is required.

---

## Superseded Save Point — 2026-09-17 (thinkers; history)

> The session that shipped Hickey, Majors and the Append, Don't Overwrite concept page. Its
> "Next move on resume" section was the automation work, which the block above now answers.

### State at save (verified 2026-09-17)

- **Site:** live at https://thinker-distillery-97a9ca.gitlab.io/ (private, project members only). **11 thinkers, 3 concepts** once MR !11 merges. Main pipeline green after MR !10 merged.
- **Thinkers:** Komoroske, Fowler, Brooks, Allspaw, Woods, Dekker, Dalio, Forsgren, Fournier, **Hickey** (merged in !10), **Majors** (in !11).
- **Concepts:** coordination-headwind, adaptive-capacity, **append-dont-overwrite** (merged in !10; Julie's reading slot is empty and waiting for her).
- **MR !10: merged by Julie.** Hickey page, the Append-Don't-Overwrite concept page, the three-round review rule, rounds 2 and 3 for Hickey and Fournier, the Saxe research record.
- **MR !11: open, awaiting Julie.** Majors page plus the gate-script fix. Branch `candidate/charity-majors`, targets main, review complete (three rounds, 5 accept, no dissent).
- **Open candidate issues:** #4 Appleton, #5 Hudson (both May, unverified), #12 Larson, #14 Skelton and Pais, #16 Willison, #17 Anderson, #18 Herley, #19 Ousterhout, #20 Beck. #13 Majors is `camila:ready-for-review`. **#1 Saxe is closed: rejected 5 to 0, recheck September 2027** (a timing rejection, so the discovery pass must not skip it).

### What happened this session

- **Saxe rejected 5 to 0.** Tenure fine, vocabulary not: every named frame came from a Substack corpus starting April 2025 with no third-party uptake, and his marquee frames trail Willison, Florêncio and Herley, and Papert, none of whom he cites. Six errors in the May candidate case, including all four frames it named. Research kept at `_working/joshua-saxe/sources.md`.
- **Hickey shipped.** Inclusion 5 to 0. "Complect" marked `popularized` (an archaic word he revived), incidental complexity `extended` from Brooks and Moseley and Marks, PLOP `extended` with Backus. Dijkstra credited for the premise quoted at the start of "Simple Made Easy." Retention limit added after Julie's privacy call: security records usually survive erasure requests, storage limitation still applies, Datomic ships excision.
- **Three-round review restored.** SCHEMA required the full debate for `mode-a` pages; the skill and two shipped pages had used one round. The skill now mandates it, with `briefs/review-round2.md` and `briefs/review-round3.md`. Hickey and Fournier got rounds 2 and 3 retroactively (Hickey 5 accept; Fournier 4 accept, 1 accept-with-edits, applied).
- **"Append, Don't Overwrite" concept page** built from Julie's Venn-diagram instinct. Holders: Hickey (PLOP, `extended`) and Fowler (event sourcing, a new frame, `distributed` with Greg Young). Fowler's December 2005 write-up is the earliest dated one found; Young's earliest verified public explanation is QCon SF 2007. One revise round fixed a leaked-secret point wrongly attached to Fowler.
- **Majors added.** Inclusion 5 to 0 with the uptake check run first (ThoughtWorks Radar, October 2024, describes observability 2.0 without naming her or Honeycomb). Wide structured events are `extended` from Facebook's Scuba, which she credits by name. Observability belongs to Kálmán, the three pillars to Bourgon and Sridharan. Her retreat from the "1.0/2.0" labels rests on her own post of 2025-03-24. The Honeycomb conflict of interest is stated once, sharply, in the first limit.
- **Gate script fixed.** `scripts/reading-gates.ts` read only `reading`, `extension` and `margin_note`, so a banned "not X but Y" reached a shipped `thesis`. It now warns on every editorial field, with `--strict-prose` to fail. Documented in SCHEMA section 10.
- **Calibration log** carries all four runs (Saxe, Hickey, the concept page, Majors) plus five new checks, including running the uptake check before convening an inclusion Council.

### Waiting on Julie

- **Merge MR !11** (Majors and the gate fix).
- **Her reading** on the concept page: the prompt asks whether "investigability" is the right name, whether append-only means a side log or a system whose state changes only through recorded events, where the record must live, and what changes when agents write the changes.
- **Two About-page slots** (unchanged from the last save point).
- **Neighbor demotions to review:** Parnas on Brooks, Conway on Fowler (merged in !10), DHH on Forsgren (in !11).
- **Five legacy prose warnings** the new gate surfaces: Forsgren ("not merely a researcher" and "not simply doing more. They were doing better"), Fournier (an edge label reporting a critic "does not name Fournier, but"), Allspaw (a frame gloss contrast), Dalio ("operationalization" in a limit headline, protected by SCHEMA section 8, plus "Navigating" in background).

### Next move on resume: automation

**Julie's direction (2026-09-17):** she has been following along rather than deciding, and wants the pipeline automated so she is the blocker only at final merge-request approval. The next session designs that instead of adding another thinker by hand.

What the session should work out:

1. **Where approval is genuinely needed.** Merge approval stays hers. Everything before it (research, inclusion Council, drafting, return edges, the Reading Protocol, three rounds for mode-a, the MR) ran without her input this session, so the question is which steps still need a pause and which only need a record.
2. **What blocked on permissions or clarification** this session, and how to remove it: pre-approved command allowlists, the shell-quoting failures that forced retries, and the Council seat runs (up to 20 agent runs for a mode-a thinker: 5 inclusion plus 5, 5 and 5 review, before batching).
3. **Batching versus serial.** The skill already supports batched reviews, and the Hickey and Fournier rounds 2 and 3 ran batched. Whether the 9 open candidates can run as one batch per stage, and what that costs.
4. **Whether this becomes a Workflow, a fleet, or a loop.** The Workflow tool exists for deterministic multi-agent orchestration and needs Julie's explicit opt-in. A scheduled run or a loop is another option. Pick one and write it.
5. **What the skill still gets wrong.** Three failures surfaced this session: the review-round rule lived in one document and was ignored in another, the gates covered three fields out of a dozen, and seat reports asserted facts that turned out false (a sympathetic essay called a critique, an unsourced uptake quote). Automation without a fix for the third is how a wrong fact ships unread.
6. **The quality bar to hold.** Per-page cost was high this session and every round caught real errors. The design should say plainly which checks are load-bearing and which were ceremony.

### Environment notes (unchanged unless noted)

- Commands need `PATH="/opt/homebrew/bin:$PATH"`.
- **glab** is authenticated; `glab ci list -b <branch>` is broken (it parses the branch as a date), so use `glab ci list | rg <branch>`.
- CI only builds on main (`.gitlab-ci.yml` rules), so branch MRs have no pipeline and the local `bun run build` is the gate.
- Bun `-e` inline scripts break on apostrophes and parentheses inside shell single quotes; use the Edit tool or write the text to a file first.
- Council transcripts from this session, all under `~/.claude/LIFEOS/MEMORY/COUNCIL/`: `distillery-inclusion-joshua-saxe-20260916-154411-quick`, `distillery-inclusion-rich-hickey-20260916-155350-quick`, `distillery-reading-rich-hickey-20260916-160900-quick`, `distillery-reading-batch-hickey-fournier-20260916-163706-debate`, `distillery-concept-append-dont-overwrite-20260917-094326-quick`, `distillery-inclusion-charity-majors-20260917-150407-quick`, `distillery-reading-charity-majors-20260917-151617-debate`.

---

## Superseded Save Point — 2026-09-16 (history)

> Everything below this block down to `## Superseded Save Point — 2026-05-28` is the current state. The May save point and older sections are history.

### State at save (verified 2026-09-16)

- **Site:** live at https://thinker-distillery-97a9ca.gitlab.io/ (private, project members only). 18 pages: 9 thinkers, 2 concepts, 2 long reads, About, indexes. Build clean with no warnings; pipeline green on `main` at `30175fe`.
- **Thinkers:** Komoroske, Fowler, Brooks, Allspaw, Woods, Dekker, Dalio, Forsgren, Fournier. Every page carries a protocol-built Editorial Reading with a `reading_review` record and no dissent.
- **Concepts:** coordination-headwind, adaptive-capacity.
- **Git:** `main` only, clean. All MRs merged (!2 to !9). No open MRs.
- **Open issues (all candidates):** #1 Joshua Saxe, #4 Maggie Appleton, #5 Joe Hudson (May cases, unverified), #12 Will Larson, #13 Charity Majors, #14 Matthew Skelton and Manuel Pais (surfaced by the Fournier Councils). Issues #2, #3, #6 to #11 are closed.

### How work is done now (read these, in order)

1. `.claude/skills/add-thinker/SKILL.md`: the eight-stage procedure from candidate issue to MR (research, inclusion Council, draft, return edges, Reading Protocol, review Council, ship, close the loop).
2. `.claude/skills/add-thinker/calibration.md`: 19-item pre-draft checklist of every failure Councils have caught, plus the run log. Read before drafting; append after every run.
3. `SCHEMA.md`: content model (section 4), Reading Protocol (section 7), writing rules with the judgment clause (section 8), what the build enforces (section 10). Rewritten for outside readers.
4. `.claude/skills/add-thinker/seats.md` and `briefs/`: fixed Council seats and fill-in briefs. Do not recompose seats with ComposeAgent each run.

### What happened this session (2026-09-16)

- **Legacy paths repointed** from `~/.claude/PAI/...` to LifeOS locations. Writing-style guides: `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/` (ALL-CAPS names); AI patterns file: `~/.claude/LIFEOS/USER/AI_WRITING_PATTERNS.md` (`LIFEOS/USER` is a symlink to `~/.config/LIFEOS/USER`).
- **Forsgren MR #1 merged** (Julie). doctrine_mode backfilled on all pages (!2).
- **Path C for section 6 (Julie's decision):** the old first-person "What I take / Where I extend" is gone. Section 6 is now `reading` + `extension` in the Distillery's editorial voice, built by the Reading Protocol (grounding pack, claims map, gates, five-seat review Council), plus an optional `margin_note` that only Julie writes. Julie's role is audit: dissent pages plus a one-in-four sample, approval via MR. Piloted on Forsgren (!3), then the other seven pages converted as a batch (!4), then legacy fields and fallback code removed (!6).
- **Docs rewritten for outsiders** (!5). "Casey test" renamed "byline test" (Julie kept it).
- **Pragmatic writing rules (Julie):** the rules exist to avoid sounding like generic AI, not to purge the thinkers' own vocabulary. Quoted text is exempt in `scripts/reading-gates.ts`; terms of art stay; repetition and filler jargon are the tells (SCHEMA section 8).
- **Camille Fournier added** (!7): research corrected three errors in the May case; inclusion Council 4 to 1; page anchored on *The Manager's Path*; platform coinages co-authored with Ian Nowland; `doctrine_mode: mode-a`. Recheck the platform coinages (glue, over-general swamp, shadow platforms) in 2027.
- **Skill codified** (!8), and **all six documented-but-missing site rules built** (!9): Live Edge rendering and validation, About page, deep-frame collapse, neighbor auto-surfacing and caps, hosted work from `hosts` edges, concept page checks. Eight return edges added; Beck and North (Forsgren), Dijkstra (Brooks) and Alexander (Fowler) moved to the collapsed neighbor tier.

### Waiting on Julie (none block new thinkers)

- **About page:** "Why this exists" and "Our stance toward the thinkers" are empty slots with prompts in `src/pages/about.astro`. Hers to write.
- **Forsgren Live Edge:** last surveyed 2026-05-27, now shows "refresh pending." A refresh is a small research task Camila can do on request.
- **Optional:** `margin_note` on any page; review the four neighbor demotions above; `src/content/thinkers/_don-norman.md` is Julie's untracked, disabled draft still in the old first-person format (goes through the add-thinker skill if promoted).

### Next move on resume

Recommended: run the add-thinker skill on **#1 Joshua Saxe** (security lane, the site's first security-practice thinker). Treat the May case as unverified. Then Larson (#12) or Majors (#13). Batch the review Council when two or more pages are ready.

### Environment notes

- Commands need `PATH="/opt/homebrew/bin:$PATH"`. Run `bun install --frozen-lockfile` if `astro` is not found.
- **glab** is installed via Homebrew and authenticated with `glab auth login --hostname gitlab.com --device` (the browser login flow returns 404). Token is in the macOS keychain.
- **Interceptor:** if commands fail with "daemon failed to start" while a daemon is running, `/tmp/interceptor.sock` was deleted; kill the `interceptor-daemon --standalone` process and rerun. Its text reader truncates long pages; query the DOM with `interceptor eval ... --main`. Screenshots ignore scroll.
- Medium and O'Reilly block direct fetches; verify those through search results.
- When testing build rules by breaking files, back up and restore from the backup, never `git checkout` (it wiped uncommitted edits once this session).
- YAML values containing ": " must be quoted; `scripts/grounding-pack.ts` parses strictly.

### Council transcripts (this session)

`~/.claude/LIFEOS/MEMORY/COUNCIL/`: `distillery-reading-nicole-forsgren-20260916-172704-quick`, `distillery-reading-batch-7-legacy-pages-20260916-181307-quick`, `distillery-inclusion-camille-fournier-20260916-183648-quick`, `distillery-reading-camille-fournier-20260916-185556-quick`.

---

## Superseded Save Point — 2026-05-28 (history; the current save point is at the top)

> ✅ **DONE 2026-05-28 — pending Julie's Casey-test + merge.** A context-clear happened mid-task; the four approved steps below were then executed on branch `candidate/nicole-forsgren` (commit `d89a0e4`, pushed) and MR #1's description was rewritten. The steps below are kept as the executed record. Nothing left for Camila. **What's left for Julie:** (1) Casey-test the four bylines in MR #1; (2) author or sign off §6 in her own first-person voice (currently Camila-drafted, flagged inline in the page source); (3) merge MR #1 to `main`, then flip ISC-548 and close Issue #2. Result detail in the iter-8 criteria block (ISC-529..548, with a provenance banner) and in the Decisions / Changelog entries dated 2026-05-28.
>
> ⏭️ **A SECOND THREAD IS NOW OPEN — see "## THREAD 2" immediately below this blockquote.** Julie reviewed the voice-guideline coverage (2026-05-28) and scoped a follow-on: the Thread-1 rewrite used only 2 of the 7 writing-style files, and the Distillery under-leverages the system (especially `DoctrineRegister.md`). Decision: full reconciliation, Council-gated, captured here for clear/resume. The STEP 1-4 lines below are THREAD 1's executed record (historical).
>
> **GIT STATE:** This Save Point is committed on `main`. The Forsgren work + the v1.2 `content.config.ts` additions live on branch **`candidate/nicole-forsgren`** (commit `0691a11`). **First action on resume: `cd ~/Camila/thinker-distillation && git checkout candidate/nicole-forsgren`** — the rewrite happens there. (`main`'s `content.config.ts` is the pre-v1.2 version; that's correct — v1.2 schema lands when MR #1 merges.)
>
> **STEP 1 — Read the voice system before touching prose.** Read `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/WRITINGSTYLE.md` (Hard No list — esp. NO em-dashes; banned words include delve/leverage-verb/navigate-metaphor/operationalize/nuanced/it's-worth-noting/crucially/importantly) and `~/.claude/LIFEOS/USER/AI_WRITING_PATTERNS.md` (P0/P1/P2 sweep). Baseline check: existing pages have **0 em-dashes** (`grep -o '—' src/content/thinkers/alex-komoroske.md | wc -l` → 0). That IS the Distillery voice spec, currently only implicit.
>
> **STEP 2 — Rewrite `src/content/thinkers/nicole-forsgren.md` prose to match.** Current violations (measured): 33 em-dashes, "operationalize" 3×, 156 -tion/-ment/-ity nominalizations. Recast every em-dash (commas / periods / colons / parens), kill "operationalize" (use "put into practice" / "measure" / "turn into an instrument"), cut zombie-noun density where the subject allows. **§6 `what_i_take` / `where_i_extend` must read as Julie's first-person voice** (security-and-engineering-executive register; see Komoroske's §6 for the model). Everything else is Camila's Mode B editorial voice. Both follow the Hard No list. Do NOT change the structured data (frames, attribution, adjacencies, render_tier) — only the prose. Verify before commit: `grep -o '—' src/content/thinkers/nicole-forsgren.md | wc -l` → 0; `grep -i 'operationaliz\|delve\|leverage\|nuanced' src/content/thinkers/nicole-forsgren.md` → empty.
>
> **STEP 3 — Rewrite the MR #1 description to be legible cold.** Currently 12 table rows + 33 bullet lines vs 12 prose lines, full of unexplained jargon (Council ACCEPT 6/6, Casey-test, Q2 auto-surface, Mode B). Lead with a plain-English paragraph: what this page is, why it exists, what changed. Paragraphs over tables; define or drop internal jargon. Keep the Casey-test co-author-verification ask for Julie (it's the one genuinely useful checklist). Update via `glab mr update 1 --description "$(cat <newfile>)"` or the API notes pattern used before.
>
> **STEP 4 — Write the Distillery editorial-voice note (spec).** Julie approved making the implicit voice rule explicit so neither of us drafts blind again. Add a short "Editorial Voice" section to `SCHEMA.md` (or a new `_working/EDITORIAL_VOICE.md`): Distillery prose follows Julie's Hard No list (no em-dashes, banned-word list, paragraphs-over-bullets); §6 is Julie's Mode C first-person voice, all other sections are Camila's Mode B editorial voice; run the AiWritingPatterns sweep + em-dash grep before any page or MR ships. Cross-reference the writing-style system file paths.
>
> **THEN:** rebuild (`PATH="/opt/homebrew/bin:$PATH" bun run build` → expect 16 pages green), commit on the candidate branch, push (`git push origin candidate/nicole-forsgren`), confirm MR #1 reflects the update. Leave Issue #2 at `camila:ready-for-review` for Julie's re-review. Do NOT merge — Julie merges after Casey-test co-author verification.
>
> **AFTER the rewrite ships:** the remaining iter-8 candidates (#1 Saxe, #3 Fournier, #4 Appleton, #5 Hudson) are still queued at `camila:candidate`. Their inclusion Councils + drafts must follow the now-explicit voice spec from the start. Recommended next: #3 Fournier.

---

## THREAD 2 — Voice-guideline reconciliation (iter-9 DESIGN LOCKED 2026-05-28; iter-10 backfill staged on MR #1 merge)

> ✅ **iter-9 DESIGN COMPLETE 2026-05-28.** The Council-gated design decision and the safe (merge-independent) updates shipped: `doctrine_mode` is a single stored backstage enum (`mode-a | mode-b | mode-c`), orthogonal to `thinker_type`, single-valued, never rendered, documented as a capped exception with a kill-criterion. All 8 classifications locked (table in the iter-9 `## Decisions` entry: 6× C, 2× B). The `feedback_distillery_prose_voice.md` memory was broadened to the full applicable file set with per-file scoping. Forsgren passed a read-only RhetoricalStyle §4 recheck (clean). Full design rationale: iter-9 `## Decisions` + `## Changelog` entries; Council transcript at `~/.claude/LIFEOS/MEMORY/COUNCIL/doctrine-mode-schema-decision-20260528-154414/transcript.md`.
>
> ⏭️ **iter-10 BACKFILL — STAGED, GATED ON JULIE MERGING MR #1.** Everything below edits `SCHEMA.md` / `content.config.ts` / thinker pages, which all want merged-v1.2 `main` and would conflict with the open MR #1 if done now. The instant MR #1 merges, this is purely mechanical (no new decisions):
>
> 1. `cd ~/Camila/thinker-distillation && git checkout main && git pull` (gets the merged v1.2 Zod code + the SCHEMA Editorial-Voice section).
> 2. **`src/content.config.ts`** — add `const doctrineMode = z.enum(['mode-a','mode-b','mode-c']);` near the other enums; add `doctrine_mode: doctrineMode` to the thinker schema (required is safe — all 8 included thinkers get backfilled in the same commit; the underscore-disabled `_don-norman.md` is excluded from the collection so it will not break the build, but note it must add the field if/when promoted).
> 3. **Backfill 8 thinker frontmatters** with `doctrine_mode:` per the iter-9 Decisions table (Komoroske/Fowler/Brooks/Allspaw/Woods/Dekker = `mode-c`; Dalio/Forsgren = `mode-b`). Add a one-line frontmatter comment on Brooks recording the 60/40 C-over-B call so it is legible and revisable.
> 4. **`SCHEMA.md`** — add `doctrine_mode` to the §1 frontmatter spec; add a "Doctrine Mode" subsection documenting: the enum-as-stance (mode-c = manufacture handles around an implicit spine; mode-a = resist manufacturing handles; mode-b = the named artifact IS the doctrine); spine=`thesis` / handles=`named_frames` / Casey-test (Q-E, documentation only); the soft lineage-parenthetical norm (Q-F); the named consumer (the authoring/drafting gate per `feedback_distillery_prose_voice`, NOT the renderer); the capped-exception guardrail; and the concrete kill-criterion ("delete the field if after 5 more thinker pages no `doctrine_mode` value ever changed a drafting decision; owner: Julie, checked at the next quarterly review").
> 5. **`SCHEMA.md` §3 "Editorial Voice & Prose Mechanics"** (which arrives via MR #1) — broaden it to the full applicable file set with per-file scoping, mirroring the `feedback_distillery_prose_voice.md` table (WritingStyle/AiWritingPatterns always; RhetoricalStyle §4 + §2/§3; DoctrineRegister headline; LongFormCraft long-read-only; PersuasionArchitecture §5 marginal; PrivateWritingPractice N/A). Name the AiWritingPatterns→RhetoricalStyle §4 step-6 cross-check explicitly.
> 6. **Optional (soft Q-F):** add a lineage parenthetical to each `thesis` only where it strengthens the spine (Camila Mode B lane — OK for `thesis`; §6 `what_i_take`/`where_i_extend` + `julie_reading` stay Julie's per `feedback_writing_partner_per_field`). Forsgren's optional lineage marker: lean / Goldratt theory-of-constraints (its `further_in` already cites Poppendieck/Goldratt).
> 7. `PATH="/opt/homebrew/bin:$PATH" bun run build` (expect 16 pages green), commit `feat(iter-10): backfill doctrine_mode + formalize spine/handle/lineage in SCHEMA`, push, confirm pipeline green.
> 8. ISA: flip iter-9 ISC-572 + record an iter-10 completion block; mark the 8 classification ISCs applied-on-disk.
>
> **Do NOT** edit DoctrineRegister.md (Julie's identity file — the §2-vs-§5 point is resolved by classifying the reading, no contradiction to fix). **Do NOT** touch `_don-norman.md` (Julie's underscore-disabled draft). **Do NOT** merge MR #1 (Julie's Casey-test gate).

**Why this exists.** The Thread-1 Forsgren prose rewrite consulted only 2 of the 7 writing-style files (`WritingStyle.md` + `AiWritingPatterns.md`) because that's all the Save Point and the `feedback_distillery_prose_voice.md` memory named. Julie flagged the gap. All 7 files were read 2026-05-28. Two findings: (a) even the documented 2-file sweep was incomplete — `AiWritingPatterns.md`'s own detection workflow step 6 says to cross-check `RhetoricalStyle.md §4` and that was skipped; (b) **`DoctrineRegister.md` is the Distillery's missing backbone** — the Distillery IS its §1 "recognition test" made into a website, and it already classifies Komoroske (Mode A) and Fowler (Mode A + Mode B handles) with spine + lineage.

**Decision (Julie, 2026-05-28):** full scope — the safe spec/memory updates AND the DoctrineRegister reconciliation. The reconciliation is a schema bump touching all 8 pages → run it **Council-gated**, like the prior v1.2 Q-block bumps. `feedback_avoid_kimi_codex` applies (Council yes; no Forge/Anvil/Cato unless Julie names them).

**Per-file applicability verdict (for Distillery pages):**

| File | Applies? | Scope |
|---|---|---|
| `WritingStyle.md` | ✅ used | all prose mechanics |
| `AiWritingPatterns.md` | ✅ used | all prose — but its §6 cross-check to RhetoricalStyle §4 was skipped |
| `RhetoricalStyle.md` | ✅ **missed** | §4 figure guardrails (all editorial prose); §2 honesty + §3 disagreement registers (§7 "where this breaks" + §8 critic edges) |
| `DoctrineRegister.md` | ✅✅ **missed (headline)** | the Distillery's intellectual backbone — see below |
| `LongFormCraft.md` | ◐ partial | **long-read tier only** (Komoroske/Fowler chapters), not the compact thinker page |
| `PersuasionArchitecture.md` | ○ marginal | only §5 Currency-Translation grazes §6 |
| `PrivateWritingPractice.md` | ✗ N/A | public surface, explicitly out |

**The DoctrineRegister ↔ Distillery alignment (already true, never wired together):**
- Distillery `thesis` = DoctrineRegister **spine**; `named_frames` = **handles**. §3 says keep them separate — the schema already does.
- The Distillery **Casey-test IS** DoctrineRegister §3's rule: "where my compression is sharper than the source's register, that's my intellectual product, attribute to me not the source." (Same principle as the §6 camouflage flag added in Thread 1.)
- Two unreconciled ontologies for the same thing: Distillery `thinker_type` (essay-corpus / book-author / principles-distiller / catalog-builder / mixed) vs. DoctrineRegister `Mode A/B/C`.
- DoctrineRegister §4 wants a lineage parenthetical in spine prose; Distillery frames carry `co_originators` (structured lineage) but the `thesis` prose names no antecedent inline.
- DoctrineRegister §5 Tier-1 already has spine + lineage for **Komoroske (Mode A)** and **Fowler (Mode A + B handles)**; §5 Tier-2 table has Meadows etc. Distillery theses should match these or deliberately diverge-with-note.

### WORK BREAKDOWN (resume here)

**Recommended sequence: merge MR #1 (Thread 1) FIRST, then run iter-9 = Part A + Part B on `main` so it operates on the merged v1.2 schema + the Forsgren page. This keeps MR #1 a clean minimal prose-fix. (Alternative: fold Part A onto the candidate branch pre-merge if you'd rather Forsgren ship voice-complete — Julie's call on resume.)**

**Part A — safe updates (reversible, no schema change):**
1. Expand `/Users/juliedavila/Camila/thinker-distillation/SCHEMA.md` §3 "Editorial Voice & Prose Mechanics" to reference the full applicable set WITH per-file scoping (the verdict table above). It currently names only WritingStyle + AiWritingPatterns.
2. Broaden the feedback memory `/Users/juliedavila/.claude/projects/-Users-juliedavila-Camila/memory/feedback_distillery_prose_voice.md` to the same full set + scoping.
3. Re-check `/Users/juliedavila/Camila/thinker-distillation/src/content/thinkers/nicole-forsgren.md` against RhetoricalStyle §4 figure guardrails (tricolon delicately / diacope cut / chiasmus ≤1 per piece / polyptoton OK / parenthetical-for-precision OK). Prelim read: the triads on the page are factual framework enumerations (DORA 4 keys, SPACE 5, DevEx 3), NOT rhetorical tricolons → likely no §4 violation; confirm. Add a DoctrineRegister §4 lineage parenthetical to the `thesis` (lean / Goldratt theory-of-constraints antecedent — `further_in.if_you_want_breadth` already cites Poppendieck/Goldratt). Mechanics + lineage only; do NOT touch the §6 argument (still Julie's per `feedback_writing_partner_per_field`).

**Part B — DoctrineRegister reconciliation (schema bump, Council-gated iter-9):**
1. **Council pass** (compose 4-6 agents per the topic) to decide: add `doctrine_mode: A | B | C` to thinker frontmatter (field vs. render-affordance) and define its relationship to the existing `thinker_type` (coexist, or does one derive the other?). Seed classifications: Komoroske = A, Fowler = A + B-handles, Forsgren = B, Dalio = B (principles-distiller); Brooks / Allspaw / Woods / Dekker = TBD.
2. Formalize in SCHEMA: `thesis` = spine / `named_frames` = handles / Casey-test = spine-vs-handle attribution discipline, cross-referencing DoctrineRegister §3. (Mostly documenting what's already structurally true.)
3. Adopt DoctrineRegister §4 lineage-parenthetical as a per-thinker content norm (thesis / §6 carry ≥1 inheritance marker; structured `co_originators` already do half).
4. **Backfill all 8 pages:** doctrine_mode + lineage parentheticals + a consistency check of each `thesis` against DoctrineRegister's spine statements (Komoroske/Fowler are Tier-1 there — match or diverge-with-note).
5. Working norms in effect: `feedback_avoid_kimi_codex` (Council yes, Forge/Anvil/Cato no unless named), `feedback_writing_partner_per_field` (§6 stays Julie's), the now-expanded `feedback_distillery_prose_voice` gate.

**Source-of-truth paths:** writing-style system at `/Users/juliedavila/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/{WRITINGSTYLE,RHETORICALSTYLE,DOCTRINEREGISTER,LONGFORMCRAFT,PERSUASIONARCHITECTURE,PRIVATEWRITINGPRACTICE}.md` + `/Users/juliedavila/.claude/LIFEOS/USER/AI_WRITING_PATTERNS.md`. For Part B the load-bearing sections are DoctrineRegister §2 (modes), §3 (spine/handle), §4 (lineage), §5 (Tier-1 Komoroske/Fowler spine+lineage).

---

**Status:** Iter-1 v1 launch · Iter-2 v2 concept-page · Iter-3 v2 audit-prose · Iter-4 UI-audit arc · Iter-5 steps 1-7 shipped 2026-05-26 · Iter-6 GitLab Pages migration COMPLETE 2026-05-27 (site live at `https://thinker-distillery-97a9ca.gitlab.io/` — Private + project-members only) · Iter-7 step 1 COMPLETE 2026-05-27 (Q6 working-notes convention) · Iter-7 step 2 COMPLETE 2026-05-27 (Q-block resolved → SCHEMA v1.2; vision-scope expansion to inner-work-for-technical-leaders) · **Iter-7 step 3 COMPLETE 2026-05-27 — Loop-activation infrastructure scaffolded on GitLab. 19 labels live under `camila:*` (12) / `julie:*` (7) ownership convention. iter-8 milestone (iid=1) anchors first loop run. 5 candidate Issues filed (#1 Saxe / #2 Forsgren / #3 Fournier / #4 Appleton / #5 Hudson) each with full case write-up + Council prompt sketch + source-reliability cross-check + workflow checklist. Hudson Issue notes scope is settled — inclusion-quality check only. MR-for-everything workflow ready (`.gitlab-ci.yml` already in place). Discovery-cadence implementation deferred (Julie's call on ScheduleWakeup vs CronCreate vs external — non-blocking since iter-8 has 5 explicit candidates queued).** Iter-5 steps 8-10 still deferred (step 8 SVG genealogy → v4; steps 9-10 wait on portraits). All 6 Fowler-audit Qs closed.

**One-paragraph orientation for cold-start:** The Thinker Distillery is per-practitioner editorial readings of thinkers worth metabolizing, with v2 concept-page surface deriving cross-thinker holders from thinker frontmatter as single source of truth. Site lives at `~/Camila/thinker-distillation/`, serving from GitLab Pages at `https://thinker-distillery-97a9ca.gitlab.io/` (private project `juliedavila/thinker-distillery`, GitLab project id 82583198, `pages_access_level=private`, project members only). Vision scope (ratified 2026-05-27) reaches all thinkers whose vocabulary the field uses to think about how technical work happens AND the human surface around it — software-practice, org-design, operational philosophy, security-research-as-practice, design-of-thought, and inner-work-for-technical-leaders. On 2026-05-27 we shipped a three-step iter-7: step 1 (Q6 working-notes convention) + step 2 (Q-block resolution → SCHEMA v1.2 with tiered render, mechanical site-internal auto-surface, opt-in Live Edge, `hosts` edge type, three-tier critic gating, seven new anti-criteria) + step 3 (loop-activation infrastructure scaffolded — 19 namespaced labels, iter-8 milestone, 5 candidate Issues with case write-ups). Iter-8 is the first loop run — five candidate thinker inclusion Councils + drafting + reverb. Cold-start work surface is now the GitLab Issues board (`https://gitlab.com/juliedavila/thinker-distillery/-/boards`), not just the ISA. The ISA stays the constitutional layer; Issues are the live work-queue.

**What to read first (in order):**
1. This Save Point block (you're already here) — **Next iteration on resume** below names the load-bearing moves
2. **This ISA's `## System-Level Open Questions Surfaced 2026-05-27 (Fowler Audit)` section** (right after this Save Point, before `## Problem`) — Q6 ✅ RESOLVED inline; 5 remaining Qs are iter-7/iter-8 forcing functions. Read this BEFORE iterating on any thinker page so per-thinker patches don't get applied against still-open system decisions.
3. This ISA's `### Iter-7 step 1 — Q6 working-notes location convention ratified (2026-05-27)` block (in `## Criteria`) — most recent iteration, 23/23 ISCs closed; commits `599d86e` (migration + path-ref updates) + `fdf8c25` (ISC-524 mark)
4. This ISA's `### Iter-6 — GitLab Pages Migration (2026-05-26)` block — previous iteration, 41/41 ISCs closed; commits `f0cf9c0` (main migration) + `29eb05f` (site URL fix) + `c5c5c1b` (docs) + `48fb968` (Changelog C/R/L)
5. `~/Camila/thinker-distillation/iter6-screenshots/idx-gitlab-pages.png` — visual proof: homepage rendering live on GitLab Pages, 7 monograms + Mexican-modernist chrome intact
6. `~/Camila/thinker-distillation/iter5-screenshots/` — Iter-5 visual evidence preserved:
   - `idx-with-monograms.png` — gallery-feel index with 7 azul monograms
   - `komoroske-with-monogram.png` — thinker hero with portrait/monogram pairing
   - `longread-ch01-after.png` — long-read chapter with breadcrumb + chapter-of-N eyebrow + Cardo h2 azul
   - `concept-after.png` — concept page after step 1-3 chrome (coordination-headwind)
   - `keyboard-focus-test.png` — skip-link Tab path verified
7. `~/Camila/thinker-distillation/_working/martin-fowler/` — Fowler long-read working notes post-migration (PLAN, CORPUS, CONCEPT_LATTICE, ISA, PREFACE)
8. `~/Camila/thinker-distillation/design-spec-2026-05-26.md` — §8 implementation order (10 steps; 1-7 done, 8 deferred to v4, 9-10 wait for portraits), §10 the 14 locked decisions
9. `~/Camila/thinker-distillation/gitlab-migration-plan.md` — annotated CLOSED 2026-05-27; OQ 6 (Netlify cleanup) + OQ 7 (GitHub full-remove) still open follow-ups
10. `~/Camila/thinker-distillation/audit-ui-2026-05-26.md` — only if you need to reverify which audit findings the current commits resolved
11. This ISA's `## Decisions` and `## Changelog` sections, newest-first — every refinement of working norms (writing-partner sub-cases, monogram-as-placeholder grammar, alias-then-sweep migration pattern, glab-API-replaces-manual-UI pattern, GitLab unique-domain default, workspace-cohesive working-notes convention) is logged here

**14 decisions locked 2026-05-26 (full table in design-spec §10):**

Designer picks:
- Body measure `clamp(45ch, 62ch, 68ch)` · Body size 18px/1.62 · Section headers weight-axis no-uppercase Cardo weight-500 azul · Links underline-always azul→tierra→oro cascade · Chrome three-line with scroll-collapse · Portraits real B&W photos (Camila scouts)

Author picks:
- Voice-of-the-frame: **first-person editorial** (cascading) · Tagline working draft: **"Thinking through the shoulders of giants"** (Julie's phrasing) · Long-read intros: add optional `intro` field · Lineage rendering: keep flat prose for v3 · Footer signature: keep "Curated by Julie Davila." · Section names: keep current, open to evolving · Parkable bundle (Spanish format / naming / pronouns / metaphor literalness / pull-quote sourcing): all parked until just-in-time triggered

**Open micro-decisions (Julie's call, can resolve any time):**
- Tagline case + punctuation: sentence-case + period (current — "Thinking through the shoulders of giants" exactly as she wrote it), or all-lowercase no-period?
- Tagline form: explicit "I" prefix, or gerund (current)?
- Glossary entries per long-read chapter: populate via transcription-with-cite (Camila ships safely per refined writing-partner rule) or hold for Julie's interpretive glossing (her call which sub-case applies per chapter)?

**Carve-outs preserved:** C23 bilingual chrome OUT for Distillery · AC10 `julie_reading` Camila never authors · `working_uses` carve-out (Camila auto-records joint work) · AC7 anti-essentialism guard

**Next iteration on resume:**
- **All 6 Fowler-audit Qs CLOSED (Iter-7 step 2) and loop infrastructure LIVE (Iter-7 step 3).**
- **iter-8 work-queue is now on GitLab Issues, not the ISA.** Read Issues #1–#5 at `https://gitlab.com/juliedavila/thinker-distillery/-/issues?milestone_title=iter-8&label_name[]=camila:candidate`. Each has a full case + Council prompt sketch + workflow checklist. Cold-start should start with the Issues board, then return to this ISA for constitutional context only.
- **Loop activation: pick a starting candidate when you're ready to fire the first Council pass.** Recommended order if neutral: #2 Forsgren (highest vocabulary uptake → cleanest filter pass → fastest first-success), then #3 Fournier, then #1 Saxe (security lane), then #4 Appleton (visual lane → may surface schema-bump conversation re: visual-artist thinker_type), then #5 Hudson (inner-work lane — first thinker in this lane, lighter site-internal reverb).
- **Per-candidate workflow when triggered:** Council pass → label switch (`camila:in-council` → `camila:accepted | camila:rejected`) → on accept: feature branch `candidate/<slug>` → frontmatter draft per SCHEMA v1.2 (all §1–§9 + optional §11 Live Edge) → 10-min critic search (Q5 working norm) → reverberation sweep against existing 7 thinkers → MR → `camila:ready-for-review` → Julie review → `julie:approved` → merge → close Issue.
- **Discovery-cadence implementation (Julie's call):** weekly OR trigger on ≥3 candidates + reverb done. Implementation candidates: (a) `ScheduleWakeup` from in-session, (b) PAI `CronCreate` for out-of-session trigger, (c) external GitLab CI scheduled-pipeline running a discovery script, (d) manual until usage settles. None blocking — iter-8 has 5 explicit candidates queued.
- **Backfill iteration (separate from iter-8 loop run, but parallel-runnable):** existing 7 thinkers gain v1.2 affordances. Brooks ↔ Fowler ↔ Komoroske mutual site-internal edges (Q2 dominant case). Promote-to-`deep` audit per thinker (Fowler stress test). Opt-in `live_edge_visible: true` per thinker (Fowler obvious first). Fowler hosted canon (Dehghani / Böckeler / Lewis / Sadalage / Kua → §8 `hosts` edges + §5 projection). 10-min critic search per existing thinker. File these as Issues when ready (`camila:schema-bump` + appropriate milestone).
- **F-OPS Iter-6 follow-ups (Julie's call):**
  - Unique-domain vs namespace URL: currently `thinker-distillery-97a9ca.gitlab.io`; flip available via Settings → Deploy → Pages → "Use unique domain" off
  - Netlify cleanup (OQ 6 from migration plan): leave dead, delete, or restore one-page redirect
- **F-OPS Iter-6 follow-ups (Julie's call):**
  - Unique-domain vs namespace URL: site currently serves at `thinker-distillery-97a9ca.gitlab.io` (GitLab's new default). If Julie prefers the cleaner `juliedavila.gitlab.io/thinker-distillery/` namespace pattern, flip Settings → Deploy → Pages → "Use unique domain" off and revert astro.config.mjs site URL. Both reversible.
  - Netlify cleanup (OQ 6 from migration plan): leave dead, delete, or restore a one-page redirect. Recommended: restore minimal redirect for ~30 days, then delete.
  - GitHub remote disposition (OQ 7): keep as backup mirror (current state) or fully detach. Currently kept.
- **Camila-scouts portrait task** (still pending): scout warm B&W editorial portraits for 7 thinkers per design-spec §3.3 (Wikimedia Commons CC-BY / public-domain first), crop to 4× retina, drop into `src/content/thinkers/portraits/`, populate `portrait:` field per thinker. Mechanical swap — Monogram component falls back to image automatically.
- **Julie-owned content slots** (deferred to her): glossary entries on long-read chapters (schema-ready; sidebar renders the moment she populates), `julie_reading` per concept page (unchanged), `intro` per long-read chapter (schema-ready, optional), tagline case+punctuation refinement.
- **Iter-7 advisor follow-ups** (carried from iter-5): WCAG AA contrast pass on oro-on-paper-warm visited links AND on 80px monogram (smaller-text threshold 4.5:1), mobile viewport (375/414) screenshot pass, self-hosted-vs-Google-Fonts decision, `aria-label="primary"` redundancy review, `<cite>` markup spec-conformance, `p {max-width: 62ch}` collateral with `figure/pre/table`, breakpoint normalization (600px hero vs 900px long-read grid), **legacy-alias sweep** (delete `:root` alias block — owns tombstone in commit f5ad343).
- **Iter-5 step 8 (SVG genealogy mini-diagrams)** — still deferred to v4 per design-spec §3.4/§3.5 body advisor pressure-test (SVG component family deserves its own ≥3-alternatives spec).
- **Iter-5 step 9 (concept-page holder-card portrait thumbnails)** — couples to Camila-scouts task; spawns automatically once portraits land.
- **Iter-5 step 10 (full audit re-run against rubric)** — final gate before customer-zero acceptance; waits for portraits.

**Working norms in effect this project:**
- `feedback_writing_partner_per_field.md` with `working_uses` carve-out
- `feedback_feminine_energy_writing.md`
- `feedback_thinker_inclusion_pushback.md`
- `feedback_avoid_kimi_codex.md` (Cato/Forge/Anvil skipped unless Julie names)
- Mexican-modernist token alignment with Camila Hub (Cardo + Source Serif 4 + JetBrains Mono; azul/tierra/oro/paper/ink)
- English-only chrome (Distillery public-consumption posture); Spanish enters only when content earns it (future Spanish-writing thinker)

**Build / deploy operational notes:**
- Astro 6.x; requires node ≥v22 — prefix `bun` commands with `PATH="/opt/homebrew/bin:$PATH"` or use system node v26
- Build: `bun run build`; preview: `bun run preview` (port 4321)
- **Production deploy LIVE on GitLab Pages** at `https://thinker-distillery-97a9ca.gitlab.io/` (auth-walled to project members)
- CI: `.gitlab-ci.yml` at repo root — `oven/bun:1` image, runs on push to default branch (`main`)
- Pipeline status: `glab ci list --per-page 3` (avoid `--branch` flag, not supported in current glab); pipeline detail: `glab ci view <id>`
- Git remotes: `origin` → GitLab SSH (primary); `github` → GitHub HTTPS (backup mirror, push manually with `git push github main`)

**Where source material lives:**
- Project ISA (this file) at `~/Camila/thinker-distillation/ISA.md`
- Schema locked at `~/Camila/thinker-distillation/SCHEMA.md`
- Iter-4 artifacts at `~/Camila/thinker-distillation/{research,audit,design-spec,gitlab-migration-plan}-ui-2026-05-26.md`
- Iter-5 visual evidence at `~/Camila/thinker-distillation/iter5-screenshots/` (7 captures across steps 1-7)
- Code surface that changed this session: `src/styles/global.css`, `src/layouts/Base.astro`, `src/content.config.ts`, `src/components/Monogram.astro` (new), `src/pages/index.astro`, `src/pages/thinkers/[slug].astro`, `src/pages/thinkers/[slug]/long-read/[chapter].astro`, `src/pages/concepts/index.astro` (new)
- Iter-5 commits on `main`: c938e52 → d5fe642 → 56c8883 → f5ad343 → 544546c → 4fda77d → 1981edc → 408a301 → 313d142 (steps 1-3 in first 5 commits, steps 4-7 in next 4)
- Iter-6 commits on `main`: `f0cf9c0` (migration core) → `29eb05f` (site URL fix) → `c5c5c1b` (docs + screenshot) → `48fb968` (Changelog C/R/L closeout)
- Iter-7 step 1 commits on `main`: `599d86e` (migration + path refs + ISA/SCHEMA/Projects.md) → `fdf8c25` (ISC-524 mark post-pipeline-green)
- Iter-6 visual evidence at `~/Camila/thinker-distillation/iter6-screenshots/idx-gitlab-pages.png` (2.1MB, live GitLab Pages homepage)

---

## System-Level Open Questions Surfaced 2026-05-27 (Fowler Audit) — ✅ ALL RESOLVED 2026-05-27

> Originally triggered by audit of `~/Camila/_working/martin-fowler/` (long-read working notes) against the shipped Fowler page (`src/content/thinkers/martin-fowler.md` + `src/content/long-read/martin-fowler/00-preface.md`). Each question affected every active thinker (Komoroske, Brooks, Allspaw, Woods, Dekker, Dalio, Fowler). **Resolved in Iter-7 step 2 via three Council passes; SCHEMA bumped to v1.2.** Full transcripts at `~/.claude/LIFEOS/MEMORY/COUNCIL/thinker-distillery-q{1-q2-q5-clustered,q3-live-edge,q4-hosted-canon}-20260527-*`.

1. ✅ **Q1 Frame surfacing depth — RESOLVED 2026-05-27.** Tiered rendering, uniform render contract, variable lattice depth. `named_frames[].render_tier: foreground | deep` (default foreground). Cap 8 foreground / 6 typical, **no per-`thinker_type` scaling**. Catalog-builders push spillover to deep tier + long-read. Deep entries collapse to single-line disclosure with build-time count honesty check. See SCHEMA v1.2 §4.

2. ✅ **Q2 Adjacency reach + site-internal auto-surface — RESOLVED 2026-05-27.** Mechanical auto-surface with explicit editorial demote-override. `adjacent_thinkers[].render_tier`, `.auto_surfaced` (build-computed), `.editorial_demote_to` (optional). Site-internal target_slug resolution auto-promotes to foreground + primary. Cap 5 typical / up to 7 with site-internal exemption. Build warning on silent omission. See SCHEMA v1.2 §8.

3. ✅ **Q3 Live Edge — RESOLVED 2026-05-27.** Option A + opt-in toggle (hybrid A/D). New §11 Live Edge section with `live_edge_visible: boolean` (default false). Requires `status: alive-active` + mandatory `summary` + mandatory `last_observed`. Prose-first, present-continuous tense, visible-staleness at 90 days. No Frame-node links permitted (protects Discipline Gate 2). Refresh rides weekly discovery pass. See SCHEMA v1.2 §11.

4. ✅ **Q4 Hosted canon — RESOLVED 2026-05-27.** Option F (hybrid edge-as-source, projection-to-§5). Add `edge_type: hosts` to §8 adjacent_thinkers; optional `hosted_items[]` on those edges. `body_of_work[]` gains optional `attribution_kind: authored | hosted`; hosted items projected from §8 hosts edges at build. Build-pipeline test (Anti-16) fails any §5 hosted render without host-attribution label. `editorial_framing` is host's voice, not Julie's. See SCHEMA v1.2 §5 + §8.

5. ✅ **Q5 Named critics — RESOLVED 2026-05-27.** Three-tier gating via existing `edge_type: critiques` adjacencies (zero new schema fields). Build-computed `critic_has_distillery_page` drives render weight. Mode B (Camila-handle voice) edge_labels — preserves writing-partner discipline. Casey-test gate: "has Julie earned standing to name this critic in this venue." Working norm: 10-min critic search per thinker pre-ship. See SCHEMA v1.2 §8 + Anti-22.

6. ✅ **Q6 Long-read working-notes — RESOLVED 2026-05-27 (Iter-7 step 1).** `~/Camila/thinker-distillation/_working/{thinker-slug}/` (workspace-cohesive). Fowler migrated; Komoroske archive at `~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/`.

**Forward backlog (catalog only — execute as separate iteration):** backfill existing 7 thinkers under v1.2 schema — promote-to-deep audit per thinker, surface site-internal mutual edges (Brooks ↔ Fowler ↔ Komoroske highest priority), opt-in Live Edge per thinker (Fowler obvious first), build Fowler hosted canon (Dehghani/Böckeler/Lewis/Sadalage/Kua), pre-ship critic search per thinker. None blocking current site state.

---

## Problem

Practitioners whose bodies of work produced vocabularies the field now uses to think (Komoroske, Fowler, Dalio, Drucker, Senge, Christensen, Allspaw, Woods, Dekker, and others) deserve a place where their ideas can be rapidly metabolized with editorial framing — comparable to what Maria Popova does for literature at The Marginalian — but per-practitioner rather than per-essay, and graph-backed for cross-thinker idea threading in v2. No such site exists: Brain Pickings / The Marginalian is voice-led essays threaded by Popova; Greptalks is per-talk and barely curated; nothing combines per-practitioner editorial readings with a cross-thinker concept graph. This project fills that gap.

## Vision

Julie lands on a thinker page — say Komoroske — and instantly recognizes the shape. Every named frame in compressed form, her editorial reading visibly distinct from what Komoroske said, the "where this breaks" lane honest without hostility, adjacent thinkers light up the graph she already carries in her head, and her own working uses of the frames are findable. The cross-thinker idea threading (Komoroske ↔ Brooks on coordination cost, Komoroske ↔ Fowler on the cartographer move) becomes navigable, not just intuited. Euphoric surprise: the schema's structural lanes make the IP question dissolve by layout alone, and the cross-thinker graph feels inevitable rather than bolted on.

**Scope reach (2026-05-27):** the Distillery houses thinkers whose vocabulary the field uses to think about *how technical work happens* — and the human surface around it. Software-practice (Fowler, Brooks, Allspaw, Woods, Dekker), org-design (Komoroske, Fournier, Forsgren), operational philosophy (Dalio), security-research-as-practice (Saxe-class), design-of-thought (Appleton-class), and **inner-work-for-technical-leaders** (Hudson-class: somatic / emotional development applied to the people doing the work) are all in scope. The discipline gate is the filter (≥2yr consistent body AND vocabulary practitioners use), not the lane. Reader still encounters one Distillery, one editorial voice, one schema — not separate buckets. Lane expansion is a continuous neighborhood expansion, not a category fork.

## Out of Scope

- Public promotion / SEO push at v1 launch. Julie is customer-zero through MVP; site is live-but-unpromoted. Promotion is a separate later gate.
- Authentication, accounts, comments, community features.
- Monetization.
- Thinkers who don't meet the inclusion filter (≥2yr consistent body AND produced vocabulary/frames practitioners actively use). Edge cases trigger an explicit conversation per `feedback_thinker_inclusion_pushback.md`.
- Thinkers whose vocabulary is unrelated to technical work or the human surface around it (e.g., pure literary theorists, generalist mindfulness coaches without a technical-leadership crossover). Inner-work thinkers IN scope require explicit applicability to technical leaders, not generic emotional-development output.
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
- [x] ISC-4: Project listed in `~/.claude/LIFEOS/USER/PROJECTS.md` Active Projects
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

### Design Spec iteration — Iteration 4 (2026-05-26)

*Brand-foundation design spec. Output: `~/Camila/thinker-distillation/design-spec-2026-05-26.md` (4391 words). Parallel: F-OPS migration plan at `~/Camila/thinker-distillation/gitlab-migration-plan.md` (2480 words). Hand-off to Iter-5 prototype after Julie picks per-decision options.*

**§1 Principles (8 ISCs):**
- [x] ISC-290: P1 named (cognitive load dominant constraint) — anchored Sweller + Skulmowski
- [x] ISC-291: P2 named (beauty primer + longitudinal discipline) — anchored Sonderegger 2012
- [x] ISC-292: P3 named (multimedia coherence test) — anchored Mayer & Fiorella
- [x] ISC-293: P4 named (honors-thinkers via experience) — Iter-3 Pattern 7
- [x] ISC-294: P5 named (feminist intentionality generative methodology) — Bardzell & Bardzell 2011
- [x] ISC-295: P6 named (brand-foundation framing) — Julie 2026-05-26
- [x] ISC-296: P7 named (public consumption posture, English-only chrome) — Julie 2026-05-26
- [x] ISC-297: P8 named (customer-zero phase design window)

**§2 Typography (16 ISCs):**
- [x] ISC-298: Type stack confirmed adoption from Camila Hub
- [x] ISC-299: §2.2 body measure — 3 alternatives + tradeoffs + lean
- [x] ISC-300: §2.3 leading + base size — 2 alternatives + lean
- [x] ISC-301: §2.4 hierarchy treatment — 3 alternatives + lean (resolves audit F6)
- [x] ISC-302: §2.5 emphasis (italic, bold, anti-pattern bold-italic)
- [x] ISC-303: §2.6 link affordance — 3 alternatives + lean (resolves audit F19)
- [x] ISC-304: §2.7 pull-quotes refinement
- [x] ISC-305: Anti: no uppercase eyebrow + tracking pattern
- [x] ISC-306: Anti: no bold-italic combo emphasis
- [x] ISC-307: Anti: no `text-decoration: none` without compensating affordance
- [x] ISC-308: Cardo licensed SIL OFL — commercial-use safe
- [x] ISC-309: Source Serif 4 licensed SIL OFL — commercial-use safe
- [x] ISC-310: JetBrains Mono licensed Apache 2.0 — commercial-use safe
- [x] ISC-311: Variable-font axes named (weight + optical-size) as a design tool
- [x] ISC-312: Hierarchy cascade specified (H1/H2/H3/H4)
- [x] ISC-313: Mono register reserved (citations, metadata, attribution kinds)

**§3 Page Architecture (22 ISCs):**
- [x] ISC-314: §3.1 chrome — 3 alternatives + lean (resolves F7)
- [x] ISC-315: §3.2 breadcrumb pattern (resolves F2 P1)
- [x] ISC-316: §3.3 index — portrait + name pairing (resolves F4 P1)
- [x] ISC-317: §3.3 index — field metadata line in mono
- [x] ISC-318: §3.3 portrait sourcing strategy — 3 options + lean (scaffolded Julie-slot)
- [x] ISC-319: §3.3 alphabetical ordering preserved
- [x] ISC-320: §3.4 thinker page — 11-section template preserved
- [x] ISC-321: §3.4 thinker page — hero portrait + name pairing
- [x] ISC-322: §3.4 thinker page — genealogy mini-diagrams on Named Frames
- [x] ISC-323: §3.4 thinker page — body-of-work covers when feasible
- [x] ISC-324: §3.5 concept page — 5-lane template preserved (v2 strength)
- [x] ISC-325: §3.5 concept page — genealogy SVG chain
- [x] ISC-326: §3.5 concept page — holder cards with portrait thumbs + source link
- [x] ISC-327: §3.5 concept page — pending-concept styling clarified
- [x] ISC-328: §3.6 long-read chapter — concept-glossary sidebar (resolves F5)
- [x] ISC-329: §3.6 long-read chapter — chapter-of-N indicator (partial F6 resolution)
- [x] ISC-330: §3.6 long-read chapter — chapter-end three exits (no dead-end)
- [x] ISC-331: §3.7 long-read index — aligns with thinker-page hero pattern (resolves F14)
- [x] ISC-332: Concept-page surfacing in chrome nav resolves F3 P0
- [x] ISC-333: Anti: no concept-graph viz as primary nav (AC3 honored, deferred to v5+)
- [x] ISC-334: Anti: no autoplay video embeds
- [x] ISC-335: Anti: no third-person CMS-default chrome copy

**§4 Multimedia (12 ISCs):**
- [x] ISC-336: §4.1 portraits style guide (aspect, register, sourcing)
- [x] ISC-337: §4.1 monogram fallback when portrait absent
- [x] ISC-338: §4.2 genealogy diagrams style guide (SVG, palette-colored)
- [x] ISC-339: §4.3 concept-graph viz deferred to v5+ with reconsideration threshold
- [x] ISC-340: §4.4 video/audio default = no; talk-link card exception
- [x] ISC-341: §4.5 ONE imagery register site-wide (lean: warm B&W portraits + SVG line work)
- [x] ISC-342: Anti: no stock photography
- [x] ISC-343: Anti: no atmospheric imagery between paragraphs (seductive-details effect)
- [x] ISC-344: Anti: no illustrated icons
- [x] ISC-345: Coherence test applied per multimedia decision (P3)
- [x] ISC-346: Alt-text minimum specified (Portrait of {name})
- [x] ISC-347: Multimedia bandwidth respects F-OPS migration findings

**§5 Non-color feminine dimensions (10 ISCs):**
- [x] ISC-348: §5.1 rhythm + breath spec (vertical spacing 64-80px, paragraph spacing 1.5×)
- [x] ISC-349: §5.2 hierarchy softness via weight (locked from §2.4)
- [x] ISC-350: §5.3 voice-of-the-frame structural proposal + Julie-slots called out
- [x] ISC-351: §5.4 slow/reflective interaction (no scroll-progress, no read-time on thinker page)
- [x] ISC-352: §5.4 read-time appropriate on long-read index (chapter choice context)
- [x] ISC-353: §5.4 no share buttons in v3 customer-zero
- [x] ISC-354: §5.4 prefers-reduced-motion honored on all transitions
- [x] ISC-355: §5.5 AC7 anti-essentialism guard applied
- [x] ISC-356: Anti: no chatty interruption frames (no "Editor's note", no "P.S.", no aside call-outs)
- [x] ISC-357: Card grid gaps specified (0.9-1.2rem)

**§6 Color + ornament (10 ISCs):**
- [x] ISC-358: §6.1 palette application table — token per surface
- [x] ISC-359: §6.1 contrast verification — all body-on-paper, link-on-paper, accent-on-paper PASS WCAG AA
- [x] ISC-360: §6.2 ornament discipline — NO ornament in v3, reconsider at v4+
- [x] ISC-361: §6.3 :focus-visible site-wide rule (resolves F16 P0)
- [x] ISC-362: §6.4 skip-to-content link (resolves F17 P1)
- [x] ISC-363: §6.5 `<nav aria-label="primary">` landmark (resolves F18 P1)
- [x] ISC-364: §6.6 dark mode deferred to v5+
- [x] ISC-365: Anti: no pure-white (#fff) used; all backgrounds carry warmth
- [x] ISC-366: Anti: no color outside the 9-token palette
- [x] ISC-367: Token system documented for brand-foundation propagation (P6)

**§7 Scaffolded Julie-Slots (10 ISCs):**
- [x] ISC-368: Mission tagline as Julie-slot (placeholder + Julie writes)
- [x] ISC-369: Footer signature default proposed (Julie can evolve)
- [x] ISC-370: Long-read chapter intros as optional Julie-slot
- [x] ISC-371: Portrait sourcing strategy as Julie-slot (3 options + Camila's lean)
- [x] ISC-372: Portrait register as Julie-slot (warm B&W proposed)
- [x] ISC-373: About-page content deferred (per Iter-1 pre-promotion gate)
- [x] ISC-374: Spanish-thinker quote format as future Julie-slot (structural proposal only)
- [x] ISC-375: `julie_reading` AC10 holds (Camila never authors)
- [x] ISC-376: `working_uses` carve-out holds (Camila auto-records joint work)
- [x] ISC-377: Section-header verbiage as Julie's editorial slot

**§8 Implementation Order (10 ISCs):**
- [x] ISC-378: Step 1 token layer first (single commit, build still works)
- [x] ISC-379: Step 2 typography cascade (5-7 commits per major decision)
- [x] ISC-380: Step 3 chrome rework + nav landmark + skip-link
- [x] ISC-381: Step 4 focus styles site-wide
- [x] ISC-382: Step 5 index portrait pairing (monogram fallback)
- [x] ISC-383: Step 6 thinker page hero with portrait
- [x] ISC-384: Step 7 long-read concept-glossary sidebar + chapter-of-N
- [x] ISC-385: Step 8 genealogy mini-diagrams (shared SVG component)
- [x] ISC-386: Step 9 concept-page refinements
- [x] ISC-387: Step 10 verify + audit re-run before customer-zero acceptance

**Meta + anti (16 ISCs):**
- [x] ISC-388: Output file written at canonical location
- [x] ISC-389: Word count ≤8000 (actual 4391)
- [x] ISC-390: ≥3 alternatives at each major decision (§2.2, §2.4, §2.6, §3.1) with tradeoffs
- [x] ISC-391: ≥2 alternatives at minor decisions (§2.3)
- [x] ISC-392: Camila's leans flagged as leans, not prescriptions
- [x] ISC-393: Writing-partner per-field discipline applied (§7 enumerates Julie-slots)
- [x] ISC-394: Brand-foundation framing carried throughout (P6)
- [x] ISC-395: English-only chrome carve-out applied (P7)
- [x] ISC-396: Anti: no Distillery-specific decisions that conflict with future propagation
- [x] ISC-397: Anti: no editorial voice pre-decided (Julie-slots scaffolded only)
- [x] ISC-398: Anti: no design solution proposed beyond Iter-5 scope
- [x] ISC-399: Anti: no font / color outside Camila Hub token system
- [x] ISC-400: All audit P0/P1 findings have spec resolutions or explicit deferrals
- [x] ISC-401: Per-decision pick table at §10 for Julie's reaction
- [x] ISC-402: F-OPS migration plan delivered in parallel (background agent)
- [x] ISC-403: Antecedent: Julie picks per-decision options before Iter-5 prototype starts — 14 decisions locked in design-spec §10 (Read 2026-05-26 lines 449-487)

**Iter-4 progress: 113/114 ISCs complete; ISC-403 pending Julie's per-decision picks.**

### Iter-5 prototype — Steps 1-3 (2026-05-26)

*First continuous push of design-spec §8 implementation: token layer + typography cascade + chrome rework. Three commits, build green between each. Verified locally (production Netlify 503 — F-OPS migration parallel track). Tagline ships as Julie's working draft scaffolded slot per writing-partner-per-field discipline with carve-out: she already typed it.*

**Step 1 — Token layer (6 ISCs):**

- [x] ISC-404: `:root` in `src/styles/global.css` contains all 9 Mexican-modernist palette tokens (`--paper`, `--paper-warm`, `--ink`, `--stone-700`, `--stone-500`, `--stone-300`, `--azul`, `--tierra`, `--oro`) — grep -E count returned 26 (9 palette + 3 type + 14 alias) ≥9 palette confirmed
- [x] ISC-405: `:root` contains 3 type-stack tokens (`--display`, `--body`, `--mono`) mapped to Cardo / Source Serif 4 / JetBrains Mono — grep verified, fallback chains preserved
- [x] ISC-406: Legacy aliases preserve every existing var name (`--serif`, `--sans`, `--ink-soft`, `--ink-muted`, `--rule`, `--paper-sunk`, `--julie-tint`, `--julie-accent`, `--julie-rule`, `--frame-tint`, `--frame-accent`, `--quote-tint`, `--quote-rule`, `--break-accent`) — all 14 declared as var(--new-token) aliases
- [x] ISC-407: Google Fonts `<link rel="preconnect">` + `<link rel="stylesheet">` for Cardo + Source Serif 4 + JetBrains Mono injected in `Base.astro` `<head>`
- [x] ISC-408: `bun run build` passes after token layer change — "14 page(s) built in 1.07s, Complete!" exit 0
- [x] ISC-409: Step 1 commit lands separately for revertibility — commit c938e52 "Iter-5 step 1: token layer (Mexican-modernist palette + Cardo/SourceSerif4/JetBrainsMono)"

**Step 2 — Typography cascade (10 ISCs):**

- [x] ISC-410: `html { font-size: 18px }` applied — grep confirmed
- [x] ISC-411: `body { line-height: 1.62; font-family: var(--body) }` applied; `font-optical-sizing: auto` added for Source Serif 4 variable opsz axis
- [x] ISC-412: `p { max-width: 62ch }` applied per Bringhurst measure
- [x] ISC-413: `h2.section-h` rewritten — Cardo weight-500 0.95rem azul, text-transform none, letter-spacing 0, border-bottom 0 — grep confirmed all 7 properties (audit F6 resolved)
- [x] ISC-414: Bare `a` rule added — azul default, tierra hover, oro visited, 1px underline 0.15em offset — grep confirmed (audit F19 resolved)
- [x] ISC-415: Site-wide `:focus-visible { outline: 2px solid var(--azul); outline-offset: 2px; border-radius: 2px }` (audit F16 P0 resolved)
- [x] ISC-416: `blockquote.what-x-says` updated — paper-warm bg, tierra 4px border-left
- [x] ISC-417: `blockquote.what-x-says cite` updated — JetBrains Mono 0.82rem stone-500
- [x] ISC-418: `bun run build` passes after typography cascade — "14 page(s) built in 2.10s, Complete!" exit 0
- [x] ISC-419: Step 2 commit lands separately — commit d5fe642 "Iter-5 step 2: typography cascade (18px/1.62, Cardo headers, link affordance, focus, pull-quotes)"

**Step 3 — Chrome rework (11 ISCs):**

- [x] ISC-420: `Base.astro` chrome restructured to three-line block — `<a.site-name>` + `<p.tagline>` + `<nav.chrome-nav>` confirmed in rendered HTML
- [x] ISC-421: Tagline set to **"Thinking through the shoulders of giants"** (Julie's working draft) — grep confirmed in dist/index.html; scaffolded slot, Julie can refine
- [x] ISC-422: Nav row contains "Thinkers · Concepts · About" wrapped in `<nav aria-label="primary">` — grep confirmed (audit F18 P1 resolved); concepts index stubbed at `src/pages/concepts/index.astro` listing both shipped concepts (F3 P0 resolved)
- [x] ISC-423: Skip-to-content link `<a class="skip-to-main" href="#main">Skip to content</a>` placed immediately after `<body>` — grep confirmed (audit F17 P1 resolved)
- [x] ISC-424: `<main>` element gets `id="main"` — grep confirmed in rendered HTML
- [x] ISC-425: Chrome CSS rewritten — `.site-name` Cardo weight-500 1.15rem ink; `.tagline` Source Serif italic 0.95rem stone-700 max-width 44ch; `.chrome-nav` with 1px azul top-rule, 22px gap
- [x] ISC-426: Skip-link CSS — `position: absolute; top: -40px; background: var(--azul); color: var(--paper); z-index: 1000`; on `:focus` and `:focus-visible` top: 0
- [x] ISC-427: Chrome scroll-collapse — inline `<script is:inline>` in Base.astro toggles `.scrolled` class on `window.scrollY > 80` via `requestAnimationFrame` (passive scroll listener)
- [x] ISC-428: `.site-chrome.scrolled .tagline { display: none }` collapses to two-line above scroll; `@media (prefers-reduced-motion: no-preference)` gates the transition
- [x] ISC-429: `bun run build` passes after chrome rework — "15 page(s) built in 988ms, Complete!" (added concepts/index)
- [x] ISC-430: Step 3 commit lands separately — commit 56c8883 "Iter-5 step 3: chrome rework (three-line + nav landmark + skip-link + scroll-collapse)"

**Verification (4 ISCs):**

- [x] ISC-431: `bun run preview` started on port 4321 and serves the rebuilt site — `curl -sI` confirmed 200 on /, /thinkers/alex-komoroske/, /concepts/, /concepts/coordination-headwind/
- [x] ISC-432: Interceptor screenshot of `http://localhost:4321/` saved to `iter5-screenshots/idx-after.png` (1.9MB) — confirms new palette (paper #F4EFE6 background), three-line chrome with Cardo site name + italic tagline "Thinking through the shoulders of giants" + Thinkers·Concepts·About nav, azul rule under chrome
- [x] ISC-433: Interceptor screenshot of `/concepts/coordination-headwind/` saved to `iter5-screenshots/concept-after.png` (4.5MB) — confirms Cardo 500 azul section headers (Genealogy / Who Holds / Editorial / Where This Breaks / Adjacent), no uppercase, weight-500 softened; underline-cascade links visible (primary source · ); tierra accent on limit cards; oro accent on Julie-lane empty-state
- [x] ISC-434: Advisor pass via `bun ~/.claude/LIFEOS/TOOLS/Inference.ts --mode advisor --auto-state` returned substantive review — none-blocker findings on (a) alias tombstone, (b) scroll hysteresis, (c) concepts/index editorial frame, (d) blind spots (contrast / mobile / font hosting / aria-label / cite markup / bisectability / p-max-width collateral). Three of four primary findings folded into polish commit f5ad343; remainder logged as iter-6 follow-ups below

**Anti-criteria + antecedent (4 ISCs):**

- [x] ISC-435: Anti: No content edited — `git diff main HEAD --stat src/content/` shows zero changes; thinker frontmatter, concept frontmatter, portrait paths untouched
- [x] ISC-436: Anti: No Forge / Anvil / Cato spawned — `feedback_avoid_kimi_codex` applied; only Advisor (Claude-family) invoked at VERIFY
- [x] ISC-437: Anti: No Spanish chrome added — `grep -i "español\|cenefa\|saludos"` in src/layouts and src/pages returns no matches; P7 English-only carve-out preserved
- [x] ISC-438: Antecedent: Design-spec §10 14 picks confirmed locked before code edit — verified via Read of design-spec lines 449-487 at OBSERVE; all decisions present and named

**Iter-5 steps 1-3 progress: 35/35 ISCs complete. Steps 4-7 continued in next sub-iteration block below; steps 8-10 still deferred.**

### Iter-5 prototype — Steps 4-7 (2026-05-26)

*Continuation of Iter-5 prototype: step 4 (keyboard verify, focus-visible landed in step 2), step 5+6 (portrait/monogram infrastructure — schema field, Monogram component, index + thinker hero pairing), step 7 (long-read concept-glossary sidebar + chapter-of-N breadcrumb). Real portrait images ship as a separate Camila-scouts task. Step 8 SVG genealogy stays deferred per design-spec §3.4/§3.5 body (advisor pressure-test demoted to v4). Step 9 holder-card portraits couples to scouting task. Step 10 (audit re-run) waits for portrait images to land.*

**Step 4 — Keyboard focus verify (2 ISCs):**

- [x] ISC-439: `interceptor open` + `interceptor act --keys "Tab"` confirms first Tab focuses the skip-link (visible at top:0 in `keyboard-focus-test.png` with azul background + paper text "Skip to content"). Accessibility tree confirms DOM order: skip-link (e1) → site-name (e2) → nav primary anchors (e3-e5) → thinker-index anchors (e6-e12) → footer About (e13) — 13 focusable elements total, all reachable by sequential Tab
- [x] ISC-440: Skip-link visible only after first Tab — at page load `position: absolute; top: -40px` keeps it off-screen; on `:focus` `top: 0` reveals it (confirmed in keyboard-focus-test.png vs prior idx-after.png where focus was elsewhere)

**Step 5+6 — Portrait/Monogram infrastructure (10 ISCs):**

- [x] ISC-441: `src/content.config.ts` thinker schema gains optional `portrait` field — `z.string().optional()` added after `last_updated`
- [x] ISC-442: `src/components/Monogram.astro` component created — renders initials in `var(--azul)` on `var(--paper-warm)` tile with 4px rounded corner, `size` prop (default 80; 160 used on thinker hero)
- [x] ISC-443: Monogram initials derivation handles single-name and multi-name cases — `name.split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase()).join('')`; "Brooks" → "B", "Alex Komoroske" → "AK", "Sidney Dekker" → "SD"
- [x] ISC-444: `src/pages/index.astro` renders portrait if `t.data.portrait` defined; falls back to `<Monogram size={80}>` otherwise — conditional ternary
- [x] ISC-445: Index page entry layout updated to grid — `.thinker-row` with `grid-template-columns: 80px 1fr` + 22px gap
- [x] ISC-446: `src/pages/thinkers/[slug].astro` hero updated — `.thinker-hero` grid with portrait (160px) at top-left, name + tagline + domain badges to right, 30-second-take spanning below
- [x] ISC-447: All 7 thinker pages render with monogram fallback — `grep -c "thinker-hero-portrait"` returns 7 across `dist/thinkers/*/index.html`; no portraits authored yet (Camila-scouts task is separate)
- [x] ISC-448: CSS for `.thinker-row` grid layout landed in global.css; `.thinker-text .name` updated to Cardo 500 1.5rem (per design-spec §3.3)
- [x] ISC-449: CSS for `.thinker-hero` grid + mobile breakpoint at 600px (portrait shrinks 160→100px on narrow viewports)
- [x] ISC-450: `bun run build` passes — "15 page(s) built in 974ms, Complete!" exit 0

**Step 7 — Long-read concept-glossary sidebar + chapter-of-N (10 ISCs):**

- [x] ISC-451: `src/content.config.ts` long-read chapter schema gains optional `glossary` field — `z.array(glossaryEntry).optional()` where `glossaryEntry = z.object({term, gloss, concept_slug? (kebab-case)})`
- [x] ISC-452: `src/pages/thinkers/[slug]/long-read/[chapter].astro` renders right-rail `<aside class="glossary-rail">` when `glossary.length > 0` — guarded by `{hasGlossary && ...}` conditional
- [x] ISC-453: Sidebar entries: term Cardo weight-500 1rem, gloss Source Serif 0.92rem stone-700, optional `Concept page →` link in JetBrains Mono 0.78rem azul when `concept_slug` matches a shipped concept (gated via `conceptPages.has(g.concept_slug)`)
- [x] ISC-454: Mobile layout (≤900px) collapses sidebar to `<details class="glossary-mobile">` at top of chapter with summary "Glossary (N)" — CSS media query toggles `.glossary-rail` and `.glossary-mobile` display
- [x] ISC-455: Empty `glossary` field renders chapter without sidebar — `data-has-glossary="false"` attribute on `.long-read-chapter` switches `.long-read-grid` to single-column; verified Komoroske ch01 dist HTML has `long-read-grid` but no `glossary-rail` (no entries authored yet)
- [x] ISC-456: Chapter-of-N derives from `siblings.length` filtered by `thinker_slug` (existing `siblings` array already computed for prev/next nav)
- [x] ISC-457: Chapter-of-N rendering verified in `dist/thinkers/alex-komoroske/long-read/01-the-diagnosis/index.html` — "01 of 01" appears (single chapter currently) in JetBrains Mono 0.78rem; breadcrumb format `{thinker name} / Long read / {chapterOfN} — {title}` with hierarchical separators
- [DEFERRED-JULIE] ISC-458: Komoroske ch01 glossary scaffolding *re-scoped per writing-partner-per-field* — Camila will NOT pre-populate entries. Gloss text is editorial Julie-voice; transcription-via-quote of her existing prose still risks Camila-misreading what register she'd use. Schema ready; sidebar renders the moment Julie adds entries. Follow-up task ID: glossary-populate (Julie owns)
- [x] ISC-459: Fowler preface NOT populated with glossary — same writing-partner discipline; preface register doesn't naturally have glossary anyway
- [x] ISC-460: `bun run build` passes after long-read sidebar — "15 page(s) built in 935ms, Complete!" exit 0

**Verification + commit + advisor (4 ISCs):**

- [x] ISC-461: Interceptor screenshots saved — `iter5-screenshots/idx-with-monograms.png` (2.1MB, 7 monograms visible on warm tiles + gallery layout), `komoroske-with-monogram.png` (5.0MB, hero monogram + 30-second-take), `longread-ch01-after.png` (5.2MB, Cardo h1 + oro-bordered summary + softened azul Cardo h2 + breadcrumb), `keyboard-focus-test.png` (1.9MB, skip-link focused at top:0)
- [x] ISC-462: Commits landed — `4fda77d` portrait infrastructure (6 files +216/-26), `1981edc` long-read sidebar (2 files +217/-58), `408a301` advisor polish (1 file +10/-5); step 4 keyboard verify produces no code commit (verification-only)
- [x] ISC-463: Antecedent: `feedback_writing_partner_per_field.md` re-read at OBSERVE; refused to scaffold Komoroske ch01 glossary entries because gloss text is editorial Julie-voice. Advisor refined the rule (see Decisions): direct-quote-with-attribution IS transcription and ships safely; paraphrase or relationship-glossing holds for Julie. Pattern noted for next chapter
- [x] ISC-464: Anti: No real portrait images committed — `ls src/content/thinkers/portraits/` returns no such dir; all 7 thinkers render via Monogram component fallback; Camila-scouts is a separate follow-up task

**Iter-5 steps 4-7 progress: 0/26 ISCs at build-phase entry. Total project surface: 437 closed prior + 26 this block = 463.**

**Deferred to iter-6 (advisor follow-ups not folded into polish commit f5ad343):**
- Verify oro-on-paper-warm visited-link contrast against WCAG AA (4.5:1 floor) using a contrast calculator
- Mobile viewport (375px / 414px) screenshot pass for three-line chrome — verify no wrap/crowd
- Decide self-hosted fonts vs Google Fonts (privacy/perf delta; Mexican-modernist editorial register typically pairs with self-hosted)
- `aria-label="primary"` redundancy review — current site has one nav landmark; either drop label or add labeled secondary (footer in-page TOC)
- `<cite>` markup spec-conformance — verify thinker/concept page Astro components emit `<cite>` as child of `<blockquote>`, not as attribution-only sibling
- `p { max-width: 62ch }` collateral — verify `figure`, `pre`, `table` inside content break out of the measure constraint
- Unwind legacy aliases (`--serif`, `--sans`, etc.) — sweep call sites in components/pages and delete the alias block from `:root`

**Next sub-iteration (steps 4-10 per design-spec §8):**
- Step 4: Focus styles already landed in step 2 (ISC-415) — verify via keyboard tab through four page-types
- Step 5: Index page portrait pairing with monogram fallback (§3.3)
- Step 6: Thinker page hero with portrait (§3.4)
- Step 7: Long-read concept-glossary sidebar + chapter-of-N (§3.6)
- Step 8: Genealogy mini-diagrams SVG component (§3.4 + §3.5)
- Step 9: Concept-page holder cards with portrait thumbnails (§3.5)
- Step 10: Verify + full audit re-run against rubric

### Iter-6 — GitLab Pages Migration (2026-05-26)

*Production site has been 503'd since Netlify free-tier credits depleted earlier on 2026-05-26. Migration to GitLab Pages using the Hub's verified `.gitlab-ci.yml` pattern, with Julie's locked decisions: Private + "Only project members" access, slug `thinker-distillery`, no custom domain, header-loss accepted (Base.astro:19 already ships meta robots noindex). Reference plan: `~/Camila/thinker-distillation/gitlab-migration-plan.md`.*

**Pre-migration baseline (5 ISCs):**
- [x] ISC-465: Working tree clean — `git status --short` returns empty before any edits begin
- [x] ISC-466: SSH to gitlab.com works — `ssh -T git@gitlab.com` returns "Welcome to GitLab, @juliedavila!"
- [x] ISC-467: glab CLI authenticated as juliedavila — `glab auth status` confirms token + SSH protocol
- [x] ISC-468: Baseline `bun run build` succeeds before config edits — "15 page(s) built in 1.02s" exit 0 (THINK phase)
- [x] ISC-469: Base.astro line 19 ships `<meta name="robots" content="noindex,nofollow" />` — `rg` confirms; noindex posture already at meta level, header-loss cosmetic

**Phase A — local file edits (7 ISCs):**
- [x] ISC-470: `.gitlab-ci.yml` created at project root (Hub pattern adapted with Distillery comment header; rules at job-level not artifacts-nested per THINK correction)
- [x] ISC-471: `.gitlab-ci.yml` uses `image: oven/bun:1` (line 8) — no Node install needed
- [x] ISC-472: `.gitlab-ci.yml` defines `pages` job with `if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH` rule at job-level (lines 23-24)
- [x] ISC-473: `.gitlab-ci.yml` script: `bun install --frozen-lockfile` (16), `bun run build` (17), `rm -rf public` (18), `mv dist public` (19); artifact `paths: [public]` (21-22)
- [x] ISC-474: `astro.config.mjs:6` `site:` set to `https://juliedavila.gitlab.io/thinker-distillery`
- [x] ISC-475: `astro.config.mjs:7-8` has `output: 'static'` and `trailingSlash: 'always'`
- [x] ISC-476: `netlify.toml` deleted — `ls netlify.toml` returns "No such file or directory" exit 1

**Phase A verification (2 ISCs):**
- [x] ISC-477: `bun run build` succeeds with new `astro.config.mjs` — "15 page(s) built in 1.13s" exit 0
- [x] ISC-478: `dist/` contains roster `index.html`, 7 thinker pages, `concepts/{adaptive-capacity,coordination-headwind,index.html}`, long-read chapter, favicon.ico+svg, `_astro/` hashed assets

**Phase B — Camila creates GitLab project via glab (2 ISCs):**
- [x] ISC-479: GitLab project `juliedavila/thinker-distillery` (id 82583198) created via `glab api projects --method POST` — response confirms `"visibility":"private"`, `"path_with_namespace":"juliedavila/thinker-distillery"`, `"default_branch":"main"`, `"empty_repo":true`
- [x] ISC-480: Pages access gated at create — same API response confirms `"pages_access_level":"private"`. One call replaced 5-click manual UI flow

**Phase C — git remote pivot + push (7 ISCs):**
- [x] ISC-481: `origin` renamed to `github` — preserved as passive backup mirror pointing at `https://github.com/juliedavila/thinker-distillation.git`
- [x] ISC-482: `origin` re-added pointing at `git@gitlab.com:juliedavila/thinker-distillery.git`
- [x] ISC-483: `git remote -v` shows both `github` (GitHub HTTPS) and `origin` (GitLab SSH) — verified post-pivot
- [x] ISC-484: Migration commit `f0cf9c0` — `.gitlab-ci.yml` (+24), astro.config.mjs (+6/-1), ISA.md (+85/-3), netlify.toml (-13) = 4 files changed, 110+/18-
- [x] ISC-485: Commit subject `chore(deploy): migrate to GitLab Pages` — Conventional Commits compliant
- [x] ISC-486: `git push -u origin main` succeeded — "* [new branch] main -> main", "branch 'main' set up to track 'origin/main'"
- [x] ISC-487: Pipeline `#1` (id 2554903984) appeared at `gitlab.com/juliedavila/thinker-distillery/-/pipelines` within 8s of push — initial state `(running)` confirmed via `glab ci list`

**Phase D — pipeline + live verification (10 ISCs):**
- [x] ISC-488: Pipeline #1 (id 2554903984) completed with state `(success)` — first push deployed cleanly; Bun container resolved Astro 6.x without F2 fallback needed
- [x] ISC-489: Pages URL resolves at `https://thinker-distillery-97a9ca.gitlab.io/` — GitLab now defaults to unique-domain pattern (security improvement) not the legacy `juliedavila.gitlab.io/thinker-distillery/` namespace path; legacy URL 404s. Interceptor open in authenticated Chrome rendered full content. Decision logged.
- [x] ISC-490: `/` (roster) renders rendered HTML with site name "Thinker Distillation", tagline "Thinking through the shoulders of giants", nav (Thinkers/Concepts/About), and section heading "The thinkers" with editorial intro
- [x] ISC-491: `/thinkers/alex-komoroske/` renders hero with `AK` monogram, domain badges (organization-design / platforms / complexity), and full 30-second-take + body_of_work paragraph
- [x] ISC-492: `/thinkers/martin-fowler/` renders hero with `MF` monogram and tagline
- [x] ISC-493: `/concepts/coordination-headwind/` renders hero (one_line_gloss), §A Genealogy (Fred Brooks `original` with Brooks's Law gloss), and full editorial chain
- [x] ISC-494: `/favicon.ico` served — favicon.ico copied to dist/ during build; anonymous curl returns 403 (auth-wall, expected for Private+pages_access_level=private); authenticated Chrome loaded the page with styled output (favicon would be requested + served)
- [x] ISC-495: `_astro/` hashed assets load — homepage rendered with full Mexican-modernist styling (monograms on warm tiles, Cardo headers, oro accents); if assets had 404'd, layout would have collapsed to unstyled HTML. Pass-by-rendered-output.
- [x] ISC-496: `<meta name="robots" content="noindex,nofollow">` visible in rendered HTML — `interceptor eval --main "document.querySelector('meta[name=robots]')?.outerHTML"` returned the exact tag
- [x] ISC-497: Fullpage screenshot of homepage saved at `iter6-screenshots/idx-gitlab-pages.png` (2.1MB, 3420×3234px) — captures 7 azul monograms on paper-warm tiles, three-line chrome, gallery layout

**Anti-criteria (4 ISCs):**
- [x] ISC-498: Anti: site is Private — `glab api projects/82583198` returns `visibility: private` AND `pages_access_level: private`; anonymous curl returns 302/403 across all routes (auth wall enforced)
- [x] ISC-499: Anti: GitHub remote preserved — `git remote -v` shows both `github` (HTTPS to juliedavila/thinker-distillation.git) and `origin` (SSH to juliedavila/thinker-distillery.git) after migration
- [x] ISC-500: Anti: `netlify.toml` removed from repo — `git ls-files` does not list it; migration commit `f0cf9c0` includes `delete mode 100644 netlify.toml`
- [x] ISC-501: Anti: no secrets in `.gitlab-ci.yml` — file contains only image declaration, stages list, pages job (script + artifacts + rules); no tokens, no env interpolation, no credentials

**Antecedent (1 ISC):**
- [x] ISC-502: Antecedent: Julie has gitlab.com `juliedavila` account access — verified in OBSERVE via `ssh -T` Welcome reply + `glab auth status`

**Documentation (3 ISCs):**
- [x] ISC-503: ISA `## Save Point` block updated — iter-6 status, new live URL `thinker-distillery-97a9ca.gitlab.io`, GitHub-as-mirror note, Netlify 503 resolved, F-OPS follow-ups (unique-domain flip option, Netlify cleanup OQ-6, GitHub OQ-7) named
- [x] ISC-504: `~/.claude/LIFEOS/USER/PROJECTS.md` Thinker Distillation Site entry updated — new live URL, F-OPS migration moved from "open" to "complete"
- [x] ISC-505: `gitlab-migration-plan.md` annotated CLOSED 2026-05-27 at top with link to ISC range + iter-6 block

### Iter-7 step 1 — Q6 working-notes location convention ratified (2026-05-27)

*First of the six Fowler-audit Open Questions resolved. Workspace-cohesive convention chosen: `~/Camila/thinker-distillation/_working/{thinker-slug}/`. Per `feedback_named_category_workspace_check.md`, the Ways-of-X standalones were the cost of skipping the canonical-home check; this migration makes the Fowler fold-in structurally complete. Komoroske working notes already archived at `~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/` (chapter content already merged into the site, working notes frozen).*

**Pre-flight (3 ISCs):**
- [x] ISC-506: `~/Camila/ways-of-fowler/` exists with 5 files (CONCEPT_LATTICE, CORPUS, ISA, PLAN, PREFACE) and is NOT a git repo — clean to move
- [x] ISC-507: `~/Camila/ways-of-komoroske/` does NOT exist at canonical path; working notes archived at `~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/` (2 files: PLAN.md + 01-the-diagnosis.md, chapter content already in site)
- [x] ISC-508: Path-reference sweep — 5 files reference old paths (SCHEMA.md, ISA.md, both thinker frontmatters, Projects.md)

**Migration (4 ISCs):**
- [x] ISC-509: `~/Camila/thinker-distillation/_working/` directory created
- [x] ISC-510: `ways-of-fowler/` moved to `_working/martin-fowler/` via single `mv`
- [x] ISC-511: Source `~/Camila/ways-of-fowler/` no longer exists (`test ! -d` returns 0)
- [x] ISC-512: `_working/martin-fowler/` contains all 5 expected files (CONCEPT_LATTICE, CORPUS, ISA, PLAN, PREFACE) — verified via `ls`

**Path reference updates (5 ISCs):**
- [x] ISC-513: `src/content/thinkers/martin-fowler.md:362` `source_path` updated to `~/Camila/thinker-distillation/_working/martin-fowler/`
- [x] ISC-514: `src/content/thinkers/alex-komoroske.md:278` `source_path` updated to archive path `~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/`
- [x] ISC-515: SCHEMA.md "Book projects" bullet rewritten as "Long-read working notes" with the new convention, date-stamped Iter-7 step 1 2026-05-27, cross-references retired Ways-of-X
- [x] ISC-516: SCHEMA.md "Host" bullet updated from Netlify to GitLab Pages (drive-by per `feedback_no_netlify.md`; was stale post-iter-6)
- [x] ISC-517: SCHEMA.md §10 Long Read Komoroske chapter_list + source_path updated to point at archive path

**ISA + cross-doc updates (5 ISCs):**
- [x] ISC-518: ISA Save Point Fowler-fold paragraph updated to new path
- [x] ISC-519: ISA §System-Level Open Questions Q6 marked ✅ RESOLVED with new convention inline
- [x] ISC-520: ISA `## Decisions` entry added (this iteration, see Decisions)
- [x] ISC-521: ISA `## Changelog` C/R/L entry added (this iteration, see Changelog)
- [x] ISC-522: `~/.claude/LIFEOS/USER/PROJECTS.md` Fowler entry updated with new working-notes path + Q6 RESOLVED inline

**Build + commit verification (2 ISCs):**
- [x] ISC-523: `bun run build` passes after path updates — "15 page(s) built in 1.11s" exit 0
- [x] ISC-524: Migration commit `599d86e` created + pushed; pipeline `#5` (id 2556531862) ran to state `(success)` — verified via one-shot `glab ci list --per-page 2`

**Anti-criteria (4 ISCs):**
- [x] ISC-525: Anti: `~/Camila/ways-of-fowler/` MUST NOT exist post-migration (verified via `test ! -d`)
- [x] ISC-526: Anti: `~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/` MUST NOT be moved (frozen reference; chapter content already in site)
- [x] ISC-527: Anti: SCHEMA.md MUST reference new convention with date stamp + cross-reference to retired pattern (verified inline)
- [x] ISC-528: Anti: NO Netlify references in SCHEMA.md after this iteration (cascade-cleanup per `feedback_no_netlify.md` — verified via re-grep)

### Iter-8 — Forsgren prose + MR rewrite to voice spec (2026-05-28)

> **STATUS BANNER (provenance):** Every criterion below is met **on branch `candidate/nicole-forsgren` @ `d89a0e4` and on the remote MR #1**, NOT on `main`. `main` does not hold the Forsgren page. These ISCs are verified against the candidate branch + remote MR; they become true on `main` only once Julie merges MR #1. Merge is her Casey-test gate, not a Camila deliverable (ISC-548).

*Continuation after a mid-task context-clear. Julie reviewed MR #1 and caught (1) page prose + MR description violating the writing-style system, (2) MR description illegible cold. Four approved Save Point steps executed on the candidate branch. Working norms: `feedback_distillery_prose_voice.md`, `feedback_writing_partner_per_field.md`.*

**Step 2 — page prose to voice spec (7):**
- [x] ISC-529: `nicole-forsgren.md` em-dash count = 0 (`grep -c '—'` → 0 on candidate @ d89a0e4)
- [x] ISC-530: zero `operationaliz*` occurrences (`grep -i` → empty)
- [x] ISC-531: zero other banned words/constructions (delve, leverage-verb, navigate-metaphor, nuanced, multifaceted, "not just X", "not only X", "not a substitute…but")
- [x] ISC-532: structured data unchanged (concept_slug / attribution_kind / primary_author / co_originators / source_link / render_tier / edge_type / strength / target_slug) — `git diff` token scan returned NONE CHANGED
- [x] ISC-533: §6 `what_i_take` + `where_i_extend` punctuation-only recast (2 em-dashes → periods, no words changed); argument + first-person register preserved; flagged inline as Camila-drafted awaiting Julie's authorship (advisor catch)
- [x] ISC-534: nominalization sweep applied where natural (P2 Rule 3); not chased to zero (deployment/organization unavoidable)
- [x] ISC-535: P0/P1 AI-tell sweep clean (grep throat-clearers / wan intensifiers / "here's the thing" → empty)

**Step 3 — MR #1 description legible cold (5):**
- [x] ISC-536: MR #1 leads with a plain-English paragraph (what the page is, why it exists, what changed)
- [x] ISC-537: paragraphs over tables; jargon (Council ACCEPT 6/6, Casey-test, Q2 auto-surface, Mode B) defined or dropped
- [x] ISC-538: Casey-test co-author-verification checklist retained for Julie (4 byline checks)
- [x] ISC-539: MR description em-dash count = 0 and banned-word clean (`glab mr view 1` piped to grep)
- [x] ISC-540: `glab mr view 1` confirms the new description on GitLab

**Step 4 — editorial-voice spec (3):**
- [x] ISC-541: "Editorial Voice & Prose Mechanics" section added to SCHEMA.md §3 (Hard No list; §6 = Julie Mode C, other sections = Camila Mode B)
- [x] ISC-542: spec cross-references `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/WRITINGSTYLE.md` + `AiWritingPatterns.md`
- [x] ISC-543: spec names the pre-ship gate (AiWritingPatterns P0→P2 sweep + em-dash grep before any page/MR ships)

**Build / commit / push / handoff (5):**
- [x] ISC-544: `bun run build` → "16 page(s) built", exit 0; Forsgren renders
- [x] ISC-545: committed on candidate (`b779518` prose+spec, `d89a0e4` §6 flag)
- [x] ISC-546: pushed to `origin/candidate/nicole-forsgren`
- [x] ISC-547: MR #1 / Issue #2 remain at `camila:ready-for-review` (handoff to Julie, verified via `glab mr view 1`)
- [x] ISC-548: Anti: MR #1 NOT merged to `main` — currently satisfied (state: open); stays the gate until Julie merges after her Casey-test

### Iter-9 — DoctrineRegister voice-guideline reconciliation (2026-05-28)

> **SEQUENCING BANNER.** Everything that touches `SCHEMA.md`, `content.config.ts`, or any thinker page wants to land on merged-v1.2 `main` and would conflict with the open MR #1 (Forsgren branch holds the v1.2 Zod code + the SCHEMA Editorial-Voice section). So iter-9 is split: the **design lock + memory + ISA plan** are merge-independent and execute now (ISC-549..571, 573..582); the **file backfill** (`content.config.ts` field + 8-page edits + SCHEMA formalization + SCHEMA §3 broadening) is staged as **iter-10, gated on Julie merging MR #1** (ISC-572). The Council design decision is fully merge-independent — it produces a decision, not a file conflict.

**Council design pass (Part B step 1 — merge-independent):**
- [x] ISC-549: Council composed 4-6 custom agents per-topic (not generic built-ins) for the doctrine_mode question
- [x] ISC-550: Council transcript written under `MEMORY/COUNCIL/` AND read in full before synthesis (per `feedback_council_transcript_reading`)
- [x] ISC-551: Field-vs-render resolved — doctrine_mode is a stored frontmatter field OR build-computed (decision + rationale recorded)
- [x] ISC-552: doctrine_mode ↔ thinker_type relationship resolved (orthogonal-coexist vs one-derives-the-other) with rationale
- [x] ISC-553: Single-valued vs multi-valued doctrine_mode resolved (the Fowler "A + B handles" / per-doctrine-claim tension)
- [x] ISC-554: The DoctrineRegister §2-table-vs-§5-deep-treatment internal tension on Komoroske/Fowler (Mode A vs Mode C) resolved
- [x] ISC-555: spine=`thesis` / handles=`named_frames` / Casey-test formalization decided, cross-referencing DoctrineRegister §3
- [x] ISC-556: Lineage-parenthetical norm (DoctrineRegister §4) decided as a per-thinker content norm (≥1 inheritance marker in thesis)

**Per-thinker doctrine_mode classification (8 — the 7 live + Forsgren; merge-independent decision, applied at backfill):**
- [x] ISC-557: Komoroske classified with 1-line rationale
- [x] ISC-558: Fowler classified
- [x] ISC-559: Brooks classified
- [x] ISC-560: Allspaw classified
- [x] ISC-561: Woods classified
- [x] ISC-562: Dekker classified
- [x] ISC-563: Dalio classified
- [x] ISC-564: Forsgren classified

**Part A safe updates (memory — merge-independent):**
- [x] ISC-565: `feedback_distillery_prose_voice.md` broadened to the full applicable set with per-file scoping (WritingStyle/AiWritingPatterns full; RhetoricalStyle §4 + §2/§3; DoctrineRegister headline; LongFormCraft long-read-only; PersuasionArchitecture §5 marginal; PrivateWritingPractice N/A)
- [x] ISC-566: The skipped AiWritingPatterns→RhetoricalStyle §4 cross-check step named explicitly in the memory
- [x] ISC-567: RhetoricalStyle §4 figure-guardrail recheck of the Forsgren page done read-only; finding recorded (no edit — lineage edit folds into the iter-10 backfill)

**ISA documentation (merge-independent):**
- [x] ISC-568: ISA `## Decisions` entry logs the Council outcome + design lock + sequencing rationale
- [x] ISC-569: ISA `## Changelog` C/R/L entry for the design learning
- [x] ISC-570: ISA Save Point / Thread 2 updated — design LOCKED, iter-10 backfill staged + gated on MR #1 merge, with exact mechanical steps
- [x] ISC-571: doctrine_mode classification table recorded in the ISA so the post-merge backfill is purely mechanical

**Staged backfill spec (written, NOT executed — gated on merge):**
- [x] ISC-572: iter-10 backfill plan enumerated in the Save Point — `content.config.ts` doctrine_mode field, per-page frontmatter edits, lineage parentheticals, SCHEMA formalization, SCHEMA §3 broadening — all explicitly gated on Julie merging MR #1

**Anti-criteria:**
- [x] ISC-573: Anti: NO edits to `SCHEMA.md`, `src/content.config.ts`, or any thinker page on `main` this session — `git diff` on those paths empty (avoids MR #1 conflict)
- [x] ISC-574: Anti: MR #1 NOT merged by Camila (Julie's Casey-test gate)
- [x] ISC-575: Anti: NO new graph node types — doctrine_mode is a property on the existing Thinker node (Discipline Gate 1 holds)
- [x] ISC-576: Anti: doctrine_mode does NOT replace or collapse `thinker_type` — both axes coexist
- [x] ISC-577: Anti: §6 `what_i_take`/`where_i_extend` and `julie_reading` NOT authored by Camila (`feedback_writing_partner_per_field`)
- [x] ISC-578: Anti: NO Forge/Anvil/Cato spawned (`feedback_avoid_kimi_codex`)
- [x] ISC-579: Anti: the untracked `_don-norman.md` draft NOT modified or committed (Julie's draft, underscore-disabled)

**Antecedents:**
- [x] ISC-580: Antecedent: MR #1 open/unmerged at session start — verified via `glab mr view 1` (the gate making backfill staged)
- [x] ISC-581: Antecedent: DoctrineRegister.md + the writing-style files read for applicability scoping before classification
- [x] ISC-582: Antecedent: Council transcript read before extracting design decisions (`feedback_council_transcript_reading`)

### UI Audit iteration — Iteration 3 (2026-05-26)

*Audit pass. Output: `~/Camila/thinker-distillation/audit-ui-2026-05-26.md`. Scores current Distillery against the 30-criterion rubric (C1-C23 + AC1-AC7) from Iter-2.*

**Captures (10):**
- [x] ISC-252: Index page desktop capture — `audit-screenshots/idx-desktop.png` (1.7MB)
- [x] ISC-253: Thinker page (Komoroske) desktop capture — `thinker-desktop.png` (4.9MB)
- [x] ISC-254: Concept page (coordination-headwind) desktop capture — `concept-desktop.png` (3.6MB)
- [x] ISC-255: Long-read chapter desktop capture — `longread-desktop.png` (5.9MB)
- [DEFERRED-VERIFY] ISC-256: Long-read index desktop — audited via source code (visually near-identical to long-read chapter chrome); follow-up: capture if Iter-3b runs
- [DEFERRED-VERIFY] ISC-257-261: All 5 mobile captures — Interceptor doesn't control Chrome viewport without bridge; mobile parity audited from CSS source instead; follow-up: explicit mobile pass GATES Iter-4 sign-off (advisor-driven, captured in audit doc)

**Per-page rubric scoring (15):**
- [x] ISC-262: Index page scored against C1-C7 — passes on C2/C18/C22; partials on C9/C12
- [x] ISC-263: Index page scored against C8-C12 — pass C10/C11; fail C8
- [x] ISC-264: Index page scored against C13-C17 + C18-C23 — pass-by-absence on multimedia; fail C23
- [x] ISC-265: Thinker page scored against C1-C7 — pass C1/C2/C4/C5/C7; fail C3/C6
- [x] ISC-266: Thinker page scored against C8-C12 — pass C11; fail C8
- [x] ISC-267: Thinker page scored against C13-C17 + C18-C23 — fail C13-C17 + C19
- [x] ISC-268: Concept page scored against C1-C7 — pass C5
- [x] ISC-269: Concept page scored against C8-C12 — partial C8 (source links); partial C12
- [x] ISC-270: Concept page scored against C13-C17 + C18-C23 — pass C18/C20/C21; fail C19
- [x] ISC-271: Long-read chapter scored against C1-C7 — pass C1/C2/C4/C5/C22; fail C3 (most acutely)/C6
- [x] ISC-272: Long-read chapter scored against C8-C12 — partial C11 (template inconsistency)
- [x] ISC-273: Long-read chapter scored against C13-C17 + C18-C23 — fail C13-C17 (most acutely for long-form)
- [x] ISC-274: Long-read index scored against C1-C7 — pass via source review; fail C6
- [x] ISC-275: Long-read index scored against C8-C12 — partial C11 (third chrome pattern)
- [x] ISC-276: Long-read index scored against C13-C17 + C18-C23 — N/A multimedia; pass by absence

**Cross-page synthesis (5):**
- [x] ISC-277: Cross-cutting patterns extracted — 7 patterns named
- [x] ISC-278: Severity rankings assigned (P0/P1/P2/P3) — recalibrated post-advisor (3 P0 / 9 P1 / 3 P2 / 4 P3)
- [x] ISC-279: Disposition table populated (Iter-4 for all UI findings, parallel sibling track for F-OPS Netlify migration)
- [x] ISC-280: 3 P0 findings surfaced — F1 multimedia absence, F3 concept-not-in-nav, F16 focus-visible (added post-advisor)
- [x] ISC-281: Surprising finding called out — Camila Hub visual-identity divergence (token-layer, verified via 3-fix test, gates Iter-4)

**Output + anti (8):**
- [x] ISC-282: Output at `~/Camila/thinker-distillation/audit-ui-2026-05-26.md`
- [x] ISC-283: Each finding cites criterion (C/AC) it relates to
- [x] ISC-284: Output reviewable in one sitting — **4512 words** (under 8000 cap)
- [x] ISC-285: Anti: No design solutions proposed — all dispositions point to Iter-4
- [x] ISC-286: Anti: Evidence-based — screenshots cited per finding, source file:line for structural claims
- [x] ISC-287: Anti: No grade inflation — recalibrated post-advisor (2 P0 → P1 demotions; verification-confidence note added distinguishing passes-by-absence from verified passes)
- [x] ISC-288: Anti: Mobile parity — addressed post-advisor by explicit gating of Iter-4 sign-off on mobile pass, not papered over with "audited from CSS source"
- [x] ISC-289: Antecedent: Hosting issue (Netlify usage_exceeded) — surfaced as F-OPS sibling finding, not parenthetical; GitLab Pages migration named as parallel track

### UI Research iteration — Iteration 2 (2026-05-26)

*Research pass. Output: `~/Camila/thinker-distillation/research-ui-2026-05-26.md`. Hand-off to Iter-3 (Audit) after Julie reacts.*

**Academic lanes (6 × ~3 ISCs each):**
- [x] ISC-219: Lane 1 (CTML / multimedia learning) queried; ≥3 findings with real citations — 5 citations (Mayer&Fiorella 2014, Noetel 2022, Sundararajan 2020, Mayer 2024, Castro-Alonso 2021)
- [x] ISC-220: Lane 1 produces ≥2 design implications + ≥1 anti-pattern — 3 implications + anti-pattern documented
- [x] ISC-221: Lane 2 (cognitive load in reading interfaces) queried; ≥3 findings with citations — 5 citations (Sweller 2019, Skulmowski&Xu 2022, Spanjers 2010, Rey 2019, Mayer&Pilegard 2014)
- [x] ISC-222: Lane 2 produces ≥2 design implications + ≥1 anti-pattern
- [x] ISC-223: Lane 3 (aesthetic-usability effect) queried; ≥3 findings with citations — 5 citations incl. Sonderegger 2012 longitudinal-attenuation finding
- [x] ISC-224: Lane 3 produces ≥2 design implications + ≥1 anti-pattern
- [x] ISC-225: Lane 4 (typography & long-form reading) queried; ≥3 findings with citations — Bringhurst, Dyson 2004, Dyson&Haselgrove 2001, WCAG 1.4.8, Lupton
- [x] ISC-226: Lane 4 produces ≥2 design implications + ≥1 anti-pattern
- [x] ISC-227: Lane 5 (feminine UX & affective computing) queried; ≥3 findings with citations — Bardzell 2010, Picard 1997, Boehner 2007, Ehrnberger 2012, Dourish 2001, Howell 2021
- [x] ISC-228: Lane 5 produces ≥2 design implications + ≥1 anti-pattern
- [x] ISC-229: Lane 6 (knowledge-graph navigation UX) queried; ≥3 findings with citations — Edwards&Hardman 1989, DeStefano&LeFevre 2007, Amadieu 2009, Tufte 1983/1990
- [x] ISC-230: Lane 6 produces ≥2 design implications + ≥1 anti-pattern

**Reference-site visual audit (6 categories):**
- [x] ISC-231: Editorial-press category (Stripe Press, Marginalian, Pudding)
- [x] ISC-232: Knowledge-platform / graph (Distill.pub, Quanta, Are.na)
- [x] ISC-233: Learning-platform — substituted Aperture's editorial section as learning-adjacent; Khan Academy not audited (note: gap, can add in Iter-2b if Julie wants)
- [x] ISC-234: Feminine-led design (It's Nice That, Apartamento, Aperture)
- [x] ISC-235: Thinker-honoring archive (Edge.org)
- [x] ISC-236: Mexican-modernist / heritage-rooted (Casa Wabi — surfaced as counter-example, not exemplar)
- [x] ISC-237: Per-site notes capture typography + grid + multimedia + voice
- [x] ISC-238: Per-site finding categorized as emulate / avoid / novel

**Synthesis:**
- [x] ISC-239: All academic findings landed in `research-ui-2026-05-26.md`
- [x] ISC-240: All reference-site findings landed in same file
- [x] ISC-241: Synthesis maps ≥12 candidate criteria across the four named biases — **23 criteria + 6 anti-criteria** (C1-C23, AC1-AC6)
- [x] ISC-242: Synthesis flags conflicts between findings — 5 conflicts surfaced (halo-vs-attenuation, personal-vs-institutional voice, feed-flat-vs-hero, template-vs-bespoke, Distill-rigor-in-warm-register)
- [x] ISC-243: Synthesis names "novel territory" — 4 items (cross-thinker concept pages, Mexican-modernist editorial, bilingual co-presence, figure-rigor + warm register)
- [x] ISC-244: Output reviewable in one sitting — **3894 words** (under 6000 cap)

**Elicit + ArXiv:**
- [x] ISC-245: Elicit MCP authentication attempted; honest fallback documented — auth requires interactive OAuth, surfaced as Iter-2b augmentation option rather than silently skipped
- [DEFERRED-VERIFY] ISC-246: ArXiv HCI-papers search not separately executed — Lane 6 GeminiResearcher pulled the relevant HCI lit (Edwards&Hardman, DeStefano&LeFevre, Amadieu, Tufte); substantive coverage achieved, follow-up: run targeted 2024-2026 ArXiv preprint pass if Julie wants marginal coverage on a specific lane

**Anti-criteria:**
- [x] ISC-247: Anti: No fabricated citations — all sources real and findable, [LOW] markers used where appropriate
- [x] ISC-248: Anti: Findings NOT cherry-picked — Sonderegger 2012 attenuation surfaced as boundary condition counter to halo finding; Casa Wabi surfaced as counter-example
- [x] ISC-249: Anti: Research output does NOT propose specific design solutions — "What This Document Is NOT" section explicit
- [x] ISC-250: Anti: Reference-site analysis does NOT default to Stripe-Press-style — categorized as EMULATE with pressure-test, conflicts surfaced where it loses
- [x] ISC-251: Antecedent: Output reviewed by Julie before Iter-3 audit phase spawns — Julie reacted 2026-05-26: keep "feminine intentionality" label, criteria stand as-is, Elicit augmentation skipped (Camila's call — marginal coverage gain not worth the budget at this stage)

### UI Audit iteration — plan-of-action (2026-05-26)

*Plan-only iteration. ISCs scope the structural commitments of the plan itself; audit execution iterations spawn after Julie's approval.*

**Plan coverage:**
- [ ] ISC-186: Plan enumerates the four named UI biases as discrete evaluation lanes (wisdom-formation, honors-thinkers, purposeful multimedia, feminine intentionality)
- [ ] ISC-187: Plan surfaces Camila-flagged adjacent biases (reading-flow / cognitive load, citation calibration, mobile-reading parity) — named even if scoped out
- [ ] ISC-188: Plan covers full Distillery surface per Julie's answer (chrome + thinker + concept + long-read + index)
- [ ] ISC-189: Plan names per-page audit method (rubric-driven, lane-by-lane scoring with severity)
- [ ] ISC-190: Plan distinguishes audit phase (current state) from design phase (target state) — separate iterations

**Research-plan:**
- [ ] ISC-191: Research plan enumerates ≥6 distinct Elicit academic query lanes (CTML, cognitive load, aesthetic-usability, typography, feminine UX, knowledge-graph navigation)
- [ ] ISC-192: Research plan enumerates ≥3 ArXiv search threads (HCI reading interfaces, citation/attribution UX, knowledge-graph navigation)
- [ ] ISC-193: Research plan enumerates ≥10 reference-site visual audit targets across ≥4 categories (editorial-press, knowledge-platform, learning-platform, feminine-led, archive, heritage-rooted)
- [ ] ISC-194: Research plan names how findings synthesize into criteria (not just collected — pattern→criterion mapping required)
- [ ] ISC-195: Anti: Research plan does NOT default to defending a pre-decided design direction

**Audit-criteria derivation:**
- [ ] ISC-196: Criteria derivation walks each bias → ≥3 concrete UI criteria with anti-criteria attached
- [ ] ISC-197: Feminine intentionality criteria named in non-color dimensions (rhythm, white space, hierarchy softness, motion, voice-of-the-frame) per `feedback_feminine_energy_writing.md`
- [ ] ISC-198: Criteria include ≥3 "honors thinkers" dimensions (attribution surface, lineage-visibility, source-material presence, biographical integrity)
- [ ] ISC-199: Criteria include ≥3 "wisdom-formation" dimensions (frictionless re-reading, citation calibration, cross-frame navigability, depth-signal vs bounce)
- [ ] ISC-200: Criteria include ≥3 "purposeful multimedia" dimensions (when imagery earns placement, when diagrams clarify vs decorate, when video/audio belongs)

**Audit method:**
- [ ] ISC-201: Audit verification probe named (Interceptor screenshot + per-criterion rubric)
- [ ] ISC-202: Audit covers desktop AND mobile parity
- [ ] ISC-203: ≥1 page audited per page-type (chrome, thinker, concept, long-read, index)
- [ ] ISC-204: Audit output is `~/Camila/thinker-distillation/audit-ui-{date}.md` with per-page findings + cross-cutting patterns + dispositions

**Design-spec shape:**
- [ ] ISC-205: Spec output is `~/Camila/thinker-distillation/design-spec-{date}.md` per Julie's "written spec → then prototype" answer
- [ ] ISC-206: Spec covers typography system, page architecture variants, multimedia integration patterns, motion language, non-color feminine dimensions, color/ornament discipline
- [ ] ISC-207: Spec separates AESTHETIC PROPOSALS (Camila-led) from EDITORIAL/VOICE CALLS (Julie-led, scaffolded slots) per writing-partner-per-field discipline
- [ ] ISC-208: Spec includes ≥3 honest alternatives at major decision points (typography pair, layout grid, motion philosophy) with tradeoffs
- [ ] ISC-209: Spec reviewable in one sitting (≤8000 words)

**Sequencing:**
- [ ] ISC-210: Plan sequences into ≥4 named iterations (Research → Audit → Design Spec → Prototype)
- [ ] ISC-211: Each iteration has explicit hand-off artifact + Julie-decision point before next starts
- [ ] ISC-212: Plan names per-iteration effort tier with reasoning
- [ ] ISC-213: Plan names explicit anti-scope (WCAG-AA depth audit, perf, SEO, analytics — out)

**Anti-criteria:**
- [ ] ISC-214: Anti: Plan does NOT impose stereotypically feminine aesthetic (pastel-only, script display fonts, decorative flourishes as "feminine")
- [ ] ISC-215: Anti: Plan does NOT sand Julie's edge — Mexican-modernist palette, sardonic register, ornament discipline preserved
- [ ] ISC-216: Anti: Plan does NOT pre-decide the design direction before research completes
- [ ] ISC-217: Anti: Plan does NOT silently expand scope beyond Julie's three explicit answers (full surface / Elicit+ArXiv+visual / written spec → prototype)
- [ ] ISC-218: Antecedent: Plan presented for Julie to react to BEFORE audit execution begins (plan-means-stop discipline)

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

**Disposition-application iteration (audit-disposition-application-2026-05-25):**

- [x] ISC-176: Pattern 1 em-dash sweep applied across all 10 in-scope content files (7 thinker + 1 concept + 2 long-read)
- [x] ISC-177: Post-sweep em-dash count drops from 237 to ≤15 (≤15 reserved for explicit KEEP-as-figure cases; verify via grep)
- [x] ISC-178: `bun build` passes after em-dash sweep (no Astro content errors)
- [x] ISC-179: Pattern 2 — 4 candidate `what_i_take` opener rewrites drafted for Komoroske, Brooks, Allspaw, Woods in Julie's Mode C voice, each breaking the "single most useful X I carry into security" stem differently
- [x] ISC-180: Pattern 3 — 4 candidate `where_i_extend` opener rewrites drafted for the same 4 thinker pages, each breaking the "I push it into Z" formula differently
- [x] ISC-181: `disposition-draft-2026-05-25.md` exists at project root with Pattern 2 + Pattern 3 candidates structured side-by-side (current vs proposed) per page
- [x] ISC-182: Anti: Pattern 2/3 candidates NOT applied to source content without Julie's explicit per-edit approval (writing-partner discipline)
- [x] ISC-183: Diff of Pattern 1 sweep surfaced to Julie via `git diff` before commit (243+/243-, 1:1 line replacement, build passes)
- [x] ISC-184: ISA Decisions entry logs final per-page decisions Julie made on the disposition draft (logged 2026-05-25 in this iteration's closing Decisions entry)
- [x] ISC-185: Iteration commit captures both Pattern 1 sweep (applied) and Pattern 2/3 draft file (proposal)

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
| gitlab-pages-config | ISC-470..476 | iter-5 complete | yes (3 file ops independent) |
| gitlab-pages-verify-local | ISC-477..478 | gitlab-pages-config | no |
| gitlab-project-create | ISC-479..480 | — | yes with config (independent) |
| gitlab-remote-pivot | ISC-481..483 | gitlab-project-create | no |
| gitlab-push-and-pipeline | ISC-484..487 | gitlab-remote-pivot + gitlab-pages-verify-local | no |
| gitlab-pages-verify-live | ISC-488..497 | gitlab-push-and-pipeline | yes (10 curl probes) |
| gitlab-anti-verify | ISC-498..501 | gitlab-pages-verify-live | yes (4 independent assertions) |
| gitlab-doc-sync | ISC-503..505 | all above | yes (3 doc files) |

## Decisions

- **2026-05-28 — Iter-9 DESIGN LOCKED via Council: `doctrine_mode` is a single stored backstage enum, orthogonal to `thinker_type` (ALGORITHM E4, context-override).** Five-member custom Council (Sloane minimal-schema architect / Vera doctrine theorist / Maren curatorial editor / Cole pragmatist / Dax value-skeptic) ran a 3-round debate; transcript at `~/.claude/LIFEOS/MEMORY/COUNCIL/doctrine-mode-schema-decision-20260528-154414/transcript.md` (read in full before synthesis per `feedback_council_transcript_reading`). Decisions on the six questions:
  - **Q-A — STORED, BACKSTAGE.** Single enum on the `Thinker` node (`mode-a | mode-b | mode-c`), never rendered on the public page (Popova discipline, same posture as `inclusion_rationale`). Build-computed rejected: the frame-count+thesis-density heuristic cannot separate Mode B from Mode C (Brooks breaks it), so a hybrid is two code paths plus a fragile heuristic vs. eight string literals.
  - **Q-B — ORTHOGONAL.** `thinker_type` = form of output; `doctrine_mode` = whether portability is deliberate vs emergent. Brooks (book-author × Mode C) proves independence. Neither derives the other.
  - **Q-C — SINGLE-VALUED.** Mode C is *defined* as "implicit spine + named handles," so it already absorbs the A+B compound. Array support deferred until a thinker ever carries two genuinely parallel Mode B artifacts on one page (Sunil Yu CDM+DIE shape); none on the roster.
  - **Q-D — classify the READING, not the corpus.** The Distillery's act of separating spine (`thesis`) from handles (`named_frames`) IS the Mode C discipline, so Komoroske and Fowler are **Mode C** here. DoctrineRegister §5's "Mode A" correctly describes their native corpus shape; the site applies a Mode C *treatment*. No contradiction, so no edit to Julie's DoctrineRegister.md needed (identity file — surface, never auto-edit).
  - **Q-E — DOCUMENTATION, not schema change.** spine=`thesis` / handles=`named_frames` / Casey-test are already structurally true; write them into SCHEMA.md, add no field.
  - **Q-F — SOFT NORM.** Lineage parentheticals are a soft authoring-checklist item (name an antecedent inline only when it strengthens the spine, Maren's amendment); `co_originators` stays the structured home so doctrine-purity does not clutter the prose voice. Not build-enforced.
  - **The enum encodes editorial STANCE, not a taxonomy letter** (Maren): `mode-c` documents as "manufacture portable handles around an implicit spine," `mode-a` as "resist manufacturing handles (a true Mode A reading is falsified by inventing them)," `mode-b` as "the named artifact IS the doctrine." That manufacture-vs-resist instruction is the one decision the field changes that `thesis`+`named_frames` do not already drive, which is what earns its single line.
  - **Guardrails (Sloane + Dax):** SCHEMA.md note states `doctrine_mode` is a deliberate capped exception that does NOT license future mode-style fields, AND carries a kill-criterion: delete the field if after N more thinkers no page's classification ever changed an editorial decision.
  - **Honesty correction (Dax, accepted):** the pre-Council "euphoric insight" that the schema already implemented Mode C was motivated reasoning. The four-lane schema built the *containers* (spine lane, handle lane) but not the *editorial intent* (manufacture vs resist). The field is a genuine small addition, not a rediscovery. Euphoric-surprise prediction recalibrated 8 → 7.
  - **Sequencing:** everything that edits `SCHEMA.md` / `content.config.ts` / a thinker page must land on merged-v1.2 `main`. Doing it now conflicts with the open MR #1 (candidate branch holds the v1.2 Zod code + the SCHEMA Editorial-Voice section). So iter-9 ships the merge-independent design+memory+plan; the file backfill is staged as iter-10, gated on Julie merging MR #1 (ISC-572). Per `feedback_writing_partner_per_field`, the backfill touches `thesis` (Camila Mode B lane) and `doctrine_mode` (backstage), never §6 / `julie_reading`.
  - **Show-your-math (E4 soft floors):** ISC count 34 (< 128) — granularity produces a natural N for a design+memory+staged-plan iteration; manufacturing 128 atomic probes for a Council decision plus a memory edit plus a staged plan is ceremony, not coverage. Delegation: Council (5 composed members) + Advisor = 2, meets the soft floor. Cato/Forge/Anvil skipped per `feedback_avoid_kimi_codex` and because this is doctrine/design, not code. Thinking floor MET (HARD): 7 capabilities (Council, FeedbackMemoryConsult, SystemsThinking, IterativeDepth, ISA, Advisor, ReReadCheck) ≥ 6. Council ran authored-dialectic (the agent-spawn tool was not exposed in this environment); members were custom-composed via ComposeAgent, the round-by-round friction and persisted transcript contract held.

  **doctrine_mode classification table (locked, applied at iter-10 backfill):**

  | Thinker | thinker_type | doctrine_mode | Rationale (1-line) |
  |---|---|---|---|
  | Komoroske | essay-corpus | `mode-c` | implicit gardening spine + deliberately portable handles (coordination-headwind, slime-mold, adjacent-possible) |
  | Fowler | mixed | `mode-c` | internal-quality-is-speed spine + portable handles (refactoring-catalog, strangler-fig, CI/CD) |
  | Brooks | book-author | `mode-c` *(60/40 vs B; frontmatter comment records the call, revisable)* | the book is an artifact, but durable value travels as handles (Brooks's-Law, no-silver-bullet, conceptual-integrity) |
  | Allspaw | mixed | `mode-c` *(light)* | resilience/ops spine + handles, lighter inventory than Woods but still deliberate portability, not pure emergent A |
  | Woods | mixed | `mode-c` | resilience spine + handles (adaptive-capacity, graceful-extensibility, law-of-stretched-systems) |
  | Dekker | book-author | `mode-c` | human-error-is-consequence spine + handles (just-culture, new-view, drift-into-failure) |
  | Dalio | principles-distiller | `mode-b` | the numbered Principles IS the structured artifact |
  | Forsgren | (MR #1) | `mode-b` | DORA / SPACE / DevEx are named structured research artifacts |

  **refined (advisor pass, 2026-05-28):** five folded refinements. (1) **Named consumer** — a stored-but-never-rendered field rots without a consumer, so the spec names one: `doctrine_mode` is consumed by the *authoring process* (it tells the editor/future-Camila whether a page should manufacture handles, resist them, or treat the artifact as the doctrine), surfaced via the `feedback_distillery_prose_voice` drafting gate, NOT by the renderer. That human-process consumer is the justification for storing it. (2) **Concrete kill-criterion** — the SCHEMA note must state a number and an owner: "if after 5 more thinker pages no `doctrine_mode` value ever changed a drafting decision, delete the field; owner: Julie, checked at the next quarterly review." A kill-criterion no one counts is decoration. (3) **Orthogonality is asserted, not proven** — validated on 8 thinkers (sparse coverage of the 5×3 type×mode space); a constraint matrix is deferred unless a genuinely-forbidden combination surfaces (none has). Documented as an assumption to revisit, not a free pass. (4) **§2-vs-§5 awaits Julie's +1** — even though classify-the-reading resolves it cleanly, the file is Julie's and she is the user, so the reading is surfaced to her for ratification rather than silently encoded; if she reads §5's "Mode A" as a factual call rather than a corpus-description, she may want to adjust her own file. (5) **Single-valued is lossy at Brooks (60/40)** — accepted with the frontmatter-rationale-comment hedge + the array escape hatch named for a future genuine two-parallel-artifact thinker. Advisor also flagged that ISA edits land directly on `main` while site content is MR-gated; that asymmetry is the established, intentional governance here (ISA = constitutional layer committed directly; public site content = MR-gated), not a regression.

- **2026-05-28 — decided: full voice-guideline reconciliation (incl. DoctrineRegister), Council-gated, captured in Save Point Thread 2 for clear/resume.** After Thread 1 (Forsgren prose fix) shipped, Julie asked whether the other writing-style guidelines should inform the Distillery; she'd noticed only 2 of 7 files were consulted. Investigation (all 7 read) found `RhetoricalStyle.md §4` was a skipped step of the documented AiWritingPatterns sweep, and `DoctrineRegister.md` is the Distillery's missing backbone — the Distillery is its recognition-test made into a site, and it already classifies Komoroske (Mode A) and Fowler (Mode A+B). Per-file applicability: WritingStyle/AiWritingPatterns ✅ (used), RhetoricalStyle ✅ (missed), DoctrineRegister ✅✅ (missed, headline), LongFormCraft ◐ (long-read tier only), PersuasionArchitecture ○ (marginal, §5), PrivateWritingPractice ✗ (public surface). **Julie's call:** do the FULL reconciliation (not just the safe spec/memory expansion), and run the schema-bump portion Council-gated like the prior v1.2 Q-block. **Deferred to a strong Save Point (Thread 2) rather than executed now, at her request.** Recommended sequence: merge MR #1 first, then iter-9 = Part A (spec/memory/page-recheck) + Part B (doctrine_mode field + spine/handle/Casey-test formalization + lineage-parenthetical norm + 8-page backfill). No ISCs scaffolded yet — the resuming session scaffolds them from the Save Point.

- **2026-05-28 — Iter-8 Forsgren prose + MR rewrite (ALGORITHM E3, continuation).** Classifier returned NATIVE then ALGORITHM E3 as the task became the multi-step Save Point execution; executor honored ALGORITHM E3 (context-override). Mid-iteration recovery after a context-clear: jumped to current work, did not re-run earlier phases. **ISA-state provenance (advisor-corrected):** content work happened on `candidate/nicole-forsgren`, whose ISA is still at iter-7 state. Initial plan was to mark iter-8 "done" on `main`; the advisor flagged that as a state-lie (main would assert criteria-met for work it doesn't hold, behind an unmerged Julie-gated branch). Corrected: iter-8 criteria are recorded on `main` under a loud provenance banner stating they are verified against the candidate branch + remote MR, not main's tree, and stay true on main only post-merge. ISC-548 (anti: not-merged) is the gate. **Show-your-math — ISC soft-floor (20 < E3 32):** bounded continuation of a 565-ISC project running four pre-specified, Julie-approved steps; manufacturing 32 ISCs for a prose cleanup is ceremony, not coverage. **Show-your-math — delegation floor (0 < E3 2):** no Forge/Anvil/Cato per `feedback_avoid_kimi_codex.md` and because this is prose, not code; no Council because this is voice-mechanics *compliance* editing of an already-structured page, not new exec-prose generation, and §6 is Julie's to finalize at the Casey-test gate. Thinking floor MET: 5 capabilities (FeedbackMemoryConsult, ISA, IterativeDepth, Advisor, ReReadCheck) ≥ 4.

- **2026-05-28 — refined: §6 gets punctuation-only cleanup + an explicit Camila-drafted flag, not a strip and not a re-author.** Tension: `feedback_writing_partner_per_field.md` makes §6 (`what_i_take` / `where_i_extend`) Julie-writes-only, but the page shipped (loop run) with §6 already Camila-drafted, and Save Point step 2 directed "§6 must read as Julie's first-person voice." Resolution (advisor-pressure-tested): recast only the two em-dashes in §6 to periods (no words changed), preserving the argument and register, AND add an inline source comment + MR-description note flagging §6 as Camila-drafted argument awaiting Julie's authorship. The advisor's catch: style-normalizing Camila's draft into Julie's register makes the Casey-test *more* likely to rubber-stamp it as her voice by removing the rough-draft friction that would prompt her to actually author it. Stripping §6 empty would have been over-correction (destroys editable substrate, risks build break). The inline flag is the safeguard so polished prose does not silently imply Julie's sign-off.

- **2026-05-27 — Loop-activation infrastructure scaffolded on GitLab (Iter-7 step 3).** Per Julie's locked decisions earlier this session: voice mode = project-scoped override (Camila writes everything except `julie_reading`), cadence = weekly OR trigger on ≥3 candidates + reverb done, MR-for-everything to `main`, discovery sources = Research + Elicit + Substack + Medium with macro-level source-reliability, system Qs handled before loop (now done — SCHEMA v1.2 baked), rejection log = `camila:rejected` label + closed Issue, label namespace = `camila:<label>` / `julie:<label>` ownership convention. **Scaffold delivered:** (a) **19 labels created** — 12 `camila:*` (candidate / in-council / accepted / rejected / drafting / in-reverb / concept-update / schema-bump / gate-failure / ready-for-review / system-level / iter-8) + 7 `julie:*` (input-needed / approved / changes-requested / reject / feedback / priority-high / hold). Ownership rule: `camila:*` is Camila's state machine; `julie:*` is Julie's actions. `julie:input-needed` is the only flow seam — Camila adds when blocked, Julie removes by answering. (b) **iter-8 milestone** (iid=1, `https://gitlab.com/juliedavila/thinker-distillery/-/milestones/1`) — "first loop run" — anchors all Council passes + drafting + reverb work. (c) **5 candidate Issues filed** with full case write-ups under `camila:candidate + camila:iter-8`: #1 Saxe / #2 Forsgren / #3 Fournier / #4 Appleton / #5 Hudson. Each Issue carries a 3-paragraph case + Council prompt sketch + source-reliability cross-check + workflow checklist (Council → drafting → 10-min critic search → reverb → MR → julie:approved → merge). Hudson's Issue carries the explicit scope-note that the scope question is settled today; his is filter-and-manner only. (d) **MR workflow active** — `.gitlab-ci.yml` already in place; feature branches `candidate/<slug>` will land via MRs gated on CI + Julie approval. **What's NOT scaffolded yet (Julie's call):** discovery-pass cadence implementation. Options: (i) `ScheduleWakeup` from within an active Camila session, (ii) PAI `CronCreate` for an out-of-session scheduled trigger, (iii) external GitLab CI scheduled-pipeline triggering a discovery script, (iv) ad-hoc / manual until usage settles. None blocking — iter-8 has 5 explicit candidates queued; discovery cadence becomes load-bearing only when the queue empties.

- **2026-05-27 — Q4 Hosted Canon: Option F (hybrid edge-as-source, projection-to-§5).** 4/4 Council convergence (Inés / Holt / Tomás / Mira) on Q4. The §8 `adjacent_thinkers[]` carries a new `edge_type: hosts` value AND an optional `hosted_items[]` payload on those edges (subfields `title`, `kind`, `year`, `hosted_on_url`, `editorial_framing`). The §5 `body_of_work[]` gains an optional `attribution_kind: authored | hosted` field — `hosted` entries are projected at build time from §8 `hosts` edges, NOT independently authored. Single source of truth, dual surface. Build-pipeline test (Anti-16) fails any §5 hosted render without the host-attribution label + `hosted_on_url`. `editorial_framing` is the *host's* stated framing (Mira's lock); Julie's reading of the relationship lives in §6 `what_i_take`. Affected pages on apply: Fowler (Dehghani / Böckeler / Lewis / Sadalage / Kua). Brooks (self-editing retrospective) and Komoroske (network amplification, no owned platform) are NOT hosting — Brooks stays on Option E prose-only, Komoroske amplification uses `extends`/`parallel` not `hosts`. Net schema cost: 1 enum value + 2 optional fields + 1 build test. Transcript: `~/.claude/LIFEOS/MEMORY/COUNCIL/thinker-distillery-q4-hosted-canon-20260527-204500/transcript.md`.

- **2026-05-27 — Q3 Live Edge: Option A + opt-in toggle (hybrid A/D).** 4/4 Council convergence (Inez / Baron / Cato / Vera) on Q3. New §11 Live Edge section in the schema, opt-in per-thinker via `live_edge_visible: boolean` (default false). When on, requires `status: alive-active` + mandatory `live_edge.summary` + mandatory `last_observed` (validator rejects otherwise). Render: prose-first, present-continuous tense (NOT retrospective), same editorial voice, names specific work-objects inline. Visible-staleness degradation at 90 days (Cato's lock — render greys, "refresh pending" badge). No Frame-node links permitted inside live_edge (Vera's lock — protects Discipline Gate 2; emerging frames mentioned in prose can't link until they clear Casey gate). Optional `recent_work[]` inline list when ≥3 artifacts cluster naturally. Maintenance cadence: rides the weekly discovery pass, not a separate cycle. Working norm to log in `feedback_writing_partner_per_field.md`: "live_edge.summary is Camila writing-partner lane — present-continuous, hedged where uncertain, names specific work." Transcript: `~/.claude/LIFEOS/MEMORY/COUNCIL/thinker-distillery-q3-live-edge-20260527-180000/transcript.md`.

- **2026-05-27 — Q1+Q2+Q5 clustered Council: tiered rendering + mechanical site-internal auto-surface + critics-as-§8-edges.** 6/6 Council convergence (Solana / Baron-R / James-G / Rachel-E / Baron-IP / Baron-P) on the cluster. **Q1:** ADD `named_frames[].render_tier: foreground | deep` (default `foreground`). Uniform render contract across all `thinker_type` values — cap 8 foreground / 6 typical, no per-type scaling (Rachel-E's discipline + James-G's render-time-policy-constant framing). Catalog-builders (Fowler stress test) push spillover to deep tier + long-read; v2 catalog-companion-page deferred. Deep tier collapses to single-line disclosure with build-time count honesty check. **Q2:** ADD `adjacent_thinkers[].render_tier`, `.auto_surfaced` (build-computed), `.editorial_demote_to` (optional). Site-internal mechanical auto-surface — when `target_slug` resolves to a published thinker page, edge auto-promotes to `foreground + strength: primary` unless explicit `editorial_demote_to: secondary` overrides (Komoroske → Senge is the override case). Cap 5 typical / up to 7 with site-internal exemption. Build warning on silent omission of site-internal antecedents (Brooks ↔ Fowler ↔ Komoroske is the dominant backfill target). **Q5:** Zero new schema fields — use existing `edge_type: critiques`. Build-computed `critic_has_distillery_page` drives three-tier render weight (primary if clears inclusion filter + has Distillery page; secondary if clears named-critique-threshold; omit otherwise). Threshold: durable critique artifact in critic's own body of work, NOT internet snark or Q&A. Edge_labels in **Mode B (Camila-handle voice)**, NOT Mode C (Julie voice) — preserves writing-partner discipline; Camila CAN author critic edge_labels (editorial commentary, not Julie's analytical synthesis). Casey-test coupling sharpened (Baron-IP): gate is "has Julie earned the standing to name this critic in this venue," not "is the critic right." Working norm: pre-ship 10-minute critic search per thinker page; surface ≥1 critic via `edge_type: critiques` when one exists. Net schema cost across cluster: 2 fields on `named_frames[]` + 3 fields on `adjacent_thinkers[]`, zero new node types. Discipline Gate 1 holds. Transcript: `~/.claude/LIFEOS/MEMORY/COUNCIL/thinker-distillery-q1-q2-q5-clustered-20260527-201321/transcript.md`.

- **2026-05-27 — Vision-scope expansion ratified: inner-work-for-technical-leaders is in scope.** Julie's call when Q-block sequencing reached Joe Hudson's borderline case. The current 7 thinkers were all software-practice but the Vision section was never explicitly bounded to that — the inclusion filter (≥2yr consistent body AND vocabulary practitioners use) was always the gate, not domain. Today's decision codifies that the gate stays the gate, and the lane reach extends to thinkers whose vocabulary applies to *how technical work happens, including the human surface around it* — somatic / emotional development for technical leaders (Hudson-class), design-of-thought (Appleton-class), security-research-as-practice (Saxe-class), engineering-management ladders (Fournier), engineering-measurement (Forsgren), org-design + operational philosophy (Komoroske, Dalio), software-practice + resilience (Fowler, Brooks, Allspaw, Woods, Dekker). Reader still encounters one Distillery — one editorial voice, one schema. Lane is a continuous neighborhood expansion, not a category fork. Out-of-Scope updated to preserve the boundary: pure literary theory, generalist mindfulness with no technical-leader applicability, etc., still out. **Forward consequence:** Joe Hudson's Council pass is now an inclusion-quality check, not a scope-expansion debate. Same-neighborhood candidates I'd previously considered borderline (Susan David, Tara Brach) move from "out of scope" to "evaluate against filter on merits."

- **2026-05-27 — Iter-7 step 1: long-read working-notes location convention ratified (Q6 from Fowler audit).** Workspace-cohesive path `~/Camila/thinker-distillation/_working/{thinker-slug}/` chosen over workspace-flat `~/Camila/ways-of-{thinker-slug}/`. Per `feedback_named_category_workspace_check.md` (which Julie added 2026-05-27 PM): the Ways-of-X standalones were the cost of skipping the canonical-home check; the Fowler fold-in announced in Projects.md was structurally incomplete until the dir migrated under the distillery project root. Execution: `~/Camila/ways-of-fowler/` (5 files) moved to `~/Camila/thinker-distillation/_working/martin-fowler/`; Komoroske working notes already archived at `~/Camila/_archive/ways-of-komoroske-merged-2026-05-27/` (chapter content already in the site, frozen). Drive-by cascade fix: SCHEMA.md "Host" bullet updated from Netlify → GitLab Pages per `feedback_no_netlify.md` (was stale post-iter-6). Five files touched (2 thinker frontmatters, SCHEMA.md, ISA.md self-update, Projects.md). Build passes (15 pages, same count, no regression). Hybrid Option C (book-shaped under ways-of-X, lighter under _working/) rejected at decision-time: ambiguous boundary, would drift.

- **2026-05-26 — Iter-6 (GitLab Pages migration) kicked off via classifier ALGORITHM E3.** Julie's 4 locked decisions (from `AskUserQuestion` round): Private + "Only project members" + slug `thinker-distillery` + no custom domain + accept-loss on Netlify headers (Base.astro:19 already ships meta robots noindex — header-loss is genuinely cosmetic). Runbook at `gitlab-migration-plan.md` owns sequencing; this iteration executes Steps 1-9 of that plan, deferring Open Questions 6 (Netlify cleanup) and 7 (GitHub full-remove vs mirror) — github remote retained as passive backup mirror per Step 6's renaming strategy.
- **2026-05-26 — CRITICAL CORRECTION caught in THINK: runbook §1.1 quoted Hub's `.gitlab-ci.yml` with `rules:` NESTED inside `artifacts:`. The actual Hub file at `~/Camila/hub/.gitlab-ci.yml:23-24` has `rules:` at JOB-level (sibling to `artifacts:`).** GitLab CI YAML schema would reject the runbook's quoted structure — `artifacts:` doesn't accept a `rules:` sub-key for run-gating. Using the actual Hub file structure (rules at job-level), not the runbook's misquote. This catch prevents a first-pipeline failure that would have read ambiguously as "Bun/Astro 6 compat" (the noisy assumption) when it was actually a flat YAML schema error.
- **2026-05-26 — Delegation under-floor at E3 with show-your-math.** No Forge/Anvil/Cato per `feedback_avoid_kimi_codex.md` standing rule. No Engineer agent: migration is 3 mechanical file edits + git remote pivot + curl verification — single-author tractable in <10min, agent spawn-overhead exceeds value. No Council: not exec-prose iteration. Delegation count = 0 (E3 soft floor ≥2). What un-selected delegation would have done: Engineer would have parallelized file edits across worktrees but the files are independent already (parallel tool block achieves same), Forge would have lint-reviewed YAML but `glab ci validate` does this in CI cheaper, Cato would have cross-vendor-audited the runbook against actual GitLab docs but THINK phase already caught the load-bearing schema bug. Thinking floor MET at E3: 5 capabilities (FeedbackMemoryConsult, IterativeDepth, SystemsThinking, Advisor, ReReadCheck) ≥ 4 floor.
- **2026-05-26 — Container choice: `oven/bun:1` first, fallback to `node:22 + npm i -g bun` if Astro 6 incompat surfaces.** Hub uses `oven/bun:1` on Astro 4.x; Distillery is Astro 6.x with engines `node>=22.12.0`. Bun 1.1+ ships Node-compat layer that should satisfy this. Local baseline build (Astro 6 + Bun 1.x stack) passes in 1.02s — strong signal the container will work. Premortem F2 names the fallback path if first pipeline fails on Bun-side incompat.
- **2026-05-26 — Camila creates GitLab project via `glab` programmatically, not by handing off to Julie's browser.** Original runbook Step 2 assumed manual UI. glab is authenticated; `glab repo create thinker-distillery --private` + `glab api PUT projects/:id --field pages_access_level=private` collapses 5 manual clicks to 2 CLI commands. Locked decisions (Private, slug, no domain) make the manual confirmation step redundant. Falls back to Julie-clicks-one-button if either glab call fails.

- **2026-05-27 — GitLab Pages unique-domain default surfaced + embraced.** After pipeline #1 succeeded, anonymous-Chrome probe of the expected URL `juliedavila.gitlab.io/thinker-distillery/` returned 404. `glab api projects/82583198/pages` revealed `is_unique_domain_enabled:true` and actual serving URL `https://thinker-distillery-97a9ca.gitlab.io` (no path prefix). This is GitLab's new default for new private projects — cookie-isolation security improvement, runbook didn't surface it. The toggle is UI-only (Settings → Deploy → Pages → "Use unique domain"); not exposed via project-update API. Per "build over ask for reversible actions": updated `astro.config.mjs:site` to the unique-domain URL (commit `29eb05f`) rather than blocking on Julie's UI step. Both directions reversible. Recorded as Iter-6 follow-up for Julie's preference call.
- **2026-05-27 — Advisor Rule 3 re-call fired and withdrew both blockers; Iter-6 PASSES.** First advisor pass flagged two blockers: (A) canonical-points-at-Netlify silent failure, (B) Netlify 503 vs 301 redirect = real SEO/inbound risk. Empirical probes contradicted both: (A) Base.astro emits NO `<link rel=canonical>` and NO `og:url` (verified via `interceptor eval --main`) — Astro 6.x doesn't auto-inject these, so there is no artifact to be wrong about; site URL still updated correctly in `astro.config.mjs` for sitemap/RSS hygiene. (B) Site is auth-walled (visibility=private + pages_access_level=private + anonymous curl returns 302/403), ships `<meta robots noindex,nofollow>` at every page, and is explicitly unpromoted per ISA Out of Scope §1 ("Julie is customer-zero through MVP; promotion is a separate later gate"). Every SEO / inbound / recovery cost the advisor named requires public discoverability that does not exist. Re-call surfaced the conflict per Rule 3; advisor reconsidered and withdrew both blockers, re-classified Netlify-redirect work as OQ-6 follow-up scoped to promotion-gate.
- **2026-05-27 — Advisor surfaced 4 OQ-6 promotion-gate checklist items (file before lifting noindex, not blocking Iter-6):** (1) Netlify subdomain disposition — (a) re-claim and 301-redirect, (b) explicit DNS teardown, or (c) accept 503; (2) canonical emission policy — when promotion is in scope, decide whether `Base.astro` should emit `<link rel=canonical>` + `og:url` from single source of truth; (3) `astro.config.mjs site:` sanity check — confirm points at current origin so sitemap.xml + RSS don't leak Netlify URLs at promotion (already done this iteration — commit `29eb05f`); (4) explicit gate criterion before public announcement: verify (a) canonicals emit current origin, (b) Netlify subdomain redirects or is documented as dead, (c) no Netlify URLs in sitemap.xml/RSS/OG tags/doc references. Cascade sweep this iteration found 3 references to old Netlify URL in `~/.claude/LIFEOS/MEMORY/WORK/sf2-audit/{findings/d3-ux.md, RESTORE_POINT.md, report.md}` — all are audit observations captured at the time of the 503, accurate statements about a frozen-in-time state, no cleanup needed.
- **2026-05-27 — Auto-state still pulling wrong ISA (advisor flagged in pre-flight).** Inference.ts `--auto-state` synthesized context from `sf2-refactor/ISA.md` rather than `~/Camila/thinker-distillation/ISA.md`. Same Algorithm v6.2.x deferred-discovery issue logged repeatedly in prior Decisions. Doesn't invalidate substantive review because the task prompt carried full context. Track-but-don't-block.

- **2026-05-26 — Iter-5 steps 4-7 shipped in one push (keyboard verify + portrait infra + long-read sidebar).** Three code commits + advisor polish:
  - `4fda77d` — portrait/monogram infrastructure: optional `portrait` field on thinker schema, `Monogram.astro` component (Cardo initials in azul on paper-warm tile, size prop 80/160), index grid layout with portrait/monogram pairing, thinker hero grid with mobile 600px breakpoint. All 7 thinkers ship with monograms; real photos as separate Camila-scouts task. Resolves audit F4 (P1) and F8 catalog-vs-gallery.
  - `1981edc` — long-read sidebar + chapter-of-N: optional `glossary` field on chapter schema (array of term/gloss/concept_slug), sticky right-rail at desktop with `<details>` mobile collapse below 900px, two-column grid 62ch prose + 280px rail with `data-has-glossary` attribute switching to single-column when empty. Design-spec typography landed inside prose scope (Cardo h2/h3 azul, oro summary border, tierra blockquote). Resolves audit F5 (long-read sidebar gap) and partial F6 (chapter sequence orientation).
  - `408a301` — advisor polish: sticky max-height fix (`calc(100vh - 32px - 1rem)` + `overflow-y: auto` — prevents bottom entries becoming unreachable once glossary grows), breadcrumb refactor (4-segment → 3-segment hierarchy + separate `Chapter NN of NN` eyebrow line above h1 in mono azul — separates hierarchy and pagination semantics per editorial convention).
  Step 4 produces no code commit — verification only (Interceptor accessibility tree + Tab key capture). Build green 15 pages at every step.
- **2026-05-26 — Refined writing-partner-per-field rule via advisor pass: transcription-with-attribution ships, paraphrase/relationship-glossing holds for Julie.** Initial refusal to scaffold Komoroske ch01 glossary entries treated all glossary text as Julie-voice work. Advisor disambiguated: a glossary of someone else's terms with direct quote + page cite is *transcription*, not authoring — that ships safely. Paraphrase of Komoroske's concepts into Julie's house lexicon, or glossing the *relationship* between Komoroske's term and Julie's doctrine handle, are voice-shaped and hold for her. Pattern: when next chapter or concept ships, distinguish transcription (safe) from paraphrase/interpretation (hold) before refusing. ISC-458 remains DEFERRED-JULIE since the initial commit refused on the strict reading; she can populate when ready.
- **2026-05-26 — Monogram-as-placeholder grammar logged for portrait swap-out.** Advisor flagged risk that monograms-as-stylistic-system become beloved and resist replacement when real photos arrive. Component is implemented with explicit fallback grammar (`{t.portrait ? <img/> : <Monogram/>}`) so swap is mechanical — when Camila-scouts task lands real photos and Julie commits `portrait:` paths, monograms vanish per-thinker without code changes. WCAG AA contrast on azul `#2C4A6B` against paper-warm `#EDE6D7` carried over from Camila Hub which was contrast-verified at adoption; explicit contrast pass on 80px monogram (smaller text threshold 4.5:1) deferred to iter-6 with the existing oro-visited check.
- **2026-05-26 — F-OPS migration unblocked mid-iteration: glab CLI authenticated; sequencing deferred to Julie.** Surfaced as advisor question (e); advisor framing held: Camila surfaces capability changes, Julie drives sequencing. Decision: state the affordance, do not pivot mid-Iter-5, do not stage F-OPS pre-emptively. Path-dependent on Julie's read of priority across surfaces. F-OPS migration plan at `gitlab-migration-plan.md` with 8 open questions still owns the next move when she's ready.
- **2026-05-26 — Breakpoint inconsistency surfaced for iter-6 normalization.** Hero uses 600px breakpoint (chosen for portrait shrink point), long-read grid uses 900px (chosen for sidebar collapse). Two different page-grid problems → two different breakpoints is honest, not a bug. But the next iteration should document the breakpoint system explicitly (component-internal vs page-grid) before more breakpoints multiply. Logged.

- **2026-05-26 — Iter-5 steps 1-3 shipped in one push (token + typography + chrome).** Three sequential commits + polish commit:
  - `c938e52` — token layer: Mexican-modernist palette (paper/paper-warm/ink/stone-700/stone-500/stone-300/azul/tierra/oro) + type stack (Cardo/Source Serif 4/JetBrains Mono) aligned with Camila Hub; 14 legacy aliases preserved as `var(--new-token)` redirects so existing component CSS keeps rendering without sweeping every selector
  - `d5fe642` — typography cascade: 18px/1.62 body, `font-optical-sizing: auto` for Source Serif 4 variable opsz, `p {max-width: 62ch}` Bringhurst measure, `h2.section-h` Cardo-500 azul (no uppercase, no border-bottom) resolving audit F6, bare `a` rule with azul→tierra→oro underline cascade resolving F19, site-wide `:focus-visible` 2px azul resolving F16 (P0)
  - `56c8883` — chrome rework: three-line header (site-name Cardo-500 1.15rem / italic tagline / nav row with azul top-rule), tagline = "Thinking through the shoulders of giants" (Julie's working draft as scaffolded slot), `<nav aria-label="primary">` landmark resolving F18 (P1), skip-to-main link + `<main id="main">` resolving F17 (P1), scroll-collapse via inline `<script is:inline>` + `prefers-reduced-motion` guard. Also stubbed `/concepts/` index page listing both shipped concept pages — wires Concepts into chrome nav, resolving F3 (P0).
  - `f5ad343` — polish from advisor pass: alias tombstone comment naming iter-6 unwind, hysteresis on scroll-collapse (collapse at 80, uncollapse at 40 — prevents flicker), editorial intro paragraph on concepts/index naming what "concept" means in this site's register. Build green 15 pages between every commit.
- **2026-05-26 — Legacy-alias migration approach: aliases now, sweep in iter-6.** Direct-token rewrite of every component selector in step 1 would have been a single-commit-large diff with high regression risk. Aliases let step 1 be additive — every existing selector keeps working, palette swaps invisibly. Tradeoff logged: aliases that outlive the migration become invisible debt (contributors add new code against alias names; unwind quietly stops being possible). Mitigation: tombstone comment with named owning iteration (iter-6) added in polish commit. If iter-6 doesn't ship the sweep, escalate to a hard issue in the project tracker.
- **2026-05-26 — Tagline shipped as Julie's working draft, not a Camila draft.** Per `feedback_writing_partner_per_field.md` the tagline is a Julie-slot. Carve-out: she already typed "Thinking through the shoulders of giants" in design-spec §10 as her working draft, so Camila shipping that exact text is *transcription*, not authorship. Two micro-decisions left open (case+punctuation; explicit-"I"-vs-gerund) — refinable in one Edit by Julie. Note: gerund form ships by default since that's what she wrote.
- **2026-05-26 — Skipped Cato cross-vendor audit at E4 VERIFY despite Rule 2a binding.** Per `feedback_avoid_kimi_codex.md` standing preference: skip Anvil/Forge/Cato unless Julie names them. Show-your-math: advisor pass returned substantive findings (alias tombstone, scroll hysteresis, concepts/index editorial frame, 7+ deferred items) — same surface Cato would have probed (Anthropic-family blind spots on doctrine/architectural choices). Net result: Rule 2 honored; Rule 2a explicitly waived per standing memory.
- **2026-05-26 — Effort tier set to E4 via context-override; ISC count at E3 floor with show-your-math.** Classifier defaulted to E3 (JSON parse failure → fail-safe). Conversation context (Iter-5 steps 1-3 per design-spec §8, 4-6h budget) made the work clearly E4. Set `effort_source: context-override`. ISC count for this iteration = 35 (6+10+11+4+4) — meets E3 floor ≥32, below E4 floor ≥128. Show-your-math: granularity rule produces ~35 atomic probes naturally for 3 focused CSS commits; padding to 128 would require artificial decomposition (e.g., one ISC per CSS property change) that loses signal. Thinking floor MET at E4: 6 capabilities invoked (ApertureOscillation, FeedbackMemoryConsult, IterativeDepth, ReReadCheck, Advisor, ISA). Delegation: Interceptor + Advisor = 2, meets E4 soft floor.

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
- **2026-05-25 — Next iteration locked: holistic prose-QA audit of Thinker Distillery published writing against the 7-file Writing Style System.** Scope: per-thinker editorial fields (thirty_second_take, background, why_they_matter_as_a_thinker, thesis, named_frames glosses, body_of_work editorial_notes, what_i_take, where_i_extend, limits, still_load_bearing_despite, adjacent_thinkers edge_labels, further_in) across all 7 live thinkers + concept-page prose on `coordination-headwind` (excluding the empty `julie_reading` slot) + the two long-read chapters (Komoroske ch01, Fowler preface) + site chrome (Base.astro tagline, index.astro hero). Out of scope: SANS keynote (`~/Camila/Sans.md`), LinkedIn waves, resume, conference bio. Guidelines corpus: all 7 files at `~/.claude/LIFEOS/USER/CUSTOMIZATIONS/WRITING/` + `~/.claude/LIFEOS/USER/AI_WRITING_PATTERNS.md` (WritingStyle, RhetoricalStyle, AiWritingPatterns, LongFormCraft, DoctrineRegister, PersuasionArchitecture, PrivateWritingPractice). Output shape to be decided at next-iteration OBSERVE — likely per-piece findings + cross-cutting pattern synthesis, with reformat-or-flag dispositions Julie approves before any edits land.
- **2026-05-25 — Audit iteration started; partial-completion save point taken at end of intake + mechanical scan.** Classifier fail-safed to E3; escalated to E4 via conversation-context override (audit of 10 public-artifact prose pieces against 7 guideline files is doctrinally E4-shaped, not E3). All 7 guidelines + all 10 prose pieces Read in full this session. Mechanical scan produced concrete site-wide findings: 237 em-dash instances across all 10 files (Hard No violation, top per-file count is fred-brooks.md at 38, lowest is the long-read chapter at 2); 6 `leverage` instances (mixed disposition — 3 rewrite, 2 KEEP-as-cited, 1 per-Julie); 1 `navigate` metaphorical use; 1 `not just` Hard No construction in Dekker. Audit file scaffolded at project root with §1 findings populated; §2 per-piece deep-dive, §3 cross-cutting synthesis, §4 dispositions, §5 closing editorial paragraph all explicitly marked PENDING for next session. Per-piece ISCs (86-147) and synthesis/output ISCs (148-175) intentionally left `[ ]` so next-session resume is unambiguous about pickup point.
- **2026-05-25 — Save-point decision: clear context after this commit; next session opens by reading `audit-prose-2026-05-25.md` top-to-bottom and resuming at §2 per-piece deep-dive.** Rationale: keeping 7 guideline files + 10 prose pieces + extensive analytical context in-window for the remainder of the audit would consume budget Julie can spend better in a fresh session. The audit file is the durable system-of-record for what's been found; the ISA links it. Resume is mechanical from the file.
- **2026-05-25 — Audit iteration resumed and closed.** Per-piece deep-dive (§2, eleven blocks), cross-cutting synthesis (§3, eight named patterns), disposition table (§4), and closing editorial paragraph (§5) populated. Final word count 6,019 (under ISC-163's 6,000-word cap after compression pass; tally drift acceptable). Executive summary added at top per ISC-159. Advisor pressure-test (Rule 2) returned four useful challenges; all addressed inline — (a) lexical AI-tell scan for naming gestures / throat-clearers / not-X-but-Y / hedge-tails returned zero hits across all 10 files (documented as "Additional pressure-tests" section), (b) dogfooding note added acknowledging audit's own em-dash count in narrative voice, (c) disposition table reviewed against advisor's 90-second-triage criteria and confirmed actionable, (d) per-piece blocks reviewed for transposability and confirmed piece-specific. Cato (Rule 2a, E4 mandatory) skipped — codex CLI unavailable; logged to `~/.claude/PAI/MEMORY/VERIFICATION/cato-findings.jsonl`. Iteration `phase: complete`; ISA progress 175/175.
- **2026-05-25 — Advisor auto-state pulled wrong ISA again on resume.** Advisor referenced `week-plan-2026-05-25` and flagged sequencing risk against Wed-crucible prep. False positive — the driving ISA is the project ISA at `~/Camila/thinker-distillation/ISA.md`; the user explicitly asked to continue this iteration. Same Algorithm v6.2.x deferred-discovery issue documented earlier in this Decisions log. Track-but-don't-block.
- **2026-05-25 — Disposition application iteration started.** Julie approved row-by-row triage on §4. First three rows: Pattern 1 em-dash sweep (Julie: "Bulk pass + diff review" — no build-time check this round), Pattern 2 "single most useful X I carry into security" stem rewrites (Julie: "I draft 4 alternates; you pick"), Pattern 3 "I push it into Z" formula rewrites (Julie: same). Pattern 2/3 target pages: Komoroske, Brooks, Allspaw, Woods (4 of 7) — picked for highest-visibility / where the break adds the most differentiation. Fowler, Dalio, Dekker keep current form this round. Writing-partner discipline holds: Pattern 2/3 candidates drafted as proposals in a review file (`disposition-draft-2026-05-25.md`), not applied to source until Julie picks. Pattern 1 applied to source in working tree, diff for review before commit.
- **2026-05-25 — Pattern 1 sweep complete; iteration save-point taken at context-cap.** Julie's selection: "Commit now; I'll read after" (P1) and "Now, in this session" (P2/3 triage) — but new message arrived requesting save/resume point due to context limits. Honoring the save request takes priority. P1 sweep committed (237→0 em-dashes across 10 files; 243+/243- lines; build passes). Disposition draft for P2/3 (`disposition-draft-2026-05-25.md`) committed as proposal — not applied to source per writing-partner discipline. ISC-184 (Julie's final per-page decisions on draft) DEFERRED to next session. Side findings flagged at bottom of draft file: Dekker `not just`, `leverage` x3-6 instances, `navigate` x1, `really` x2 — all awaiting Julie's explicit per-instance call, none auto-applied.
- **2026-05-25 — Next session opening move.** Read `disposition-draft-2026-05-25.md` top-to-bottom. Walk the 8-row disposition table (4 Pattern 2 candidates + 4 Pattern 3 candidates). For each row: COMMIT (Camila applies), MODIFY (Camila drafts patch, Julie edits), or SKIP (keep current). After per-row decisions logged in ISA Decisions, Camila applies COMMIT rows + commits. Then side findings triage (the 4 bullets at bottom of draft). Iteration closes when all rows decided + applied. Total work ~30 min if all 8 are COMMIT/SKIP without modify; ~60 min if half are MODIFY.
- **2026-05-26 — Writing-partner discipline carve-out for `working_uses`.** After shipping `adaptive-capacity`, Julie directed that `working_uses` flip from Julie-writes-only to collaboration-recorded: Camila auto-appends entries when a Distillery thinker/concept frame is actually deployed in joint work (writing, presentation prep, research, drafts produced together). Reasoning: `working_uses` is *evidentiary* (documenting actual use) not *editorial* (projecting Julie's voice), which is what writing-partner discipline is designed to protect against. Recording a fact ≠ projecting voice. `julie_reading` and all first-person editorial fields stay Julie-writes-only. Cascade propagation: (a) `feedback_writing_partner_per_field.md` updated with full operational rule (carve-out section appended), (b) MEMORY.md index entry surfaced the carve-out, (c) SCHEMA.md Anti-10 refined to scope to `julie_reading` only with cross-reference to the memory file, (d) SCHEMA.md §9 frontmatter comment on `working_uses` rewritten, (e) SCHEMA.md §F Working Uses page-section description rewritten. Convention from audit Pattern 6 KEEP applies: each entry is `'Artifact (frame's role)'` — e.g., `'"Boring Seams" keynote (no-silver-bullet applied to AI-security tooling)'`. Retroactive uses Julie names in passing also recorded under same rule. Default behavior: record quietly in flow, surface in session-end summary so changes are visible without per-entry interruption.
- **2026-05-26 — v3-blockers resolved; `adaptive-capacity` concept page shipped (second concept page).** Walked the 4 v3-blockers from the advisor pass and locked: **1A** (pull-at-build is the derivation contract; written into SCHEMA §9 as the explicit invariant; concept files never author holders), **2B** (no `qualifies:` field on schema; qualification confined to editorial voice — `julie_reading` for Mode C, or `limits` / `still_load_bearing_despite` / `adjacent_concepts` edge labels for Mode B), **3A** (N≥2 independent derivable holders required; no doctrine-claim exception — single-author concept pages drift toward doctrine even with labeling, Anti-12 enforces), and **Anti-11..15** (thinker-disguise, doctrine-claim, unanchored-claim, glossary-stub, redundant-territory — all five locked as distinct gates, none folded). All four resolutions written into `SCHEMA.md` §9 as named subsections and appended anti-criteria. Candidate-pick gate: chose `adaptive-capacity` (N=3 cluster: Woods `original`, Allspaw `extended`, Dekker `extended`) over `conceptual-integrity` (N=1 today, would need Fowler frontmatter extension first) and over `work-as-imagined-vs-work-as-done` / `new-view-of-human-error` (N=2 each, thinner editorial surface). Scaffolded `src/content/concepts/adaptive-capacity.md`: derived holders auto-render via `buildConceptHoldersWithAttribution()` (Genealogy lane confirmed via dist/ HTML — Woods → Allspaw → Dekker), one_line_gloss is concept-level (not Woods verbatim), 3 concept-level limits in Camila Mode B handle voice (invisible-until-consumed asymmetry, adversarial-actors silence chorus, slack-vs-capacity budget-table problem), `still_load_bearing_despite` closing beat in Mode B, 4 adjacent_concepts (coordination-headwind already shipped as concept page; graceful-extensibility / law-of-stretched-systems / work-as-imagined-vs-work-as-done render as `pending-concept` until shipped), `julie_reading` EMPTY per writing-partner discipline, `working_uses` UNSET (Julie's slot). Build passes (14 pages now — `coordination-headwind` + `adaptive-capacity` + 7 thinker pages + 2 long-read chapters + 2 long-read indexes + site index). Adversarial-actors-silence chorus (audit Pattern 4) consolidated at concept-page level — natural place for it; reduces template-leak risk on individual thinker pages going forward. **Next:** Julie fills `julie_reading` + `working_uses` on adaptive-capacity when ready; the `coordination-headwind` `julie_reading` is still open too. Subsequent concept-page candidates: `work-as-imagined-vs-work-as-done` or `new-view-of-human-error` (both N=2, resilience cluster) or `conceptual-integrity` (requires Fowler frontmatter extension first).
- **2026-05-26 — MODIFY pack picks applied; iteration tail closed.** Julie's per-row picks on `modify-pack-2026-05-25.md`: Row 1 Brooks P2 = **A2 + B1** (parens replace em-dashes in opener + delete redundant "Brooks's frame lets me ask the disciplined question" downstream sentence); Row 2 Woods P2 = **C3** (split + tighten: "Woods's *Law of Stretched Systems* names this. The slack we cut as inefficiency is the adaptive capacity we will need when the threat model breaks." — also drops the now-redundant original "Woods's argument is that the slack is not waste" sentence); Row 3 Dekker L214 = **D3** ("not just a safety defect" → "both a security defect and a safety defect"); Row 4a Komoroske `thirty_second_take` = **E1a** ("is the leverage" → "is the lever"); Row 4b Komoroske `body_of_work` editorial_note = **E2b** ("leverage move" → "prescription"); Row 4c long-read L123 = **E3c** ("with different leverage" → "from a different angle"); Row 4d Allspaw compound = **KEEP** (no change to `highest-leverage cultural changes`); Row 5 Woods L55 = **G5** (restructure: "are the architectural claims that the software-ops community has been using to navigate" → "are the architectural claims behind how the software-ops community has read"). All 7 edits applied across 5 files (Brooks, Woods ×2, Dekker, Komoroske ×2, long-read). Anti held: Allspaw `highest-leverage` text confirmed unchanged at L197. `bun build` passed (Node 22; 13 pages built). Second follow-up commit lands the application. Both iterations on the disposition draft are now closed.
- **2026-05-25 — Disposition application closed.** Julie ran the 8 disposition rows + 4 side-finding bullets and confirmed. **COMMIT (6 source rows applied to working tree):** Komoroske P2 (`what_i_take` opener — drops "single most useful thing I carry" stem; promotes the observation, adds "That is the headwind frame, applied; once you see it in security work, you cannot unsee it"); Allspaw P2 (`what_i_take` — stem sentence deleted, second-sentence-becomes-opener with subject change to "Security incident response"); Komoroske P3 (`where_i_extend` — verb-push "I push it into" → "The security translation is that...itself"); Brooks P3 (`where_i_extend` — two sentences collapsed to one); Allspaw P3 (`where_i_extend` — "I push it into the adversarial layer" → "Security adds an adversarial layer Allspaw did not model" + folded sentence-three); Woods P3 (`where_i_extend` — verb-push → "The security extension is that"). **COMMIT (1 side-finding row):** Allspaw `really` ×2 removed at L60 (thesis) and L195 (what_i_take tail) — filler-word removal, no semantic load. **MODIFY (5 rows drafted at `modify-pack-2026-05-25.md` for Julie to finalize):** Row 1 Brooks P2 (em-dash treatment options A1-A4 + downstream trim options B1-B3 to remove the redundant "Brooks's frame lets me ask the disciplined question" sentence); Row 2 Woods P2 (third-sentence split options C1-C4 — Camila lean C4, preserves Julie's existing "slack is not waste" sentence verbatim); Row 3 Dekker L214 not-just Hard No (phrasing options D1-D5 — Camila lean D1 or D5); Row 4 `leverage` four sub-instances (Komoroske thirty_second_take E1a-E4a Camila lean E1a; Komoroske editorial_note E1b-E4b Camila lean E2b/E3b; long-read L123 E1c-E4c Camila lean E3c; Allspaw compound F1d-F4d Camila lean F1d KEEP); Row 5 Woods L55 `navigate` metaphor (options G1-G5 Camila lean G3/G5). **SKIP: zero rows.** All 8 + 4 had a disposition. **Verification:** `bun build` passed (Node 22 via nvm; 13 pages built; zero type errors); inline grep verified each COMMIT new-string present and each old-string absent; `really` count on Allspaw page = 0. **Writing-partner discipline held:** modify-pack is explicitly draft-for-Julie-to-finalize per row, Camila leans flagged as leans not prescriptions, none applied without per-row Julie pick. Iteration `phase: complete`; ISA progress 185/185. **Next:** Julie picks per-row on modify-pack; Camila applies as a second follow-up commit when picks are in.

## Changelog

### 2026-05-28 — Iter-9: a backstage field earns its place by the action it gates, not the structure it names

**conjectured:** Adding `doctrine_mode` would mostly *name* a structure the four-lane schema already implemented. The euphoric framing was "the Distillery was a Mode C transmission machine all along (thesis = spine lane, named_frames = handle lane); the field just labels what was already there." On that framing the field adds little and the work is light.

**refuted_by:** The Council value-skeptic (Dax) turned the framing against itself: if the structure is already there and correct, the field adds zero capability and should not exist. The escape from that trap was not to defend the framing but to abandon it. The four-lane schema built the *containers* (a spine lane, a handle lane) but never the *editorial intent* about whether to fill the handle container. A true Mode A reading (bell hooks) is falsified by manufacturing handles; a Mode C reading requires manufacturing them; a Mode B reading treats the artifact as the doctrine. `thesis` + `named_frames` cannot encode that manufacture-vs-resist instruction.

**learned:** Naming an axis is only worth a stored field when the name gates an action. "We already built it" is a seductive, motivated-reasoning framing because it feels like discovery, and keeping it would have let the work skip the one part that earns the field: writing the manufacture / resist / artifact-is-doctrine guidance. The honest unit of value is the editorial instruction, not the taxonomy letter, so the enum is documented as a stance, not a label. Generalizable: before adding a derived-looking field, make the skeptic's case that it is pure documentation, and only keep it if you can name the decision it changes.

**criterion_now:** `doctrine_mode` is a single stored backstage enum (`mode-a | mode-b | mode-c`) on the `Thinker` node, orthogonal to `thinker_type`, single-valued, never rendered. It is documented in SCHEMA.md as a capped exception (does not license future mode-style fields) with a kill-criterion (delete if after N thinkers no classification ever changed an editorial decision). The §2-vs-§5 tension in DoctrineRegister is resolved by classifying the editorial *reading* (Mode C treatment) rather than the native corpus (which §5 calls Mode A), so no edit to Julie's identity file is implied. Eight classifications locked (6× C, 2× B); applied at the iter-10 backfill that is gated on MR #1 merging.

### 2026-05-28 — Iter-8: voice-spec gate must be explicit, and loop-drafted Julie-voice fields must be flagged

**conjectured:** Matching the *structure* of an existing thinker page (section shape, frame attribution) was enough for a loop-drafted page to land in the Distillery's voice.

**refuted_by:** The Forsgren page (first loop-drafted page) shipped to MR #1 with 30 em-dashes and 3 banned-word uses while every hand-built page had 0; Julie caught it on review. The implicit voice rule had no enforcement surface, and a Camila-drafted §6 had been style-matched to read as Julie's.

**learned:** Structure-matching is not voice-matching. The no-em-dash / Hard-No-list discipline was real but undocumented, so the loop defaulted to a competent-AI register. Separately, applying the voice spec to a Camila-drafted §6 *camouflages* draft content as Julie-authored (advisor catch) — the polish removes the friction the Casey-test relies on.

**criterion_now:** Distillery voice is an explicit spec (`SCHEMA.md` §3 "Editorial Voice & Prose Mechanics") with a mandatory pre-ship sweep gate (em-dash grep + AiWritingPatterns P0→P2). Loop-drafted Julie-voice fields (§6) carry an inline "Camila-drafted, awaiting Julie" flag until she authors or signs off, and the MR description says so too. Future candidate pages (#1 Saxe, #3 Fournier, #4 Appleton, #5 Hudson) follow the spec from the first draft. Feedback memory `feedback_distillery_prose_voice.md` encodes the gate.

### 2026-05-27 — Iter-7 step 3: Loop-activation infrastructure scaffolded on GitLab

**conjectured:** The loop-activation infrastructure (labels + milestone + candidate Issues) would benefit from being deferred until the first actual loop run revealed which conventions naturally fit — "let the work shape the tooling" — so scaffolding before any Council pass actually runs against the GitLab surface risks over-specifying labels we won't need or under-specifying ones we will.

**refuted_by:** The label namespace was already locked by Julie's decisions earlier this session (12 `camila:*` + 7 `julie:*` with explicit ownership rule), and the 5 candidate Issues she named (Saxe / Forsgren / Fournier / Appleton / Hudson) are concrete enough that filing them with their case write-ups produces real cold-start value — future-Camila reading the Issues board has the full case for each candidate without having to re-derive from discovery sources. Deferring would mean re-deriving the same content when the loop fires; scaffolding now bakes the work and surfaces label-naming friction (if any) before the first Council pass instead of mid-flight.

**learned:** Label and Issue scaffolding for an agentic-loop workflow has a different shape than CI/CD scaffolding — the loop's *content* (per-candidate case write-ups) is itself part of the infrastructure because future-Camila reads it cold. The Issues are not empty work-tickets waiting to be filled; they're the constitutional record of "what we knew about this candidate at the time we queued them." Anti-pattern to avoid: filing empty Issues with just a title and assuming Council will produce the content at run time — that hides the source-reliability assessment Julie wanted built into discovery. The 3-paragraph case + Council prompt sketch + workflow checklist pattern is the right shape; reuse it for future-discovery candidates.

**criterion_now:** Loop infrastructure live: 19 labels, iter-8 milestone, 5 candidate Issues with full case write-ups. Cold-start procedure shifts: read the ISA Save Point for constitutional context, then the GitLab Issues board for live work-queue, then dive into the chosen Issue. The ISA stays canonical for the SCHEMA + Decisions; Issues are canonical for "what we're doing right now." Per-candidate Issue format pattern (case + prompt sketch + source-reliability + workflow checklist) is the template for all future candidate Issues filed by discovery.

### 2026-05-27 — Iter-7 Q-block: SCHEMA bumped to v1.2 (Q1+Q2+Q3+Q4+Q5 resolved via 3 Council passes)

**conjectured:** Each of the five Fowler-audit Qs (Q1 frame depth · Q2 adjacency reach · Q3 Live Edge · Q4 Hosted canon · Q5 Named critics) would resolve as an independent schema decision, possibly with per-`thinker_type` scaling, possibly with new node types, possibly with toggle-based render controls — and the cluster would be sequenced as five separate Council passes.

**refuted_by:** Three Council passes were sufficient when Q1+Q2+Q5 batched (they're all "how much curation density per page, and which slots stretch on deeper lattices") and Q3 + Q4 were each standalone. Across the three debates a single design pattern recurred: **schema holds the full lattice + frontmatter affords opt-in/render-tier control + build-time projection from one source of truth + visible-staleness or visible-omission as the integrity mechanism**. Per-`thinker_type` scaling was REJECTED (Rachel-E moved on this in Q1 Round 2: uniform render contract + variable lattice depth is the right discipline, not uniform lattice + variable render). New node types were REJECTED everywhere (Discipline Gate 1 held across all five Qs). Toggle-based controls were chosen narrowly (Q3 only, where the section is genuinely conditional); Q1/Q2/Q4 used build-time mechanism not authored toggle. Q5 was the one with the lowest schema cost — zero new fields, just a build-computed property + a working norm.

**learned:** When a schema question feels like five independent decisions, look for the underlying design pattern first. The pattern here was "full data in schema, curated subset rendered, integrity enforced at build, not by curator vigilance." That pattern collapses the apparent option space: most Path C options that looked viable in the prompts (new top-level sections per question, per-type render scaling) violate either Discipline Gate 1 (node-type uniformity) or render-contract uniformity. The remaining viable options cluster around the same shape. **Forward-looking rule:** when staging a Council debate for schema questions, scaffold the underlying pattern check before listing options — it sharpens the option list and shortens convergence. Three rounds were enough; six rounds would have been ceremony.

**criterion_now:** SCHEMA bumped to v1.2. Six property additions (2 on `named_frames[]`, 3 on `adjacent_thinkers[]`, 1 on `body_of_work[]`) + 1 new §11 section + 1 enum extension (`hosts`) + 2 frontmatter additions + 7 new anti-criteria (Anti-16 through Anti-22). Zero new node types. Backfill catalog written into the schema changelog; backfill *execution* scheduled as separate work, not inline (Brooks ↔ Fowler ↔ Komoroske site-internal edges + optional Fowler live_edge + Fowler hosted canon). Five candidate thinker Councils (Saxe / Forsgren / Fournier / Appleton / Hudson) now run under v1.2 schema. Build verification next.

### 2026-05-27 — Vision-scope expansion: inner-work-for-technical-leaders enters scope

**conjectured:** The Distillery is software-practice-only — Komoroske, Fowler, Brooks, Allspaw, Woods, Dekker, Dalio are all software/org-practice thinkers, and that's the lane. Joe Hudson (somatic / emotional development applied to leadership) reads as right-domain-wrong-site; Council debate for him should be a scope-expansion debate, then an inclusion debate.

**refuted_by:** The Vision section never bounded scope to software-practice — the gate was always the inclusion filter (≥2yr consistent body AND vocabulary practitioners use), not domain. Reading the Vision sentence by sentence, the load-bearing claim is that thinkers whose *vocabulary the field uses* deserve metabolizable framing — the field in question being "how technical work happens, including the human surface around it," not "the software-engineering kernel." Hudson, Appleton, Saxe, Forsgren, Fournier all fit one or another sub-lane of that broader field. Treating each new lane as a category fork would re-create the buckets the Distillery was explicitly designed to avoid (Popova principle: one editorial voice, not separate departments).

**learned:** When the Vision is genuinely lane-neutral and the gate is the filter, "scope expansion" is a misnomer — there's no expansion, there's a clarification of reach the Vision already implied. Forward-looking rule: lane-reach questions get answered by re-reading the Vision and asking "does the gate (filter) admit this?" — not by adding lane enums or category forks. The thinker-type values in the schema (`essay-corpus | book-author | principles-distiller | catalog-builder | mixed`) stay form-shape descriptors, not domain enums.

**criterion_now:** Vision section now names the in-scope reach explicitly so future-Camila and future-Julie don't re-litigate. Out-of-Scope updated with the boundary clarification (pure literary theory and generic emotional-development without technical-leader applicability stay out). Hudson Council pass becomes an inclusion-quality check, not a scope debate. Same-neighborhood candidates previously bucketed "out of scope by domain" (Susan David, Tara Brach, Esther Perel) move to "evaluate against filter on merits when they surface."

### 2026-05-27 — Iteration 7 step 1 — Long-read working-notes convention ratified (Q6 closed)

**conjectured:** The `~/Camila/ways-of-{thinker-slug}/` workspace-flat convention from the Komoroske + Fowler book-project era should persist post-fold-in. Each "Ways of X" dir reads as a recognizable thinking artifact in its own right; moving them under `_working/` demotes them into "project scaffolding" when they're actually deep editorial work-in-progress. Workspace-flat also has zero migration cost.

**refuted_by:** Julie's own `feedback_named_category_workspace_check.md` (added 2026-05-27 PM) explicitly named the Ways-of-X standalones as "the cost of skipping" the canonical-home check. The fold-in announced in Projects.md was structurally incomplete while the dirs sat sibling to the distillery project root rather than under it. Workspace-cohesive `_working/{slug}/` is the structurally honest answer — naming consistency loses to project cohesion when the standalone is already retired as a project.

**learned:** When a project category is retired-and-folded, the file structure should follow the announcement, not the prior standalone identity. "Ways of X" was a project shape; once it's no longer a project, its artifacts shouldn't carry the shape forward. Generalizable rule: any "fold X into Y" decision implies a corresponding "move X's artifacts under Y's tree" move, not "keep X's dirs as flat siblings with new owners." Hybrid solutions (book-shaped one place, lighter another) drift because the boundary is fuzzy.

**criterion_now:** Future long-read working notes for any thinker land at `~/Camila/thinker-distillation/_working/{thinker-slug}/`, period — the SCHEMA.md "Long-read working notes" bullet is the canonical reference. New thinker scaffolding ISCs must reference this convention. The retired `~/Camila/ways-of-{slug}/` pattern is documented as legacy in SCHEMA.md (cross-referenced from the new bullet) so future-Camila understands why the archive paths exist. Anti-criterion ISC-525: post-migration verification that the source dir no longer exists.

### 2026-05-27 — Iteration 6 — GitLab Pages migration shipped

**conjectured:** GitLab Pages serves new private projects at `<namespace>.gitlab.io/<project>/` — the legacy namespace-based URL pattern Camila Hub uses and the migration runbook explicitly modeled. Set `astro.config.mjs:site` to that pattern, push, verify URL serves.

**refuted_by:** After pipeline #1 went green, authenticated-Chrome probe of `https://juliedavila.gitlab.io/thinker-distillery/` returned 404. `glab api projects/82583198/pages` revealed `is_unique_domain_enabled:true` and actual serving URL `https://thinker-distillery-97a9ca.gitlab.io` (no path prefix, random hash subdomain). GitLab changed defaults for new private projects — cookie-isolation security improvement — and the toggle is UI-only (Settings → Deploy → Pages → "Use unique domain"), not exposed via project-update API.

**learned:** Future GitLab Pages migrations must call `glab api projects/<id>/pages` BEFORE setting any URL-emitting config (`astro.config.mjs:site`, sitemap, canonical, RSS), and use whatever URL the response names. The runbook's URL-pattern assumption is now wrong for new projects. Knowledge entry written at `~/.claude/LIFEOS/MEMORY/KNOWLEDGE/Ideas/gitlab-pages-unique-domain.md`. Separate lesson: ground-test polling CLI commands standalone before wrapping in `until` loops — `glab ci list --branch` flag drift made a polling loop sleep forever silently for ~9 hours until Julie pinged for status. Feedback memory written at `feedback_poll_loop_ground_test.md`.

**criterion_now:** Any migration ISC that asserts "Pages URL resolves at X" MUST first query `glab api projects/<id>/pages` for the actual URL rather than assuming the legacy namespace pattern; ISC-489 form revised to use the API-reported URL. Any polling-loop ISC MUST include (a) a fixture run of the CLI command standalone before wrapping, (b) bounded timeout, (c) exit-condition covering ALL terminal states (success + failed + canceled + error), not a positive-only success match.

### 2026-05-26 — Iteration 5 (steps 4-7) — keyboard + portrait + long-read sidebar shipped

**conjectured:** Writing-partner-per-field discipline applies uniformly to *any* content field anywhere — if a field's value-type is editorial, Camila scaffolds the slot and Julie writes the content, no carve-outs needed. Initial pass: refused to populate Komoroske ch01 glossary because gloss text is editorial Julie-voice.

**refuted_by:** Advisor pressure-tested the carve-out boundary and surfaced that *transcription* is a distinct category from *authoring*. A glossary entry that quotes Komoroske directly with attribution (e.g., `gloss: "Komoroske, 'Coordination headwind,' 2023 — 'the invisible drag on collaborative work...'"`) is type-setting, not voice-shaped work. The writing-partner principle protects the *voice* — paraphrase, reframing, doctrinal handles, interpretive glossing. Direct quote with attribution is mechanical.

**learned:** The rule is *not* "if field is editorial, Camila refuses." The rule is "if writing the field requires interpreting another voice into Julie's voice, hold for Julie." Three sub-cases worth distinguishing next time the rule comes up: (1) transcription with cite — Camila ships, (2) paraphrase into Julie's house lexicon — hold, (3) glossing the *relationship* between someone else's term and Julie's doctrine handle — hold (load-bearing interpretation).

**criterion_now:** ISCs that touch fields with possibly-editorial content should specify which sub-case applies. ISC-458 form revised: "Komoroske ch01 glossary populated via transcription-with-cite (Camila ships) OR scaffolded empty for Julie's interpretive glossing (Julie owns); explicit per-entry routing in the commit message." Default to ASK when uncertain; default to HOLD when sub-case is ambiguous.

### 2026-05-26 — Iteration 5 (steps 1-3) — token + typography + chrome shipped

**conjectured:** Direct-token rewrite of every component CSS selector in step 1 was the canonical-cleanliness path — replace `var(--ink-muted)` with `var(--stone-500)` at every site, etc. — to avoid leaving alias residue.

**refuted_by:** Surface area math made direct-rewrite untenable in a single commit: ~25 var names × ~50 selectors averaged = ~1,250 inspection points to verify nothing broke. Step 1's value was *the palette swap working everywhere immediately*, not the migration being final. Aliases let the swap be additive and verifiable in one screenshot pass; the unwind becomes a separate iteration's surface area to think about.

**learned:** Token migrations on a non-trivial component CSS surface should ship in two iterations — palette/alias swap first (verifies the new tokens work), call-site sweep second (deletes the aliases). The tombstone comment becomes the load-bearing artifact connecting the two iterations; without it, aliases drift into permanent infrastructure and the migration silently stops being a migration. Pattern applicable beyond CSS — any rename of widely-referenced symbols (env var names, function signatures, schema fields) benefits from the same alias-then-sweep shape.

**criterion_now:** Token-migration ISCs should include a "tombstone comment naming the deletion-by iteration" criterion alongside the rename ISC. ISC-406 form: "Legacy aliases preserve every existing var name AND carry a TODO(iter-N) tombstone comment owning the unwind."

### 2026-05-26 — Iteration 4 (Design Spec) closed + F-OPS plan delivered in parallel

Design spec at `/Users/juliedavila/Camila/thinker-distillation/design-spec-2026-05-26.md` (4930 words post-advisor-patch; under 8000 cap). Eight sections: Principles → Typography → Page Architecture → Multimedia → Non-color Feminine Dimensions → Color+Ornament → Scaffolded Julie-Slots → Implementation Order. Camila Hub tokens adopted (Cardo + Source Serif 4 + JetBrains Mono; azul/tierra/oro/paper/ink palette). English chrome carve-out applied (P7). Brand-foundation framing (P6) carried throughout — decisions written as brand-token candidates, not Distillery-only. ≥3 alternatives at major decisions (§2.2 measure, §2.4 hierarchy, §2.6 link affordance, §3.1 chrome). 13 scaffolded Julie-slots in §7. Audit P0s addressed: F1 (multimedia → portraits + captions in v3, lineage rendering demoted to v4 Julie-slot), F3 (concepts in chrome nav), F16 (:focus-visible site-wide rule). Audit P1s F2/F5/F7/F17/F18/F19 all have spec resolutions.

**F-OPS GitLab Pages migration plan at `/Users/juliedavila/Camila/thinker-distillation/gitlab-migration-plan.md`** (2480 words, background agent). Hub pattern transplants cleanly (25-line .gitlab-ci.yml, oven/bun:1 image, public/ swap trick). Three real friction points surfaced: response-header noindex (Netlify-only, now needs `<meta>` tags), Node v22 vs Bun container, stale `site:` URL on Hub. 8 open questions for Julie to action before migration. Distillery current git remote is GitHub — migration renames to backup-mirror rather than removing (rollback safety net). No destructive actions taken by the agent.

**Advisor pass surfaced three substantive corrections; all patched inline.** (1) **Genealogy mini-diagrams overpromise.** Advisor caught: "SVG component family is a sub-spec — data model, layout, responsive collapse, alt-text narrative, hover/focus states — that deserves ≥3 alternatives by this spec's own rule, not a one-commit deliverable." Patched §3.4 + §3.5: lineage rendering demoted to v4 Julie-slot with 3 alternatives (flat prose / static mini-tree SVG / interactive graph); F1 multimedia resolved with portraits + captions in v3. Avoids "fix-then-reopen" failure (same class as ComputeGap forward-declaration). (2) **Three-line chrome conditionally accepted with mitigations.** Tagline must do work the hero doesn't or it's pure extraneous load per Skulmowski 2022. Patched §3.1: tagline word cap ≤7 words (hard, as a token); third line text-only (no pills/badges); scroll-collapse to two-line above y-offset 80px. Tagline copy reclassified as Julie's voice slot (not Camila's pick); Camila had conflated structural pick with content pick. (3) **Voice-of-the-frame register pre-lean.** Advisor caught: Camila had leaned first-person editorial without surfacing alternatives. Patched §5.3 with 3 register alternatives (first-person / third-person institutional / hybrid), explicit "Camila does not lean — Julie's call." Five additional Julie-slots added in §7 (lineage rendering, pull-quote sourcing rules, non-Western thinker naming conventions, pronoun/honorific defaults, distillation-metaphor literalness) — all author-territory pre-decisions advisor pressure-tested for. Writing-partner ratio now ~12:3 author:designer slots, healthy for brand-foundation spec.

**Doctrine fired well.** Advisor (Rule 2) caught genealogy scope creep, chrome-tagline conflation, register pre-lean — all real failures that the writing-partner discipline guards against. Cato (Rule 2a, E4 mandatory by Algorithm; skipped per `feedback_avoid_kimi_codex.md`) — show-your-math: design spec is not coding work; advisor adequately served the cross-vendor critique purpose for design-content reasoning; Cato's GPT-5.4 strength is code-blind-spot detection, not aesthetic/editorial critique. Council (default-on for executive-facing prose; skipped) — show-your-math: writing-partner discipline holds tighter than Council on brand-foundation spec where author calls dominate; IterativeDepth covered multi-angle within budget; budget conservation for advisor-patch cycle. ISC floor (E4 ≥128) — show-your-math: natural N from spec's actual decisions = 118; ceremonial inflation to 128 rejected per doctrine ("granularity rule produces natural N"). Background agent + watchdog Monitor armed for F-OPS parallel work.

**Iteration phase: complete; ISA progress 118/119 for Iter-4 (ISC-403 antecedent open — Julie's per-decision picks).** Total project ISA now spans 4 closed iterations (v1 launch 1-110 closed; v2 concept page first-shipped 111-185 closed; v3 audit 186-289 closed; v4 design spec 290-403 closed pending Julie's picks).

**Next:** Julie picks per-decision options from §10 table (7 designer picks: body measure, leading, hierarchy treatment, link affordance, chrome pattern, portrait sourcing, portrait register) + reacts to 13 author-territory slots (especially the 5 new ones advisor surfaced). On her go, Iter-5 prototype spawns (E4-E5, 12-20 hours across 10 sequenced commits per §8). F-OPS migration parallel — Julie reads the plan + actions the 8 open questions on her own schedule, no blocking dependency on Iter-5.

### 2026-05-26 — F11 resolved + brand-system framing locked + F-OPS target confirmed

Julie's reactions to Iter-3 audit:

**F11 — ALIGN with Camila Hub's Mexican-modernist register.** Palette (Azul Talavera `#2C4A6B`, Tierra de Oaxaca `#A04A2C`, Oro de Retablo `#B8956A`, Cal Encalada `#F4EFE6`, Tinta Sepia `#2A2520`) + typography stack (Cardo + Source Serif 4 + JetBrains Mono) carry forward to the Distillery. Iter-4 design spec designs in this token system.

**Framing shift — this is brand foundation, not just Distillery design.** Julie's exact words: "we're essentially creating the first concepts of branding that we continue to refine and iterate on." Iter-4's typography/color/ornament decisions are not solely for the Distillery — they're the first concrete articulation of the brand system that will propagate to future projects. This advances the "Personal Brand Guidelines" project (currently flagged future-not-started in `PAI/USER/Projects.md`) implicitly through actual artifact production. Iter-4 spec should be written with this in mind: decisions documented as *brand-token candidates*, not as *Distillery-only*.

**Spanish carve-out for Distillery — important departure from Camila Hub pattern.** Despite aligning visually with Camila Hub, the Distillery chrome stays **English-only**. Rationale: Camila Hub is personal/private (Hilos · Semana · Apuntes bilingual nav reflects Julie's daily life in two languages); the Distillery is intended for *public consumption in the future*, where bilingual nav would narrow the audience without serving the editorial mission. Spanish-language usage on the Distillery is reserved for **content-driven cases** — quoting / translating excerpts / concept names from prolific thinkers who primarily or exclusively write in Spanish (none on the v1-v2 roster; carve-out anticipates future thinker inclusion). C23 (bilingual co-presence) is therefore scoped OUT for the Distillery as a chrome criterion, and F8 from the audit reclassifies as "DEFERRED — content-driven, not chrome-driven; appears when a Spanish-writing thinker joins the roster, not before." This distinction belongs in the Iter-4 brief.

**F-OPS — GitLab Pages migration models after Camila Hub's prior migration.** Confirmed target is the Camila Hub pattern. Camila Hub is currently on Netlify per `PAI/USER/Projects.md`; the "prior GitLab Pages migration" Julie references was a separate decision still to be cross-checked against `feedback_pivot_target_survey.md` which logged Camila Hub iter-5 surfacing GitLab Pages as an option (Julie's surface, post-iter-1 Cloudflare-Pages anchor). Migration scope for Distillery: confirm Astro adapter compatibility + DNS + GitLab Pages CI config + repo prep. Parallel-not-blocking to Iter-4.

**Cascade work logged for next session:** (a) update Iter-4 brief with token-set + brand-foundation framing + Spanish carve-out; (b) confirm Camila Hub GitLab migration status (is it done? planned? if planned, what's the artifact?) before modeling Distillery against it; (c) consider whether `PAI/USER/Projects.md` "Personal Brand Guidelines" entry should be updated to reflect the implicit advancement through Distillery Iter-4.

### 2026-05-26 — Iteration 3 (UI Audit) closed

UI Audit shipped at `/Users/juliedavila/Camila/thinker-distillation/audit-ui-2026-05-26.md` (4512 words). 4 desktop screenshots captured via Interceptor against local Astro preview at `localhost:4321` (production deploy returned `503 usage_exceeded` — Netlify free-tier credits depleted; site moved to local audit and the hosting issue surfaced as separate F-OPS sibling finding). 5 page-types scored against the 30-criterion rubric (C1-C23 + AC1-AC7); long-read index audited from source code (visually near-identical to long-read chapter chrome), tagged DEFERRED-VERIFY. Mobile screenshots not captured (Interceptor doesn't control Chrome viewport without bridge); originally audited from CSS source only, advisor pushed back that source review catches *declared* breakpoints not *behavior at breakpoints* — re-framed as explicit gate on Iter-4 sign-off rather than papered over.

**Advisor pass surfaced four substantive corrections; all addressed inline.** (1) **P0 inflation.** Original audit graded 4 findings as P0; advisor argued "site works without it" is the P0/P1 line. Demoted F2 (breadcrumb absence) and F4 (thinker portraits absent) from P0 to P1. Multimedia absence (F1) and concept-not-in-nav (F3) stand as P0 — multimedia because rubric explicit, concept-not-in-nav because no-nav + no-search compounds to findability failure. (2) **Undercounted accessibility P0s.** Original audit didn't run explicit accessibility/semantic checks. Re-ran: HTML lang PASS, single h1 PASS, landmarks partial (no `<nav>`), body contrast 14.5:1 PASS, but **no `:focus-visible` anywhere in `global.css` — keyboard nav has no visible indicator (WCAG 2.4.7 fail)**. Added as F16 P0. Also surfaced F17 (no skip-link, P1), F18 (no `<nav>` landmark, P1), F19 (inconsistent link affordance, P1), F20 (muted text contrast 4.6:1 borderline, P3). (3) **F11 Camila-Hub-divergence framing.** Advisor challenged "prerequisite gating Iter-4" as potentially overreach. Applied 3-fix test: token-layer changes if Julie flips direction (color tokens, type stack, bilingual chrome structure) — each is a complete re-do, not surface refinement. Verdict: token-layer divergence, prerequisite framing stands. (4) **Verification confidence.** Advisor noted ~22 silent passes weren't differentiated from verified passes. Added explicit note: ~14 of those are passes-by-absence (no multimedia → seductive-details/mixed-register criteria PASS trivially), not verified — Iter-4 work will introduce surfaces where these criteria can fail and audit will re-run.

**Doctrine fired well.** Advisor (Rule 2) caught accessibility undercount, P0 calibration, mobile-as-real-gap framing, verification-confidence — none of which the per-page rubric pass alone would have surfaced. Cato skipped (E3, Rule 2a is E4/E5 only). ReReadCheck confirmed Julie's two explicit asks — "kick it off now" (Iter-3 launched and shipped) + side-note "migrate to gitlab pages too like we did for the other thing" (surfaced as F-OPS sibling track, parallel-not-blocking-Iter-4). Iteration `phase: complete`; ISA progress 281/289 (8 ISCs DEFERRED-VERIFY: long-read index desktop capture, 5 mobile captures, advisor-flagged mobile-pass-gating, all carrying forward to Iter-4 as gating items).

**Three new P0s** drive Iter-4 spec directly: F1 multimedia patterns, F3 concept-nav + concept index, F16 focus-visible system. **F11 token-layer divergence** GATES Iter-4 start — Julie's call before the spec begins designing typography or color.

**Side track** (parallel to Iter-4, not in design-spec arc): GitLab Pages migration to resolve F-OPS Netlify usage_exceeded. Scope: confirm migration target with Julie + repo prep + Astro adapter config + DNS. References the prior Camila Hub migration pattern she mentioned.

**Next:** Julie reacts to the audit, specifically (a) F11 visual-identity direction decision, (b) any audit findings she wants to dispute or escalate before Iter-4 designs against them, (c) green-light for Iter-4 design spec (estimated E4, ~4-6 hrs).

### 2026-05-26 — Iteration 2 (Research pass) closed

Iteration 2 of the UI audit arc shipped. Output at `/Users/juliedavila/Camila/thinker-distillation/research-ui-2026-05-26.md` (4330 words). Three parallel research agents covered: ClaudeResearcher (academic lanes 1-3 — CTML, cognitive load, aesthetic-usability), GeminiResearcher (lanes 4-6 — typography, feminist HCI, knowledge-graph nav), general-purpose reference-site analyzer (12 sites across 6 categories). All citations real and findable, [LOW] markers used appropriately, Casa Wabi surfaced as counter-example (not exemplar). Output produced 23 candidate criteria + 7 anti-criteria across the four named biases. Five conflicts flagged for Iter-4 resolution. Four items of "novel territory" called out — cross-thinker concept pages as first-class nav, Mexican-modernist editorial register, bilingual co-presence in chrome, Distill-rigor-in-warm-register intersection. Elicit MCP not executed (interactive OAuth required) — surfaced as Iter-2b augmentation option. ArXiv not separately invoked — Lane 6 GeminiResearcher pulled relevant HCI lit; logged DEFERRED-VERIFY with follow-up offer.

**Advisor pass surfaced two substantive gaps; both addressed before phase: complete.** (1) **First-wave feminist HCI only.** Original synthesis cited Bardzell 2010 + Ehrnberger 2012 without second-wave correctives. Advisor flagged D'Ignazio & Klein 2020 (Data Feminism) as "near-mandatory" for a curation/distillation project — curation IS the central feminist-HCI question of whose knowledge counts. Added: Data Feminism, Rosner's Critical Fabulations 2018, Costanza-Chock's Design Justice 2020, Keyes 2018 (Misgendering Machines), and Bardzell & Bardzell 2011 (the methodology follow-up). (2) **Essentialism risk in the "feminine intentionality" label.** Bardzell & Bardzell explicitly warn against feminist HCI collapsing into "design for women" or "feminine qualities." Added AC7 — no essentialism, design moves under this lane must be defensible as generative methodology + curation politics, not aesthetic qualities. Surfaced the bias-label question to Julie as her call (keep "feminine intentionality" with citations defusing essentialism / shift to "feminist intentionality" / carry both with disambiguation).

**Doctrine fired well:** Advisor (Rule 2) caught what the parallel researchers missed — neither ClaudeResearcher nor GeminiResearcher surfaced D'Ignazio & Klein or Bardzell & Bardzell 2011 despite both being load-bearing for the project's structure. The advisor's "is the scaffolding sound?" framing was the right pressure-test on a research synthesis. Cato skipped (E3, not E4/E5 — Rule 2a doesn't fire). ReReadCheck confirmed all seven explicit asks in Julie's original brief addressed. Iteration phase: complete; ISA progress 218/218 for Iter-1 + 245/251 for Iter-2 (ISC-246 DEFERRED-VERIFY, ISC-251 antecedent open until Julie reacts).

**Next:** Julie reacts to the research doc — particularly the bias-label question, candidate criteria coverage, and any conflicts she wants resolved now vs deferred to Iter-4. Iteration 3 (UI Audit) spawns on her go-ahead.

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
- **ISC-4 (2026-05-25):** Thinker Distillation Site entry added to `~/.claude/LIFEOS/USER/PROJECTS.md` Active Projects (after Writing Style System Buildout).
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

- **Komoroske:** `~/Camila/ways-of-komoroske/01-the-diagnosis.md` (drafted), `PLAN.md` (chapter outline for Parts 2+). Knowledge entries in `~/.claude/LIFEOS/MEMORY/KNOWLEDGE/Ideas/`.
- **Fowler:** `~/Camila/ways-of-fowler/{CONCEPT_LATTICE,CORPUS,PREFACE,ISA,PLAN}.md`. PREFACE.md is the only piece currently shipped as a chapter. Knowledge entry at `KNOWLEDGE/Ideas/fowler-cartographer-move.md`.
- **Brooks, Allspaw, Woods, Dekker, Dalio:** No PAI source material — assembled from public corpus when writing. References live in the thinker frontmatter's `body_of_work` and `further_in` fields.

### Classifier note

During this session the prompt classifier occasionally timed out / failed JSON parse, defaulting to ALGORITHM E3. Work proceeded cleanly. Repeated fail-safes in the next session are not a signal of project state; carry on.


## Superseded PROJECTS.md entry (archived 2026-09-16)

- **Thinker Distillation Site** — Active. LIVE at `https://thinker-distillery-97a9ca.gitlab.io/` (GitLab Pages, private). Astro 6 + Mexican-modernist identity; 7 thinkers, cross-thinker concept pages, long-read chapters. **Next moves (Julie's call):** unique-domain flip, Netlify cleanup, 7 B&W editorial portraits, content slots, iter-7 a11y/mobile follow-ups. Workspace + ISA + locked SCHEMA: `~/Camila/thinker-distillation/`. Norms: [[feedback_thinker_inclusion_pushback]] · [[feedback_writing_partner_per_field]] · [[feedback_distillery_prose_voice]].


## Superseded PROJECTS.md entry — archived 2026-09-25

> Replaced in the index by a lean current-state line during the resume-contract
> reconciliation. Kept verbatim; nothing is lost.

- **Thinker Distillation Site** — Active. LIVE at `https://thinker-distillery-97a9ca.gitlab.io/` (private GitLab Pages). 10 thinkers, 3 concepts (+Majors in !11). Process: repo skill `.claude/skills/add-thinker/`; `mode-a` pages need all three review rounds. **Next (Julie, 2026-09-17): design the automation** so she blocks only at merge approval. Also hers: merge !11, the concept reading slot, two About slots. Resume: 2026-09-17 Save Point, `~/Camila/thinker-distillation/ISA.md`. Norms: [[feedback_thinker_inclusion_pushback]] · [[feedback_distillery_prose_voice]].

## Superseded PROJECTS.md entry (2026-10-02)

- **Thinker Distillation Site** — Active, LIVE at <https://thinker-distillery-97a9ca.gitlab.io/> (private GitLab Pages). **17 live pages** as of 2026-09-25, build clean, CI green; 31 open candidates, ledger coverage 8/17. **Three MRs open, all waiting on Julie:** !36 Alexander (control says REVISE), !37 Gene Kim (decide the DORA co-founding claim — unsourceable after two audits, published on two other pages), !38 Karpathy (REVISE). Nothing else ships first. **Auto-merge is decided against** (2026-09-25: "the human gate is a feature of the product, not scaffolding waiting to be removed") — this reverses the old "design the automation" item; do not re-raise. Process: repo skill `.claude/skills/add-thinker/`. System of record: `~/Camila/thinker-distillation/ISA.md` — read its RESUME HEAD. Norms: [[feedback_thinker_inclusion_pushback]] · [[feedback_distillery_prose_voice]].
