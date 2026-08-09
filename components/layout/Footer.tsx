import Container from "@/components/layout/Container";

// TODO: replace with real profile URLs
const footerLinks = [
  { label: "GitHub", href: "https://github.com/maygr09" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mayragr9/" },
  { label: "Email", href: "mailto:cnm.mayragomez@gmail.com" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-foreground/10 bg-background py-16 md:py-20"
    >
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="font-headline text-3xl text-lavender-600 md:text-5xl">
            Let&apos;s build something meaningful.
          </p>

          <p className="mt-10 text-sm leading-7 text-muted">
            Whether you&apos;re interested in engineering, data, aviation or
            interdisciplinary projects, I&apos;d love to hear from you.
          </p>

          <nav aria-label="Social" className="mt-8">
            <ul className="flex items-center justify-center gap-8 text-sm font-medium text-foreground">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="relative pb-1 transition-colors duration-200 hover:text-lavender-600 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-lavender-600 after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-10 text-sm text-muted">Currently based in Mexico.</p>

          <p className="mt-2 text-sm text-muted">
            © {new Date().getFullYear()} Mayra R
          </p>
        </div>
      </Container>
    </footer>
  );
}
