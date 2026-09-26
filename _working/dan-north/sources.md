# Dan North: research record

Stage 1 of the add-thinker skill, candidate issue #39, 2026-09-25. The prose half of the record;
`facts.md` holds one line per verified fact, and the `[S:n]` tags here point at it.

## Result in one paragraph

He passes the uptake check comfortably, and it does not need a Council to settle it. Behaviour-driven
development dates to 2003 to 2006 and is carried by tools other people built (RSpec in 2005, then
Cucumber and Gherkin). Given/When/Then is in daily use by people who have never read him. Deliberate
Discovery dates to 2009 and had an outside user within five months. CUPID is four and a half years old
with at least three outside users. Two critics pass all three legs of the test, both on his SOLID talk.
The issue's central open question, whether BDD is his, has a clear answer in the sources: **the name
and the move from "test" to "behaviour" are his, by his own account and two third-party histories;
the Given/When/Then template is joint with Chris Matts; and almost every ingredient is credited by
North himself to someone else.** That is the Humble shape again, which is what the issue predicted.

## What the roster already says (inbound-claims.ts)

Output of `bun scripts/inbound-claims.ts dan-north`, run first, with a verdict on each line.

| Page | Claim | Holds? | Note |
|---|---|---|---|
| nicole-forsgren | `parallel` edge, secondary: in the October 2023 McKinsey review North called himself a fan of DORA *Accelerate* and SPACE, faulted McKinsey for not citing Forsgren as lead researcher, and wrote the research "has stood up to scrutiny" | Yes | Re-read this pass, quotes exact [S:36]. He defends her. The edge was retyped from `critiques` on 2026-09-20 and that retype is correct. A new page must not file Forsgren as someone he argues with. |
| jez-humble | `parallel` edge, secondary: co-author of the 2006 paper that first wrote up the deployment pipeline, and the other name in Fowler's hedged credit for blue-green; publishes as Daniel Terhorst-North, the name Fowler's credit uses | Yes | [S:33] [S:34] [S:35] [S:1]. |
| jez-humble | Frame *The deployment pipeline*, `co-authored`, credits Dan North as co-author, "The Deployment Production Line," AGILE 2006 | Yes, with one note | Humble's first-person credit re-read [S:34]. North's own profile calls it "the build pipeline" and says he presented it "as the Build Production Line" [S:3] [S:33], which is not the paper's title. Print the paper's title. |
| jez-humble | Frame *Blue-green deployment*, `co-authored`, credits Dan North as named beside Humble in Fowler's hedged credit | Yes, narrowly | Fowler's credit is for **the name** only, and the same page says the technique "has been 'out there' for ages" [S:35]. The Humble gloss already says "hedged the credit for the name", so it agrees. A North page must not carry blue-green as a technique he originated. |
| jez-humble | Prose mentions in `reading`, limit "Almost none of it is his alone", both frames | Yes | All name him only as co-author of the 2006 paper and in the blue-green hedge. Consistent. |
| rich-hickey | Prose mention in frame *Value, identity, state and time* | Not about him | Surname match on Alfred North Whitehead. No claim about Dan North. |

No inbound `critiques` edge exists, so the Forsgren failure mode is not live here. Nothing on the
roster contradicts this research. The one thing a drafter must carry: **both live pages already use
the slug `dan-north`, and the Humble page records the name as Daniel Terhorst-North.** Whichever name
heads the new page, the other must appear in `background`.

## Corrections to the candidate issue

The issue was careful and marked most of its case unverified, so there is less to correct than on
Fournier or Saxe. Four points.

1. **"best known for behaviour-driven development"** is right, but "BDD originates with him" needs
   splitting, which the issue itself asked for. He named it and wrote the first account [S:12] [S:14];
   the template that practitioners actually carry, Given/When/Then, is joint with Chris Matts by his
   own "we" [S:15] and by Fowler [S:20]; the story template it grew from was already in use and is
   credited by Cucumber to Rachel Davies at Connextra [S:16] [S:17]; the tool that started it is Chris
   Stevenson's agiledox [S:13]; and Fowler records North crediting Ivan Moore for "a significant amount
   of inspiration" on Given/When/Then [S:20]. Liz Keogh is named by Cucumber as "another BDD pioneer"
   from 2004 [S:17].
2. **"a British consultant and speaker"**: the consultant half is sourced (independent since 2012
   [S:7]). Nationality is not stated in any source read. He was based in London for Thoughtworks
   and DRW [S:5] [S:7]. Say "London-based" or nothing, not "British".
3. **Which name heads the page**: he publishes today as Daniel Terhorst-North (profile, about page,
   Speaker Deck) and his company is still Dan North & Associates [S:1]. No source
   gives the date or reason of the change, and none should be guessed at. Recommendation: `name:
   Daniel Terhorst-North`, slug stays `dan-north` because two live pages already use it, and
   `background` says he also publishes as Dan North.
