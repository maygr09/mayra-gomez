import CaseStudySection from "@/components/projects/CaseStudySection";
import TimelineEntry from "@/components/resume/TimelineEntry";
import { certifications } from "@/lib/resume";

export default function Certifications() {
  return (
    <CaseStudySection title="Certifications">
      <div>
        {certifications.map((item) => (
          <TimelineEntry
            key={item.title}
            title={item.title}
            subtitle={item.institution}
            meta={item.dates}
          />
        ))}
      </div>
    </CaseStudySection>
  );
}
