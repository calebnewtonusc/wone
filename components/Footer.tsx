import Link from "next/link";

const navColumns = [
  {
    heading: "Platform",
    links: [
      { label: "Features",      href: "#features" },
      { label: "Pricing",       href: "#pricing" },
      { label: "How It Works",  href: "#how-it-works" },
      { label: "Investor Network", href: "#investors" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",    href: "#" },
      { label: "Grants",   href: "#" },
      { label: "Blog",     href: "#" },
      { label: "Contact",  href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-5" aria-label="Wone home">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-lg font-semibold text-white">Wone</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-6">
              The unified platform for SoCal startup acceleration. Connect with investors, advisors, and founders who move fast.
            </p>
            <a
              href="#waitlist"
              className="inline-block text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg transition-colors duration-150"
            >
              Apply for Early Access
            </a>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; 2026 Wone, Inc. All rights reserved.</p>
          <p className="text-xs text-gray-600">Built for SoCal founders.</p>
        </div>
      </div>
    </footer>
  );
}
