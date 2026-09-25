# Gene Kim: verified sources (stage 1 research record)

Research pass 2026-09-22 for candidate issue #41, which was filed out of the Jez Humble inclusion
Council. The issue's case was treated as unverified throughout, per `SKILL.md` stage 1. Ledger lines
for everything below are in `facts.md`; this file is the prose a human reads, and it is where the
corrections and the open questions live.

**How this run was verified, because it bounds what the record can carry.** The session's
web-search budget was exhausted before research opened (200 of 200 calls used, with the harness
saying to continue on what was already gathered and to ask for a raise if more were genuinely
needed). So every fact here was verified by fetching a named URL directly: publisher product pages,
the publisher's own excerpt PDFs for four of the books, a Purdue repository record, a DOI record, an
OpenLibrary catalogue record, and the critics' own posts. That is a good way to verify a claim and a
poor way to discover one. The consequence shows up in one place, the uptake breadth check, and
[S:24] is written to claim only what eleven named pages showed.

**Audited 2026-09-22 by a second pass that was told to refute this record, not to confirm it.** Every
one of the 27 ledger lines was re-fetched and string-matched against its URL. Twenty-three held word
for word, including both critic edges and every book fact. Four were wrong and are corrected in place;
the two that reached this prose file are corrected here too, each with the correction visible rather
than quietly swapped. The corrections are all of one kind: a detail that was near a source rather than
in it. Nothing was found unsupportable, and no claim was deleted. Details in `facts.md`, in the audit
note under the header and on the CORRECTED lines themselves.

## What the roster already says about him, and whether it holds

`bun scripts/inbound-claims.ts gene-kim` printed one edge, five frame credits and three prose
mentions. Reconciled one at a time.

**Holds.** Every claim on this site that Kim co-authored *Accelerate* and *The DevOps Handbook*
holds. *Accelerate*'s own copyright page reads "Copyright © 2018 by Nicole Forsgren, Jez Humble, and
Gene Kim" [S:15]; the handbook's second edition is bylined to him first, with Humble, Debois, Willis
and Forsgren [S:14]. The Allspaw page's version, that Allspaw wrote the foreword to the first edition
"which Humble co-wrote with Gene Kim, Patrick Debois and John Willis," is right about the first
edition's four authors and right that Allspaw wrote that foreword [S:14].

**Holds, with one clause to leave alone.** The Forsgren page's `dora-four-keys` frame credits him as
"co-author *Accelerate*; *DevOps Handbook* framing." The first half is verified. The second half is
loose: the handbook's second edition does carry Forsgren's research and does tie each of the Three
Ways to a State of DevOps finding [S:6], so there is something behind the phrase, and nothing read
this run shows the handbook framing the four measures. The new page should credit the measures to the
DORA research and to *Accelerate*, as Humble's page already does, and should not restate the handbook
half.

