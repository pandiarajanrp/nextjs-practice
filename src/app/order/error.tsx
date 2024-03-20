"use client";
import Link from "next/link";
export default function ErrorBoundary() {
  return (
    <>
      <h2>
        Error Page. Please go to <Link href="/">home</Link> page
      </h2>
    </>
  );
}
