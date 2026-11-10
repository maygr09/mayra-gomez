"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import ArchiveCard from "@/components/artist/ArchiveCard";
import { ARTIST_FILTER_EVENT } from "@/components/artist/DimensionIndex";
import {
  archiveProjects,
  categoryLabels,
  categoryOrder,
  type ArtistCategory,
} from "@/lib/artist";

const chipClassName =
  "rounded-full border px-4 py-1.5 text-sm transition-colors duration-200";

export default function ArtistArchive() {
  // null = show everything
  const [active, setActive] = useState<ArtistCategory[] | null>(null);

  useEffect(() => {
    const handleFilter = (event: Event) => {
      setActive((event as CustomEvent<ArtistCategory[]>).detail);
    };

    window.addEventListener(ARTIST_FILTER_EVENT, handleFilter);
    return () => window.removeEventListener(ARTIST_FILTER_EVENT, handleFilter);
  }, []);

  const visible = active
    ? archiveProjects.filter((project) => active.includes(project.category))
    : archiveProjects;

  const isChipActive = (category: ArtistCategory) =>
    active?.length === 1 && active[0] === category;

  return (
    <section
      id="archive"
      aria-labelledby="archive-heading"
      className="border-t border-foreground/10 py-24 md:py-32"
    >
      <Container>
        <h2
          id="archive-heading"
          className="font-headline text-3xl text-foreground md:text-4xl"
        >
          The Archive
        </h2>

        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
          Performances, rehearsals, writing and craft, newest first.
        </p>

        <div
          role="group"
          aria-label="Filter by category"
          className="mt-10 flex flex-wrap gap-2"
        >
          <button
            type="button"
            aria-pressed={active === null}
            onClick={() => setActive(null)}
            className={`${chipClassName} ${
              active === null
                ? "border-lavender-600 bg-lavender-50 text-lavender-600"
                : "border-foreground/15 text-muted hover:border-lavender-400"
            }`}
          >
            All
          </button>

          {categoryOrder.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={isChipActive(category)}
              onClick={() => setActive([category])}
              className={`${chipClassName} ${
                isChipActive(category)
                  ? "border-lavender-600 bg-lavender-50 text-lavender-600"
                  : "border-foreground/15 text-muted hover:border-lavender-400"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="sr-only">
          {visible.length} {visible.length === 1 ? "project" : "projects"} shown
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {visible.map((project) => (
            <li key={project.slug}>
              <ArchiveCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
