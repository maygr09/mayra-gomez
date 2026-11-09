"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

type VideoCarouselProps = {
  children: ReactNode;
  // Arrow buttons only appear once there are more clips than fit on screen.
  showControls: boolean;
};

export default function VideoCarousel({
  children,
  showControls,
}: VideoCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  const buttonClassName =
    "rounded-full border border-foreground/15 px-3 py-1 text-sm text-foreground transition-colors duration-200 hover:border-lavender-400 hover:text-lavender-600";

  return (
    <div>
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:gap-6 [&>li]:w-44 [&>li]:shrink-0 [&>li]:snap-start md:[&>li]:w-56"
      >
        {children}
      </ul>

      {showControls && (
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous videos"
            className={buttonClassName}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next videos"
            className={buttonClassName}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
