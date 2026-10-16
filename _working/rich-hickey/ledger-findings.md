# Rich Hickey: ledger findings

Backfilled on 2026-10-15 against the shipped page. Every factual field was treated as a claim to
test: the source was read first, then compared with the page. Forty-two facts went on the ledger.
One field is contradicted, none is unsupported, and the gate fails on that one field, which is the
honest result. A few fields hold up but carry wording worth a second look; those are listed after
the failure, with what the record does and does not say, so a reader can decide without having to
re-run the search.

## Contradicted

### Situated programs filed as `original` (`named_frames[7].attribution`)

**Page:** `attribution_kind: original`. The gloss describes "Programs that run continuously for
years, deal mostly with information, remember what they did, and face real-world irregularity,"
the kind of system Hickey built for two decades.

**What the record says:** The name is his, and he says so: "The word I came up with were
'situated' programs" ("Effective Programs," 2017, [S:25]). The concept, though, has a close and
much older antecedent. Meir Lehman's 1980 classification in *Proc. IEEE* separates S-programs,
"written according to an exact specification," from E-type programs, which "mechanize a human or
societal activity" and, under his first law, "must be continually adapted" or become less
satisfactory ([S:37]). Hickey draws the same line in the same place: situated programs are
"situated in a changing world," "remain in use for long periods of time," and are "not compilers."
There is also a near-twin of the name, Clay Shirky's "Situated Software" (2004), which means
something different: software made for one known group of people ([S:38]).

**How to read it:** Nothing found suggests Hickey borrowed from Lehman. He presents the category
from his own scheduling, broadcast and election work, and reaching the same distinction
independently is a fair and likely explanation. The issue is only the label. `original` tells a
reader the frame had no earlier holder, and the record shows one. The search is recorded at
[S:39]; it covered the open web, not print archives.

**Likely correction (for whoever edits the page):** keep the name credited to Hickey and add Lehman
as an earlier holder of the concept, either as `extended` with Lehman in `co_originators` and a
role that says the parallel is the site's, or by noting the parallel in the gloss. Either keeps
the credit Hickey is owed for the name and the information-systems framing.

## Unsupported

None. Every other required field has ledger lines that say what the page says.

## Holds, with wording worth a look

These fields are mapped, because the record supports the claim as the page states it. Each one
carries a nuance a reader might want reflected.

1. **Incidental complexity and Brooks** (`named_frames[2]`, `adjacent_thinkers[0]`). The page calls
   incidental complexity "Hickey's name for what Brooks called accidental complexity." The two
   definitions match closely ([S:15], [S:17]), and the lineage is documented through "Out of the
   Tar Pit," which follows Brooks by name ([S:18]) and which Hickey's history cites ([S:6]). But
   Hickey himself never connects the two: the full "Simple Made Easy" transcript does not name
   Brooks, "No Silver Bullet," "accidental complexity," or Moseley and Marks ([S:15]). The
   equivalence is a sound reading of the record rather than Hickey's own claim. The Brooks page's
   return edge goes a step further ("Hickey renames accidental complexity"), which reads as
   something Hickey did deliberately; the record shows the overlap, not the intent.

2. **Credited antecedents Hickey does not cite** (`named_frames[3]` Backus, `named_frames[4]`
   Fowler). Backus's 1977 lecture does make the fetch-and-store critique ([S:22]), and Fowler's
   Tolerant Reader does predate "Spec-ulation" ([S:24]). Neither talk names them ([S:21], [S:23]).
   The page's gloss for place-oriented programming already words this carefully ("goes back at
   least to Backus"). Because `co_originators` renders as "also held by," a reader may take it
   that Hickey built on these two; a role line noting the parallel is the site's would make that
   explicit.

3. **The Value of Values as "the talk behind Datomic's design"** (`body_of_work[2]`). The talk
   argues for databases that keep facts instead of overwriting them ([S:21]), which matches the
   design rationale in Hickey's history ([S:4]). The talk's text never names Datomic, though, and
   Datomic's design began in 2010, two years earlier. "The talk that sets out the thinking behind
   Datomic" would match the record more exactly.

4. **Cognitect CTO** (`background`). Hickey's history and Nubank's acquisition announcement give no
   title ([S:5], [S:10]). The only fetched source naming him CTO is Wikipedia ([S:9]). A search
   summary attributed the same title to Bloomberg's acquisition report, but that page could not be
   fetched, so it is not on the ledger.

5. **Jonathan Lange as a critic** (`adjacent_thinkers[4]`). All three tests hold: a dated essay at
   a stable URL ([S:27]), naming Hickey ([S:28]), and arguing against the talk ([S:29]). Two
   nuances: Lange calls it a written-up Slack rant and "not meant to be a formal rebuttal," and he
   concedes several points and describes himself as "a fan of both Haskell and Rich Hickey." On
   sum types he says Hickey is "both right and wrong," which is a little softer than the page's
   "misstates."

