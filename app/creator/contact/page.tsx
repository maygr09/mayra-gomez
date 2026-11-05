import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import CaseStudySection from "@/components/projects/CaseStudySection";
import CreatorPageHeader from "@/components/creator/CreatorPageHeader";
import { workProcess } from "@/lib/creator";

export const metadata: Metadata = {
  title: "Work with me — Creator — Mayra Gomez",
  description: "How to start a collaboration: send a brief, get a reply in 48 hours.",
};

const EMAIL = "cnm.mayragomez@gmail.com";
const SUBJECT = "Collaboration brief";
const BODY = [
  "Brand:",
  "Goal:",
  "Deliverables:",
  "Budget:",
  "Timeline:",
].join("\n");

const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  SUBJECT,
)}&body=${encodeURIComponent(BODY)}`;

export default function CreatorContactPage() {
  return (
    <>
      <CreatorPageHeader
        title="Work with me"
        subtitle="Send a brief. You get a concept and a quote within 48 hours."
      />

      <Container>
        <section className="border-t border-foreground/10 py-12 md:py-16">
          <a
            href={mailtoHref}
            className="rounded-full border border-lavender-200 bg-lavender-50 px-6 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-lavender-100"
          >
            Email a brief
          </a>
          <p className="mt-4 text-sm text-muted">
            Opens your email with a ready-to-fill template: brand, goal,
            deliverables, budget, timeline.
          </p>
        </section>

        <div className="pb-24 md:pb-32">
          <CaseStudySection title="How it works">
            <ol className="space-y-4">
              {workProcess.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-headline text-2xl text-lavender-600">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </CaseStudySection>
        </div>
      </Container>
    </>
  );
}
