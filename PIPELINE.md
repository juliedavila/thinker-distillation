# Running the pipeline without Julie in the middle

Julie's direction on 2026-09-17: she had been following the thinker runs rather than deciding
anything in them, and wanted the process automated so that the one place she blocks is the merge
request. Nine candidates are queued. This document is the design, and it answers the six questions
the save point asked. The pieces it describes are `.claude/workflows/thinker-pipeline.js`,
`scripts/review-policy.ts` and `scripts/fact-ledger.ts`.

## Where Julie blocks, and where she does not

She blocks in exactly one place: approving a merge request. Everything before it runs unattended
and leaves a record she can audit afterwards.

Three things still stop and wait for her, and each one is a case where the process has already
decided it cannot decide. A candidate that fails the uptake check, or whose research contradicts
itself, or that two or more inclusion seats reject, gets parked with a comment on its issue instead
of a page. A page that still carries dissent after its last review round gets parked the same way,
because SKILL.md has always sent that case to her and automation is not a reason to change it. A
neighbour demotion, which happens when adding a page pushes an existing one over the seven-edge
cap, ships inside the merge request with the demotion called out at the top of the description, so
it reaches her as a thing to approve rather than a thing to discover.

Nothing else pauses. Research, the inclusion Council, drafting, return edges, the Reading Protocol,
the review rounds, the build and the merge request all run through. That matches what actually
happened in the last session, where every one of those stages ran without her input.

## The seven phases

**Research** verifies every fact from primary sources and writes two files: `sources.md`, the prose
record a human reads, and `facts.md`, the ledger described below. The uptake check runs first,
before any Council is convened, because that is the check that would have saved five seats on
Saxe.

**Fact audit** is a second agent whose only job is to refute the first. It opens each URL in the
ledger and decides whether the source says what the claim says, defaulting to unsupported when it
cannot tell. It repairs what it can and parks the candidate when it cannot.

**Inclusion** runs the five fixed seats once over the whole batch. Seat 5's attribution map is the
output the drafting stage leans on hardest.

**Draft** writes the page, the claims map, the Editorial Reading and a description of the return
edges each existing page needs. It does not edit those neighbouring pages, because two candidates
drafting at the same time would collide on a shared neighbour.

**Policy** runs `scripts/review-policy.ts` and does nothing else. It exists so the round count comes
out of the repository rather than out of the workflow script.

**Review** runs the rounds the policy returned, with an editor between them that applies the
accepted edits, re-authors them in the site's voice, reruns both gates and re-audits its own
rewrite. Rounds 1 and 2 are the full five seats; round 3 is one adjudication pass unless round 2
left dissent, in which case the seats come back. Then the cold reader, below, on every page.

**Ship** is serial, one candidate at a time, and it is the only phase that touches git or a
neighbouring page. It applies the return edges, builds, writes the transcript, pushes and opens the
merge request.

**Report** merges the per-candidate calibration entries into the log, files the new candidate issues
the seats named, comments on every parked candidate, and writes the note Julie reads first.

## The three failures automation had to fix first

The save point named three things the skill still got wrong. Removing a human from the loop makes
each one worse, so each has a structural fix rather than a reminder.

**A rule written in two places gets followed in one.** The three-round requirement for `mode-a`
pages lived in SCHEMA.md section 7 and nowhere else, and two pages shipped with a single round
because the skill driving the work never mentioned it. `scripts/review-policy.ts` is now the only
place the round count is decided. SKILL.md and the workflow both call it instead of restating it,
and it prints the escalation rule alongside the count so the caller cannot take the number without
the condition attached to it.

**The gates covered three fields out of a dozen.** Fixed on 2026-09-17 in the Majors merge request.
`scripts/reading-gates.ts` now reads every editorial field and warns, with `--strict-prose` to fail.
The remaining hazard is that a warning is easy to skip, so the drafting and editing stages are both
told in as many words to read the warnings as well as the exit code.

**Council seats assert things that are not true.** This is the one that would have shipped a wrong
fact unread. Three times a seat asserted something false and a human caught it: a sympathetic essay
called a critique, an uptake quote with no source, a disclosed interest called undisclosed. The fix
is the fact ledger, and the rule it enforces is that a seat report is a research request and never
a fact.

