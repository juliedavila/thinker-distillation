# Sidney Dekker: page claims map

Which fact carries which factual field. `scripts/fact-ledger.ts` derives the required list from the
page itself. Format: `- <field path> [S:n] [S:n]`.

Backfilled on 2026-10-15 against the shipped page. Every cited line is a post-publication check
(`re-verified 2026-10-15` in `facts.md`). A field whose claim the record contradicts, or for which
no support was found, has NO line here, so the gate fails on it by design. Those fields, and why,
are in `ledger-findings.md`:

    background (contradicted: Allspaw's Lund work was a master's thesis supervised by others; pilot
      and "most-translated, most-cited" claims also do not hold as written)
    named_frames[2].attribution (contradicted: drift into failure is not `original`)
    named_frames[4].co_originators[2] (unsupported: Allspaw and work-as-imagined / work-as-done)
    body_of_work[0] (contradicted: the 2002 book had a different title)
    body_of_work[2] (contradicted: the 2007 book had a different subtitle)

Audited 2026-10-15 (independent pass): mappings rechecked line by line; [S:16] added to the safety-differently attribution and [S:33] (Hollnagel, HindSight 2017) to the work-as-imagined frame. No mapped field was found to rest on a line that fails to support it. See the "Audit, 2026-10-15" section of `ledger-findings.md`.

Interpretation is not listed here. The Editorial Reading has its own map in `reading-claims.md`.

- active_years [S:15] [S:2]

- named_frames[0].attribution [S:19] [S:5]
- named_frames[0].co_originators[0] [S:19]
- named_frames[0].co_originators[1] [S:19]
- named_frames[1].attribution [S:13] [S:12] [S:11]
- named_frames[1].co_originators[0] [S:12] [S:11]
- named_frames[1].co_originators[1] [S:11]
- named_frames[2].derived_from [S:20] [S:21] [S:31]
- named_frames[3].attribution [S:8] [S:23] [S:16]
- named_frames[4].attribution [S:24] [S:25] [S:33]
- named_frames[4].co_originators[0] [S:24] [S:25] [S:33]
- named_frames[4].co_originators[1] [S:24] [S:26] [S:33]
- named_frames[5].attribution [S:28] [S:29]
- named_frames[5].co_originators[0] [S:28]
- named_frames[5].co_originators[1] [S:29]

- adjacent_thinkers[2] [S:30] [S:13]
- adjacent_thinkers[5] [S:20] [S:31]

- body_of_work[1] [S:7]
- body_of_work[3] [S:8]
- body_of_work[4] [S:14] [S:16]
