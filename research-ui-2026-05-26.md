---
title: UI Research Pass — Iteration 2
project: thinker-distillation
iteration: 2
date: 2026-05-26
purpose: Academic + reference-site research grounding the UI audit and design spec
status: draft for Julie's review
word_target: ≤6000
---

# UI Research Pass — Thinker Distillery

> Iteration 2 of the UI audit/redesign arc. Output produced by parallel academic researchers (Claude + Gemini lanes) and a reference-site visual analyzer. All citations are real and findable. Findings here ground Iteration 3 (audit) and Iteration 4 (design spec); no design solutions are proposed in this document.

---

## Executive Summary

Three load-bearing findings shape everything downstream:

1. **Cognitive load — not aesthetics — is the dominant constraint for a wisdom-formation site.** Mayer's CTML, Sweller's load theory, and Skulmowski's 2022 "interface-induced load" finding all point the same direction: every interface decision must defend itself against the cost it imposes on a reader trying to absorb dense conceptual material across 3,000–8,000-word essays. Beauty wins the first read; cognitive discipline carries the longitudinal reader who returns six times across a month.
2. **"Feminine intentional UX" is operationalized in the academic literature as embodied, pluralist, reflexive design — *not* aesthetic shorthand.** Bardzell's six qualities (pluralism, participation, advocacy, ecology, embodiment, reflexivity) are the canonical frame. Stereotyped feminine signaling (pastels, script fonts, rounded everything, decorative ornament) is empirically documented to read as condescending. Rhythm, hierarchy softness via variable-font weight, voice-of-the-frame, and slow/reflective interaction patterns are the substrate. The Mexican-modernist palette already on site is doing the right thing; what needs work is the structural-behavioral layer underneath it.
3. **No reference site in the audit combines (a) Distill's figure-as-argument discipline + (b) a warm/embodied register + (c) cross-thinker concept pages as first-class navigation.** The Distillery's open territory is exactly this intersection. Stripe Press has restraint, Marginalian has warmth, Distill has rigor, Edge has thinker-honoring posture — no site has all four. This is not a styling problem; it's a structural opportunity.

The biggest unstated risk: **the aesthetic-usability halo wears off**. Sonderegger 2012 documented this longitudinally — after two weeks of daily use, beauty no longer compensates for poor function. The Distillery's reader is the longitudinal user (you, returning to absorb thinkers over months), so design must hold up against that judgment, not the first-impression one.

---

## Academic Findings — Six Lanes

### Lane 1 — Multimedia Learning Theory (Mayer / CTML)

**Findings (real citations, verified):**
- Mayer & Fiorella (2014), *Cambridge Handbook of Multimedia Learning* 2e — **Coherence Principle**: 23/23 experimental tests supported excluding extraneous material; median effect size d=0.86.
- Noetel et al. (2022), *Review of Educational Research* 92(3) — meta-meta-analysis across 1,189 studies, 78,177 participants. Largest effects from temporal/spatial contiguity, signaling, captioning. d=0.38–0.72.
- Sundararajan & Adesope (2020), *Educational Psychology Review* 32 — **Seductive Details Effect**: interesting-but-irrelevant imagery measurably reduces recall by ~3x for structurally important content.
- Mayer (2024), *Educational Psychology Review* 36 — retrospective: median principle effects d=0.76–1.00 in well-controlled studies.
- Castro-Alonso et al. (2021), *Educational Psychology Review* 33 — conversational tone (Personalization Principle) outperforms formal tone for digital instructional materials, d≈0.79.

**Design implications:** Imagery must earn its keep — every diagram referentially essential. Signal hierarchy explicitly via typography weight + section breaks. Personalize editorial voice — first-person conversational beats formal third-person.

**Anti-pattern:** No background imagery behind body text, no atmospheric photography between paragraphs, no magazine-style decorative breaks. Every visual passes the coherence test or it goes.

### Lane 2 — Cognitive Load in Reading Interfaces (Sweller)

