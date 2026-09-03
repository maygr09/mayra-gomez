import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import JourneyHero from "@/components/journey/JourneyHero";
import JourneySideNav from "@/components/journey/JourneySideNav";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
import JourneyStats from "@/components/journey/JourneyStats";
import LookingAhead from "@/components/journey/LookingAhead";

export const metadata: Metadata = {
  title: "My Journey — Mayra Gomez",
  description:
    "A timeline of the experiences, projects, and decisions that have shaped my path as a software engineer and lifelong learner.",
};

export default function MyJourneyPage() {
  return (
    <article>
      <JourneyHero />
      <JourneySideNav />

      <section aria-labelledby="timeline-heading" className="pb-24 md:pb-32">
        <Container>
          <h2 id="timeline-heading" className="sr-only">
            Timeline
          </h2>

          <JourneyTimeline />
        </Container>
      </section>

      <JourneyStats />
      <LookingAhead />
    </article>
  );
}
