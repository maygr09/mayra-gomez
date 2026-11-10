import Container from "@/components/layout/Container";
import CreatorPhotoFrame from "@/components/creator/CreatorPhotoFrame";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { artistIntro } from "@/lib/artist";

export default function ArtistStatement() {
  return (
    <section
      aria-labelledby="artist-statement-heading"
      className="border-t border-foreground/10 py-20 md:py-28"
    >
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
            <div className="max-w-2xl">
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
            </div>

            <CreatorPhotoFrame
              photo={artistIntro.portrait}
              bare
              className="aspect-[4/5] max-w-sm md:ml-auto"
              sizes="(min-width: 768px) 30vw, 90vw"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
