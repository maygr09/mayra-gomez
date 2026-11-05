type VideoEmbedProps = {
  title: string;
  embedUrl?: string;
};

export default function VideoEmbed({ title, embedUrl }: VideoEmbedProps) {
  if (!embedUrl) {
    return (
      <div
        aria-hidden="true"
        className="flex aspect-video w-full items-center justify-center border border-foreground/10 bg-lavender-50/40"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          Video placeholder
        </span>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full border border-foreground/10">
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
