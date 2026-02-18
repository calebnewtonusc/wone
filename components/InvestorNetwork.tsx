"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const investors = [
  {
    initials: "AC",
    name: "Andreessen Capital",
    type: "VC Fund",
    stage: "Series A–B",
    check: "$500K – $5M",
    focus: ["AI", "SaaS", "Fintech"],
    location: "Santa Monica",
    color: "#2563EB",
    active: true,
  },
  {
    initials: "SK",
    name: "Sarah Kim",
    type: "Angel Investor",
    stage: "Pre-Seed / Seed",
    check: "$25K – $150K",
    focus: ["Consumer", "Marketplace"],
    location: "Los Angeles",
    color: "#7C3AED",
    active: true,
  },
  {
    initials: "SV",
    name: "SoCal Ventures",
    type: "Regional VC",
    stage: "Seed / Series A",
    check: "$100K – $1M",
    focus: ["Deep Tech", "Climate"],
    location: "San Diego",
    color: "#0891B2",
    active: true,
  },
  {
    initials: "WV",
    name: "Westwood Ventures",
    type: "VC Fund",
    stage: "Series A–C",
    check: "$1M – $10M",
    focus: ["B2B SaaS", "Enterprise"],
    location: "Westwood",
    color: "#059669",
    active: false,
  },
  {
    initials: "PL",
    name: "Pacific Labs",
    type: "Corporate Strategic",
    stage: "All Stages",
    check: "$250K – $3M",
    focus: ["Biotech", "AgTech"],
    location: "Orange County",
    color: "#DC2626",
    active: true,
  },
  {
    initials: "TA",
    name: "TechAngels OC",
    type: "Angel Network",
    stage: "Pre-Seed",
    check: "$10K – $75K",
    focus: ["Consumer Tech", "EdTech"],
    location: "Irvine",
    color: "#D97706",
    active: false,
  },
];

const stats = [
  { value: "80+", label: "Angel Investors", desc: "LA, OC & SD angel groups" },
  { value: "70+", label: "VC Firms",         desc: "Seed through Series C" },
  { value: "50+", label: "Strategics",        desc: "Fortune 500 innovation arms" },
];

export default function InvestorNetwork() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="investors" ref={ref} className="bg-gray-950 py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">Investor Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            200+ investors ready<br />
            <span className="text-blue-400">to back your raise.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Every investor on Wone is vetted, active, and matched to your specific stage, sector, and check size.
          </p>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center"
            >
              <p className="text-4xl font-black text-white mb-1">{s.value}</p>
              <p className="text-sm font-semibold text-blue-400 mb-1">{s.label}</p>
              <p className="text-xs text-gray-500">{s.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Investor cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {investors.map((inv, i) => (
            <motion.div
              key={inv.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
              className="group rounded-2xl border border-gray-800 bg-gray-900 hover:border-gray-600 hover:bg-gray-800/80 p-5 transition-all duration-200 cursor-default"
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
                    <p className="text-sm font-semibold text-white leading-tight">{inv.name}</p>
                    <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{inv.type}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  inv.active
                    ? "text-green-400 bg-green-400/10 border border-green-400/20"
                    : "text-gray-500 bg-gray-800 border border-gray-700"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${inv.active ? "bg-green-400" : "bg-gray-600"}`} />
                  {inv.active ? "Active" : "Closed"}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-medium">Stage</span>
                  <span className="text-gray-300 font-semibold">{inv.stage}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-medium">Check Size</span>
                  <span className="text-gray-300 font-semibold">{inv.check}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-medium">Location</span>
                  <span className="text-gray-300 font-semibold">{inv.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {inv.focus.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md border"
                    style={{
                      color: inv.color,
                      background: `${inv.color}15`,
                      borderColor: `${inv.color}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-5">
            Plus 150+ more investors — filtered by your stage, sector, and check size.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition-colors"
          >
            Browse the Network
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
