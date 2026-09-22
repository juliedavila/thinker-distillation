# Nicole Forsgren: fact ledger

The machine-checkable half of the research record. `scripts/fact-ledger.ts` reads this file. One
line per verified fact:

    - [S:n] claim | url | date checked

Every factual field on the page cites these IDs from `page-claims.md`. A claim with no line here
cannot reach the page, whoever proposed it, including a Council seat.

## Why this file did not exist until 2026-09-20, and what the dates mean

This page shipped on 2026-05-27 without a ledger. `_working/nicole-forsgren/` held only
`grounding-pack.md` and `reading-claims.md`, which cover the Editorial Reading and nothing else, so
no factual field on this page had ever been traced to a source. The 2026-09-20 recheck found that
out while checking two volatile fields, and the ledger below was built from scratch in that pass.

That history makes the two date columns mean something specific here, and the distinction is not
cosmetic. `checked` is when a drafter took the claim from the source. `re-verified` is when someone
went back and confirmed a claim the page had already published. A ledger assembled after
publication searches for a URL that fits a claim already in print, which is confirmation-seeking by
construction, and stamping today's date on a months-old assertion would hide that.

So two conventions, applied line by line:

- `| 2026-05-27 | re-verified 2026-09-20` means the claim was on the page as shipped and this pass
  re-opened its source and read it against the claim. **2026-05-27 is a reconstruction**, not an
  observed intake date: it is the page's own `last_updated` and `live_edge.last_observed`, which is
  the best available record of when the drafter worked. No line in this file rewrites an existing
  `checked` date, because none existed.
- `| 2026-09-20` alone means the claim enters the page, or enters this ledger as a negative
  finding, for the first time in this pass. Those are sourced at intake, today, and carry no
  `re-verified` marker, because there was nothing to re-verify.

Where a source disagrees with what the page said, the line says so and the page was changed.

## Current role, and the conflict in the sources

- [S:1] Lenny's Podcast, "How to measure AI developer productivity in 2025" (2025-10-19), introduces her as "Senior Director of Developer Intelligence at Google" and notes the forthcoming book *Frictionless*. This is the openable source behind the page's Google claim. | https://www.lennysnewsletter.com/p/how-to-measure-ai-developer-productivity | 2026-09-20
- [S:2] Her LinkedIn profile headline reads "Sr. Director, GM, Developer Intelligence" with Google as current company, reported by the 2026-09-20 survey. This pass could not open LinkedIn directly, so the claim rests on the survey's read plus [S:1] and [S:3], and the page does not rest on LinkedIn alone. | https://www.linkedin.com/in/nicolefv/ | 2026-09-20
- [S:3] ACM ByteCast episode 81 describes her as "Senior Director of Developer Intelligence at Google" and as a co-founder of DORA. The page returns HTTP 403 to any automated fetch, so the wording here comes from the search index rather than from the page itself; it is recorded as corroboration for [S:1], not as a standalone source. | https://learning.acm.org/bytecast/ep81-nicole-forsgren | 2026-09-20
- [S:4] **The conflict.** Her own site, which is this page's `canonical_url`, still reads "She's currently a Partner at Microsoft, where she leads the Developer Experience Lab and works with the Office of the CTO, using AI to revolutionize how developers work." The same site lists *Frictionless* among her books, so it has been updated since 2025 without the employment line being changed. | https://nicolefv.com | 2026-09-20
- [S:5] The QCon San Francisco speaker page carries "Partner, Applied Research & Strategy, OCTO @Microsoft". A conference speaker blurb is supplied by the speaker and is a lagging surface, so it corroborates [S:4] rather than settling anything against [S:1]. | https://qconsf.com/speakers/nicoleforsgren | 2026-09-20
- [S:6] The `nicolefv.com/about` page gives no current employer at all: "Dr. Nicole Forsgren is considered one of the most prominent and important minds in DevOps and developer productivity. She has led efforts to improve DevEx and AI-native developer productivity at some of the largest companies in the world." Her own site is therefore internally inconsistent on the question, which is why the page hedges rather than asserting. | https://nicolefv.com/about | 2026-09-20
- [S:7] **A source that has gone.** The Microsoft Research staff profile that anchored the Microsoft Research employment claim no longer resolves to her page. The URL returns HTTP 200 but serves the general researcher index, an alphabetical listing beginning at Ashkan Aazami with no Forsgren entry. | https://www.microsoft.com/en-us/research/people/niforsgr/ | 2026-09-20

