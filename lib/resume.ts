import type { TechGroup } from "@/lib/case-studies";

export type ExperienceEntry = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Cabin Crew",
    company: "Aeromexico",
    location: "Venustiano Carranza, Mexico City",
    dates: "Oct 2023 – Present",
    bullets: [
      "Made real-time operational decisions in high-pressure environments.",
      "Ensured compliance with aviation safety procedures and operational protocols.",
      "Coordinated with flight crew and multidisciplinary teams to ensure safe operations.",
    ],
  },
  {
    title: "Intern",
    company:
      "Consultores Especializados en Soluciones de Seguridad Privada y Acceso",
    location: "Remote, Mexico City",
    dates: "May 2025 – May 2026",
    bullets: [
      "Developed a functional website for company use.",
      "Participated in team meetings and project discussions.",
      "Gained introductory exposure to database structures and data handling.",
    ],
  },
  {
    title: "French Classroom Assistant",
    company: "Centro Escolar del Lago",
    location: "Cuautitlán Izcalli, Mexico",
    dates: "Aug 2023 – Oct 2023",
    bullets: [
      "Supported the lead teacher in planning classroom activities and generating French-themed teaching materials.",
      "Helped prepare presentations and delivered select lesson topics to students.",
      "Assisted with grading assignments and classroom supervision.",
      "Contributed to French-themed classroom decoration and learning environment.",
    ],
  },
  {
    title: "Cabin Crew",
    company: "Volaris",
    location: "Apodaca, Nuevo León",
    dates: "Jan 2022 – Jul 2023",
    bullets: [
      "Managed onboard sales and handled cash transactions accurately.",
      "Delivered customer service in high-demand environments.",
    ],
  },
  {
    title: "Medical Administrative Assistant",
    company: "Star Medica",
    location: "Cuautitlán Izcalli, Mexico",
    dates: "Aug 2021 – Jan 2022",
    bullets: [
      "Provided administrative support, including scheduling and patient coordination.",
      "Managed sensitive information confidentially.",
    ],
  },
  {
    title: "Customer Service Representative",
    company: "Fedex",
    location: "Cuautitlán Izcalli, Mexico",
    dates: "Aug 2018 – Jan 2020",
    bullets: [
      "Provided support regarding delivery status, logistics and service enquiries.",
      "Worked with internal systems to track and update shipment information.",
    ],
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  dates: string;
  note: string;
};

export const education: EducationEntry[] = [
  {
    degree: "BSc Computer Systems Engineering",
    institution: "Universidad Virtual del Estado de Guanajuato",
    dates: "Feb 2023 – May 2026",
    note: "Degree pending · GPA 92/100",
  },
  {
    degree: "BA Modern Languages",
    institution: "Universidad de America Latina",
    dates: "Jan 2021 – Dec 2024",
    note: "Completed, degree pending",
  },
  {
    degree: "Cabin Crew Training (Government Licensed Certification)",
    institution: "Centro Universitario Haller",
    dates: "Feb 2020 – Dec 2020",
    note: "GPA 99/100",
  },
  {
    degree: "Technical Studies in Vocal Performance",
    institution: "Conservatorio Nacional de Música de México",
    dates: "Sep 2016 – Dec 2021",
    note: "Coursework completed",
  },
];

export type CertificationEntry = {
  title: string;
  institution: string;
  dates: string;
};

export const certifications: CertificationEntry[] = [
  {
    title: "Basic Programming (C++)",
    institution: "Universidad Virtual del Estado de Guanajuato",
    dates: "Dec 2025",
  },
  {
    title: "Python Fundamentals",
    institution: "Cisco Networking Academy",
    dates: "May 2026",
  },
  {
    title: "Data Science and Artificial Intelligence",
    institution: "Universidad Virtual del Estado de Guanajuato",
    dates: "Aug 2026",
  },
  {
    title: "Python + SQL + Power BI",
    institution: "Independent Course",
    dates: "In progress · Sep 2026",
  },
];

export const technicalSkills: TechGroup[] = [
  { label: "Programming Languages", items: ["Python", "JavaScript", "SQL"] },
  { label: "Frameworks", items: ["React", "Express", "Node.js"] },
  { label: "Databases", items: ["PostgreSQL"] },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Power BI (coming soon)"],
  },
];

export type LanguageEntry = {
  name: string;
  level: string;
};

export const languages: LanguageEntry[] = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "C1 - IELTS 7.5" },
  { name: "French", level: "B1" },
  { name: "Italian", level: "A2" },
  { name: "German", level: "A1" },
];
