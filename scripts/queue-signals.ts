// The two ranking signals queue.ts computes, pulled out so they can be tested without GitLab.
//
// GRAPH PULL counts independent footholds, not pages. Until 2026-10-09 it counted distinct pages, and
// a frame held on several pages carries the same co-originator list on each, so one shared credit
// counted once per holder. Chris Read and Sam Newman topped the queue at a pull of 3 on a single
// credit, the deployment pipeline's co-originator list on the Farley, Humble and Terhorst-North
// pages, while Nancy Leveson, credited separately by Rasmussen and Hollnagel, sat below them at 2.
// So pages that name a candidate through the same frame are merged into one foothold, and pull is
// the number of footholds. A page that also has its own edge to the candidate stays in the same
// foothold: it is still one page.
//
// COUNCIL SUPPORT now also reads the inclusion records on issues. Since 2026-10-05 every inclusion
// Council posts a record on its candidate's issue, with a hidden `<!-- inclusion-record ... -->`
// block listing the people its seats suggested. Before that the Councils' suggestions were never
// recorded, which is why Leveson showed 0 Councils after several Rasmussen seats named her.

export type Mention = { candidate: string; page: string; frame?: string };

export function pullBy(mentions: Mention[]): Map<string, { pull: number; pages: string[] }> {
  const out = new Map<string, { pull: number; pages: string[] }>();
  const byCandidate = new Map<string, Mention[]>();
  for (const m of mentions) byCandidate.set(m.candidate, [...(byCandidate.get(m.candidate) ?? []), m]);
  for (const [candidate, ms] of byCandidate) {
    // Union-find over pages, joining every page that names the candidate through the same frame.
    const parent = new Map<string, string>();
    const find = (p: string): string => {
      const q = parent.get(p) ?? p;
      if (q === p) return p;
      const r = find(q);
      parent.set(p, r);
      return r;
    };
    const firstByFrame = new Map<string, string>();
    for (const m of ms) {
      if (!parent.has(m.page)) parent.set(m.page, m.page);
      if (!m.frame) continue;
      const first = firstByFrame.get(m.frame);
      if (first) parent.set(find(m.page), find(first));
      else firstByFrame.set(m.frame, m.page);
    }
    const pages = [...parent.keys()];
    out.set(candidate, { pull: new Set(pages.map(find)).size, pages });
  }
  return out;
}

// From the bodies of issue notes, which inclusion records suggested which people. Returns
// suggested-name -> the slugs of the records (the candidates whose Councils named them).
export function suggestionsFrom(notes: string[]): Map<string, Set<string>> {
  const out = new Map<string, Set<string>>();
  for (const body of notes) {
    const m = body.match(/<!-- inclusion-record\n([\s\S]*?)\n-->/);
    if (!m) continue;
    let data: { slug?: string; new_candidates?: unknown[] };
    try {
      data = JSON.parse(m[1]);
    } catch {
      continue;
    }
    if (!data.slug) continue;
    for (const name of data.new_candidates ?? []) {
      if (typeof name !== 'string') continue;
      out.set(name, (out.get(name) ?? new Set()).add(data.slug));
    }
  }
  return out;
}
