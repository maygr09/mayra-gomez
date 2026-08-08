type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full border border-lavender-200 bg-lavender-50 px-6 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-lavender-100">
      {children}
    </button>
  );
}
