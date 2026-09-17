# Charity Majors: fact ledger

The machine-checkable half of the research record. `sources.md` is the prose a human reads; this
file is what `scripts/fact-ledger.ts` reads. One line per verified fact:

    - [S:n] claim | url | date checked

Every factual field on the page cites these IDs from `page-claims.md`. A claim with no line here
cannot reach the page, whoever proposed it, including a Council seat.

Backfilled 2026-09-17 from the verified entries in `sources.md`. This page is the worked example
the pipeline's drafting stage copies.

- [S:1] Co-founder and CTO of Honeycomb. Built and ran distributed systems at Parse (acquired by Facebook), at Facebook, and at Linden Lab on Second Life. Describes herself as an ops engineer for her whole career. | https://www.honeycomb.io/teammember/charity-majors/ | 2026-09-17
- [S:2] Honeycomb was founded in 2016 by Majors and Christine Yen, out of their experience piping Parse data into Scuba after Facebook acquired Parse. | https://thenewstack.io/charity-majors-honeycomb-tech-founder-odyssey/ | 2026-09-17
- [S:3] Rudolf E. Kálmán introduced observability for linear dynamic systems in "On the general theory of control systems" (1960): how well internal states can be inferred from external outputs. | https://en.wikipedia.org/wiki/Observability | 2026-09-17
- [S:4] "Observability is a Many-Splendored Definition" (charity.wtf, 2020-03-03) defines observability as the ability to ask any question of a system without having to predict that question in advance, and says "at its core, observability is about these unknown-unknowns." | https://charity.wtf/2020/03/03/observability-is-a-many-splendored-thing/ | 2026-09-17
- [S:5] "Scuba: Diving into Data at Facebook," Proceedings of the VLDB Endowment 6(11), 2013. Facebook's in-memory distributed store for ad hoc analysis, ingesting millions of events per second and answering interactive queries over live data. | https://research.facebook.com/publications/scuba-diving-into-data-at-facebook/ | 2026-09-17
- [S:6] Majors credits Scuba by name, calling it "aggressively hostile to users" while doing "one thing really well, which is let you slice and dice in real time on dimensions that have very high cardinality." | https://thenewstack.io/charity-majors-honeycomb-tech-founder-odyssey/ | 2026-09-17
- [S:7] "There Is Only One Key Difference Between Observability 1.0 and 2.0" (charity.wtf, 2024-11-19) argues you cannot store data across both multiple pillars and a single source of truth, and that metrics, logs and traces can be derived from one record. | https://charity.wtf/2024/11/19/there-is-only-one-key-difference-between-observability-1-0-and-2-0/ | 2026-09-17
- [S:8] "It's Time to Version Observability" (Honeycomb blog, 2024-12-02) sets the older generation, which aggregates at write time, against arbitrarily wide structured log events aggregated at read time. | https://www.honeycomb.io/blog/time-to-version-observability-signs-point-to-yes | 2026-09-17
- [S:9] "Yes, I Test in Production (And So Do You)," QCon San Francisco 2018: "Trying to mirror your staging environment to production is a fool's errand. Just give up." | https://www.infoq.com/presentations/testing-production-2018/ | 2026-09-17
- [S:10] "The Engineer/Manager Pendulum" (charity.wtf, 2017-05-11) argues the best frontline managers are never more than two or three years removed from hands-on work, and that management is a change of profession rather than a rung above engineering. | https://charity.wtf/2017/05/11/the-engineer-manager-pendulum/ | 2026-09-17
- [S:11] Observability Engineering: Achieving Production Excellence (O'Reilly, 2022), co-written with Liz Fong-Jones and George Miranda, now in a second edition. | https://www.honeycomb.io/observability-engineering-oreilly-book | 2026-09-17
- [S:12] Laban Eilers, "Are we ready for Observability 2.0?" (2025-01-30), engages her position directly and credits her by name, arguing from the cost gap between metrics and wide events and from what sampling does to forensic use. | https://labaneilers.com/are-we-ready-for-observability-2.0 | 2026-09-17
