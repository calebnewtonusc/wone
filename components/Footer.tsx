"use client";

import Link from "next/link";

const navColumns = [
  {
    heading: "Platform",
    links: [
      { label: "Features",     href: "#features" },
      { label: "Pricing",      href: "#pricing" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Investor Network", href: "#investors" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",   href: "#" },
      { label: "Grants",  href: "#" },
      { label: "Blog",    href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy",    href: "#" },
  { label: "Terms of Service",  href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[#1a1a1a]" style={{ background: "#000" }}>
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4" aria-label="Wone home">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-blue-600">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-[17px] font-semibold tracking-tight text-white">Wone</span>
            </Link>
            <p className="text-sm text-[#52525b] max-w-xs leading-relaxed">
              The unified platform for SoCal startup acceleration. Connect with investors, advisors, and founders who move fast.
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#52525b]">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-[#71717a] hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#111] pt-8 sm:flex-row">
          <p className="text-xs text-[#333]">&copy; 2026 Wone, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-[#333] hover:text-[#71717a] transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
