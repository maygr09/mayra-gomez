import Link from "next/link";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

const className =
  "group inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors duration-200 hover:text-lavender-600";

const arrow = (
  <span
    aria-hidden="true"
    className="transition-transform duration-200 group-hover:translate-x-1"
  >
    →
  </span>
);

export default function ArrowLink({
  href,
  children,
  external = false,
}: ArrowLinkProps) {
  if (external) {
    return (
      <a href={href} className={className}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {arrow}
    </Link>
  );
}
