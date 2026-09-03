import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import LabCard from "@/components/lab/LabCard";
import { labProjects } from "@/lib/lab";

export const metadata: Metadata = {
  title: "Lab — Mayra Gomez",
  description: "Experiments, prototypes and things I'm currently building.",
};

export default function LabPage() {
  return (
    <article>
      <header className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-headline text-4xl text-foreground md:text-6xl">
              Lab
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              Experiments, prototypes and things I&apos;m currently building.
            </p>
          </div>
        </Container>
      </header>

      <Container>
        <ul className="grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 md:gap-8 md:pb-32">
          {labProjects.map((project) => (
            <li key={project.title}>
              <LabCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </article>
  );
}
