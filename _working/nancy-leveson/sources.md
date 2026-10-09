# Nancy Leveson: research record (stage 1)

Candidate issue #82, researched 2026-10-09 in the sandbox. The ledger is `facts.md`; every claim
below that could reach the page has an `[S:n]` there. No search in this run was refused; the
search cap was not hit.

## Uptake check (run first)

The uptake check passes, and it is not close.

| Frame | First date | Outside use | Ledger |
|---|---|---|---|
| STAMP (Systems-Theoretic Accident Model and Processes) | Name in use by 2003 (self-cited submitted paper); published *Safety Science*, April 2004 | A 2022 scoping review by four authors outside her group counts 321 eligible documents on STAMP, STPA and CAST since 2003. Google SRE says it has "adopted the STAMP ... framework" (Falzone and Treynor Sloss, ;login:, 2024/25). Hochstein (2020) wrote it up from a software seat. | [S:11], [S:12], [S:23], [S:24], [S:26] |
| STPA (System-Theoretic Process Analysis) | About 2005, by a secondary report of a Leveson and Dulac AIAA paper; handbook with John Thomas, 2018 | Google SRE runs it on production systems ("hundreds of scenarios"); the handbook's reviewers come from Ford, GM, Boeing, Embraer, Akamai, FedEx, the USAF and the UK NCSC; the scoping review above. | [S:14], [S:15], [S:23], [S:24] |
| CAST (Causal Analysis based on System Theory) | Not pinned: the 2005 paper reportedly did not yet use the acronym | Google SRE uses it for post-incident analysis; SREcon26 talk. | [S:14], [S:24], [S:25] |
| STPA-Sec | *CACM*, February 2014, William Young first author | Search results show an INCOSE 2021 paper applying STPA-Sec to a DevSecOps reference design and other applications, none read. Treat as plausible, not verified. | [S:16] |
| Safety-III | 2020 white paper | Aven 2022 (*RESS*) carries it in a title; Hollnagel answers it by name (2025). Her own text says the approach "is not new". | [S:17], [S:18], [S:27], [S:29] |

Every frame is over two years old, and the two load-bearing ones (STAMP, STPA) have documented use
in software operations by named practitioners outside MIT. `uptake_passes: true`. Proceed to the
inclusion Council.

## Corrections to the candidate issue

1. **"An MIT professor of aeronautics and systems safety."** Imprecise. She is Professor of
   Aeronautics and Astronautics and also Professor of Engineering Systems, holds the Jerome C.
   Hunsaker chair, and has been at MIT since 1999 [S:1]. No emerita status is shown.
2. **"Reported to be known for STAMP and STPA."** Confirmed, with a credit the issue did not have.
   STAMP is hers by byline (sole author, 2004) and is explicitly built on Rasmussen and Svedung's
   framework, with control concepts from Ashby and Checkland [S:12]. It should be filed `extended`,
   with Rasmussen (on site) and Inge Svedung as co-originators or antecedents, not `original`. This
   answers the issue's own third question: the obvious place to look was the right one, and her
   paper says so itself.
3. **STPA's first date.** I could not pin it from a primary. The 2004 *TDSC* paper uses STAMP and
   never the string "STPA" [S:13]; the earliest date I have is a secondary report of a 2005 paper
   co-authored with Nicolas Dulac [S:14]. The page should not print a first year for STPA unless
   the draft stage reads that paper. The 2018 handbook is co-authored with John Thomas [S:15].
4. **STPA-Sec "mentioned and not checked."** Now checked: it is real, published in *CACM* in
   February 2014, and its first author is William Young, then an MIT doctoral student, with
   Leveson second [S:16]. Filing: `co-authored`, `primary_author` Young.
5. **"Whether Safety-III is a frame anyone other than Leveson uses."** Partly answered. Aven uses
   the term in a 2022 title [S:27] and Hollnagel argues with it [S:29]. More important: her own
   paper says "I call this general approach Safety-III to put it into the Hollnagel context. It
   is not new" and that it "incorporates and extends this System Safety approach" [S:18]. So
   Safety-III is a label for System Safety practice, positioned against Hollnagel, by her own
   account. It should not be filed `original`; I would keep it out of the foreground or file it
   as a label with System Safety as its antecedent.
