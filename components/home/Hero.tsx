import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <Container className="text-center">
        <h1 className="text-6xl font-bold">
          Mayra Gomez
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Engineering • Data • Aviation • Arts
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Button>View Projects</Button>
          <Button>My Journey</Button>
        </div>
      </Container>
    </section>
  );
}