## The fact ledger

Two files per candidate under `_working/<slug>/`. `facts.md` holds one line per verified fact, each
with a URL and the date it was checked. `page-claims.md` maps each factual field on the page to the
fact IDs behind it. `scripts/fact-ledger.ts` derives the required list of fields from the page
itself, so a new frame, a new critic edge or a new book adds a required line automatically and
cannot be forgotten.

It is deliberately narrow. It covers attribution, co-originators, critic and antecedent edges,
published work, and career facts, which is where every error actually happened. Interpretation is
not a fact and is not checked here. The Editorial Reading keeps its own claims map, and the
Councils keep judgment.

`_working/charity-majors/` is the worked example, backfilled from the shipped page so the drafting
stage has something real to copy. Twelve facts, eighteen factual fields, all cited.

## Which checks are load-bearing, and which are ceremony

From the run log, which is the only thing that can answer this.

| Check | What it has caught | Verdict |
|---|---|---|
| Research fact-checking | Three errors on Fournier, six on Saxe, a secondhand claim in four places on Majors | Load-bearing, the highest-yield check in the process |
| Uptake check before the Council | Would have settled Saxe before five seats were spent | Load-bearing and nearly free |
| Inclusion Council, accept or reject | Every verdict since Saxe has been 5 to 0 or 4 to 1 accept | Confirmatory once the uptake gate runs first |
| Inclusion Council, attribution map | Where the page learns what is original, extended or borrowed | Load-bearing, and the reason the Council stays at five seats |
| Automated gates | A banned cadence in a shipped thesis, every citation that failed to resolve | Load-bearing and free |
| Review round 1 | Real errors on every run without exception | Load-bearing |
| Review round 2 | One new claim introduced by a rewrite, in the seven-page batch | Load-bearing, but narrowly: it is the rewrite audit |
| Review round 3, five seats | Four runs, every seat accepted, no page changed | Retired as the default on 2026-09-17 |
| Review round 3, adjudication | Replaces it: one pass that confirms resolution, audits round 2's edits, checks the ledger | The convergence step, at a fifth of the cost |

Round 3 had never changed a page. A fourth run of five seats confirming what three already agreed
on was buying very little, so Julie approved the narrowing on 2026-09-17. Rounds 1 and 2 keep all
five seats, because they catch something on every run. Round 3 is now a single adjudication pass
against `briefs/review-adjudicate.md`, and the five seats come back whenever round 2 leaves any
verdict below ACCEPT-WITH-EDITS, which is the case the evidence never covered. The adjudicator is
told it is the last read before a merge request and carries what five seats would have carried.

That saves four agents per batch and, on four runs of evidence, changes no outcome.

## Cost

Roughly 28 agents for two candidates and 36 for three, on the happy path with both pages in
`mode-a` and round 3 adjudicating. Candidates that park cost less, since parking happens before the expensive stages.

The design batches wherever the Councils can share a pass. Five seats review every page in the
batch at once instead of five per page, which is what SCHEMA already recommends and which is also
where the novelty seat does its best work, since sameness between two new pages only shows up with
both in front of it. Three candidates is the reviewed maximum. The workflow warns past that, on the
grounds that the seats start splitting their attention.

At three per batch, the nine queued candidates are three runs.

## Running it

From the repository root, with the Workflow tool. **Pass `scriptPath`, not `name`.** The named
registry only resolves workflows the harness itself knows about, so a repository-local one has to
be invoked by path. The first launch attempt failed on this.

```
bun scripts/sandbox.ts create 2026-09-21      # prints the sandbox path

scriptPath: .claude/workflows/thinker-pipeline.js
args: {
  "repoPath": "<the path the sandbox printed>",
  "today": "2026-09-18",
  "candidates": [
    {"issue": 12, "name": "Will Larson", "slug": "will-larson"},
    {"issue": 16, "name": "Simon Willison", "slug": "simon-willison"}
  ]
}
```

`today` is required because a workflow script cannot read the clock. `dryRun: true` runs everything
except the push and the merge request.

