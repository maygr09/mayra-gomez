import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="flex min-h-screen items-center"
    >
      <Container className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-lavender-600">
          Engineering • Data • Aviation • Arts
        </p>

        <hgroup className="mt-8">
          <h1
            id="hero-heading"
            className="font-display text-7xl font-normal tracking-normal text-foreground md:text-8xl"
          >
            Mayra Gómez
          </h1>

          <p className="font-headline mx-auto mt-12 max-w-lg text-balance text-xl italic leading-relaxed text-foreground md:text-2xl">
            Designing practical systems that simplify complexity.
          </p>
        </hgroup>

        <p className="mx-auto mt-10 max-w-2xl text-balance text-lg font-normal leading-8 text-muted">
          I enjoy developing interdisciplinary projects where engineering,
          data, aviation and the arts come together to solve real-world
          problems.
        </p>

        <a
          href="#projects"
          className="group mt-10 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-lavender-600"
        >
          Explore my work
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </Container>
    </section>
  );
}