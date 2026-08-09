export type CaseStudyLink = {
  label: string;
  href: string;
};

export type ProjectOverview = {
  timeline: string;
  role: string;
  status: string;
  technologies: string[];
  githubUrl?: string;
};

export type CaseStudy = {
  name: string;
  tagline: string;
  summary: string;
  overview: ProjectOverview;
  problem: string[];
  challenge: string[];
  solution: string[];
  architecture: string[];
  keyFeatures: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  links: CaseStudyLink[];
};

export const personalLibraryCaseStudy: CaseStudy = {
  name: "Personal Library",
  tagline: "Organizing knowledge.",
  summary:
    "A full-stack system that replaced a personal spreadsheet with a searchable, relational library — built to make browsing, searching, and updating books, authors, and series feel effortless.",

  overview: {
    timeline: "4 weeks",
    role: "Full Stack Developer",
    status: "Completed",
    technologies: ["React", "Vite", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/maygr09/Personal-library",
  },

  problem: [
    "I had been organizing my personal library in an Excel spreadsheet for years. While it kept everything in order, it eventually reached a point where the information was difficult to explore and interact with.",
    "Searching for books, filtering by author or series, tracking reading progress and updating information all required manual work.",
    "The spreadsheet wasn't the problem—it had done its job remarkably well. The real limitation was the user experience.",
    "I wanted a system that made my library easier to navigate, visually clearer and faster to maintain. More than replacing Excel, the goal was to transform structured data into a tool that felt intuitive to use every day.",
  ],

  challenge: [
    "This project represented my first experience building a full-stack application from scratch. At the time, I had very little experience with modern development tools and workflows.",
    "Every layer of the project required learning something completely new. Understanding how a frontend communicates with a backend, designing a relational database, writing SQL queries, using Git for version control, structuring a project in Visual Studio Code, and choosing the right technologies were all challenges that had to be solved simultaneously.",
    "One of the biggest challenges was migrating an existing Excel catalog into PostgreSQL while preserving relationships between books, authors and series. Beyond moving the data, I needed to rethink how the information should be structured so the application could search, filter and update it efficiently.",
    "Looking back, the technical challenges were only part of the process. The biggest challenge was learning how to think like a software engineer while building the project itself.",
  ],

  solution: [
    "Rather than extending the spreadsheet, I decided to rethink the entire experience around the way I wanted to interact with my personal library. My goal wasn't simply to store information—it was to make it easier to explore, update and understand my collection.",
    "I wanted searching for books, browsing authors, tracking series and adding new titles to feel intuitive instead of manual.",
    "As I learned more about software development, the solution naturally evolved into a three-layer architecture: PostgreSQL for structured data, Express as the REST API, and React (Vite) for the user interface.",
    "The project became much more than a digital catalog. It became my first complete software system and the foundation of everything I have built since.",
  ],

  architecture: ["React (Vite)", "Express REST API", "PostgreSQL"],

  keyFeatures: [
    "Full CRUD",
    "Advanced Search",
    '"Did you mean?" suggestions',
    "Author filtering",
    "Series filtering",
    "Reading status",
    "Ratings & Reviews",
    "Physical / Digital location",
    "Saga management",
  ],

  lessonsLearned: [
    "Designing a relational schema forces you to think about relationships before you think about screens — getting books, authors, and series right up front saved rework later.",
    "A REST API is a contract, not just a bridge: once the frontend and backend agreed on shapes and status codes, both sides could evolve independently.",
    "Git only becomes useful once you trust it — learning to commit in small, reversible steps mattered more than memorizing commands.",
    "Migrating real data taught me that data integrity is a design decision, not a migration script detail — relationships had to be modeled correctly before a single row moved.",
    "Deploying a full-stack app surfaces every assumption a local environment quietly hides, from environment variables to database connections.",
    "Most of the hardest bugs weren't about syntax — they were about reasoning through what the system was actually doing at each layer.",
  ],

  futureImprovements: [
    "Reading dashboards summarizing progress across the year.",
    "Reading statistics: pace, genres, and completion rates.",
    "AI-powered recommendations based on reading history.",
    "Trend analysis across authors, series, and genres over time.",
    "Lightweight visualizations built directly from the PostgreSQL data.",
    "Deeper insights into personal reading habits over time.",
  ],

  links: [{ label: "View on GitHub", href: "#" }],
};
