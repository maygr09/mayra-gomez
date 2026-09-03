import ScrollReveal from "@/components/ui/ScrollReveal";
import TimelineEntryCard from "@/components/journey/TimelineEntryCard";
import { timelineEntries } from "@/lib/journey";

export default function JourneyTimeline() {
  return (
    <ol className="relative mt-16 flex flex-col gap-16 md:mt-24 md:gap-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-4 w-px -translate-x-1/2 bg-foreground/10 md:left-1/2"
      />

      {timelineEntries.map((entry) => (
        <li
          key={entry.year}
          id={`journey-${entry.year}`}
          className="relative pl-12 md:w-1/2 md:pl-0 md:odd:pr-10 md:even:ml-auto md:even:pl-10"
        >
          <span
            aria-hidden="true"
            className="absolute left-4 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-lavender-600 md:left-1/2"
          />

          <ScrollReveal>
            <TimelineEntryCard entry={entry} />
          </ScrollReveal>
        </li>
      ))}
    </ol>
  );
}
