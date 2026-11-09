"use client";

import { useEffect, useRef } from "react";
import ArrowLink from "@/components/ui/ArrowLink";
import type { VideoExample } from "@/lib/creator";

type VideoLoopProps = {
  video: VideoExample;
};

// Phone-format (9:16), muted, looping clip. Plays only while on screen so
// several videos on one page don't compete for bandwidth and CPU.
export default function VideoLoop({ video }: VideoLoopProps) {
  const { title, src, poster, href, platform } = video;
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.play().catch(() => {});
        } else {
          node.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <figure>
      <div className="relative rounded-[2rem] bg-black p-1.5">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-3 z-10 h-4 w-1/3 -translate-x-1/2 rounded-full bg-black"
        />
        <div className="aspect-[9/16] w-full overflow-hidden rounded-[1.625rem] bg-lavender-50">
        {src ? (
          <video
            ref={ref}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center p-4 text-center"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Video 9:16
            </span>
          </div>
        )}
        </div>
      </div>

      {href && (
        <figcaption className="mt-3">
          <ArrowLink href={href} external>
            Watch on {platform ?? "platform"}
          </ArrowLink>
        </figcaption>
      )}
    </figure>
  );
}
