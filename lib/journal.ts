export type JournalEntry = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
};

// Real entries will replace this content later.
export const journalEntries: JournalEntry[] = [
  {
    slug: "organizing-before-optimizing",
    date: "August 2026",
    title: "Organizing before optimizing",
    excerpt:
      "Placeholder: a short two-line summary of what this entry is about.",
    content: [
      "Placeholder: opening paragraph setting up the situation or question behind this entry.",
      "Placeholder: what I noticed, learned, or decided.",
      "Placeholder: how it changed the way I think or work going forward.",
    ],
  },
  {
    slug: "what-flying-taught-me-about-systems",
    date: "July 2026",
    title: "What flying taught me about systems",
    excerpt:
      "Placeholder: a short two-line summary of what this entry is about.",
    content: [
      "Placeholder: opening paragraph setting up the situation or question behind this entry.",
      "Placeholder: what I noticed, learned, or decided.",
      "Placeholder: how it changed the way I think or work going forward.",
    ],
  },
];
