# Kelly Shortridge: research record (stage 1)

Checked 2026-09-28. Candidate issue #69. The ledger is `facts.md`; `[S:n]` below points there.

## Verdict on the uptake check: passes

Two frames are hers, more than two years old, and used by name by practitioners who are not her. That clears the Saxe bar. The rest of the corpus is either co-authored, borrowed and renamed, or too thin on outside use to carry a foreground slot.

| Frame | First date found | Outside use | Attribution this research supports |
|---|---|---|---|
| Security Obstructionism (SecObs) | 2022-01-12 [S:20] | Barnes Tech 2022-02-20 [S:33]; Johansen 2023-09-22, "coined by Kelly Shortridge" [S:32]; Kolide, undated [S:34] | `original`. No antecedent found. "Department of No" is an older phrase for the same complaint, but nobody named the category before her as far as this search reached. |
| Ice Cream Cone Hierarchy of Security Solutions | Book, March 2023 [S:8], [S:19]; stated in full 2024-01-04 [S:17] | Spaceraccoon 2025-04-19, organises a whole essay on it [S:35] | `extended`. The ordering is the system safety design order of precedence (MIL-STD-882E) [S:29], also the NIOSH hierarchy of controls [S:30]. Her contribution is carrying it into security and the name. Her own posts credit no origin [S:17], [S:19]. |
| Security chaos engineering | Rinehart's ChaoSlingr at UnitedHealth Group, year unconfirmed [S:26]; the joint report 2020 [S:7] | Widespread: Grosch 2023 [S:37], Chaffee 2023 [S:36], InfoQ 2019 [S:24] | `co-authored` with Aaron Rinehart, `derived_from` chaos engineering [S:27]. Not hers alone, and on the evidence Rinehart was first. |
| Resilience in security as robustness, adaptability, transformability | Keynote 2017, posted 2018-08-01 [S:14]; 2020 [S:15] | None found by name | Carried from Walker, Holling et al. (2004), which she cites [S:15]. Deep tier at most. |
| FOMOsec (paired with YOLOsec) | 2020-09-22 [S:21] | Only reposts and newsletter mentions found; none ledgered | FOMOsec is hers; YOLOsec was an existing hashtag by her own opening line [S:21]. Too little outside use for the foreground. |
| Effort Investment Portfolio | Book, 2023 [S:18] | None found | Hers. Deep tier. |
| SUX Rule | 2023-10-10 [S:22] | None found | A rename of Chromium's Rule of Two, by her own account [S:22]. Not a frame of hers; at most a deep-tier `extended`. |
| Security decision trees / Deciduous | Black Hat 2017 talk; tool 2021 with Ryan Petrich [S:25] | Tool users exist; no named practitioner essay found | Built on Schneier's attack trees (1999) [S:31]. The tool is co-built with Petrich. |
| Sludge for defenders | arXiv 2022 [S:11] | Not checked | `co-authored`, Dykstra first author, borrowing Thaler and Sunstein's "sludge". |
| D.I.E. triad | Presented by her and Forsgren, 2019 [S:23], [S:24] | Widespread | **Not hers.** Sounil Yu's [S:28]. Must not appear as her frame. |

So the uptake check passes on SecObs and the Ice Cream Cone, and security chaos engineering has the broadest uptake but is shared with Rinehart. The recommendation is proceed.

## The live claims the roster already makes, reconciled

`bun scripts/inbound-claims.ts kelly-shortridge`, run first, printed no edges, no frame credits and no prose mentions, and called her an isolated node. **That output is wrong.** A plain grep of `src/` finds one live published claim the script does not scan:

1. **Erik Hollnagel page, `further_in.if_you_want_breadth`:** "Kelly Shortridge and Aaron Rinehart's *Security Chaos Engineering* (2023) carries chaos engineering and resilience engineering into software security, with attackers among the adverse events it prepares for." [S:39]
   - **Byline: holds.** The 2023 cover byline names both, Shortridge first [S:8]. The shared possessive is the cover's own framing. Her book page describes the division of work differently, as her book with his case studies [S:9]. The Hollnagel line does not need changing, but the Shortridge page should not describe the 2023 book as an equal partnership, and it should never collapse the 2020 report [S:7] and the 2023 book [S:8] into one work. They are separate books with the byline order reversed.
   - **Attackers as adverse events: holds**, on the Hollnagel ledger's [S:52] and [S:54].
   - **"Resilience engineering": holds loosely, with a caveat the Shortridge page should carry.** Her book uses resilience-engineering vocabulary (safety boundaries, work-as-imagined [S:16]; Hollnagel ledger [S:31]). But her own account of where her resilience thinking came from is ecology: Holling (1973) and Walker, Holling et al. (2004) [S:14], [S:15]. None of her essays checked here cites Hollnagel, Woods or Dekker. Whether the 2023 book cites them is unknown, because the book text was not readable (see open questions).

