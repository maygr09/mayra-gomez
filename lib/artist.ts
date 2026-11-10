// Content for the Artist section. Everything on /artist and /artist/[slug]
// renders from this file. Dates and placeholder media are examples:
// replace them with the real ones.

export type ArtistCategory =
  | "music"
  | "theatre"
  | "dance"
  | "writing"
  | "textile";

export const categoryLabels: Record<ArtistCategory, string> = {
  music: "Music & Voice",
  theatre: "Theatre & Performance",
  dance: "Dance & Circus Arts",
  writing: "Writing & Storytelling",
  textile: "Textile Arts",
};

export const categoryOrder: ArtistCategory[] = [
  "music",
  "theatre",
  "dance",
  "writing",
  "textile",
];

// The four dimensions shown at the top. Each one points to archive categories.
export const dimensions: { label: string; categories: ArtistCategory[] }[] = [
  { label: "Music", categories: ["music"] },
  { label: "Dance", categories: ["theatre", "dance"] },
  { label: "Writing", categories: ["writing"] },
  { label: "Crafts", categories: ["textile"] },
];

export type ArtistMedia =
  | { type: "image"; alt: string; src?: string; caption?: string }
  | { type: "video"; title: string; src?: string; poster?: string }
  // YouTube embed, e.g. "https://www.youtube-nocookie.com/embed/VIDEO_ID"
  | { type: "youtube"; title: string; embedUrl?: string }
  | { type: "audio"; title: string; src?: string };

export type ArtistImage = {
  alt: string;
  // File in /public, e.g. "/images/artist/lion-king-cover.jpg". Optional.
  src?: string;
};

export type ArtistProject = {
  slug: string;
  title: string;
  category: ArtistCategory;
  // "YYYY-MM". Used to sort the archive newest first.
  date: string;
  role?: string;
  // Short skill tags shown on the detail page.
  skills?: string[];
  summary: string;
  story?: string[];
  cover: ArtistImage;
  // Skip the big cover on the detail page and show the media first.
  hideDetailCover?: boolean;
  media: ArtistMedia[];
  // For published writing (e.g. Wattpad) or any external page.
  externalLink?: { label: string; href: string };
  featured?: boolean;
};

export const artistIntro = {
  statementLabel: "The artist behind the work",
  statement: [
    "I'm a multidisciplinary artist with a background in music and performing arts, constantly exploring new forms of creative expression.",
    "Driven by curiosity and a love for storytelling, I see art as a way to discover, connect, and express what words alone cannot.",
  ],
};

export const artistBackground = {
  lessons: [
    "Singing",
    "Piano",
    "Violin",
    "Jazz",
    "Hip-hop",
    "Aerial dance",
    "Acrobatics",
    "Theatre",
  ],
  studies: ["INBA arts centers", "Conservatory"],
};

const placeholderGallery = (label: string): ArtistMedia[] => [
  { type: "image", alt: `${label} photo 1` },
  { type: "image", alt: `${label} photo 2` },
  { type: "image", alt: `${label} photo 3` },
];

