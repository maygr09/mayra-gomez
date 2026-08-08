import Link from "next/link";
import Container from "@/components/layout/Container";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Journal", href: "/journal" },
  { label: "Data Lab", href: "/data-lab" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 py-5">
          <Link
            href="/"
            className="font-display text-xl text-foreground transition-colors duration-200 hover:text-lavender-600"
          >
            M.
          </Link>

          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-normal text-foreground">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="relative pb-1 transition-colors duration-200 hover:text-lavender-600 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-lavender-600 after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
