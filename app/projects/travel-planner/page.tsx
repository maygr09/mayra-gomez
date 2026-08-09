import type { Metadata } from "next";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import { travelPlannerCaseStudy } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Travel Planner — Mayra Gomez",
  description: travelPlannerCaseStudy.summary,
};

export default function TravelPlannerPage() {
  return <CaseStudyLayout caseStudy={travelPlannerCaseStudy} />;
}