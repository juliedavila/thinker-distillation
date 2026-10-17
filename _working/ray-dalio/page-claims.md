# Ray Dalio: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled 2026-10-15 against the page as shipped. A field is mapped only when the cited lines
support it as the page states it.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- active_years [S:1] [S:26]
- background [S:2] [S:1] [S:3] [S:27] [S:11] [S:10] [S:12]

- named_frames[0].attribution [S:31] [S:17] [S:18] [S:13] [S:5]
- named_frames[0].co_originators[0] [S:31] [S:17]
- named_frames[1].attribution [S:32] [S:33] [S:19] [S:13] [S:11]
- named_frames[1].co_originators[0] [S:32]
- named_frames[2].attribution [S:15] [S:14] [S:20]
- named_frames[3].attribution [S:14] [S:11] [S:21]
- named_frames[4].attribution [S:16] [S:22]

- body_of_work[0] [S:5] [S:27]
- body_of_work[1] [S:30] [S:7] [S:8] [S:27]
- body_of_work[2] [S:27] [S:9]
- body_of_work[3] [S:10]
- body_of_work[4] [S:12] [S:11]

- adjacent_thinkers[3] [S:35] [S:29] [S:23] [S:24] [S:25]
- tagline [S:34] [S:12]

Audit, 2026-10-15: `body_of_work[2]` now cites S:27 first, because the principles.com page (S:9) gives
no publication date and only implies 2018 through "the tenth anniversary of the 2008 financial crisis."
`body_of_work[0]` also cites S:27 as a second source for the 2017 date.

Remediation, 2026-10-15 (`claim-delta-2026-10.md`). The four fields left unmapped by the backfill
now map, each changed to what its lines say:

- `background` gives "about $150B in assets in 2022" on S:3 and drops "at peak," which S:4 ($160
  billion in early 2019) contradicts. The rest of the field was already supported on S:1, S:2, S:3
  and S:27; S:11, S:10 and S:12 carry the TED talk, the animated video and principles.com.
- `named_frames[0]` is now `extended`. Its gloss names Franklin's numbered virtues as the earlier
  genre (S:17) and credits Dalio, at the strength S:17 gives it ("appears"), with running a firm
  against one long, living, published document, first dated by the 2010 leak (S:13). S:18 is the
  Liker line behind S:17; S:5 dates the book.
- `named_frames[1]` is now `extended`. Its gloss gives the earlier dated uses of the phrase (2001
  *Foreign Affairs*, *Wired* 2006 and 2007, S:19), his earliest dated use (2010, S:13), and credits
  him with the Bridgewater practice (S:19, S:11).
- `adjacent_thinkers[3]` (Taleb) is now `parallel`, so the gate no longer requires it; it is mapped anyway. Its label
  states that no Taleb essay, book or paper on Dalio's framework has been found (S:23) and that the
  one exchange on record is a 2019 interview about capitalism (S:24, S:25).

Unused lines, one sentence each. S:4 is the reason "at peak" was removed and is not cited because the
page no longer gives a 2019 figure. S:6 records the dead principles.com/book link that this pass
replaced with the S:5 URL. S:28 is context for the Taleb lines only.

Review, 2026-10-15: `adjacent_thinkers[3]` adds S:29, the line for Taleb's general position on
historical priors and rare events, which the label's first clause states and S:23 to S:25 do not
carry. `body_of_work[1]` cites S:30 first, the print edition's catalog page, for the full title with
"and Fail."

Sourcing pass, 2026-10-16 (`sourcing-delta-2026-10.md`):

- `named_frames[0].attribution` cites S:31 first, the antecedent search that names Benjamin Franklin,
  now credited in `co_originators`. That search tested the genre only; the firm-scale practice the
  gloss credits to Dalio still rests on S:17 and S:13.
- `named_frames[1].attribution` cites S:32, the antecedent search that names Chris Anderson (2006),
  now credited in `co_originators`, and S:33, Dalio's own principle text, which now carries the
  gloss's account of his argument, his exceptions and the taped meetings. The 2006 use is a blog
  post rather than a *Wired* article, and the gloss now says so. "Information asymmetry is the
  largest contributor to organizational pathology" and "open evaluations" are gone: S:33 carries
  neither, and no other line does.
- `adjacent_thinkers[3]` cites S:35, Taleb's own 2008 Edge essay, for the label's account of his
  general positions, ahead of the secondary S:29.
- `tagline` is mapped on S:34 ("offered them for anyone to judge and adopt") and S:12. "Asked his
  industry to do the same" is gone: no line supports it.

Review, 2026-10-16 (`sourcing-delta-2026-10.md` § Review): mappings unchanged. `named_frames[1].co_originators[0]` now reads "a *Wired* blog" in place of "while editor of *Wired*", carried by S:32's quoted page heading. `named_frames[1].one_line_gloss` gives taping as Dalio's example rather than the signature practice and restores "private" and "very rare" from S:33. `tagline` stays on S:34 and S:12, now logged as an ADDITION.
