import type { Metadata } from "next";
import ArtistHero from "@/components/artist/ArtistHero";
import ArtistStatement from "@/components/artist/ArtistStatement";
import SelectedWorks from "@/components/artist/SelectedWorks";
import ArtistArchive from "@/components/artist/ArtistArchive";
import ArtistBackground from "@/components/artist/ArtistBackground";

export const metadata: Metadata = {
  title: "Artist — Mayra Gomez",
  description: "Music, dance, theatre, writing and textile arts.",
};

export default function ArtistPage() {
  return (
    <article>
      <ArtistHero />
      <ArtistStatement />
      <SelectedWorks />
      <ArtistArchive />
      <ArtistBackground />
    </article>
  );
}
