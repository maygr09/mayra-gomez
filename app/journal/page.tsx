import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import JournalEntryPreview from "@/components/journal/JournalEntryPreview";
import { journalEntries } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal — Mayra Gomez",
  description:
    "Short, recurring notes on engineering, data, aviation and the arts.",
};

export default function JournalPage() {
  return (
    <article>
      <header className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-headline text-4xl text-foreground md:text-6xl">
              Journal
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              Short, recurring notes on what I&apos;m learning along the way.
            </p>
          </div>
        </Container>
      </header>

      <Container>
        <div className="border-t border-foreground/10">
          {journalEntries.map((entry) => (
            <JournalEntryPreview key={entry.slug} entry={entry} />
          ))}
        </div>
      </Container>
    </article>
  );
}
