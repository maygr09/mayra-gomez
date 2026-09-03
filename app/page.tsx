import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CurrentFocus from "@/components/home/CurrentFocus";
import JourneyPreview from "@/components/home/JourneyPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <JourneyPreview />
      <FeaturedProjects />
      <CurrentFocus />
    </main>
  );
}
