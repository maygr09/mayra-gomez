import Link from "next/link";
import Container from "@/components/layout/Container";

export default function JourneyPreview() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="bg-background py-24 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <h2
            id="journey-heading"
            className="font-headline text-3xl text-foreground md:text-4xl"
          >
            My Journey
          </h2>

          <div className="mt-8 space-y-2 text-lg leading-8 text-muted">
            <p>Engineering taught me how to solve problems.</p>
            <p>Music taught me how to communicate them.</p>
            <p>Aviation taught me how complex systems work.</p>
            <p>These experiences shaped the way I design technology today.</p>
          </div>

          <Link
            href="/my-journey"
            className="group mt-10 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-lavender-600"
          >
            Read My Journey
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