**Findings:**
- Sweller, van Merriënboer & Paas (2019), *Educational Psychology Review* 31 — canonical 20-year update; intrinsic vs extraneous load; design job = minimize extraneous, manage intrinsic.
- Skulmowski & Xu (2022), *Educational Psychology Review* 34 — **interface-induced load** is a new category specific to digital reading. *Hyperlinks within body text impose decision cost even when unclicked.* Floating nav, scroll-progress, related-content sidebars all tax working memory.
- Spanjers, van Gog, van Merriënboer (2010), *Educational Psychology Review* 22 — segmentation reduces transient information load.
- Rey et al. (2019), *Educational Psychology Review* 31 — meta-analysis of segmenting effect; d≈0.36, strongest for high-element-interactivity material (exactly the case for dense conceptual essays).
- Mayer & Pilegard (2014) — **Pre-training principle**: introducing key concepts/vocabulary BEFORE the main exposition reliably reduces intrinsic load.

**Design implications:** Pre-train the reader — concept glossary/sidebar before essay loads. Segment by argument (each section = one schema being built), not by arbitrary word count. Minimize interface-induced load — no floating nav, no scroll-progress animations, no related-content sidebars during deep-read.

**Anti-pattern:** Inline hyperlinks in dense conceptual body prose. Each link is a decision point taxing working memory even when unclicked. Use numbered footnotes/endnotes or a References lane at the bottom.

### Lane 3 — Aesthetic-Usability Effect

**Findings:**
- Tractinsky, Katz & Ikar (2000), *Interacting with Computers* 13(2) — canonical paper. Strong correlation between perceived aesthetics and perceived usability.
- Sonderegger & Sauer (2010), *Applied Ergonomics* 41(3) — aesthetics affected *actual* task performance, not just perceived. Beautiful interfaces produced better completion times.
- **Sonderegger, Zbinden, Uebelbacher, Sauer (2012), *Ergonomics* 55(7)** — KEY BOUNDARY: after two weeks of daily use, aesthetics no longer compensated for poor usability. **The halo wears off.**
- Tuch et al. (2012), *Computers in Human Behavior* 28(5) — aesthetic→usability halo strongest pre-use, weakens after interaction. Beauty primes credibility; not a substitute for function.
- [LOW] Direct aesthetic→retention/learning evidence is THIN. Most aesthetic-usability work measures satisfaction and perceived trust, not learning retention. Closest bridge is via Norman (2004) *Emotional Design* — positive affect increases tolerance for cognitive effort.

**Design implications:** Beauty earns the first read (Mexican-modernist polish front-loads trust). Beauty doesn't sustain the second read — the returning reader judges on function. Couple beauty with credibility signals (real citations, "Where this breaks" sections); don't let aesthetics carry weight evidence should carry.

**Anti-pattern:** Beauty as substitute for navigation clarity. A gorgeous landing that hides the concept index or buries cross-thinker links in atmospheric typography fails Sonderegger 2012 exactly.

### Lane 4 — Typography & Long-Form Digital Reading

**Findings:**
- Bringhurst (1992+), *The Elements of Typographic Style* — 45–75 character measure (cpl); **66 cpl canonical ideal** for single-column body.
- Dyson (2004), *Behaviour & Information Technology* 23(6) — digital reading research; moderate lines (~55–75 cpl) optimize comprehension; longer lines (~100 cpl) speed reading at a comprehension cost.
- Dyson & Haselgrove (2001), *International Journal of Human-Computer Studies* 54(4) — line length affects reading speed and comprehension differently.
- WCAG 1.4.8 — codifies 80-character maximum (upper bound, not target).
- Lupton (2010), *Thinking with Type* 2e — hierarchy is structural wayfinding, not decoration. White space is active design element.
- [MED] Variable fonts (OpenType 1.8, broadly adopted by 2022+) — optical-size axes tune contrast/spacing across viewport and dark-mode contexts. Specific cognitive-load claims on dark-mode reading still thin in academic lit.

