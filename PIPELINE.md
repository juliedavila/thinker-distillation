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
left dissent, in which case the seats come back.

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

From the repository root, with the Workflow tool:

```
name: thinker-pipeline
args: {
  "today": "2026-09-18",
  "candidates": [
    {"issue": 12, "name": "Will Larson", "slug": "will-larson"},
    {"issue": 16, "name": "Simon Willison", "slug": "simon-willison"}
  ]
}
```

`today` is required because a workflow script cannot read the clock. `dryRun: true` runs everything
except the push and the merge request.

The Workflow tool needs Julie's explicit opt-in each time, which is a property of the tool rather
than of this design. The control flow has been exercised against stub agents across seven
scenarios, including every parking path, so what remains untested is agent judgment rather than
orchestration.

## Still hers

The About page slots. The concept-page reading prompt. The `margin_note` on any page. The neighbour
demotions, which arrive in merge requests. The five legacy prose warnings on four merged pages. And
the round-3 question above.
