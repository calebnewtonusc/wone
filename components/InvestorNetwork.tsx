"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Users, TrendingUp, Building2, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const categories = [
  {
    icon: Users,
    title: "Seed & Angel Networks",
    description: "LA, OC, and SD angel groups and syndicate leads actively writing first checks into pre-seed and seed-stage companies.",
    count: "80+",
    label: "Angel Investors",
  },
  {
    icon: TrendingUp,
    title: "Venture Capital",
    description: "Tier 1 and emerging VC firms with active SoCal presence, from Westwood and Century City to Silicon Beach.",
    count: "70+",
    label: "VC Firms",
  },
  {
    icon: Building2,
    title: "Corporate Strategics",
    description: "Strategic investors from tech, media, and entertainment — including studios, streaming platforms, and Fortune 500 innovation arms.",
    count: "50+",
    label: "Strategic Partners",
  },
];

const cities = [
  { name: "Los Angeles", x: 38, y: 42, size: "lg" as const },
  { name: "Silicon Beach", x: 22, y: 50, size: "md" as const },
  { name: "Orange County", x: 58, y: 62, size: "md" as const },
  { name: "San Diego", x: 52, y: 82, size: "md" as const },
  { name: "Santa Barbara", x: 14, y: 18, size: "sm" as const },
];

const connections = [
  { x1: 38, y1: 42, x2: 22, y2: 50 },
  { x1: 38, y1: 42, x2: 58, y2: 62 },
  { x1: 38, y1: 42, x2: 52, y2: 82 },
  { x1: 38, y1: 42, x2: 14, y2: 18 },
  { x1: 58, y1: 62, x2: 52, y2: 82 },
];

const sizeMap = {
  lg: { dot: "w-4 h-4", text: "text-sm font-semibold" },
  md: { dot: "w-3 h-3", text: "text-xs font-medium" },
  sm: { dot: "w-2.5 h-2.5", text: "text-xs" },
};

export default function InvestorNetwork() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="investors" ref={ref} className="bg-gray-900 py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">Investor Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Mapping the SoCal
            <br />
            <span className="text-blue-400">Investor Landscape.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Wone connects you directly to Southern California&apos;s most active startup investors, VCs, and angel networks.
          </p>
          <div className="mt-8 inline-flex items-baseline gap-1">
            <span className="text-6xl font-black text-white">200+</span>
            <span className="text-gray-400 text-sm ml-2 uppercase tracking-wider font-medium">Investors Mapped</span>
          </div>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="p-6 rounded-2xl border border-gray-700 bg-gray-800 hover:border-gray-600 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{cat.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-blue-400">{cat.count}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{cat.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coverage map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="relative rounded-2xl border border-gray-700 overflow-hidden mb-12"
          style={{ background: "#0d1117", minHeight: "280px" }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="absolute top-5 left-6 z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">Coverage Map — Southern California</p>
          </div>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {connections.map((c, i) => (
              <motion.line
                key={i}
                x1={`${c.x1}%`} y1={`${c.y1}%`} x2={`${c.x2}%`} y2={`${c.y2}%`}
                stroke="#3B82F6" strokeWidth="0.3" strokeDasharray="2 2" strokeOpacity="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.15 }}
              />
            ))}
          </svg>

          {cities.map((city, i) => {
            const sz = sizeMap[city.size];
            return (
              <motion.div
                key={city.name}
                className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${city.x}%`, top: `${city.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
              >
                <div className="relative flex items-center justify-center">
                  {city.size === "lg" && (
                    <div className="absolute w-7 h-7 rounded-full bg-blue-500 opacity-20 animate-ping" />
                  )}
                  <div
                    className={`relative ${sz.dot} rounded-full border-2`}
                    style={{
                      background: city.size === "lg" ? "#3B82F6" : "#1F2937",
                      borderColor: city.size === "lg" ? "#3B82F6" : "#374151",
                    }}
                  />
                </div>
                <span
                  className={`${sz.text} whitespace-nowrap px-1.5 py-0.5 rounded text-xs`}
                  style={{ color: city.size === "lg" ? "#93C5FD" : "#6B7280", background: "rgba(13,17,23,0.8)" }}
                >
                  {city.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="text-center"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition-colors duration-150"
          >
            Explore the Network
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
