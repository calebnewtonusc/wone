"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing",  href: "#pricing"  },
  { label: "Grants",   href: "#grants"   },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 select-none" aria-label="Wone home">
      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
        <span className="text-white font-bold text-base leading-none">W</span>
      </div>
      <span className="text-lg font-semibold tracking-tight text-gray-900">Wone</span>
    </a>
  );
}

export default function Navigation() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState("");
  const ticking = useRef(false);

  // Border on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => { setScrolled(window.scrollY > 20); ticking.current = false; });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Body scroll lock on mobile
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-40 transition-all duration-200 w-full"
        style={{
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const id       = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm rounded-lg transition-colors duration-150 ${
                      isActive
                        ? "text-blue-600 font-semibold bg-blue-50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://app.woneportal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150 px-3 py-2"
              >
                Log In
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 transition-colors duration-150"
              >
                Donate
              </a>
              <a
                href="#waitlist"
                className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-150"
              >
                Get Early Access
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="bd"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white border-l border-gray-200 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
                <Logo />
                <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Close">
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 flex flex-col gap-0.5 px-3 pt-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="px-4 pb-8 flex flex-col gap-2">
                <a
                  href="#waitlist"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl transition-colors"
                >
                  Get Early Access
                </a>
                <a
                  href="https://app.woneportal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 px-4 py-3 rounded-xl transition-colors"
                >
                  Log In
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