**Adjudication, 2026-09-20.** The page said she "is now Partner Researcher" at Microsoft Research and
was "currently driving the DevEx work." Four independent surfaces place her at Google
([S:1], [S:2], [S:3], and the disappearance of the Microsoft Research profile at [S:7]); two
self-supplied surfaces still say Microsoft ([S:4], [S:5]). Self-maintained bios and conference
blurbs lag; a podcast introduction recorded live and a current-employer field do not. The page now
states the Google role, keeps Microsoft as the prior step, and names the disagreement in the
`background` field itself so a reader is not asked to trust the resolution silently.

## Education and early career

- [S:8] "Nicole earned her PhD in Management Information Systems and Masters in Accounting from the University of Arizona." **This corrects the page**, which said "Industrial engineer by training (PhD)." No source found in this pass supports industrial engineering. | https://nicolefv.com/about | 2026-09-20
- [S:9] Microsoft Research Podcast, "What's Your Story: Nicole Forsgren" (2024-02-15). IBM hired her as a software engineer on large-scale enterprise storage systems, working in C++, C, Java and firmware; she went on to manage systems and holds a hardware patent relating to cold-boot attacks. **This corrects the page**, which described "an early career inside operations research at IBM." | https://www.microsoft.com/en-us/research/podcast/whats-your-story-nicole-forsgren/ | 2026-09-20
- [S:10] The same episode gives her Microsoft Research title as Partner Research Manager as of February 2024, which anchors the Microsoft step in the page's trajectory as historical fact whatever the current role turns out to be. | https://www.microsoft.com/en-us/research/podcast/whats-your-story-nicole-forsgren/ | 2026-09-20
- [S:11] Director of Organizational Performance and Analytics at Chef Software, 2014 to 2015; VP of Research & Strategy at GitHub from 2020; assistant or visiting professor at Boise State, Pepperdine and Utah State. | https://en.wikipedia.org/wiki/Nicole_Forsgren | 2026-05-27 | re-verified 2026-09-20
- [S:12] DORA LLC was co-founded by Forsgren, Humble and Kim, with Forsgren as CEO. The same record dates the company to 2015 rather than 2014, which is why the page no longer puts a founding year on that clause; the 2014 date it used to carry belongs to the research programme, not the company. | https://en.wikipedia.org/wiki/Nicole_Forsgren | 2026-05-27 | re-verified 2026-09-20

## DORA, the four keys, and the acquisition

- [S:13] Google's acquisition of DORA was announced 2018-12-20. The announcement names Forsgren, Humble and Kim as the founders and quotes "Dr. Nicole Forsgren, CEO and Chief Scientist of DORA". | https://dora.dev/news/dora-joins-google-cloud/ | 2026-05-27 | re-verified 2026-09-20
- [S:14] DORA's own metrics guide states that "speed and stability are not tradeoffs" and that "Top performers do well across all five metrics, and low performers do poorly," which is the elite-versus-low clustering finding and the throughput-stability non-tradeoff, both still stated by the programme in its own voice. | https://dora.dev/guides/dora-metrics/ | 2026-05-27 | re-verified 2026-09-20
- [S:15] **The four keys are now five.** The same guide describes the evolution "from the original four keys to the current five-metric model" and names change lead time, deployment frequency, failed deployment recovery time, change fail rate, and deployment rework rate. Time to restore service has been renamed failed deployment recovery time and deployment rework rate is new. The page presents the four keys as the frame they were, which remains accurate as history; whether `named_frames[0]` and `named_frames[5]` should carry the five-metric update is an editorial decision this recheck raises and does not make. | https://dora.dev/guides/dora-metrics/ | 2026-09-20
- [S:16] **A source that has gone.** `https://services.google.com/fh/files/misc/state-of-devops-2023.pdf`, the `source_link` on both `named_frames[0]` and `named_frames[4]` as shipped, returns HTTP 404. Both links were repointed to the DORA metrics guide at [S:14]. | https://dora.dev/research/2023/dora-report/ | 2026-09-20
- [S:17] The DORA team began publishing State of DevOps Reports in 2013, initially conducting the research for Puppet before becoming independent; the 2024 report surveyed more than 39,000 professionals. This supports `active_years: 2014–present` and `body_of_work[3]` as a continuing annual series, and it is the reason the page dates the research programme rather than the company. | https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment | 2026-05-27 | re-verified 2026-09-20

