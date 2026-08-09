import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
};

const buttonClassName =
  "rounded-full border border-lavender-200 bg-lavender-50 px-6 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-lavender-100";

export default function Button({ children, href }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return <button className={buttonClassName}>{children}</button>;
}
