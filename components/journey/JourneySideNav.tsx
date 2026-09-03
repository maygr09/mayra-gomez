"use client";

import { useEffect, useState } from "react";
import { timelineEntries } from "@/lib/journey";

export default function JourneySideNav() {
  const [activeYear, setActiveYear] = useState(timelineEntries[0]?.year);

  useEffect(() => {
    const sections = timelineEntries
      .map((entry) => document.getElementById(`journey-${entry.year}`))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveYear(visible[0].target.id.replace("journey-", ""));
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Timeline years"
      className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ul className="space-y-4 border-l border-foreground/10 pl-4">
        {timelineEntries.map((entry) => (
          <li key={entry.year}>
            <a
              href={`#journey-${entry.year}`}
              className={`text-sm transition-colors duration-200 ${
                activeYear === entry.year
                  ? "font-medium text-lavender-600"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {entry.year}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
