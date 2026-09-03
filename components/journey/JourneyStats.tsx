import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { journeyStats } from "@/lib/journey";

export default function JourneyStats() {
  return (
    <section
      aria-labelledby="journey-stats-heading"
      className="border-t border-foreground/10 py-24 md:py-32"
    >
      <Container>
        <h2 id="journey-stats-heading" className="sr-only">
          Stats
        </h2>

        <ScrollReveal>
          <dl className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
            {journeyStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
                  {stat.label}
                </dt>
                <dd className="font-headline mt-3 text-4xl text-foreground md:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </Container>
    </section>
  );
}
