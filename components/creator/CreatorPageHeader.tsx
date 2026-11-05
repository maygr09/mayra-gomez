import Container from "@/components/layout/Container";

type CreatorPageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function CreatorPageHeader({
  title,
  subtitle,
}: CreatorPageHeaderProps) {
  return (
    <header className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-headline text-4xl text-foreground md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">{subtitle}</p>
        </div>
      </Container>
    </header>
  );
}
