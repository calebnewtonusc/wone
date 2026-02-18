"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const navColumns = [
  {
    heading: "Platform",
    links: [
      { label: "Features", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
];

const connectLinks = [
  { label: "Twitter / X", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Contact", href: "#", icon: Mail },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#030712]">
      {/* Amber gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(245,158,11,0.6) 30%, rgba(139,92,246,0.5) 70%, transparent 100%)",
        }}
      />

      {/* Subtle ambient glow at top */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-48 w-[700px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-4"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            {/* Logo */}
            <Link
              href="#"
              className="inline-block text-3xl font-black tracking-tight"
              aria-label="Wone home"
            >
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Wone
              </span>
            </Link>

            {/* Tagline */}
            <p className="mt-3 text-sm leading-relaxed text-[#9ca3af] max-w-[200px]">
              The unified platform for startup acceleration.
            </p>

            {/* Connect icons - shown in brand column on mobile */}
            <div className="mt-6 flex items-center gap-3 lg:hidden">
              {connectLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1f2937] bg-[#111827] text-[#9ca3af] transition-all duration-200 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400"
                >
                  <Icon size={15} strokeWidth={1.8} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <motion.div key={col.heading} variants={itemVariants}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#f9fafb]">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-1.5 text-sm text-[#9ca3af] transition-colors duration-150 hover:text-amber-400"
                    >
                      <span className="h-px w-0 bg-amber-500 transition-all duration-200 group-hover:w-3" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Connect column - desktop only */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#f9fafb]">
              Connect
            </h3>
            <ul className="space-y-3">
              {connectLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2.5 text-sm text-[#9ca3af] transition-colors duration-150 hover:text-amber-400"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#1f2937] bg-[#111827] transition-all duration-200 group-hover:border-amber-500/40 group-hover:bg-amber-500/10">
                      <Icon size={13} strokeWidth={1.8} />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1f2937] pt-8 sm:flex-row"
        >
          <p className="text-xs text-[#4b5563]">
            &copy; 2026 Wone. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-[#4b5563] transition-colors duration-150 hover:text-[#9ca3af]"
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
