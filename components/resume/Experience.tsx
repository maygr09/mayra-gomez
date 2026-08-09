import CaseStudySection from "@/components/projects/CaseStudySection";
import TimelineEntry from "@/components/resume/TimelineEntry";
import { experience } from "@/lib/resume";

export default function Experience() {
  return (
    <CaseStudySection title="Experience">
      <div>
        {experience.map((item) => (
          <TimelineEntry
            key={`${item.company}-${item.dates}`}
            title={item.title}
            subtitle={item.company}
            meta={`${item.location} · ${item.dates}`}
            bullets={item.bullets}
          />
        ))}
      </div>
    </CaseStudySection>
  );
}
