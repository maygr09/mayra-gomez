import CreatorNav from "@/components/creator/CreatorNav";

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CreatorNav />
      {children}
    </>
  );
}