export const artistProjects: ArtistProject[] = [
  {
    slug: "the-lion-king",
    title: "The Lion King",
    category: "theatre",
    date: "2017-06",
    role: "Rafiki",
    skills: ["Acting", "Musical theatre", "Personal growth"],
    featured: true,
    summary:
      "Independent theatrical production. I hoped for Nala; the director saw something else.",
    story: [
      "I originally auditioned hoping to play Nala, but the director saw something different in me. She believed there was a side of myself waiting to be set free, and that Rafiki was the perfect character to bring it out. Through this role, I discovered abilities and a confidence I hadn't fully recognized in myself.",
    ],
    cover: { alt: "The Lion King, Rafiki on stage" },
    media: [
      { type: "video", title: "The Lion King, performance excerpt" },
      ...placeholderGallery("The Lion King"),
    ],
  },
  {
    slug: "conservatory-final-performance",
    title: "Conservatory Final Performance",
    category: "music",
    date: "2020-06",
    role: "Vocalist",
    skills: ["Classical singing", "Recorded performance", "Adaptability"],
    featured: true,
    hideDetailCover: true,
    summary:
      "My final technical music evaluation, held during the pandemic and recorded.",
    story: [
      "My final conservatory evaluation took place during the pandemic, when traditional performances were no longer possible. Instead, I had the opportunity to record my performance on video. What could have felt like a limitation became a meaningful experience, reminding me that artistic expression can adapt, evolve, and find its way beyond the stage.",
    ],
    cover: { alt: "Conservatory final performance" },
    media: [
      {
        type: "youtube",
        title: "Conservatory final performance",
        // Paste the embed link here, e.g.
        // "https://www.youtube-nocookie.com/embed/VIDEO_ID"
        embedUrl: undefined,
      },
    ],
  },
  {
    slug: "mulan-a-circus-adaptation",
    title: "Mulan: A Circus Adaptation",
    category: "dance",
    date: "2019-06",
    role: "Aerial dancer & vocalist",
    skills: ["Aerial dance", "Vocal performance", "Ensemble"],
    featured: true,
    summary:
      "Circus adaptation with aerial dance, a sung solo and demanding figures and drops.",
    story: [
      "Inspired by the story of Mulan, this production brought the narrative to life through circus performances. I participated in aerial dance and performed a song while other artists danced. Learning the aerial figures and drops was challenging, but seeing everything come together made the effort worthwhile. It was an experience that showed me what dedication and collaboration could achieve on stage.",
    ],
    cover: { alt: "Mulan: A Circus Adaptation, aerial scene" },
    media: [
      { type: "video", title: "Mulan, aerial excerpt" },
      ...placeholderGallery("Mulan"),
    ],
  },
  {
    slug: "wattpad-one-shot",
    title: "El amor de mi vida",
    category: "writing",
    date: "2016-06",
    summary: "Original short story published on Wattpad, inspired by a writing class.",
    cover: { alt: "Placeholder Story cover" },
    media: [],
    externalLink: { label: "Read on Wattpad", href: "https://www.wattpad.com/272732443-el-amor-de-mi-vida-one-shot-jelsa-capítulo-único" },
  },
  {
    slug: "placeholder-textile-piece",
    title: "Placeholder Textile Piece",
    category: "textile",
    date: "2022-02",
    summary: "Placeholder: one line on the piece and its technique.",
    cover: { alt: "Placeholder textile piece" },
    media: [
      ...placeholderGallery("Textile piece"),
      { type: "video", title: "Textile piece, process" },
    ],
  },
  {
    slug: "placeholder-rehearsal",
    title: "Placeholder Rehearsal",
    category: "music",
    date: "2020-11",
    summary: "Placeholder: one line on a rehearsal or recording session.",
    cover: { alt: "Placeholder rehearsal" },
    media: [{ type: "video", title: "Rehearsal footage" }],
  },
];

// Chronological, newest first.
export const archiveProjects: ArtistProject[] = [...artistProjects].sort(
  (a, b) => b.date.localeCompare(a.date),
);

export const selectedWorks: ArtistProject[] = artistProjects.filter(
  (project) => project.featured,
);

// Writing with an external link (e.g. Wattpad) goes straight to that link:
// it has no detail page of its own.
export function opensExternally(project: ArtistProject) {
  return project.category === "writing" && Boolean(project.externalLink);
}

export function getProject(slug: string) {
  return artistProjects.find((project) => project.slug === slug);
}

export function formatYear(date: string) {
  return date.slice(0, 4);
}

export type MediaKind = "Video" | "Photos" | "Audio" | "Read";

export function mediaKinds(project: ArtistProject): MediaKind[] {
  const kinds: MediaKind[] = [];
  if (project.media.some((m) => m.type === "video" || m.type === "youtube"))
    kinds.push("Video");
  if (project.media.some((m) => m.type === "image")) kinds.push("Photos");
  if (project.media.some((m) => m.type === "audio")) kinds.push("Audio");
  if (project.externalLink) kinds.push("Read");
  return kinds;
}
