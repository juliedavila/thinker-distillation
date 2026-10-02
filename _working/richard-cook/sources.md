# Richard Cook: research record (stage 1)

Checked 2026-09-28. Candidate issue #72. The ledger is `facts.md`; `[S:n]` below points there.

## Verdict on the uptake check: passes

Every candidate frame is more than two years old, and the two that carry the page have use by practitioners other than Cook, most of it in software.

| Frame | First date found | Outside use |
|---|---|---|
| How Complex Systems Fail (eighteen propositions) | 1998; the surviving PDF is Revision D, April 2000 [S:9], [S:12] | Allspaw 2009, before any work with Cook [S:16]; Microsoft MSDN blog applying it to the 2012 AWS and Azure outages [S:17]; James Hamilton of AWS, 2020 [S:18]; reprinted in an O'Reilly ops book, 2010 [S:14] |
| First story / second story | 1998, with Woods and Miller [S:19], [S:20] | Hollnagel names it as a precedent for Safety-I/Safety-II [S:22] |
| Going solid | 2005, with Rasmussen [S:25] | Fred Hebert's reading notes, 2023 [S:26] (applied to hospitals, not software) |
| Line of representation / above the line, below the line | STELLA report, March 2017 (Woods byline) [S:29]; Woods and Cook keynote, October 2017 [S:30]; Cook's sole-author article, January 2020 [S:31] | Allspaw, DevOps Enterprise Summit 2017 and a 2019 post [S:33] |
| Dark debt | STELLA report, 2017 [S:34] | John D. Cook (no relation), 2018 [S:35] |

No Council time is wasted here on the Saxe shape. The open question for the Council is the one the issue already asks: what a Cook page argues that the Woods and Allspaw pages do not.

## The live claims the roster already makes, reconciled

`bun scripts/inbound-claims.ts richard-cook`, run first. Three edges, two frame credits, prose on four pages.