## Published work

- [S:18] *Accelerate: The Science of Lean Software and DevOps*, by Nicole Forsgren, Jez Humble and Gene Kim, IT Revolution, published 2018-03-27. Winner of the Shingo Publication Award. Built on four years of research into what separates high-performing from low-performing technology organizations. | https://itrevolution.com/product/accelerate/ | 2026-05-27 | re-verified 2026-09-20
- [S:19] "The SPACE of Developer Productivity", *Queue* (ACM), published 2021-02-28, DOI 10.1145/3454122.3454124. Authors in order: Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, Jenna Butler. Forsgren is first author, and all five co-originators listed on the page are confirmed. | https://api.crossref.org/works/10.1145/3454122.3454124 | 2026-05-27 | re-verified 2026-09-20
- [S:20] "DevEx: What Actually Drives Productivity", *Queue* (ACM), published 2023-04-30, DOI 10.1145/3595878. Authors in order: **Abi Noda, Margaret-Anne Storey, Nicole Forsgren, Michaela Greiler**. **This corrects the page** twice: Noda is first author, not Forsgren, and Michaela Greiler was missing from `named_frames[2].co_originators` and from the editorial note on `body_of_work[2]`. Greiler was added and the note now names the full list in order. | https://api.crossref.org/works/10.1145/3595878 | 2026-09-20
- [S:21] The same paper also ran in *Communications of the ACM* on 2023-10-20 as "DevEX: What Actually Drives Productivity?", DOI 10.1145/3610285. The page's `inclusion_rationale` calls it "DevEx (CACM 2023)" while `body_of_work[2]` links the *Queue* version; both are correct and neither was changed. Recorded so a later pass does not "fix" one into the other. | https://api.crossref.org/works/10.1145/3610285 | 2026-09-20
- [S:22] "DevEx in Action", *Queue* 2023-12-31 and *Communications of the ACM* 2024-05-23, DOI 10.1145/3639443. Authors in order: Nicole Forsgren, Eirini Kalliamvakou, Abi Noda, Michaela Greiler, Brian Houck, Margaret-Anne Storey. The live-edge entry credited Abi Noda alone and now carries the full list. | https://api.crossref.org/works/10.1145/3639443 | 2026-09-20
- [S:23] *Frictionless: 7 Steps to Remove Barriers, Unlock Value, and Outpace Your Competition in the AI Era*, by Abi Noda and Nicole Forsgren, announced 2025-11-19 as "the first end-to-end system for understanding and improving developer experience at scale," with more than 100 pages of workbooks. It predates the page's 2026-05-27 ship date, so it was an omission at ship rather than decay, and it has been added to `live_edge`. | https://getdx.com/news/frictionless/ | 2026-09-20
- [S:24] She serves on the editorial board of ACM Queue, and her own site lists *Accelerate*, *The DevOps Handbook* (second edition) and *Frictionless* as her books. | https://nicolefv.com | 2026-09-20

## Neighbours

