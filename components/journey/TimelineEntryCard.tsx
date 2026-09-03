import Link from "next/link";
import type { TimelineEntry } from "@/lib/journey";

type TimelineEntryCardProps = {
  entry: TimelineEntry;
};

export default function TimelineEntryCard({ entry }: TimelineEntryCardProps) {
  const { year, title, description, tags, hasImagePlaceholder, learnMoreHref } =
    entry;

  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
        {year}
      </p>

      <h3 className="font-headline mt-3 text-xl text-foreground md:text-2xl">
        {title}
      </h3>

      <p className="mt-3 text-base leading-7 text-muted">{description}</p>

      {tags && tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}

      {hasImagePlaceholder && (
        <div
          aria-hidden="true"
          className="mt-6 flex aspect-video w-full items-center justify-center border border-foreground/10 bg-lavender-50/40"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            Image placeholder
          </span>
        </div>
      )}

      {learnMoreHref && (
        <Link
          href={learnMoreHref}
          className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-lavender-600"
        >
          Learn More
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      )}
    </div>
  );
}
