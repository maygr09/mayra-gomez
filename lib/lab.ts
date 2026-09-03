export type LabProject = {
  title: string;
  status: string;
  description: string;
  tags: string[];
  logHref: string;
};

export const labProjects: LabProject[] = [
  {
    title: "Personal Website",
    status: "Ongoing",
    description:
      "Designing and developing my personal portfolio with Next.js. Exploring animation, accessibility, typography, responsive layouts and a custom design system.",
    tags: [
      "Next.js",
      "React",
      "Design System",
      "Motion",
      "Accessibility",
      "SEO",
    ],
    logHref: "https://github.com/maygr09/mayra-gomez",
  },
];
