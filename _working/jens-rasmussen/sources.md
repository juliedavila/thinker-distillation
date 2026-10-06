# Jens Rasmussen: research record

Stage 1 of the add-thinker skill, candidate issue #74, researched 2026-10-05 in the sandbox
clone. Every claim here has a line in `facts.md`; `[S:n]` points at it. No WebSearch result in
this session said the search was not performed or named the search budget.

## The short version

Rasmussen passes the uptake check by a wide margin, and the issue's case needs four corrections
before a Council reads it. He died in 2018, not 2020. His word for the boundary model is
"migration", and "drift" is the later literature's word. Woods credits the general law behind the
Law of Stretched Systems to Rasmussen's 1986 book, not to the 1997 paper the Woods page names.
And the "intellectual grandfather" line on the Dekker page has no source anywhere I could find.

My read: **proceed.** Five frames, each between 27 and 47 years old, each in use by people other
than Rasmussen, three of them by software practitioners by name. No critic passes the three tests,
so the page ships with no `critiques` edge unless a later stage finds one.

## Uptake check (run first)

| Candidate frame | First date on the record | Outside use, by name | Passes |
|---|---|---|---|
| Migration toward the boundary of acceptable performance (others call it the "dynamic safety model") | 1997 canonical paper [S:8]; the paper cites his own 1993 and 1994 work for the claim [S:14]; Rankin et al. date the idea to his 1986 book [S:37] | Cook 2005 [S:34]; Dekker and Pruchnicki 2013 [S:38]; Leveson c.2016 [S:30]; Hochstein 2019, 2020, 2021 [S:15]-[S:17]; Shortridge 2022 [S:18] | yes |
| Skill, rule and knowledge levels (SRK) | 1979 Risø report, by Woods's account [S:21]; IEEE 1983 [S:20] | Reason's GEMS [S:23]; Woods's 2009 anniversary panel [S:21] | yes |
| Abstraction hierarchy | IEEE 1985 [S:24], bounded: earlier forms not searched | Leveson's specification work [S:30]; Hochstein 2022, applied to a deployment system [S:25] | yes |
| Stop rules in accident analysis | Phil. Trans. 1990 [S:26] [S:27] | Thai Wood's Resilience Roundup, written for SRE teams [S:29] | yes |
| AcciMap (co-authored with Svedung) | 1997 paper credits "Svedung and Rasmussen, 1997" [S:32]; Safety Science 2002 | Leveson compares CAST with it [S:30]; Waterson et al. review 26 studies, 2000 to 2015 [S:42] | yes |

Ecological interface design (Vicente and Rasmussen, 1992, Vicente first [S:33]) is a sixth
candidate, but it belongs to Vicente as lead author and to interface design rather than safety;
deep tier at most.

None of these is under two years old, so the Saxe stop does not apply.

## Biography, verified

- Born 11 May 1926 in Ribe, Denmark; died 5 February 2018 [S:1]. Sources disagree on age at
  death (91 against 92); the page should give dates only.
- M.Sc. in engineering, Technical University of Denmark, 1950 [S:2]. The field is reported as
  electronic, as "civil" (almost certainly the Danish title *civilingeniør*, a master's-level
  engineer) and as "electrical and control". Keep the page at "engineering".
- Risø from 1956; head of the Electronics Department 1962 to 1987; research professor at both DTU
  and Risø from 1981 [S:3]. **Caveat:** the NAE memorial was unreachable twice (DNS failure for
  www.nae.edu), so these dates rest on a search engine's rendering of that page plus Wikipedia.
  Read the memorial directly before the page prints a date from it.
- Honours, same caveat [S:4]: Danish Academy of Technical Sciences 1962; Human Factors Society
  Distinguished Foreign Colleague Award 1987; NAE international member (the summary's year, 2013,
  is unconfirmed). His NAE memorial is by William Rouse, Thomas Sheridan and Annelise Mark
  Pejtersen.
- Married to Annelise Mark Pejtersen [S:5], also a co-author of *Cognitive Systems Engineering*.
- His own account of the program's path: control and safety systems for process plants, then the
  human-machine interface and human error, then the people preparing operators' work, then
  management, then law [S:6]. This is the cleanest one-paragraph biography of the ideas, and it
  is his.

## Books and canonical papers, verified

