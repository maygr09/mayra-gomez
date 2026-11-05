import ArrowLink from "@/components/ui/ArrowLink";
import type { Collaboration } from "@/lib/creator";

type CollabCardProps = {
  collab: Collaboration;
};

export default function CollabCard({ collab }: CollabCardProps) {
  const { slug, brand, title, year, category, summary, results } = collab;

  return (
    <article className="flex h-full flex-col justify-between border border-foreground/10 p-8 transition-colors duration-300 hover:border-lavender-400 hover:bg-lavender-50/40">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
          {category} · {year}
        </p>

        <h3 className="mt-3 text-lg font-medium text-foreground md:text-xl">
          {brand}
        </h3>
        <p className="font-headline mt-1 italic text-lavender-600">{title}</p>

        <p className="mt-4 text-base leading-7 text-muted">{summary}</p>

        <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-foreground/10 pt-6">
          {results.map((result) => (
            <div key={result.label}>
              <dd className="font-headline text-2xl text-foreground">
                {result.value}
              </dd>
              <dt className="mt-1 text-xs text-muted">{result.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8">
        <ArrowLink href={`/creator/work/${slug}`}>View Case</ArrowLink>
      </div>
    </article>
  );
}
