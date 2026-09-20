RECHECK, PHASE 1 (survey): {PAGES}.

This page shipped a while ago and the staleness queue has surfaced it. You are checking whether it
is still true, not whether it is good. Nobody is asking you to review the writing, the argument,
the structure or the Lens position. Those were settled by a full Council when the page shipped and
reopening them here is the failure this phase exists to prevent.

**You return findings and no verdict, and you do not edit anything.** Phase 2 decides. That
separation is deliberate: a survey that can also rewrite turns into a rewrite nobody asked for.

Read, for the page:
- The page: `src/content/thinkers/{SLUG}.md`
- Its ledger and mapping: `_working/{SLUG}/facts.md`, `_working/{SLUG}/page-claims.md`
- The prose research record, if one exists: `_working/{SLUG}/sources.md`

Run `bun scripts/staleness.ts --json` and read this page's entry. It tells you how many volatile
fields the page has and why it came due.

**Check only the volatile fields.** `scripts/decay.ts` decides which those are, and for a thinker
page they are `active_years` and `background`, the two whose truth depends on what the person is
doing now. Everything else on the page is permanent by construction: who originated an idea, what a
book says, who criticised whom, all of it is a claim about the past. Do not re-verify those. If the
thinker has died since the page shipped, say so, because that changes the page's decay profile to
nothing at all.

For each volatile field:

1. **Open the sources the ledger cites for it** and check whether they still say what the page
   says. A source that has moved counts as changed; a source that has gone counts as changed.
2. **Look for what has happened since.** A new job, a new title, a new book, a retraction, a public
   change of position. Only things that bear on a field the page actually states.
3. **Say what the page would have to change**, in one line, and name the source that establishes
   it, with a URL and a date. A claim you cannot source is a finding marked UNSOURCED, never a
   proposed edit.

**If you find something that contradicts a claim the page makes, say so in as many words and mark
it CONTRADICTION.** That is the finding phase 2 handles differently from everything else: it opens
a merge request hedging or removing the claim, with the contradiction named at the top of the
description. A shipped page is never unpublished, never silently edited, and never parked.

**Most rechecks find nothing, and that is the expected result.** About 70% come back low priority
in the literature this cadence is drawn from. Returning "nothing has changed" is a complete and
useful answer, and padding it to look productive is worse than useless: it spends a human's
attention on a page that did not need it.

Do NOT edit files. Suggested replacement text must avoid em-dashes, "not X but Y" cadence, and
first person.

Return at most 200 words per page:
PAGE: {slug}
VOLATILE FIELDS CHECKED: each one, and whether it still holds.
CHANGED: what is no longer true, each with a source URL and date (or "nothing").
CONTRADICTION: any finding that contradicts a claim the page makes (or "none").
UNSOURCED: anything you believe changed but could not source (or "none").
