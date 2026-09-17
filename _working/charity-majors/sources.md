# Charity Majors: verified sources (research in progress)

Research pass started 2026-09-17 for candidate issue #13, with Julie's direction: she is the authority to test the open questions from the "Append, Don't Overwrite" concept page against. Treat the May 2026 candidate case as unverified.

## Career (verify education claim before use)

- Co-founder and CTO of Honeycomb. Before that she built and ran distributed systems at Parse (acquired by Facebook), at Facebook, and at Linden Lab on Second Life. Describes herself as an ops engineer for her whole career. Grew up in rural Idaho, dropped out of college, came to tech from music. [Honeycomb team page](https://www.honeycomb.io/teammember/charity-majors/)
- Co-author of *Observability Engineering: Achieving Production Excellence* with Liz Fong-Jones and George Miranda (O'Reilly, 2022-05-06), and a second edition. Also co-author of *Database Reliability Engineering* (O'Reilly). [Amazon](https://www.amazon.com/Observability-Engineering-Achieving-Production-Excellence/dp/1492076449), [O'Reilly 2nd ed](https://www.oreilly.com/library/view/observability-engineering-2nd/9781098179915/)
- Blog: charity.wtf. Honeycomb blog carries much of the same writing.

## Frames verified in primary text

- **Observability 1.0 versus 2.0** ("It's Time to Version Observability," Honeycomb, 2024-12-02, and "There Is Only One Key Difference Between Observability 1.0 and 2.0," charity.wtf, 2024-11-19). 1.0 is the "three pillars" generation, storing data across "metrics, logs, and traces," with "many sources of truth, in many different formats" and "aggregation at write time." 2.0 is "built based on arbitrarily-wide structured log events" with "a single source of truth," aggregating at read time. Key claims: "You cannot simultaneously store your data across both multiple pillars and a single source of truth." "You can derive metrics, or logs, or traces, but it's all the same data." On cost: "You pay to store your data once. As your costs go up, the value you get out goes up too." She has since expressed reservations about the "2.0" label itself (verify with a primary quote).
- **Arbitrarily wide structured events** and **high cardinality** as the unit of telemetry: slicing on dimensions such as build id, feature flag and user id. Cardinality management is the cost problem in 1.0 tooling.
- **The engineer/manager pendulum** (charity.wtf, 2017-05-11): "The best frontline eng managers in the world are the ones that are never more than 2-3 years removed from hands-on work, full time down in the trenches. The best individual contributors are the ones who have done time in management." Management is "a change of profession," a lateral move. Already cited on the Fournier page as a `parallel` edge.

## Antecedents

- **Observability** comes from control theory, introduced by Rudolf E. Kálmán for linear dynamic systems ("On the general theory of control systems," 1960): how well internal states can be inferred from external outputs. [Wikipedia](https://en.wikipedia.org/wiki/Observability)
- **The "three pillars"** framing she argues against was popularized by Cindy Sridharan (*Distributed Systems Observability*, O'Reilly, and her September 2017 essay) and Peter Bourgon (2017). Any page must credit the pillars to them, never to Majors, and must not credit Majors with coining "observability."

## Uptake (inclusion filter, in progress)

- **ThoughtWorks Technology Radar, October 2024, ring: Assess.** "Observability 2.0 represents a shift from traditional, disparate monitoring tools to a unified approach that leverages structured, high-cardinality event data in a single data store." The entry does not credit Majors or Honeycomb by name, which is itself the strongest kind of uptake evidence: the vocabulary travels without its author attached. [Radar](https://www.thoughtworks.com/radar/techniques/observability-2-0)
- Independent write-ups and podcast coverage: Pragmatic Engineer newsletter, GOTO, Screaming in the Cloud, plus vendor explainers from Greptime, SUSE and Sumo Logic. Vendor explainers count as circulation of the vocabulary rather than endorsement.
- "The engineer/manager pendulum" already travels: it is the counterposition the Fournier page carries, and it is cited in engineering-career writing.

## Pending

- Primary text for: test in production, high cardinality as a named frame, deploy cadence writing, "observability is about unknown-unknowns."
- Her reservations about the "2.0" label, in her own words.
- A named critic with a durable artifact. Baron Schwartz writes in the same space ("Monitoring Is Not Observability") but no direct critique of her position surfaced yet. Skeptical takes found so far are blog-level (labaneilers, "Are we ready for Observability 2.0?") and vendor counter-marketing (Sumo Logic, "don't repeat sins of the past").
- Education: sources say she dropped out of college; no institution verified. Leave it off the page unless a primary source confirms.

## Why this matters for the concept page (Julie's questions)

Her 2.0 argument is structurally the same move the concept page describes: keep one record of what happened, and derive every view from it. Honeycomb's version of the record is the wide structured event, where event sourcing's version is the state-changing event and Datomic's is the fact. That makes her a candidate third holder of `append-dont-overwrite`, and it bears directly on Julie's log-beside-the-system versus events-are-the-system question, since her position is that the event record *is* the source of truth and metrics are derived from it.

## Pending items, now verified (2026-09-17)

- **Her definition of observability** ("Observability is a Many-Splendored Definition," charity.wtf, 2020-03-03): "Can you understand what is happening inside the system, can you understand ANY internal state the system may get itself into, simply by asking questions from the outside?" And: "the ability to ask any question of your systems, understand any user's behavior or subjective experience, without having to predict that question, behavior or experience in advance." On unknown-unknowns: "At its core, observability is about these unknown-unknowns." On vendors: "Big Monitoring is indeed actively trying to define observability down to 'metrics, logs and traces'." [link](https://charity.wtf/2020/03/03/observability-is-a-many-splendored-thing/)
- **Against the three pillars:** "THERE ARE NO THREE PILLARS OF OBSERVABILITY," and elsewhere "the pillars are bullshit," with the argument that metrics, logs and traces are "a random grab bag" and that the model stores every request several times in different tools. The social-media post is not a durable artifact on its own; use the blog and book statements. [thread mirror](https://threadreaderapp.com/thread/1044666259898593282.html)
- **Her retreat from the "2.0" label:** vendors "got really bristly about having '1.0' retroactively applied," which "reads like a subtle diss." She now prefers "the multiple pillars model" and "the unified or consolidated storage model, sometimes called o11y 2.0." Reported in an interview with Dotan Horovits; find a first-person source before quoting her on the page. [Horovits](https://horovits.medium.com/end-of-year-observability-retrospective-with-charity-majors-94f80fff77e8)
- **Test in production:** talk "Yes, I Test in Production (And So Do You)," QCon SF 2018. "Trying to mirror your staging environment to production is a fool's errand. Just give up." [InfoQ](https://www.infoq.com/presentations/testing-production-2018/), [Honeycomb](https://www.honeycomb.io/blog/yes-i-test-in-production-and-so-do-you)
- **Books free to read:** *Observability Engineering* is offered as a complimentary O'Reilly ebook through Honeycomb, now in a second edition described as almost entirely rewritten and twice as long. Useful for direct quotes if the page needs them. [Honeycomb](https://www.honeycomb.io/observability-engineering-oreilly-book)
- **Where she publishes:** charity.wtf (now a Substack), the Honeycomb blog, and conference talks. Bluesky at @charity.wtf.

## Critics and counterpositions

- **Laban Eilers, "Are we ready for Observability 2.0?" (2025-01-30).** A named, durable critique that engages her position directly and credits her by name ("the coiner of the term"). Core arguments: "The reason we still need metrics comes down to the *enormous* discrepancy in cost between metrics vs wide events"; sampling, which affordability requires, undermines forensic use and forces logs back as a backup; tracing tooling lacks logging's simplicity; most infrastructure emits only logs and metrics; the OpenTelemetry ecosystem still has unsolved problems such as context propagation. This is the page's `critiques` edge candidate, `secondary` (no page here). [link](https://labaneilers.com/are-we-ready-for-observability-2.0)
- **Cindy Sridharan** holds the position Majors argues against: her O'Reilly book presents logs, metrics and traces as the three pillars. A `parallel` or `antecedent` edge, since she is not critiquing Majors.
- **Ben Sigelman** (Lightstep) also rejects the pillars ("Three Pillars with Zero Answers"), so he is a parallel voice rather than a critic. Verify his argument before using it.
- **Vendor counter-marketing** (Sumo Logic, "Observability 2.0: don't repeat sins of the past") is not a durable critique by the site's standard. Omit.
- **Conflict of interest to state plainly:** she is CTO and co-founder of Honeycomb, which sells the unified-storage product her argument recommends. The page must say so, as the Saxe research required for Abundant Security.

## Scuba: the antecedent for wide structured events (verified 2026-09-17)

- **Scuba** is Facebook's in-memory, distributed database for ad hoc analysis, published as "Scuba: Diving into Data at Facebook," *Proceedings of the VLDB Endowment* 6(11), 2013. It ingests millions of events per second and answers interactive queries over live data. [Meta Research](https://research.facebook.com/publications/scuba-diving-into-data-at-facebook/), [VLDB via ACM](https://dl.acm.org/doi/abs/10.14778/2536222.2536231)
- **Honeycomb came out of using it.** Majors and Christine Yen were engineers at Parse, which Facebook acquired. After the acquisition they piped Parse data into Scuba, which Majors describes as "aggressively hostile to users" while doing "one thing really well, which is let you slice and dice in real time on dimensions that have very high cardinality." Honeycomb was founded in 2016 by Majors and Yen, inspired by that experience. [The New Stack](https://thenewstack.io/charity-majors-honeycomb-tech-founder-odyssey/), [Wikipedia: Honeycomb](https://en.wikipedia.org/wiki/Honeycomb_(company))
- She presented the Scuba paper herself at Papers We Love, QCon NYC edition. [Papers We Love](https://paperswelove.org/videos/papers-we-love-qcon-nyc-edition-charity-majors-on-scuba-diving-into-data-at-face/), [slides](https://speakerdeck.com/paperswelove/charity-majors-on-scuba-diving-into-data-at-facebook)
- **Attribution consequence:** wide structured events with high-cardinality querying is `extended`, not `original`. The Scuba paper's authors are the antecedent, and Majors credits the tool by name. **Christine Yen** must be named as Honeycomb's co-founder wherever the product carries the argument.

## The label retreat, now first-person (verified 2026-09-17)

"Another observability 3.0 appears on the horizon," charity.wtf, **2025-03-24**, in her own words:
- "I am going to mostly avoid referring to the multiple pillars model as 'o11y 1.0', and instead I will call it the … multiple pillars model."
- She will call the other one "the unified or consolidated storage model, sometimes called 'o11y 2.0'."
- Why: "a bunch of people — vendors mostly, but not entirely — got really bristly about having '1.0' retroactively applied to describe the multiple pillars model. It reads like a subtle diss, or devaluation of their tools."
- Her reason: "One of the principles I live my life by is that you should generally call people, or groups of people, what they want to be called."

This replaces the secondhand Horovits account. The page can now state the retreat as her own stated position, dated March 2025, with this post as the source. [link](https://charity.wtf/2025/03/24/another-observability-3-0-appears-on-the-horizon/)

## Career ordering (round 2 grounding flag, 2026-09-17)

Her Honeycomb bio lists the three employers without ordering them: "building and managing massive distributed systems at Parse (acquired by Facebook), Facebook, and Linden Lab building Second Life." The page's order (Linden Lab, then Parse, then Facebook through the acquisition) follows from Second Life predating Parse, and from Parse being acquired by Facebook while she was there. No source states the sequence directly, so the page avoids dates for it. [Honeycomb team page](https://www.honeycomb.io/teammember/charity-majors/)
