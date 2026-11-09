import type { CreatorStat } from "@/lib/creator";

type StatGridProps = {
  stats: CreatorStat[];
  size?: "lg" | "md";
};

export default function StatGrid({ stats, size = "lg" }: StatGridProps) {
  const valueClassName =
    size === "lg" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl";

  return (
    <dl
      className={`grid grid-cols-2 gap-x-8 gap-y-10 ${
        stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
      }`}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
            {stat.label}
          </dt>
          <dd className={`font-headline mt-3 text-foreground ${valueClassName}`}>
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
