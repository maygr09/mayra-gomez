import Container from "@/components/layout/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="bg-background py-24 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <h2
            id="featured-projects-heading"
            className="font-headline text-3xl text-foreground md:text-4xl"
          >
            Featured Work
          </h2>

          <p className="mt-4 text-lg leading-8 text-muted">
            Every project started with a real problem and became an
            opportunity to organize complexity.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {projects.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
