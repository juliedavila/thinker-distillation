# Erik Hollnagel: research record (stage 1)

Checked 2026-09-26. Candidate issue #68. The ledger is `facts.md`; `[S:n]` below points there.

## Verdict on the uptake check: passes

Every candidate frame is more than two years old and has use by people other than Hollnagel.

| Frame | First date found | Outside use |
|---|---|---|
| Safety-I / Safety-II | 2012 in his lecture slides [S:39]; in print 2013: "A tale of two safeties" [S:11] and the EUROCONTROL white paper [S:12]; book 2014 [S:13] | Hochstein applies it to software availability, 2026 [S:28]; three critics argue against it by name, 2020-2022 [S:32]-[S:35] |
| Efficiency-thoroughness trade-off (ETTO) | Book 2009 [S:18]; a review says the idea was already in a 2004 book [S:37] (PLAUSIBLE, not read); by 2012 his slides list ETTO heuristics [S:39] | Allspaw's 2015 Lund thesis frames outage heuristics as ETTO, as recorded in Colyer's summary [S:29] (the thesis itself not read) |
| Joint cognitive system / cognitive systems engineering | 1983 paper with Woods [S:8]; 2005 book [S:9] | Already on the site as a Woods frame |
| FRAM | 2004 and 2012 [S:38]; the 2012 book [S:20] | Safety and healthcare practice; no software use found |
| Resilience engineering (co-founding) | Söderköping symposium, October 2004 [S:5]; 2006 anthology with Woods and Leveson [S:6] | The whole of the Allspaw/Woods/Dekker neighbourhood |

The one frame the site already credits to him, work-as-imagined versus work-as-done, is not his (below). His page should rest on Safety-II and ETTO. Those two are the ones software practitioners use by name.

## The live claims the roster already makes, reconciled

`bun scripts/inbound-claims.ts erik-hollnagel`, run first:

1. **David Woods edge (parallel, primary):** "Co-author of *Joint Cognitive Systems* and resilience-engineering co-founder." Holds [S:5], [S:6], [S:9]. The second sentence, "Hollnagel's *Safety-I vs Safety-II* distinction puts into practice the insight Woods's graceful-extensibility frame names", has the chronology backwards. Safety-II is 2013 [S:11], [S:12]; the Woods page dates its four-concepts paper, which names graceful extensibility, to 2015. Safety-II came first, so it cannot put into practice a frame published after it. Nothing I found has either man describing the relation that way. Recommend narrowing the label to the shared lineage and the co-authorship.
2. **Sidney Dekker edge (parallel, secondary):** "Co-founder of resilience engineering with Woods." Holds [S:5], [S:6]. "*Safety-I vs Safety-II* is the closest theoretical parallel to Dekker's *Safety Differently*" is an editorial judgement that no source contradicts. Hollnagel cites Dekker's *Safety Differently* in his 2025 reply [S:34], and Cooper treats the two as one "New-View" [S:32]. Keep it as a `parallel`.
3. **John Allspaw frame credit:** work-as-imagined vs work-as-done "credits Erik Hollnagel as original in safety-science literature." **Does not hold.** Hollnagel himself says "the origin is ... in French psychology and ergonomics" and points to Leplat and Hoc (1983) [S:24]. Shorrock traces it to Ombredane and Faverge (1955) [S:25]. Hollnagel's own 2013 white paper uses the terms without claiming them [S:26]. Hollnagel also says Dekker mentioned the idea in his chapter of the 2006 anthology [S:24], so within resilience engineering Hollnagel was not even the only early user. What is defensible: Hollnagel popularised the English pair in resilience engineering and safety management (2013 white paper, 2015 chapter [S:27]). The Allspaw and Dekker pages should change `primary_author: erik-hollnagel` and the role "original in safety-science literature" to something like "popularised the English terms in resilience engineering". The French ergonomics tradition then goes in as an antecedent. The candidate issue asked whether this correction is in scope for this run. It has to be: once his page exists, the two pages would contradict it in the open.
4. **David Woods frame credit:** joint cognitive system, "co-authored", "credits Erik Hollnagel as co-author of *Joint Cognitive Systems* (2005)". Holds [S:9]. But the Woods page sets `primary_author: david-woods`. Hollnagel is first author on both the 1983 paper that started cognitive systems engineering [S:8] and the 2005 *Foundations* book [S:9]; Woods is first on the 2006 *Patterns* companion [S:10]. The page should not make Woods the primary author. Recommend co-equal, or reorder, in the same merge request.
5. **Sidney Dekker frame credit:** the same work-as-imagined credit as item 3. **Does not hold**, for the same reasons.
6. **Allspaw prose mention** (limit "Adaptive-capacity vocabulary stays inside the resilience tradition", and the inclusion rationale listing "Hollnagel, Woods, Cook"): holds. It is a claim about the tradition, not about him specifically.

## Corrections to the candidate issue

