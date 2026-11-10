import Image from "next/image";
import type { CreatorPhoto } from "@/lib/creator";

type CreatorPhotoFrameProps = {
  photo: CreatorPhoto;
  className?: string;
  priority?: boolean;
  // Organic, wavy right edge (needs <CreatorWaveDefs /> on the page).
  wavy?: boolean;
  // No frame, no background, no cropping: the image sits directly on the
  // page. Best for cutouts (transparent PNGs).
  bare?: boolean;
  sizes?: string;
};

// Renders a real photo when `src` exists, otherwise a quiet placeholder.
// Pass the aspect ratio and sizing through `className`.
export default function CreatorPhotoFrame({
  photo,
  className = "aspect-[4/5]",
  priority = false,
  wavy = false,
  bare = false,
  sizes = "(min-width: 768px) 25vw, 45vw",
}: CreatorPhotoFrameProps) {
  const { src, alt } = photo;

  const frameClassName = bare
    ? ""
    : `overflow-hidden bg-lavender-100/60 ${
        wavy ? "" : "border border-foreground/10"
      }`;

  return (
    <div
      style={wavy ? { clipPath: "url(#creator-wave-right)" } : undefined}
      className={`relative w-full ${frameClassName} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={bare ? "object-contain" : "object-cover"}
          priority={priority}
        />
      ) : (
        <div
          aria-hidden="true"
          className={`flex h-full w-full items-center justify-center p-4 text-center ${
            bare ? "border border-dashed border-foreground/15" : ""
          }`}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            Photo placeholder
          </span>
        </div>
      )}
    </div>
  );
}
