import Container from "@/components/common/Container";

export default function HomePage() {
  return (
    <Container>
      <section className="flex min-h-[calc(100vh-160px)] items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            AI Interview Preparation Platform
          </h1>

          <p className="mt-6 text-lg text-neutral-400">
            Production-ready React architecture is taking shape.
          </p>
        </div>
      </section>
    </Container>
  );
}