Two things the script itself must respect, both learned by breaking them. The `meta` block has to
be a pure literal, so a `whenToUse` built by concatenating two strings is rejected outright before
anything runs. And a script is plain JavaScript with no filesystem access, which is why every file
in this process is written by an agent and never by the orchestrator.

## The sandbox, and why capability does the real work

Unattended runs happen in a disposable clone. `bun scripts/sandbox.ts create` makes one under the
system temp directory, resets it to `origin/main`, symlinks `node_modules` so the build works, and
prints the path. Pass that path as `args.repoPath` and the whole run happens there. Tear it down
with `bun scripts/sandbox.ts destroy <path>`, which refuses any path outside the sandbox root,
including the root itself. Teardown is a guarded function rather than a shell command because
`.claude/settings.json` denies `rm -rf`, which is what the only two permission refusals in the
first live run were reaching for.

That makes every local mistake free. An agent that deletes the wrong directory or mangles the index
costs a rebuild of the sandbox and nothing else, and the real checkout is never touched, which is
how a stray `test merge` commit reached local main on the first run.

**A sandbox cannot contain the part that matters most.** Destroying a directory does not un-push a
branch, un-open a merge request or un-close an issue, and those are the pipeline's only genuinely
irreversible actions. They are contained by capability instead. The sandbox pushes with a GitLab
project access token holding the **Developer** role, and `main` is protected at Maintainer for both
push and merge. So the pipeline can push a candidate branch and open a merge request, and it is
**structurally unable to push to main or merge its own work**. The one gate that stays human is
enforced by the server rather than by asking an agent nicely.

Worth knowing, since it was nearly missed: branch protection was already configured before any of
this, and it was inert. The pipeline authenticated as the project owner, who is a Maintainer, so
the rule never bound. The fix was not more configuration, it was a weaker identity.

`bun scripts/sandbox.ts check <path>` proves both halves: it feeds refs to the pre-push hook
directly and reads the token's access level and the branch's required level from the API. It does
not use `git push --dry-run`, because a dry run skips the hook and GitLab does not evaluate branch
protection for one, so it reports success for a push that would be refused. The first version of
the check did exactly that and declared the boundary broken when it was holding.

## Maintenance

Added 2026-09-20 after a five-seat Council debated the design and rejected most of it. The
transcript is at `~/.claude/LIFEOS/MEMORY/COUNCIL/distillery-maintenance-layer-20260920-debate/`,
and it is worth reading, because four of the five seats withdrew a position they had argued for.

**What is due** comes from one place, `bun scripts/staleness.ts`. A page is due when it has volatile
fields and has gone more than a year without revision. Volatility is computed in `scripts/decay.ts`
from the field path and the thinker's `status`, so nothing is assigned by hand: `active_years` and
`background` are volatile for a living thinker and permanent for a dead one, and every other
factual field on a page is a claim about the past. Brooks died in 2022, so his page has nothing
that can rot and never comes due. Parked candidates are read from `_working/_parked.md` and appear
in the same report, because "what is due" should have one answer.

`--strict` exits non-zero and belongs on merge requests. Never put it inside `astro build`: CI
builds every commit on the default branch, so a time-based failure there would one day block
deploying an unrelated typo fix.

**The recheck rides along with a thinker batch**, in a Recheck phase between Policy and Review. The queue is computed inside the run by `staleness.ts`, never passed in, because a list a human has to supply is another trigger nobody pulls. An empty queue costs one cheap agent and is the common case. A recheck that changes a page ships its own merge request, serially, after the thinker pages.

**A recheck is not a review.** `scripts/review-policy.ts <slug> --recheck` returns two phases: one
seat surveys and returns findings with no verdict and no edits, then an adjudicator decides and is
the only phase that may change the page. Butler 2023 found 30 search updates producing 3 published
revisions, so a recheck has to be near-free or it will simply never be run. Most rechecks finding
nothing is the expected result, not a failure.