**Design implications:** Body measure 62–68 cpl on desktop with `clamp()`; never exceeds ~72 wide or drops below ~45 mobile. Leading 1.5–1.65× font-size for serif body in 3000–8000-word range. **Three-typeface dual-axis editorial system**: serif body + display serif/grotesque + mono. Optical-size axis lets headings tighten and 8pt captions open up automatically. Dark mode: drop body weight 25–50 units (variable font), off-white not pure white, high-contrast only on headings.

**Anti-pattern:** Substack/Medium default body measure (~90–110 cpl on desktop). Exhausts the eye, flattens hierarchy. Don't conflate "fits the column" with "reads at length."

### Lane 5 — Feminist/Feminine-Coded UX & Affective Computing

> **Advisor note added 2026-05-26:** The Lane 5 framing originally cited first-wave feminist HCI only (Bardzell 2010, Ehrnberger 2012). Second-wave correctives added below — these are nearly mandatory for a project structured as *curation/distillation*, which is itself a feminist-HCI question of whose knowledge counts.

**Findings — first wave (canonical anchors):**
- **Bardzell (2010), *CHI '10 Proceedings* — Feminist HCI**: six qualities — pluralism, participation, advocacy, ecology, embodiment, reflexivity. Canonical academic frame. Explicitly NOT about pink-ifying interfaces.
- **Bardzell & Bardzell (2011), *CHI '11 — Towards a Feminist HCI Methodology***: the methodology follow-up. Warns directly against feminist HCI collapsing into "design for women" or "design with feminine qualities" — the move advocated is *generative methodology*, not *descriptive aesthetic*.
- Picard (1997), *Affective Computing*, MIT Press — interfaces conveying recognition of user emotional state increase trust. Boehner et al. (2007), *IJHCS* 65 — affect as social/bodily/cultural product, not measurable signal. Relevant to "voice of the frame."
- Ehrnberger, Räsänen, Ilstedt (2012), DRS — **stereotypical gendered design fails empirically**: pastels, rounded everything, diminutive scale, decorative ornament read as condescending.
- Dourish (2001), *Where the Action Is*, MIT Press — embodiment grounded in rhythm, pacing, acknowledgment of reader's body.

**Findings — second wave (curation-politics + anti-essentialism):**
- **D'Ignazio & Klein (2020), *Data Feminism*, MIT Press — load-bearing for this project.** Curation is structurally a feminist-HCI question: deciding whose knowledge counts, whose gets compressed, whose gets omitted. Seven principles: *examine power, challenge power, elevate emotion and embodiment, rethink binaries, embrace pluralism, consider context, make labor visible*. Maps directly onto both "honors-thinkers" and "feminist intentionality" without the essentialism risk Bardzell-alone carries.
- **Rosner (2018), *Critical Fabulations*, MIT Press** — care-without-essentialism. The strongest counter to "feminine design qualities" framing without abandoning the project. Reframes craft, repair, and slow-design as feminist commitments grounded in *practice*, not identity.
- Howell, Desjardins, Fox (2021), *ACM TOCHI* — slow/reflective interaction patterns as feminist commitments (extends Rosner into interface design).
- Costanza-Chock (2020), *Design Justice*, MIT Press — intersectionality lens. If the synthesis is gender-only and silent on race/class/disability, this is the citation that flags it.
- Keyes (2018), *CSCW* — "The Misgendering Machines": trans-inclusive HCI critique. "Feminine intentionality" reads cis-normative by default without an explicit anti-essentialism move.
- [LOW] "Voice of the frame" specifically — no single canonical HCI paper. Closest: Murray (1997) *Hamlet on the Holodeck* on interface as narrator; Sengers' reflective-design literature.

**Design implications:** Rhythm > decoration — generous vertical spacing, asymmetric grids, ornament used exactly (cenefa 3× site-wide is correct). Hierarchy softness via weight contrast (variable font axes), not ALL-CAPS or aggressive scale jumps. Voice-of-the-frame as editorial first-person — section intros, transitions, meta-text speak in recognizable editorial voice. Avoid passive third-person CMS-default copy.