6. **The issue omits the software-engineering record**, which is where the site's readers meet
   her: the Knight and Leveson N-version experiment (1986, Knight first) [S:20], the Therac-25
   investigation (1993, with Clark Turner, Leveson first) [S:19], and *Safeware* (1995) [S:6].
   Her first career was as a computer science professor at UC Irvine and the University of
   Washington [S:3].

## Inbound claims (from `bun scripts/inbound-claims.ts nancy-leveson`)

All six live claims checked; none is contradicted.

- **Jens Rasmussen edge, `extends`.** Her legacy paper says her work extends his, including STAMP
  and abstraction-hierarchy specification techniques, and grounds leading indicators in his
  migration theory. Holds, on the Rasmussen ledger's `[S:30]`, and the 2004 STAMP paper agrees on
  its own terms: "the Rasmussen/Svedung framework upon which STAMP is built" [S:12]. The new page
  should carry the reciprocal edge as `antecedent` (or name Rasmussen in STAMP's
  `co_originators`) and add Svedung, who has no page; per the calibration note on Rickmeier, a
  missing page is no reason to leave him out.
- **Erik Hollnagel edge, `critiques` (Leveson critiques Hollnagel), secondary.** Holds. Her 2020
  white paper argues against "Prof. Hollnagel's arguments" by name [S:17]. "MIT, 2020" holds; the
  date string "7/1/2020" is ambiguous between January and July, so only the year is safe. "His
  answer ... exists as an unpublished manuscript" holds; the incrementalsafety.com copy still
  resolves [S:29]. Note for the Hollnagel page's next recheck: `erikhollnagel.com` now redirects to
  an unrelated gambling site, so no link should point there.
- **Hollnagel prose: "co-founded resilience engineering with David Woods, Nancy Leveson and
  others".** Consistent with the co-edited 2006 anthology and Hollnagel's own dating of the field to
  the 2004 workshop [S:9], [S:10]. I did not find her own account of a founding role, so the new
  page should say "co-edited the anthology" rather than "co-founded", in site voice.
- **Hollnagel prose quoting "has very little or no resemblance ... for at least 70 years".**
  Matches the abstract word for word [S:17].
- **Hollnagel prose: "Nancy Leveson, who co-edited the field's founding anthology with him".**
  Holds [S:9]. Byline order is Hollnagel, Woods, Leveson.
- **Rasmussen limit "Leveson finds his influence concentrated at the interface" and
  `further_in` "Rasmussen's Legacy ... CAST compares with AcciMaps".** Hold, on the Rasmussen
  ledger's `[S:30]`, and the 2004 paper independently contrasts its notation with AcciMaps [S:12].
- **David Woods body-of-work note "Edited with Hollnagel and Leveson".** Holds [S:9].

The return edge from her page to Hollnagel should be `critiques` in the other direction (Hollnagel
critiques Leveson), and it passes all three tests [S:29]. The Hollnagel page already treats the
Leveson card and its own `limits[1]` as a convention pair (SCHEMA 4.11).

## Critics

- **Erik Hollnagel, "The Folly of Safety-III" (2025 manuscript).** Durable but unpublished, names
  her, argues against her [S:29]. Qualifies; he has a page here, so `strength: primary` by SCHEMA
  4.11, but the byline test and the manuscript's status may argue for secondary. The Council
  should decide.
- **Lorin Hochstein, "Thoughts on STAMP" (2020).** Durable, names her, and argues against
  specific points (humans modelled as just another controller; no engineer subset can draw the
  whole control structure; not every hazard can be controlled), while praising the systems view
  and the STPA scaffolding [S:28]. It passes the three tests on the quoted objections. It is the
  most useful critic for this site, because it comes from software operations. He is candidate
  #87, not yet on site, so `secondary`. The label must say the essay also endorses.
