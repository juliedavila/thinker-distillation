# Ward Cunningham: web-search cap audit, 2026-10-02

Audit of the claims behind the refused searches listed in issue #88, against the live page
`src/content/thinkers/ward-cunningham.md` (working tree identical to `origin/main` at audit time).
Every source below was reopened during this audit; no web search was refused during this audit.

| # | Refused query | Claim it was after | Page text (field) | Ledger line | Verdict | Evidence URL |
|---|---|---|---|---|---|---|
| 1 | `Cunningham "WyCash Portfolio Management System" OOPSLA 1992 "OOPS Messenger" addendum proceedings citation` (2026-09-22, stage 1) | The formal bibliographic citation of the 1992 experience report (Addendum to the OOPSLA '92 proceedings, as reprinted in OOPS Messenger) | "Technical debt reached print in the OOPSLA 1992 experience report" (`inclusion_rationale`); "The OOPSLA experience report where the debt metaphor is first set down in print, dated 26 March 1992" (`body_of_work`); "he wrote the 1992 experience report that put the debt metaphor into print" (`background`). No OOPS Messenger, addendum, DOI or page range on the page. | [S:2] (c2 copy: "OOPSLA '92 Experience Report", dated March 26, 1992, debt passage quoted), [S:3] (Fowler's hedge) | SOURCED. c2 copy reopened: header "OOPSLA '92 Experience Report", "Ward Cunningham", "March 26, 1992". The formal citation the query sought is NOT ON PAGE and is not needed. If a later field wants it, Crossref has it: "The WyCash portfolio management system," Addendum to the proceedings on OOPSLA '92, pp. 29-30, DOI 10.1145/157709.157715. | https://c2.com/doc/oopsla92.html ; https://api.crossref.org/works/10.1145/157709.157715 |

**Counts:** SOURCED 1, NOT ON PAGE 0 (the citation detail the query sought is absent from the page
but the claim it served is sourced), FIXABLE 0, WRONG 0, UNVERIFIABLE 0.
