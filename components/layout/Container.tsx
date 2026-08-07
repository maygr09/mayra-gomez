import { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export default function Container({
  children,
  as: Component = "div",
  className = "",
}: ContainerProps) {
  return (
    <Component className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>
      {children}
    </Component>
  );
}
