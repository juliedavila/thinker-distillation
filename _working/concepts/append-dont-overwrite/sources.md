# Concept candidate: append, don't overwrite (working name)

Research pass 2026-09-16, Path A (Julie). Question: does a second holder on the site hold the idea of recording changes as an accumulating history instead of overwriting state, so it can be a concept page under SCHEMA section 6.4?

## Holder 1: Rich Hickey (on site, MR !10)

- Frame `place-oriented-programming` (extended, with John Backus) and `value-identity-state-time` (extended, with Whitehead). See `_working/rich-hickey/sources.md`. Datomic stores facts and never updates in place; excision is the escape hatch.

## Holder 2 candidate: Martin Fowler (on site), Event Sourcing

- **"Event Sourcing,"** martinfowler.com/eaaDev, **12 December 2005.** Definition: "Capture all changes to an application state as a sequence of events." Audit: "it's easy to serialize the events to make an Audit Log"; "An audit trail is useful for audit." **Draft status, in Fowler's own words:** part of the "Further Enterprise Application Architecture development writing that I was doing in the mid 2000's ... this material is very much in draft form." It credits no originator. [link](https://martinfowler.com/eaaDev/EventSourcing.html)
- **"What do you mean by 'Event-Driven'?",** **7 February 2017** (also a GOTO Chicago 2017 keynote). "Whenever we make a change to the state of a system, we record that state change as an event, and we can confidently rebuild the system state by reprocessing the events at any time in the future." Analogies: "The log of all the commits is the event store and the working copy of the source tree is the system state"; "accounting transactions are an event source for account balances." Lists costs: replay against external systems, and schema evolution. [link](https://martinfowler.com/articles/201701-event-driven.html)

## Attribution (not settled)

- **Greg Young** popularized event sourcing, alongside CQRS, in the domain-driven design community from the late 2000s. Secondary sources disagree on who first used the term; some call Young the inventor and others say Fowler introduced the term. Fowler's December 2005 page is the earliest dated written description found. [Kurrent, Young talk transcript 2014](https://www.kurrent.io/blog/transcript-of-greg-youngs-talk-at-code-on-the-beach-2014-cqrs-and-event-sourcing), [InfoQ 2014](https://www.infoq.com/news/2014/09/greg-young-event-sourcing/)
- **Young himself says the idea is old:** systems were built this way on mainframes before SQL databases; "Event Sourcing ... is a very very old concept." Accounting ledgers and double-entry bookkeeping are the usual antecedent. [Young's blog](https://gregfyoung.wordpress.com/tag/event-sourcing/)
- **Draft attribution for a Fowler frame:** `distributed`, primary author Fowler (earliest dated write-up found), with Greg Young as co-originator (popularized it with CQRS), and accounting ledgers named in the gloss. Needs one more check: Young's earliest public use of the term.

## Other holders for later (not on site)

- Pat Helland, "Immutability Changes Everything" (CIDR 2015). Verify before use.
- Martin Kleppmann, *Designing Data-Intensive Applications* (2017), and "turning the database inside out." Verify before use.
- Ben Moseley and Peter Marks, "Out of the Tar Pit" (2006), on state as the main source of complexity. Already an edge on Hickey's page.

## Fit against SCHEMA 6.4

- Two independent on-site holders: yes, if Fowler gains an event-sourcing frame.
- Varied attribution: Hickey `extended`, Fowler `distributed`. Passes.
- Join mechanics: holders are joined by a shared `concept_slug`. Precedent: Brooks's "Brooks's Law" frame uses the `coordination-headwind` slug. Hickey's PLOP frame would move to the shared slug, which is allowed because the page is not yet merged. Fowler's new frame would use the same slug.
- Not doctrine: holds only if the page is about the genealogy (ledgers → Backus → Fowler/Young → Hickey) and its limits. Julie's security reading (auditability, non-repudiation) goes in `julie_reading`, which she writes.

## Greg Young, earliest public use (checked 2026-09-17)

- Interview with Eric Evans at **QCon SF 2007** (posted 2008-06-24), described by the DDD Community as "one of Greg's earliest explanations of Event Sourcing." It credits no one. [dddcommunity.org](https://www.dddcommunity.org/event-sourcing/evans_2007/)
- A search result claiming Young "first talked about event sourcing in 2006 at QCon San Francisco" is **rejected**: QCon SF began in 2007.
- **Conclusion:** Fowler's 12 December 2005 draft is the earliest dated write-up found. Fowler's frame: `distributed`, primary author Fowler, Greg Young as co-originator, ledgers named as the older model. Neither Fowler nor Young claims to have invented the underlying idea.

## Name

Julie chose "Append, don't overwrite" (2026-09-17). Shared `concept_slug`: `append-dont-overwrite`.
