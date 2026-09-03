import Button from "@/components/ui/Button";
import type { LabProject } from "@/lib/lab";

type LabCardProps = {
  project: LabProject;
};

export default function LabCard({ project }: LabCardProps) {
  const { title, status, description, tags, logHref } = project;

  return (
    <article className="flex flex-col justify-between border border-foreground/10 p-8 transition-colors duration-300 hover:border-lavender-400 hover:bg-lavender-50/40">
      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-medium text-foreground md:text-xl">
            {title}
          </h3>

          <span className="inline-flex shrink-0 items-center rounded-full border border-lavender-200 bg-lavender-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-lavender-600">
            {status}
          </span>
        </div>

        <p className="mt-4 text-base leading-7 text-muted">{description}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Button href={logHref}>Development Log</Button>
      </div>
    </article>
  );
}