## Inbound claims from other pages

From `bun scripts/inbound-claims.ts rich-hickey`, checked against the ledger:

- **Fred Brooks page** (`extends` edge): "Hickey renames accidental complexity 'incidental
  complexity' in 'Simple Made Easy' (2011)." The talk does coin "incidental complexity" with a
  definition that matches Brooks's, but it never mentions Brooks or the word "accidental" ([S:15]).
  "Renames" implies a deliberate act the record does not show. See item 1 above.
- **Martin Fowler page** (`parallel`): calls guardrail programming "a direct counterpoint to
  refactoring under tests." Hickey's talk names refactoring among the "reliability tools" ([S:16])
  but never names Fowler. "Direct" may read as aimed at Fowler; as a parallel the edge is fine.
  The Tolerant Reader pairing agrees with [S:23] and [S:24].
- **Simon Willison page** and **Kent Beck page** (`parallel`): both say the two men do not cite
  each other, and nothing on the ledger disagrees.
- **Append, Don't Overwrite** (concept page): describes value, identity, state and time as
  "Hickey's model, drawn from Whitehead." Hickey calls Whitehead "the hero of the talk" but also
  says "I am not restating Whitehead. I am making this up now," and that his terms are "completely
  out of Whitehead terms" ([S:19]). "Inspired by Whitehead," the wording on Hickey's own page, fits
  the record better than "drawn from."

## Audit, 2026-10-15

A second reader reopened 31 lines against the sources: every line behind an attribution, a
co-originator, the critic edge, a "coined" or "named" claim, or a date ([S:1] to [S:16], [S:19] to
[S:32], [S:34], [S:36] to [S:40]). Most hold exactly. The HOPL paper, the talk transcripts, Brooks,
"Out of the Tar Pit," Backus and both Dijkstra lectures were re-read from the local copies in `_src/`;
the web pages were re-fetched. The original author's careful work shows: no line was written to fit
the page, and the one contradicted field stays contradicted for the reasons given above.

### Lines repaired

- **[S:8]** The Strange Loop quote is section 5.2, not section 5. "Peer-reviewed" was the line's
  word, not the paper's: the paper shows only a named shepherd. The review process now has its own
  source, [S:48] (HOPL IV call for papers: two rounds of careful review, with outside experts as
  needed), which `body_of_work[5]` now cites for "peer-reviewed."
- **[S:9]** Added that Wikipedia's own citation for the CTO sentence, Gehtland's 2013 Cognitect
  announcement, names neither Hickey nor any title ([S:47], fetched).
- **[S:16]** "Closing slide" changed to "a slide near the end"; the quoted slide is a summary slide,
  and the talk continues after it.
- **[S:20]** Corrected. "Time is atomic, epochal succession of process events" is not on the "Terms
  (for this talk)" slide; it is on the slide before, "A Simplified View (apologies to A.N.W.)." The
  Terms slide defines time as "Relative before / after ordering of causal values." The repair
  strengthens the Whitehead edge rather than weakening it: the account of time as epochal succession
  sits on the slide Hickey titles as his simplification of Whitehead.
- **[S:21]** Removed the GOTO Copenhagen details, which are not at the YouTube URL the line cites;
  they now have their own line, [S:44], at the InfoQ URL. Added that the talk's history of the habit
  rests on an anecdote about Guy Steele, not a citation.
- **[S:24]** Fowler's post does not open with Postel's law; it introduces it in the second paragraph.
- **[S:26]** The line now records what the talk credits Polya for: problem solving as a practiced
  skill and understanding the problem. The background-mind step is Hickey's "personal experience"
  and is not tied to Polya in the talk. The Princeton copyright date was not at the cited URL; it
  moves to [S:43], which also records that Polya's book has its own "Subconscious work" entry.
- **[S:28]** The talk's venue and date came from the "Maybe Not" transcript, not from Lange's page;
  moved to [S:45] at the talk's YouTube URL.
- **[S:29]** Lange cites "Theorems for Free!" by title and link, not by Wadler's name; the line now
  quotes him exactly. The page's "Wadler's 'Theorems for Free!'" is still correct, since the paper
  is Wadler's.
- **[S:32]** Dropped the InfoQ running time, which is not at the r-bloggers URL. Added that this
  attendee account is the only source calling the talk a keynote, and that Strange Loop's own page
  does not ([S:49]).
- **[S:37]** Wikipedia gives "mechanize a human or societal activity" as Lehman's 1974 definition,
  not as a quote from the 1980 Proc. IEEE paper, which was not read. The line now says so, with the
  paper's full citation. [S:39] is adjusted to match. This matters slightly for the contradicted
  finding above: the antecedent concept is older than 1980, not younger, so the finding stands and
  if anything grows.
