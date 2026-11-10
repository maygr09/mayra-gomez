import Image from "next/image";
import Container from "@/components/layout/Container";

export default function JourneyPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-[auto_1fr] md:gap-x-[2cm] md:gap-y-0">
          <div className="relative mx-auto aspect-[1161/1355] w-[330px] md:mx-0 md:w-[390px]">
            <Image
              src="/images/my-journey-lavender.png"
              alt="Portrait of Mayra Gomez"
              fill
              sizes="(min-width: 768px) 390px, 330px"
              className="object-contain"
              priority
            />
          </div>

          <div className="max-w-2xl">
            <h2
              id="about-heading"
              className="font-headline text-3xl text-foreground md:text-4xl"
            >
              About me
            </h2>

            <div className="mt-8 space-y-2 text-lg leading-8 text-muted">
              <p>Engineering taught me how to solve problems.</p>
              <p>Music taught me how to communicate them.</p>
              <p>Aviation taught me how complex systems work.</p>
              <p>These experiences shaped the way I design technology today.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
