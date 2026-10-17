---
thinker_slug: martin-fowler
chapter_number: 0
title: 'Preface: Who Is Martin Fowler?'
summary: >
  Compressed bio, TLDR of what he advocates, key accomplishments named,
  what he is not, where to find him. The on-ramp before Part 1.
last_updated: 2026-10-15
---

If you have worked in software for more than five years, you have read Martin Fowler whether you noticed or not.

You read him every time someone on your team says "let's refactor that": his 1999 book on the practice is the one he says has had "a high impact on the world of software development". You read him when someone says *bounded context* or *microservice* or *feature toggle* or *code smell* or *tech debt* or *continuous delivery*. A lot of the vocabulary your engineering org uses to talk about its own work, he either popularized or codified into a form that could be passed around without losing its shape.

He has been doing this since roughly 1996. Long enough that most engineers under forty have never worked in a world where his vocabulary was absent.

## The compressed bio

Martin Fowler is a British software engineer, born in Walsall in 1963, who has spent his career as a consultant and writer. He worked for Coopers & Lybrand and a small company called Ptech, became an independent consultant in 1991, moved to Massachusetts in 1994, and joined the consultancy ThoughtWorks in 2000. He has been ThoughtWorks's Chief Scientist for over two decades, a title whose irony he says he enjoys: "I'm not chief of anybody and don't do any science". He sees his main role as "helping my colleagues to capture and promulgate what we've learned about software development".

He is one of the seventeen original signatories of the Agile Manifesto (2001).

He is author of *Refactoring: Improving the Design of Existing Code* (1999, with Kent Beck, John Brant, William Opdyke, and Don Roberts; 2nd ed 2018, with Kent Beck), and of *Patterns of Enterprise Application Architecture* (2002), *Analysis Patterns* (1996), *UML Distilled* (multiple editions), *Domain-Specific Languages* (2010, with Rebecca Parsons), *NoSQL Distilled* (2012, with Pramod Sadalage), and co-author of *Planning Extreme Programming* (2000, with Kent Beck). He wrote the forewords to Eric Evans's *Domain-Driven Design* and Jez Humble and Dave Farley's *Continuous Delivery*.

He has written a bliki (a hybrid of blog and wiki) at `martinfowler.com` since 2003. Ward Cunningham gave his version the name, and by Fowler's own account the word and the form were already in use elsewhere; the site itself started as a home for articles he had written for other purposes. The bliki is itself part of the corpus, not paratext; he uses it as the medium through which his thinking evolves publicly.

He retired from speaking in 2021 and still writes for and edits `martinfowler.com`.

## The TLDR of what he advocates

If you handed Fowler a microphone for thirty seconds and asked him to summarize his career, the version that survives compression is something like this:

*Internal software quality is not in tension with speed; internal quality is the source of speed. The way to get internal quality is to evolve practice in public: name the moves, share the vocabulary, run the build-test-deploy loop tight, place the boundaries between components where change actually wants to flow, model the domain in the same language the team already uses with the customer, and write the practice down as you discover it so other people can pick it up.*

He has spent twenty-five years arguing this six different ways. The economic argument (quality IS speed). The vocabulary argument (name the implicit). The practice argument (evolution over planning). The boundary argument (place seams where change flows). The flow argument (continuous delivery as default). The modeling argument (language as model). The lattice in this book is one walk through all six.

## Key accomplishments, named

