import Link from "next/link";
import type { JournalEntry } from "@/lib/journal";

type JournalEntryPreviewProps = {
  entry: JournalEntry;
};

export default function JournalEntryPreview({
  entry,
}: JournalEntryPreviewProps) {
  const { slug, date, title, excerpt } = entry;

  return (
    <article className="border-t border-foreground/10 py-8 first:border-t-0 first:pt-0">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
        {date}
      </p>

      <h2 className="font-headline mt-3 text-2xl text-foreground md:text-3xl">
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
        {excerpt}
      </p>

      <Link
        href={`/journal/${slug}`}
        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-lavender-600"
      >
        Read Entry
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </article>
  );
}
