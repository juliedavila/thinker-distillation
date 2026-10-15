# David Woods: ledger findings

Backfilled on 2026-10-15 against the shipped page (`last_updated: 2026-05-25`), then audited the
same day (see "Audit, 2026-10-15" at the end). Every factual field the gate requires was tested
against the record. After the audit, twelve hold up and five do not: two where the record says
something different and three where no support was found. Fact ids refer to
`_working/david-woods/facts.md`.

Most of these are matters of precision, not substance. The page's picture of Woods holds: a
founder of cognitive systems engineering with Hollnagel, a central figure in resilience
engineering, the author of graceful extensibility and of the Law of Stretched Systems. The issues
are about who founded a lab, the tense of a title, and how a widely shared idea is credited.

## Contradicted

### background

- **Page:** "Professor Emeritus at Ohio State University; founder and former director of the
  Cognitive Systems Engineering Laboratory (CSEL)" ... "President of the Resilience Engineering
  Association" ... "the Three Mile Island cognitive-engineering investigations".
- **Record:**
  - CSEL's own history page says Woods and Hollnagel founded *the field* after Three Mile Island,
    that "Dr. Phil Smith and Dr. Dave Woods, among others, identified the need" for CSE principles,
    and that Smith turned those ideas into "the first university-based CSE program and laboratory".
    It says CSEL "is now run by Dr. Mike Rayo and Dr. Dave Woods" [S:3]. On the lab's own account,
    then, Woods is a current co-lead, and the lab's founding is credited to Smith.
  - Ohio State lists him as "Past-President of the Resilience Engineering Association" [S:1], and
    Wikipedia dates the presidency to 2011-2013 [S:4]. The page puts it in the present tense.
  - The sources tie his early work to the aftermath of Three Mile Island and to power-plant control
    room design at Westinghouse [S:3] [S:4]. None describes him as part of a Three Mile Island
    investigation, so "investigations" says more than the record does.
  - "Professor Emeritus" is fine: Ohio State says "Faculty Emeritus", Wikipedia "professor
    emeritus" [S:1] [S:4]. Co-authorship with Hollnagel, Cook and Dekker holds [S:13] [S:14].

### named_frames[0].attribution (Adaptive capacity, `original`)

- **Page:** `attribution_kind: original`, primary author Woods.
- **Record:** The term is older than Woods's use of it. Gunderson (2000) introduces it in ecology:
  "A new term, adaptive capacity, is introduced to describe the processes that modify ecological
  resilience" [S:7]. That is six years before the 2006 anthology. Woods's own 2016 paper uses the
  phrase without any claim to have coined it [S:5]. The antecedent search is [S:8].
- **Reading it generously:** Woods clearly gave the term much of its meaning inside resilience
  engineering, and `extended` (from the ecological usage) or `distributed` would describe that
  fairly. The record supports neither "coined by Woods" nor "original to him".
- **Inbound:** The Allspaw and Dekker pages both credit Woods for adaptive capacity as "original
  resilience-engineering theory". That wording is narrower and can stand, but if this page moves off
  `original`, those two frame credits should be read again alongside it.

## Unsupported

### active_years

- **Page:** "1980–present"
- **Record:** His PhD is dated 1979 and his Westinghouse research post ran from 1979 to 1988, before
  Ohio State from 1988 [S:4]. The record places the start of his career in 1979. No source found
  marks 1980 as a starting point, and none says when his published work began.
- **Weight:** One year. "1979–present" would match the record; 1980 could also be right if it
  marks his first publication, but nothing on the ledger shows that.

### named_frames[4].attribution (The new view of human error, `co-authored`, primary author Woods)

- **Page:** `co-authored`, with Woods as primary author and Dekker and Rasmussen as co-originators.
- **Record:** The record shows an idea built by many hands and credited that way by the person who
  did most to name it in print. Dekker's 2002 paper describes "what has recently become known as
  the new view of human error" and cites five sources for it: AMA (1998), Hoffman and Woods (2000),
  Rasmussen and Batstone (1989), Reason (2000), and Woods, Johannesen, Cook and Sarter (1994)
  [S:21]. His Field Guide credits eleven people for "the new view", Woods first [S:17]. Woods is
  plainly central, and *Behind Human Error* (1994) is the book Dekker draws on [S:12] [S:17]
  [S:21]. What the record does not show is a joint work, or Woods as its primary author. A
  `distributed` reading, with Woods prominent among its sources, fits what the sources say.
- **Inbound:** The Dekker page files this frame as Dekker's own, `extended`, crediting Woods as a
  co-builder. That fits Dekker's role in carrying the frame. The two pages currently describe it
  differently, and a joint look at both would settle it.

### body_of_work[4] (CSEL work + Resilience Engineering Association talks, blog-series)

- **Page:** a "blog-series" called "Cognitive Systems Engineering Laboratory work + Resilience
  Engineering Association talks", linked to https://csel.osu.edu.