4. **"co-writing the 2006 conference paper that first set out the automated route"**: holds, third
   author of three [S:33] [S:34]. The Agile Alliance entry that says "first" is on Humble's ledger
   (`[S:6]` there), not re-read here.

## Career, with one conflict

- First decade: developer to VP Engineering and Director of Development across investment banking,
  insurance, telecoms and other sectors. No employer is named [S:4].
- **Thoughtworks London, from 2002**, "first tech employee" of the new UK office [S:5].
- **The end date conflicts.** The profile says "over the next nine years" [S:5]. His own post of
  2010-02-06 says "for nearly the last 8 years" and that he left "at the end of last year" for DRW
  Trading [S:6]. The contemporaneous post wins on the date; keep the page to "2002 until 2010" and
  print no year count.
- **DRW Trading, 2010 to 2012**, London, a Lean and Theory of Constraints change programme with CIO
  Seth Thomson, started from a book club on Goldratt's *The Goal* [S:7].
- **Independent since 2012**, Dan North & Associates [S:7]. The site footer now also advertises
  "Goalwards", described as "our new business agility practice"; no date found, so live edge only,
  hedged.
- **Education: not established.** His own site names no institution [S:8]. Leave it off the page.
  (Fact audit 2026-09-25 removed an unsourced LinkedIn search-summary report of a university.)

## Books

He has **no published book of his own** [S:11]. Two published books carry his name:
- *The RSpec Book* (Pragmatic Programmers, 2010-12-02), sixth of six authors: Chelimsky, Astels,
  Dennis, Hellesøy, Helmkamp, North [S:9]. His Leanpub bio says he "contributed to" it.
