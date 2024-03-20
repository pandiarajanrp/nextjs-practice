"use client";
import Link from "next/link";
export default function ErrorBoundary({ error, reset }) {
  return (
    <>
      <h2>
        Error Page. {error.message} Please go to <Link href="/">home</Link> page
        <button onClick={reset}>Reset Error</button>
      </h2>
    </>
  );
}
