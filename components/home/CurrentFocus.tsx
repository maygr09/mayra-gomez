import Container from "@/components/layout/Container";

const learning = ["Google Data Analytics", "Pandas", "Python"];

export default function CurrentFocus() {
  return (
    <section
      id="current-focus"
      aria-labelledby="current-focus-heading"
      className="bg-background py-24 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <h2
            id="current-focus-heading"
            className="font-headline text-3xl text-foreground md:text-4xl"
          >
            Current Focus
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted">
            What I&apos;m building and learning right now.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
              Currently Building
            </p>

            <h3 className="mt-4 text-xl font-medium text-foreground">
              Financial System
            </h3>

            <p className="mt-3 text-base leading-7 text-muted">
              Built today in Google Sheets, designed to grow into
              dashboards, Excel, Power BI, and deeper data analysis.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
              Currently Learning
            </p>

            <ul className="mt-4 space-y-3">
              {learning.map((item) => (
                <li key={item} className="text-xl font-normal text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
              Next Goal
            </p>

            <p className="font-headline mt-4 text-xl font-normal leading-relaxed text-foreground">
              Tableau
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
