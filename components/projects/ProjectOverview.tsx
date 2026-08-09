import type { ProjectOverview as ProjectOverviewData } from "@/lib/case-studies";

type ProjectOverviewProps = {
  overview: ProjectOverviewData;
};

export default function ProjectOverview({ overview }: ProjectOverviewProps) {
  const { timeline, role, status, technologies, githubUrl } = overview;

  return (
    <section
      aria-label="Project overview"
      className="border-t border-foreground/10 py-12 md:py-16"
    >
      <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
        Project Overview
      </h2>

      <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
        <div>
          <dt className="text-sm text-muted">Timeline</dt>
          <dd className="mt-2 text-base text-foreground">{timeline}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted">Role</dt>
          <dd className="mt-2 text-base text-foreground">{role}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted">Status</dt>
          <dd className="mt-2 text-base text-foreground">{status}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted">Technologies</dt>
          <dd className="mt-2 text-base text-foreground">
            {technologies.join(" · ")}
          </dd>
        </div>

        {githubUrl && (
          <div>
            <dt className="text-sm text-muted">GitHub</dt>
            <dd className="mt-2 text-base">
              <a
                href={githubUrl}
                className="group inline-flex items-center gap-1 text-foreground transition-colors duration-200 hover:text-lavender-600"
              >
                View Repository
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </dd>
          </div>
        )}
      </dl>
    </section>
  );
}
