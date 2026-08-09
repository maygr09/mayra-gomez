import Link from "next/link";
import CaseStudySection from "@/components/projects/CaseStudySection";
import { projects } from "@/lib/projects";

export default function SelectedProjects() {
  return (
    <CaseStudySection title="Featured Projects">
      <div>
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-1 border-t border-foreground/10 py-6 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <h3 className="text-base text-foreground">{project.name}</h3>
              <p className="mt-1 text-sm text-lavender-600">
                {project.tagline}
              </p>
            </div>

            <Link
              href={project.href}
              className="group inline-flex shrink-0 items-center gap-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-lavender-600"
            >
              Read Case Study
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </CaseStudySection>
  );
}