1. **John Allspaw edge (extends, primary):** "Adaptive Capacity Labs co-founder and *How Complex Systems Fail* author. The medical-error-and-complex-systems lineage that Allspaw's software-ops work is built from." **Holds.** ACL's own site says Cook co-founded it with Allspaw and Woods [S:7]. Allspaw's own memorial words it slightly differently, with Woods giving "some help" [S:8], so the new page should say "co-founded with Allspaw, with Woods" rather than put three equal names on it. The lineage clause is borne out by Allspaw's 2009 post [S:16] and his 2010 reprint of the paper [S:14].
2. **Erik Hollnagel edge (antecedent, secondary):** "'A Tale of Two Stories' (1998), written with Woods and Miller, set two views of patient safety against each other. Hollnagel names it as one of two precedents for his own contrast." **Holds** [S:19], [S:20], [S:22]. Cook is first author.
3. **David Woods edge (extends, primary):** "Long-time Woods collaborator. *How Complex Systems Fail* (Cook, 2000) is the most widely-read distillation of the joint Woods/Cook position on systemic failure." **Holds in substance, needs narrowing.** The collaboration ran 33 years by Allspaw's count [S:8]. The paper is dated 1998 in its own copyright line and in the memorial; 2000 is the date of the surviving Revision D [S:9], [S:12]. "Distillation of the joint position" is defensible: six of the seven works in its own reading list are co-written with Woods [S:11]. "Most widely-read" is a superlative with no source; nothing contradicts it and nothing supports it.
4. **Allspaw frame credit, above the line / below the line:** filed `co-authored`, `primary_author: john-allspaw`, Cook as co-author. **Does not hold.** The frame first appears in the STELLA report, whose suggested citation is Woods alone and which was "prepared under the supervision of Prof. David Woods" [S:29]. Woods and Cook previewed it at Velocity in October 2017 [S:30]. Its standalone statement is Cook's sole-author *ACM Queue* article of January 2020 [S:31]. Allspaw himself calls it "a sort of frame that my colleagues outlined in the Stella Report" [S:33]. Allspaw co-wrote a 2018 chapter with Cook that the 2020 article cites [S:32], and he carried the frame to practitioners, but by his own account it is not his. The accurate filing on a Cook page is `co-authored` with Woods (or `extended`, Woods originating in the report and Cook writing the standalone argument). The Allspaw page's `primary_author` has to change, and the merge request must say so.
5. **Allspaw frame credit, dark debt:** filed `co-authored`, `primary_author: john-allspaw`, Cook and Laura Maguire as co-authors. **Does not hold.** The report says the term came from "one participant" it does not name, and participants are deliberately unidentified [S:29], [S:34]. No source found names Cook, Allspaw or Maguire as the person who coined it. Allspaw's own piece is labelled an excerpt from the report [S:36], and an outside writer credits the coinage to the workshop [S:35]. Dark debt should not appear on the Cook page as his frame. On the Allspaw page it belongs as `distributed` or as a STELLA/Woods frame with no individual coiner, and the correction goes in the merge request.
6. **Allspaw `body_of_work[2]`** (a prose mention the tool lists): the STELLA report "Co-authored with Cook, Maguire and others. Where *dark debt* and *above-the-line / below-the-line* enter the literature." **The first sentence does not hold** against the report's own suggested citation [S:29]. The second holds [S:29], [S:34].
7. **Allspaw prose, `inclusion_rationale`, `background`, `thirty_second_take`** (ACL co-founded 2017 with Cook and Woods): holds [S:7], with the nuance in item 1. **`why_they_matter_as_a_thinker` and limit L:3** (the Hollnagel / Woods / Cook / Dekker tradition): holds, a claim about the tradition. **`further_in`** (read Cook's *How Complex Systems Fail*): holds.
8. **Woods prose.** `inclusion_rationale` ("the theoretical foundation that Allspaw, Cook, Dekker ... rests on"): not contradicted, but it casts Cook as downstream of Woods when he co-wrote much of that foundation [S:11], [S:23]. `background` ("co-authored with ... Richard Cook"): holds [S:23], [S:24]. `body_of_work[0]` (*Behind Human Error*, 1994, with Cook, Johannesen, Sarter): holds [S:23]. Limit L:3 (software case studies "mostly downstream (Allspaw, Cook, Maguire)"): holds [S:28], [S:31]. **`further_in`** ("eighteen rules, eight pages, the most-cited resilience-engineering piece in software"): **"eight pages" does not hold.** The PDF is five pages including references [S:9] and the memorial calls it a four-page piece [S:12]. "Most-cited" is unsourced, and "resilience-engineering piece" is anachronistic: the paper is dated 1998, and ACL dates Woods's founding of resilience engineering to 2000-2003 [S:38].
9. **Hollnagel prose.** Frame gloss for Safety-I and Safety-II and the Woods edge label: holds [S:22]. The Woods edge says "a 1998 paper Woods wrote with Richard Cook and Miller"; true, though Cook is first author on the byline [S:19].
10. **Dekker `further_in`** ("Cook's *How Complex Systems Fail* as the foundation Dekker is standing on"): not contradicted; not independently checked against Dekker's citations.

## Corrections to the candidate issue

1. **The date.** The issue gives *How Complex Systems Fail* as 2000. It dates from 1998. The copyright line reads 1998, 1999, 2000 and the surviving file is Revision D of April 2000 [S:9], [S:12].
2. **The two Allspaw frames.** The issue lists "above the line and below the line, and dark debt" as frames Allspaw's page credits to both of them, and asks whether they are joint, Cook's or Allspaw's. Answer: neither is Allspaw's. Above the line is Woods's report and Cook's article [S:29]-[S:31], [S:33]. Dark debt is an unattributed workshop coinage [S:34]. This is the finding the page's case most depends on, and it means the new page corrects two live frame credits.
3. **Adaptive Capacity Labs.** Verified, with a wording difference between the firm's site and Allspaw's memorial about Woods's role [S:7], [S:8].
4. **Missing from the issue.** Cook trained in physics and worked as a software engineer at Control Data before medicine [S:2]. That matters for the "what would his page argue" question: he is the one person in this neighbourhood who wrote software, practised clinically and did safety science, and his 2020 article is written about software operations directly [S:31].

## Antecedents and credited premises

- **How Complex Systems Fail** opens straight on proposition 1 with no credited premise [S:9], [S:11]. It is a synthesis, and Allspaw's memorial calls it one [S:12]. Its reading list is Cook's and Woods's own work [S:11]. It never cites Reason, but a Cook figure dated 2005 is credited "modified from J. Reason, 1990" [S:13] (the source does not say which Cook work it comes from, so do not attribute it to the 1999 "Brief Look at the New Look"), and proposition 4 ("latent failures") is Reason's vocabulary. The page should call it a synthesis of the Woods/Cook program that draws on Reason, and should not call it original in the sense of first statement. Perrow's *Normal Accidents* is an obvious parallel that I did not check against Cook's text, so the page should not assert a debt to Perrow either way.
- **Sharp end / blunt end:** the 1998 report credits the relation to Reason (1997) [S:21], and Cook and Woods's 1994 chapter used "sharp end" in its title [S:23]. Filing: `extended`, Reason as originator.
- **First and second stories:** no earlier holder found; the report's own framing is its workshop's [S:19], [S:20]. `co-authored` with Woods and Miller. Miller organised the workshop and captured its results [S:19], so she is a co-author on the byline and should be named.
- **Going solid:** the phrase is borrowed from nuclear operations [S:26], and the model is built on Rasmussen's [S:25]. `co-authored` with Jens Rasmussen, the metaphor credited to nuclear practice.
- **Line of representation:** first in a Woods-supervised report whose authors are otherwise unnamed [S:29]. Cook's 2020 article opens on an ICU analogy and a question, with no credited premise, and credits Woods only for Woods' theorem [S:31]. `co-authored` with Woods is the defensible filing.
- **Distancing through differencing:** Cook & Woods 2006 [S:27]. `co-authored`. Not yet checked for use outside the pair; keep it in the deep tier.

## Critics

No `critiques` edge survives. Of the three conditions:

- M. D. Cooper's 2022 critique of Safety-II is a durable artifact and argues against the New View, but names Cook only inside multi-author citations and never argues against him [S:37]. Fails condition 2. At most `parallel`, and not worth an edge.
- James Hamilton says "I don't agree with every point made" [S:18] and then recommends the paper. Fails conditions 1 (no argument, a one-line reservation) and 3.
- Searches for a rebuttal of the "no root cause" proposition that names Cook returned summaries and endorsements only. The absence is bounded by those searches and is not proof that none exists. The honest limit for the page is that his central claim has been widely adopted in software without a named critic, and that is itself worth stating as a limit (untested outside the tradition that produced it).

## What is still open

- The *ACM Queue* subtitle reads "below the line of representation" in the archived copy, while the memorial and the CACM listing say "above" [S:31]. The page should use the title alone.
- KTH end date: 2015 (emeritus) in both sources, "2012-2015" on Wikipedia. Consistent.
- Wikipedia calls him "associate professor" for all of 1994-2012; the memorial says assistant professor until 2002 [S:3]. Prefer the memorial.
- Whether Laura Maguire has any tie to either frame: nothing found. She should not appear as a co-originator on either page without a source.
- The issue asks whether the page treats his work as finished. He died on 31 August 2022 [S:1]; the corpus is closed, as on the Brooks and Anderson pages.

## Sources consulted and not used

- Cooper's LinkedIn essay "How different is Safety Differently?" (a social post, and about Dekker).
- Lauren Crichton's "above the line / below the line" newsletter (2024), which is an unrelated coaching idea with the same name. Worth a guard in any search for uptake.

## Added at drafting (stage 3, 2026-09-28)

- **Sharp end / blunt end, settled.** Cook and Woods's own 1994 chapter says practitioners "work at what Reason calls the 'sharp end' of the system (Reason, 1990)" and introduces the blunt end "to continue Reason's analogy" [S:41]. Reason's use precedes theirs and they say so, so `extended` with `primary_author: james-reason` holds. The inclusion Council's chronology worry came from [S:21] citing only Reason 1997.
- **Antecedent search for How Complex Systems Fail** recorded at [S:42]: no earlier propositional list found; Perrow (1984) is the nearest predecessor on complex-system accidents and the text does not cite him; latent failures, sharp end and hindsight bias are vocabulary it uses without claiming. `original` covers the list as a text only.
- **Proposition headings** for the ones the page paraphrases, at [S:43].
- **Distancing through differencing** defined from Cook and Woods's own sentence, quoted in Fred Hebert's reading notes [S:44]. Still no outside use checked; deep tier.
- **Not researched, left open:** whether Dekker credits Cook, Woods and Miller for his "second story" (the page does not lean on it); whether Fred Hebert counts as a software practitioner's use of going solid (the page does not claim one); Fischhoff's priority on hindsight bias (the page credits the term to nobody and to Cook nowhere).
