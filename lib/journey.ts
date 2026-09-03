export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  tags?: string[];
  hasImagePlaceholder?: boolean;
  learnMoreHref?: string;
};

// Placeholder timeline. Add, remove or reorder entries freely —
// the page renders whatever is in this array.
export const timelineEntries: TimelineEntry[] = [
  {
    year: "2019",
    title: "Beginning my Software Engineering degree",
    description:
      "Placeholder: started my degree, discovering how much I enjoyed turning logic into something real.",
    tags: ["Education"],
    hasImagePlaceholder: true,
  },
  {
    year: "2020",
    title: "First programming projects",
    description:
      "Placeholder: small scripts and class assignments that turned into an obsession with building things that worked.",
    tags: ["Python", "Learning"],
  },
  {
    year: "2021",
    title: "Internship",
    description:
      "Placeholder: my first real exposure to production code, teams, and the gap between coursework and industry.",
    tags: ["Internship"],
    hasImagePlaceholder: true,
  },
  {
    year: "2022",
    title: "First full-stack applications",
    description:
      "Placeholder: building Personal Library taught me how a frontend, backend, and database actually talk to each other.",
    tags: ["React", "Express", "PostgreSQL"],
    learnMoreHref: "/projects/personal-library",
  },
  {
    year: "2025",
    title: "Building my personal portfolio",
    description:
      "Placeholder: designing this site as both a portfolio and a place to think out loud about how I build.",
    tags: ["Next.js", "Design System"],
    learnMoreHref: "/lab",
  },
  {
    year: "2026",
    title: "Applying for graduate school",
    description:
      "Placeholder: looking for the next challenge that will push how I think about systems and problems.",
    tags: ["Graduate School"],
  },
  {
    year: "2027",
    title: "Future goals",
    description:
      "Placeholder: where I want this path to go next — the problems I want to solve and the engineer I want to become.",
    tags: ["What's Next"],
  },
];

export type JourneyStat = {
  label: string;
  value: string;
};

// Placeholder metrics — swap values whenever you have real numbers.
export const journeyStats: JourneyStat[] = [
  { label: "Projects Built", value: "4+" },
  { label: "Technologies Learned", value: "15+" },
  { label: "Books Read", value: "20+" },
  { label: "Courses Completed", value: "6+" },
];