- 1983, "Skills, rules, and knowledge; signals, signs, and symbols...", IEEE SMC [S:20].
- 1985, "The role of hierarchical knowledge representation...", IEEE SMC [S:24].
- 1986, *Information Processing and Human-Machine Interaction*, North-Holland [S:31].
- 1990, "Human error and the problem of causality in analysis of accidents", Phil. Trans. R. Soc.
  B [S:26].
- 1994, *Cognitive Systems Engineering*, Wiley, with Pejtersen and Goodstein [S:31].
- 1997, "Risk management in a dynamic society: a modelling problem", Safety Science 27(2-3):
  183-213 [S:8]. Sole author.
- 2000, *Proactive Risk Management in a Dynamic Society*, Swedish Rescue Services Agency, with
  Svedung [S:31].
- 2002, "Graphic representation of accident scenarios", Safety Science, Svedung first author [S:32].
- 2005, "Going solid", Quality and Safety in Health Care, Cook first author [S:34].

## Frames: what each says, and its antecedents

**Migration toward the boundary.** Work varies like "Brownian movements" inside a space bounded
by economic failure, unacceptable workload and acceptable performance; an effort gradient and a
cost gradient push it toward the safety boundary [S:10]. Defence in depth hides the drift, because
violating one defence "has no immediate, visible effect" [S:12]. The prescription is to make the
boundaries visible and let people learn to work near them, "not on control of errors" [S:13].
Antecedents the paper itself names: his own 1993 and 1994 papers, Wilde's risk homeostasis, which
he argues against in favour of boundary perception, and Engwall's 1986 "organizational drift"
[S:14]. I ran no antecedent search beyond what the paper credits, so nothing on the page should
call the model his first statement or call it original without one. Vocabulary: "migration" is
his term; "drift" appears once [S:11]. "Dynamic safety model" is a label others use for it;
Hochstein says outright that it lacks a name [S:15].

**SRK.** Three levels of cognitive control, built, by his own account, from US NRC licensee
event reports and meant to "facilitate communication with basic psychological research" [S:22].
Woods dates it to a 1979 Risø report [S:21]. Reason's GEMS extends it [S:23]. Kant's history lists
the psychologists and philosophers he drew on [S:7], which is a lineage and not a priority claim.

**Abstraction hierarchy.** Means-ends levels from functional purpose down to physical form [S:24].
Bounded: I did not search for earlier statements, and Rasmussen and Lind's 1981 "Coping with
complexity" [S:36] is the obvious place to look.

**Stop rules.** Causal search stops when information runs out, when a familiar abnormal event
turns up, or when a cure is available, and which rule applies depends on whether the analyst
wants to explain, to blame or to improve [S:27]. The section credits Kuhn for the illustration
and Reason (1989) for "resident pathogens" [S:28]. This is the frame closest to software incident
practice and the least known; it is the strongest candidate for the page's foreground besides
the boundary model.

**AcciMap.** Co-authored with Inge Svedung, who is first author on the 2002 paper, and the 1997
paper credits the pair [S:32]. File it `co-authored` with Svedung named.

## Critics: none pass

The three tests from SKILL.md were applied to every candidate [S:42]:

- **Leveson** names him and extends him, and claims CAST "produces more details" than AcciMaps
  and that his influence stayed in human factors [S:30]. That is a comparison in her own method's
  favour inside a tribute. It fails the third test.
- **Dekker and Pruchnicki (2013)** name him and call one of his two strategies, widening the
  margin, "only partially effective due to risk homeostasis" [S:38]. This is the closest thing to
  a critique on the record, and it is one sentence in a paper that otherwise builds on him. My
  read: it belongs in a limit, attributed, and not as a `critiques` edge. Filing it as one would
  also contradict the live Dekker page, whose edge to Rasmussen is `antecedent`.
- **Hochstein (2021)** contrasts Rasmussen's single safety boundary with Woods's multiple
  boundaries and presents Woods as extending him [S:17]. Fails the third test. Useful for a limit
  on the model's single boundary.
- **Harwood and Sanderson (1986)** and **Waterson et al. (2017)** may contain argument against
  SRK and the original AcciMap respectively, but I could not read either (403 and paywall). A
  snippet attributes SRK testability concerns to Harwood and Sanderson and semantic concerns to
  Dougherty (1990) through a page that also returned 403. These are research requests for the
  draft stage, not facts.

