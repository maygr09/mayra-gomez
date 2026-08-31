import Container from "@/components/layout/Container";
import CaseStudySection from "@/components/projects/CaseStudySection";
import ProjectOverview from "@/components/projects/ProjectOverview";
import Prose from "@/components/projects/Prose";
import BulletList from "@/components/projects/BulletList";
import ArchitectureDiagram from "@/components/projects/ArchitectureDiagram";
import TechGroupList from "@/components/projects/TechGroupList";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyLayoutProps = {
  caseStudy: CaseStudy;
};

export default function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  const {
    name,
    tagline,
    summary,
    overview,
    problem,
    challenge,
    solution,
    architecture,
    architecturePlanned,
    keyFeatures,
    keyFeaturesGroups,
    lessonsLearnedLabel,
    lessonsLearned,
    builtWith,
    futureImprovements,
    quote,
    links,
  } = caseStudy;

  return (
    <article>
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
        <ProjectOverview overview={overview} />

        <CaseStudySection title="The Problem">
          <Prose paragraphs={problem} />
        </CaseStudySection>

        <CaseStudySection title="The Challenge">
          <Prose paragraphs={challenge} />
        </CaseStudySection>

        <CaseStudySection title="The Solution">
          <Prose paragraphs={solution} />
        </CaseStudySection>

        {quote && (
          <blockquote className="border-t border-foreground/10 py-12 text-center md:py-16">
            <p className="font-headline mx-auto max-w-2xl text-2xl italic leading-relaxed text-lavender-600 md:text-3xl">
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
        )}

        <CaseStudySection title="Architecture">
          <ArchitectureDiagram layers={architecture} />

          {architecturePlanned && (
            <div className="mt-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
                Planned Version
              </p>
              <div className="mt-4">
                <TechGroupList groups={architecturePlanned} />
              </div>
            </div>
          )}
        </CaseStudySection>

        <CaseStudySection title="Key Features">
          {keyFeaturesGroups ? (
            <TechGroupList groups={keyFeaturesGroups} />
          ) : (
            <BulletList items={keyFeatures ?? []} columns={2} />
          )}
        </CaseStudySection>

        <CaseStudySection title={lessonsLearnedLabel ?? "Lessons Learned"}>
          <BulletList items={lessonsLearned} />
        </CaseStudySection>

        {builtWith && (
          <CaseStudySection title="Built With">
            <div className="space-y-10">
              {builtWith.map((version) => (
                <div key={version.title}>
                  <h3 className="font-headline text-lg text-foreground">
                    {version.title}
                  </h3>
                  <div className="mt-4">
                    <TechGroupList groups={version.groups} />
                  </div>
                </div>
              ))}
            </div>
          </CaseStudySection>
        )}

        <CaseStudySection title="Future Improvements">
          <BulletList items={futureImprovements} />
        </CaseStudySection>

        {links.length > 0 && (
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
        )}
      </Container>
    </article>
  );
}
