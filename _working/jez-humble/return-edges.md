# Jez Humble: return edges

Stage 4 of `add-thinker`. The Humble page links to nine neighbours. Four have pages here and each
needs an edge back, or the build prints `[distillery] warning: page links to a thinker whose page
does not link back`. The other five (Dave Farley, Dan North, Keunwoo Lee, Chris Read, Gene Kim)
have no pages, so they need nothing.

These are descriptions only. **Do not edit the four target pages from this run.** A later serial
stage applies them, because two candidates drafting at the same time would collide on a shared
neighbour, which is what happened when Larson and Willison both planned the same demotion on
Majors.

## The nine warnings this plan clears

`bun run build` passes with the Humble page in place and prints these, all of them this plan's
work. Re-run the build after applying and confirm every line below is gone.

```
[distillery] warning: nicole-forsgren has no edge back to jez-humble
[distillery] warning: martin-fowler has no edge back to jez-humble
[distillery] warning: john-allspaw has no edge back to jez-humble
[distillery] warning: charity-majors has no edge back to jez-humble
[distillery] warning: martin-fowler: frame continuous-integration credits jez-humble, who has a page here but is not in adjacent_thinkers
[distillery] warning: nicole-forsgren: frame dora-four-keys credits jez-humble, who has a page here but is not in adjacent_thinkers
[distillery] warning: nicole-forsgren: frame change-failure-rate credits jez-humble, who has a page here but is not in adjacent_thinkers
[distillery] warning: nicole-forsgren: frame time-to-restore credits jez-humble, who has a page here but is not in adjacent_thinkers
[distillery] warning: nicole-forsgren: frame throughput-stability-non-tradeoff credits jez-humble, who has a page here but is not in adjacent_thinkers
```

The second group is the stronger argument for edges 1 and 2. Five live frames on two pages have
credited Humble by slug since before this page existed, with no edge joining them to him. Those
warnings were being printed on every build and nobody could act on them, because the slug they
named had no page. That is the same shape as the Beck and Forsgren contradiction: the information
was in the build log the whole time and nothing turned it into a decision.

**Re-read this file against the finished page before applying it.** It is written before the
Reading Protocol and the review rounds and applied after them, and it does not move while the page
does. Every phrase the rounds change has to be chased in here by hand.

## What the caps actually do now, which changes the shape of this plan

The calibration item says to count every on-site neighbour as foreground when planning, because
`orderNeighbors` used to ignore `render_tier` on a neighbour with a page here. That is no longer
the whole rule. Since the 2026-09-20 change, `src/lib/checks.ts` collapses past the cap
automatically and includes on-site neighbours in the ranking, so a return edge no longer forces a
human demotion anywhere. It fails nothing. It prints a warning naming whatever it collapsed.

Each result below was computed, not reasoned about, by calling `orderNeighbors` with the Humble
edge appended to each target's real `adjacent_thinkers`. Re-run that check at apply time if any of
the four pages has changed in between.

| Target | Foreground after the edge | Auto-collapsed by the build |
|---|---|---|
| Nicole Forsgren | unchanged, seven on-site | **the new Humble edge itself** |
| Martin Fowler | unchanged, seven on-site | **the new Humble edge itself** |
| John Allspaw | Humble enters the foreground | Richard Cook |
| Charity Majors | Humble enters the foreground | Cindy Sridharan |

The first two are the rule working as designed rather than a defect. Humble is already named in
`co_originators` on four Forsgren frames and on Fowler's continuous integration frame, so
`creditedElsewhere` ranks him first for collapse: he keeps the credit and loses a second mention,
and the edge still renders in the "more neighbours" disclosure and still satisfies the back-link
warning. **One decision for Julie, and only a human can make it:** on the Forsgren page the Humble
edge is arguably the strongest one there, since the two co-founded DORA and co-wrote the book her
page is built on, and it is the one the build will put in the disclosure. Pinning a weaker
foreground edge to `render_tier: deep` in the same change is the only way to hold his place. The
recommendation here is to leave it collapsed, because the credit is already on her page five times
over, which is exactly the redundancy the collapse rule was written to detect.

The other two collapses both land on the neighbour the calibration checklist predicts. Richard
Cook is a co-originator on two Allspaw frames (`above-the-line-below-the-line` and `dark-debt`), so
his credit survives the collapse. Cindy Sridharan is not credited inside a Majors frame's
structured fields, but the `unified-storage-versus-pillars` gloss names her and Bourgon in full
prose, so the claim she carries is already on the page. Neither needs a hand edit.

---

## 1. `src/content/thinkers/nicole-forsgren.md`

Append to `adjacent_thinkers`. Appending rather than inserting matters: the claims lines in
`_working/nicole-forsgren/page-claims.md` address edges positionally, so an edge added mid-list
shifts every later index.

