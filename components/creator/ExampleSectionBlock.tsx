import VideoCarousel from "@/components/creator/VideoCarousel";
import VideoLoop from "@/components/creator/VideoLoop";
import type { ExampleSection } from "@/lib/creator";

type ExampleSectionBlockProps = {
  section: ExampleSection;
};

export default function ExampleSectionBlock({
  section,
}: ExampleSectionBlockProps) {
  const { industry, description, videos } = section;

  return (
    <div className="border-t border-foreground/10 py-12 first:border-t-0 first:pt-0">
      <h3 className="font-headline text-2xl text-foreground md:text-3xl">
        {industry}
      </h3>
      <p className="mt-2 max-w-xl text-base leading-7 text-muted">
        {description}
      </p>

      <div className="mt-8">
        <VideoCarousel showControls={videos.length > 4}>
          {videos.map((video) => (
            <li key={video.title}>
              <VideoLoop video={video} />
            </li>
          ))}
        </VideoCarousel>
      </div>
    </div>
  );
}