- **Searched:** The link resolves to the live lab site at https://u.osu.edu/csel/ [S:18], so the lab
  and its work exist. No series of Resilience Engineering Association talks was found at that link
  or on the lab's history page [S:3] [S:18]. The item is a bundle with no single artifact behind it,
  so it cannot be shown to exist as described.

## Not gated, worth knowing

- The source link for Graceful extensibility, https://safety-cube.osu.edu, did not connect on
  2026-10-15, at the backfill and again at the audit [S:19]. The frame itself is well supported:
  Woods writes that "a new term was needed" and names it [S:5].
- The Law of Stretched Systems is mapped as `original`, and the record supports that for the name
  and the statement. Woods himself presents it as one case of "a more general law of adaptive
  systems that has been noted by many researchers (e.g., Rasmussen, 1986; Hirschhorn, 1997)" [S:2]
  [S:11]. The page's Rasmussen co-originator line says exactly this. Hirschhorn is credited
  alongside Rasmussen in the same sentence and is not on the page.
- The Rasmussen antecedent edge checks out at both ends: the 1997 passage on effort and cost
  gradients and migration toward the boundary [S:10], and Woods's 2002 citation of the 1986 book
  [S:2]. The Rasmussen page's `extends` edge back to Woods agrees.
- Joint cognitive system is `co-authored` with Woods as primary author. Co-authorship with
  Hollnagel is well supported [S:14] [S:16]. Both the 1983 paper and the 2005 book list Hollnagel
  first, so the record does not single out either man as primary; the page's choice of Woods is a
  framing for this page rather than something a source states.

## Audit, 2026-10-15

An independent pass reopened all 20 backfilled lines against the sources at their URLs (local
copies under `_working/david-woods/src/`, fresh fetches of the Ohio State, CSEL history, Wikipedia,
RePEc and Routledge pages, and a re-test of the two page links). Twelve lines held as written and eight were repaired.
What changed:

**Lines repaired in `facts.md`**

- **[S:5]** The line said Woods's 2016 paper "attributes that usage", meaning adaptive capacity, to
  Hollnagel et al. (2006). The sentence it quotes credits Hollnagel et al. for a use of the word
  *resilience*, and credits no one with the phrase "adaptive capacity". The line now says that.
  The same reading had carried into [S:8] and the adaptive capacity finding above; both corrected.
  The `original` finding does not depend on it and stands on [S:7].
- **[S:2]** The PDF carries no year. The line now says the 2002 date comes from the eScholarship
  record (Cognitive Science Society proceedings, vol. 24), and completes the Hirschhorn reference.
- **[S:7]** The mirror shows the DOI but neither the year nor the page range. The line now says
  those come from the EPA HERO record, by search summary.
- **[S:4]** Dropped "citing his CV", which the fetched article did not bear out, and quoted the
  dated sentences directly.
- **[S:13]** Added the page's own note that the book was "originally published in 1994", which
  supports the 1994 year in `body_of_work[0]` alongside [S:12].
- **[S:17]** Removed "The label is Dekker's". Nothing in the Field Guide says Dekker coined the
  label, and his 2002 paper says it had "recently become known" by that name [S:21].
- **[S:20]** Quoted Hollnagel's sentence in full, so the line shows that what "had begun with the
  first workshop" is a growing dissatisfaction with the conventional view of safety.

**Line added**

- **[S:21]** Dekker (2002), Journal of Safety Research, which lists the sources of the new view,
  Rasmussen and Batstone (1989) among them. The backfill had not found it.

**Mapping changes in `page-claims.md`**

- `named_frames[4].co_originators[1]` (Rasmussen, "theoretical predecessor") now maps to [S:21].
- `named_frames[4].co_originators[0]` now cites [S:21] alongside [S:17].

**Findings disputed**

- *Rasmussen as predecessor of the new view (was Unsupported).* Supported by [S:21]: Dekker cites
  Rasmussen and Batstone (1989) as a source of the view, the earliest in his list. The Field
  Guide's silence on Rasmussen was real but was not the whole record. Moved off this list.
- *Dekker's co-originator role "understates" that he originated the label (was a note under the
  new view).* The record does not show Dekker originated the label [S:21], so "co-carrier into the
  safety-science literature" is a fair description. Withdrawn.
- *active_years as Contradicted.* A 1979 career start does not contradict a 1980 start for active
  years; it simply leaves 1980 unsourced. Reclassified as Unsupported; still unmapped.

**Findings added**

- The new view attribution finding is rewritten: the reason is no longer that "the label is
  Dekker's" (unsupported), but that the record shows the view credited across several authors,
  Woods prominent among them, with no joint work behind `co-authored`.
- Joint cognitive system: both sources list Hollnagel first, so "primary author Woods" is the
  page's framing, not a sourced fact (Not gated, above).
- The CSEL history page also says Smith and Woods "among others, identified the need" for CSE,
  which is now quoted in the background finding so the lab's account reads in full.

The gate still fails on five fields, down from six. That is the expected result for this page.