- **Agile Manifesto, 2001.** One of seventeen original signatories alongside Kent Beck, Ward Cunningham, Andy Hunt, Dave Thomas, Robert Martin, and others.
- ***Refactoring*, 1999.** Credited "With Kent Beck, John Brant, William Opdyke, and Don Roberts". The book Fowler says has had "a high impact on the world of software development". The word is older: Fowler places the practice's foundations in the Smalltalk community, reports that its creators did not know where the term came from, and cites Leo Brodie's *Thinking Forth* (1984) as its first known printed use. William Opdyke wrote "the first thesis on refactoring" in 1992. The 2018 second edition, again "with Kent Beck", moved from Java to JavaScript.
- ***Patterns of Enterprise Application Architecture*, 2002.** Written with Dave Rice, Matthew Foemmel, Edward Hieatt, Robert Mee and Randy Stafford. The catalog that sets out *Domain Model*, *Transaction Script*, *Active Record*, *Data Mapper*, *Unit of Work*, *Service Layer* and *Repository* under those names, among forty or so patterns.
- ***Continuous Integration*, 2000 article, rewritten 2006 and revised 2024.** Fowler credits the practice to Kent Beck, who "defined the practice" within Extreme Programming in the 1990s.
- ***Microservices*, 2014 article with James Lewis.** Followed in 2015 by Fowler's bliki entries Microservice Premium, aimed at teams "too eager to embrace microservices", and Monolith First. Neither entry calls itself a correction of the article.
- ***Domain-Specific Languages*, 2010.** With Rebecca Parsons.
- **Named, or carried with the originators credited**: strangler fig application (his name and metaphor, for a practice his 2004 post credits to a project Chris Stevenson was involved in), the technical debt quadrant (his division of Ward Cunningham's metaphor), the bliki (named by Cunningham), code smell (coined by Kent Beck), the test pyramid (Mike Cohn's, from *Succeeding with Agile*, 2009; Fowler's 2012 bliki entry describes it, and the etymology he added in 2017 credits Cohn, notes that Cohn first drew it in conversation with Lisa Crispin, and says Jason Huggins reached the same idea independently), branch by abstraction (a technique Fowler says "has been around for a long time"; Paul Hammant introduced the name while arguing for trunk-based development, and Fowler reports that Hammant credits Stacy Curl with "originally coming up with it"), and the inverse Conway maneuver (coined by Jonny LeRoy and Matt Simons; Fowler sets it out as one of three responses to Conway's Law).
- **Chief Scientist at ThoughtWorks** since 2000.

## What he is not

He is not a methodology evangelist in the sense of having a branded process he sells. In his words he has "mostly avoided any business leadership responsibilities", and he has served on Thoughtworks's primary global leadership team since 2017. He does not write production code for a living, though he has and still does.

He has been careful, across his entire career, to attribute the ideas he carries: Kent Beck for continuous integration, code smell and TDD, William Opdyke and the Smalltalk community for refactoring, Ward Cunningham for tech debt and wiki, Christopher Alexander for the pattern-language form, the Gang of Four for the structured pattern form of the book that, in his words, "really launched patterns into the software world", Eric Evans for domain-driven design, the architects who discussed the term microservice at a 2011 workshop near Venice and settled on the name in 2012 (in the article he wrote with James Lewis, which also names Lewis, Fred George, Adrian Cockcroft and others for early work on the style), Greg Young for CQRS, Jez Humble and Dave Farley for continuous delivery. Reading him without reading them is reading half a conversation.

The discipline of attribution is itself one of his arguments, not a politeness. Software thinking, in his frame, is a public conversation across generations. Carrying an idea forward without obscuring its origin is part of the work.

## Where to find him

- **`martinfowler.com`**: the canonical hub. Everything he writes lives here.
- **`martinfowler.com/bliki/`**: the bliki itself, with public revision history. The entry index is alphabetical; start with `StranglerFigApplication`, `BoundedContext`, `FeatureFlag` (formerly `FeatureToggle`), or `TechnicalDebtQuadrant`.
- **`martinfowler.com/articles/`**: the long-form work. *Is High Quality Software Worth the Cost?* (2019), *Microservices* (2014), *Continuous Integration* (2000, rewritten 2006), *Mocks Aren't Stubs* (2004, revised 2007) are the load-bearing ones.
- **`martinfowler.com/books/`**: bibliography with links to every book.
- **`martinfowler.com/talks/`**: keynote video links.
- **`thoughtworks.com`**: his employer.
- **YouTube**: search *Martin Fowler keynote*. The *Refactoring* (2018 launch tour), *Software Design in the 21st Century*, and the *Is TDD Dead?* panel series with Kent Beck and DHH are the most-referenced.
- **GOTO Conferences**: the channel has multiple recorded keynotes.
- **`@martinfowler`** on Twitter/X: historically active, largely retired now.

## What this book is not

This is not a Fowler biography. It is a *concept lattice*: a map of the argument structure under the vocabulary you have probably been using without knowing where most of it came from. The bio above is enough to start. The corpus inventory and the conceptual mapping are where to go for completeness. The long walk in Pass Two is how the argument unfolds in detail.

If you want a single pre-reading recommendation before opening Part 1, it is the 2019 article *Is High Quality Software Worth the Cost?*. That article is the keystone. Everything else hangs off it.
