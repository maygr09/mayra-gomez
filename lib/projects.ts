export type Project = {
  name: string;
  tagline: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: "Personal Library",
    tagline:
      "Organizing knowledge.",
    description:
      "A personal system to catalog books, notes, and ideas, so information stays retrievable instead of scattered across notebooks, apps, and memory.",
    href: "/projects/personal-library",
  },
  {
    name: "Travel Planner",
    tagline:
      "Organizing unforgettable experiences.",
    description:
      "A planning tool that turns scattered flights, bookings, and ideas into one clear itinerary, reducing decision fatigue before and during a trip.",
    href: "/projects/travel-planner",
  },
  {
    name: "Crew Expense Management",
    tagline: "Organizing transparency.",
    description:
      "A system built for aviation crews to log, split, and reconcile trip expenses without spreadsheets or end-of-month guesswork.",
    href: "/projects/crew-expense-management",
  },
  {
    name: "Financial System",
    tagline: "Organizing financial decisions.",
    description:
      "A personal finance dashboard that turns raw transactions into clear categories and trends, built for clarity, not just tracking.",
    href: "/projects/financial-system",
  },
];
