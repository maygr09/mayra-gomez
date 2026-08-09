import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function ResumeHero() {
  return (
    <header className="py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-headline text-4xl text-foreground md:text-6xl">
            Resume
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted">
            A concise overview of my education, experience and technical
            background.
          </p>

          <div className="mt-10">
            <Button href="#">Download Resume (PDF)</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
