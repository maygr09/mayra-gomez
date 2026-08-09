import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, tagline, href } = project;

  return (
    <Link
      href={href}
      className="group flex flex-col justify-between border border-foreground/10 p-8 transition-colors duration-300 hover:border-lavender-400 hover:bg-lavender-50/40 md:aspect-square"
    >

      <div>
        <h3 className="text-lg font-medium bold text-foreground md:text-xl">{name}</h3>
        <p className="font-headline mt-2 italic text-lavender-600">
          {tagline}
        </p>

        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-lavender-600">
          Explore Case Study
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