- [S:25] **Dan North does not critique Forsgren; he defends her.** "McKinsey Developer Productivity Review" (2023-10-04) has a section headed "DORA and SPACE have authors!" and says "you are clearly fans of the DORA *Accelerate* research and the later SPACE model, as am I, but you fail to cite Dr. Nicole Forsgren, the lead researcher on both initiatives"; that "Dr. Forsgren applied significant academic rigour to the original *State of DevOps Report* surveys run by Puppet Labs"; and that the research "has been analysed, critiqued, and studied by industry analysts, and has stood up to scrutiny." The page carried him as `edge_type: critiques` with a label about lead time incentivising batch-shrinking, which no source in this pass supports. The edge was retyped to `parallel` and relabelled from the artifact. | https://dannorth.net/blog/mckinsey-review/ | 2026-09-20
- [S:26] **Kent Beck's durable artifact treats DORA as the good example.** "Measuring developer productivity? A response to McKinsey", by Gergely Orosz and Kent Beck (2023-08-29), names the DORA framework, places the four DORA metrics on the outcome-and-impact side of its own diagram, and argues against effort and output metrics because "measuring leads to behavior change – behaviour change including coming up with creative ways to improve those measurement scores even at the expense of results that everyone agrees matter." It never names Forsgren or *Accelerate*. The page carried him as `edge_type: critiques`; the edge was retyped to `parallel` and relabelled. Kent Beck's own page on this site already types the relation as `parallel` and already says the piece "never names Forsgren," so the two pages had been contradicting each other since this page shipped. | https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity | 2026-09-20
- [S:27] **No durable artifact found in which DHH critiques Forsgren, DORA or *Accelerate*.** Three searches across his own sites and the wider record returned nothing meeting SCHEMA section 4.11's bar of an essay, book chapter or talk transcript by the critic. The page carried him as a `critiques` neighbour with a label about metrics inviting managerial distance. The edge was removed. If someone can produce the artifact, the edge comes back with a line here. | https://dhh.dk/ | 2026-09-20
- [S:28] Will Larson, "Accelerate's definition of developer productivity" (2018-06-27), names Forsgren, Humble and Kim and calls the definition "one of the best definitions of developer productivity I've encountered so far!" | https://lethain.com/accelerate-developer-productivity/ | 2026-05-27 | re-verified 2026-09-20
- [S:29] Will Larson, "Measuring developer experience, benchmarks, and providing a theory of improvement" (2024-12-08), groups DORA, SPACE and DX Core 4 as "all great frameworks" and names the theory-of-improvement gap: "Output metrics are very effective at measuring if something has improved, but very bad at focusing attention towards improving that metric." This is the source behind the `will-larson` edge label, and it matches the line already carried on Larson's own page. | https://lethain.com/measuring-developer-experience-benchmarks-theory-of-improvement/ | 2026-05-27 | re-verified 2026-09-20
- [S:30] **The Komoroske antecedent edge is the site's reading, not a citation in the record.** The Coordination Headwind essay is dated 2018 on this site's own Komoroske page, and the DORA research programme began in 2013 to 2014 ([S:17]), so the essay does not precede the work it is said to be an antecedent of. No source found in this pass shows Forsgren citing Komoroske. The edge is mirrored from Komoroske's page, which types the same relation as `extends` in the other direction, so changing it here alone would desynchronise two pages. Left as shipped, and flagged for a decision that spans both pages. | https://komoroske.com | 2026-09-20
- [S:31] **The Brooks antecedent edge rests on chronology plus the site's reading.** Brooks's Law appears in *The Mythical Man-Month* (1975), so it genuinely predates the DORA research by four decades and the ordering is sound. This pass found no source showing *Accelerate* citing Brooks, so the claim that Forsgren "empirically vindicated Brooks's structural claim" is the Distillery's argument rather than a relationship stated in the record. Left as shipped, and flagged alongside [S:30]. | https://en.wikipedia.org/wiki/The_Mythical_Man-Month | 2026-09-20

## Checked and kept off the page

- [S:32] **The William & Mary professorship does not go on the page.** A search-engine summary asserts she "has been appointed the Hays T. Watkins Professor of Business at William & Mary, a permanent named professorship beginning in the 2026–27 academic year," and the summary reappeared in a second, independently worded search during this pass. The chair is real, endowed in 1988 by the Watkins family. No William & Mary page, press release or other primary source could be found naming her, and the School of Business faculty listing shows the Hays T. Watkins chair held by Monica Chiarini Tremblay. Search-engine summaries are third-party summaries and do not count as sources here. Treat as unverified. | https://mason.wm.edu/faculty/endowed/index.php | 2026-09-20
