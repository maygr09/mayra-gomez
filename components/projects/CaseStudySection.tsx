import type { ReactNode } from "react";

type CaseStudySectionProps = {
  title: string;
  children: ReactNode;
};

export default function CaseStudySection({
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="border-t border-foreground/10 py-12 md:py-16">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
          {title}
        </h2>

        <div className="max-w-2xl text-base leading-7 text-muted">
          {children}
        </div>
      </div>
    </section>
  );
}
