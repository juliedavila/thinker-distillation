# Will Larson: return edges to apply on existing pages

Described here, not applied. A later serial stage edits the neighbour pages, because two candidates
drafting at the same time would collide on a shared neighbour. Nothing in this file has been
written to `src/content/thinkers/`.

`will-larson.md` carries four edges to thinkers who have pages here (Fournier, Majors, Dekker,
Forsgren) and three to thinkers who do not (Rumelt, Goedecke, Reilly). Only the first four can take
a return edge. The build warns today on all four, per SCHEMA section 10, until they are applied.

---

## 1. `nicole-forsgren.md` — fix the existing edge before anything else

This is a correction to a shipped page and it is the one item on this list that cannot wait. The
page currently carries, at `adjacent_thinkers` entry with `target_slug: will-larson`:

```yaml
    edge_type: critiques
    edge_label: >
      The SPACE-as-pseudo-precision critique. Dimensionalizing developer
      experience risks treating the dimensions as commensurable when they
      aren't. The framework's organizing power can outrun its empirical floor;
      Larson is the most measured voice on this risk.
    strength: secondary
```

The primary text says close to the opposite. He called Accelerate's definition of developer
productivity "quite good" and "one of the best definitions of developer productivity I've
encountered so far" in 2018 [S:30], and in December 2024 he named DORA, SPACE and DX Core 4
together as "all great frameworks" [S:31]. No text was found in which he argues that SPACE
dimensionalizes developer experience into false precision. His actual argument is a
theory-of-improvement gap: output metrics are "very effective at measuring if something has
improved, but very bad at focusing attention towards improving that metric" [S:31]. That is a
claim about what a number can do next, and it has nothing to do with commensurability.

All five inclusion seats called for this recast, and Seat 3 named the mechanism that makes it
urgent: SCHEMA 4.11 auto-surfaces an edge whose target has a page here, promotes it to the
foreground and defaults it to `primary`, and the build warns when a critic with a page here is not
`primary`. Today the false claim sits quietly at `strength: secondary` with no page behind it. The
day `will-larson.md` ships, the build promotes it to a foreground primary critic edge on a shipped
page. Fixing it after that is fixing it late.

**Apply:**

```yaml
  - target_slug: will-larson
    display_name: Will Larson
    edge_type: extends
    edge_label: >
      The theory-of-improvement argument, made by someone who accepts the
      instruments. Larson called Accelerate's definition of developer
      productivity one of the best he had encountered, and later named DORA,
      SPACE and DX Core 4 together as great frameworks. His case is about what
      a measure can do next: output metrics are effective at showing whether
      something improved and poor at directing attention toward improving it,
      so a measurement program needs a theory of improvement beside its
      numbers.
    strength: primary
```

`extends` rather than `parallel`, because he takes these frameworks as given and builds a further
requirement on top of them, which is what `extends` is for. `strength: primary` follows
automatically once he has a page here, so setting it by hand keeps the file honest about what the
build will do anyway. Ledger: [S:30] [S:31].

**Also on that page, and separate from the edge:** nothing else asserts the pseudo-precision
reading, so no other text needs to change. Worth one grep for "pseudo-precision" and "commensurable"
across `src/content/` before closing this item, per the calibration rule that a reconcile is not
done until the retired phrase and its synonyms come back clean.

---

## 2. `camille-fournier.md` — `parallel`

She has no Larson edge in `adjacent_thinkers` today, only a mention in
`further_in.if_you_want_breadth` ("Will Larson's *An Elegant Puzzle* and *Staff Engineer* for the
same territory from a different angle"). That line is fine as it stands and needs no edit. The
graph edge is missing.

The hazard here is sameness, because these two pages sit closer to each other than any other pair
in this neighbourhood. The edge label has to say what each one does that the other does not, and it
must not repeat the Fournier Council's characterization of his taxonomy as "a sharper, more current
take on the same career territory," which is a Council opinion about the relationship and not a
fact about either body of work.

**Apply:**

```yaml
  - target_slug: will-larson
    display_name: Will Larson
    edge_type: parallel
    edge_label: >
      The other track above senior engineer. *The Manager's Path* follows the
      management sequence one role at a time; Larson catalogued the
      individual-contributor roles beside it, and spends most of his writing on
      what someone in them does without a reporting line to act through. His
      account of authority as a loan from a sponsor, and of what happens to a
      policy that runs on exceptions, are the two parts of his corpus these
      books do not reach.
    strength: primary
```

Ledger: the claims in this label are carried by [S:12] [S:13] [S:15] [S:16] on the Larson page and
need no new lines in `_working/camille-fournier/facts.md`. If the applying stage prefers the edge
to cite, add the two lines there rather than restating them.

**Do not touch `tech-lead-as-role`.** It is Fournier's frame, `extended`, with Patrick Kua behind
it. Larson's Tech Lead archetype is a different object under a colliding name, and `concept_slug` is
a permanent join key. The Larson page gives the taxonomy its own slug, `staff-engineer-archetypes`,
and does not join that frame.

---

## 3. `charity-majors.md` — `parallel`

Her page already carries a Fournier edge making the pendulum argument against the management
ladder. The Larson edge is the same question answered on the other track, so the label has to avoid
becoming a second copy of the Fournier one.

**Apply:**

```yaml
  - target_slug: will-larson
    display_name: Will Larson
    edge_type: parallel
    edge_label: >
      Two answers to what an engineer does after senior. Majors argues the
      strongest technical leaders swing between management and hands-on work;
      Larson documented the track that stays technical, and treats influence
      without command as the problem it has to solve rather than as its cost.
    strength: primary
```

One thing for the applying stage to check and not assume: research found that the claim Larson
first heard of Wardley mapping from Majors is false. His own account credits Simon Wardley and
David Anderson [S:26]. It would have been an attractive adjacency between these two pages and it
must stay dead.

---

## 4. `sidney-dekker.md` — `parallel`

The most contestable of the four, and the one whose label is doing real work. Dekker holds
`drift-into-failure` and `work-as-imagined-vs-work-as-done`, and the site has already used Dekker
for the exception argument at Lens position P:6. An unlabelled edge between these two pages would
read as the same argument twice.

**Apply:**

```yaml
  - target_slug: will-larson
    display_name: Will Larson
    edge_type: parallel
    edge_label: >
      Two accounts of a written rule losing contact with the work it governs,
      with different mechanisms and different remedies. Drift into failure
      describes deviation that accumulates without anyone noticing it. Larson's
      exception debt begins after everyone has noticed, because each exception
      was requested, argued and granted on the record, and he prescribes a
      cadence for rewriting the rule around what was granted anyway.
    strength: primary
```

`parallel` and not `antecedent`. Larson credits no safety-science source, cites nobody in the 2018
essay, and nothing in the record suggests he read Dekker. An `antecedent` edge would assert a
lineage the ledger cannot back.

---

## Off-site neighbours: no return edge possible

Richard Rumelt, Sean Goedecke and Tanya Reilly have no pages here, so the build's link-back warning
does not apply to them. Rumelt and Reilly are both plausible future candidates and are being filed
as `Candidate:` issues in the closing stage rather than handled here.

---

## Order of application

1. The Forsgren recast, first and separately, because it corrects a live error and the error gets
   worse the moment the Larson page ships.
2. Fournier, Majors, Dekker in any order.
3. Re-run `bun run build` and confirm the link-back warnings for all four have cleared.
