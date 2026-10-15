# Andrej Karpathy: web-search cap audit, 2026-10-02

Audit of the claims behind the refused searches listed in issue #88, against the live page
`src/content/thinkers/andrej-karpathy.md` (working tree identical to `origin/main` at audit time).
Every source below was reopened during this audit (WebFetch or curl); no web search was refused
during this audit.

**Check-first item:** the page does say he joined Anthropic, and the source holds. `background`:
"In May 2026 he joined Anthropic to work on pre-training, writing that he remains 'deeply
passionate about education' and will resume that work 'in time'; what becomes of Eureka Labs he
has not said." TechCrunch (2026-05-19) reproduces his post ("I've joined Anthropic ... I remain
deeply passionate about education and plan to resume my work on it in time"), places him on
pre-training under Nick Joseph, and says it is unclear whether he will continue with Eureka Labs.
CNBC [S:29a] returned HTTP 403 to this audit and was not reopened; TechCrunch alone carries every
element of the sentence.

| # | Refused query | Claim it was after | Page text (field) | Ledger line | Verdict | Evidence URL |
|---|---|---|---|---|---|---|
| 1 | `Andrej Karpathy "vibe coding" tweet February 2025 date coined` (2026-09-22) | Month and year of the coinage | "He coined the term in February 2025" (`named_frames[1].one_line_gloss`); "Vibe coding (February 2025)" (`inclusion_rationale`) | [S:10] (Wikipedia: "coined in February 2025"; status-ID decode gives 2025-02-02T23:17:15Z), with [S:9] | SOURCED. Confirms the 2026-09-25 remediation. Wikipedia reopened, sentence present; the decode re-run gives the same timestamp. The page states the month only, which is what the sources support. | https://en.wikipedia.org/wiki/Vibe_coding |
| 2 | `Andrej Karpathy joined Anthropic 2026 Eureka Labs` (2026-09-24) | He joined Anthropic in 2026, and the status of Eureka Labs | `background`, quoted above | [S:29], [S:29a] | SOURCED | https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/ |
| 3 | `"vibe coding" phrase used before 2025 earlier origin term history who coined` (2026-09-24) | No earlier holder of the term, so `attribution_kind: original` stands | `attribution_kind: original` for vibe coding; "He coined the term in February 2025" (`named_frames[1]`) | [S:9a] (Hacker News index, exact phrase, before 2025-02-01: 0 stories, 0 comments) with [S:11] (Willison: "The term was coined by Andrej Karpathy") | SOURCED. Index query re-run on 2026-10-02: stories 0, comments 0. Bound as the ledger states it: one index, one phrasing; evidence of no prior circulation, not proof of no prior utterance. | https://hn.algolia.com/api/v1/search?query=%22vibe%20coding%22&tags=story&numericFilters=created_at_i%3C1738368000 |
| 4 | `held-out test set drawn from same distribution shares dataset bias model passes evaluation Torralba Efros unbiased look at dataset bias` (2026-09-24, round 2 edits) | That a held-out set from the same distribution inherits the dataset's bias (Torralba and Efros 2011) | Not stated. The surviving clause is "a criterion passed on a held-out set says nothing about attacker-chosen inputs" (`extension`), which rests on adversarial examples, not on dataset bias. Torralba and Efros are named nowhere on the page or ledger. | None needed for the dataset-bias form. The surviving clause cites [S:31] (Goodfellow, Shlens, Szegedy, arXiv:1412.6572) | NOT ON PAGE (dataset-bias claim). The surviving clause is SOURCED: abstract reopened, definition quoted in [S:31] is verbatim. | https://arxiv.org/abs/1412.6572 |

**Counts:** SOURCED 3, NOT ON PAGE 1, FIXABLE 0, WRONG 0, UNVERIFIABLE 0.
