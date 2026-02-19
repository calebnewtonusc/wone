"use client";

import { m } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const INVESTORS = [
  { name: "Alta Capital",   type: "Series A–C VC",  pct: 98, color: "#4f46e5" },
  { name: "Sarah Kim",      type: "Angel Investor",  pct: 94, color: "#7C3AED" },
  { name: "SoCal Ventures", type: "Regional VC",     pct: 91, color: "#0891B2" },
];

function AppPreview() {
  return (
    <m.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: E }}
      className="w-full max-w-[420px] bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 24px 64px -8px rgba(49,46,129,0.18), 0 0 0 1px rgba(0,0,0,0.06)" }}
    >
      {/* Header */}
      <div className="px-5 py-4" style={{ background: "#312e81" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
              <span className="text-white font-black text-[10px]">W</span>
            </div>
            <span className="text-white font-semibold text-sm">Wone · Dashboard</span>
          </div>
          <span className="text-[11px] font-bold text-indigo-200 px-2.5 py-1 rounded-full flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Seed Round Active
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 border-b border-gray-100">
        {[
          { value: "94",    label: "Round Score",    accent: true  },
          { value: "47",    label: "Investor Views", accent: false },
          { value: "$420K", label: "Capital Raised", accent: false },
        ].map((s, i) => (
          <div key={s.label} className={`py-4 px-3 text-center ${i > 0 ? "border-l border-gray-100" : ""}`}>
            <p className={`text-2xl font-black leading-none ${s.accent ? "text-indigo-700" : "text-gray-900"}`}>{s.value}</p>
            <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Investor matches */}
      <div className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Top Investor Matches</p>
        <div className="space-y-2">
          {INVESTORS.map((inv) => (
            <div key={inv.name} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                  style={{ background: inv.color }}
                >
                  {inv.name[0]}
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-900 leading-none">{inv.name}</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">{inv.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-green-600">{inv.pct}%</span>
                <button className="text-[9px] font-bold text-white px-2 py-1 rounded-md" style={{ background: "#312e81" }}>
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Readiness row */}
      <div className="px-4 pb-4">
        <div className="rounded-xl border border-indigo-100 p-3 flex items-center justify-between" style={{ background: "#eef2ff" }}>
          <div>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Fundraising Readiness</p>
            <p className="text-base font-black text-indigo-900 mt-0.5">
              94<span className="text-gray-300 font-normal text-sm"> / 100</span>
              <span className="ml-2 text-xs font-bold text-green-600">● Ready</span>
            </p>
          </div>
          <button className="text-xs font-semibold text-indigo-700 bg-white border border-indigo-100 px-3 py-2 rounded-lg shadow-sm">
            View All →
          </button>
        </div>
      </div>
    </m.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(150deg, #ddd6fe 0%, #ede9fe 30%, #f5f3ff 65%, #ffffff 100%)" }}
    >
      {/* Decorative blob */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(#c4b5fd, transparent 70%)", opacity: 0.35 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">

          {/* Left: copy */}
          <div className="max-w-xl">
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: E }}
              className="mb-7"
            >
              <span
                className="inline-flex items-center gap-2 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-full border border-indigo-200 shadow-sm"
                style={{ background: "rgba(255,255,255,0.8)" }}
              >
                🚀 Now in Beta — Join the Waitlist
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07, ease: E }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-6"
              style={{ color: "#1e1b4b" }}
            >
              The All-in-One<br />
              Startup Launchpad.
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: E }}
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg"
            >
              A unified ecosystem where founders showcase progress, connect with expert advisors, and raise capital transparently. The future of startup acceleration is here.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: E }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-4 rounded-xl transition-all hover:opacity-90 shadow-lg"
                style={{ background: "#312e81", boxShadow: "0 8px 24px -4px rgba(49,46,129,0.4)" }}
              >
                Request a Demo <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-white border border-gray-200 hover:border-gray-300 px-7 py-4 rounded-xl transition-all"
                style={{ background: "rgba(255,255,255,0.7)" }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#312e81" }}
                >
                  <svg width="7" height="8" viewBox="0 0 7 8" fill="white"><path d="M0 0.5L7 4L0 7.5V0.5Z" /></svg>
                </div>
                Watch Overview
              </a>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: E }}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <Check size={16} className="text-green-600 flex-shrink-0" />
              <span>Trusted by <strong>50+ pilot partners</strong> across SoCal</span>
            </m.div>
          </div>

          {/* Right: app preview */}
          <div className="flex justify-center lg:justify-end items-center">
            <AppPreview />
          </div>
        </div>
      </div>

      {/* Soft bottom fade into white */}
      <div className="h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
