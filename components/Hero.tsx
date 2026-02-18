"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const STATS = [
  { value: "500+",  label: "Founders on Platform" },
  { value: "200+",  label: "Vetted Investors" },
  { value: "$4.2M", label: "Capital Facilitated" },
  { value: "60d",   label: "Avg. Days to Close" },
];

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F172A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: E }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Trusted by 50+ SoCal pilot partners
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: E }}
          className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] font-bold tracking-[-0.03em] leading-[0.95] text-gray-950 mb-7"
        >
          The All-in-One
          <span className="block text-blue-600">Startup Launchpad.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: E }}
          className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Wone is the platform SoCal founders use to raise capital, connect with 200+ vetted investors, and access expert advisors — all in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.21, ease: E }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-7 py-4 rounded-xl transition-colors duration-150 shadow-sm shadow-blue-200"
          >
            Request a Demo
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 px-7 py-4 rounded-xl transition-all duration-150">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Play size={9} fill="white" className="ml-0.5 text-white" />
            </div>
            Watch Overview
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: E }}
        >
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-gray-100 bg-gray-100 shadow-sm">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white px-8 py-5 text-center">
                <p className="text-3xl font-bold text-gray-900 tracking-tight">{s.value}</p>
                <p className="text-xs text-gray-400 font-medium mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Logos strip */}
      <div className="relative z-10 border-t border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-7">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-300 w-full sm:w-auto text-center">
              Backed by operators from
            </p>
            {["Techstars", "Y Combinator", "500 Global", "Founders Fund", "a16z"].map((n) => (
              <span key={n} className="text-sm font-semibold text-gray-300">{n}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
