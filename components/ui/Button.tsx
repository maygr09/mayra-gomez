type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-violet-300 px-6 py-3 text-white transition hover:bg-violet-400">
      {children}
    </button>
  );
}
