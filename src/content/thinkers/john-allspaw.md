---
slug: john-allspaw
name: John Allspaw
canonical_url: https://www.adaptivecapacitylabs.com
active_years: 2003–present
primary_domains:
  - resilience-engineering
  - incident-analysis
  - sociotechnical-systems
status: alive-active
inclusion_rationale: >
  Took the academic resilience-engineering tradition (Hollnagel, Woods,
  Cook) and translated it into working ops vocabulary the industry now
  uses: *blameless postmortem*, *above-the-line / below-the-line*,
  *dark debt*. Co-founded Adaptive Capacity Labs with Richard Cook and
  David Woods (2017) as the bridge between the field and practice. The
  industry's most reliable carrier of the new-view safety lens into the
  software-ops conversation.
thinker_type: mixed
doctrine_mode: mode-c
has_long_read: false
last_updated: 2026-05-25

tagline: The translator who turned resilience engineering from an academic field into the working ops vocabulary the industry now uses to learn from incidents.
thirty_second_take: >
  Allspaw's career has been a sustained argument that *incidents are the
  most important learning artifact a sociotechnical system produces*,
  and that the standard postmortem culture (find the human, find the
  cause, write the action items, close the ticket) actively destroys the
  learning. The Etsy 2012 blameless postmortem essay is the keystone. The
  Adaptive Capacity Labs work since 2017 with Richard Cook and David Woods
  is the deeper version. *Above-the-line / below-the-line* and *dark debt*
  are the named instruments. The argument is that incidents teach you
  things you cannot learn any other way; the entire job is to set up the
  conditions where those lessons actually land.

