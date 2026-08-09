import Container from "@/components/layout/Container";
import CaseStudySection from "@/components/projects/CaseStudySection";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyLayoutProps = {
  caseStudy: CaseStudy;
};

export default function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  const {
    name,
    tagline,
    summary,
    problem,
    challenge,
    solution,
    architecture,
    techStack,
    lessonsLearned,
    futureImprovements,
    links,
  } = caseStudy;

  return (
    <article className="bg-background">
      <header className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-headline text-4xl text-foreground md:text-6xl">
              {name}
            </h1>

            <p className="font-headline mt-4 text-xl italic text-lavender-600 md:text-2xl">
              {tagline}
            </p>

            <p className="mt-6 text-lg leading-8 text-muted">{summary}</p>
          </div>
        </Container>
      </header>

      <Container>
        <CaseStudySection title="The Problem">
          <p>{problem}</p>
        </CaseStudySection>

        <CaseStudySection title="The Challenge">
          <p>{challenge}</p>
        </CaseStudySection>

        <CaseStudySection title="The Solution">
          <p>{solution}</p>
        </CaseStudySection>

        <CaseStudySection title="Architecture">
          <p>{architecture}</p>
        </CaseStudySection>

        <CaseStudySection title="Tech Stack">
          <p>{techStack.join(" · ")}</p>
        </CaseStudySection>

        <CaseStudySection title="Lessons Learned">
          <p>{lessonsLearned}</p>
        </CaseStudySection>

        <CaseStudySection title="Future Improvements">
          <p>{futureImprovements}</p>
        </CaseStudySection>

        <CaseStudySection title="Links">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group inline-flex items-center gap-1 text-foreground transition-colors duration-200 hover:text-lavender-600"
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </CaseStudySection>
      </Container>
    </article>
  );
}
