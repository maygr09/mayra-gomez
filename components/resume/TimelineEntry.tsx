type TimelineEntryProps = {
  title: string;
  subtitle: string;
  meta: string;
  note?: string;
  bullets?: string[];
};

export default function TimelineEntry({
  title,
  subtitle,
  meta,
  note,
  bullets,
}: TimelineEntryProps) {
  return (
    <div className="border-t border-foreground/10 py-6 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-base text-foreground">{title}</h3>
        <p className="shrink-0 text-sm text-muted">{meta}</p>
      </div>

      <p className="mt-1 text-sm text-lavender-600">{subtitle}</p>

      {note && <p className="mt-2 text-sm text-muted">{note}</p>}

      {bullets && bullets.length > 0 && (
        <ul className="mt-3 space-y-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-6">
              <span aria-hidden="true" className="text-lavender-600">
                —
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