- **Algirdas Avizienis and students, against the Knight and Leveson experiment (1985-1990).** A
  real dispute, documented from her side [S:21]. None of his artifacts was read, and her reply says
  none was refereed. Not an edge. A lead for the draft stage only.
- **Not critics:** Altabbakh et al. 2014 (*J. Loss Prevention*) applies STAMP to an oil-and-gas
  case and validates it, which is application. The "critical review of STAMP, FRAM and AcciMap"
  (Underwood and Waterson, about 2013) was seen only as a search result; not read, not used.

## Antecedents and openings

- The 2004 paper's opening premise is uncredited, but its Section 3 credits Rasmussen and
  Svedung, Ashby, Conant and Ashby, Checkland, and Perrow ("coined the term system accident")
  [S:12]. Google's account names Wiener and Kalman as foundations in its own voice [S:24];
  that is their framing, not hers.
- The Safety III paper opens on Hollnagel: its premise is a response, and its novelty is
  disclaimed in the text [S:17], [S:18].
- "Software safety" as her field: only her own homepage ("started a new area of research") and
  the AIAA award citation ("developing the field of software safety") [S:4], [S:5]. No antecedent
  search was run on the field, so the page may quote the citation and attribute it, and must not
  call her its founder in site voice.

## Books and canonical papers (verified)

- *Safeware: System Safety and Computers*, Addison-Wesley, 1995, sole author [S:6].
- *Engineering a Safer World: Systems Thinking Applied to Safety*, MIT Press, January 2012, sole
  author; the book-length statement of STAMP, STPA and CAST [S:7], [S:24].
- *An Introduction to System Safety Engineering*, MIT Press, November 2023, sole author [S:8].
- *Resilience Engineering: Concepts and Precepts* (2006), co-edited, third of three editors [S:9].
- *STPA Handbook* (2018), with John P. Thomas [S:15].
- Knight and Leveson (1986), *IEEE TSE*; Knight and Leveson reply (1990), *SEN* [S:20], [S:21].
- Leveson and Turner (1993), Therac-25, *IEEE Computer* [S:19].
- Leveson (2000), intent specifications, *IEEE TSE*; metadata only [S:22].
- Young and Leveson (2014), STPA-Sec, *CACM* [S:16].
- Leveson (2020), "Safety III" white paper [S:17].

## Open questions for the Council

- Is the page about STAMP and STPA, or about the Safety-III dispute? Uptake supports the first;
  the issue's own worry, that a page built as Hollnagel's counterweight adds little, still
  applies to the second.
- Hochstein's essay: is a mixed essay a `critiques` edge (on its quoted objections) or a
  `parallel` one? The tests pass, but the label has to carry the endorsement too.
- STPA's first date and its 2005 co-author (Dulac) need a primary read before any year prints.
- CAST's first date is unknown.
- Safety-III: foreground, deep, or omitted? Her own text calls it a label for old practice.
- Software safety "as a field she started": the page can quote the AIAA citation, attributed, and
  nothing stronger without an antecedent search.
- `doctrine_mode`: she names her own frames, so probably `mode-a` (three review rounds).

## Added at drafting (stage 3), 2026-10-09

Read directly at drafting: the 2019 *CAST Handbook* (sole author, [S:33]); the 2018 *STPA Handbook*
definitions of control structure and unsafe control action, and its "What is STAMP?" section,
which sets STAMP against "dominos or Swiss cheese slices" ([S:34], [S:37]); the 2004 *Safety
Science* paper's safety-versus-reliability distinction ([S:35]); the CACM STPA-Sec paper's
ordering of loss before adversary ([S:36]). Copied from the Rasmussen ledger: her "Rasmussen's
Legacy" paper ([S:32]). The 2005 Leveson and Dulac AIAA paper was searched for and is behind the
AIAA paywall; it remains unread, so STPA still prints no first year. The two Council UNVERIFIED
items on "control structure" and "unsafe control action" are now verified as STPA's own defined
terms ([S:34]); outside use of the terms is still unverified. "Safety is not reliability" has a
primary in her own words ([S:35]) and is used in prose, not filed as a frame.
