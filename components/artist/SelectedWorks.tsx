import Container from "@/components/layout/Container";
import CreatorPhotoFrame from "@/components/creator/CreatorPhotoFrame";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ArrowLink from "@/components/ui/ArrowLink";
import {
  categoryLabels,
  formatYear,
  selectedWorks,
} from "@/lib/artist";

export default function SelectedWorks() {
  return (
    <section
      id="selected-works"
      aria-labelledby="selected-works-heading"
      className="border-t border-foreground/10 py-24 md:py-32"
    >
      <Container>
        <h2
          id="selected-works-heading"
          className="font-headline text-3xl text-foreground md:text-4xl"
        >
          Selected Works
        </h2>

        <ol className="mt-16 space-y-24 md:space-y-32">
          {selectedWorks.map((work, index) => {
            const reversed = index % 2 === 1;

            return (
              <li key={work.slug}>
                <ScrollReveal>
                  <article className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
                    <div
                      className={
                        reversed
                          ? "md:col-span-7 md:col-start-6 md:row-start-1"
                          : "md:col-span-7"
                      }
                    >
                      <CreatorPhotoFrame
                        photo={work.cover}
                        className={reversed ? "aspect-[3/2]" : "aspect-[16/9]"}
                        sizes="(min-width: 768px) 58vw, 100vw"
                      />
                    </div>

                    <div
                      className={
                        reversed
                          ? "md:col-span-5 md:col-start-1 md:row-start-1"
                          : "md:col-span-4 md:col-start-9"
                      }
                    >
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
                        {String(index + 1).padStart(2, "0")} ·{" "}
                        {categoryLabels[work.category]} ·{" "}
                        {formatYear(work.date)}
                      </p>

                      <h3 className="font-headline mt-3 text-3xl text-foreground md:text-4xl">
                        {work.title}
                      </h3>

                      {work.role && (
                        <p className="font-headline mt-2 italic text-lavender-600">
                          {work.role}
                        </p>
                      )}

                      <p className="mt-4 text-base leading-7 text-muted">
                        {work.summary}
                      </p>

                      <div className="mt-6">
                        <ArrowLink href={`/artist/${work.slug}`}>
                          View project
                        </ArrowLink>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
