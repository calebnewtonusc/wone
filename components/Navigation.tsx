"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Investors", href: "#investors" },
  { label: "Team", href: "#team" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/80 backdrop-blur-xl border-b border-[#1f2937]/80 shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] opacity-20 group-hover:opacity-30 transition-opacity duration-200" />
                <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-[#f59e0b] to-[#d97706] rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Wone
                </span>
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-[#9ca3af] hover:text-[#f9fafb] transition-colors duration-200 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#waitlist"
                className="relative inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-[#030712] rounded-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transition-all duration-300 group-hover:from-[#fbbf24] group-hover:to-[#f59e0b]" />
                <span className="relative z-10">Join Waitlist</span>
                <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#9ca3af] hover:text-[#f9fafb] hover:bg-white/5 transition-all duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#111827] border-l border-[#1f2937] shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[#1f2937]">
                <span className="text-lg font-bold bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Wone
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-[#9ca3af] hover:text-[#f9fafb] hover:bg-white/5 transition-all duration-200"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex flex-col gap-1 px-4 pt-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}
                    className="flex items-center px-4 py-3 text-base font-medium text-[#9ca3af] hover:text-[#f9fafb] hover:bg-white/5 rounded-xl transition-all duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Drawer CTA */}
              <div className="px-6 pb-8">
                <motion.a
                  href="#waitlist"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.25 }}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-[#030712] bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-xl hover:from-[#fbbf24] hover:to-[#f59e0b] transition-all duration-300 shadow-lg shadow-amber-900/30"
                >
                  Join Waitlist
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
