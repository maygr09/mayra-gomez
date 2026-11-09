import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import CaseStudySection from "@/components/projects/CaseStudySection";
import BulletList from "@/components/projects/BulletList";
import StatGrid from "@/components/creator/StatGrid";
import VideoEmbed from "@/components/creator/VideoEmbed";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
import { collaborations, creatorVisibility } from "@/lib/creator";

type CollabPageProps = {
  params: Promise<{ slug: string }>;
};

function getCollab(slug: string) {
  return collaborations.find((collab) => collab.slug === slug);
}

export function generateStaticParams() {
  return collaborations.map((collab) => ({ slug: collab.slug }));
}

export async function generateMetadata({
  params,
}: CollabPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collab = getCollab(slug);

  if (!collab) return {};

  return {
    title: `${collab.brand} — Creator — Mayra Gomez`,
    description: collab.summary,
  };
}

export default async function CollabPage({ params }: CollabPageProps) {
  const { slug } = await params;
  const collab = getCollab(slug);

  if (!creatorVisibility.work || !collab) notFound();

  const { brand, title, year, category, goal, deliverables, results, testimonial } =
    collab;

  return (
    <article>
      <header className="py-16 md:py-24">
        <Container>
          <ArrowLink href="/creator/work">All work</ArrowLink>

          <div className="mt-8 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
              {category} · {year}
            </p>
            <h1 className="font-headline mt-3 text-4xl text-foreground md:text-6xl">
              {brand}
            </h1>
            <p className="font-headline mt-4 text-xl italic text-lavender-600 md:text-2xl">
              {title}
            </p>
          </div>
        </Container>
      </header>

      <Container>
        <section
          aria-label="Results"
          className="border-t border-foreground/10 py-12 md:py-16"
        >
          <StatGrid stats={results} />
        </section>

        <CaseStudySection title="Goal">
          <p>{goal}</p>
        </CaseStudySection>

        <CaseStudySection title="What I delivered">
          <BulletList items={deliverables} />
        </CaseStudySection>

        <CaseStudySection title="The content">
          <VideoEmbed title={`${brand} — ${title}`} embedUrl={collab.videoEmbedUrl} />
        </CaseStudySection>

        {testimonial && (
          <blockquote className="border-t border-foreground/10 py-12 md:py-16">
            <p className="font-headline max-w-2xl text-2xl italic leading-relaxed text-lavender-600 md:text-3xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-muted">
              {testimonial.author} · {testimonial.role}
            </footer>
          </blockquote>
        )}

        <section className="border-t border-foreground/10 py-12 md:py-16">
          <p className="font-headline text-2xl text-foreground md:text-3xl">
            Want results like these?
          </p>
          <div className="mt-6">
            <Button href="/creator/contact">Work with me</Button>
          </div>
        </section>
      </Container>
    </article>
  );
}
