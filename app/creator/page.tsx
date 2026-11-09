import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import CreatorPhotoFrame from "@/components/creator/CreatorPhotoFrame";
import CreatorWaveDefs from "@/components/creator/CreatorWaveDefs";
import ExampleSectionBlock from "@/components/creator/ExampleSectionBlock";
import StatGrid from "@/components/creator/StatGrid";
import BulletList from "@/components/projects/BulletList";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
import {
  creatorAbout,
  creatorHeroPhotos,
  creatorIntro,
  creatorStats,
  creatorVisibility,
  exampleSections,
  whatBrandsGet,
} from "@/lib/creator";

export const metadata: Metadata = {
  title: "Creator — Mayra Gomez",
  description: creatorIntro.headline,
};

const sectionClassName = "border-t border-foreground/10 py-16 md:py-24";
const headingClassName =
  "font-headline text-3xl text-foreground md:text-4xl";

export default function CreatorHomePage() {
  return (
    <>
      <header className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <CreatorWaveDefs />
              {creatorHeroPhotos.map((photo, index) => (
                <CreatorPhotoFrame
                  key={photo.alt}
                  photo={photo}
                  wavy
                  priority
                  className={`aspect-[3/4] ${index === 1 ? "mt-10 md:mt-16" : ""}`}
                />
              ))}
            </div>

            <div className="max-w-2xl">
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
          </div>
        </Container>
      </header>

      <section
        id="about"
        aria-labelledby="creator-about-heading"
        className={sectionClassName}
      >
        <Container>
          <h2 id="creator-about-heading" className={headingClassName}>
            {creatorAbout.heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-4 text-lg leading-8 text-muted">
              {creatorAbout.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <BulletList items={creatorAbout.facts} />
          </div>
        </Container>
      </section>

      <section
        id="examples"
        aria-labelledby="creator-examples-heading"
        className={sectionClassName}
      >
        <Container>
          <h2 id="creator-examples-heading" className={headingClassName}>
            Examples
          </h2>

          <div className="mt-12">
            {exampleSections.map((section) => (
              <ExampleSectionBlock key={section.industry} section={section} />
            ))}
          </div>
        </Container>
      </section>

      {creatorVisibility.homeStats && (
        <section aria-label="Key numbers" className={sectionClassName}>
          <Container>
            <StatGrid stats={creatorStats} />
          </Container>
        </section>
      )}

      <section
        aria-labelledby="brands-get-heading"
        className={sectionClassName}
      >
        <Container>
          <h2 id="brands-get-heading" className={headingClassName}>
            What brands get
          </h2>

          <div className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            <BulletList items={whatBrandsGet} />
          </div>
        </Container>
      </section>

      <section aria-labelledby="creator-cta-heading" className={sectionClassName}>
        <Container>
          <h2 id="creator-cta-heading" className={headingClassName}>
            Let&apos;s make something for your brand.
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/creator/contact">Work with me</Button>
            {creatorVisibility.work && (
              <ArrowLink href="/creator/work">See case studies</ArrowLink>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
