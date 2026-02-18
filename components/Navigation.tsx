"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features",   href: "#features" },
  { label: "Pricing",    href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Network",    href: "#investors" },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 select-none" aria-label="Wone home">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center"
        style={{ background: "#2563EB" }}
      >
        <span className="text-white font-bold text-sm leading-none">W</span>
      </div>
      <span className="text-[17px] font-semibold tracking-tight text-white">Wone</span>
    </a>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids  = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-sm rounded-md transition-colors duration-150 ${
                      isActive ? "text-white bg-white/8" : "text-[#71717a] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#waitlist"
                className="text-sm text-[#71717a] hover:text-white transition-colors duration-150"
              >
                Log In
              </a>
              <a
                href="#waitlist"
                className="text-sm font-medium text-white px-4 py-2 rounded-lg transition-colors duration-150"
                style={{ background: "#2563EB" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#2563EB")}
              >
                Get Early Access
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[#71717a] hover:text-white hover:bg-white/8 transition-colors duration-150"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="bd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
              style={{ background: "#0a0a0a", borderLeft: "1px solid #1a1a1a" }}
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-[#1a1a1a]">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#71717a] hover:text-white hover:bg-white/8 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex-1 flex flex-col gap-0.5 px-3 pt-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm text-[#71717a] hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="px-4 pb-8">
                <a
                  href="#waitlist"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center text-sm font-medium text-white px-4 py-3 rounded-xl"
                  style={{ background: "#2563EB" }}
                >
                  Get Early Access
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
