import CaseStudySection from "@/components/projects/CaseStudySection";
import TimelineEntry from "@/components/resume/TimelineEntry";
import { education } from "@/lib/resume";

export default function Education() {
  return (
    <CaseStudySection title="Education">
      <div>
        {education.map((item) => (
          <TimelineEntry
            key={item.degree}
            title={item.degree}
            subtitle={item.institution}
            meta={item.dates}
            note={item.note}
          />
        ))}
      </div>
    </CaseStudySection>
  );
}
