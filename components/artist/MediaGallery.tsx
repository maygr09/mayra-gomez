"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ArtistMedia } from "@/lib/artist";

type MediaGalleryProps = {
  media: ArtistMedia[];
};

const labelOf = (item: ArtistMedia) =>
  item.type === "image" ? item.alt : item.title;

const tagOf = (item: ArtistMedia) => {
  if (item.type === "image") return "Photo";
  if (item.type === "audio") return "Audio";
  return "Video";
};

const tinyLabelClassName =
  "text-[0.65rem] uppercase tracking-[0.15em] text-muted";

const controlClassName =
  "rounded-full border border-foreground/15 px-3 py-1 text-sm text-foreground transition-colors duration-200 hover:border-lavender-400 hover:text-lavender-600";

function Thumb({ item }: { item: ArtistMedia }) {
  if (item.type === "image" && item.src) {
    return (
      <Image
        src={item.src}
        alt=""
        fill
        sizes="(min-width: 768px) 15vw, 30vw"
        className="object-cover"
      />
    );
  }

  if (item.type === "video" && item.poster) {
    return (
      <>
        <Image
          src={item.poster}
          alt=""
          fill
          sizes="(min-width: 768px) 15vw, 30vw"
          className="object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center text-lg text-white"
        >
          ▶
        </span>
      </>
    );
  }

  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-1">
      <span aria-hidden="true" className="text-lg text-lavender-600">
        {item.type === "image" ? "◻" : item.type === "audio" ? "♪" : "▶"}
      </span>
      <span className={tinyLabelClassName}>{tagOf(item)}</span>
    </span>
  );
}

function Viewer({ item }: { item: ArtistMedia }) {
  if (item.type === "image") {
    return item.src ? (
      <div className="relative h-[70vh] w-full">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>
    ) : (
      <div className="flex h-[50vh] w-full items-center justify-center border border-foreground/10 bg-lavender-50/40">
        <span className={tinyLabelClassName}>Photo placeholder</span>
      </div>
    );
  }

  if (item.type === "video") {
    return item.src ? (
      <video
        src={item.src}
        poster={item.poster}
        controls
        autoPlay
        playsInline
        aria-label={item.title}
        className="max-h-[70vh] w-full bg-black"
      />
    ) : (
      <div className="flex aspect-video w-full items-center justify-center border border-foreground/10 bg-lavender-50/40">
        <span className={tinyLabelClassName}>Video placeholder</span>
      </div>
    );
  }

  if (item.type === "youtube") {
    return item.embedUrl ? (
      <div className="aspect-video w-full">
        <iframe
          src={item.embedUrl}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    ) : (
      <div className="flex aspect-video w-full items-center justify-center border border-foreground/10 bg-lavender-50/40">
        <span className={tinyLabelClassName}>YouTube placeholder</span>
      </div>
    );
  }

  return (
    <div className="border border-foreground/10 p-8">
      <p className="text-foreground">{item.title}</p>
      {item.src ? (
        <audio src={item.src} controls autoPlay className="mt-4 w-full" />
      ) : (
        <p className={`mt-4 ${tinyLabelClassName}`}>Audio placeholder</p>
      )}
    </div>
  );
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Keep the native <dialog> in sync with state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (openIndex !== null && !dialog.open) dialog.showModal();
    if (openIndex === null && dialog.open) dialog.close();
  }, [openIndex]);

  const close = () => setOpenIndex(null);

  const step = (direction: 1 | -1) =>
    setOpenIndex((index) =>
      index === null ? null : (index + direction + media.length) % media.length,
    );

  const current = openIndex !== null ? media[openIndex] : null;

  return (
    <>
      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 md:gap-3">
        {media.map((item, index) => (
          <li key={`${item.type}-${labelOf(item)}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open ${tagOf(item).toLowerCase()}: ${labelOf(item)}`}
              className="relative block aspect-square w-full overflow-hidden border border-foreground/10 bg-lavender-50/40 transition-colors duration-200 hover:border-lavender-400"
            >
              <Thumb item={item} />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={close}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        aria-label="Media viewer"
        className="m-auto w-[95vw] max-w-5xl bg-background p-4 text-foreground backdrop:bg-black/70 md:p-6"
      >
        {current && openIndex !== null && (
          <div>
            <div className="flex items-center justify-between gap-4 pb-4">
              <p className="min-w-0 truncate text-sm text-muted">
                {labelOf(current)} · {openIndex + 1} / {media.length}
              </p>
              <button type="button" onClick={close} className={controlClassName}>
                Close
              </button>
            </div>

            <Viewer key={openIndex} item={current} />

            {media.length > 1 && (
              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous"
                  className={controlClassName}
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next"
                  className={controlClassName}
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
