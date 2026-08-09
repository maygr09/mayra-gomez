import type { Metadata } from "next";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import { crewExpenseManagementCaseStudy } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Crew Expense Management — Mayra Gomez",
  description: crewExpenseManagementCaseStudy.summary,
};

export default function CrewExpenseManagementPage() {
  return <CaseStudyLayout caseStudy={crewExpenseManagementCaseStudy} />;
}