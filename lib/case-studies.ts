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
  liveUrl?: string;
};

export type TechGroup = {
  label: string;
  items: string[];
};

export type BuiltWithVersion = {
  title: string;
  groups: TechGroup[];
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
  architecturePlanned?: TechGroup[];
  keyFeatures?: string[];
  keyFeaturesGroups?: TechGroup[];
  lessonsLearnedLabel?: string;
  lessonsLearned: string[];
  builtWith?: BuiltWithVersion[];
  futureImprovements: string[];
  quote?: string;
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
    liveUrl: "https://personal-library-gold.vercel.app"
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

export const travelPlannerCaseStudy: CaseStudy = {
  name: "Travel Planner",
  tagline: "Organizing unforgettable experiences.",
  summary:
    "A full-stack application designed to transform complex travel planning into a clear, organized and enjoyable experience.",

  overview: {
    timeline: "4 weeks",
    role: "Full Stack Developer",
    status: "Completed",
    technologies: ["Express", "Thunder Client", "JavaScript", "CSS"],
    githubUrl: "https://github.com/maygr09/Travel-planner",
  },

  problem: [
    "After completing Personal Library, I began noticing another recurring challenge in my daily life: planning trips.",
    "For years, every itinerary started with a combination of Excel spreadsheets, notes on my phone and manually designed templates. While this approach kept everything organized, creating a complete travel plan required a significant amount of repetitive work. Reservations, activities, transportation, maps and schedules had to be copied, formatted and updated manually across multiple documents.",
    "As someone who naturally enjoys organizing information, I wasn't looking to stop documenting my trips—I wanted a better way to do it.",
    "The goal was not to replace spreadsheets, but to create a tool that transformed travel planning into a simpler, clearer and more enjoyable experience.",
  ],

  challenge: [
    "Unlike my previous project, this application involved managing several different types of information that all needed to work together.",
    "Flights, hotels, transportation, activities, reservations, budgets, currencies and schedules all had to be connected while remaining easy to edit and understand.",
    "One of the biggest design challenges was creating an interface that was simple both for the person building the itinerary and for the person following it during the trip.",
    "Another important challenge was integrating costs and multiple currencies into the planning process, allowing every activity to contribute to a complete travel budget without sacrificing readability.",
    "More than building another CRUD application, this project became an exercise in designing information around real user experiences.",
  ],

  solution: [
    "Instead of relying on multiple spreadsheets and disconnected notes, I designed a centralized application where every part of a trip could be managed in one place.",
    "The system allows users to build complete itineraries by combining transportation, accommodations, reservations and activities into a single chronological plan.",
    "As the project evolved, budgeting also became part of the experience. By integrating costs and currency conversion, the planner helps users understand not only where they are going, but also how their decisions affect the overall budget.",
    "The result is a planning tool designed to reduce manual work while making travel information easier to create, update and use.",
  ],

  architecture: ["React (Vite)", "Node.js", "Express", "PostgreSQL"],

  keyFeatures: [
    "Complete itinerary builder",
    "Activities, accommodations and transportation management",
    "Reservation tracking",
    "Budget planning",
    "Multi-currency support",
    "Chronological trip summary",
    "PDF itinerary export",
    "Editable travel plans",
    "Searchable trips",
  ],

  lessonsLearned: [
    "Designing software means organizing information before writing code.",
    "User experience becomes increasingly important as the amount of information grows.",
    "Separating frontend, backend and database makes complex applications easier to maintain.",
    "Real-world projects evolve naturally as new user needs appear.",
    "Good software should simplify planning rather than add more work.",
  ],

  futureImprovements: [
    "The next stage of Travel Planner focuses on transforming the application into a complete travel companion.",
    "Interactive maps",
    "AI-generated itinerary suggestions",
    "Weather integration",
    "Flight tracking",
    "Collaborative planning",
    "Travel statistics and insights",
    "Expense tracking during the trip",
    "Smart recommendations based on previous journeys",
  ],

  quote: "The best itinerary is the one nobody needs explained.",

  links: [{ label: "View on GitHub", href: "#" }],
};


export const crewExpenseManagementCaseStudy: CaseStudy = {
  name: "Crew Expense Management",
  tagline: "Organizing financial transparency.",
  summary:
    "A full-stack application designed to automate airline crew expense calculations by transforming complex company policies into reliable and scalable software.",

  overview: {
    timeline: "52 weeks",
    role: "Full Stack Developer",
    status: "Developing",
    technologies: ["React", "Vite", "JavaScript", "CSS", "Node.js", "Express REST API", "PostgreSQL", "Relactional Database Design", "SQL", "Rule-based calculations", "Business logic implementation", "Financial modeling", "Relational data modeling", "Scalable architecture design"],
    githubUrl: "https://github.com/maygr09/Viaticos-Travel-expenses-",
  },

  problem: [
    "When I started working as cabin crew, I rarely tracked my income in detail because my payment structure was straightforward. That changed when I joined a different airline, where a significant portion of my compensation depended on travel expenses and operational rules rather than a fixed payroll alone.",
    "Understanding how much I should receive required interpreting schedules, company policies and payment rules for every trip. I found myself using phone notes, mental calculations and a calculator to estimate my earnings. Although my estimates were usually close, small discrepancies appeared frequently, and verifying every itinerary became a repetitive and time-consuming process.",
    "Rather than continuing to calculate everything manually, I decided to automate the process.",
  ],

  challenge: [
    "This project quickly became much more than a personal calculator.",
    "As I learned more about software development, I realized that solving the problem properly required understanding the business rules behind the payment system before writing any code.",
    "Every calculation depended on multiple conditions, requiring careful interpretation of operational policies and airline-specific rules. At the same time, I was learning new technologies, experimenting with different development workflows, and discovering how to structure a scalable full-stack application.",
    "The biggest turning point came when I stopped designing the system only for myself and started imagining it as a tool for an entire community of airline crew members.",
    "That decision completely changed the architecture.",
    "Instead of storing only my own information, I needed a relational database capable of supporting multiple users, different trips, payment rules and future business logic without requiring a complete redesign.",
    "The challenge was no longer writing calculations—it became designing a system that could continue growing.",
  ],

  solution: [
    "Instead of manually interpreting every itinerary, I designed a system capable of translating operational information into financial calculations automatically.",
    "The application processes flight information, applies the corresponding payment rules and generates estimated travel expenses in a consistent way.",
    "As the project evolved, it expanded beyond expense calculations. The application now also manages additional payments outside payroll and serves as the foundation for future modules focused on working hours, fatigue management and contractual rest requirements.",
    "What started as a personal productivity tool gradually evolved into a scalable platform designed around the real operational needs of airline crews.",
  ],

  architecture: ["React (Vite)", "Node.js", "Express REST API", "PostgreSQL"],

  keyFeatures: [
    "Automated expense calculations",
    "Flight-based payment estimation",
    "Operational rule engine",
    "Multi-user database architecture",
    "Planned vs. actual payments",
    "Additional compensation tracking",
    "Searchable trips",
    "Financial summaries",
    "Foundation for fatigue and duty-time calculations"
  ],

  lessonsLearned: [
    "Business rules are often more complex than the code implementing them.",
    "Designing scalable databases requires thinking about future users from the beginning.",
    "Understanding the domain is just as important as choosing the right technologies.",
    "Software becomes significantly more valuable when it automates repetitive decision-making.",
    "Building products for a community requires a different mindset than building tools for yourself.",
  ],

  futureImprovements: [
    "The long-term vision extends far beyond expense calculations.",
    "Duty hour calculations",
    "Flight time accumulation",
    "Fatigue risk monitoring",
    "Contract compliance verification",
    "Rest requirement tracking",
    "Payroll estimation",
    "Interactive dashboards",
    "Data analytics for operational trends",
    "AI-assisted schedule analysis",
  ],

  quote: "The best tools stop solving your own problems and start solving everyone else's.",

  links: [{ label: "View on GitHub", href: "#" }],
};


export const financialSystemCaseStudy: CaseStudy = {
  name: "Financial System",
  tagline: "Organizing better financial decisions.",
  summary:
    "A personal finance platform designed to centralize financial information, transform scattered accounts into meaningful insights, and make everyday financial decisions easier to understand.",

  overview: {
    timeline: "2 weeks",
    role: "Product Designer & Data Analyst",
    status: "Developing",
    technologies: ["Google Sheets", "Financial Modeling"],
  },

  problem: [
    "As my personal finances became more diverse, I realized I was constantly switching between different banking apps, investment platforms, credit cards and spreadsheets just to understand my financial situation.",
    "The information already existed, but it was scattered across multiple places.",
    "Although there are many personal finance templates available, none of them matched the way I think about money or the information I actually need to make decisions.",
    "I wasn't looking for another expense tracker.",
    "I wanted a single place where I could understand my complete financial picture at a glance.",
    "The goal became building a financial hub that organized information instead of simply storing transactions.",
  ],

  challenge: [
    "Unlike my previous projects, this one begins with data rather than software.",
    "The first challenge is understanding what information is actually useful before deciding how it should be displayed.",
    "Instead of starting with code, I began designing financial summaries in Google Sheets to validate ideas, identify useful metrics and understand how different financial accounts relate to one another.",
    "The project also introduces a new level of complexity: multiple bank accounts, investments, savings, loans, credit cards and recurring expenses all need to be consolidated into a single system without overwhelming the user.",
    "The biggest challenge is not calculating numbers—it is presenting financial information in a way that helps people make better decisions.",
  ],

  solution: [
    "The project will start with a dashboard-first approach.",
    "Rather than immediately developing a web application, I am first designing and validating the financial model inside Google Sheets.",
    "This allows me to experiment with visualizations, categories, summaries and reports before implementing the logic in software.",
    "Once the information architecture is mature, the long-term plan is to migrate the system into a full-stack application where financial data can be centralized, analyzed and visualized automatically.",
    "The objective is not to replace banking applications, but to provide a single dashboard that simplifies financial decision-making.",
  ],

  architecture: ["Google Sheets", "Dashboard design", "Financial modeling"],

  architecturePlanned: [
    { label: "Frontend", items: ["React", "Vite"] },
    { label: "Backend", items: ["Node.js", "Express"] },
    { label: "Database", items: ["PostgreSQL"] },
    { label: "Analytics", items: ["Power BI", "Python"] },
  ],

  keyFeaturesGroups: [
    {
      label: "Current",
      items: [
        "Income and expense tracking",
        "Debt tracking",
        "Investment summary",
        "Loan tracking",
      ],
    },
    {
      label: "Planned",
      items: [
        "Bank account integration",
        "Credit card management",
        "Currency conversion",
        "Automated dashboards",
        "Financial reports",
        "AI insights",
        "Cash flow analysis",
      ],
    },
  ],

  lessonsLearnedLabel: "Early Insights",
  lessonsLearned: [
    "Good dashboards begin with good questions.",
    "Organizing financial data is more valuable than collecting more data.",
    "A simple interface often requires a complex information model behind it.",
    "Building the dashboard first helps validate the product before writing code.",
  ],

  builtWith: [
    {
      title: "Current Version",
      groups: [
        {
          label: "Design & Modeling",
          items: ["Google Sheets", "Financial Modeling"],
        },
        {
          label: "Development",
          items: ["Visual Studio Code", "GitHub"],
        },
      ],
    },
    {
      title: "Planned Stack",
      groups: [
        { label: "Frontend", items: ["React", "Vite"] },
        { label: "Backend", items: ["Node.js", "Express", "REST API"] },
        { label: "Database", items: ["PostgreSQL"] },
        { label: "Analytics", items: ["SQL", "Power BI", "Python"] },
      ],
    },
  ],

  futureImprovements: [
    "Power BI dashboards",
    "AI-generated financial insights",
    "Budget forecasting",
    "Investment analytics",
    "Automated transaction categorization",
    "Financial goal tracking",
    "Multi-currency support",
    "Scenario simulation",
    "Family financial planning"
  ],

  links: [],
};