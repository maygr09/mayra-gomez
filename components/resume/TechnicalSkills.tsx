import CaseStudySection from "@/components/projects/CaseStudySection";
import TechGroupList from "@/components/projects/TechGroupList";
import { technicalSkills } from "@/lib/resume";

export default function TechnicalSkills() {
  return (
    <CaseStudySection title="Technical Skills">
      <TechGroupList groups={technicalSkills} />
    </CaseStudySection>
  );
}
