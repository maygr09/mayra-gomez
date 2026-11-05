import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import CollabCard from "@/components/creator/CollabCard";
import StatGrid from "@/components/creator/StatGrid";
import BulletList from "@/components/projects/BulletList";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
import {
  collaborations,
  creatorIntro,
  creatorStats,
  whatBrandsGet,
} from "@/lib/creator";

export const metadata: Metadata = {
  title: "Creator — Mayra Gomez",
  description: creatorIntro.headline,
};

export default function CreatorHomePage() {
  return (
    <>
      <header className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-headline text-4xl text-foreground md:text-6xl">
              {creatorIntro.headline}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              {creatorIntro.subline}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {creatorIntro.niches.map((niche) => (
                <li key={niche}>
                  <span className="inline-flex rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted">
                    {niche}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/creator/contact">Work with me</Button>
              <ArrowLink href="/creator/media-kit">View media kit</ArrowLink>
            </div>
          </div>
        </Container>
      </header>

      <section
        aria-label="Key numbers"
        className="border-t border-foreground/10 py-16 md:py-24"
      >
        <Container>
          <StatGrid stats={creatorStats} />
        </Container>
      </section>

      <section
        aria-labelledby="brands-get-heading"
        className="border-t border-foreground/10 py-16 md:py-24"
      >
        <Container>
          <h2
            id="brands-get-heading"
            className="font-headline text-3xl text-foreground md:text-4xl"
          >
            What brands get
          </h2>

          <div className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            <BulletList items={whatBrandsGet} />
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="featured-collabs-heading"
        className="border-t border-foreground/10 py-16 md:py-24"
      >
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="featured-collabs-heading"
              className="font-headline text-3xl text-foreground md:text-4xl"
            >
              Recent collaborations
            </h2>
            <ArrowLink href="/creator/work">All work</ArrowLink>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {collaborations.slice(0, 2).map((collab) => (
              <li key={collab.slug}>
                <CollabCard collab={collab} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
