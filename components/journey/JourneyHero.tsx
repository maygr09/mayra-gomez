import Container from "@/components/layout/Container";

export default function JourneyHero() {
  return (
    <header className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-headline text-4xl text-foreground md:text-6xl">
            My Journey
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted">
            A timeline of the experiences, projects, and decisions that have
            shaped my path as a software engineer and lifelong learner.
          </p>
        </div>
      </Container>
    </header>
  );
}
