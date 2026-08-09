import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ResumeHero from "@/components/resume/ResumeHero";
import Experience from "@/components/resume/Experience";
import SelectedProjects from "@/components/resume/SelectedProjects";
import Education from "@/components/resume/Education";
import Certifications from "@/components/resume/Certifications";
import TechnicalSkills from "@/components/resume/TechnicalSkills";
import Languages from "@/components/resume/Languages";

export const metadata: Metadata = {
  title: "Resume — Mayra Gomez",
  description:
    "A concise overview of my education, experience and technical background.",
};

export default function ResumePage() {
  return (
    <article className="bg-background">
      <ResumeHero />

      <Container>
        <Experience />
        <SelectedProjects />
        <Education />
        <Certifications />
        <TechnicalSkills />
        <Languages />
      </Container>
    </article>
  );
}
