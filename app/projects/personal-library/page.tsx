import type { Metadata } from "next";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import { personalLibraryCaseStudy } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Personal Library — Mayra Gomez",
  description: personalLibraryCaseStudy.summary,
};

export default function PersonalLibraryPage() {
  return <CaseStudyLayout caseStudy={personalLibraryCaseStudy} />;
}
