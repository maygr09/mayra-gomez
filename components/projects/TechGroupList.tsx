import type { TechGroup } from "@/lib/case-studies";

type TechGroupListProps = {
  groups: TechGroup[];
};

export default function TechGroupList({ groups }: TechGroupListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.label}>
          <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-lavender-600">
            {group.label}
          </h4>

          <ul className="mt-3 space-y-2">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-lavender-600">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
