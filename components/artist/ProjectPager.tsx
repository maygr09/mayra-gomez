import Link from "next/link";
import type { ArtistProject } from "@/lib/artist";

type ProjectPagerProps = {
  newer?: ArtistProject;
  older?: ArtistProject;
};

const linkClassName =
  "group block max-w-xs text-foreground transition-colors duration-200 hover:text-lavender-600";

export default function ProjectPager({ newer, older }: ProjectPagerProps) {
  return (
    <nav
      aria-label="More projects"
      className="flex flex-wrap items-start justify-between gap-8 border-t border-foreground/10 pt-8"
    >
      {newer ? (
        <Link href={`/artist/${newer.slug}`} className={linkClassName}>
          <span className="text-sm text-muted">
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>{" "}
            Newer
          </span>
          <span className="font-headline mt-1 block text-xl">{newer.title}</span>
        </Link>
      ) : (
        <span />
      )}

      {older && (
        <Link
          href={`/artist/${older.slug}`}
          className={`${linkClassName} text-right`}
        >
          <span className="text-sm text-muted">
            Older{" "}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
          <span className="font-headline mt-1 block text-xl">{older.title}</span>
        </Link>
      )}
    </nav>
  );
}
