import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-white">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-neutral-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
      >
        Go Home
      </Link>
    </main>
  );
}