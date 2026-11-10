import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { artistBackground } from "@/lib/artist";

const labelClassName =
  "text-sm font-medium uppercase tracking-[0.2em] text-lavender-600";

export default function ArtistBackground() {
  const { lessons, studies } = artistBackground;

  return (
    <section
      aria-labelledby="artist-background-heading"
      className="border-t border-foreground/10 py-24 md:py-32"
    >
      <Container>
        <ScrollReveal>
          <h2
            id="artist-background-heading"
            className="font-headline text-3xl text-foreground md:text-4xl"
          >
            Artistic Background
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div>
              <p className={labelClassName}>Private lessons</p>
              <p className="font-headline mt-4 text-2xl leading-snug text-foreground md:text-3xl">
                {lessons.join(" · ")}
              </p>
            </div>

            <div>
              <p className={labelClassName}>Formal studies</p>
              <ul className="font-headline mt-4 space-y-2 text-2xl text-foreground md:text-3xl">
                {studies.map((study) => (
                  <li key={study}>{study}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
