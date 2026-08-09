type BulletListProps = {
  items: string[];
  columns?: 1 | 2;
};

export default function BulletList({ items, columns = 1 }: BulletListProps) {
  const listClassName =
    columns === 2
      ? "grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
      : "space-y-3";

  return (
    <ul className={listClassName}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="text-lavender-600">
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
