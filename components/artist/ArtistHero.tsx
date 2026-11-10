import Container from "@/components/layout/Container";
import DimensionIndex from "@/components/artist/DimensionIndex";

export default function ArtistHero() {
  return (
    <header className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-headline text-5xl text-foreground md:text-7xl">
            Artist
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted">
            Music, dance, theatre, writing and textile arts.
          </p>

          <DimensionIndex />
        </div>
      </Container>
    </header>
  );
}
