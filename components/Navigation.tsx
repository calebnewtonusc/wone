"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Platform", href: "#features" },
  { label: "Network",  href: "#investors" },
  { label: "Strategy", href: "#how-it-works" },
  { label: "Team",     href: "#team" },
];

/* ----------------------------------------------------------------
   Diamond SVG Icon — 14×14 rotated square, amber fill
   ---------------------------------------------------------------- */
function DiamondIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="10"
        height="10"
        rx="1.5"
        transform="rotate(45 7 7)"
        fill="url(#diamond-gradient)"
      />
      <defs>
        <linearGradient
          id="diamond-gradient"
          x1="2"
          y1="2"
          x2="12"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#4D8EFF" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ----------------------------------------------------------------
   Logo
   ---------------------------------------------------------------- */
function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2.5 group select-none"
      aria-label="Wone home"
    >
      <div className="flex items-center justify-center w-7 h-7 rounded-[6px] bg-[#0f0f0f] border border-[#1f1f1f] group-hover:border-[#333333] transition-colors duration-200">
        <DiamondIcon />
      </div>
      <span className="text-[17px] font-semibold tracking-[-0.02em] leading-none">
        <span
          style={{
            background: "linear-gradient(135deg, #4D8EFF, #2563EB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          W
        </span>
        <span className="text-white">one</span>
      </span>
    </a>
  );
}

/* ----------------------------------------------------------------
   Desktop Nav Pill — center pill container with all links
   ---------------------------------------------------------------- */
function DesktopNav({
  activeSection,
}: {
  activeSection: string;
}) {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden md:flex items-center gap-0.5 px-1.5 py-1.5 rounded-full border border-[#1f1f1f] bg-[#0a0a0a]/80 backdrop-blur-md"
    >
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.href.replace("#", "");
        return (
          <a
            key={link.label}
            href={link.href}
            className={`
              relative px-3.5 py-1.5 text-[13px] font-medium rounded-full
              transition-all duration-200 select-none
              ${
                isActive
                  ? "text-white"
                  : "text-[#525252] hover:text-[#a1a1a1]"
              }
            `}
          >
            {isActive && (
              <motion.span
                layoutId="nav-pill-active"
                className="absolute inset-0 rounded-full bg-[#1a1a1a] border border-[#333333]"
                style={{ zIndex: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

/* ----------------------------------------------------------------
   Request Access Button
   ---------------------------------------------------------------- */
function RequestAccessButton({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href="#waitlist"
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        text-[13px] font-medium text-white
        px-4 py-2 rounded-[8px]
        transition-opacity duration-150
        hover:opacity-90 active:opacity-80
        select-none whitespace-nowrap
        ${className}
      `}
      style={{
        background: "linear-gradient(135deg, #4D8EFF, #2563EB)",
      }}
    >
      Request Access
    </a>
  );
}

/* ----------------------------------------------------------------
   Mobile Drawer
   ---------------------------------------------------------------- */
function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-from-right panel */}
          <motion.div
            key="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] md:hidden flex flex-col"
            style={{
              background: "#0a0a0a",
              borderLeft: "1px solid #1f1f1f",
            }}
          >
            {/* Drawer header */}
            <div
              className="flex items-center justify-between px-5 h-[60px] shrink-0"
              style={{ borderBottom: "1px solid #1f1f1f" }}
            >
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex items-center justify-center w-8 h-8 rounded-[6px] text-[#525252] hover:text-[#a1a1a1] hover:bg-[#1a1a1a] transition-all duration-150"
              >
                <X size={16} strokeWidth={2} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col pt-4 px-3 flex-1 gap-0.5">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.04 * i,
                    duration: 0.22,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center px-3 py-2.5 text-[14px] font-medium text-[#525252] hover:text-white rounded-[8px] hover:bg-[#1a1a1a] transition-all duration-150"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="px-4 pb-8 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
              >
                <RequestAccessButton
                  onClick={onClose}
                  className="w-full py-3 !rounded-[10px] !text-[14px]"
                />
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ----------------------------------------------------------------
   Navigation — main export
   ---------------------------------------------------------------- */
export default function Navigation() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const ticking = useRef(false);

  /* Track scroll for nav background */
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* IntersectionObserver for active section highlighting */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ---- Header ---- */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(0, 0, 0, 0.80)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
          transition:
            "background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[60px]">
            {/* Left — Logo */}
            <Logo />

            {/* Center — Desktop nav pill */}
            <DesktopNav activeSection={activeSection} />

            {/* Right — CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <div className="hidden md:block">
                <RequestAccessButton />
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="md:hidden flex items-center justify-center w-8 h-8 rounded-[6px] text-[#525252] hover:text-[#a1a1a1] hover:bg-[#1a1a1a] border border-[#1f1f1f] hover:border-[#333333] transition-all duration-150"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key="hamburger"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={15} strokeWidth={2} />
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ---- Mobile Drawer ---- */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
