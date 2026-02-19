"use client";

import { useRef, useState } from "react";
import { m, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock, MapPin } from "lucide-react";
import { EASE, BRAND, ACCENT } from "@/lib/brand";

type Filter = "All" | "Angel" | "VC Fund" | "Corporate Strategic" | "Angel Network" | "Regional VC";

const investors = [
  {
    initials: "AC",
    name: "Alta Capital",
    type: "VC Fund" as Filter,
    stage: "Series A–B",
    check: "$500K – $5M",
    focus: ["AI", "SaaS", "Fintech"],
    location: "Santa Monica",
    color: "#4f46e5",
  },
  {
    initials: "SK",
    name: "Sarah Kim",
    type: "Angel" as Filter,
    stage: "Pre-Seed / Seed",
    check: "$25K – $150K",
    focus: ["Consumer", "Marketplace"],
    location: "Los Angeles",
    color: "#7C3AED",
  },
  {
    initials: "SV",
    name: "SoCal Ventures",
    type: "Regional VC" as Filter,
    stage: "Seed / Series A",
    check: "$100K – $1M",
    focus: ["Deep Tech", "Climate"],
    location: "San Diego",
    color: "#0891B2",
  },
  {
    initials: "WV",
    name: "Westwood Ventures",
    type: "VC Fund" as Filter,
    stage: "Series A–C",
    check: "$1M – $10M",
    focus: ["B2B SaaS", "Enterprise"],
    location: "Westwood",
    color: "#059669",
  },
  {
    initials: "PL",
    name: "Pacific Labs",
    type: "Corporate Strategic" as Filter,
    stage: "All Stages",
    check: "$250K – $3M",
    focus: ["Biotech", "AgTech"],
    location: "Orange County",
    color: "#DC2626",
  },
  {
    initials: "TA",
    name: "TechAngels OC",
    type: "Angel Network" as Filter,
    stage: "Pre-Seed",
    check: "$10K – $75K",
    focus: ["Consumer Tech", "EdTech"],
    location: "Irvine",
    color: "#D97706",
  },
];

const FILTER_TABS = [
  { label: "All",        match: null },
  { label: "Angels",     match: ["Angel", "Angel Network"] },
  { label: "VCs",        match: ["VC Fund", "Regional VC"] },
  { label: "Strategics", match: ["Corporate Strategic"] },
] as const;

const stats = [
  { value: "80+", label: "Angel Investors", desc: "LA, OC & SD angel groups" },
  { value: "70+", label: "VC Firms",         desc: "Seed through Series C"   },
  { value: "50+", label: "Strategics",        desc: "Fortune 500 arms"        },
];

export default function InvestorNetwork() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = FILTER_TABS.find((t) => t.label === activeFilter);
  const visible  = filtered?.match
    ? investors.filter((inv) => (filtered.match as readonly string[]).includes(inv.type))
    : investors;

  return (
    <section id="investors" ref={ref} className="bg-white py-28 px-6 overflow-hidden border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <MapPin className="w-3.5 h-3.5" style={{ color: ACCENT }} />
            <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ACCENT }}>Investor Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5 leading-tight">
            200+ investors ready<br />
            <span style={{ color: BRAND }}>to back your raise.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Every investor on Wone is vetted, active, and matched to your specific stage, sector, and check size.
          </p>
        </m.div>

        {/* Stats */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-4xl font-black text-gray-900 mb-1">{s.value}</p>
              <p className="text-sm font-semibold mb-1" style={{ color: BRAND }}>{s.label}</p>
              <p className="text-xs text-gray-400">{s.desc}</p>
            </div>
          ))}
        </m.div>

        {/* Filter tabs */}
        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
          className="flex items-center gap-2 mb-6 flex-wrap"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveFilter(tab.label)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 border"
              style={
                activeFilter === tab.label
                  ? { background: BRAND, color: "#fff", borderColor: BRAND }
                  : { background: "#f3f4f6", color: "#6b7280", borderColor: "#e5e7eb" }
              }
            >
              {tab.label}
            </button>
          ))}
        </m.div>

        {/* Investor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <AnimatePresence mode="popLayout">
            {visible.map((inv, i) => (
              <m.div
                key={inv.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: EASE }}
                className="group rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm p-5 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ background: inv.color }}
                    >
                      {inv.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 leading-tight">{inv.name}</p>
                      <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{inv.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full text-green-600 bg-green-50 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Active
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {[["Stage", inv.stage], ["Check Size", inv.check], ["Location", inv.location]].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between text-[11px]">
                      <span className="text-gray-400 font-medium">{k}</span>
                      <span className="text-gray-700 font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {inv.focus.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md border"
                      style={{ color: inv.color, background: `${inv.color}15`, borderColor: `${inv.color}30` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </AnimatePresence>

          {/* Locked teaser card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
            className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 flex flex-col items-center justify-center text-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <Lock size={16} className="text-gray-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">150+ more investors</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Join Wone to unlock the full investor network — filtered by your stage, sector, and check size.
              </p>
            </div>
            <a
              href="#waitlist"
              className="text-xs font-bold transition-opacity hover:opacity-80"
              style={{ color: BRAND }}
            >
              Get access →
            </a>
          </m.div>
        </div>

        {/* CTA */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="text-center"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
            style={{ background: BRAND }}
          >
            Browse the Full Network <ArrowRight size={15} />
          </a>
        </m.div>
      </div>
    </section>
  );
}
