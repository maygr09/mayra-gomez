import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import CollabCard from "@/components/creator/CollabCard";
import CreatorPageHeader from "@/components/creator/CreatorPageHeader";
import { collaborations, creatorVisibility } from "@/lib/creator";

export const metadata: Metadata = {
  title: "Work — Creator — Mayra Gomez",
  description: "Brand collaborations with goals, deliverables and results.",
};

export default function CreatorWorkPage() {
  if (!creatorVisibility.work) notFound();

  return (
    <>
      <CreatorPageHeader
        title="Work"
        subtitle="Brand collaborations: goal, what I delivered, and the results."
      />

      <Container>
        <ul className="grid grid-cols-1 gap-6 pb-24 md:grid-cols-2 md:gap-8 md:pb-32">
          {collaborations.map((collab) => (
            <li key={collab.slug}>
              <CollabCard collab={collab} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
