import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CurrentFocus from "@/components/home/CurrentFocus";
import JourneyPreview from "@/components/home/JourneyPreview";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <CurrentFocus />
        <JourneyPreview />
      </main>
      <Footer />
    </>
  );
}