```yaml
  - target_slug: jez-humble
    display_name: Jez Humble
    edge_type: parallel
    edge_label: >
      Humble supplies the machinery these measures read. The deployment
      pipeline and the split between deploying code and releasing a feature
      describe how a change reaches production; the four keys describe how well
      that route performs. The two founded DORA with Gene Kim and wrote
      *Accelerate* together, and his page holds the mechanism rather than
      restating the measures.
    strength: primary
```

Edge type rationale: `parallel`. Neither argues against the other and neither derives from the
other. `extends` would misread the direction, since the research measures the practice rather than
building on it, and the co-authorship is already carried structurally in her frames'
`co_originators`.

## 2. `src/content/thinkers/martin-fowler.md`

Append to `adjacent_thinkers`.

```yaml
  - target_slug: jez-humble
    display_name: Jez Humble
    edge_type: parallel
    edge_label: >
      Humble carries this page's build-side practices out to the far end of the
      route. Fowler's article on continuous integration sends readers to
      *Continuous Delivery* for the broader process, published the book in his
      own signature series, and wrote the bliki entries for the deployment
      pipeline and for continuous delivery with Humble's detailed help
      acknowledged on both.
    strength: primary
```

Edge type rationale: `parallel` from Fowler's side, where the new page uses `extends` toward
Fowler. The asymmetry is deliberate and correct. The Humble page says continuous delivery extends
continuous integration, which is a claim about practices. An `extends` edge on Fowler's page would
read as Fowler extending Humble, which reverses it.

**Do not use this edge to settle the continuous integration attribution.** The label above makes no
claim about who developed the practice, and the `continuous-integration` frame's own
`attribution_kind: original` with `primary_author: martin-fowler` stays exactly as it is under this
plan. The contradiction with that frame's `source_link` [S:13] belongs in the merge request
description, and Kent Beck has a page here for the fix to land on.

## 3. `src/content/thinkers/john-allspaw.md`

Append to `adjacent_thinkers`. The build will collapse Richard Cook in the same pass and log it.

```yaml
  - target_slug: jez-humble
    display_name: Jez Humble
    edge_type: parallel
    edge_label: >
      Humble designs the route a change takes into production, which is the
      route that delivered the change this page's incidents start from. Allspaw
      wrote the foreword to the first edition of *The DevOps Handbook*, which
      Humble co-wrote with Gene Kim, Patrick Debois and John Willis. One studies
      the path in; the other studies the people once something on it has gone
      wrong.
    strength: primary
```

Edge type rationale: `parallel`. The foreword is a real shared artifact and nothing more than that:
Allspaw does not build on Humble's work and does not argue against it.

## 4. `src/content/thinkers/charity-majors.md`

Append to `adjacent_thinkers`. The build will collapse Cindy Sridharan in the same pass and log it.

```yaml
  - target_slug: jez-humble
    display_name: Jez Humble
    edge_type: parallel
    edge_label: >
      Humble names the distinction her guardrails run on. Testing against real
      traffic is only safe if code can be live in production without being
      reachable by users, which is the split between deploying and releasing
      that his book states and a feature flag exercises.
    strength: primary
```

Edge type rationale: `parallel`. Majors does not cite Humble and Humble has not written about
observability, so this is the site's reading of two arguments that need each other rather than a
lineage either of them claims.

---

## Not return edges, recorded so a later run does not add them

- **Dave Farley, Dan North, Keunwoo Lee, Chris Read and Gene Kim** have no pages here, so no return
  edge exists to write. Farley and Dan North are the two strongest candidates the Humble research
  surfaced. Dan North in particular is co-originator on two frames of this page, already carries a
  secondary `parallel` edge on the Forsgren page, and has no page of his own; stage 8 should file
  him.
- **Keunwoo Lee also belongs on the Forsgren page, and that is a decision rather than an
  oversight.** His review attacks the *Accelerate* research programme, which is Forsgren-led, and
  her page carries no critic at all while this page now carries one. The inclusion Council raised
  it twice and did not settle it. It is out of scope for a return edge, because a return edge goes
  to a page this one links to and carries an edge back to *this* thinker, and Lee has no page. Put
  it in the merge request as an open question for Julie: either add Lee as a `critiques` edge on
  Forsgren in a separate change, or accept that the critique of the measures sits on the co-author's
  page. Do not resolve it by weakening the Lee edge here, which would leave the site holding no
  critic of the research at all.
- **Ross Harmes** is named in the `release-decoupled-from-deploy` gloss as an earlier independent
  description of the practice [S:26]. He is deliberately not an `antecedent` edge and not a
  `derived_from`. Nothing shows the book drawing on the Flickr post, and an antecedent edge would
  assert a lineage the record does not carry. This is the same call the Willison run made on
  Chromium's Rule Of 2, which was ruled convergence.
- **Kent Beck** carries no edge from this page, on purpose. An `antecedent` edge to Beck would
  settle the continuous integration attribution question by implication from a page that has no
  business settling it, which all three seats that raised the question asked the drafter to avoid.
- **Riley Goodside and Sean Goedecke** are being drafted in the same batch. No edge exists in
  either direction and none should be invented to create one.