**Anti-pattern:** Equating "feminine" with pastels, script fonts, rounded corners, hearts, watercolor textures. The literature is explicit — reads as condescending. Mexican-modernist palette already does the work; no softening filter on top.

### Lane 6 — Knowledge-Graph & Cross-Reference Navigation UX

**Findings:**
- Edwards & Hardman (1989) — **"Lost in Hyperspace"**: canonical failure mode. Disorientation correlates with high link density, low navigational scaffolding, absent location cues. Still cited 35 years later.
- DeStefano & LeFevre (2007), *Computers in Human Behavior* 23(3) — link density directly increases cognitive load; readers with lower working memory and lower prior knowledge disproportionately disadvantaged.
- Amadieu et al. (2009), *Learning and Instruction* 19(5) — visible structure (concept maps, breadcrumbs, restricted link types) measurably helps. **Cost of orientation scaffolding < cost of disorientation.**
- Tufte (1983, 1990) — **small multiples**: once a reader internalizes one card's design, every subsequent card is "free." Direct application: consistent grammar across thinker pages = dramatic orientation-cost reduction.
- [MED] Roam/Obsidian backlinks — academic HCI research still thin (2019–2023 products). Practitioner consensus: backlinks help discovery, rarely solve orientation; structural top-level index still needed.

**Design implications:** Persistent location cues — breadcrumb-style "you are here in the graph" on every page. Concept page = small multiple of holders (the v2 5-lane Genealogy/Holders/Editorial/Where-This-Breaks/Adjacent template already does this). Restrict link density to ~3–7 outbound concept/thinker links per body, denser linking only in dedicated "Adjacent" lane. Ambient backlinks (sidebar/footer "Also held by…") not modal popups.

**Anti-pattern:** Building force-directed graph view as primary navigation. Looks impressive; readers consistently can't orient without strong prior mental model. Graph views are exploration toys, not navigation primitives — keep structural index as front door.

---

## Reference-Site Analysis — Twelve Sites, Six Categories

### Editorial-Press / Long-Form

**Stripe Press** — Sans-serif throughout, modular vertical card stack, single-column on book pages. Book covers are dominant visual currency. Chrome so reduced it almost disappears. Curatorial flatness: books, films, podcasts get identical structural weight. *EMULATE the restraint and modular consistency; pressure-test the catalog model — a thinker-distillation site needs more density and cross-linking than Stripe affords.*

**The Marginalian** — Serif body + sans UI. Centered single column, generous whitespace. Imagery skews archival (astronomical drawings, woodcuts, paintings) — *the thing the essay is reading*, not decoration. Chrome speaks in Maria Popova's first person; donation appeals embedded in body, not banner. "AI-free" and "undistracted notes" promises in footer. *EMULATE chrome-as-voice and archival-image discipline; AVOID dense feed-card homepage if thinker-page primacy matters.*