background: >
  American engineer who built his reputation running operations at Flickr
  and then Etsy through the era when "DevOps" was being figured out in
  public. SVP of Infrastructure and Operations at Etsy (2010–2015),
  during which Etsy became one of the most-studied production-engineering
  organizations of the 2010s. Co-author of *Web Operations: Keeping the
  Data on Time* (2010, O'Reilly) with Jesse Robbins. PhD candidate at
  Lund University under Sidney Dekker; co-founded Adaptive Capacity Labs
  with Richard Cook and David Woods in 2017. Hosts the *Learning From
  Incidents* community alongside Nora Jones.
why_they_matter_as_a_thinker: >
  Without Allspaw, the resilience-engineering tradition (Hollnagel,
  Woods, Cook, Dekker) would still be a body of work the software
  industry occasionally glanced at and otherwise ignored. He is the
  reason your engineering org has a "blameless" prefix on the
  postmortem template, the reason "dark debt" is a phrase senior staff
  use, and the reason senior incident response now reaches for
  *above-the-line / below-the-line* when explaining what humans were
  actually doing during a failure. The vocabulary moved because he
  spent a decade moving it.

thesis: >
  An incident is not a defect to be eliminated; it is a sample drawn
  from your system's actual operating envelope, telling you things
  about how the work is done that no design document, runbook,
  or simulation can show you. The way to honor that signal is to set
  up the conditions where engineers will tell you honestly what
  happened, what they thought was happening, what they almost did,
  and what they would do differently. That requires removing blame as
  a default, recognizing the gap between *work-as-imagined* and
  *work-as-done*, and treating the human side of the system as the
  primary source of expertise about how the system actually behaves.
working_line: >
  Blame is the enemy of safety. (The Etsy postmortem doctrine, 2012.)

named_frames:
  - concept_slug: blameless-postmortem
    display_name: Blameless postmortem
    one_line_gloss: >
      An incident review whose stated goal is learning, not accountability,
      conducted under conditions where engineers can be honest about what
      they thought, did, and decided without career risk.
    attribution_kind: popularized
    primary_author: john-allspaw
    co_originators:
      - slug: sidney-dekker
        role: just-culture predecessor
      - slug: james-reason
        role: human-error/Swiss-cheese predecessor
    source_link: https://www.etsy.com/codeascraft/blameless-postmortems/
  - concept_slug: above-the-line-below-the-line
    display_name: Above the line / below the line
    one_line_gloss: >
      A distinction between the visible artifacts of a system (code,
      configs, dashboards: *below the line*) and the cognitive work that
      goes into operating it (mental models, attention, sensemaking, team
      coordination: *above the line*). Most postmortems only document
      below; the learning is mostly above.
    attribution_kind: co-authored
    primary_author: john-allspaw
    co_originators:
      - slug: richard-cook
        role: co-author
    source_link: https://www.adaptivecapacitylabs.com
  - concept_slug: dark-debt
    display_name: Dark debt
    one_line_gloss: >
      Latent failure modes that exist in complex systems' interactions,
      unknown until an incident reveals them, and that are not
      discoverable by inspection of any individual component. Different
      from tech debt; closer to "unknown unknowns" as a structural class.
    attribution_kind: co-authored
    primary_author: john-allspaw
    co_originators:
      - slug: richard-cook
        role: co-author
      - slug: laura-maguire
        role: co-author
    source_link: https://snafucatchers.github.io/
  - concept_slug: adaptive-capacity
    display_name: Adaptive capacity
    one_line_gloss: >
      A system's ability to absorb disturbances and continue functioning,
      not by being robust to known threats, but by having human and
      organizational reserves that can recognize and respond to novel
      ones. The resilience-engineering core concept.
    attribution_kind: extended
    primary_author: david-woods
    co_originators:
      - slug: david-woods
        role: original resilience-engineering theory
      - slug: john-allspaw
        role: applied to software operations
    source_link: https://www.adaptivecapacitylabs.com
  - concept_slug: work-as-imagined-vs-work-as-done
    display_name: Work-as-imagined vs. work-as-done
    one_line_gloss: >
      The distinction between how leadership / documentation / design
      thinks the work happens (imagined) and how it actually happens
      under real conditions (done). The gap is where adaptive capacity
      lives, and where incidents originate.
    attribution_kind: extended
    primary_author: erik-hollnagel
    co_originators:
      - slug: erik-hollnagel
        role: original in safety-science literature
      - slug: john-allspaw
        role: carried into ops/SRE practice

body_of_work:
  - title: 'Blameless Postmortems and a Just Culture (Etsy Code as Craft)'
    type: essay
    year: 2012
    link: https://www.etsy.com/codeascraft/blameless-postmortems/
    editorial_note: >
      The keystone essay. Single-handedly moved the industry's default
      postmortem template from blame-find to learning-oriented. Short,
      practical, still load-bearing.
    read_first: true
    canonical: true
  - title: 'Web Operations: Keeping the Data on Time'
    type: book
    year: 2010
    link: https://www.oreilly.com/library/view/web-operations/9781449377465/
    editorial_note: >
      Edited with Jesse Robbins. Pre-resilience-engineering Allspaw, but
      the seeds of the later argument are visible: operating at scale as
      a sociotechnical discipline.
    canonical: true
  - title: 'SNAFUcatchers: STELLA Report from the SNAFUcatchers Workshop on Coping With Complexity'
    type: paper
    year: 2017
    link: https://snafucatchers.github.io/
    editorial_note: >
      Co-authored with Cook, Maguire and others. Where *dark debt* and
      *above-the-line / below-the-line* enter the literature. The
      resilience-engineering / software-ops bridge in working form.
    canonical: true
  - title: Adaptive Capacity Labs blog + talks
    type: blog-series
    link: https://www.adaptivecapacitylabs.com
    editorial_note: >
      The ongoing corpus: incident-analysis case studies, methodology
      writeups, the *Howie* guide to incident analysis (co-authored with
      Nora Jones).
  - title: '*The Verica Open Incident Database (VOID)*: annual reports'
    type: paper
    editorial_note: >
      Industry-scale aggregate of public incident reports. Companion
      artifact to the Adaptive Capacity Labs case-study work.

what_i_take: >
  Security incident response fails the learning test for exactly the reasons
  Allspaw described:
  blame culture, the gap between work-as-imagined and work-as-done, the
  habit of reducing the analysis to a root cause that pins the failure
  on the most-junior person whose hands were on the keyboard. The
  Allspaw move (set up conditions where engineers will be honest, treat
  the human side as the expertise about how the system works) is
  exactly what security IR needs and almost never gets. Importing the
  resilience-engineering vocabulary into security is one of the
  highest-leverage cultural changes a security org can make.
where_i_extend: >
  Allspaw built the model for software ops. Security adds an adversarial
  layer Allspaw did not model: an opponent actively optimizing against
  the detection-and-response loop, alongside everything else the ops
  model already accounts for. The
  blameless framing still works, *above-the-line / below-the-line*
  still works, the work-as-imagined / work-as-done gap is still the
  source of failure. But adaptive capacity has to be sized for an
  adversary who is also adaptive. The resilience-engineering frame
  needs an explicit adversarial-modeling axis added when ported to
  security work; otherwise you end up with a calm, blameless,
  thoroughly documented system getting reliably owned.
working_uses:
  - Security incident response (blameless framing applied to breach analysis)
  - '"Boring Seams" keynote (the work-as-imagined / work-as-done gap in security architecture)'
  - Cordon framework (adaptive capacity as a peer dimension among software-quality concerns)

limits:
  - headline: The "blameless" label gets misapplied
    severity: structural
    elaboration: >
      Allspaw's blameless framing is about creating the conditions for
      honest learning, not about removing accountability. The industry has
      partially adopted the label without the discipline. "Blameless"
      becomes a euphemism for "no consequences," which produces a
      different failure mode: incidents recur because no one feels
      ownership. The argument is harder than the label.
  - headline: The model assumes a learning-receptive organization
    severity: structural
    elaboration: >
      The Allspaw move works when leadership wants to learn from
      incidents. In organizations where incidents are treated as
      reputation events (public companies under regulatory pressure,
      vendors fighting churn, security orgs measured on incident count),
      the conditions for blameless analysis cannot be created from the
      bottom. The framework has no story for getting executives to
      tolerate the truth the framework would surface.
  - headline: Adaptive-capacity vocabulary stays inside the resilience tradition
    severity: local
    elaboration: >
      Outside the small community of practitioners who have done the
      Hollnagel / Woods / Cook / Dekker reading, the vocabulary doesn't
      translate cleanly. Most engineering orgs that use "blameless
      postmortem" don't recognize the full resilience-engineering frame
      underneath; the vocabulary spreads faster than the substrate. Worth
      naming the gap when carrying the work.

still_load_bearing_despite: >
  The Etsy blameless-postmortem essay is the most influential
  twelve-page essay in operations engineering of the last fifteen
  years, measured by how many engineering orgs reorganized their
  incident-response defaults around it. The Adaptive Capacity Labs
  work is the deeper version that the next decade of incident-response
  practitioners will keep returning to. Carrying Allspaw forward is
  how the resilience-engineering tradition stays in working contact
  with the software industry.

adjacent_thinkers:
  - target_slug: david-woods
    display_name: David Woods
    edge_type: extends
    edge_label: >
      Allspaw's theoretical predecessor and Adaptive Capacity Labs
      co-founder. Woods built the resilience-engineering frame in
      academic safety science; Allspaw carried it into software ops.
      Read Woods on graceful extensibility before Allspaw on dark debt
      and the lineage clicks.
    strength: primary
  - target_slug: sidney-dekker
    display_name: Sidney Dekker
    edge_type: extends
    edge_label: >
      Allspaw's PhD advisor at Lund. The "new view of human error" and
      *just culture* tradition that the blameless-postmortem move
      operationalizes for software. Same lineage; Dekker is the safety
      side, Allspaw the engineering side.
    strength: primary
  - target_slug: fred-brooks
    display_name: Fred Brooks
    edge_type: parallel
    edge_label: >
      The vocabulary move at a different scale. Brooks named the
      large-scale physics of software engineering; Allspaw names the
      incident-as-sample physics of running it in production. Same
      cartographer instinct, different layer of the stack.
    strength: secondary
  - target_slug: nora-jones
    display_name: Nora Jones
    edge_type: parallel
    edge_label: >
      Co-host of *Learning From Incidents*; co-author of the *Howie*
      method. The next-generation carry of the same tradition into
      industry incident-analysis practice.
    strength: secondary
  - target_slug: richard-cook
    display_name: Richard Cook
    edge_type: extends
    edge_label: >
      Adaptive Capacity Labs co-founder and *How Complex Systems Fail*
      author. The medical-error-and-complex-systems lineage that
      Allspaw's software-ops work is built from.
    strength: primary

further_in:
  start_here: >
    The Etsy 2012 *Blameless Postmortems and a Just Culture* essay
    (twelve pages). The keystone, still the right starting point.
  then_read:
    - 'The 2017 SNAFUcatchers STELLA Report (where dark debt and above/below the line enter the literature)'
    - 'The *Howie* incident-analysis guide (with Nora Jones)'
    - 'Adaptive Capacity Labs case studies (adaptivecapacitylabs.com)'
  if_you_want_breadth: >
    Read Woods on graceful extensibility, Dekker's *Field Guide to
    Understanding Human Error*, and Cook's *How Complex Systems Fail*
    alongside Allspaw; they're the foundation his applied work rests
    on.
---
