import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-base text-gray-600">
        Sorry, we could not find the page you were looking for.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        Go Home
      </Link>
    </main>
  );
}
