# Lane A: Knowledge Organization / LIS / Information Architecture Prior Art

Research against the Thinker Distillery content model (`SCHEMA.md`, read 2026-09-18).
Written incrementally as each finding is confirmed. Every URL below was fetched and
resolved during this session unless explicitly marked UNVERIFIED.

**The site's model, in the vocabulary of this document:**
two entity types (thinker, frame), one join key (`concept_slug`), typed directed
edges between thinkers (`adjacent_thinkers`, 6 types, `primary`/`secondary`, capped
at 7 foreground), per-frame provenance (`attribution_kind`, `primary_author`,
`co_originators`, `derived_from`), a curated bibliography (`body_of_work`), and
editorial prose (`reading`, `extension`, `limits`).

Status: COMPLETE. Part One 2026-09-18 (standards). Part Two 2026-09-20 (peer-reviewed literature via Elicit).

---

## FINDING 1. SKOS (W3C, 2009). The closest formal match, and the one with a directly borrowable rule.

**Source (fetched, resolves):** <https://www.w3.org/TR/skos-reference/> (SKOS Simple Knowledge
Organization System Reference, W3C Recommendation 18 August 2009).

### What it actually is

An RDF vocabulary for publishing thesauri, taxonomies and controlled vocabularies. Its core
is a set of semantic relations between `skos:Concept` resources, with numbered normative
integrity conditions (the "S" statements). The relevant ones, quoted from the Reference:

- **S23: `skos:related` is an instance of `owl:SymmetricProperty`.** A related-edge is
  reciprocal by definition. Asserting A related B *entails* B related A. There is no way to
  record a one-way associative link in SKOS.
- **Not transitive.** Example 32 is an explicit non-entailment: A related B, B related C does
  *not* entail A related C.
- **S25: `skos:narrower` is `owl:inverseOf` `skos:broader`.** Hierarchy is stored once and
  read both ways.
- **S22/S24:** `skos:broader` is a sub-property of `skos:broaderTransitive`; the *Transitive*
  variants are the `owl:TransitiveProperty` ones. Direct broader is deliberately non-transitive
  so that authors assert only one level and the closure is derived.
- **S27: `skos:related` is disjoint with `skos:broaderTransitive`.** Two concepts cannot be
  both associatively related and hierarchically related, at any distance. This is the
  "don't use RT as a weak BT" rule, made machine-checkable.
- **Mapping properties, S41–S46:** `skos:broadMatch`/`narrowMatch` are sub-properties of
  broader/narrower and are inverses of each other (S43); `skos:relatedMatch` is a
  sub-property of `skos:related`; **S42: `exactMatch` is a sub-property of `closeMatch`**;
  **S44:** relatedMatch, closeMatch and exactMatch are all symmetric; **S45: `exactMatch` is
  transitive** (closeMatch deliberately is *not*, so chains of "roughly the same" cannot
  silently compose into "identical"); **S46: `exactMatch` is disjoint with `broadMatch` and
  `relatedMatch`**.
- **Documentation properties, S16/S17:** `skos:note` with six typed sub-properties:
  `definition`, `scopeNote`, `editorialNote`, `historyNote`, `changeNote`, `example`. Typed
  annotation, not one free-text notes field.
- **Collections, S28–S37:** `skos:Collection` / `skos:OrderedCollection` group concepts for
  presentation **without** being concepts themselves (S37 declares Collection disjoint with
  Concept and ConceptScheme). Node labels that organise a display without polluting the graph.

### The specific mechanisms worth borrowing

**(a) Reciprocity as an entailment, not a lint warning.** The site currently *warns* at build
time when "a page links to a thinker whose page does not link back" (SCHEMA.md §10). SKOS's
answer is different in kind: a symmetric relation is stored once and the return edge is
*derived*. The site already does exactly this for frames, where `concept_slug` holders are
recomputed every build and concept pages "never need a manual sync" (§6.1), and then does
the opposite for thinker edges, which are hand-authored twice and reconciled by a warning.

**(b) The disjointness discipline (S27).** SKOS forbids an edge pair being both associative
and hierarchical. The site's `parallel` edge is doing the work of `skos:related`, and
`antecedent` is doing the work of `skos:broader`/lineage. Nothing today stops a page from
carrying both `antecedent` and `parallel` to the same target, or from A saying `antecedent`
while B says `parallel` back.

**(c) closeMatch vs exactMatch (S42/S45).** Two thinkers can hold "the same" frame at
different strengths. The site collapses this into one binary: same `concept_slug` or not.
SKOS separates identity (transitive, composes) from approximate identity (symmetric, does
*not* compose), precisely because chaining approximate matches produces false identity.

### How it maps onto the concrete fields

| SKOS | Thinker Distillery |
|---|---|
| `skos:Concept` | a frame (`concept_slug`) |
| `skos:ConceptScheme` | the site as a whole |
| `skos:related` (symmetric, S23) | `edge_type: parallel`, **not** symmetric today |
| `skos:broader` / `narrower` (inverse, S25) | `edge_type: antecedent` / `extends`, an unpaired inverse |
| `skos:exactMatch` (transitive) | two thinkers sharing one `concept_slug` |
| `skos:closeMatch` (non-transitive) | **no equivalent** |
| `skos:definition` | `one_line_gloss` |
| `skos:scopeNote` | `edge_label`, partly |
| `skos:historyNote` / `changeNote` | **no equivalent** (Majors abandoning the "1.0/2.0" labels lives in a `limits` card) |
| `skos:editorialNote` | `inclusion_rationale` (private) |
| `skos:Collection` (disjoint from Concept, S37) | `primary_domains` badges, informally |

### What adopting it would change

Three concrete changes, in descending value:

1. **Make the symmetric edge types symmetric.** `parallel` and `critiques`/`critiqued-by` are
   the candidates. Derive the return edge in `src/lib/graph.ts` the way holders are already
   derived, and drop the reciprocity warning entirely. Today an author writes the same
   relationship twice in two files, in two different prose labels, and the build only
   complains about the missing half. It cannot notice that the two halves *disagree*. The
   Majors↔Fournier pair is a live example: Majors carries a `parallel` edge whose label
   asserts "Fournier's page already carries the pendulum as its counterposition," which is a
   factual claim about another file that nothing verifies.
   Caveat, and it matters: `edge_label` is editorial prose and the two directions legitimately
   say different things. So the borrow is **symmetric existence with asymmetric labels**:
   derive that the edge must exist in both directions, let each side write its own label,
   and fail the build (not warn) when one side is missing.
2. **Add the disjointness rule.** One edge type per ordered pair, and lineage beats
   association: if A says `antecedent` of B, B may not say `parallel` of A. Cheap to add to
   `src/lib/checks.ts`, and it catches the real editorial failure of using `parallel` as a
   soft way to avoid deciding who came first.
3. **Split frame identity into exact and close.** A `related_concepts` field on a frame,
   distinct from sharing a `concept_slug`, would let Majors's "high cardinality" sit *near*
   a database-theory cardinality concept without merging them, and without the permanent-slug
   migration cost the schema warns about (§2, "Frame slugs are permanent"). This is the
   lowest-urgency of the three at 40–60 thinkers.

### Honest limits of the mapping

SKOS has **no attribution model at all**. It cannot say who coined a concept; `skos:Concept`
has no author. So SKOS solves the site's *edge* problem and contributes nothing to its
*byline* problem. Treat it as prior art for `adjacent_thinkers` and for frame identity only.

---

## FINDING 2. ISO/IEC 13250 Topic Maps. The structural answer to the return-edge problem.

**Sources (fetched, resolve):**
- <https://www.isotopicmaps.org/sam/sam-model/>: ISO/IEC 13250-2, Topic Maps Data Model (TMDM), the normative data model.
- <https://www.isotopicmaps.org/sam/>: TMDM landing page.
- <https://www.isotopicmaps.org/tmcl/2010-03-25/>: ISO/IEC 13250-5 Topic Maps Constraint Language (TMCL), the schema/constraint language.
- <https://xml.coverpages.org/TM-iso13250-2nd-ed-v2.pdf>: ISO/IEC 13250 second edition (2002), the original standard text.

### What it actually is

A standard for subject-centric knowledge representation with three constructs: **topic**
(a symbol representing exactly one subject), **occurrence** (a link from a subject to an
information resource that is relevant to it), and **association** (a representation of a
relationship between one or more subjects). The team's guess that this "looks close to
thinker / edge / body-of-work" is correct, and the mapping is closer than SKOS's:

| TMDM | Thinker Distillery |
|---|---|
| topic item | a thinker, and also a frame |
| topic name item (with `[type]` and `[scope]`) | `name`, `display_name` |
| **occurrence item** (`[type]`, points at a resource) | **`body_of_work` entry** (`type: book \| essay \| talk \| paper …`, `link`) |
| **association item** (`[type]`, plus a set of roles) | **`adjacent_thinkers` edge** (`edge_type`) |
| **association role item** (`[type]` + the topic playing it) | **no equivalent, and this is the gap** |
| subject identifier | `canonical_url` |
| item identifier | `slug` / `concept_slug` |
| scope (themes) | no equivalent |
| reification | no equivalent |

### The specific mechanism worth borrowing: associations are objects, not directed edges

