import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import CaseStudySection from "@/components/projects/CaseStudySection";
import BulletList from "@/components/projects/BulletList";
import CreatorPageHeader from "@/components/creator/CreatorPageHeader";
import StatGrid from "@/components/creator/StatGrid";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
import {
  audienceFacts,
  creatorStats,
  creatorVisibility,
  platforms,
  services,
} from "@/lib/creator";

export const metadata: Metadata = {
  title: "Media Kit — Creator — Mayra Gomez",
  description: "Audience, platforms, services and starting rates.",
};

export default function MediaKitPage() {
  return (
    <>
      <CreatorPageHeader
        title="Media Kit"
        subtitle="Everything a brand needs to decide: numbers, audience, services and starting rates."
      />

      <Container>
        {creatorVisibility.mediaKitNumbers && (
          <CaseStudySection title="Numbers">
            <StatGrid stats={creatorStats} size="md" />
          </CaseStudySection>
        )}

        <CaseStudySection title="Platforms">
          <ul>
            {platforms.map((platform) => (
              <li
                key={platform.name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-foreground/10 py-4 first:border-t-0 first:pt-0"
              >
                <span className="text-foreground">{platform.name}</span>
                <span className="text-sm text-muted">{platform.handle}</span>
                <span className="font-headline text-xl text-foreground">
                  {platform.followers}
                </span>
                <ArrowLink href={platform.href} external>
                  Visit
                </ArrowLink>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        {creatorVisibility.mediaKitAudience && (
          <CaseStudySection title="Audience">
            <StatGrid stats={audienceFacts} size="md" />
          </CaseStudySection>
        )}

        <CaseStudySection title="Services & rates">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {services.map((service) => (
              <li
                key={service.title}
                className="border border-foreground/10 p-8"
              >
                <h3 className="text-lg font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="font-headline mt-2 text-3xl text-lavender-600">
                  {service.startingAt}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">
                  Turnaround · {service.turnaround}
                </p>

                <div className="mt-6 text-base leading-7">
                  <BulletList items={service.deliverables} />
                </div>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <section className="border-t border-foreground/10 py-12 pb-24 md:py-16 md:pb-32">
          <p className="font-headline text-2xl text-foreground md:text-3xl">
            Ready to start?
          </p>
          <div className="mt-6">
            <Button href="/creator/contact">Work with me</Button>
          </div>
        </section>
      </Container>
    </>
  );
}