**The contradiction rule.** If a survey finds something that contradicts a claim a live page makes,
the adjudicator opens a merge request hedging or removing that claim, with the contradiction named
at the top of the description. That is the same channel a neighbour demotion already uses, so it
reaches Julie as a thing to approve. A shipped page is **never unpublished, never silently edited
and never parked.** Parking is for candidates; a page that already shipped has readers.

**Withdrawal** is an editorial act and is never computed. SCHEMA section 4.15 has the field and the
reasoning. It is not retirement-on-a-clock, and it is not the `_` filename prefix, which would take
the page out of `pageSlugs` and rot every inbound edge silently.

**What readers see** is one plain line, "This reading: <date>", with no threshold and no colour,
plus the Live Edge badge where a page has one. No staleness badge. The limits section earns trust
because it is argued, specific and signed; a badge is generic and unargued, and reads as evidence
nobody is home. A date lets the reader judge, and a reader who knows Brooks wrote in 1975 reads a
four-month-old date differently from one reading a working practitioner's page.

**What the Council cut, and why it matters that it did:** a computed `page_state` (the Stanford
Encyclopedia precedent turned out to describe an adjudicated dispute, not a clock), per-fact decay
tags assigned by hand (exactly one of thirteen pages ever carried the site's other optional
per-page field), and the bulk ledger backfill. That last one is the finding worth remembering: a
ledger built at intake records where a claim came from, while a ledger assembled afterwards
searches for a URL that fits a claim already published. The two are indistinguishable on disk and
only one means anything, which is why `facts.md` now marks a fact confirmed after publication as
`re-verified` with its own date, and never rewrites the original `checked` date.

## The candidate queue

The pipeline files candidates faster than it ships pages, because every inclusion seat names
adjacent people and stage 8 files all of them. One run shipped two thinkers and filed ten. Julie's
call on 2026-09-20 was to keep the backlog and rank it rather than cap what a run may file.

`bun scripts/queue.ts` ranks it on three observable facts, lexicographically rather than as a
blended score. **Graph pull** leads: how many existing pages already name this person as a
neighbour or a frame's co-originator, counted as distinct pages. It is the least speculative signal
available, since those pages already decided the person mattered enough to name, and shipping them
turns a dead name into a live link rather than adding an isolated node. Then **Council support**,
parsed from the issue body. Then **age**, as a tiebreak only.

No hand-tuned weights. A weighted sum whose coefficients someone chose by feel is the opacity that
disqualified PageRank for the neighbour ranking.

It ranks research order and nothing else. Whether a candidate belongs on the site is settled by the
uptake check and the inclusion Council, on research the script has not done.

**`--sync` writes two labels back to the issues, and deliberately not the rank.** A rank is a
position in a list that changes every time a page ships, so a number written into an issue is wrong
within days and nothing says so. Storing a computed value where it can rot silently is the mistake
this repository has made twice already. What gets written are two facts that flip only on durable
events: `queue:pulled` when at least one page names the person, and `queue:unargued` when nothing
names them, no Council argued for them, and they have sat past sixty days. The sync touches only
the `queue:` namespace and runs in the Report phase of every pipeline run, so the labels follow the
graph instead of drifting from it.

`queue:unargued` exists because age is only a tiebreak, so a candidate nobody has named and no
Council has argued for never rises on its own. It is the "decide or park" flag. Hudson and Appleton
carry it at 115 days.

## The other axis: what each agent must read

Batching is the lever on agent count, and it has a cost on the axis nobody was watching. Five
Council seats review one candidate or three at the same price, so per-page agent count falls
sharply with batch size. But a seat reads every page in the batch, each page's working set, and
every earlier seat report, so the same batching multiplies what each seat must swallow.

Those two were pushed at once on 2026-09-20 and the second one broke. By review round 2 a seat
faced roughly half a megabyte: 162KB of automatically injected context, about 200KB of working
files across two candidates, 81KB of round 1 seat reports, and 56KB of pages. Every agent from
round 2 onward stalled on the 180 second watchdog without producing a token, which is how this
failure presents. It does not error, it goes quiet.

