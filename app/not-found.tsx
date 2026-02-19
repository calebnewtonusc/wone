import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Wone",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <Link href="/" className="inline-flex items-center gap-2.5 mb-12" aria-label="Wone home">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#312e81" }}>
          <span className="text-white font-bold text-lg leading-none">W</span>
        </div>
        <span className="text-xl font-semibold tracking-tight text-gray-900">Wone</span>
      </Link>

      {/* 404 */}
      <p className="text-[120px] font-black leading-none text-gray-100 select-none mb-2" aria-hidden="true">
        404
      </p>

      <h1 className="text-2xl font-bold text-gray-900 mb-3">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-base text-gray-500 max-w-sm leading-relaxed mb-10">
        The link you followed may be broken or the page may have been removed. Head back home and we&apos;ll get you on the right track.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-colors"
          style={{ background: "#4f46e5" }}
        >
          Back to home
        </Link>
        <Link
          href="/#waitlist"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 px-6 py-3 rounded-xl transition-colors"
        >
          Apply for early access
        </Link>
      </div>

      <p className="mt-12 text-xs text-gray-400">
        Need help?{" "}
        <a href="mailto:hello@woneportal.com" style={{ color: "#4f46e5" }}>
          hello@woneportal.com
        </a>
      </p>
    </main>
  );
}