- *97 Things Every Programmer Should Know* (O'Reilly, 2010), edited by Kevlin Henney; his essay is
  "Code in the Language of the Domain" [S:10].
Leanpub lists "Software, Faster" with Helen Scott as retired and "Business Mapping" with Chris Matts
as unpublished [S:11]. Neither is a published book.

## Frames, with the uptake check and antecedents

The uptake check ran first. Every frame is well over two years old and every one has named outside
use, so `uptake_passes` is true.

| Frame | First dated | Outside use | Antecedents | Suggested attribution |
|---|---|---|---|---|
| Behaviour-driven development | JBehave begun end of 2003 [S:14]; essay March 2006 [S:12] | RSpec 2005 (Astels, Baker, Hellesøy, Chelimsky) [S:17]; Cucumber; Agile Alliance glossary [S:18] | TDD (its stated premise) [S:12]; agiledox, Chris Stevenson [S:13]; the "should" convention, found not made [S:13]; Chris Matts on business value [S:15]; Evans's ubiquitous language [S:16] | `original` for the name and the test-to-behaviour move; `co_originators` should include Chris Matts on the analysis half. The page must say he credits nearly every ingredient himself. |
| Given/When/Then | End of 2004, with Matts [S:15]; Agile Alliance says 2004 [S:18] | Fowler 2013 [S:20]; Cucumber/Gherkin [S:17] | Connextra story template, Rachel Davies [S:17]; Ivan Moore, credited by North via Fowler [S:20]; Fowler calls it a reformulation of Four-Phase Test [S:20] | `co-authored`, Chris Matts. Consider `derived_from` or a limit for Ivan Moore. |
| Deliberate Discovery | Phrase 2009-07-01 [S:21]; essay 2010-08-30 [S:22] | Mark Needham, 2011-01-26 [S:24] | **Phillip Armour, "The Five Orders of Ignorance," CACM October 2000**, uses "second-order ignorance" and frames development as ignorance reduction [S:23]. North's essay uses the same term and does not cite him. Liz Keogh credited for a thought experiment [S:22]. | `extended` with Armour as antecedent, or `original` with Armour named in the gloss and a limit. Do not mark it `original` without saying so. |
| CUPID | Proposed 2021-03-16 [S:26]; full essay 2022-02-10 [S:27] | Nogginbox 2021-07-10, Mozaic Works 2022-02-19, Mikulski 2022-09-10 [S:28] | The "Unix philosophy" property names its own antecedent [S:27]; it is framed as a reply to Robert C. Martin's SOLID [S:26] | `original`. Deep tier is defensible: it is the youngest frame and the uptake is blog-level. |
| Deployment pipeline | 2006 [S:33] | Carried on the Humble page | Humble frame | `co-authored` with Humble and Read, primary author `jez-humble` to match the live page (calibration: one primary author per `concept_slug`). |
| Blue-green deployment (name) | Fowler 2010 [S:35] | Carried on the Humble page | Technique "out there for ages" [S:35] | Deep tier at most; the credit is for the name, hedged. |

Openings checked for a credited premise, per the Dijkstra rule: "Introducing BDD" opens on teaching
TDD [S:12]; "Introducing Deliberate Discovery" opens on his own 2009 post and a Marc McNeill comment
[S:22]; "CUPID: for joyful coding" opens on SOLID [S:27]; "CUPID: the back story" opens on an XTC
meet-up and the PubConf talk [S:26]. None opens by quoting an outside authority the way "Simple Made
Easy" does, but three of four open by naming the thing they react to, which is itself an attribution.

Not verified and not to be used: "Three Amigos" (not his on any source read), "Software that fits in
your head" and "Patterns of Effective Delivery" (talk titles; no uptake check run), "no best
practices" (self-described on the about page [S:2], and the Dreyfus framing behind it is not his).

## Critics

Two pass all three legs. Both target the 2016 SOLID talk, so both are about one argument of his and
neither touches BDD.

- **Robert C. Martin, "Solid Relevance," 2020-10-18** [S:29] [S:30] [S:31]. Durable, names him,
  argues that "just write simple code" with no principles is "the best way to make a complicated mess".
  Two cautions for the drafter: Martin agrees with parts ("This is good advice"; the Liskov slide is
  "entirely correct"), and he allows that North may have been "ironic". And the essay predates CUPID,
  so it answers the slides, not CUPID. Martin has no page here; `secondary`. He is the natural
  `strength` exception to consider if the byline test argues otherwise.
- **Jeroen De Dauw, "Why Every Single Argument of Dan North is Wrong," 2017-02-17** [S:32]. Durable,
  names him in the title and first line, argues the talk is "straw man argumentation". `secondary`.

Looked for and not found: any durable, signed artifact that argues against BDD itself and names him.
The Agile Alliance glossary's "Common Pitfalls" paragraph does argue a limit and names him [S:19], but
it is an unsigned reference entry and fails leg 1 as a critic; it can carry a `limits` entry. A 2022
Medium post by David Rodenas titled "Is it True the Extraordinary Claim of Dan North About BDD?" could
not be read (Medium blocks direct fetch) and its direction is unknown. It is not a critic on this
record.

Not a critic, by the Forsgren rule: his McKinsey review is his critique **of McKinsey**, and it
defends Forsgren by name [S:36]. It could be a body-of-work entry. It must not produce a `critiques`
edge in either direction.

## Adjacent thinkers the page will want (unverified beyond what is cited)

On site: Jez Humble (co-author, [S:33]), Nicole Forsgren (defended by name, [S:36]), Martin Fowler
(Given/When/Then and blue-green write-ups, [S:20] [S:35]), Kent Beck (TDD is the premise of BDD
[S:12], but North's essay does not name Beck, so `parallel` or `antecedent` needs its own line before
use). Off site: Chris Matts (co-originator), Liz Keogh (BDD pioneer, Deliberate Discovery credit),
Chris Stevenson (agiledox), Aslak Hellesøy (Cucumber), Phillip Armour (antecedent), Robert C. Martin
and Jeroen De Dauw (critics), Eric Evans (ubiquitous language).

## What a Council should decide

- Whether the page is about BDD, which is widely used and largely shared, or about the thread from
  BDD through Deliberate Discovery to CUPID: that the words a team uses shape what it learns and
  builds. The second is the site's reading, and nothing in the sources states it as his thesis.
- `doctrine_mode`: `mode-a` looks right (the named frames are his and in use; coining is not needed),
  which means three review rounds.
- Whether the Armour antecedent makes Deliberate Discovery `extended` or leaves it `original` with a
  limit.

## Fact audit, 2026-09-25

Adversarial pass over every `[S:n]` line. Repairs made in `facts.md`: [S:1] drops the unchecked
"conference bios"; [S:8] drops the LinkedIn/Brunel report; [S:10] notes `thing_11` is repository
numbering; [S:22] no longer says North took "second-order ignorance" from Armour, only that the
phrases match and he does not cite him; [S:23] now cites the DOI (CACM returns 403, article text
unread) and no longer carries the "trawling the comments" quote, which is in Needham's separate
Armour post, now [S:37]; [S:18]/[S:19] point at the www host that serves the glossary.

## Stage 3 additions, 2026-09-25

Drafting added four ledger lines. Three are the antecedent searches `fact-ledger.ts` requires for
every `original` frame: behaviour-driven development [S:38], CUPID [S:39] and Deliberate Discovery
[S:40]. None found an earlier use of the name. The Deliberate Discovery search restates what the
record already held, that Armour's 2000 paper states the core idea first and North does not cite it.
The fourth, [S:41], closes the inclusion Council's UNVERIFIED note on Gherkin: Cucumber's reference
lists Given, When and Then as step keywords.

Inclusion Council split on Deliberate Discovery (seats 1, 2 and 4 `extended`, seats 3 and 5
`original` with Armour named). The draft files it `original` with Armour named in the gloss, a limit
and a deep antecedent edge, because `extended` with Armour in `co_originators` asserts a lineage
the ledger cannot back ([S:22] records a phrase match and no citation, and Armour's text is unread
[S:23]). Seats 1 and 2 named the risk as filing it `original` with Armour absent; he is present in
three places. Flagged for the review Council and the merge request.
