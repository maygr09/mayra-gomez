export type LabProject = {
  title: string;
  status: string;
  description: string;
  tags: string[];
  linkLabel: string;
  linkHref: string;
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
    linkLabel: "Development Log",
    linkHref: "https://github.com/maygr09/mayra-gomez",
  },
  {
    title: "Birthday Concert Gift",
    status: "Completed",
    description:
      "Designed and developed an interactive digital birthday card that reveals a surprise concert gift through a small web experience. Built as a static website and deployed with GitHub Pages, focusing on animation, storytelling and responsive design.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub Pages",
      "Responsive Design",
      "UI Animation",
    ],
    linkLabel: "View Project",
    linkHref: "https://maygr09.github.io/birthday-concert-gift",
  },
];
