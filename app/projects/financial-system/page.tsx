import type { Metadata } from "next";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import { financialSystemCaseStudy } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Financial System — Mayra Gomez",
  description: financialSystemCaseStudy.summary,
};

export default function FinancialSystemPage() {
  return <CaseStudyLayout caseStudy={financialSystemCaseStudy} />;
}