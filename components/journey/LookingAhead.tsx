import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LookingAhead() {
  return (
    <section
      id="looking-ahead"
      aria-labelledby="looking-ahead-heading"
      className="border-t border-foreground/10 py-24 md:py-32"
    >
      <Container>
        <ScrollReveal className="max-w-2xl">
          <h2
            id="looking-ahead-heading"
            className="font-headline text-3xl text-foreground md:text-4xl"
          >
            Looking Ahead
          </h2>

          <div className="mt-8 space-y-4 text-lg leading-8 text-muted">
            <p>
              Placeholder: what I want to keep building, learning and
              exploring next.
            </p>
            <p>
              Placeholder: the kind of engineer, teammate and problem-solver
              I&apos;m working to become.
            </p>
            <p>
              Placeholder: how this journey continues to shape the way I
              think about technology.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
