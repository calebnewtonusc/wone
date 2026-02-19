"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const INVESTORS = [
  { name: "Alta Capital",   type: "Series A–C VC",  pct: 98, color: "#4f46e5" },
  { name: "Sarah Kim",      type: "Angel Investor",  pct: 94, color: "#7C3AED" },
  { name: "SoCal Ventures", type: "Regional VC",     pct: 91, color: "#0891B2" },
];

function ProductMockup() {
  return (
    <m.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: E }}
      className="w-full max-w-[500px] rounded-xl overflow-hidden"
      style={{ boxShadow: "0 32px 80px -8px rgba(15,15,50,0.22), 0 0 0 1px rgba(0,0,0,0.07)" }}
    >
      {/* Dark browser chrome */}
      <div className="flex items-center gap-1.5 px-4 h-10" style={{ background: "#1e1e2e" }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        <div className="flex-1 mx-3 rounded h-5 flex items-center px-3" style={{ background: "#2a2a3e" }}>
          <span className="text-[10px] text-gray-500 font-mono">app.woneportal.com/dashboard</span>
        </div>
      </div>

      {/* App top bar */}
      <div className="flex items-center justify-between px-4 h-11 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "#312e81" }}>
            <span className="text-white font-black text-[8px]">W</span>
          </div>
          <span className="text-[11px] font-bold text-gray-800">Wone</span>
        </div>
        <div className="flex gap-4 text-[10px] font-medium text-gray-400">
          <span className="font-semibold border-b pb-0.5" style={{ color: "#4f46e5", borderColor: "#4f46e5" }}>Dashboard</span>
          <span>Investors</span>
          <span>Analytics</span>
          <span>Advisors</span>
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ background: "#4f46e5" }}>TC</div>
      </div>

      {/* App body */}
      <div className="p-4" style={{ background: "#f8f9fc" }}>
        {/* Welcome row */}
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <p className="text-[9px] text-gray-400 font-medium">Welcome back,</p>
            <p className="text-sm font-bold text-gray-900">TechVenture Co.</p>
          </div>
          <span className="text-[9px] font-semibold text-green-700 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Seed Round Active
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: "Round Score",    value: "94",    sub: "out of 100",   color: "#4f46e5" },
            { label: "Investor Views", value: "47",    sub: "+12 this week", color: null },
            { label: "Capital Raised", value: "$420K", sub: "↑ 23% MTM",    color: null },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-3">
              <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">{s.label}</p>
              <p className="text-[22px] font-black leading-none text-gray-900" style={s.color ? { color: s.color } : {}}>{s.value}</p>
              <p className="text-[8px] text-gray-400 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Investor matches */}
        <div className="bg-white rounded-xl border border-gray-100 p-3">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[10px] font-bold text-gray-700">Top Investor Matches</p>
            <span className="text-[9px] font-semibold" style={{ color: "#4f46e5" }}>View all →</span>
          </div>
          <div className="space-y-2">
            {INVESTORS.map((inv, i) => (
              <div key={inv.name} className={`flex items-center justify-between ${i > 0 ? "pt-2 border-t border-gray-50" : ""}`}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0" style={{ background: inv.color }}>
                    {inv.name[0]}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-900 leading-none">{inv.name}</p>
                    <p className="text-[8px] text-gray-400 mt-0.5">{inv.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-green-600">{inv.pct}%</span>
                  <button className="text-[8px] font-bold text-white px-2 py-0.5 rounded" style={{ background: "#4f46e5" }}>
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />
      {/* Indigo glow top-right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(ellipse at 70% 20%, rgba(99,102,241,0.1) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">

          {/* Left: copy */}
          <div className="max-w-xl">
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: E }}
              className="mb-7"
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border"
                style={{ color: "#4f46e5", borderColor: "#c7d2fe", background: "#eef2ff" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4f46e5" }} />
                🚀 Now in Beta — SoCal Founders
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.07, ease: E }}
              className="font-bold tracking-tight leading-[1.03] text-gray-950 mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
            >
              The All-in-One<br />
              <span style={{ color: "#4338ca" }}>Startup Launchpad.</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.13, ease: E }}
              className="text-xl text-gray-500 leading-relaxed mb-10"
            >
              Connect with 200+ vetted investors, access expert advisors, and raise capital transparently — all in one platform built for SoCal founders.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.19, ease: E }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-opacity hover:opacity-90"
                style={{ background: "#312e81", boxShadow: "0 4px 16px rgba(49,46,129,0.35)" }}
              >
                Request a Demo <ArrowRight size={15} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-300 px-6 py-3.5 rounded-xl transition-all"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#312e81" }}>
                  <svg width="7" height="8" viewBox="0 0 7 8" fill="white"><path d="M0 0.5L7 4L0 7.5V0.5Z" /></svg>
                </div>
                Watch Overview
              </a>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32, ease: E }}
              className="flex flex-wrap gap-8 pt-8 border-t border-gray-100"
            >
              {[
                { value: "50+",    label: "Pilot Partners"   },
                { value: "200+",   label: "Vetted Investors" },
                { value: "Q2 '26", label: "Beta Launch"      },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-gray-900 leading-none">{s.value}</p>
                  <p className="text-xs text-gray-400 font-medium mt-1.5">{s.label}</p>
                </div>
              ))}
            </m.div>
          </div>

          {/* Right: product mockup */}
          <div className="hidden lg:flex justify-end items-center">
            <ProductMockup />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100" />
    </section>
  );
}
