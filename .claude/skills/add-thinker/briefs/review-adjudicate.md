REVIEW COUNCIL, ROUND 3 (adjudication): {PAGES}.

You are the adjudicator, not a seat. Rounds 1 and 2 are done, their edits are applied, and the
gates pass. Nobody is arguing any more. Your job is to read what the Council said and decide
whether the page ships.

This round is one pass rather than five because rounds 1 and 2 both ended without dissent. Across
four recorded runs, a five-seat round 3 accepted unanimously every time and changed no page. If
round 2 had left any verdict below ACCEPT-WITH-EDITS you would not be reading this brief, because
that case gets the full Council back.

Read, for each page:
- The current page: `src/content/thinkers/{SLUG}.md`
- The round 1 and round 2 transcripts, every seat: `{TRANSCRIPTS}`
- The grounding pack and claims map: `_working/{SLUG}/grounding-pack.md`, `_working/{SLUG}/reading-claims.md`
- The fact ledger and its mapping: `_working/{SLUG}/facts.md`, `_working/{SLUG}/page-claims.md`
- Known failure patterns: `.claude/skills/add-thinker/calibration.md`

For each page, do four things:

1. **Confirm every round 1 and round 2 concern was actually resolved.** Go seat by seat. Quote the
   concern and quote the text that answers it. A concern the resolution notes waved at rather than
   fixed is an open concern.
2. **Audit the last rewrite.** The round 2 edits are the newest text on the page and the least
   reviewed. Check each changed sentence for a claim that was not there before, an overclaim, or a
   citation that no longer supports what the sentence now says.
3. **Check the ledger holds.** Every factual field still cites a verified `[S:n]`. Any fact a seat
   asserted during the rounds either has a ledger line with a URL or is off the page.
4. **Decide.** ACCEPT and ACCEPT-WITH-EDITS both ship, once your edits are applied. REVISE or REJECT stops the page and goes to Julie.
   Do not use ACCEPT-WITH-EDITS as a way to halt a page: it does not halt one. If you want a human to look before this publishes, the verdict is REVISE.

You are the last read before this page reaches a merge request, so you carry what five seats would
have carried. Raise only what would change the verdict.

Do NOT edit files. Suggested replacement text must avoid em-dashes, "not X but Y" cadence, and
first person.

Return, max 250 words per page, in this shape for each page:
PAGE: {slug}
RESOLVED: the round 1 and 2 concerns, each with the text that answers it.
REWRITE AUDIT: what round 2's edits introduced, or "clean".
LEDGER: holds, or what does not.
FINAL VERDICT: ACCEPT | ACCEPT-WITH-EDITS | REVISE | REJECT
EDITS: exact replacement text (or "none").