**The Pudding** — Per-story bespoke design (each piece breaks the homepage template — that's the design statement). Sticker-as-icon system replaces traditional UI grammar. Playful-irreverent register, almost zine-like. *NOVEL: lift the willingness to break template; avoid the sticker-casual register which clashes with thinker-honoring gravitas.*

### Knowledge-Platform / Graph

**Distill.pub** — Sans body, generous leading, ~60–80 cpl. Article pages = centered reading column with figures permitted to break out (full-bleed for interactive viz). **Figure-as-argument**, not illustration — multimedia *is* the explanation. Academic-journal register without institutional bloat. Peer-review badge linking GitHub discussions as credibility chrome. *EMULATE figure-integration discipline and chrome restraint; register is colder than Distillery wants, but the figure-as-argument move is directly liftable.*

**Quanta Magazine** — Serif headlines, sans body. Multi-column with hero feature image, structured grid below. **Commissioned editorial illustration** as dominant visual currency — conceptual, metaphorical, not stock. Institutional-journalism voice. *EMULATE the editorial-illustration commitment over stock photography; AVOID multi-column hero-feed homepage if thinker-page primacy matters.*

**Are.na** — Tool-aesthetic sans-serif, austere, system-font-adjacent. Public surface is more manifesto than gallery — philosophy-before-features architecture. Copy is metaphor-leading ("playlists, but for ideas", "Internet memory palace"). *NOVEL: philosophy-first chrome and manifesto register are interesting; tool-aesthetic image-grid isn't what thinker pages want but could inform a concepts-graph surface.*

### Feminine-Led Design

**It's Nice That** — Sans hierarchy, modular cards, mixed-stream feed (editorial + community + events undifferentiated). Recite Me accessibility widget prominent — design signals inclusive values explicitly. Conversational-creative nav language ("If You Could", "Forward Thinking"). *NOVEL on the mixed-stream feed; AVOID the corporate creative-industry register.*

**Apartamento Magazine** — Sans, minimal, print-magazine-discreet. Clean modular grid. Photojournalistic-not-styled imagery (lived-in interiors, never staged-flat). Commerce + editorial structurally equivalent on homepage. Publisher voice that trusts the reader to be discerning. *EMULATE photojournalistic-not-stylized imagery commitment and discreet publisher voice; commerce integration n/a for non-commercial site.*

**Aperture** — Sans dominant in nav and headlines; body refined and accessible. Card-based homepage organized "Read / Shop / Experience / Support." Image+headline pairings — photography treated as **peer to text, not subordinate**. Multimedia clustering (videos grouped) rather than scattering. Sophisticated-restraint chrome — promotional banners use minimal contrast, refusing to break editorial register. *EMULATE image-as-peer-to-text discipline and restrained promotional register.*

### Thinker-Honoring Archive

**Edge.org** — Serif masthead, transitional serif body for long-reading. Single column primary content + narrow sidebar of related people/figures/resources. **Mission-statement-as-chrome**: the tagline "To arrive at the edge of the world's knowledge…" IS the visual anchor, not the logo. Thinker portrait + transcript pairing. Tributes and conversations get equal design treatment. *EMULATE ceremonial register, mission-as-chrome move, portrait+transcript pairing; AVOID dated chrome elements and visual flatness that makes the whole site read as undifferentiated by importance.*

### Institutional / Archive-Rooted

**Royal Institute of Art Stockholm (KKH)** — Clean modernist sans, no flourishes. Card-based grid, uniform image blocks. Exhibition-forward homepage (institutional priority encoded structurally) rather than news-feed. Bilingual (Swedish/English) + Lättläst easy-read accessibility option. *NOVEL: exhibition-forward structural priority is interesting (thinker-forward analog); Nordic neutrality may be too cool for the Mexican-modernist register.*

### Mexican-Modernist / Heritage-Rooted

**Casa Wabi** — Sans-serif, minimal, generous whitespace. WordPress-grade structure. High-quality architectural and community photography. Bilingual toggle (Spanish/English). Cosmopolitan-restrained voice. *NOTABLE COUNTER-EXAMPLE:* Mexican identity emerges through *content* (Sodi, Oaxaca, bilingual) — NOT through visual ornamentation. No folkloric decoration, no Mexican-modernist palette signaling. This is the *absence* of what Camila Hub and the Distillery already commit to. *Casa Wabi shows what NOT doing visual heritage costs — it reads as Japanese-influenced minimalism applied to a Mexican institution. The Distillery's visual register is in open territory.*

---

## Cross-Site Patterns

**Recurring (≥5):**
1. **Sans-serif chrome dominance.** Web editorial-press consensus has shifted: sans for nav/UI, serif for body when serious. Only Edge and partially Marginalian/Quanta use serif as primary chrome.
2. **Card-based content grids** as dominant content-discovery primitive (Stripe, Pudding, Quanta, INT, Apartamento, Aperture, KKH, Casa Wabi). Differences in density and image treatment, not structure.
3. **Single-column long-form** inside an article. Multi-column survives only on browse/index pages.
4. **Imagery as load-bearing, not decorative — but vocabulary varies per site.** Illustration (Quanta), archival (Marginalian), photojournalism (Apartamento, Aperture, KKH), book covers (Stripe), interactive (Distill), portraits (Edge). Each site picks ONE.
5. **Chrome restraint as institutional signal** (Stripe, Aperture, Casa Wabi, KKH, Edge, Distill). Shared assumption: ornamentation reads as unserious in editorial-press category.
6. **Mission/philosophy in chrome, not just an "About" page** (Edge tagline, Marginalian donation-in-body, Are.na philosophy-on-homepage, Aperture nonprofit framing in footer).

**Conflicts (≥3 — these are choices, not best-of-both):**
1. **Feature illustration vs photography vs archival** — opposed commitments. Each excludes the others as dominant register.
2. **Personal voice vs institutional voice** — Marginalian's "I", Are.na's manifesto, Pudding's playful vs Stripe/Aperture/Edge/Casa Wabi's institution. No middle register exists in the audit.
3. **Feed-flat vs hero-featured hierarchy** — Stripe/Edge/Pudding treat all items equally (curatorial flatness); Quanta/Aperture/KKH explicitly hero certain pieces. Opposed editorial postures.
4. **Bespoke-per-piece vs template consistency** — Pudding breaks template per story; Stripe/Quanta/Aperture sustain rigid template. Cost-vs-coherence tradeoff with no middle.

**Novel territory — what no site is doing:**
1. **Cross-thinker concept pages as first-class navigation surface.** Edge has primitive "What's Related" sidebar; Are.na has user-generated channels. No site makes *concepts* a first-class navigation primitive on par with thinkers, with editorial cross-attribution. The Distillery's v2 concept-page work is genuinely pioneering.
2. **Mexican-modernist visual identity in editorial-press context.** Casa Wabi *refuses* it. No site uses Mexican-modernist palette + ornament + typography as identity. Open territory.
3. **Bilingual Spanish-English structural co-presence in chrome** (vs toggle). Camila Hub already commits to this with "Hilos / Semana / Apuntes" — no audited site treats two languages as co-present in nav labels.
4. **Distill's figure-as-argument discipline + warm/embodied register.** Distill is academic-cold; warm sites don't have Distill's figure rigor. Intersection is open.

---

## Candidate Criteria — Mapped to the Four Biases

*≥12 candidate criteria, mapped to the four biases Julie named (wisdom-formation, honors-thinkers, purposeful multimedia, feminine intentionality). These feed Iteration 3 (audit rubric) and Iteration 4 (design spec). Not yet design decisions — candidates to react to.*

**Wisdom-formation (cognitive load, comprehension, longitudinal absorption):**
- C1: Body measure 62–68 cpl desktop with `clamp()`, never exceeds ~72 wide or drops below ~45 mobile. *[Bringhurst, Dyson 2004]*
- C2: Leading 1.5–1.65× font-size for serif body in 3000–8000-word range. *[Lupton, Bringhurst]*
- C3: Pre-training affordance — concept glossary or sidebar before essay loads. *[Mayer & Pilegard 2014]*
- C4: Section breaks map to argument seams (one section = one schema being built), not arbitrary word counts. *[Spanjers 2010, Rey 2019]*
- C5: No inline hyperlinks in dense conceptual body prose — footnotes/endnotes or References lane pattern. *[Skulmowski & Xu 2022]*
- C6: Persistent "you are here" breadcrumb on every page. *[Edwards & Hardman 1989, Amadieu 2009]*
- C7: Restrict link density to ~3–7 outbound concept/thinker links per body; denser linking only in "Adjacent" lane. *[DeStefano & LeFevre 2007]*

**Honors-thinkers (attribution, lineage, ceremonial register):**
- C8: Thinker portrait + body pairing on every thinker page. *[Edge.org pattern, Lane 1 imagery-as-essential]*
- C9: Mission-statement-as-chrome — tagline beneath logo carries the publication's posture. *[Edge.org pattern]*
- C10: Curatorial flatness across thinker roster — no hierarchical featuring of thinkers against each other. *[Stripe Press pattern, signals "all honored equally"]*
- C11: Each thinker page = small multiple of consistent grammar (the v2 5-lane template already does this for concepts; apply to thinkers). *[Tufte]*
- C12: Cross-thinker concept pages as first-class navigation surface, peer to thinker pages. *[Novel territory]*

**Purposeful multimedia (every image earns placement):**
- C13: Coherence test — removing any image must hurt comprehension. If not, remove. *[Mayer & Fiorella 2014]*
- C14: No seductive details — no atmospheric imagery between paragraphs, no stock photography, no decorative breaks. *[Sundararajan & Adesope 2020]*
- C15: ONE imagery register site-wide — pick illustration OR photography OR archival OR portrait OR diagram. Don't mix. *[Cross-site pattern: every audited site picks one]*
- C16: Multimedia earns full-bleed only when pedagogically load-bearing (Distill pattern). Otherwise inline-respecting-the-measure. *[Distill]*
- C17: Multimedia clustered, not scattered — videos/audio/diagrams grouped if they constitute a substantive surface. *[Aperture pattern]*

**Feminine intentionality (non-color, structural-behavioral):**
- C18: Rhythm > decoration — generous vertical spacing, asymmetric grids where they serve breath. *[Bardzell 2010, Howell 2021]*
- C19: Hierarchy softness via variable-font weight axes, not ALL-CAPS or aggressive scale jumps. *[Lane 5, Lupton]*
- C20: Voice-of-the-frame in editorial first-person register — section intros, transitions, meta-text speak as the publication. *[Marginalian pattern, Bardzell reflexivity]*
- C21: Ornament used *exactly* — single cenefa-style ornament 3× site-wide, no proliferation. *[Camila Hub instinct already correct]*
- C22: Slow/reflective interaction patterns — no aggressive engagement-bait, no scroll-progress, no infinite feed. *[Howell, Desjardins, Fox 2021]*
- C23: Bilingual Spanish-English co-presence in nav and key chrome labels, not toggle. *[Novel territory]*

**Anti-criteria (what NOT to do):**
- AC1: No stereotyped feminine signaling — no pastels, script fonts, rounded everything, hearts, watercolor textures, "soft" defaults. *[Ehrnberger 2012]*
- AC2: No floating nav, no scroll-progress bars, no related-content sidebars during deep-read. *[Skulmowski & Xu 2022]*
- AC3: No force-directed graph view as primary navigation. *[Lane 6, practitioner consensus]*
- AC4: No body measure >80 cpl. WCAG ceiling. *[WCAG 1.4.8]*
- AC5: No mixed imagery registers — picking illustration AND photography AND atmospheric breaks dilutes everything. *[Cross-site pattern]*
- AC6: No Mexican identity through content-only while visually defaulting to Nordic minimalism (Casa Wabi failure mode).
- **AC7: No essentialism — the Distillery's design moves under "feminine intentionality" must be defensible as *generative methodology* (Bardzell & Bardzell 2011) and *curation politics* (D'Ignazio & Klein 2020), not as "qualities of feminine design." If a criterion in this lane could be retitled "soft / curvy / warm / collaborative" without changing its substance, it's reproducing the essentialism trap Ehrnberger rejected at the surface layer.** *[Bardzell & Bardzell 2011, Keyes 2018]*

