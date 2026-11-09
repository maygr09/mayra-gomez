// Placeholder content for the Creator mini-site.

export type CreatorStat = {
  label: string;
  value: string;
};

export type Platform = {
  name: string;
  handle: string;
  followers: string;
  href: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type Collaboration = {
  slug: string;
  brand: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  goal: string;
  deliverables: string[];
  results: CreatorStat[];
  videoEmbedUrl?: string;
  testimonial?: Testimonial;
};

export type Service = {
  title: string;
  deliverables: string[];
  turnaround: string;
  startingAt: string;
};

export type VideoExample = {
  title: string;
  // Local file in /public (e.g. "/videos/creator/app-1.mp4"). Optional.
  src?: string;
  // Still image shown before the video loads. Optional.
  poster?: string;
  // Link to the original post on Instagram / TikTok / YouTube. Optional.
  href?: string;
  platform?: string;
};

export type ExampleSection = {
  industry: string;
  description: string;
  videos: VideoExample[];
};

export type CreatorPhoto = {
  alt: string;
  // Local file in /public (e.g. "/images/creator/about-1.jpg"). Optional.
  src?: string;
};

// Two hero photos, shown side by side with a wavy right edge.
export const creatorHeroPhotos: CreatorPhoto[] = [
  { alt: "Portrait of Mayra Gomez" },
  { alt: "Mayra creating content" },
];

export const creatorAbout = {
  heading: "About me",
  paragraphs: [
    "Placeholder: who you are as a creator, in one or two short sentences.",
    "Placeholder: what you make and who it is for.",
  ],
  facts: [
    "Placeholder: a concrete fact (e.g. 40+ videos published)",
    "Placeholder: a concrete fact (e.g. based in Mexico, creating in English and Spanish)",
    "Placeholder: a concrete fact (e.g. background in software and aviation)",
  ],
};

// Visibility switches. Hidden sections keep all their code and data; flip a
// value to `true` when you have real content for it.
export const creatorVisibility = {
  homeStats: false,
  work: false,
  mediaKitNumbers: false,
  mediaKitAudience: false,
};

// Start with one example per section. Add more objects to `videos` and the
// row turns into a carousel automatically.
const placeholderVideos = (industry: string): VideoExample[] => [
  { title: `${industry} example 1` },
];

export const exampleSections: ExampleSection[] = [
  {
    industry: "Apps",
    description: "Placeholder: one line on the kind of app content you make.",
    videos: placeholderVideos("Apps"),
  },
  {
    industry: "Travel & Lifestyle",
    description: "Placeholder: one line on the kind of travel content you make.",
    videos: placeholderVideos("Travel"),
  },
  {
    industry: "Beauty & Wellness",
    description: "Placeholder: one line on the kind of beauty content you make.",
    videos: placeholderVideos("Beauty"),
  },
];

export const creatorIntro = {
  headline: "Content that turns attention into action.",
  subline:
    "Helping brands connect with real audience.",
  niches: ["Apps", "Lifestyle", "Travel", "Beauty & Wellness"],
};

export const creatorStats: CreatorStat[] = [
  { label: "Total followers", value: "00K" },
  { label: "Avg. views per video", value: "00K" },
  { label: "Brand collabs", value: "00" },
];

export const whatBrandsGet: string[] = [
  "Placeholder: a concrete deliverable (e.g. 1 Reel + 3 Stories)",
  "Placeholder: a concrete outcome (e.g. brief to draft in 5 days)",
  "Placeholder: usage rights and reporting included",
  "Placeholder: performance report after publishing",
];

export const platforms: Platform[] = [
  {
    name: "Instagram",
    handle: "@maygr.creates",
    followers: "",
    href: "https://www.instagram.com/maygr.creates",
  },
  {
    name: "TikTok",
    handle: "@maygr.creates",
    followers: "",
    href: "https://www.tiktok.com/@maygr.creates",
  },
];

export const audienceFacts: CreatorStat[] = [
  { label: "Top country", value: "Placeholder" },
  { label: "Age range", value: "00–00" },
  { label: "Women / Men", value: "00% / 00%" },
  { label: "Top interest", value: "Placeholder" },
];

export const services: Service[] = [
  {
    title: "Short-form video",
    deliverables: [
      "1 Reel or TikTok (30–60s)",
      "Script and concept included",
      "1 round of revisions",
    ],
    turnaround: "5 business days",
    startingAt: "$000",
  },
  {
    title: "Content package",
    deliverables: [
      "3 short-form videos",
      "5 Stories with link",
      "Performance report",
    ],
    turnaround: "10 business days",
    startingAt: "$000",
  },
  {
    title: "Ongoing partnership",
    deliverables: [
      "Monthly content calendar",
      "4+ pieces per month",
      "Monthly report and call",
    ],
    turnaround: "Monthly",
    startingAt: "$000 / mo",
  },
];

export const workProcess: string[] = [
  "You send a brief with goal, budget and timeline.",
  "I reply within 48 hours with a concept and quote.",
  "We lock scope, and I deliver the first draft.",
  "One revision round, then I publish and send results.",
];

export const collaborations: Collaboration[] = [
  {
    slug: "placeholder-brand-one",
    brand: "Placeholder Brand One",
    title: "Product launch campaign",
    year: "2026",
    category: "Launch",
    summary: "Placeholder: one sentence on what you made for this brand.",
    goal: "Placeholder: the brand's goal (e.g. drive 500 sign-ups in 30 days).",
    deliverables: ["1 Reel", "3 Stories", "1 YouTube integration"],
    results: [
      { label: "Views", value: "000K" },
      { label: "Engagement", value: "0.0%" },
      { label: "Link clicks", value: "0,000" },
    ],
    testimonial: {
      quote: "Placeholder: a short quote from the brand about working with you.",
      author: "Placeholder Name",
      role: "Marketing Manager, Placeholder Brand One",
    },
  },
  {
    slug: "placeholder-brand-two",
    brand: "Placeholder Brand Two",
    title: "Always-on content series",
    year: "2025",
    category: "Series",
    summary: "Placeholder: one sentence on what you made for this brand.",
    goal: "Placeholder: the brand's goal (e.g. grow awareness among new audiences).",
    deliverables: ["6 short-form videos", "Monthly report"],
    results: [
      { label: "Views", value: "000K" },
      { label: "Followers gained", value: "+0,000" },
      { label: "Saves", value: "0,000" },
    ],
  },
];
