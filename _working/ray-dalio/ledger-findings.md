# Ray Dalio: ledger findings

Backfilled 2026-10-15 against the shipped page. The gate requires fifteen factual fields. Eleven
are supported and mapped. Four are left unmapped: three because the record says something
different from the page (contradicted), and one because no source was found for the claim as the
page states it (unsupported). Fact ids refer to `_working/ray-dalio/facts.md`.

A note on reading these. The page holds up well on what Dalio wrote and when. His books, the
video and the TED talk all exist as described, and three of his five frames trace cleanly to his
own text with no earlier use of the name found. The gaps sit in two places: who first used a phrase
or a form, and a critic edge that seems to have been inferred from the two men's general positions
rather than taken from anything Taleb wrote. In each case there is a reasonable account of how the
page came to say what it says, and the findings below try to give it.

## Contradicted

**named_frames[0].attribution, "Principles," original.** The page's gloss says "The genre is the
contribution."
The record shows the genre of numbered, written-down principles that a person or organization
commits to and revises predates Dalio. Benjamin Franklin's thirteen numbered virtues, each with a
written precept and tracked and revised on a daily chart, are the classic personal case. Jeffrey
Liker's *The Toyota Way: 14 Management Principles* (McGraw-Hill, 2004) is an organizational one,
published before the earliest dated record of Dalio's own document, the 2010 leak (S:13, S:17,
S:18). That ordering should be held lightly: the 2010 report describes a handbook Dalio had
already written for his staff, so his document may well be older than Liker's book, and nothing
here suggests he borrowed from Toyota. Franklin alone is enough to place the genre before him.
The page itself places Munger's *Poor Charlie's Almanack* (2005) in "same form." What does
look like Dalio's own is the practice of running a whole firm against one long, living, published
principles document. The record supports `extended` with Franklin or Liker as antecedents, or a
narrower original claim for that specific practice.

**named_frames[1].attribution, "Radical transparency," original.**
The exact phrase was in print before Dalio's earliest dated use, which is his 2010 response to the
Dealbreaker leak: "Besides believing radical truth, I believe in radical transparency" (S:13).
Wikipedia's article on the term records a 2001 *Foreign Affairs* argument for "radical
transparency," Chris Anderson's Wired post of 2006-11-26, Clive Thompson in Wired in 2007, and use
of the term for WikiLeaks by 2008 (S:19). It is entirely possible Dalio was using the phrase inside
Bridgewater earlier; several business sites say he introduced it around 1993, but none gives a
source, and no dated Dalio use before 2010 was found. Dalio's institutional version, with recorded
meetings and open evaluations, is distinctive and is fairly his. The record supports `extended`,
or `original` for the Bridgewater practice with the earlier uses of the phrase acknowledged.

**background, "~$150B AUM at peak."**
*(Revised in the audit, 2026-10-15; see below.)* The $150 billion figure is in the record: Chief
Investment Officer gave Bridgewater's assets as $150 billion in October 2022, when Dalio handed
over control (S:3). The same outlet gave $160 billion in January 2019, and Bloomberg's report of
that month carries the same figure in search excerpts (S:4). So the page's number is a fair
snapshot of one moment, most likely the 2022 handover; what the record does not support is
calling it the peak, since the firm was reported larger three years earlier. The rest of the field
is supported: born 1949 in Queens, founded Bridgewater in 1975 from his apartment, largest hedge
fund in the world, stepped down as CEO in 2017 and from investment leadership in 2022, and the
three books (S:1, S:2, S:3, S:27). One small point on wording, which does not fail the field:
Bridgewater's own page dates his CIO exit to summer 2020, while the press dates the co-CIO exit and
transfer of control to 2022 (S:1, S:3); both can be true of different titles. Changing the figure
to "about $160B at peak," or keeping $150B without "at peak," would let this field map.

## Unsupported

**adjacent_thinkers[3], Nassim Taleb, edge type `critiques`.** The edge label: "Taleb's critique of
Dalio's macro framework (over-reliant on stable historical priors, under-modeling tail risk) is
the most-cited counterposition."
The pairing is an intuitive one, since Taleb's tail-risk arguments are aimed at exactly the kind
of historically grounded macro modelling Dalio does. But no Taleb essay, book passage, paper or
talk on Dalio was found (S:23). The one place Taleb is on record about Dalio is a May 2019
television interview, reported in search excerpts as Bloomberg at the SALT Conference (S:23), with
a transcript opened directly at Then Do Better (S:24). There he says he likes Dalio personally and
calls his view of American capitalism "profoundly mistaken," because "it's not capitalism that's
wrong. It's absence of skin in the game" (S:24). That is a real disagreement and it names Dalio,
but it is about capitalism and corporatism, not about his macro framework, priors or tail risk, and
an interview answer does not meet the durable-artifact rule (S:25). No source found calls any
Taleb critique of Dalio "the most-cited counterposition." On the record this edge is `parallel`,
or `critiques` relabelled to the capitalism disagreement if an interview transcript is judged
enough, which the skill's rule says it is not.

## Worth a look, not failing the gate

- **body_of_work[0] link is dead.** `https://www.principles.com/book` returns HTTP 404 (S:6). The
  book exists exactly as described (S:5), so the field is mapped.
- **body_of_work[1] title is shortened.** The full title is *Principles for Dealing with the
  Changing World Order: Why Nations Succeed and Fail* (S:27; the Bookshop.org audio listing at
  S:7 reads "or Fail"). Its link now redirects to
  economicprinciples.org, which is live and hosts the book's material (S:8).