This is the single highest-value structural idea in this lane. In TMDM an association is
**one** information item with a type and a *set of association role items*; each role item
names a role type and the topic that plays it. A relationship is stored once. There is no
"forward edge" and "return edge" to keep in sync, because direction is not how the relationship
is represented at all. Asymmetry is carried by the **role types**, not by which file the
edge lives in.

Applied here: an `antecedent` relationship between Kálmán and Majors is not "Majors has an
antecedent edge to Kálmán." It is one association of type `lineage` with two roles,
`antecedent: rudolf-kalman` and `descendant: charity-majors`. Both pages render it, each from
its own side, from the same record. The reciprocity warning in `src/lib/checks.ts` becomes
structurally impossible to violate, and the two directions cannot disagree about what kind
of relationship it is, because there is only one assertion.

A second mechanism, **reification**: TMDM lets a topic represent another construct so that
metadata can be attached to a *statement*. That is exactly the shape of the site's unsolved
problem of who is speaking. An edge label is the site's editorial claim about a relationship,
and a reified association is the standard place to hang "this claim was drafted by Camila,
reviewed in Council transcript X, verified against fact ledger line S:4." The site already
does a hand-rolled version of this with `reading_review` on the reading, and nowhere else.

A third, **scope**: every TMDM statement carries a set of themes defining the context in which
it is valid. The site's equivalent question, currently answered only in prose, is "valid
according to whom": the thinker, the site, or a critic.

### What it would change

**Change: move `adjacent_thinkers` from per-thinker frontmatter to an edge collection.**
One file per relationship (or one shared edges file), with a type, two role-typed participants,
and an optional per-side label. Astro content collections support this without difficulty, and
it is the same move the project already made twice: long-read chapters became their own
collection "so the chapter list cannot drift from the files" (SCHEMA.md, decision 2026-05-25),
and concept holders became derived "so concept pages never need a manual sync" (§6.1). The
edge table is the third instance of the same pattern and the one still unconverted.

Cost, stated honestly: it breaks the current one-file-per-thinker authoring ergonomic, which
is a real property of the site and not an accident. A cheaper 80% version keeps edges in
frontmatter and adds a build step that materialises the return edge and **fails** on
disagreement about `edge_type`, rather than warning about absence.

**Change: adopt TMCL-style constraints.** ISO/IEC 13250-5 exists because everyone who built a
topic map discovered they needed to constrain it. Its constraint kinds map straight onto
rules the site enforces by hand today or not at all: topic-type constraints, association-role
constraints (which topic types may play which role), cardinality constraints (the site's "at
most 7 foreground neighbours" and "at most 8 foreground frames"), and occurrence constraints.
Worth reading as a checklist of what `src/lib/checks.ts` is missing rather than as something
to implement.

### Honest limit

Topic Maps lost to RDF/SKOS in practice; the ecosystem is largely dormant and the tooling
is not worth adopting. Take the **data model** as a design argument, not the standard as a
dependency. And like SKOS, it has no native attribution model: `[type]` on an association can
say "lineage" but nothing in TMDM says who *claimed* the lineage. Reification is the hook for
that, not an answer.

---

## FINDING 3. ISO 25964. One borrowable idea (typed hierarchy), one confirmation (reciprocity), and a lot that does not apply.

**Sources (all checked with an HTTP request; status noted):**
- <https://www.niso.org/schemas/iso25964>: NISO's official ISO 25964 schemas page, host of the correspondence document and the SKOS-Thes extension. 200.
- <https://www.dublincore.org/specifications/skos-thes/ns/>: SKOS-Thes namespace documentation, the machine-readable form of the ISO 25964 features SKOS does not cover. **Fetched and read; this is the most useful artifact in the family, because it is the ISO model written out in enumerable form without paying ISO.** 200.
- <https://www.niso.org/sites/default/files/stories/2017-11/SP_clarke_zeng_isqv24no1.pdf>: Clarke & Zeng, "From ISO 2788 to ISO 25964: The Evolution of Thesaurus Standards," *Information Standards Quarterly* 24(1). 200, but the PDF's text layer would not extract in this session; cited as a pointer, not quoted.
- <https://cdn.standards.iteh.ai/samples/53657/808a87d0fbea484bb0013de6a2eea4a9/ISO-25964-1-2011.pdf>: free sample of ISO 25964-1:2011 (front matter and TOC only). 200.
- <https://www.iso.org/standard/53657.html>: the standard itself, paywalled. **Returns 403 to automated requests**; noted so nobody treats it as a dead link.
- <https://help.poolparty.biz/8.1/en/poolparty-reference-and-glossary/iso-25964-1-guidelines-for-thesaurus-management-software-and-how-poolparty-maps-to-them.html>: a vendor's clause-by-clause restatement of the software requirements, which is where the reciprocity language surfaces in quotable form. 200.

### What it actually is

The international standard for information-retrieval thesauri, in two parts (Part 1, thesauri;
Part 2, interoperability with other vocabularies). Its central move is separating **concept**
from **term**: a `ThesaurusConcept` is the unit of meaning, `ThesaurusTerm` is a label for it,
and one concept carries one preferred term plus non-preferred terms per language. It defines
three relationship families: equivalence (USE/UF), hierarchical (BT/NT), and associative (RT).

### The one mechanism genuinely worth borrowing: typed hierarchy

ISO 25964 does not have a single BT. It has **three**, each with its own inverse, confirmed
in the SKOS-Thes namespace:

- `iso-thes:broaderGeneric` / `narrowerGeneric` (BTG/NTG): "the immediate (direct or one-step)
  class - generalized class relationship." A *kind of*.
- `iso-thes:broaderPartitive` / `narrowerPartitive` (BTP/NTP): a *part of*. The namespace notes
  that BTP "should qualify for a transitive closure," with the worked example that a bicycle
  wheel belongs uniquely to a bicycle while a wheel does not.
- `iso-thes:broaderInstantial` / `narrowerInstantial` (BTI/NTI): "the immediate (direct or
  one-step) instance - class relationship." An *instance of*.

Every one of these pairs is declared `owl:inverseOf` its opposite. The standard's position is
that one undifferentiated hierarchical link is too coarse to be useful, and that the subtypes
must be distinguished at authoring time because they behave differently under transitivity.

**How this maps here.** The site's `antecedent` edge is carrying at least four distinct
relationships that ISO 25964 would insist on separating. On the Majors page alone:

- Kálmán → Majors is a **term-borrowing**: the word "observability" is Kálmán's, the concept
  is not his. The edge label has to say this in prose ("the word is his") because no edge type
  can.
- Scuba → Majors, recorded not as an edge but as a `body_of_work` entry with the note "Not
  hers, and the reason her argument exists," is a **technical antecedent**: the pattern was
  inherited, not the vocabulary.
- Sridharan and Bourgon → Majors is an **opposed antecedent**: the thing she argues against.
  The site had to file this as `parallel` and then explain in the label that Sridharan is
  "the position on the other side of her central claim rather than a critic of it," which is
  the schema failing to hold a distinction the editor clearly perceives.
- Christine Yen appears only as a `co_originator` with a free-text `role` string.

That is four kinds of lineage and one enum value. The borrow is: **split `antecedent` into
named subtypes the way ISO 25964 splits BT**, with the subtype chosen at authoring time.
Candidate set, drawn from what the existing pages already do in prose: `borrows-term-from`,
`inherits-pattern-from`, `argues-against`, `builds-on`. Each gets an inverse, and each gets a
different rendering on the antecedent's page when that person has one.

This also fixes a live problem the schema half-acknowledges. `derived_from` on a frame is a
single untyped pointer to an earlier `concept_slug`. Typed hierarchy at the frame level is
the same borrow applied one layer down, and it is what would let a concept page's Genealogy
section actually show a genealogy rather than a sorted list of holders.

### The confirmation: reciprocity is a software requirement, not a nicety

ISO 25964-1's software guidance states that if concept A has a BT to B then B should have an
NT to A, and likewise that RT is reciprocal, and that software should **create the reciprocal
automatically**, or at minimum **warn** when a non-reciprocal relationship is present. The
site currently sits on the weaker of the two options the standard describes. The standard
names auto-creation as the preferred behaviour and the warning as the floor. That is
independent support for Finding 1's recommendation and Finding 2's mechanism.

### What does not apply

The concept/term split, the entire equivalence apparatus (USE/UF, compound equivalence,
`plusUse`/`plusUF`), multilingual label management, and `ThesaurusArray` node labels all exist
to solve *indexing* problems: getting a searcher who typed one word to the document filed
under another. The Distillery is not an indexing vocabulary and has no searcher-to-document
retrieval problem. Do not import the term layer. `ConceptGroup` and `microThesaurusOf` are
likewise aimed at thesauri far larger than 40–60 subjects.

---

## FINDING 4. Authority control. The mapping does NOT hold the way the brief supposes, and the correct prior art is next door.

**Sources:**
- <https://viaf.org/>: Virtual International Authority File. Live; **returns 403 to scripted requests**, so treat a failed automated check as bot-blocking rather than a dead link.
- <https://www.oclc.org/en/viaf.html> and <https://www.oclc.org/research/activities/viaf.html>: OCLC's descriptions of VIAF.
- <https://id.loc.gov/authorities/subjects.html>: LCSH as linked data. Live; also 403s to scripted requests.
- <https://www.loc.gov/aba/publications/FreeSHM/H0370.pdf>: LCSH Subject Headings Manual H 370 (September 2023). **Fetched and text-extracted; quoted below.** 200.
- <https://www.loc.gov/marc/relators/relaterm.html>: MARC Code List for Relators, Library of Congress Network Development and MARC Standards Office. **Fetched.** 200.
- <https://credit.niso.org/>: CRediT, the Contributor Roles Taxonomy. **Fetched.** 200.
- <https://www.niso.org/publications/z39104-2022-credit>: ANSI/NISO Z39.104-2022, the standard that formalised CRediT in 2022. 200.

