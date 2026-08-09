import CaseStudySection from "@/components/projects/CaseStudySection";
import { languages } from "@/lib/resume";

export default function Languages() {
  return (
    <CaseStudySection title="Languages">
      <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
        {languages.map(({ name, level }) => (
          <div key={name}>
            <dt className="text-base text-foreground">{name}</dt>
            <dd className="mt-1 text-sm text-lavender-600">{level}</dd>
          </div>
        ))}
      </dl>
    </CaseStudySection>
  );
}
