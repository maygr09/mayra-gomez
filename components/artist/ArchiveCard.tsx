import Link from "next/link";
import CreatorPhotoFrame from "@/components/creator/CreatorPhotoFrame";
import ArrowLink from "@/components/ui/ArrowLink";
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

const metaClassName =
  "text-xs font-medium uppercase tracking-[0.2em] text-lavender-600";

// Writing: book cover with its label beside it, description and link below.
// The link goes straight to the external page (e.g. Wattpad).
function WritingCard({ project }: ArchiveCardProps) {
  const { title, category, date, summary, cover, externalLink } = project;

  return (
    <article className={cardClassName}>
      <div className="flex items-start gap-5">
        {/* Half the card width at 2:3 is exactly as tall as the 4:3 images
            of the other cards, so every card has the same image height. */}
        <div className="w-1/2 shrink-0">
          <CreatorPhotoFrame
            photo={cover}
            className="aspect-[2/3]"
            sizes="(min-width: 1024px) 16vw, 45vw"
          />
        </div>

        <div className="min-w-0">
          <p className={metaClassName}>{categoryLabels[category]}</p>
          <p className={`mt-1 ${metaClassName}`}>{formatYear(date)}</p>
        </div>
      </div>

      <h3 className="mt-5 text-lg font-medium text-foreground">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-muted">{summary}</p>

      {externalLink && (
        <div className="mt-4">
          <ArrowLink href={externalLink.href} external>
            {externalLink.label}
          </ArrowLink>
        </div>
      )}
    </article>
  );
}

export default function ArchiveCard({ project }: ArchiveCardProps) {
  if (opensExternally(project)) {
    return <WritingCard project={project} />;
  }

  const { slug, title, category, date, summary, cover } = project;
  const kinds = mediaKinds(project);

  return (
    <Link href={`/artist/${slug}`} className={cardClassName}>
      <CreatorPhotoFrame
        photo={cover}
        className="aspect-[4/3]"
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
      />

      <p className={`mt-5 ${metaClassName}`}>
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
    </Link>
  );
}