**Tooling gap, for the merge request and `calibration.md`:** `scripts/inbound-claims.ts` scans `thesis`, `working_line`, `reading`, `extension`, `tagline`, a field called `take` (the schema's field is `thirty_second_take`, so this entry matches nothing), `still_load_bearing_despite`, limits, frame glosses and edge labels. It does not scan `further_in`, `background`, `why_they_matter_as_a_thinker`, `thirty_second_take`, `body_of_work` notes, `live_edge` or `inclusion_rationale`. It reported Shortridge as an isolated node while the Hollnagel page names her. Any candidate the roster mentions only in reading paths or backgrounds will be reported as unmentioned.

## Corrections to the candidate issue

- **"That Shortridge co-wrote *Security Chaos Engineering* (O'Reilly) with Aaron Rinehart, and the edition and date."** Two different works share the title. The 2020 O'Reilly report is Rinehart first, Shortridge second, 90 pages [S:7]. The 2023 book, subtitled *Sustaining Resilience in Software and Systems*, is Shortridge first, Rinehart second, 430 pages, published 2023-03-30 [S:8]. Her own page credits the 2023 book to her as author, with "case studies collected by Aaron Rinehart" [S:9]; Fastly calls her "lead author" [S:2]. The issue treats them as one co-written book.
- **"Which terms, if any, are Shortridge's own rather than borrowed from Woods, Hollnagel or Dekker."** The premise is off. Her resilience lineage, by her own citations, runs through ecology (Holling, Walker) rather than safety science [S:14], [S:15]. Her own terms, SecObs [S:20], FOMOsec [S:21] and the Effort Investment Portfolio [S:18], come from economics and behavioural science, not from Woods, Hollnagel or Dekker. What she did borrow came from elsewhere: the Ice Cream Cone ordering from system safety precedence [S:29], the SUX Rule from Chromium [S:22], decision trees from Schneier's attack trees [S:31], D.I.E. from Sounil Yu [S:28], and security chaos engineering from Rinehart and Netflix-era chaos engineering [S:26], [S:27].
- **"Whether security practitioners use that vocabulary and credit Shortridge for it."** Yes, for SecObs (three named practitioners crediting her [S:32]–[S:34]) and for the Ice Cream Cone [S:35]. For security chaos engineering, practitioners credit the book, with both names on it [S:36], [S:37].
- **"Should Shortridge and Rinehart be one page or two?"** On this research, one page for Shortridge, with Rinehart as co-originator on security chaos engineering. Her solo corpus runs from 2015 to 2025 [S:13] and carries every frame with independent uptake. Rinehart's case would rest on security chaos engineering alone, which he shares with her. He was not researched beyond [S:26].
- **"Does the page argue something the Woods, Dekker and Hollnagel pages cannot?"** Probably yes, and the difference is the adversary. Those three write about accidents; she writes about attackers who adapt, and she argues in economic terms: defender ROI [S:12], attacker cost and friction [S:11], action bias in incident response [S:10], and security teams that obstruct for status [S:20]. That is a question for the inclusion Council, not a finding, but the page has material to answer it with.

## Career

From primary bios, which agree on the shape and give few dates.

- B.A. in economics, Vassar College [S:1]. No graduate degree found.
- Investment banking analyst at Teneo, covering data security and analytics [S:4].
- Co-founder of IperLane, a security startup; "exit to CrowdStrike" [S:1], [S:6]. One aggregator gives her role as COO; not ledgered.
- Product roles at BAE Systems Applied Intelligence and SecurityScorecard [S:4]; product manager at SecurityScorecard in 2017 [S:5].
- Vice president of product strategy at Capsule8, by 2019 [S:4], [S:24].
- Fastly from 2021 [S:3]: Senior Principal, Product Technology, in 2021 [S:6]; Office of the CTO; led the security business [S:1]; Chief Product Officer, announced 2025-12-08 [S:3], [S:1].
- ACM Queue editorial board [S:2].
- Years for Teneo, IperLane, BAE and SecurityScorecard were found only on aggregator pages. The page should give the sequence without years before 2019.

## Books and major papers (verified)

| Year | Title | Publisher / venue | Co-authors | Ledger |
|---|---|---|---|---|
| 2020 | Security Chaos Engineering (report) | O'Reilly | Aaron Rinehart, first author | [S:7] |
| 2022 | Opportunity Cost of Action Bias in Cybersecurity Incident Response | HFES Annual Meeting | Dykstra (first), Met, Hough | [S:10] |
| 2022 | From Lemons to Peaches: Improving Security ROI through Security Chaos Engineering | IEEE SecDev | none | [S:12] |
| 2022 (preprint) | Sludge for Good: Slowing and Imposing Costs on Cyber Attackers | arXiv | Dykstra (first), Met, Hough | [S:11] |
| 2023 | Security Chaos Engineering: Sustaining Resilience in Software and Systems | O'Reilly | Aaron Rinehart, second author; case studies per her page | [S:8], [S:9] |

A secondary source says "Sludge for Good" was later presented at HICSS in January 2025. Not ledgered.

## Antecedents checked before calling anything original

- **Security chaos engineering:** Rinehart's ChaoSlingr at UnitedHealth Group is the earliest instance found [S:26]; chaos engineering itself is older [S:27]. Not `original`.
- **Ice Cream Cone:** matches MIL-STD-882E precedence [S:29] and the NIOSH hierarchy [S:30]. The ice cream cone shape inverts the familiar inverted pyramid, most effective on top, which is the drawing the hierarchy already had. `extended`, with the safety precedence as `derived_from`.
- **SUX Rule:** Chromium's Rule of Two, credited by her [S:22].
- **Decision trees:** Schneier's attack trees, 1999 [S:31].
- **Resilience triad:** Walker, Holling, Carpenter and Kinzig 2004, credited by her [S:15].
- **D.I.E.:** Sounil Yu [S:28]. She and Forsgren presented it at Black Hat 2019 [S:23].
- **SecObs:** no earlier naming of the category found. `original`, with the search on record.
- **Talk openings:** "The Red Pill of Resilience" opens on an absence of first principles, not on a credited premise [S:14]. "On YOLOsec and FOMOsec" opens by conceding that #yolosec was already being called out [S:21], which is the credit that splits the pair. "The SUX Rule" opens by crediting Chromium [S:22].

## Critics

**No critic clears all three tests.** Recorded at [S:38].

- Mac Chaffee's review [S:36]: durable, names her, but endorses; its one complaint ("more aspirational than practical") is a reservation rather than an argument against her. Fails test 3.
- Johansen [S:32], Barnes [S:33], Kolide [S:34], Spaceraccoon [S:35]: all use her frames approvingly. They are uptake, not criticism.
- Rebuttals of "Cybersecurity Isn't Special" and "Sun Tzu wouldn't like the cybersecurity industry": none found beyond a Hacker News thread, which is not a durable artifact.

The page should ship with no `critiques` edge unless the Council's ten-minute search turns one up and it passes all three tests with ledger lines. The limits will have to come from the site's own reading, for example the "aspirational" reservation [S:36] and the gap between the resilience vocabulary and its safety-science sources.

## Roster neighbours worth noting for stage 4

- **Nicole Forsgren** (on the site): co-presented "Controlled Chaos" with her at Black Hat 2019 [S:23], and is thanked on "On YOLOsec and FOMOsec" [S:21]. A real, sourced relationship. Forsgren's page has a ledger, per the calibration log.
- **Camille Fournier** (on the site): thanked on the YOLOsec post [S:21]. Too thin for an edge.
- **Erik Hollnagel** (on the site): already names her in `further_in` [S:39]. A `parallel` edge is defensible; `extends` is not, on the evidence that she credits ecology rather than him.
- **David Woods, Sidney Dekker, John Allspaw** (on the site): no citation of them by her was found. `parallel` only, if at all.
- **Aaron Rinehart, Sounil Yu, Josiah Dykstra, Ryan Petrich**: off-site collaborators and sources.

## Open questions

- Does the 2023 book cite Woods, Hollnagel, Rasmussen, Cook or Dekker, and does chapter 7 credit a source for the Ice Cream Cone ordering? O'Reilly returned 403 and Google Books search-inside returned no snippets. This decides whether "resilience engineering" on the Hollnagel page and any `parallel` edge to Woods is well grounded, and whether `extended` on the Ice Cream Cone should name MIL-STD-882 or something she cites.
- The year Rinehart first used "security chaos engineering" and released ChaoSlingr. Search results say UnitedHealth Group; no primary source with a date was reached.
- Whether the 2019 "Controlled Chaos" slides credit Sounil Yu for D.I.E.
- Countermeasure 2017 versus Rochester Security Summit 2017 as the venue of the resilience keynote: her post's slides link is named "Red-Pill-of-Resilience-Shortridge-Countermeasure-2017.pdf" [S:14], though the post text itself does not name the venue (audit 2026-09-28); a search summary said Rochester. The page should follow the slides filename and say no more than "a 2017 keynote" unless a conference programme confirms it.

## Added at drafting, 2026-09-28 (ledger [S:40] to [S:52])

Read from the primary documents while drafting. Two findings change readings the inclusion Council worked from, and both are called out for the merge request.

- **She claims #yolosec.** "On YOLOsec and FOMOsec" begins "Possibly my finest contribution to the infosec industry is introducing the concept of #yolosec, first discussed when I introduced decision trees as a threat modelling device in my Black Hat talk back in 2017" [S:45]. The earlier reading of the post's third sentence as evidence that YOLOsec was pre-existing community usage is withdrawn on [S:21]. The claim itself is hers and is not independently verified: the 2017 deck's text layer does not contain the string [S:46]. The page attributes it to her ("which her post says she introduced") and files no YOLOsec frame.
- **Black Hat 2017 is now ledgered.** "Big Game Theory Hunting" (Black Hat USA 2017) has a "Decision Tree Modelling" section quoting Dino Dai Zovi's "Attacker Math" [S:46]. The Council's UNVERIFIED flag on dating decision trees before 2021 is closed. Schneier's attack trees [S:31] remain the ledger's own lineage inference; she cites Dai Zovi, and the page asserts neither.
- **Her corpus does cite safety science.** The SecObs essay cites Rasmussen (1997) and Connelly, Allen, Hatfield, Palma-Oliveira, Woods and Linkov (2017), "Features of resilience" [S:40]. The claim that she cites none of Hollnagel, Woods or Dekker holds for the resilience essays checked at stage 1 and fails for this one. The page keeps her resilience lineage as ecology only where she states it (the 2017 keynote and 2020 primer) and keeps every edge to that cluster `parallel`.
- **ChaoSlingr's date, from her own paper.** "From Lemons to Peaches" cites "Rinehart, A., et al. 2017. ChaoSlingr" [S:49]; the Optum repository README calls it "a Security Chaos Engineering Tool" and lists Rinehart first among its original contributors [S:48]. Her 2017 keynote separately proposed failure injection in the manner of Chaos Monkey as a security test [S:47]. So the page states both 2017 facts and ranks neither; `primary_author: aaron-rinehart` is the Council's filing choice, supported by the tool and the report byline.
- **The book's division of labour, in her words.** Chapter 9 is "the only chapter I didn't write on my own"; the book "has like nine million citations, so in no way do I think I am solely responsible for software resilience being a thing" [S:50].
- **The 2004 triad differs from hers.** Walker, Holling, Carpenter and Kinzig name resilience, adaptability and transformability [S:52]; her 2020 primer makes resilience the whole and names robustness first [S:51]. That supports `extended`.
- **"From Lemons to Peaches" measures nothing of its own.** Two pages, three sections, seven references, no results section [S:49]. It cites the 2019 State of DevOps report for deploy-on-demand correlating with less remediation time.
- **Antecedent searches** for the three `original` frames are at [S:42] (SecObs, with a working positive control), [S:43] (FOMOsec, working control) and [S:44] (Effort Investment Portfolio, no control available; "effort investment" is an older psychology term).
- Not ledgered and not on the page: an Akerlof allusion in "Lemons to Peaches" (the paper does not cite him); any Fastly product mapping to her frames; Torkura et al. (2019), an outside paper using "security chaos engineering" before the 2020 report (OpenAlex, not needed for any field).
