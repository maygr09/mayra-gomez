export type CaseStudyLink = {
  label: string;
  href: string;
};

export type CaseStudy = {
  name: string;
  tagline: string;
  summary: string;
  problem: string;
  challenge: string;
  solution: string;
  architecture: string;
  techStack: string[];
  lessonsLearned: string;
  futureImprovements: string;
  links: CaseStudyLink[];
};

// Placeholder content used only to verify the layout renders correctly.
// Real copy will be written per project in Sprint 9+.
export const exampleCaseStudy: CaseStudy = {
  name: "Personal Library",
  tagline: "Organizing knowledge into something you can actually find again.",
  summary:
    "A personal system to catalog books, notes, and ideas, built to stay retrievable instead of scattered across notebooks, apps, and memory.",
  problem: "Placeholder: describe the real problem this project solved.",
  challenge:
    "Placeholder: describe the hardest constraint or trade-off faced.",
  solution: "Placeholder: describe the approach taken and why.",
  architecture:
    "Placeholder: describe the system structure and key decisions.",
  techStack: ["Placeholder", "Tech", "Stack"],
  lessonsLearned: "Placeholder: describe what this project taught.",
  futureImprovements: "Placeholder: describe what would come next.",
  links: [{ label: "View on GitHub", href: "#" }],
};
