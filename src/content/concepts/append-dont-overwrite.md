---
slug: append-dont-overwrite
display_name: Append, Don't Overwrite
one_line_gloss: >
  Record each change as a new entry and derive the current state from the
  accumulated history, instead of replacing old values in place. The present
  becomes a view over the record, and the record is what the system keeps.
last_updated: 2026-09-17

julie_reading_prompt: >
  Julie's reading of the concept itself, separate from the Hickey and Fowler
  pages. A working direction from conversation (2026-09-17): append-only
  history matters because it makes a system investigable, answering what
  happened, when, by whom and who was affected, and that property belongs as
  much to reliability and performance as to security. Questions to answer: is
  investigability the right name for the property? Does append-only history
  mean a log kept beside the system, where completeness depends on what
  someone chose to record, or a system whose state can only change through
  recorded events? Where does the record have to live to count, given local
  rotation and short-lived compute? What changes when agents write the
  changes, since the author field is self-asserted and the reason for a change
  was never recorded? And does the idea join the positions you publish, or
  stay a working instrument?

limits:
  - headline: Replaying an event-sourced history is harder than it looks
    severity: structural
    elaboration: >
      Rebuilding state from history assumes old entries can still be read and
      still mean what they meant. Fowler's 2017 treatment of event sourcing
      names two ways that fails: replaying events that once triggered calls to
      outside systems, and changing the shape of events over years of
      schema evolution. A history that cannot be replayed with confidence
      still records what happened, but it no longer rebuilds the present.
  - headline: Some records have to be forgotten
    severity: structural
    elaboration: >
      An append-only record never ages out on its own. Retention rules for
      personal data, and credentials written into history by mistake, both
      require real removal. Fowler compares the event log to a git history. Any
      git history carries the same problem: a secret committed by mistake
      survives in every clone until the history is rewritten. Hickey's own database
      ships excision to permanently remove facts, keeping a record of each
      removal.
  - headline: A complete record proves a change happened, not that it was right
    severity: local
    elaboration: >
      History makes a change visible after the fact. Whether the change was
      authorized, or malicious, still depends on someone reviewing it, and on
      the write path being protected so that whoever can make a change cannot
      also edit the record of it.

still_load_bearing_despite: >
  The limits pull in different directions. Replay and retention are costs of
  keeping a history usable, and authorization is a separate control that
  appending never supplies. None of them restores what an overwrite throws
  away. While the history stays readable, a system that appends can answer
  what was true then, who changed it, and in what order, and one that
  overwrites can answer only what is true now. Accounting kept transactions behind balances
  long before software, and the idea keeps returning under new names,
  from event logs to immutable databases, because the question of how the
  present came to be keeps coming up.

adjacent_concepts:
  - target_slug: value-identity-state-time
    display_name: Value, Identity, State and Time
    edge_label: >
      Hickey's model, drawn from Whitehead, underneath the practice: a value never changes, an
      identity is a series of values over time, and state is the value at a
      moment. Appending is what that model looks like in storage.
  - target_slug: accretion-versus-breakage
    display_name: Accretion versus Breakage
    edge_label: >
      The same rule applied to published interfaces instead of stored data:
      grow by adding, and treat removal as breakage that deserves a new name.
  - target_slug: essential-vs-accidental-complexity
    display_name: Essential vs. Accidental Complexity
    edge_label: >
      Brooks's distinction, which Moseley and Marks's "Out of the Tar Pit"
      carried into an argument that mutable state is the main source of
      accidental complexity. Overwriting in place is that state at its most
      basic.
---
