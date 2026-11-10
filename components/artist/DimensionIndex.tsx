"use client";

import { dimensions } from "@/lib/artist";

export const ARTIST_FILTER_EVENT = "artist-filter";

// The four dimensions. Clicking one jumps to the archive and filters it.
export default function DimensionIndex() {
  return (
    <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
      {dimensions.map(({ label, categories }) => (
        <li key={label}>
          <a
            href="#archive"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent(ARTIST_FILTER_EVENT, { detail: categories }),
              )
            }
            className="font-headline text-2xl text-foreground transition-colors duration-200 hover:text-lavender-600 md:text-4xl"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