**Does not hold as published: "co-founder of DORA."** This is the one contradiction this research
opened, and it sits on two live pages. Humble's page says it twice, in his `dora-four-keys` gloss
("Humble co-founded DORA with her and Gene Kim") and in his Kim edge label ("Co-founder of DORA and
co-author of both *The DevOps Handbook* and *Accelerate*"). Forsgren's page says it in `background`
("co-founded DORA ... with Jez Humble and Gene Kim") and in her Humble edge label ("The two founded
DORA with Gene Kim"). The candidate issue repeats it as the first thing it says about him.

Four bios were read looking for it and none of them says it [S:26]. His publisher bio does not
mention DORA at all. His bio printed inside *Accelerate*, a book he co-wrote, does not either.
*Accelerate*'s preface says the three "started working together with the team at Puppet" in late 2013
and never uses the word founder [S:16]. Humble's own site says he was co-founder and CTO of DORA and
names nobody beside him. `dora.dev/about` is a 404 and Google's 2018 acquisition post returns no text
to a fetch.

This is not a claim that Kim did not co-found DORA. It is a claim that this site publishes it four
times over and cannot currently source it. Two dispositions, and the second is the one to take unless
stage 3 finds a primary source: either verify it (a DORA incorporation record, a first-person
statement, the Google acquisition announcement rendered rather than fetched) and give it a ledger
line that the existing pages can cite too, or write the new page on what is verified, which is richer
anyway. The verified version is that Puppet invited Kim into the study in 2012, he invited Humble,
the two of them analysed 4,000 responses, and Forsgren joined for the 2014 report [S:16]. That reads
as a sequence with agency in it, where "co-founder" reads as a title. Either way the correction
belongs in the merge request description, because a new page that repeats an unsourced claim from an
old one is how the Beck and Forsgren critic edge survived for months.

## Corrections to the candidate issue

1. **"Co-founder of the DORA research programme with Nicole Forsgren and Jez Humble."** Unverified.
   See above and [S:26].
2. **The book count is wrong, and the error is load-bearing.** The issue names three books and asks
   "what is his, separately from the three books with three sets of co-authors? If the answer is
   nothing, that is a real answer and it closes this." There are at least seven books and the sets are
   five, one of them a set of one. *The Visible Ops Handbook* (2004, with Kevin Behr and George
   Spafford, published by the IT Process Institute, and Behr has the first byline) predates everything
   the issue mentions [S:18][S:19], and *Accelerate*'s own author bio for him names it as one of his two
   representative books [S:17]. *The Unicorn Project* (2019) carries his name alone [S:10]. *Wiring the
   Winning Organization* (2023) is with Steven Spear [S:12]. *Vibe Coding* (2025) is with Steve Yegge
   [S:20]. Three Phoenix Project graphic novels are with Mike Collins, and *Beyond the Phoenix Project*
   is with John Willis [S:1]. The issue's closing branch therefore does not fire: there is a solo book,
   and there is a solo byline on the frame the other books derive from.
3. **The frame credits are undercounted.** The issue says the Forsgren page credits him on four
   frames. It does, and the Humble page credits him on a fifth, so five frame credits across two pages
   are live before this page exists.
4. **"An American author and researcher."** No source read this run states his nationality. Drop it
   or leave it off; nothing on a page needs it.
5. **"Closer to a publisher and convener than the other two."** The convening half is verified and is
   in his own publisher bio: organizer of the DevOps Enterprise Summit since 2014, now the Enterprise
   Technology Leadership Summit and the Enterprise AI Summit [S:1]. A third party describes the event as
   his, in Forrest Brazeal's "Gene Kim's ETLS in Las Vegas" [S:23]. The *publisher* half is not
   verified. Every book cited here is published by IT Revolution and the inference is easy, and no page
   read this run states his relationship to the company [S:27]. A page may say he convenes; it may not
   say he owns the press until that is sourced.
6. **"Whether *The Phoenix Project*, a novel, counts as a body of work this site can read."** The
   question answers itself in a way the issue did not anticipate: the novel is where the antecedent is
   credited. Erik names "Dr. Eliyahu M. Goldratt, who created the Theory of Constraints" and
   "Goldratt's novel, *The Goal*" [S:8], and the publisher's own feature list puts the Theory of
   Constraints beside the Three Ways [S:7]. The fiction carries the citation that a normal essay would
   carry. That is a readable artifact by this site's standards.

## Uptake check, run before anything else

Verdict: **passes**, and the interesting part is which half of the corpus travels.

| Candidate frame | First dated | Age | Use by people other than him |
|---|---|---|---|
| The Three Ways | 2012-08-22 [S:5] | 14 years | His own four co-authors cite his 2012 post as the source in the 2021 second edition [S:6]; third-party reading lists recommend the books that carry it [S:24] |
| The four types of work | 2013-01-10 [S:7] | 13 years | Publisher asserts the frame; enumeration unsourced [S:9] |
| File integrity checking (Tripwire) | 1993-11-01 [S:3] | 32 years | 574 citations on the 1994 conference version [S:4] |
| The Five Ideals | 2019-11-26 [S:10], named in an essay 2020-08-04 [S:11] | 6 years | Not verified this run |
| Slowification, simplification, amplification | 2023-11-21 [S:12] | 2 years 10 months | Not verified this run |
| FAAFO, the three developer loops | 2025-10-21 [S:20] | 11 months | None found; two critics engage the book's title instead [S:21] |

Nothing here resembles the Saxe case, where every frame was thirteen months old with no outside use.
Two frames are over a decade old, one is over thirty years old with a measurable citation count, and
two independent critics argue against named works of his in durable artifacts, which is itself
evidence that the work is being read [S:21][S:22].

The honest counterweight, and the Council should have it in front of it. Restated 2026-09-22 after the
adversarial audit, because the first version of this paragraph overclaimed by collapsing two strings
that do not behave the same way. On eleven third-party reference pages checked one at a time —
Wikipedia's DevOps article, Microsoft Learn, Atlassian, Red Hat, GitLab, IBM, GitHub, the AWS
Well-Architected DevOps guidance, Fowler's DevOpsCulture entry, dora.dev/research, and Team
Topologies' key concepts — **"Three Ways" appears on none of the eleven.** "Gene Kim" appears on two:
Wikipedia's DevOps article names him twice in its reference list, as a co-author of the 2016 State of
DevOps Report and as first author of *The DevOps Handbook*, and Octopus Deploy recommends three of his
books with their authors and years [S:24]. So the shape of the finding is that his books sit in the
reference and reading layers of these pages while his named frame sits in none of them. That is
sharper than "he is absent," and it is the version the record supports.

One more correction from the same audit, and it hands the page a fact rather than taking one away.
This research originally recorded that Wikipedia has no article for *The Phoenix Project* and that the
title 404s. There is still no article for the novel, but the title does not 404: it redirects to a
live disambiguation page, which describes the book as "a fundamental book that introduced the concept
of DevOps by Gene Kim, Kevin Behr, and George Spafford" [S:24b]. That is an outside encyclopedia
saying the novel introduced the concept, which is uptake of the book and is usable as such. It says
nothing about the Three Ways, so it cannot be stretched to cover the frame.

Two reasons to hold that finding loosely. Eleven hand-picked pages is not a survey, and with no
search budget this run there was no way to make it one. And the pages were chosen because they are the
places DORA's measures show up, which loads the comparison. What survives both caveats is worth
carrying into the page: the books travel further than the frames do, and a large share of the
visible circulation of the frames runs through IT Revolution's own catalogue, which is his publisher.
Any uptake sentence on this page has to exclude his own imprint before it counts.

## Career, verified

Studying high-performing technology organizations since 1999, in his own words in two separate bios
and again in the *Wiring* preface [S:1][S:13][S:17]. Founder and CTO of Tripwire for thirteen years
[S:1][S:17]; the company was founded in 1997 and he left by July 2010 [S:2], which is consistent with
the thirteen. The software came first: he wrote Tripwire with his professor Eugene Spafford at Purdue,
published as Purdue technical report 93-071 in November 1993 and at the ACM Conference on Computer and
Communications Security in 1994 [S:3][S:4]. Organizer of the DevOps Enterprise Summit since 2014, now
the Enterprise Technology Leadership Summit and the Enterprise AI Summit [S:1]. Host of *The
Idealcast*, where the featured-guest list runs to Ron Westrum, Admiral John Richardson, Elisabeth
Hendrickson and Gail Murphy, and the most recent episodes listed are Debois and Willis, and Scott
Havens twice [S:25]. Corrected 2026-09-22 by the adversarial audit: an earlier version of this
sentence added "and Forsgren and Humble" to the guest list. That episode is not on the page. Humble is
not named on it at all, and Forsgren appears only as the author of a reader testimonial. It is the
same failure the audit stage exists to catch, and it reached prose here because the ledger line
carried it.

Education is unverified and stays off the page [S:27]. Wikipedia calls him a Purdue graduate student
in the 1990s and the 1993 technical report carries his name with no affiliation tag. No bio read this
run names a degree. This follows the Majors precedent, where the drop-out claim was left off for want
of a primary source.

## Antecedents, checked before anything was called original

The instruction is to check the opening of every talk or essay for a credited premise, and this
corpus credits generously in three places out of four.

- **The Three Ways** credits Deming inside the First Way, in the 2012 post itself: "always seeking to
  achieve profound understanding of the system (as per Deming)" [S:5]. The Theory of Constraints
  arrives with Goldratt's name attached in the novel's own text [S:8], and the publisher's feature list
  names it beside the Three Ways [S:7].
- **The Three Ways has a byline complication**, and it is the sharpest attribution risk on this page.
  The 2012 post is bylined to Kim alone and argues in the plural, and it says "It has been especially
  fun working on this with fellow co-author Mike Orzen," author of *Lean IT* [S:5]. Orzen is not an
  author of either published book. The likeliest reading is a collaboration on work in progress that
  did not reach a byline, and the post does not say that, so the page cannot say it either. Two options
  for stage 3: mark the frame `original` and carry the Orzen sentence as a limit in its own words, or
  mark it `co-authored` with Orzen in `co_originators`. The first is better supported, because his own
  four co-authors cite the post as his in print [S:6] and Orzen appears on no byline. Whichever is
  chosen, the Orzen sentence gets quoted and not paraphrased.
- **The Five Ideals** credits two sources in Kim's own text: Jon Smart for "better value, sooner,
  safer, and happier," and Geoffrey Moore for "the difference between core and context" under the
  Fifth Ideal [S:11]. The Fourth Ideal is named "Psychological Safety," which is Amy Edmondson's term
  of art, and the post credits nobody for it. The page should name Moore and Smart in
  `co_originators`, and it should not assert an Edmondson lineage that Kim's text does not claim. A
  ten-minute check for whether *The Unicorn Project* itself credits Edmondson is a cheap stage 3 task.
- **Slowification, simplification and amplification** are co-authored with Steven Spear, and Kim's
  preface hands the lineage over in the first person: Spear and Kent Bowen's *Harvard Business Review*
  article "Decoding the DNA of the Toyota Production System," read in 2004, Spear's *The
  High-Velocity Edge*, read in 2010, and a two-day workshop with Spear at MIT in 2014 that he says cost
  *The DevOps Handbook* a year [S:13]. Spear's own preface section says the Toyota study informed both
  of those works. So the frame is `co-authored` with Spear named, and the Toyota lineage is in the
  sources rather than inferred.
- **File integrity checking** is co-authored with Spafford, who was his professor, and the 1993 report
  is the artifact [S:3].

## Critic edges, each tested against all three conditions

**Simon Willison, `critiques`, and he has a page on this site.** "Two publishers and three authors
fail to understand what 'vibe coding' means," 1st May 2025 [S:21]. Durable artifact on his own site,
not a social post. Names the thinker: "*Vibe Coding* by Gene Kim and Steve Yegge (published by IT
Revolution)." Argues against him: the subtitle is "exactly what vibe coding is not," the authors
"abuse that very clear definition," and he calls the result an embarrassing mistake. All three
conditions hold, each with its own clause in the ledger line.

Three things any gloss of this edge has to carry. The scope is the term and the title, and the piece
says nothing about the Three Ways, the Five Ideals or the delivery corpus, so a label implying
Willison attacks the DevOps work would be false. The argument rests on Karpathy's coinage, which
Willison quotes at length, so the dispute is over stewardship of someone else's word. And the
outcome is on the record: Addy Osmani's book was retitled, and Kim and Yegge's subtitle shipped in
October 2025 word for word as Willison had quoted it in May [S:20]. That last fact is checkable, it is
recent, and it is the kind of thing a page can state without editorialising.

Per SCHEMA 4.11 a critic with a page here takes `strength: primary`, and the build warns when one
does not. The byline test is worth a moment anyway, since Willison is a neighbour this site already
publishes and the edge puts two of its own pages in disagreement. That is a feature, as long as both
labels describe the same dispute.

**Keunwoo Lee, `critiques`, secondary.** "A review of *Accelerate*," 2022-06-07, already on the
Humble page as a critic edge with its four grounds recorded in that page's ledger. It names Kim twice,
once in its citation header and once in the body: "J. Humble and G. Kim, for example, have long and
successful careers in engineering leadership ... But to accept the validity of survey constructs based
on the qualifications of the authors would be an argument from authority" [S:22]. All three conditions
hold. The scope is narrower than the naming suggests: the target is the book's scientific claim, which
belongs to the research half of the corpus, and Kim is named as a co-author rather than as the subject
of the argument. Lee has no page here, so `strength: secondary`.

**Nobody else found.** No critic of the Three Ways, the Five Ideals or the three mechanisms surfaced
this run. Absence here means less than usual, because finding a critic is a discovery task and
discovery is exactly what the spent search budget removed. Treat "two critics" as a floor.

## Frame candidates for the Council, with attribution as the record supports it

1. **The Three Ways** (flow and systems thinking; amplify feedback loops; a culture of continual
   experimentation and learning). 2012 post, 2013 novel, spine of the 2016 and 2021 handbook.
   `original`, Deming and Goldratt credited in the sources, Orzen to be answered in the open. The one
   frame his own co-authors cite as his in print.
2. **The four types of work.** Publisher asserts it, the novel poses it and names one of the four, and
   the full list is unsourced [S:9]. Either source the enumeration at stage 3 or keep the frame out.
   Do not enumerate from memory.
3. **The Five Ideals.** Kim's, from the solo book, with Moore and Smart credited in his own text and
   psychological safety carried as an existing term.
4. **Slowification, simplification, amplification.** `co-authored` with Steven Spear, Toyota lineage
   credited by both authors in their own prefaces.
5. **File integrity checking.** `co-authored` with Eugene Spafford, 1993, 574 citations. Whether this
   is a named frame or a body-of-work entry is a real editorial question for the Council rather than a
   research one. It is the only item in the corpus that is a security artifact rather than a management
   one, and it is the piece of him this site's own Lens is closest to.
6. **FAAFO and the three developer loops** (2025). Eleven months old, no outside use found. Live edge
   prose only. SCHEMA 4.14 forbids linking a frame entry from there, and these are the reason the rule
   exists.

## Two risks the Council should be handed with the case

**The novelty risk is structural, not stylistic.** The Humble page shipped on 2026-09-22 with its
whole spine set on attribution: "Almost none of it is his alone and he is usually the one saying so."
Kim credits his sources in the same way, in the same programme, often in the same books. A Kim page
organised around shared credit would be the Humble page again with different names in it, and the
novelty seat would be right to say so. The angle that the record supports and Humble's does not is
circulation: the Three Ways reached people through a novel modelled on Goldratt, a summit he has run
since 2014, a podcast, a press, and a hundred case studies he convened and then cited in his own
handbook [S:6][S:13][S:16][S:23][S:25]. The candidate issue half-saw this and filed it as a doubt,
asking whether a convener is "a different kind of contribution this site has no way to describe yet."
The research says it is describable, and the better question is whether the site wants to describe it.

**The absence sentence has to stay bounded.** The finding that his frames are missing from eleven
reference pages while DORA's measures are on several is the most interesting thing this run turned
up, and it is also the easiest thing on this page to overstate. It supports "on the pages checked,"
and it does not support "practitioners do not use the Three Ways." Humble's `limits[3]` is the model
for how to write a bounded absence claim, and this one needs the same treatment or it needs to go.

## Open items for stage 3

- Source or drop "co-founder of DORA," and if it is sourced, give the existing Forsgren and Humble
  pages the same ledger line.
- Source the four types of work, or leave the frame off.
- Decide the Orzen question, with the sentence quoted either way.
- Check whether *The Unicorn Project* credits Edmondson for psychological safety.
- Verify his relationship to IT Revolution, or say nothing about it.
- Uptake breadth for the Five Ideals and for the three mechanisms is unverified, and both need a
  search budget rather than a URL.
