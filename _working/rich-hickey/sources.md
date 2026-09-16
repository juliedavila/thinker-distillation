# Rich Hickey: verified sources

Research pass 2026-09-16. Every fact below was checked against the linked source. Julie added the candidate directly (issue #15), and the working case in that issue was written the same day from memory, so corrections are marked. Talk quotes come from the community transcripts at [matthiasn/talk-transcripts](https://github.com/matthiasn/talk-transcripts/tree/master/Hickey_Rich), which link each talk's video. Career facts come mainly from Hickey's own HOPL paper.

## Corrections and refinements to the candidate issue

1. **Cognitect date.** Wikipedia gives 2012; Hickey's HOPL paper gives 2013 ("In 2013 we formed Cognitect, a merger of Metadata Partners ... and Relevance"). The primary source wins: 2013.
2. **Datomic.** Work started in 2010 and it was released in 2012. Hickey "implemented Datomic, with Stuart Halloway and others." Say "Hickey led Datomic, built with Stuart Halloway and others"; "co-creator" overstates the attribution in either direction.
3. **Current status.** Distinguished Engineer at Nubank from 2020 until he announced his retirement from commercial software development in August 2023. He still guides Clojure's direction.
4. **"Maybe Not"** was Clojure/conj, November 2018 (the issue did not list it).
5. **"Incidental complexity" is Hickey's word.** "Out of the Tar Pit" (Moseley and Marks, 2006) uses "accidental" 106 times and "incidental" zero times. Hickey renamed Brooks's accidental complexity and gave it his own gloss ("incidental is Latin for 'your fault'").

## Career

- 1980s–2000s: lead and primary architect in C++, then Java and C#, on "scheduling systems, broadcast automation, yield management, audio recognition, exit poll tabulation and election projection." Taught advanced C++ as an adjunct at NYU in the mid-1990s. Worked on a national exit poll system for the US. Became an independent consultant in 2000. [HOPL paper §2](https://doi.org/10.1145/3386321)
- Pre-Clojure Lisp interop projects: DotLisp (2003), jFli (2004), Foil (2005, with Eric Thorsen). [HOPL §2](https://doi.org/10.1145/3386321)
- 2005: "I started working on Clojure in 2005, during a sabbatical I funded out of retirement savings." Clojure released in 2007, 1.0 in May 2009. "I never returned from my 'sabbatical'." [HOPL §1, §3](https://doi.org/10.1145/3386321)
- Datomic: started in 2010, released in 2012, built in Clojure with Stuart Halloway and others. Hickey designed its Datalog query language. [HOPL §4.6](https://doi.org/10.1145/3386321)
- Cognitect, 2013: a merger of Metadata Partners (formed around Datomic) and Relevance (a consultancy founded by Stuart Halloway and Justin Gehtland). CTO. [HOPL §4.7](https://doi.org/10.1145/3386321), [Wikipedia](https://en.wikipedia.org/wiki/Rich_Hickey)
- Nubank acquired Cognitect in 2020. [Nubank](https://building.nubank.com/nubank-acquires-cognitect/)
- August 2023: retired from Nubank. Alex Miller and Michael Fogus continue Clojure work under Hickey's guidance, and Stuart Halloway leads Datomic. [Nubank, Aug 4 2023](https://building.nubank.com.br/clojures-journey-at-nubank-a-look-into-the-future/), [HN](https://news.ycombinator.com/item?id=37000733)
- Education: not verified. The page leaves it out.

## Written work

- **"A History of Clojure,"** *Proc. ACM Program. Lang.* 4, HOPL, Article 71 (June 2020), 46 pages. [doi:10.1145/3386321](https://doi.org/10.1145/3386321), [dblp](https://dblp.uni-trier.de/rec/journals/pacmpl/Hickey20.html). Key self-attributions:
  - "Most of the ideas in Clojure were not novel, but their combination puts Clojure in a unique spot in language design."
  - Persistent data structures: "I started by looking at Okasaki [1999], and found the data structures too slow for my use," then built on Phil Bagwell's hash array mapped tries (2001). Bagwell and Rompf (2011) later refined the approach.
  - Datomic as "the final piece needed to get us Out of the Tar Pit [Moseley and Marks 2006]."
  - On talks: "Simple Made Easy ... still attracts people to Clojure eight years later."
  - On stewardship: "open source engenders presumptions of collaborative development, which can be at odds with maintaining a singularity of vision. For good and bad, I have prioritized maintaining my vision for Clojure."
- **"Open Source is Not About You"** (GitHub gist, November 2018): "Open source is a licensing and delivery mechanism, period." Drew wide criticism. [Changelog](https://changelog.com/news/open-source-is-not-about-you-LkwA), [Kyle Mitchell, /dev/lawyer, 2018-12-05](https://writing.kemitchell.com/2018/12/05/Not-About-You)

## Talks (venues and dates from transcript headers)

| Talk | Venue | Date | Frames it carries |
|---|---|---|---|
| Are We There Yet? | JVM Language Summit | Sept 2009 | value, identity, state, time; the epochal time model (credits Whitehead) |
| Hammock Driven Development ("Step Away from the Computer") | Clojure/conj | Oct 2010 | waking mind and background mind; credits Polya, *How to Solve It* (1945) |
| Simple Made Easy | Strange Loop | Sept 2011 | simple versus easy; complect; incidental complexity; guardrail programming |
| The Value of Values | JaxConf | July 2012 | PLOP (place-oriented programming); information as facts |
| Spec-ulation | Clojure/conj | Dec 2016 | accretion, relaxation, fixation; growth versus breakage; "change the name" |
| Effective Programs (10 Years of Clojure) | Clojure/conj | Oct 2017 | situated programs; critique of static types for information systems |
| Maybe Not | Clojure/conj | Nov 2018 | critique of Maybe/Option; optionality depends on context, not the schema |
| Design in Practice | Clojure/conj | Apr 2023 | design as a written, phased practice |

Video links: [Simple Made Easy (InfoQ)](https://www.infoq.com/presentations/Simple-Made-Easy/), [Strange Loop page](https://www.thestrangeloop.com/2011/simple-made-easy.html), [Are We There Yet (InfoQ)](http://www.infoq.com/presentations/Are-We-There-Yet-Rich-Hickey), [Hammock (YouTube)](https://www.youtube.com/watch?v=f84n5oFoZBc), [Value of Values (YouTube)](https://www.youtube.com/watch?v=-6BsiVyC1kM), [Spec-ulation (YouTube)](https://www.youtube.com/watch?v=oyLBGkS5ICk), [Effective Programs (YouTube)](https://www.youtube.com/watch?v=2V1FtfBDsLU), [Maybe Not (YouTube)](https://www.youtube.com/watch?v=YR5WdGrpoug), [Design in Practice (YouTube)](https://www.youtube.com/watch?v=c5QF2HjHLSE).

## Named frames verified in transcripts (verbatim)

- **Simple versus easy** (Simple Made Easy, 2011). "The roots of this word are 'sim' and 'plex', and that means one fold or one braid or twist." "What matters for simplicity is that there is no interleaving, not that there is only one thing." "Simple is actually an objective notion." "Easy is relative." The etymology of "easy" is flagged as speculative in his own words: "the last step of this derivation is actually speculative, but I bought it because it serves this talk really well."
- **Complect** (Simple Made Easy, 2011). "There is this really cool word called 'complect'. I found it. ... It means 'to interleave or entwine or braid'." "It happens to be an archaic word, but there are no rules that say you cannot start using them again." "This is where complexity comes from: complecting." Paired with compose: "'compose' means to place together." **A revived archaic word he did not coin.** The claim that belongs to him is the software meaning.
- **Incidental complexity** (Simple Made Easy, 2011). "When there is complexity there, we are going to call that incidental complexity. It was not part of what the user asked us to do. We chose a tool. It had some inherent complexity in it. It is incidental to the problem." "Incidental is Latin for 'your fault'." **Extends Brooks** ("No Silver Bullet," 1986, accidental complexity) **and Moseley and Marks** (2006). Hickey cites Tar Pit in HOPL.
- **Guardrail programming** (Simple Made Easy, 2011). "I can make change because I have tests. Who does that? Who drives their car around banging against the guardrail." Tests don't tell you where to go; you need to be able to reason about the program.
- **"What's in your toolkit?"** (Simple Made Easy, 2011): a two-column table pairing complex constructs with simpler replacements. Examples: state and objects versus values, methods versus functions, syntax versus data, actors versus queues, ORM versus declarative data manipulation, conditionals versus rules. He says: "I did not label these things bad and good."
- **PLOP, place-oriented programming** (The Value of Values, 2012). "Any time new information replaces old information, you are doing Place-Oriented Programming." "Born of limitations of early computers ... Those limitations are long gone." Information is "facts."
- **Value, identity, state, time; epochal time** (Are We There Yet?, 2009). Value is "an immutable magnitude, quantity, number ... or immutable composite thereof." Identity is "a putative entity we associate with a series of causally related values (states) over time." State is "value of an identity at a moment in time." "Time is atomic, epochal succession of process events." **Hickey credits Alfred North Whitehead** (*Process and Reality*) as "the hero of the talk," while noting "I am not restating Whitehead."
- **Accretion, relaxation, fixation; growth versus breakage** (Spec-ulation, 2016). "Adding = growth, removing = breakage." Accretion means providing more; relaxation means requiring less. "Removing stuff is always breakage. Always." Critique of Semantic Versioning: "the versioning system encourages" conflating changes at different levels. Remedy: "_CHANGE THE NAME_" (new namespace or artifact) instead of breaking under an old name.
- **Situated programs** (Effective Programs, 2017). Programs that "run continuously, 24/7," "almost always deal with information," have "time-extensive memory," and "deal with real-world irregularity." He draws this from his own scheduling, yield management, and election systems. This is the context in which his critique of static types applies.
- **Hammock-driven development** (2010). "Use waking mind time to feed work to background mind." Credits Polya's *How to Solve It*. Incubation as a stage of problem solving is old (Poincaré, Wallas 1926); the name and the programmer framing are his.

## Antecedents and attribution (draft)

| Frame | Draft attribution | Antecedents |
|---|---|---|
| Simple versus easy | original (the distinction as a software design tool) | Plain English and etymology; nearby ideas include Dijkstra on simplicity and "the Humble Programmer." Not a coinage of a new word. |
| Complect | popularized (revived archaic word, given a software meaning) | English "complect" (archaic). Overlaps with coupling (Stevens, Myers, Constantine, 1974) and connascence ([Page-Jones, CACM Sept 1992](https://dl.acm.org/doi/10.1145/130994.131004)). |
| Incidental complexity | extended | Brooks, "No Silver Bullet" (1986), accidental complexity; [Moseley and Marks, "Out of the Tar Pit" (2006)](https://curtclifton.net/papers/MoseleyMarks06a.pdf), which follows Brooks and blames mutable state. |
| Value, identity, state, time | extended | Whitehead (credited by Hickey); functional programming's immutable values generally. |
| Place-oriented programming (PLOP) | original (name and framing) | Critique of mutable in-place update; relates to Tar Pit on state. |
| Accretion versus breakage | original (framing); extends | Variance and Liskov substitution ("require less, provide more"); a counterposition to [Semantic Versioning](https://semver.org) (Tom Preston-Werner). |
| Situated programs | original | His own domain experience. |
| Hammock-driven development | extended | Polya (credited); the incubation stage from Poincaré and Wallas. |
| Persistent data structures in Clojure | extended (engineering, not a thinking frame; keep deep) | Okasaki (1999), Bagwell's HAMTs (2001), both credited in HOPL. |

## Uptake (inclusion filter)

- "Simple Made Easy" is widely cited as a design reference outside Clojure. Evidence: Hickey's own HOPL remark that it still draws people eight years later, many practitioner write-ups in non-Clojure contexts ([Mark Shead](https://blog.markshead.com/1069/simple-made-easy-rich-hickey/), [Paul Cook](https://paulrcook.com/blog/simple-made-easy), [Steve Grossi](https://work.stevegrossi.com/2016/04/27/simple-made-easy/)), and a security application of simple versus easy ([wipmoore, 2017](http://wipmoore.info/posts/2017/09/17/security-simple-vs-easy-rich-hickey.html); title confirmed through search, the page failed a TLS fetch). "Complect" and "complected" show up in programming discussion beyond Clojure. **The evidence is strong but anecdotal; no systematic count was done.**
- The corpus runs from 2007 to 2023: fifteen years of sustained talks, a language, a database, and a peer-reviewed history.

## Critics and counterpositions

- **Jonathan M. Lange**, ["Thoughts on Rich Hickey's 'Maybe Not'"](https://notes.jml.io/2018-12-03-15-47/) (2018-12-03). A direct, named critique. Argues that `Either` sum types are isomorphic, that Wadler's "Theorems for Free!" (1989) shows type signatures like `[a] -> [a]` carry real information, and that the talk "rambles about a half-defined problem, ignores the literature, and swaps formal notation for put-downs and crummy analogies." A `critiques` edge.
- **Static-typing community responses** to "Effective Programs" (2017) and "Maybe Not" (2018): many practitioners pushed back on his claims about types. Eric Normand (a Clojure educator) added context from his Haskell experience ([ericnormand.me](https://ericnormand.me/podcast/something-i-missed-in-rich-hickeys-last-keynote-clojure-conj-2017)). Normand is supportive, so he is not a critic. Hickey framed the claims around "situated programs," which the page must keep as a scope limit.
- **Objectivity of "simple"**: [typesanitizer, "A meta-analysis of three different notions of software complexity"](https://typesanitizer.com/blog/complexity-definitions.html) argues Hickey's objective definition gives little guidance when teams differ in competence and familiarity. Author and date not shown on the fetched page, so it is weak as a named critic. It supports a limit: "easy is relative" is doing work that "simple is objective" cannot do alone.
- **Open source stewardship**: "Open Source is Not About You" (2018) drew wide criticism (HN threads, [Kyle Mitchell's /dev/lawyer response](https://writing.kemitchell.com/2018/12/05/Not-About-You)). Mitchell's piece engages the gist directly; check its stance before using it as an edge. The same issue is Hickey's self-acknowledged trade-off in HOPL ("For good and bad").
- **Built-in limits the page must carry:**
  - His claims are grounded in situated information systems; he scopes them this way himself.
  - "Simple" is an objective property, while the cost of reaching it is relative to the team.
  - The toolkit table's ranking of constructs is presented without argument in the talk ("I did not label these things bad and good").
  - "Change the name" pushes naming costs onto consumers and ecosystems.
  - Much of the evidence is his own practice and talks, with no empirical studies.

## Neighbors on the site

- **Brooks**: incidental complexity renames and sharpens accidental complexity. Also *The Mythical Man-Month*'s conceptual integrity versus Hickey's "singularity of vision."
- **Fowler**: refactoring and tests as a safety net versus "guardrail programming"; Fowler's design stamina hypothesis versus "complexity will slow you down over the long haul."
- **Komoroske**: possibly none direct; check.
- **Fournier**: glue and the over-general swamp as complecting at the organizational level (a weak edge; likely skip).
- **Candidates in the queue:** John Ousterhout (#19; *A Philosophy of Software Design* covers the same complexity territory from another school), Kent Beck (#20; "make the change easy," coupling and cohesion economics).

## Verified after the inclusion Council (2026-09-16)

- **Dijkstra antecedent for "simple."** "Simple Made Easy" opens on a slide quoting Edsger W. Dijkstra: "Simplicity is prerequisite for reliability." Hickey: "I certainly agree with this. I do not agree with everything Dijkstra said." The premise that simplicity comes before reliability is Dijkstra's. The simple-versus-easy distinction and its etymology are Hickey's.
- **Limits slide** (Simple Made Easy): "We can only hope to make reliable those things we can understand / We can only consider a few things at a time / Intertwined things must be considered together / Complexity undermines understanding."
- **Reliability tools are secondary** (Simple Made Easy, closing): "Your 'reliability' tools (testing, refactoring, type systems) don't care / and are quite peripheral to producing good software." "All the reliability tools you have, since they are not about simplicity, they are all secondary. ... They are safety nets, but they are nothing more than that." "You have to have entanglement radar." "Simplicity is a choice ... It is your fault if you do not have a simple system."
- **Kyle E. Mitchell is not a critic.** "Open Source is Not About You" response (2018-12-05): "I'm sympathetic to Rich's minimalist view, but also see 'open source' as a movement with some energy left." Seat 2 proposed him as a critique edge; **dropped.**
- **Fowler, Tolerant Reader** ([bliki, 9 May 2011](https://martinfowler.com/bliki/TolerantReader.html)): be "as tolerant as possible when reading data from a service"; cites Postel's Law. A real antecedent to accretion-only API evolution, on a thinker with a page here.
- **Backus**, "Can Programming Be Liberated from the von Neumann Style?" 1977 Turing Award lecture, published in CACM 21 (1978). [ACM](https://dl.acm.org/doi/10.1145/1283920.1283933). An antecedent critique of word-at-a-time, fetch-and-store programming, behind PLOP.
- **Ousterhout**, *A Philosophy of Software Design* (Yaknyam Press, April 2018): complexity as the fundamental problem of software design; "Modules Should Be Deep"; tactical versus strategic programming. [Open Library](https://openlibrary.org/books/OL28736729M/A_Philosophy_of_Software_Design)
- **Design in Practice**, Clojure/conj, April 2023; slides at [download.clojure.org](https://download.clojure.org/presentations/DesignInPractice.pdf). His most recent public talk found.
