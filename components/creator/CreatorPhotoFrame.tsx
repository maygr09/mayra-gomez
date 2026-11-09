import Image from "next/image";
import type { CreatorPhoto } from "@/lib/creator";

type CreatorPhotoFrameProps = {
  photo: CreatorPhoto;
  className?: string;
  priority?: boolean;
  // Organic, wavy right edge (needs <CreatorWaveDefs /> on the page).
  wavy?: boolean;
};

// Renders a real photo when `src` exists, otherwise a quiet placeholder.
// Pass the aspect ratio and sizing through `className`.
export default function CreatorPhotoFrame({
  photo,
  className = "aspect-[4/5]",
  priority = false,
  wavy = false,
}: CreatorPhotoFrameProps) {
  const { src, alt } = photo;

  return (
    <div
      style={wavy ? { clipPath: "url(#creator-wave-right)" } : undefined}
      className={`relative w-full overflow-hidden bg-lavender-100/60 ${
        wavy ? "" : "border border-foreground/10"
      } ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 25vw, 45vw"
          className="object-cover"
          priority={priority}
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center p-4 text-center"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            Photo placeholder
          </span>
        </div>
      )}
    </div>
  );
}