### The honest answer first: the brief's hypothesis is wrong

The brief proposes that "the attribution problem here (who coined what, who co-originated) is
arguably authority control." **It is not, and conflating the two would send the project down
the wrong path.**

Authority control solves **identity**: making sure that every reference to a person resolves
to one person, with one established form of name, disambiguated from everyone with a similar
name. VIAF exists to cluster the authority records of the same human across 50+ national
libraries. What it produces is a stable identifier and a preferred label. An authority record
does not assert who originated an idea. It cannot; that is not what the record is for.

The site already has authority control and it works: `slug` is the identifier, `display_name`
is the established form, `canonical_url` is the subject identifier. The one thing worth taking
is small and cheap. **`target_slug` in `adjacent_thinkers` may point at a person with no page
here, and nothing anchors that string to a real human.** Christine Yen, Rudolf Kálmán, Laban
Eilers, Peter Bourgon and George Miranda all exist in the Majors file as bare slugs.
An off-site neighbour needs a stub authority record: slug, display name, and an external
identifier. VIAF and ORCID are the obvious sources for the academics; a canonical URL will do
for the practitioners. This prevents the same person entering the graph twice under two slugs,
which is precisely the failure authority control was invented for, and it becomes likely as
soon as the roster passes 20 thinkers with many more off-site neighbours.

### What DOES solve the attribution problem: relator terms and contributor-role taxonomies

The tradition that actually addresses "who did what to this work" is a different one, and it
is mature.

**MARC Code List for Relators** (Library of Congress, roughly 150+ terms) is a controlled
vocabulary of the roles a person or organisation plays with respect to a work. Each term has a
three-letter code. The list contains terms that read as though they were written for this site's
problem:

- **bibliographic antecedent [ant]**: "A person or organization responsible for a resource
  upon which the resource represented by the bibliographic description is based. This may be
  appropriate for adaptations, sequels, continuations, indexes, etc." That is the site's
  `antecedent` edge, already standardised, already coded. (Verified verbatim against the LC
  page in this session.)
- **attributed name [att]**: "An author, artist, etc., relating him/her to a resource for
  which there is or once was substantial authority for designating that person as author,
  creator, etc. of the work." Note what this encodes: authority for an attribution that is not
  the same as having made the thing. That is the byline test's grey zone, given a code.
  (Verified verbatim.)
- **dubious author [dub]**: "A person or organization to which authorship has been dubiously
  or incorrectly ascribed." The site has no value for this, and the Casey Rosenthal exclusion
  (SCHEMA.md, 2026-05-25) is the case it would have covered: rather than omitting him, a page
  could have carried the frames with the attribution explicitly marked as contested.
  (Verified verbatim.)
- **adapter [adp]**: "A person or organization who modifies the content of existing work for
  a different medium or audience"; **compiler [com]**, creating a new work "through the act of
  compilation, e.g., selecting, arranging, aggregating, and editing data"; plus **translator
  [trl]**, **editor [edt]**, **honoree [hnr]**. (Verified verbatim.)

The site's seven `attribution_kind` values (`original`, `extended`, `popularized`,
`distributed`, `co-authored`, `translated`, `community`) are a hand-rolled relator vocabulary
covering the same ground. That is not a criticism; a seven-value list tuned to one domain is
better than 150 generic ones. The borrow is narrower and specific: **relator terms are attached
to the (person, work) pair, not to the work alone**, and the list includes values for
*contested* and *incorrect* attribution, which the site's list does not. Adding a `contested`
or `disputed` value to `attribution_kind`, with a required note, would give the byline test
somewhere to put a finding other than "exclude the thinker."

**CRediT** (ANSI/NISO Z39.104-2022, formalised 2022) is the sharper structural precedent for
`co_originators`. It is a fourteen-role taxonomy for contributions to a scholarly output:
Conceptualization, Data curation, Formal analysis, Funding acquisition, Investigation,
Methodology, Project administration, Resources, Software, Supervision, Validation,
Visualization, Writing – original draft, and Writing – review & editing. It exists because
the single-byline model of authorship stopped describing how work actually gets made, which is
exactly the observation behind the site's byline test and behind `attribution_kind: distributed`.

**The mechanism to borrow: `co_originators.role` should be an enum, not free text.** Today it
is a prose string, and the Majors page shows what that produces:

> `role: coined observability in control theory, "On the general theory of control systems" (1960)`
> `role: co-founder of Honeycomb, which built the pattern into a product`

Those are two completely different kinds of contribution written in the same field, in a format
no build check can read, no concept page can sort by, and no future graph view can filter on.
CRediT's answer is a closed list with published definitions, and a contributor may hold several
roles on one output. A domain-tuned closed list here might be: `coined-term`,
`formalized`, `built-the-artifact`, `funded`, `popularized`, `co-authored-the-text`,
`contributed-the-case`. Keep the free-text string alongside as the human-readable gloss, the way
SKOS keeps `skos:definition` alongside `skos:broader`.

CRediT also carries a degree-of-contribution layer (lead, equal, supporting) in its fuller
specification, which is the natural home for what the site currently expresses only as which
name sits in `primary_author`.

### What it would change

1. **`co_originators.role` becomes `{ role: <enum>, note: <string> }`.** Small, additive,
   backward-compatible, and it makes the concept page's Genealogy section sortable by kind of
   contribution rather than only by `attribution_kind`.
2. **A stub record for off-site neighbours**, carrying an external identifier. Prevents slug
   drift and is the only piece of authority control proper that this site is missing.
3. **A `contested` attribution value**, so the byline test has an outcome between "ship it" and
   "exclude the thinker."

---

## FINDING 5. Cross-reference discipline. There IS a documented rule set, and it is a better basis than the cap of 7.

> **Revised by Finding 9.** Part Two looked for reader-outcome research behind a link cap and
> did not find it. H 370's criterion-based pruning stands; the claim that it should *replace*
> the cap softens to: keep the cap as a layout budget and use the criterion to decide which
> edges earn a place. Read Finding 9 with this section.

**Sources:**
- <https://www.loc.gov/aba/publications/FreeSHM/H0370.pdf>: LCSH *Subject Headings Manual*, instruction sheet **H 370, "Broader Terms, Narrower Terms, and Related Terms," September 2023**. Fetched, text-extracted, quoted verbatim below. 200.
- <https://www.loc.gov/catworkshop/lcsh/PDF%20scripts/2-6_RTs.pdf>: LC's LCSH training module 2.6 on RTs. 200.
- <https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Layout>: MOS:SEEALSO. Fetched, quoted. 200.

### The brief asked whether anyone documents how many cross-references an entry should carry. LCSH does, and the answer is better than a number.

**On hierarchical references, H 370 §1.b, "Number of references to be made":**

> "Most single-concept headings belong to only one hierarchy and require only one BT. Some
> headings may incorporate more than one concept in more than one hierarchy and require
> additional BTs, but rarely more than three. Link a new heading only to the next broader
> heading in the logical hierarchy by means of a BT."

The worked example is explicit: `Automobiles BT Motor vehicles`, and **not** `Automobiles BT
Motor vehicles; BT Vehicles`. One step up, never two. This is the same principle as SKOS's
non-transitive `skos:broader` (Finding 1) arrived at from editorial practice rather than
from logic.

**On associative references, H 370 §2, quoted in full at the top of the section:**

> "In order to focus emphasis on hierarchical references, simplify future special projects to
> revise references in the subject authority file, and reduce the size and complexity of Library
> of Congress Subject Headings, restrictive rules are in effect for making related term
> references with the intended effect of minimizing the number of related term references that
> are made."

Then three prohibitions and three permissions.

**Do NOT make an RT:**

1. "To link two headings that begin with the same word or word stem." (Exception: when both are
   top terms in their discipline, e.g. `Libraries` and `Librarians`.)