## Inbound claims: what the roster already says, reconciled

`bun scripts/inbound-claims.ts jens-rasmussen` printed four edges, six frame credits and prose
mentions on five pages. Each line below agrees, corrects, or flags the claim.

| Page | Claim | Verdict |
|---|---|---|
| Richard Cook, edge | Co-author of the 2005 going solid paper, whose model builds on his dynamic model of risk | **Holds.** [S:34]: Cook first author; the abstract says Rasmussen's "dynamic model of risk and safety" is the basis. |
| Richard Cook, frame "Going solid" | `co-authored`, Rasmussen co-author (2005), builds on his dynamic model | **Holds** [S:34]. |
| David Woods, edge | "drift-toward-boundaries model underlies the Law of Stretched Systems. Rasmussen 1997 is the antecedent paper." | **Contradicted.** Woods's own 2002 statement of the law credits "a more general law of adaptive systems ... (e.g., Rasmussen, 1986; Hirschhorn, 1997)" [S:35], the 1986 book, alongside Hirschhorn. Nothing in Woods's text names the 1997 paper or the boundary model for the law. A third-party paper links the migration idea to the law, dating it to 1986 [S:37]. The label needs "Rasmussen 1997" replaced with the 1986 book and Hirschhorn named, and "drift" checked against [S:11]. Woods has no `facts.md`, so this is a `parallel`-only page under SKILL stage 4 for any new return edge; the existing `antecedent` edge stays unledgered. |
| David Woods, frame "Law of Stretched Systems" | Credits Rasmussen as theoretical predecessor (Rasmussen's drift toward boundaries) | **Partly contradicted.** "Theoretical predecessor" holds on [S:35]; the parenthesis "drift toward boundaries" does not: Woods credits the 1986 book for a general law of adaptive systems. |
| David Woods, frame "new view of human error" | Credits Rasmussen as theoretical predecessor | **Consistent, holder's credit unlocated.** Rasmussen's 1990 paper argues error is defined only against a standard and that stop rules follow the analyst's aim [S:26] [S:27], and the 1997 paper calls for controlling performance at the boundary "not on control of errors" [S:13], both before Woods's and Dekker's statements of the new view. I did not find Woods or Dekker crediting him for the new view in those words. |
| Sidney Dekker, frame "new view of human error" (extended) | Credits Rasmussen as theoretical predecessor | Same as the row above. |
| Sidney Dekker, edge | drift-toward-boundaries model underlies *Drift Into Failure* | **Holds in substance, not read for the book.** Dekker's 2013 drift paper cites Rasmussen 1997 for the drift account [S:38]; the 2011 book itself was not read. Wording: "migration", not "drift" [S:11]. |
| Sidney Dekker, edge | "The intellectual grandfather of the resilience-engineering tradition" | **Unsourced** [S:43]. No source uses the phrase or makes the claim. It reads as the site's characterization in site voice. Recommend cutting it or marking it as the site's reading. |
| Sidney Dekker, `thirty_second_take` | Dekker took the new-view frame "from Rasmussen and Woods" | Same status as the new-view rows. |
| David Woods, `background` | Woods's lineage "runs through Jens Rasmussen's safety-science work" | **Holds** [S:35]: Woods credits Rasmussen for CSE's foundational slogan and for the general law of adaptive systems. |
| David Woods, Dekker edge label | "Rasmussen sits behind both" | Consistent with [S:35] and [S:38]; no line says it in those words. |
| James Reason, edge | Latent-error notion "was implicit in the Rasmussen and Pedersen (1984) discussion"; GEMS maps onto SRK | **Holds.** Quotation confirmed verbatim in the EUROCONTROL note [S:39]; the 1984 paper exists [S:40]; GEMS as "an extension of the SRK Approach" [S:23]. Note the credit runs both ways: Rasmussen's 1990 paper credits Reason (1989) for "resident pathogens" [S:28], and Rasmussen's own 1997 retrospective uses "latent errors" for 1982 [S:41]. The new page should say the two credited each other and claim priority for neither. |
| James Reason, frame "Active failures and latent conditions" | Rasmussen with Pedersen, by Reason's account | **Holds** [S:39]. |
| James Reason, frame GEMS | "the skill, rule and knowledge levels (1979 to 1987) that GEMS extends" | **Holds** [S:23]; 1979 also matches Woods [S:21]. |
| Kelly Shortridge, `inclusion_rationale` | Her SecObs essay cites Rasmussen (1997) | **Holds** [S:18]. |
| Richard Cook, other prose (`thirty_second_take`, body note, `reading`, `further_in`, limit, frame) | Going solid written with Rasmussen in 2005, built on hospital cases | **Holds** [S:34]. |

## Corrections to issue #74

1. **"He died in 2020" is wrong.** He died 5 February 2018 [S:1].
2. **The 1997 paper is confirmed**: "Risk management in a dynamic society: a modelling problem",
   Safety Science 27(2-3): 183-213 [S:8]. That answers the issue's first open item.
3. **"Drifting toward the boundary" is not his phrase.** His word is "migration" [S:11]. "Drift"
   comes from Snook, Dekker and the later literature [S:19] [S:38].
4. **The Law of Stretched Systems credit is misdated on the Woods page**, and the issue repeats
   it. Woods's own text credits the 1986 book, with Hirschhorn [S:35].
5. **"Intellectual grandfather of resilience engineering" has no source** [S:43]. The issue
   repeats it as a reason he belongs.
6. **"Used directly by practitioners, or only through Woods and Dekker?"** Directly. Hochstein
   cites the 1997 paper and the abstraction hierarchy by name in four posts [S:15]-[S:17]
   [S:25], Shortridge cites the 1997 paper [S:18], and Wood's newsletter teaches the stop rules to
   SRE teams [S:29].
7. **"Wrote for safety engineers."** Partly. His own account runs from control engineering through
   psychology, management and law [S:6], and Leveson says his influence landed in human factors
   more than in engineering [S:30].

## Open questions for the Council

- **Is the page an antecedent the roster needs, or is he served by the credits he has?** The
  research cuts toward a page: five pages already credit him, and two of those credits are wrong
  in ways only a page with its own ledger would catch (Woods's date, Dekker's unsourced
  superlative).
- **Which frames go in the foreground?** My read: the boundary model and the stop rules. SRK
  belongs to the record but reaches software mostly through Reason. The abstraction hierarchy is
  in use but narrow.
- **Hollnagel's run** (the issue's second question) shipped on 2026-09-27; the inbound-claims
  script found no Rasmussen claim on the Hollnagel page, so it settles nothing here.
