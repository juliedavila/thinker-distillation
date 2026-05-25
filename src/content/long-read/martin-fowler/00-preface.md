---
thinker_slug: martin-fowler
chapter_number: 0
title: 'Preface — Who Is Martin Fowler?'
summary: >
  Compressed bio, TLDR of what he advocates, key accomplishments named,
  what he is not, where to find him. The on-ramp before Part 1.
last_updated: 2026-05-23
---

If you have worked in software for more than five years, you have read Martin Fowler whether you noticed or not.

You read him every time someone on your team says "let's refactor that," because the word in its current meaning is his. You read him every time someone draws the test pyramid on a whiteboard. You read him when someone says *bounded context* or *microservice* or *feature toggle* or *code smell* or *tech debt* or *continuous delivery*. A lot of the vocabulary your engineering org uses to talk about its own work, he either named, popularized, or codified into a form that could be passed around without losing its shape.

He has been doing this since roughly 1996. Long enough that most engineers under forty have never worked in a world where his vocabulary was absent.

## The compressed bio

Martin Fowler is a British software engineer, born in Walsall in 1963, who has spent his career as a working consultant and writer rather than as a working executive or a working academic. He started out in London building enterprise systems in the early 1990s, moved to the United States in the mid-90s, and joined the consultancy ThoughtWorks in 2000. He has been ThoughtWorks's Chief Scientist for over two decades — a role with no executive authority and no operational responsibility, designed expressly to leave him free to think and write.

He is one of the seventeen original signatories of the Agile Manifesto (2001).

He is co-author of *Refactoring: Improving the Design of Existing Code* (1999, with Kent Beck, John Brant, William Opdyke, and Don Roberts; 2nd ed solo in 2018), author of *Patterns of Enterprise Application Architecture* (2002), *Analysis Patterns* (1996), *UML Distilled* (multiple editions), *Domain-Specific Languages* (2010, with Rebecca Parsons), *NoSQL Distilled* (2012, with Pramod Sadalage), and co-author of *Planning Extreme Programming* (2000, with Kent Beck). He wrote the forewords to Eric Evans's *Domain-Driven Design* and Jez Humble and Dave Farley's *Continuous Delivery* — two of the most influential industry books of the 2000s, both carried wider by his endorsement.

He coined the term *bliki* — a hybrid of blog and wiki — and has been publishing under that form at `martinfowler.com` since the late 1990s. The bliki is itself part of the corpus, not paratext; he uses it as the medium through which his thinking evolves publicly, marking entries with maturity badges (`growing`, `stable`) so readers can tell whether he is still figuring something out or has settled.

He gives keynotes more than he writes new books at this point. The keynote that became most-cited in the last decade is the one that opens the *Microservices* article with James Lewis (2014). The keynote that the next generation of engineers will probably remember is whichever one of his late-career talks on internal quality finally lands as canonical.

## The TLDR of what he advocates

If you handed Fowler a microphone for thirty seconds and asked him to summarize his career, the version that survives compression is something like this:

*Internal software quality is not in tension with speed; internal quality is the source of speed. The way to get internal quality is to evolve practice in public — name the moves, share the vocabulary, run the build-test-deploy loop tight, place the boundaries between components where change actually wants to flow, model the domain in the same language the team already uses with the customer, and write the practice down as you discover it so other people can pick it up.*

He has spent twenty-five years arguing this six different ways. The economic argument (quality IS speed). The vocabulary argument (name the implicit). The practice argument (evolution over planning). The boundary argument (place seams where change flows). The flow argument (continuous delivery as default). The modeling argument (language as model). The lattice in this book is one walk through all six.

## Key accomplishments, named

- **Agile Manifesto, 2001.** One of seventeen original signatories alongside Kent Beck, Ward Cunningham, Andy Hunt, Dave Thomas, Robert Martin, and others.
- ***Refactoring*, 1999.** Co-authored with Kent Beck (and Brant, Opdyke, Roberts). The book that gave the word *refactoring* its current technical meaning. Second edition rewritten by Fowler solo in JavaScript, 2018.
- ***Patterns of Enterprise Application Architecture*, 2002.** The catalog that named *Domain Model*, *Transaction Script*, *Table Module*, *Active Record*, *Data Mapper*, *Unit of Work*, *Service Layer*, *Repository*, and dozens of others. The book that built the vocabulary most enterprise software is still discussed in.
- ***Continuous Integration*, 2006 article.** The original definitive statement of CI as a named discipline.
- ***Microservices*, 2014 article with James Lewis.** The defining article. Later self-flagged for being too lenient on operational cost — the public-revision discipline at work.
- ***Domain-Specific Languages*, 2010.** With Rebecca Parsons. The book that gave the DSL distinction its current shape.
- **Coined or popularized**: bliki, code smell (with Beck), test pyramid, tech debt quadrant (extending Cunningham's 1992 metaphor), feature toggle (taxonomy with Pete Hodgson), strangler fig application, branch by abstraction, polyglot persistence (with Sadalage), inverse Conway maneuver.
- **Chief Scientist at ThoughtWorks** since 2000. Author of the ThoughtWorks Technology Radar in collaboration with Rebecca Parsons, James Lewis, and others. One of the most cited working software writers of the last twenty-five years.

## What he is not

He is not a methodology evangelist in the sense of having a branded process he sells. He is not an executive. He does not write production code for a living, though he has and still does.

He has been careful, across his entire career, to attribute the ideas he carries: Kent Beck for refactoring and TDD, Ward Cunningham for tech debt and wiki, Christopher Alexander for the pattern-language form, the Gang of Four for the pattern catalog form, Eric Evans for domain-driven design, James Lewis for the microservices definition, Greg Young for CQRS and event sourcing, Jez Humble and Dave Farley for continuous delivery. Reading him without reading them is reading half a conversation.

The discipline of attribution is itself one of his arguments, not a politeness. Software thinking, in his frame, is a public conversation across generations. Carrying an idea forward without obscuring its origin is part of the work.

## Where to find him

- **`martinfowler.com`** — the canonical hub. Everything he writes lives here.
- **`martinfowler.com/bliki/`** — the bliki itself, with maturity badges and public revision history. The entry index is alphabetical; start with `IsQualitySoftwareWorthTheCost`, `StranglerFigApplication`, `BoundedContext`, `FeatureToggle`, or `TechDebtQuadrant`.
- **`martinfowler.com/articles/`** — the long-form work. *Microservices* (2014), *Continuous Integration* (2006), *Mocks Aren't Stubs* (2007) are the load-bearing ones.
- **`martinfowler.com/books/`** — bibliography with links to every book.
- **`martinfowler.com/talks/`** — keynote video links.
- **`thoughtworks.com`** — his employer. The Tech Radar (`thoughtworks.com/radar`) is one of his ongoing artifacts.
- **YouTube** — search *Martin Fowler keynote*. The *Refactoring* (2018 launch tour), *Software Design in the 21st Century*, and the *Is TDD Dead?* panel series with Kent Beck and DHH are the most-referenced.
- **GOTO Conferences** — he speaks regularly; the channel has multiple recorded keynotes.
- **`@martinfowler`** on Twitter/X — historically active, largely retired now.

## What this book is not

This is not a Fowler biography. It is a *concept lattice* — a map of the argument structure under the vocabulary you have probably been using without knowing where most of it came from. The bio above is enough to start. The corpus inventory and the conceptual mapping are where to go for completeness. The long walk in Pass Two is how the argument unfolds in detail.

If you want a single pre-reading recommendation before opening Part 1, it is the bliki entry `IsQualitySoftwareWorthTheCost`. That essay is the keystone. Everything else hangs off it.