Two self-inflicted causes, both fixed. The write-to-disk instruction said to write the full report
rather than a summary, which seats took as licence to expand past the brief's 230-word cap, so
round 1 produced 12 to 27KB files that became required reading for round 2. And reviewers were told
to read `sources.md`, the prose research record and the largest file in any working set, when
`facts.md` and `page-claims.md` already carry the verified record in the form a reviewer needs.

**Price anything added to a seat's reading list.** Agent count is the cheap axis and it fails
gracefully. Per-agent context fails as a stall, fifteen hours in, with nothing to show.

## The cold reader

Every page gets one last read from a reviewer who has seen no transcript, no verdict history and no other seat's reasoning: only the finished page, its grounding pack, its claims map and its ledger. It runs after the last editor, whatever the page's round count, and an editor applies what it confirms. It never gates. Its verdict, and anything its editor declined, opens the merge request description.

It began on 2026-09-17 as a temporary control. Round 3 had just been narrowed from five seats to one adjudication pass, on four runs where five seats accepted unanimously, and Bornmann's 2010 meta-analysis of peer review warns that agreement among reviewers who have read each other is a reason to distrust the agreement. The control was meant to measure that and then retire.

Five pages later it had come back stricter than the adjudicator three times and more lenient never, and its findings were the kind no script reaches: a frame marked original with no search behind it, a claim lowered in one field and left standing in others, a page announcing a correction to a neighbour that was never made. A 2026-09-25 Council was asked whether to restore five seats to round 3, and three of four seats said no independently: more readers who have read each other buys more of the same reading. Keep the fresh eyes instead, permanently.

Two things changed from the control. It runs on every page, including an escalated round 3 and a one-round page, since the case for fresh eyes does not depend on how many anchored readers came before. And its findings are applied rather than filed, so a defect it catches is fixed in the same run instead of waiting for a human to carry it into a second session, which is what the 2026-09-24 run cost.

It does not gate because Julie merges every page herself, by choice, to read it. The cold reader's job is to hand her a page with fewer defects and say plainly what is still open.

**The three defects it keeps finding predate the narrowing, so reviewer count was never the variable.** The Council asked this on 2026-09-25 and nobody had checked. A frame filed as original with no antecedent search is in the calibration log's first commit, 2026-09-16, with three examples from pages reviewed by five seats (Kua, Bottcher, McKinley). A claim lowered in one field and left standing in others first appeared on Anderson on 2026-09-20: five seats in round 2 left it and five seats in round 3 caught it. A page's claim about a neighbour going stale was first caught on the same run, in the Willison return edge. All three got past five-seat rounds. They are made when a page is written or edited, and the first is mechanically checkable, which is where the fix belongs.

A finding type the cold reader keeps catching is a defect in the skill, not a job for the cold reader. The Report stage records which checklist item each finding falls under so a recurring type gets fixed upstream.

`scripts/test/pipeline-stub.test.ts` runs the workflow against stub agents and checks the cold reader's placement, that it runs on all three round shapes, that a REVISE reaches the merge request without parking the page, and that a missing cold read is named.

## The Council record

Each seat writes its own report to `_working/_council/<today>/round-N-seat-M.md` before returning,
and each editor writes its resolution notes beside it. Rounds 2 and 3 read that directory, which is
what their briefs mean by the transcript, and the Ship stage assembles the final transcript from
those files rather than from anyone's memory. The directory is gitignored, since the transcript
that matters is copied to `~/.claude/LIFEOS/MEMORY/COUNCIL/`.

This was missing on the first live run, on 2026-09-17. SKILL.md had always required it, and the
workflow wrote nothing until Ship, so rounds 2 and 3 ran with a list of verdicts and no transcript.
Several seats said so in their reports. They still found real problems, but seats responding to
each other by name is the entire reason those rounds exist.

The Workflow tool needs Julie's explicit opt-in each time, which is a property of the tool rather
than of this design. The control flow has been exercised against stub agents across seven
scenarios, including every parking path, so what remains untested is agent judgment rather than
orchestration.

## Still hers

The About page slots. The concept-page reading prompt. The `margin_note` on any page. The neighbour
demotions, which arrive in merge requests. The five legacy prose warnings on four merged pages. And
every merge, which stays hers by choice.
