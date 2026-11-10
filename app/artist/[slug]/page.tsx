import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/layout/Container";
import ProjectMedia from "@/components/artist/ProjectMedia";
import ProjectPager from "@/components/artist/ProjectPager";
import CreatorPhotoFrame from "@/components/creator/CreatorPhotoFrame";
import Prose from "@/components/projects/Prose";
import ArrowLink from "@/components/ui/ArrowLink";
import {
  archiveProjects,
  artistProjects,
  categoryLabels,
  formatYear,
  getProject,
  opensExternally,
} from "@/lib/artist";

type ArtistProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artistProjects
    .filter((project) => !opensExternally(project))
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ArtistProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Artist — Mayra Gomez`,
    description: project.summary,
  };
}

export default async function ArtistProjectPage({
  params,
}: ArtistProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || opensExternally(project)) notFound();

  const {
    title,
    category,
    date,
    role,
    skills,
    story,
    cover,
    media,
    externalLink,
    hideDetailCover,
  } = project;

  const mediaBlock = media.length > 0 && (
    <div className="mt-12">
      <ProjectMedia media={media} />
    </div>
  );

  // archiveProjects is newest first: the previous index is the newer project.
  // Projects that open externally have no page, so they are skipped.
  const pages = archiveProjects.filter((p) => !opensExternally(p));
  const index = pages.findIndex((p) => p.slug === slug);
  const newer = index > 0 ? pages[index - 1] : undefined;
  const older = pages[index + 1];

  return (
    <article className="py-24 md:py-32">
      <Container>
        <Link
          href="/artist#archive"
          className="group inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors duration-200 hover:text-lavender-600"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
          Artist
        </Link>

        <header className="mt-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
            {categoryLabels[category]} · {formatYear(date)}
          </p>

          <h1 className="font-headline mt-3 text-4xl text-foreground md:text-6xl">
            {title}
          </h1>

          {role && (
            <p className="font-headline mt-3 text-xl italic text-lavender-600 md:text-2xl">
              {role}
            </p>
          )}

          {skills && skills.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </header>

        {hideDetailCover && mediaBlock}

        {!hideDetailCover && (
          <div className="mt-12">
            <CreatorPhotoFrame
              photo={cover}
              className="aspect-[16/9]"
              sizes="100vw"
              priority
            />
          </div>
        )}

        {story && (
          <div className="mt-12 max-w-2xl text-lg leading-8 text-muted">
            <Prose paragraphs={story} />
          </div>
        )}

        {externalLink && (
          <div className="mt-8">
            <ArrowLink href={externalLink.href} external>
              {externalLink.label}
            </ArrowLink>
          </div>
        )}

        {!hideDetailCover && mediaBlock}

        <div className="mt-20">
          <ProjectPager newer={newer} older={older} />
        </div>
      </Container>
    </article>
  );
}