- "Known for ... founding resilience engineering with David Woods and others." Holds, but the named third editor is Nancy Leveson [S:6], who later became his sharpest critic [S:33], [S:34]. That is the most interesting fact the page can carry, and the issue did not have it.
- "He co-wrote *Joint Cognitive Systems* (2005) with Woods." Holds, with Hollnagel as first author [S:9], and the partnership goes back to 1983 [S:8]. The issue repeats the Woods page's framing, which puts Woods first.
- The issue suspected the work-as-imagined credit was one of popularising rather than originating. Confirmed, from Hollnagel's own mouth [S:24].
- "Whether software and security practitioners use his vocabulary directly, or only through Allspaw, Woods and Dekker." Answer: both. Allspaw used ETTO directly in 2015 [S:29]; Hochstein uses Safety-II by name and applies it to availability [S:28]; Hebert went to Hollnagel himself for the history of work-as-done [S:30]. Shortridge uses "work-as-imagined" without naming him [S:31], which is uptake of the vocabulary but not of the person.

## Career

Primary bios agree on the shape and disagree on some dates.

- Education: M.Sc. psychology, Copenhagen; Ph.D. psychology, Aarhus [S:1]. Born in Copenhagen [S:1], in 1941 per library authority [S:2].
- The long bio [S:1] runs: programmer in Copenhagen (1962-1968); Aarhus (1971-1978); Risø (1978-1982); OECD Halden, head of the Man-Machine Interaction division (1982-1985); Computer Resources International (1985-1993); Human Reliability Associates, UK (1993-1995); Halden again as principal advisor (1995-1999); Linköping, professor of human-machine interaction (1999-2006/2008); MINES ParisTech industrial safety chair (2006-2011); Region of Southern Denmark (2011-2017), with a professorship at the University of Southern Denmark [S:3].
- **Conflict:** one search-surfaced bio has him as lektor at Aarhus 1978-1982, at Risø 1982-1985 and at Halden 1985-1986. That contradicts [S:1] for everything before 1985. The 1982 Risø technical note behind the 1983 paper [S:8] fits either version. The page should say "Aarhus, then Risø and the OECD Halden Reactor Project in the 1970s and 1980s" and give no years there.
- Now: Scientific Director, Institute of Resilient Systems+, Seoul; professor emeritus in Sweden, France and Denmark [S:4].
- His own site, erikhollnagel.com, was serving other people's content to scripted fetches today [S:36]: a gambling page on /cv/ and a "Redbubble logo" page elsewhere. It may be compromised, or it may be cloaking bots. Either way, **do not link it** until a human checks it in a browser. FRAM's own site (functionalresonance.com) was fine.

## Books (verified)

| Year | Title | Publisher | Co-authors | Ledger |
|---|---|---|---|---|
| 1993 | Human Reliability Analysis: Context and Control | Academic Press | none | [S:22] |
| 1998 | Cognitive Reliability and Error Analysis Method (CREAM) | Elsevier | none | [S:21] |
| 2004 | Barriers and Accident Prevention | Ashgate | none | [S:19] |
| 2005 | Joint Cognitive Systems: Foundations of Cognitive Systems Engineering | CRC Press | David D. Woods (second author) | [S:9] |
| 2006 | Resilience Engineering: Concepts and Precepts | Ashgate | eds. with Woods and Leveson | [S:6] |
| 2009 | The ETTO Principle | Ashgate | none | [S:18] |
| 2012 | FRAM: The Functional Resonance Analysis Method | Ashgate | none | [S:20] |
| 2014 | Safety-I and Safety-II | Ashgate | none | [S:13] |
| 2017 or 2018 | Safety-II in Practice | Routledge | none | [S:15], year conflict |
| 2024 or 2026 | From Safety to Safely | Routledge | none | [S:17], year conflict |

Ashgate's list moved to CRC Press / Routledge, which is why the current publisher pages carry those names.

## Antecedents

- **Work-as-imagined / work-as-done:** French ergonomics, *travail prescrit* versus *travail réel*, Ombredane and Faverge 1955 [S:25]; task versus activity, Leplat and Hoc 1983 [S:24]. Not his. See reconciliation items 3 and 5.
- **Safety-I / Safety-II:** Hollnagel credits the rhetorical move of contrasting two views to Dougherty (1990) on first- and second-generation HRA, and to Cook, Woods and Miller (1998), "A Tale of Two Stories" [S:14]. The second is a Woods and Cook paper. The page should say so, since it ties Safety-II to the Woods lineage more firmly than the current Woods edge does. The content itself (safety as the presence of success, not the absence of failure) echoes Weick's "dynamic non-event" (1987), which Hochstein pairs with it [S:28]. Hollnagel does not credit Weick in the white paper; no ledger line claims he does. Mark the frame `original` only for the named Safety-I/Safety-II formulation, and carry Dougherty and Cook/Woods/Miller as acknowledged antecedents.
- **Hollnagel's own date conflict:** he writes that Safety-I and Safety-II were "first described (Hollnagel, 2014)" [S:14], but the 2013 paper and white paper exist [S:11], [S:12]. Use 2013.
- **ETTO:** a 2013 review asks whether it just renames Simon's satisficing [S:23]. A fair antecedent to name in a limit, not a critic edge: it is a blog review, and it grants the name some value.
- **Opening premises checked:** the 2013 white paper opens on IATA's 2012 safety record and credits resilience engineering to Hollnagel, Woods and Leveson (2006). Its WAI/WAD section credits Taylor (1911) for the popularity of the imagined view [S:26]. "The Folly of Safety-III" opens by crediting Dougherty and Cook/Woods/Miller [S:14].

