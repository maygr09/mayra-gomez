import CreatorPhotoFrame from "@/components/creator/CreatorPhotoFrame";
import type { ArtistMedia } from "@/lib/artist";

type ProjectMediaProps = {
  media: ArtistMedia[];
};

const placeholderClassName =
  "flex w-full items-center justify-center border border-foreground/10 bg-lavender-50/40 p-4 text-center";

const placeholderTextClassName =
  "text-xs uppercase tracking-[0.2em] text-muted";

function VideoItem({ item }: { item: Extract<ArtistMedia, { type: "video" }> }) {
  if (!item.src) {
    return (
      <div aria-hidden="true" className={`aspect-video ${placeholderClassName}`}>
        <span className={placeholderTextClassName}>Video placeholder</span>
      </div>
    );
  }

  return (
    <video
      src={item.src}
      poster={item.poster}
      controls
      playsInline
      preload="none"
      aria-label={item.title}
      className="aspect-video w-full bg-black"
    />
  );
}

function YouTubeItem({
  item,
}: {
  item: Extract<ArtistMedia, { type: "youtube" }>;
}) {
  if (!item.embedUrl) {
    return (
      <div aria-hidden="true" className={`aspect-video ${placeholderClassName}`}>
        <span className={placeholderTextClassName}>YouTube placeholder</span>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full border border-foreground/10">
      <iframe
        src={item.embedUrl}
        title={item.title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

function AudioItem({ item }: { item: Extract<ArtistMedia, { type: "audio" }> }) {
  return (
    <div className="border border-foreground/10 p-5">
      <p className="text-sm font-medium text-foreground">{item.title}</p>

      {item.src ? (
        <audio
          src={item.src}
          controls
          preload="none"
          className="mt-3 w-full"
        />
      ) : (
        <p className={`mt-3 ${placeholderTextClassName}`}>Audio placeholder</p>
      )}
    </div>
  );
}

export default function ProjectMedia({ media }: ProjectMediaProps) {
  const youtubes = media.filter((m) => m.type === "youtube");
  const videos = media.filter((m) => m.type === "video");
  const images = media.filter((m) => m.type === "image");
  const audios = media.filter((m) => m.type === "audio");

  return (
    <div className="space-y-12">
      {youtubes.length > 0 && (
        <ul className="space-y-6">
          {youtubes.map((item) => (
            <li key={item.title}>
              <YouTubeItem item={item} />
            </li>
          ))}
        </ul>
      )}

      {videos.length > 0 && (
        <ul className="space-y-6">
          {videos.map((item) => (
            <li key={item.title}>
              <VideoItem item={item} />
            </li>
          ))}
        </ul>
      )}

      {images.length > 0 && (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {images.map((item) => (
            <li key={item.alt}>
              <figure>
                <CreatorPhotoFrame
                  photo={item}
                  className="aspect-[4/3]"
                  sizes="(min-width: 640px) 45vw, 90vw"
                />
                {item.caption && (
                  <figcaption className="mt-2 text-sm text-muted">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      )}

      {audios.length > 0 && (
        <ul className="space-y-4">
          {audios.map((item) => (
            <li key={item.title}>
              <AudioItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