- **body_of_work[3] runs 31 minutes**, not thirty (1,860 seconds, uploaded 2013-09-22, S:10).
- **Believability weighting has a formal cousin.** The Classical Model of structured expert
  judgment weights experts by measured performance on calibration questions, and was in use from
  at least 2006 (S:20, revised: the line's source documents the model and its 2006 to 2015
  applications, not a 1991 date). No use of Dalio's phrase before him was found and nothing
  suggests he drew on it, so `original` holds for the name and the organizational rule; it may be
  worth one line in the gloss.
- **Pain + reflection = progress** is Dalio's formula in his own words (S:16). The idea that
  reflection turns experience into learning goes back at least to Kolb (1984) (S:22),
  which the page's own gloss already gestures at with "the personal version of post-incident
  learning."

## Inbound claims

`bun scripts/inbound-claims.ts ray-dalio` lists two edges into this page, from Martin Fowler and
Alex Komoroske, both `parallel` and both `secondary`. Neither disagrees with anything found here.
The only difference is strength: this page rates its Fowler edge `primary` while Fowler's page
rates the return edge `secondary`, which is a judgment call rather than a factual conflict. No
frame credits or prose mentions of Dalio exist elsewhere on the roster.

## Audit, 2026-10-15

An independent audit reopened all 26 original lines against their URLs (every source was fetched
again; the copies are in `_working/ray-dalio/_fetch/`). Thirteen lines said more than their source
does, and each was repaired to what the source says. No line was deleted, because every repaired line
still holds up on its narrower text. Two lines were added. All four findings above stand, with the
background finding revised. None of the repairs changes which fields map, and nothing found lets an
unmapped field map.

**Lines repaired**

- **S:3** cited Chief Investment Officer for "founder-led boutique," "an enduring institution," and a
  2017 "interim co-CEO" role alongside David McCormick and Eileen Murray. None of that is in the
  article (2022-10-04). It now records what the article says, including "assets: $150 billion."
- **S:4** cited Bloomberg, which returns a bot wall, plus a Masters in Business figure and a $168
  billion "2022 peak" with no URL behind either. It now cites Chief Investment Officer's 2019-01-09
  report, opened directly, which gives "$160 billion," and it drops both unsourced figures.
- **S:5** pointed to the MIT Press Bookstore, which returns "Access Denied." It now points to Simon &
  Schuster's page, which confirms the date (September 19, 2017), the imprint, the ISBN and 592 pages.
- **S:7** gave the print ISBN 9781982160272 and the Avid Reader imprint. The URL is the CD-Audio
  edition (Simon & Schuster Audio, EAN 9781797115771), and its subtitle reads "or Fail." The
  2021-11-30 date holds.
- **S:9** gave a 2018 date, a Westport publisher, a 2018-09-10 release and a three-part structure
  with 48 cases. The page carries none of these. It only says the book was written "for the tenth
  anniversary of the 2008 financial crisis." The year now rests on the new S:27.
- **S:11** included a 2020 TED Connects talk that the cited page does not mention. That sentence is
  gone, and the TED2017 recording date (2017-04-24) has been added from the page.
- **S:13** relayed a CNBC claim about 2011, seen only through search results. That claim is gone.
  The line now adds the article's own timing ("Two months ago," so the leak was around May 2010).
- **S:18** quoted "the 14 foundational management principles" and placed the publisher in New York.
  Neither is on the page. It now records the title, the publisher (McGraw-Hill Education, 2004) and
  the page's own wording.
- **S:19**: an unsourced sentence about 1993 was moved out of the line. It already appears, marked as
  unsourced, in the radical-transparency finding.
- **S:20** credited Cooke's *Experts in Uncertainty* (Oxford, 1991) to a URL that is the Colson and
  Cooke 2018 article. The line now records that article, including the model's documented use from
  2006 onward, which still predates Dalio's 2010 record.
- **S:21** said Michael Young coined "meritocracy." Its own source says the word was "first used
  pejoratively by sociologist Alan Fox in 1956," then by Young in 1958.
- **S:22** cited Dewey's *How We Think* (1933), which the Kolb page does not mention. Dewey is
  removed. The line now rests on Kolb (1984) as the page gives it.
- **S:24** and **S:25**: S:25 cited a Hedge Fund Alpha piece (John Mauldin, 2019-06-15) for Taleb's
  argument, but the piece never mentions Taleb. S:24 rested only on search excerpts. Both now cite a
  transcript opened directly (Then Do Better, 2019-05-17), which carries the quoted words. The venue
  (Bloomberg at SALT) still rests on excerpts, as S:23 says.

**Lines added**

- **S:27**: Wikipedia's dates for the three books (2017, 2018, 2021). It now carries body_of_work[2]
  and is a second source for body_of_work[0].
- **S:28**: the Mauldin piece, recorded for what it does say: Dalio's 2019 LinkedIn essays on
  reforming capitalism. It is context for the Taleb lines only.

**Findings disputed or revised**

- **background, partly disputed.** The original finding said no source gives about $150 billion.
  S:3 gives exactly that, for October 2022. The field stays unmapped, because the record still does
  not support "at peak" ($160 billion in early 2019, S:4). The finding is rewritten as a matter of
  which moment the figure describes, not of the figure being wrong. The "interim co-CEO" wording
  point is withdrawn: S:2 says co-CEO, and nothing opened says interim.
- **named_frames[0], confirmed with a caveat added.** The Toyota Way predates the 2010 record, but
  the 2010 report describes a handbook that already existed, so Dalio's document may be older. The
  finding now says so and rests the contradiction on Franklin.
- **named_frames[1] and adjacent_thinkers[3], confirmed.** A web search for a durable Taleb artifact
  on Dalio (essay, paper, Medium, tail risk) found only Taleb's disputes with other investors.

**Added worth-a-look items:** the S:7 subtitle variant, and the Classical Model dating noted
above.