## Critics (the three-part test)

| Candidate | Durable artifact | Names him | Argues against | Status |
|---|---|---|---|---|
| M. D. Cooper, "The Emperor has no clothes: A critique of Safety-II," *Safety Science* 152 (2022) | Yes, peer-reviewed [S:32] | Yes, "Hollnagel" 47 times in the text including references [S:32] | Yes: "untested propositions", no methods, no evidence [S:32] | **Passes.** Caveat: he folds Safety-II, HOP, Safety Differently and RE together, so the edge label should say the target is "New-View" with Safety-II at its head. |
| Nancy Leveson, "Safety III," MIT ESL white paper (2020) | Yes [S:33] | Yes: the abstract names "Prof. Erik Hollnagel" [S:33]; his reply confirms she engages him [S:34] | Yes: "flaws and inaccuracies in Prof. Hollnagel's arguments" [S:33], and his Safety-I "has very little or no resemblance to what is done today" [S:45] | **Passes.** Primary read through the Wayback copy (the MIT host refused connections). This is the strongest edge, and she is also a co-editor of the founding anthology with him [S:6]. |
| Terje Aven, *RESS* 217 (2022) | Yes [S:35] | Not read | Hollnagel says Aven "criticised Safety-II" [S:34] | **PLAUSIBLE, not fileable** until the article is read. |
| Safetymatters blog review of ETTO (2013) | Blog post | Yes | Partly | Not a critic edge. Antecedent evidence only [S:23]. |

Hollnagel's answer to all three by name, "The Folly of Safety-III" (2025), is a durable artifact of his own [S:34]. If the page carries the critique, it should carry the reply.

## What would his page argue that Woods and Dekker do not?

The Council should decide this; here is what the research gives it. Woods is the cognitive-systems and graceful-extensibility side and Dekker the just-culture and Safety Differently side. Hollnagel's distinct contributions are the Safety-I/Safety-II reframing (that the object of study is everyday success), ETTO as a named trade-off engineers can point to during an incident, and FRAM as a method. He is also the only one of the three with a live, named, published fight with a co-founder of the field (Leveson). The page could hold the thesis and the strongest case against it in one place, which neither neighbour does.

## Adjacent candidates surfaced (for stage 8)

Julie's relayed note names Kelly Shortridge, Aaron Rinehart and Casey Rosenthal as the resilience and chaos engineering people she values. None of them is this candidate. The evidence found here: Shortridge and Rinehart co-wrote *Security Chaos Engineering* (O'Reilly), and Shortridge's post uses the work-as-imagined vocabulary [S:31]. Rosenthal and Nora Jones wrote *Chaos Engineering: System Resiliency in Practice* (O'Reilly, 2020). None is on the ledger as a Hollnagel fact. File them as candidates in stage 8 rather than folding them into this page. Lorin Hochstein and Fred Hebert are the software practitioners who use Hollnagel most directly [S:28], [S:30]. Nancy Leveson is a candidate in her own right: STAMP/STPA, and she is the critic above.

## Open questions

- ~~Read Leveson's "Safety III" PDF.~~ Done through the Wayback copy; see [S:33] and [S:45].
- Read Aven 2022, or drop him.
- Check in a browser whether erikhollnagel.com is compromised [S:36].
- Resolve the pre-1985 career dates, the *Safety-II in Practice* year (2017 or 2018) and the *From Safety to Safely* year (2024 or 2026).
- Confirm from the 2004 *Barriers* text that ETTO and FRAM first appear there, or date both from 2009 and 2012.
- Search Shortridge and Rinehart's *Security Chaos Engineering* book text for Hollnagel by name. Only the blog post was checked.

## Reconciliation at stage 3 (2026-09-27)

The inclusion Council found this file had drifted from `facts.md`. Corrected above, in place:

- Leveson: was PLAUSIBLE here while [S:33] recorded a primary read of the Wayback copy. The primary read stands; the edge is fileable, and [S:45] adds the abstract's central charge.
- Cooper: this file said "45 citations"; the ledger count, rechecked against the extracted text, is 47 mentions of "Hollnagel" including references [S:32].
- Citation slips in the uptake table: FRAM's "2004 and 2012" is [S:38], not [S:20]; the 2004 ETTO review is [S:37], not [S:19]; the Allspaw ETTO use rests on Colyer's summary [S:29], not a read of the thesis.
- Safety-I/Safety-II date: Hollnagel's own 2012 lecture deck already uses the pair [S:39], so neither 2013 nor his own 2014 is the first use. The page says "in print from 2013" and names the 2012 slides.
- Weick's "dynamic non-event": no ledger line supports it as an antecedent, and Hollnagel does not credit Weick. Dropped from the page entirely.
- The resilience-engineering field is not filed as a frame on the page: it is a field, co-founded, and the frame form forces a single `primary_author` the Council said must not be him. The co-founding lives in `background`, `body_of_work` and the Woods edge.
