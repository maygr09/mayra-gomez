import Link from "next/link";
import CreatorPhotoFrame from "@/components/creator/CreatorPhotoFrame";
import {
  categoryLabels,
  formatYear,
  mediaKinds,
  opensExternally,
  type ArtistProject,
} from "@/lib/artist";

type ArchiveCardProps = {
  project: ArtistProject;
};

const cardClassName =
  "group flex h-full flex-col border border-foreground/10 p-5 transition-colors duration-300 hover:border-lavender-400 hover:bg-lavender-50/40";

export default function ArchiveCard({ project }: ArchiveCardProps) {
  const { slug, title, category, date, summary, cover, externalLink } = project;
  const kinds = mediaKinds(project);

  const content = (
    <>
      <CreatorPhotoFrame
        photo={cover}
        className="aspect-[4/3]"
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
      />

      <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-lavender-600">
        {categoryLabels[category]} · {formatYear(date)}
      </p>

      <h3 className="mt-2 text-lg font-medium text-foreground">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-muted">{summary}</p>

      {kinds.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {kinds.map((kind) => (
            <li key={kind}>
              <span className="inline-flex rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted">
                {kind}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  // Writing goes straight to its external link, with no page in between.
  if (opensExternally(project) && externalLink) {
    return (
      <a
        href={externalLink.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} (opens in a new tab)`}
        className={cardClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={`/artist/${slug}`} className={cardClassName}>
      {content}
    </Link>
  );
}
