import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Prose from "@/components/projects/Prose";
import { journalEntries } from "@/lib/journal";

type JournalEntryPageProps = {
  params: Promise<{ slug: string }>;
};

function getEntry(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: JournalEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);

  if (!entry) {
    return {};
  }

  return {
    title: `${entry.title} — Journal — Mayra Gomez`,
    description: entry.excerpt,
  };
}

export default async function JournalEntryPage({
  params,
}: JournalEntryPageProps) {
  const { slug } = await params;
  const entry = getEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <article className="py-24 md:py-32">
      <Container as="div" className="max-w-2xl">
        <Link
          href="/journal"
          className="group inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors duration-200 hover:text-lavender-600"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
          Journal
        </Link>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
          {entry.date}
        </p>

        <h1 className="font-headline mt-3 text-4xl text-foreground md:text-5xl">
          {entry.title}
        </h1>

        <div className="mt-8 text-base leading-7 text-muted">
          <Prose paragraphs={entry.content} />
        </div>
      </Container>
    </article>
  );
}
