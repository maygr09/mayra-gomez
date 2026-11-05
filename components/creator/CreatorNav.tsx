"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";

const links = [
  { label: "Home", href: "/creator" },
  { label: "Work", href: "/creator/work" },
  { label: "Media Kit", href: "/creator/media-kit" },
  { label: "Contact", href: "/creator/contact" },
];

export default function CreatorNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/creator" ? pathname === href : pathname.startsWith(href);

  return (
    <div className="pt-24">
      <Container>
        <nav
          aria-label="Creator"
          className="flex flex-wrap items-center gap-x-8 gap-y-2 border-b border-foreground/10 pb-4 text-sm"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-600">
            Creator
          </span>

          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`transition-colors duration-200 hover:text-lavender-600 ${
                isActive(href) ? "font-medium text-lavender-600" : "text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}