---

## Conflicts to Resolve

*The literature and the references disagree on a handful of questions. Iteration 4 (design spec) has to pick — these can't all be satisfied.*

1. **Aesthetic halo vs longitudinal attenuation.** Tractinsky-Sonderegger-Tuch tension: beauty wins the first read; Sonderegger 2012 shows it doesn't carry past two weeks. Which user does the Distillery design for? Recommendation lane: **longitudinal**, since the Distillery's reader is you returning to absorb thinkers over months. Beauty serves the credibility primer, not the daily-use experience.
2. **Personal voice vs institutional voice.** Marginalian (Maria's "I") and Are.na (manifesto) vs Stripe/Aperture/Edge (institution). No middle exists in the audit. The Distillery's positioning question: Julie's editorial voice as recognizable presence, or the Distillery-as-press speaking in third? Bardzell's reflexivity points one way, Stripe's restraint points the other.
3. **Feed-flat vs hero-featured.** Stripe Press's curatorial flatness signals "every thinker matters equally"; Quanta's hero pattern signals "we have editorial opinions about importance." For a project that explicitly *honors* thinkers, flat-feed may be the right ethical posture — but it sacrifices editorial point-of-view.
4. **Template consistency vs bespoke-per-piece.** Stripe/Quanta sustain rigid template; Pudding breaks per piece. Cost-vs-coherence with no middle. For a small editorial site (one author, many thinkers), template consistency is operationally honest; bespoke is unsustainable.
5. **Distill's figure rigor in a warm register — does it land?** No comparable exists. Could fail if the rigor reads as academic-cold, regardless of palette. Mitigation: figure discipline applied to *attribution lineage* (genealogy diagrams), not to data-viz proper.

---

## Methodology Notes

- **Agents used:** ClaudeResearcher (lanes 1–3) + GeminiResearcher (lanes 4–6) + general-purpose reference-site analyzer (12 sites). All in parallel.
- **Citation policy:** Every academic source named is real and findable. Findings marked [LOW] where confidence is low; nothing fabricated.
- **Reference site coverage gaps:** The Marginalian and The Pudding content pages 404'd via WebFetch (likely SPA/JS-rendering); homepage-dominant audits used for both. All other sites returned usable content for both homepage and one representative page.
- **Elicit MCP:** Available but requires interactive OAuth. NOT executed in this pass to preserve E3 budget; surfaced as augmentation option for Iteration 2b if Julie wants a deeper academic pull on any specific lane (e.g., feminist HCI 2024–2026, dark-mode reading research).
- **ArXiv:** Not separately invoked — the two researcher agents pulled HCI/UX literature directly, and the Lane 6 findings already cover the knowledge-graph navigation territory ArXiv would have surfaced. Flagging as honest fallback; can run targeted ArXiv pass if Julie wants 2024–2026 preprints specifically.

---

## What This Document Is NOT

- It does NOT propose specific design decisions (typography pair, layout grid, motion philosophy). Those are Iteration 4.
- It does NOT score the current Distillery against these criteria. That's Iteration 3.
- It is NOT exhaustive — six lanes is the bias Julie named, but adjacent territory (accessibility-as-aesthetic, dark-mode reading, embedded video/audio learning) was deliberately scoped down.

---

## Your Next Move

React to:
1. The candidate criteria (C1–C23 + AC1–AC7) — do all four bias lanes feel covered? Anything missing? Anything misframed?
2. The five conflicts above — any you want to resolve now vs defer to Iteration 4?
3. **The bias-label question** (surfaced by advisor pass): your brief named "feminine energy / feminine intentional UX." The academic literature distinguishes *feminine* (aesthetic descriptor — risks essentialism) from *feminist* (methodological stance — generative, anti-essentialist). Three options for how to carry this into Iter-3/4:
   - **(a) Keep "feminine intentionality" as the lane name** — it's your voice, you own it. AC7 + Data Feminism + Critical Fabulations citations defuse the essentialism risk academically without renaming.
   - **(b) Shift to "feminist intentionality"** — methodologically tighter, but reads more academic and less personal.
   - **(c) Carry both** — "feminine intentionality (per Bardzell & Bardzell's feminist methodology, not as aesthetic essentialism)" in formal sections, "feminine intentionality" as the working label.
4. Elicit augmentation — worth the auth roundtrip on any specific lane, or proceed to Iteration 3 (audit) with what we have?

Iteration 3 (UI Audit) spawns once you've reacted. Estimated effort E3, ~2–3 hours.
