"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const LOGOS = ["TechStars", "Y Combinator", "500 Global", "Founders Fund", "a16z"];

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-20 px-6 overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #D1D5DB 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />
      {/* Blue radial tint center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Trusted by 50+ pilot partners
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: EASE }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05] mb-6"
        >
          The All-in-One
          <br />
          <span className="text-blue-600">Startup Launchpad.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Wone gives SoCal founders everything they need to raise capital, connect with investors, and scale — in one unified platform.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors duration-150"
          >
            Request a Demo
            <ArrowRight size={15} />
          </a>
          <button
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 px-6 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-150"
          >
            <Play size={13} fill="currentColor" />
            Watch Overview
          </button>
        </motion.div>

        {/* Social proof logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="mt-16 pt-8 border-t border-gray-100"
        >
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
            Backed by operators from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {LOGOS.map((logo) => (
              <span key={logo} className="text-sm font-semibold text-gray-300 hover:text-gray-400 transition-colors">
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
