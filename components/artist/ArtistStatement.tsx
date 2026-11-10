import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { artistIntro } from "@/lib/artist";

export default function ArtistStatement() {
  return (
    <section
      aria-labelledby="artist-statement-heading"
      className="border-t border-foreground/10 py-20 md:py-28"
    >
      <Container>
        <ScrollReveal className="max-w-2xl md:ml-auto">
          <h2
            id="artist-statement-heading"
            className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600"
          >
            {artistIntro.statementLabel}
          </h2>

          <div className="font-headline mt-6 space-y-3 text-2xl italic leading-snug text-foreground md:text-3xl">
            {artistIntro.statement.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className="font-display mt-8 text-3xl text-lavender-600">
            Mayra Gomez
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
