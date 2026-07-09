'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Something went wrong</h1>
      <p className="mt-4 text-base text-gray-600">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