- **The NAE memorial needs a direct read** before any career date or honour reaches the page.
- **Harwood and Sanderson (1986) and Waterson et al. (2017)** are the two places a real critic
  might be; both unread.

## Calibration items applied at this stage

- Grepped this ledger for firstness verbs: no line asserts "coined", "introduced" or "first" in
  its own voice; the one "first" is Woods's phrase, attributed [S:21].
- Antecedent searches are bounded per frame and say what they did not test ([S:14], [S:24]).
- Co-authored work lists authors in byline order: Cook and Rasmussen; Svedung and Rasmussen;
  Vicente and Rasmussen; Rasmussen, Pejtersen and Goodstein; Reason, Hollnagel and Paries.
- Absence claims are bounded by what was searched ([S:42], [S:43]).

## Stage 3 additions (drafting, 2026-10-05)

Three items the inclusion Council marked UNVERIFIED were settled from primary documents while drafting, and recorded in `facts.md` as [S:44] to [S:46].

- **Abstraction hierarchy.** Rasmussen and Lind, "Coping with complexity" (Risø-M-2293, 1981), was read directly. It already states the five-level hierarchy, with the same level names as the later literature, in its Figure 4. The 1985 IEEE paper is therefore a later canonical statement, and the frame is filed `co-authored` with Morten Lind, in the deep tier. The report cites a 1979 sole-authored Rasmussen report on the structure of knowledge that was not read, so no date earlier than 1981 is claimed and no share of credit is argued.
- **Kim J. Vicente** is the full name of the first author of the 1992 ecological interface design paper (DTU Orbit copy).
- **Inge Svedung**, Risk Center, University of Karlstad, is the co-author of the 2000 book, where Rasmussen is named first; Svedung is first author of the 2002 AcciMap paper.

The stage-1 caveat above that the NAE memorial was unreachable is superseded by the stage-2 audit in `facts.md` ([S:2] to [S:5]), which read the NAE member page directly.