- **[S:40]** The 2026 Clojure Deref clause was not at the cited URL; it moved to [S:46], fetched at
  its own URL, and `active_years` now cites it.

### Lines added

[S:43] Polya, "Subconscious work"; [S:44] the GOTO version of "The Value of Values"; [S:45] the
"Maybe Not" header; [S:46] the 2026 Deref; [S:47] the Cognitect announcement; [S:48] the HOPL IV
review process; [S:49] Strange Loop's talk page. No line was deleted.

### Mapping changes

`active_years` adds [S:46]. `named_frames[8].attribution` and `named_frames[8].co_originators[0]`
add [S:43]: the talk's credit to Polya is for a different part of problem solving, so [S:26] alone
did not show Polya holding the incubation idea; his book does. `adjacent_thinkers[4]` adds [S:45].
`body_of_work[0]` adds [S:49]; `body_of_work[5]` adds [S:48]. `named_frames[7].attribution` stays
unmapped, and the gate is still expected to fail on that field alone.

### On the author's findings

- **Contradicted, situated programs.** Agreed. The repaired [S:37] dates Lehman's definition to
  1974, which only widens the gap between `original` and the record. The suggested framing, that
  Hickey very plausibly reached the distinction on his own, is fair and should carry into whatever
  correction is made.
- **Item 1 (Brooks), item 2 (Backus, Fowler), item 3 (Datomic), item 5 (Lange).** Each holds as
  written. On item 1, one addition: the talk does pair "incidental complexity" with "problem
  complexity" and "inherent" complexity ("Inherent is Latin for 'not your fault'"), which mirrors
  Brooks's essence and accident closely, though still without naming him.
- **Item 4 (Cognitect CTO).** Holds, and is a little weaker than stated. Wikipedia's citation for
  the title does not contain it ([S:47]). A search summary also reported a Clojure/conj 2017 speaker
  bio naming him CTO; the page, fetched, gives no title at all. The claim is very likely true, since
  it is widely repeated, but no primary source on the ledger states it. Suggested page wording, if
  an editor wants it: "where Hickey led technology" or "cofounded Cognitect," or keep CTO and accept
  a secondary source.
- **Inbound, "drawn from Whitehead."** Disputed in part. The repaired [S:20] shows the slide that
  sets out Hickey's rules is titled "A Simplified View (apologies to A.N.W.)," which gives "drawn
  from" some footing. Hickey also says he is "not restating Whitehead," so both readings have
  support; "inspired by" remains the safer phrase, but the concept page is not wrong so much as
  less exact.

### Missed by the backfill

1. **The talk credits Polya for something other than incubation** (`named_frames[8]`). The gloss
   says the talk credits *How to Solve It*, which is true, but in context the credit is for
   practicing problem solving and understanding the problem ([S:26]). Polya's book does describe
   setting a problem aside so it returns "essentially clarified" ([S:43]), so the co-originator
   holds on the book, not on the talk's credit. A reader could take the gloss to mean Hickey
   credits Polya for the hammock idea itself. Graham Wallas's 1926 four-stage model, which names
   incubation, is the better-known earlier holder and was not searched.
2. **"The keynote from Strange Loop"** (`body_of_work[0]`). One contemporary attendee calls it a
   keynote ([S:32]); the conference's own page does not ([S:49]). Probably right, given its
   closing slot, but resting on a single blog post.
3. **Persistent data structures: an earlier holder not listed** (`named_frames[9]`). Hickey's
   history names the fat-node approach of Driscoll et al. (1989) as the next thing he evaluated
   after Okasaki and rejected for multithreaded use. Persistence as a general technique predates
   both co-originators the page lists. Not a contradiction, since the frame is "as the default"
   and `extended`; a fuller co-originator list would be more generous to the record.
4. **Complect as `popularized`** (`named_frames[1]`). The only ledger evidence of the word's spread
   is one use by a Hickey respondent ([S:31]). A web search for uses outside Clojure turned up
   many, but nearly all are write-ups of Hickey's talk. The attribution is reasonable; the uptake
   evidence is thin and anecdotal, as the page's own inclusion rationale already says.

## Remediation, 2026-10-15

The contradicted field is fixed: situated programs is now `extended`, the name stays credited to
Hickey, and Lehman's E-type programs are named as the earlier form of the distinction, with a role
line that marks the parallel as the site's and a gloss that says the record does not show whether
Hickey knew Lehman's work. Holds items 1 (on this page), 2 (Polya, from "Missed by the backfill"),
3 and 5 were narrowed to their lines. Items 4 (CTO) and the keynote wording were left as they stand.
The table is `claim-delta-2026-10.md`.