2. "To link two headings that have a common broader term at any level of the hierarchy."
   (Exception, and the manual notes it is rare: "if the relationship is so close either that
   their meanings overlap considerably, or that one is needed to define the other, or that they
   are frequently used interchangeably.")
3. **"To link two headings if terms at higher levels of either of their respective hierarchies
   are already linked as related terms."** The worked example: do not link `World politics` and
   `International organization`, because `World politics` is already RT to `International
   relations`, which sits higher in the hierarchy of `International organization`.

**DO make an RT only:**

1. "To link two terms with meanings that overlap to some extent, or terms used somewhat
   interchangeably." (`Boats and boating` RT `Ships`.)
2. "To link a discipline and object studied." (`Ornithology` RT `Birds`.)
3. "To link persons and their fields of endeavor." (`Medicine` RT `Physicians`.)

And on why associative links exist at all:

> "Even though headings linked in this way are not hierarchically related, they are mentally
> associated to such an extent that the link is made explicit in order to reveal alternative
> headings that might be of interest. In order to avoid subjective judgments, a general
> guideline for making related term reference links in the subject authority file is that one
> of the headings should be strongly implied, according to the frames of reference of LCSH
> users, whenever the other is considered."

### The mechanism worth borrowing: prohibition 3, the transitive-redundancy rule

This is the highest-value single rule in this entire lane, and the site has nothing like it.

The Distillery caps foreground neighbours at 7 and off-site neighbours at 5. Those are
**display budgets**, not editorial criteria. They tell an author how many edges fit on a card
grid. They say nothing about *which* edges earn a place, so the pruning decision falls to
whoever is drafting, with no written standard, and the deep tier becomes the overflow bin.

LCSH's rule is criterion-based: **an edge is redundant if the relationship it asserts is
already recoverable one hop away through an edge that exists.** Applied here, on the Majors
page as written:

- Majors `parallel` Sridharan earns its place. It is the direct opposition at the centre of
  her argument, and it is recoverable from nothing else.
- Majors `parallel` Woods, labelled "Both write about systems that surprise their operators,"
  already demoted to `render_tier: deep`. Majors is `parallel` to Allspaw on sensemaking during
  incidents, and Allspaw and Woods are co-authors on resilience engineering. Under LCSH's rule
  the Woods edge is redundant through Allspaw and would not be made at all, rather than being
  made and then hidden. Same outcome on screen, but arrived at by a rule an editor can apply
  and a reviewer can check.
- Majors `parallel` Forsgren, labelled "Both treat instrumentation as the basis of an argument,
  from opposite ends," is the kind of edge LCSH's first prohibition is aimed at: two headings
  that share a broader concept (instrumentation) and are linked *because* they share it. The
  manual's position is that the shared parent already carries that information.

Adopting it: **before adding a neighbour, check whether the relationship is already reachable
in two hops through an existing edge or a shared `concept_slug`. If it is, do not add it.**
This is computable in `src/lib/graph.ts` and can be surfaced as a build warning naming the
path that makes the edge redundant. It converts the cap of 7 from a layout constraint into a
consequence: pages that follow the rule will rarely reach 7, and one that does has earned it.

The three permissions are also worth porting as a positive test. The site's `parallel` edge
label often has to argue for its own existence in prose ("Both treat X, from opposite ends"),
which is the tell that no criterion governs it. LCSH's own test is quotable and blunt: one
subject should be *strongly implied* whenever the other is considered.

### Wikipedia MOS:SEEALSO, the one rule the site is currently breaking

> "the 'See also' section should *not* repeat links that appear in the article's body."

> "Links in this section should be relevant and limited to a reasonable number."

> "Whether a link belongs in the 'See also' section is ultimately a matter of editorial
> judgment and common sense."

> "Editors should provide a brief annotation when a link's relevance is not immediately
> apparent, when the meaning of the term may not be generally known, or when the term is
> ambiguous."

The annotation rule the site already exceeds: every edge carries a mandatory `edge_label`,
which is stricter than Wikipedia's "when not immediately apparent."

The non-repetition rule is the one being broken. On the Majors page, Sridharan appears as a
`parallel` neighbour, in `further_in.if_you_want_breadth`, and inside the
`unified-storage-versus-pillars` frame gloss. Eilers appears as a `critiques` neighbour, as a
`limits` card, and again in `if_you_want_breadth`. Kálmán appears as an `antecedent` neighbour,
in a frame gloss, and in a `co_originators` entry. Each surface is hand-written, so the same
relationship is stated three or four times in three or four wordings, in one file, with
nothing keeping them consistent. Wikipedia's rule would say: state it once in the body, and
let the neighbour list carry only what the body does not. The stronger version, and the one
consistent with Finding 2, is to state it once in the *data* and derive the rest.

**The historical answer for encyclopedias, for completeness.** No major encyclopedia publishes
a numeric rule per entry. The nearest documented datum found: Compton's Encyclopedia's 1985
edition carried about 35,500 cross-references across roughly 10,000 articles, roughly three to
four per article. The editorial debate itself is documented at
<https://www.britannica.com/topic/encyclopaedia/Encyclopaedias-in-general>, where the argument
for liberal cross-referencing (it lets a reader recombine fragmented material) is set against
the objection that most cross-references are never followed. Treat the ~3–4 figure as one
observation, not a standard. **LCSH H 370 is the real prior art here; encyclopedia practice is
anecdote by comparison.**

---

## FINDING 6. Faceted classification (Ranganathan). Partial fit. The brief's question has a precise answer, and it is "no, but."

**Sources:**
- <https://www.redalyc.org/journal/3843/384357586006/html/>: Ferreira, Maculan & Naves, "Ranganathan and the faceted classification theory," *Transinformação* 29(3):279–295, 2017. Open access, fetched and quoted. 200.
- <https://egyankosh.ac.in/bitstream/123456789/33085/1/Unit-13.pdf>: IGNOU teaching unit on Colon Classification, a clean restatement of PMEST, rounds and levels. 200 at time of search.

### What it actually is

Colon Classification (Ranganathan, first published 1933) was the first fully faceted scheme.
Instead of enumerating every subject in advance, it analyses a subject into **facets** and
*constructs* a class number at classification time. Quoting Ferreira et al. (2017): "The facet
gathers terms that have the same type of relationship among themselves, and it can be
considered as a genre." Subfacets are "groups of coordinated terms derived from the application
of the same principle of division and that are mutually exclusive." The five fundamental
categories are **PMEST**: "Personality is 'the thing in itself'. Matter is the substance of
which the thing is composed. Energy is the action performed in or by the thing. Space is where
the action takes place, and Time is when it takes place" (Lancaster, quoted in Ferreira et al.).
Unlike enumerative schemes such as DDC and UDC, "numbers are not ready in the scheme; they are
constructed during document classification." **Citation order** (the PMEST sequence) fixes which
facet comes first, so that two classifiers analysing the same document produce the same string.

### Are frames and concepts facets in Ranganathan's sense? No.

A facet is a *dimension of analysis* with a closed set of mutually exclusive values derived from
one principle of division. Frames are not that. A frame is a subject, the thing being classified.
`concept_slug: high-cardinality` is a topic, not a value along an axis. Calling frames facets
would be the common modern misuse of the word, where "faceted" means any tag sidebar.

**But the site is already full of real facets, and it does not treat them as such.** Every one
of these is a strict Ranganathan facet: one principle of division, closed value set, mutually
exclusive.

| Field | Principle of division | Values |
|---|---|---|
| `attribution_kind` | relation of the thinker to the frame's origin | 7 |
| `edge_type` | kind of intellectual relationship | 6 |
| `strength` | editorial weight of the edge | 2 |
| `thinker_type` | form of the output | 5 |
| `doctrine_mode` | the site's editorial stance | 3 |
| `severity` (on limits) | scope of the failure | 2 |
| `type` (on body_of_work) | form of the work | 7 |
| `render_tier` | display prominence | 2 |
| `status` | life and activity | 3 |
| `primary_domains` | field | open list |

Note that `primary_domains` is the only one with an open value set, and it is also the only one
the site surfaces to a reader, as badges. That is backwards from a faceted-classification point
of view: the disciplined, closed facets are the ones that support reliable browse, and the open
one is the one that will drift.

### The mechanisms worth borrowing

**(a) Facet analysis as a schema audit.** Ranganathan's test for a good facet is that its values
are mutually exclusive and derived from a single principle. Run that test on `edge_type` and it
fails. `antecedent`, `extends`, `critiques` and `synthesizes` divide by *intellectual relation*.
`hosts` divides by *publishing relation*: it describes a platform fact, not a relation between
ideas, which is why the schema needed a special rule that "amplifying someone through a network
is not hosting" and a separate `hosted_items` structure hanging off it. `parallel` divides by
nothing at all; it is the residue left when none of the others fit. In facet terms `edge_type`
is two facets wearing one field. Finding 3's recommendation to split `antecedent` into subtypes
is the same diagnosis from ISO 25964's direction; this is the theory behind it.

**(b) Faceted browse, which the site has built the data for and not used.** Ten closed facets
are already captured on every page and none of them is navigable. A reader cannot ask for
mode-a pages, or for every frame whose `attribution_kind` is `distributed` (which is the byline
test's own output, and arguably the most interesting view the dataset can produce), or for every
`structural` limit on the site. At 40–60 thinkers this is genuinely useful navigation and it
requires no new authoring.

**(c) Citation order.** Ranganathan fixed facet order so that analysis is reproducible.
The site's analogue is the fixed 11-section render order for a thinker page (SCHEMA.md §4.3),
which already exists and is already enforced. Nothing to borrow; note it as a case where the
project independently arrived at the right idea.

### What does not apply

Colon Classification's notation, rounds and levels, the wall-picture principle, and the whole
apparatus of constructing a class number are solutions to shelving physical books in a linear
order. There is no linear order to produce here. Take facet *analysis*; leave the *classification*.

---

## FINDING 7. Zettelkasten / Luhmann. Adds one thing, and it is smaller than it looks.

**Sources:**
- <https://niklas-luhmann-archiv.de/nachlass/zettelkasten>: the Niklas Luhmann-Archiv's section on the card index; the digitised cards are browsable, e.g. <https://niklas-luhmann-archiv.de/bestand/zettelkasten/zettel/ZK_2_NB_9-8_V>. Both 200. The archive is a JavaScript application, so automated text extraction returns the page title only; browse it by hand.
- Johannes F. K. Schmidt, "Niklas Luhmann's Card Index: Thinking Tool, Communication Partner, Publication Machine," in *Forgetting Machines: Knowledge Management Evolution in Early Modern Europe* (Brill, 2016). Record: <https://www.semanticscholar.org/paper/Niklas-Luhmann%E2%80%99s-Card-Index%3A-Thinking-Tool%2C-Machine-Schmidt/7755fed320c4bb1e3517a18abf0b7791e35375bb>. **The Brill page and the DOI both return 403 to automated requests**; the chapter is real and is the standard scholarly account, but this session could not read it directly, so nothing below is quoted from it.

### The brief said "only if it adds something the above does not." Mostly it does not.

Three of the four commonly cited Zettelkasten disciplines are already covered, better, by the
standards above:

- *One idea per note (atomicity)*: the site already does this with frames, and SKOS's
  `skos:Concept` is the formal version.
- *No orphans; every new note links to an existing one*: LCSH H 370 §1.a(1) states it as a rule
  with enumerated exceptions: "'Orphan' headings, that is, headings having no BT, are generally
  prohibited in the subject authority file," permitted only for top terms, geographic regions
  and family names. That is a sharper statement of the same discipline, with the exception list
  the site would actually need (a thinker with no antecedent on the site yet).
- *Links carry meaning*: SKOS and TMDM both type their relations. Zettelkasten links are untyped.

### The one thing it adds: a thin index over a dense link graph

Luhmann's second card index holds roughly 67,000 cards. Its keyword index holds about **3,200
entries**. The index was never meant to be exhaustive, because the cards were arranged in
branching chains and a reader was expected to enter at one point and follow the sequence. The
index is an entry-point list, not a concordance.

That is a genuine counterweight to everything else in this document, and it is worth stating
plainly because the rest of this lane pushes toward more structure. The Zettelkasten argument is
that **when the link graph is dense and well-ordered, the index should be deliberately sparse**,
and that comprehensive cross-referencing is wasted effort. The Distillery's version of this
question is what `/concepts/` should contain. The current rule is that a concept page exists
when two or more thinkers hold a frame (SCHEMA.md §6.4), which is a completeness criterion and
will produce a concept page for every shared frame as the roster grows. Luhmann's practice
argues the opposite: concept pages should be few and chosen as entry points into the graph, not
generated wherever the join key fires. That is an editorial decision for Julie, and this is the
prior art on the sparse side of it.

Caveat on the figures: the 67,000 / 3,200 numbers are widely repeated from Schmidt's work and
are consistent across sources found here, but they were not read from Schmidt's own text in this
session. Treat them as well-attested rather than as first-party verified.

### What does not apply

Folgezettel, the branching decimal numbering that fixes each card's physical neighbour
permanently, solves the problem of inserting a card into a wooden box. It is a storage
mechanism, and its modern revival as a note-ID scheme is mostly cargo cult. The site has
slugs and a build step.

---

# RANKING: by how much each would actually improve this system

> **Superseded by the REVISED RANKING at the end of Part Two.** This ranking was built from
> standards documents alone. The peer-reviewed literature promoted one item, reframed another,
> and added a correction. Kept here to show what changed and why.

**1. LCSH H 370's transitive-redundancy rule for associative references (Finding 5).**
Replaces an arbitrary display cap of 7 with an editorial criterion an author can apply and a
build can check. It is the only thing found in this lane that answers the question "which of
these neighbours has earned its place," which is currently answered by taste alone. Cheap:
a two-hop reachability check in `src/lib/graph.ts` plus a paragraph in SCHEMA.md §4.11.

**2. Derive the return edge instead of warning about it (Findings 1, 2, 3, agreeing).**
SKOS makes `skos:related` symmetric by normative entailment (S23). TMDM stores a relationship
as one association with typed roles, so there is no second copy to drift. ISO 25964 names
auto-creation of the reciprocal as the preferred software behaviour and the warning as the
floor. Three independent standards, one answer, and the site is on the floor option. The
project has already made this exact move twice (long-read chapters, concept holders). The
80% version keeps frontmatter authoring and just fails on `edge_type` disagreement rather than
warning on absence.

**3. Type the lineage edges (Finding 3, ISO 25964 BTG/BTP/BTI).**
`antecedent` is carrying at least four distinguishable relationships that the Majors page has to
disambiguate in prose on every single edge. Splitting it is additive, does not touch existing
prose, and directly serves the byline test: "Kálmán gave her the word" and "Scuba gave her the
pattern" are different claims and the schema should be able to tell them apart.

**4. Make `co_originators.role` a closed vocabulary (Finding 4, CRediT and MARC relators).**
The smallest change on this list with the largest return. Free-text roles are unqueryable, unsortable and
unverifiable, and CRediT exists because the same problem broke scholarly authorship. Add a
`contested` value to `attribution_kind` at the same time, so the byline test has an outcome
between shipping and excluding.

**5. Faceted browse over the closed facets already captured (Finding 6).**
Zero new authoring; ten disciplined facets are sitting unused in frontmatter. "Every frame whose
attribution is distributed" is the byline test rendered as a view, and it is probably the most
interesting page the existing data can produce.

**6. Stub authority records for off-site neighbours (Finding 4).**
Small, boring, and prevents the specific failure authority control was invented for. Becomes
urgent somewhere around 20 thinkers.

**7. Split frame identity into exact and close match (Finding 1, S42/S45).**
Real, but the site is too small for it to bite yet, and `concept_slug` migrations are expensive
by design. Revisit at 40 thinkers.

**8. Reified edges carrying their own review provenance (Finding 2).**
The right long-term shape for "who is speaking," and the natural extension of `reading_review`
to the rest of the page. Not worth building before item 2 lands, because it presupposes edges
are first-class objects.

**9. Zettelkasten's sparse-index argument (Finding 7).**
One genuine idea, and it is a brake rather than a build: concept pages as chosen entry points
rather than as everything the join key produces. An editorial decision, not an engineering one.

## Poor fits, stated plainly

- **Authority control is not the attribution model.** VIAF and LC/NACO establish *identity*, not
  origination. An authority record cannot say who coined a term. The brief's hypothesis does not
  hold; the relevant tradition is relator terms and contributor-role taxonomies, which sit next
  door and do fit.
- **ISO 25964's term layer does not apply.** Concept/term separation, USE/UF equivalence,
  compound equivalence, multilingual labels and `ThesaurusArray` all exist to route a searcher
  from the word they typed to the document filed under another word. This site has no such
  retrieval problem.
- **Colon Classification's notation does not apply.** PMEST, rounds, levels and the wall-picture
  principle solve linear shelving. Take facet analysis; leave the class numbers.
- **Encyclopedia cross-reference practice is anecdote.** No major encyclopedia publishes a
  per-entry numeric rule. The nearest datum is Compton's 1985 edition at roughly 3–4
  cross-references per article across ~10,000 articles. LCSH H 370 is the real standard here.
- **Frames are not facets.** They are the subjects being classified. The site's *enum fields*
  are the facets.
- **Topic Maps as a technology is dormant.** Borrow the data model as an argument; do not adopt
  the stack.

---

# URL verification log

Every URL cited above was checked in this session on 2026-09-18.

| URL | Status | Note |
|---|---|---|
| https://www.w3.org/TR/skos-reference/ | 200, fetched | S-numbered statements quoted |
| https://www.w3.org/2004/02/skos/ | 200 | SKOS home |
| https://www.isotopicmaps.org/sam/sam-model/ | 200, fetched | TMDM, quoted |
| https://www.isotopicmaps.org/sam/ | 200 | TMDM landing |
| https://www.isotopicmaps.org/tmcl/2010-03-25/ | 200 | TMCL |
| https://xml.coverpages.org/TM-iso13250-2nd-ed-v2.pdf | 200 | ISO/IEC 13250 2nd ed. |
| https://www.dublincore.org/specifications/skos-thes/ns/ | 200, fetched | ISO 25964 features, quoted |
| https://www.niso.org/schemas/iso25964 | 200 | official ISO 25964 schemas page |
| https://www.niso.org/sites/default/files/stories/2017-11/SP_clarke_zeng_isqv24no1.pdf | 200 | Clarke & Zeng; text layer would not extract, not quoted |
| https://cdn.standards.iteh.ai/samples/53657/808a87d0fbea484bb0013de6a2eea4a9/ISO-25964-1-2011.pdf | 200 | free sample, front matter only |
| https://www.iso.org/standard/53657.html | **403 to scripted requests** | live but paywalled and bot-blocked |
| https://help.poolparty.biz/8.1/en/poolparty-reference-and-glossary/iso-25964-1-guidelines-for-thesaurus-management-software-and-how-poolparty-maps-to-them.html | 200 | vendor restatement of the software clauses |
| https://www.loc.gov/aba/publications/FreeSHM/H0370.pdf | 200, fetched, text-extracted | **quoted verbatim throughout Finding 5** |
| https://www.loc.gov/catworkshop/lcsh/PDF%20scripts/2-6_RTs.pdf | 200 | LCSH RT training module |
| https://www.loc.gov/marc/relators/relaterm.html | 200, fetched | **relator definitions quoted verbatim, re-checked against raw HTML** |
| https://credit.niso.org/ | 200, fetched | 14 roles listed |
| https://www.niso.org/publications/z39104-2022-credit | 200 | ANSI/NISO Z39.104-2022 |
| https://www.oclc.org/en/viaf.html | 200 | OCLC on VIAF |
| https://viaf.org/ | **403 to scripted requests** | live in a browser |
| https://id.loc.gov/authorities/subjects.html | **403 to scripted requests** | live in a browser |
| https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Layout | 200, fetched | MOS:SEEALSO quoted |
| https://www.britannica.com/topic/encyclopaedia/Encyclopaedias-in-general | **403 to scripted requests** | live in a browser |
| https://www.redalyc.org/journal/3843/384357586006/html/ | 200, fetched | Ferreira, Maculan & Naves 2017, quoted |
| https://egyankosh.ac.in/bitstream/123456789/33085/1/Unit-13.pdf | found via search, not re-checked | IGNOU Colon Classification unit |
| https://niklas-luhmann-archiv.de/nachlass/zettelkasten | 200 | JS app; no text extraction |
| https://niklas-luhmann-archiv.de/bestand/zettelkasten/zettel/ZK_2_NB_9-8_V | 200 | a digitised card |
| https://www.semanticscholar.org/paper/Niklas-Luhmann%E2%80%99s-Card-Index%3A-Thinking-Tool%2C-Machine-Schmidt/7755fed320c4bb1e3517a18abf0b7791e35375bb | 202 | Schmidt 2016 record |
| https://brill.com/display/book/9789004325258/B9789004325258_014.xml | **403** | Schmidt chapter, publisher page |

Part One status: COMPLETE.

---
---

# PART TWO: THE SCHOLARLY LAYER (Elicit)

Added 2026-09-18 after the team lead asked for the peer-reviewed literature rather than
standards documents alone. Every DOI below was checked against the DOI Foundation's handle
registry (`https://doi.org/api/handles/<doi>`, responseCode 1 = registered and resolvable).
Standards documents stay in Part One; Elicit does not index them.

The headline: **all three of Part One's top recommendations turn out to be named, implemented,
and empirically measured quality checks in the SKOS literature.** They were not deductions
after all. They are findings.

---

## FINDING 8. qSKOS and Skosify. The reciprocity problem is measured, named, and the fix is derivation.

**Sources:**
- Mader, Haslhofer & Isaac, "Finding Quality Issues in SKOS Vocabularies," TPDL 2012. DOI <https://doi.org/10.1007/978-3-642-33290-6_25> (registered). Open preprint: <https://arxiv.org/pdf/1206.1339>, also <https://eprints.cs.univie.ac.at/3444/1/finding_skos_quality_issues.pdf>.
- Suominen & Mader, "Assessing and Improving the Quality of SKOS Vocabularies," *Journal on Data Semantics*. Open PDF: <https://seco.cs.aalto.fi/publications/2014/suominen-mader-skosquality.pdf>. **Fetched and text-extracted; all figures below are quoted from it.** Springer record: <https://link.springer.com/article/10.1007/s13740-013-0026-0>.
- Suominen & Hyvönen, "Improving the Quality of SKOS Vocabularies with Skosify," EKAW 2012. DOI <https://doi.org/10.1007/978-3-642-33876-2_34> (registered). Open PDF: <https://seco.cs.aalto.fi/publications/2012/suominen-hyvonen-skosify-2012.pdf>.
- qSKOS quality-issue catalogue: <https://github.com/cmader/qSKOS/wiki/Quality-Issues>. Fetched; descriptions quoted.

### The three checks that matter, quoted from the qSKOS catalogue

> **Unidirectionally Related Concepts.** "Reciprocal relations (e.g., broader/narrower, related,
> hasTopConcept/topConceptOf) should be included in controlled vocabularies."

> **Valueless Associative Relations.** "Two concepts are sibling, but also connected by an
> associative relation. In that context, the associative relation is not necessary."

> **Hierarchical Redundancy.** "It finds pairs of concepts (A,B) that are directly hierarchically
> related but there also exists an hierarchical path through a concept C."

Those are, in order, Part One's recommendation 2 (derive the return edge), recommendation 1
(LCSH H 370's redundancy prohibition), and the "one step up, never two" rule from H 370 §1.b.
Each is a computable function with an open-source implementation.

### The measured prevalence, from Suominen & Mader over 24 published vocabularies

- **Unidirectionally Related Concepts are "contained in all except three vocabularies
  (GeoNames, NYTP, NYTL) which assert the complete set of reciprocal relations."**
  Twenty-one of twenty-four professionally maintained vocabularies fail reciprocity. This is
  not a theoretical risk. It is the normal state of hand-authored graphs, and it is exactly
  where the Distillery sits today with a warning rather than a derivation.
- **Valueless Associative Relations "have been detected in 16 vocabularies."** The paper's
  worked example is GEMET, which relates "leukaemia" to "cancer" although both share the parent
  "human disease," and the authors' comment is that "here a hierarchical structure might be
  worth considering." That is the same editorial failure as using `parallel` to avoid deciding
  who came first.
- **Relation Clashes occur in 13 of the 24** vocabularies. The paper measures how far the clash
  reaches: for two vocabularies the maximum is one hierarchy level, but Reegle and IPSV span
  three or four, and "the highest number of hierarchy levels that were connected by associative
  relations were found in SNOMED (7), RAMEAU (26), and DBpedia (38)." Redundant associative
  edges do not stay local; they accumulate across the hierarchy and become invisible to an
  editor reading one entry at a time.

### The justification for pruning, which is the answer to the density question

Suominen & Mader ground Valueless Associative Relations in the standards and in the thesaurus
literature:

> "The ISO/DIS 25964-1 standard suggests that terms that share a common broader term should not
> be related associatively if this relation is only justified by the fact that they are
> siblings. This is advocated by Hedden and Aitchison et al. who point out 'the risk that
> thesaurus compilers may overload the thesaurus with valueless relationships, having a
> negative effect on precision.'"

**"Overload the thesaurus with valueless relationships, having a negative effect on precision"**
is the closest thing in this literature to a stated cost of over-linking, and the cost it names
is precision, not reader confusion.

### The fix, and the honest counter-argument

Skosify's correction heuristic for the reciprocity issue, quoted:

> "We enrich the SKOS vocabulary with bidirectional relationships when possible, i.e., infer
> related relationships for both directions and also infer the inverse relationships for
> broader and narrower."

Derivation, not authoring twice. That is Part One's recommendation 2 as shipped software.

The counter-argument is in the paper and deserves to be stated, because it cuts against the
recommendation: "On the other side, explicit assertion of inferable facts can be seen as
redundant." The literature is genuinely split on whether to *materialise* the return edge or
to leave it inferable. Its value is for "systems where no inferencing is or can be used."

For the Distillery this resolves cleanly, and in favour of the recommendation. Astro's build is
the inference engine and there is no runtime reasoner, so the return edge must be materialised
somewhere. The only question is whether a human materialises it in a second file, or the build
does. qSKOS's answer, and Skosify's, is the build.

### What this changes about Part One's recommendations

It raises confidence and lowers effort on both. There are named checks with published
definitions and reference implementations, so `src/lib/checks.ts` can borrow the definitions
rather than invent them, and SCHEMA.md can cite them. It also supplies vocabulary the project
can adopt directly: `valueless associative relation` is a better name for the thing a reviewer
is looking for than "an edge that doesn't earn its place."

---

## FINDING 9. Cross-reference density. The research exists, it does not support a cap, and it points somewhere better.

This is the question the team lead cared most about: is there real research on how many "see
also" links an entry should carry before they stop helping a reader, and does it justify the
cap of 7?

**Short answer: the evidence does not support a cap at all. It supports annotation and ordering,
both of which the site already has. The cap of 7 is a layout decision wearing a reader-outcome
costume, and the honest move is to call it that.**

### Two literatures, and the site has been reading neither

**(a) Indexing and lexicography, which measures what practitioners actually do.**

- Diodato, "Cross-references in back-of-book Indexes," *The Indexer* 17(3), 1991. DOI <https://doi.org/10.3828/indexer.1991.17.3.10> (registered). An analysis of 447 books; 376 indexes examined, 300 of which had cross-references. Quoting the abstract: "The average index had 32 cross-references per index or 96 cross-references per 1,000 text pages." Also: "'See' references were surprisingly dominant over 'see also'," and the references most often showed "synonomy, class membership, and agent/activity relationships." Those three relationship kinds map onto the site's equivalence (shared `concept_slug`), hierarchy (`antecedent`), and association (`parallel`).
- Kochen & Tagliacozzo, "A Study of Cross-Referencing," *Journal of Documentation*, 1968. DOI <https://doi.org/10.1108/EB026453> (registered). **The paper that asks the team lead's question directly.** From the abstract: "The problem of determining the optimal cross-reference structure for a given index and for a given community of users is discussed. A cross-reference structure is represented as a graph in which the nodes are index terms and the links are relations between index terms. In order to clarify the concept of 'level of cross-referencing' the characteristics of cross-reference structures are studied. Some measures of cross-reference distributions are suggested as a means of comparing the cross-referencing levels of subject indexes." Note what it produces: *measures of the distribution*, and an explicitly user-relative optimum. Not a number. Fifty-eight years on, that is still the state of the art.
- Tarp, "Theoretical foundations of the so-called cross-reference structures," *Lexicographica*, 1999. DOI <https://doi.org/10.1515/9783110244199.114> (registered). Its table of contents carries a section literally titled **"5.2 How many cross-references?"**, alongside "5.1 When is a cross-reference possible and appropriate?" and "5.4 The position of cross-references." Not read in full in this session; flagged as the single most on-point item found and worth reading before any change to §4.11.
- Hudson, "Cross-referencing conundrums in book indexing," *The Indexer*, 2026. DOI <https://doi.org/10.3828/index.2026.2> (registered). Recent working-indexer treatment; the abstract's conclusion is that "in many situations there is no one perfect solution," which is itself a finding about the shape of the answer.

**(b) Hypertext psychology, which measures what links do to readers.** This is where a cap
would have to be justified, and it is where the evidence turns against one.

- DeStefano & LeFevre, "Cognitive load in hypertext reading: A review," *Computers in Human Behavior*, 2007. DOI <https://doi.org/10.1016/j.chb.2005.08.012> (registered). 464 citations; the canonical review, and the source of the claim that number of links per page increases cognitive load.
- Khan & Locatis, "Searching through cyberspace: the effects of link display and link density on information retrieval from hypertext on the World Wide Web," *JASIST* 49(2), 1998, Q1. DOI <https://doi.org/10.1002/(SICI)1097-4571(1998)49:2%3C176::AID-ASI7%3E3.0.CO;2-W>. Finds for a cap: "Low link densities displayed in list format produced the best overall results, in terms of search accuracy, search time, number of links explored, and search task prioritization."
- Niederhauser, Reynolds, Salmen & Skolmoski, "The Influence of Cognitive Load on Learning from Hypertext," *Journal of Educational Computing Research*, 2000, Q1. DOI <https://doi.org/10.2190/81BG-RPDJ-9FA0-Q7PA> (registered). Also finds for restraint: "extensive use of hyperlinks to compare and contrast concepts when reading hypertext may inhibit learning." Worth noting that comparing and contrasting concepts is precisely what an `adjacent_thinkers` grid invites.
- **Against a cap**, and this is the study that most directly tests it: Melguizo, Salmerón, Madrid & Van Oostendorp, "The Role of Reading Order and Monitoring Skills During Hypertext Comprehension," *The Ergonomics Open Journal* 2, 2009, pp. 97ff. DOI <https://doi.org/10.2174/1875934300902010097> (registered). Open PDF: <http://benthamopen.com/contents/pdf/TOERGJ/TOERGJ-2-97.pdf>. **Fetched and text-extracted; quoted verbatim.** Experiment 1 put 45 Utrecht University students (3 excluded) through a 21-page, 4,440-word hypertext on neuropsychology, in a **3-links versus 8-links** condition crossed with link support. The result:

  > "Second, the effects of the number of links were not significant. In contrast to the
  > predictions of DeStefano and LeFevre [8], our results did not show any evidence of an
  > increase on cognitive load when more links were presented, nor an effect on learning."

  Note the range tested. Three against eight brackets the site's cap of seven almost exactly,
  and the difference did not register.
- **Also against a cap:** Boyle & Teh, "To link or not to link: an empirical comparison of hypertext linking strategies," ACM SIGDOC 1992. DOI <https://doi.org/10.1145/147001.147035> (registered). "the lightly linked network required users to visit significantly more nodes to answer a question than the heavily linked equivalent. Heavy linking enabled users to find the answers to questions more quickly, but not significantly so. There was little difference in the error rate." Small (12 subjects), but it points the same way.

### What the evidence does support

The Melguizo study found two things that were significant where link count was not, and the
site is already doing both.

1. **Reading order beats link count.** "Participants following a high text coherence reading
   order suffered less cognitive load and also achieved a better learning at situational level
   than those following a low text coherent reading order." The site's `further_in` block
   (`start_here`, then `then_read` as an ordered list) is a prescribed coherent reading order.
   That is the intervention with evidence behind it, and it currently renders near the bottom
   of the page.
2. **Annotated links beat bare links.** "participants in the support condition followed as
   predicted a high coherent reading order and achieved better comprehension outcomes." The
   support was a semantic-similarity-based suggestion attached to each link. The site's
   mandatory `edge_label` on every neighbour is a stronger version of the same thing, written
   by an editor rather than computed by LSA. Supporting evidence from Antonenko, Niederhauser &
   Thompson (2007), who tested "leads," one-sentence popup summaries on hover, with EEG measures
   and found "leads significantly decreased cognitive load in the context of conceptually rich
   instructional hypertext."

### Honest assessment of the evidence quality

The finding that most helps the site is also the weakest citation in this section. *The
Ergonomics Open Journal* is a Bentham Open title with a contested reputation, the sample is 42
usable participants, the link-suggestion arm was "only partly analysed... because of low number
of subjects," and the authors are reporting a null result, which carries the usual limits. It
is one study against a well-cited review and two Q1 papers pointing the other way.

So the correct reading is not "more links are fine." It is: **the literature is genuinely
divided, no study found a threshold anywhere near seven, and nobody has published a number.**
An editorial cap is defensible as a design choice. It is not defensible as a reader-outcome
claim, and SCHEMA.md §4.11 should not imply otherwise.

### What this changes

1. **Keep the cap, restate its justification.** Change §4.11 to say the caps are a layout
   budget for the card grid, and that the editorial criterion for which edges earn a place is
   the valueless-associative-relation test (Finding 8) and LCSH H 370's redundancy rule
   (Finding 5). Right now the number is doing work the number cannot do.
2. **Treat `further_in` as load-bearing rather than as a footer.** It is the only element on
   the page with direct experimental support, and it currently sits ninth of eleven sections.
   Whether it moves is Julie's call; that it is undervalued is the finding.
3. **Never drop `edge_label`.** If a future iteration ever considers a compact neighbour list
   without labels to fit more edges on screen, this is the evidence against it. The annotation
   is the part that works.
4. **Read Tarp 1999 §5.2 before changing the cap.** It is the one source found that treats the
   question head-on and was not read here.

---

## FINDING 10. Topic Maps versus RDF. W3C confirms Part One's structural claim, and names the cost.

**Sources:**
- W3C Semantic Web Best Practices, "Guidelines for RDF/Topic Maps Interoperability," 30 June 2006. <https://www.w3.org/2001/sw/BestPractices/RDFTM/guidelines-20060630.html>. Fetched and quoted. 200.
- Garshol, "Living with Topic Maps and RDF," XML Europe 2003. 77 citations; the canonical comparison. **Its long-standing home at `ontopia.net/topicmaps/materials/tmrdf.html` no longer resolves (DNS failure), so it is cited here without a working URL.** Record: <https://www.researchgate.net/publication/246705765_Living_with_topic_maps_and_RDF>.
- Lacher & Decker, "On the Integration of Topic Maps and RDF data," SWWS 2001. 53 citations.
- Garshol, "Q: A model for topic maps: Unifying RDF and topic maps," Extreme Markup Languages, 2005.

### The finding

The W3C guidelines exist because the two models do not line up, and the specific mismatch is
exactly the mechanism Part One recommended borrowing. Quoting the guidelines:

> "Associations with multiple signatures are not supported by these Guidelines."

RDF has no role concept at all, so the guidelines had to invent `rdftm:subject-role` and
`rdftm:object-role` to annotate binary associations, and to route anything non-binary through
`rdftm:N-aryRelation` with intermediate blank nodes. On reification:

> "RDF does not have a facility for reifying the relation represented by a statement, only the
> statement itself."

And on identity:

> "An RDF node can have at most one URIref, whereas a topic can have multiple identifiers of
> different types (subject identifier, subject locator, item identifier)."

### Why this matters for the Distillery

Part One recommended modelling a relationship as one object with typed roles rather than two
directed edges, on TMDM's precedent. This confirms it is a real structural difference and not a
notational one, and it also warns what is given up. If the site ever wants its graph to be
consumable as RDF or SKOS, roles will not survive the trip cleanly.

That is a genuine tension between Finding 1 (adopt SKOS semantics) and Finding 2 (adopt TMDM
structure), and it resolves in favour of the pragmatic middle:

- **Model with roles internally.** The Astro build is the consumer, and roles are the correct
  shape for an asymmetric relationship recorded once.
- **Export to SKOS if it ever ships a vocabulary.** `parallel` becomes `skos:related`,
  `antecedent` becomes `skos:broader`, per-side labels become `skos:scopeNote`, and the role
  distinctions are lost in the export. That is an acceptable loss for an export nobody has
  asked for yet.

Do not try to be both at once. The W3C group spent years on that problem and produced a lossy
mapping with blank nodes, which is more machinery than a 40-to-60-page site should carry.

---

## FINDING 11. Facet analysis in the scholarship. Confirms Part One, and supplies the citation for faceted browse.

**Sources:**
- Hjørland, "Facet analysis: The logical approach to knowledge organization," *Information Processing & Management*, 2013. DOI <https://doi.org/10.1016/j.ipm.2012.10.001> (registered). 140 citations.
- Broughton, "The need for a faceted classification as the basis of all methods of information retrieval," *ASLIB Proceedings*, 2006. DOI <https://doi.org/10.1108/00012530610648671> (registered). 205 citations.
- Broughton, "Faceted classification as the basis of all information retrieval," 2017.
- Ellis & Vasconcelos, "Ranganathan and the Net: using facet analysis to search and organise the World Wide Web," *ASLIB Proceedings*, 1999. DOI <https://doi.org/10.1108/EUM0000000006956> (registered). 54 citations.
- Tunkelang, *Faceted Search*, Synthesis Lectures, 2009. DOI <https://doi.org/10.1007/978-3-031-02262-3> (registered). 107 citations.
- Hearst, "Faceted Metadata for Information Architecture and Search," CHI 2007. DOI <https://doi.org/10.1145/1240624.2180994> (registered).
- Uddin & Janecek, "Performance and usability testing of multidimensional taxonomy in web site search and navigation," *Performance Measurement and Metrics*, 2007, Q1. DOI <https://doi.org/10.1108/14678040710748058> (registered).

### The finding

Part One's claim that facet analysis is alive in modern systems is not a stretch; it is the
settled position in the field. Broughton (2006) surveyed subject-access tools and "finds that
faceted systems are now very common, with a major increase in their use over the last 15
years," including "use of the faceted approach as a means of structuring information on
commercial web sites." Broughton (2017) adds why: "the integrated nature of the faceted model,
its clear explication of categorization, order, and intra- and inter-facet relationships, which
can be rolled out across different species of knowledge organization system. The logic of this
structures is readily exploited in automated systems."

Ellis & Vasconcelos (1999) make the argument specific to the web and to *a posteriori*
classification, which is what the Distillery does: facets derived "using words from the subject
field as the concept terms in the classification derived."

Hjørland (2013) is the dissent worth knowing, and it sharpens Part One rather than contradicting
it. His position is that facet analysis is a *logical* approach to knowledge organization and
that logical division alone cannot settle how a domain should be carved; that requires
substantive knowledge of the domain. Applied here: the site's facets are good precisely because
they were derived editorially from what these pages actually needed, not from a general theory,
and `edge_type` is weak precisely where it stopped being domain-driven and became a catch-all.

Uddin & Janecek (2007) is the empirical support for Part One's faceted-browse recommendation:
a prototype faceted classification system compared against a single-classification system on a
real site, evaluated on navigation and searching tasks. Tunkelang's *Faceted Search* and
Hearst's CHI work are the practical design references if that recommendation is taken up.

### What this changes

Nothing structural. It supplies citations for a recommendation Part One already made on
theoretical grounds, and it gives the facet audit of `edge_type` a named authority behind it.

---

# REVISED RANKING after the scholarly layer

Part One's ranking was built from standards documents. The peer-reviewed literature moved three
things and reversed one. This supersedes the ranking above.

**1. Derive the return edge. (Was 2, now 1.)**
Promoted because it stopped being an argument and became a measurement. Suominen & Mader found
unidirectional relations in **21 of 24** published vocabularies, all of them professionally
maintained. Hand-authoring both halves does not work at any scale, anywhere, for anyone. The
check has a name (Unidirectionally Related Concepts), a published definition, and a reference
implementation whose fix is derivation. Nothing else in this document has that weight of
evidence.

**2. Prune edges by criterion, not by count. (Was 1, now 2, and the framing changes.)**
Still near the top, but the justification moves. LCSH H 370's redundancy prohibition is the
editorial rule; qSKOS's **Valueless Associative Relations** ("Two concepts are sibling, but
also connected by an associative relation. In that context, the associative relation is not
necessary") is the computable version, found in **16 of 24** vocabularies. The stated cost of
over-linking, from the thesaurus literature by way of Suominen & Mader, is "a negative effect
on precision."

**3. Stop justifying the cap of 7 as a reader-outcome claim. (New, and it is a correction.)**
The one study that tested 3 links against 8 found "the effects of the number of links were not
significant," explicitly contradicting DeStefano & LeFevre's prediction. That range brackets
the site's cap. The literature is divided, the strongest evidence on the other side is about
search tasks rather than reading, and **nobody has published a number.** Keep the cap as a
layout budget and say so in SCHEMA.md. This costs nothing and removes a claim the project
cannot support.

**4. Protect `edge_label` and promote `further_in`. (New.)**
The two interventions with experimental support are annotation and reading order, and the site
has both. Melguizo et al. found link support produced "better comprehension outcomes"; Antonenko
et al. found one-sentence popup summaries "significantly decreased cognitive load." Meanwhile
`further_in`, a prescribed coherent reading order, renders ninth of eleven sections. The
evidence says that ordering is doing more work than the neighbour grid.

**5. Type the lineage edges. (Was 3.)**
Unchanged in substance. ISO 25964's BTG/BTP/BTI, plus Hjørland's argument that facets must be
domain-driven, which is the case for deriving the subtypes from what the pages already say in
prose rather than from a general taxonomy.

**6. Close vocabulary for `co_originators.role`. (Was 4.)**
Unchanged. CRediT and MARC relators.

**7. Faceted browse over the closed facets. (Was 5.)**
Unchanged, now with Uddin & Janecek as empirical support and Tunkelang and Hearst as design
references.

**8–10. Stub authority records, exact/close frame identity, reified edges.** Unchanged from
Part One, with the caveat from Finding 10 that roles and RDF do not mix, so the reification
idea should be built for the Astro build and not for a future SKOS export.

## What the scholarly layer did NOT find

- **No number.** No study, standard, or editorial manual published in the last fifty-eight
  years gives a maximum count of cross-references per entry. Kochen & Tagliacozzo framed the
  question in 1968 and produced distribution measures and a user-relative optimum instead of a
  threshold. That remains the state of the art. Tarp 1999 §5.2 is titled "How many
  cross-references?" and was not read in this session; it is the one remaining lead.
- **No support for the cap specifically.** Seven is not a finding from anywhere.
- **No attribution model in the KO literature.** Confirmed again. SKOS, TMDM and ISO 25964 all
  lack one. The attribution tradition is bibliographic (relators) and scholarly (CRediT).

# DOI AND URL VERIFICATION LOG, PART TWO

DOIs checked against `https://doi.org/api/handles/<doi>`; `rc=1` means registered. URLs checked
with an HTTP request. All on 2026-09-18 and 2026-09-20.

| Item | Identifier | Status |
|---|---|---|
| Diodato 1991, *The Indexer* | 10.3828/indexer.1991.17.3.10 | rc=1 |
| Kochen & Tagliacozzo 1968, *J. Documentation* | 10.1108/EB026453 | rc=1 |
| Tarp 1999, *Lexicographica* | 10.1515/9783110244199.114 | rc=1 |
| Hudson 2026, *The Indexer* | 10.3828/index.2026.2 | rc=1 |
| DeStefano & LeFevre 2007, *CHB* | 10.1016/j.chb.2005.08.012 | rc=1 |
| Madrid, Oostendorp & Melguizo 2009, *CHB* | 10.1016/j.chb.2008.06.005 | rc=1 |
| Melguizo et al. 2009, *Ergonomics Open J.* | 10.2174/1875934300902010097 | rc=1; PDF fetched, quoted |
| Melguizo et al. full text | http://benthamopen.com/contents/pdf/TOERGJ/TOERGJ-2-97.pdf | 200 |
| Niederhauser et al. 2000, *JECR* | 10.2190/81BG-RPDJ-9FA0-Q7PA | rc=1 |
| Boyle & Teh 1992, SIGDOC | 10.1145/147001.147035 | rc=1 |
| Schurer et al. 2023, *Acta Psychologica* | 10.1016/j.actpsy.2023.103836 | rc=1 |
| Khan & Locatis 1998, *JASIST* | 10.1002/(SICI)1097-4571(1998)49:2<176::AID-ASI7>3.0.CO;2-W | abstract via Elicit |
| Mader, Haslhofer & Isaac 2012, TPDL | 10.1007/978-3-642-33290-6_25 | rc=1 |
| qSKOS preprint | https://arxiv.org/pdf/1206.1339 | 200 |
| qSKOS preprint (Vienna) | https://eprints.cs.univie.ac.at/3444/1/finding_skos_quality_issues.pdf | 200 |
| Suominen & Mader, *J. Data Semantics* | https://seco.cs.aalto.fi/publications/2014/suominen-mader-skosquality.pdf | 200; fetched, text-extracted, quoted |
| Suominen & Mader, publisher record | https://link.springer.com/article/10.1007/s13740-013-0026-0 | 200 |
| Suominen & Hyvönen 2012, EKAW | 10.1007/978-3-642-33876-2_34 | rc=1 |
| Skosify PDF | https://seco.cs.aalto.fi/publications/2012/suominen-hyvonen-skosify-2012.pdf | 200 |
| qSKOS quality-issue catalogue | https://github.com/cmader/qSKOS/wiki/Quality-Issues | 200; fetched, quoted |
| W3C RDFTM Guidelines 2006 | https://www.w3.org/2001/sw/BestPractices/RDFTM/guidelines-20060630.html | 200; fetched, quoted |
| Garshol 2003, "Living with Topic Maps and RDF" | no DOI | **original URL at ontopia.net no longer resolves** |
| Hjørland 2013, *IP&M* | 10.1016/j.ipm.2012.10.001 | rc=1 |
| Broughton 2006, *ASLIB Proc.* | 10.1108/00012530610648671 | rc=1 |
| Ellis & Vasconcelos 1999, *ASLIB Proc.* | 10.1108/EUM0000000006956 | rc=1 |
| Tunkelang 2009, *Faceted Search* | 10.1007/978-3-031-02262-3 | rc=1 |
| Hearst 2007, CHI | 10.1145/1240624.2180994 | rc=1 |
| Uddin & Janecek 2007 | 10.1108/14678040710748058 | rc=1 |
| Koren, Zhang & Liu 2008, WWW | 10.1145/1367497.1367562 | rc=1 |

Part Two status: COMPLETE.
