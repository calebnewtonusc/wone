"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp, Building2, Users } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const categories = [
  {
    icon: Users,
    title: "Seed & Angel Networks",
    description:
      "LA, OC, and SD angel groups and syndicate leads actively writing first checks into pre-seed and seed-stage companies across Southern California.",
    count: "80+",
    label: "Angel Investors",
    gradient: "from-blue-500/20 to-amber-600/5",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    countColor: "text-blue-400",
  },
  {
    icon: TrendingUp,
    title: "Venture Capital",
    description:
      "Tier 1 and emerging VC firms with active SoCal presence, from Westwood and Century City to Silicon Beach and the San Diego biotech corridor.",
    count: "70+",
    label: "VC Firms",
    gradient: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    countColor: "text-violet-400",
  },
  {
    icon: Building2,
    title: "Corporate Strategics",
    description:
      "Strategic investors from tech, media, and entertainment — including studios, streaming platforms, and Fortune 500 innovation arms based in LA.",
    count: "50+",
    label: "Strategic Partners",
    gradient: "from-sky-500/20 to-sky-600/5",
    border: "border-sky-500/20",
    iconColor: "text-sky-400",
    countColor: "text-sky-400",
  },
];

const cities = [
  { name: "Los Angeles", x: 38, y: 42, size: "lg" },
  { name: "Silicon Beach", x: 22, y: 50, size: "md" },
  { name: "Orange County", x: 58, y: 62, size: "md" },
  { name: "San Diego", x: 52, y: 82, size: "md" },
  { name: "Santa Barbara", x: 14, y: 18, size: "sm" },
];

const connections = [
  { x1: 38, y1: 42, x2: 22, y2: 50 },
  { x1: 38, y1: 42, x2: 58, y2: 62 },
  { x1: 38, y1: 42, x2: 52, y2: 82 },
  { x1: 38, y1: 42, x2: 14, y2: 18 },
  { x1: 58, y1: 62, x2: 52, y2: 82 },
];

const sizeMap = {
  lg: { dot: "w-4 h-4", text: "text-sm font-semibold", ping: "w-8 h-8" },
  md: { dot: "w-3 h-3", text: "text-xs font-medium", ping: "w-6 h-6" },
  sm: { dot: "w-2.5 h-2.5", text: "text-xs font-medium", ping: "w-5 h-5" },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: EASE,
    },
  }),
};

export default function InvestorNetwork() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, #4D8EFF 0%, #8b5cf6 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 mb-5">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#4D8EFF" }}
            >
              Investor Network
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ color: "#ffffff" }}
          >
            Mapping the SoCal
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #4D8EFF, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Investor Landscape
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariant}
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#a1a1a1" }}
          >
            Wone connects you directly to Southern California's most active
            startup investors, VCs, and angel networks.
          </motion.p>

          {/* Hero stat */}
          <motion.div variants={fadeUpVariant} className="mt-10 inline-block">
            <div
              className="px-8 py-5 rounded-2xl border"
              style={{
                background: "#0f0f0f",
                borderColor: "#1a1a1a",
              }}
            >
              <p
                className="text-7xl font-black tracking-tighter"
                style={{ color: "#4D8EFF" }}
              >
                200+
              </p>
              <p
                className="text-sm font-medium tracking-wide mt-1 uppercase"
                style={{ color: "#a1a1a1" }}
              >
                Investors Mapped Across SoCal
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`relative rounded-2xl border p-7 group hover:scale-[1.02] transition-transform duration-300 ${cat.border}`}
                style={{ background: "#0f0f0f" }}
              >
                {/* Card gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                    style={{ background: "#1a1a1a" }}
                  >
                    <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                  </div>

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "#ffffff" }}
                  >
                    {cat.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#a1a1a1" }}
                  >
                    {cat.description}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-black ${cat.countColor}`}>
                      {cat.count}
                    </span>
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: "#525252" }}
                    >
                      {cat.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coverage map */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div
            className="relative rounded-3xl border overflow-hidden"
            style={{
              background: "#0a0a0a",
              borderColor: "#1a1a1a",
              minHeight: "320px",
            }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(249,250,251,1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(249,250,251,1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Map label */}
            <div className="absolute top-6 left-7 z-10">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#525252" }}
              >
                Coverage Map
              </p>
            </div>

            {/* SVG connection lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4D8EFF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {connections.map((c, i) => (
                <motion.line
                  key={i}
                  x1={`${c.x1}%`}
                  y1={`${c.y1}%`}
                  x2={`${c.x2}%`}
                  y2={`${c.y2}%`}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.3"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.15 }}
                />
              ))}
            </svg>

            {/* City nodes */}
            {cities.map((city, i) => {
              const sizes = sizeMap[city.size as keyof typeof sizeMap];
              return (
                <motion.div
                  key={city.name}
                  className="absolute flex flex-col items-center gap-1.5 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ping animation */}
                    <div
                      className={`absolute ${sizes.ping} rounded-full animate-ping opacity-20`}
                      style={{ background: "#4D8EFF" }}
                    />
                    <div
                      className={`relative ${sizes.dot} rounded-full border-2`}
                      style={{
                        background:
                          city.size === "lg" ? "#4D8EFF" : "#1a1a1a",
                        borderColor:
                          city.size === "lg" ? "#4D8EFF" : "#374151",
                        boxShadow:
                          city.size === "lg"
                            ? "0 0 12px rgba(77,142,255,0.6)"
                            : "none",
                      }}
                    />
                  </div>
                  <span
                    className={`${sizes.text} whitespace-nowrap px-2 py-0.5 rounded-md backdrop-blur-sm`}
                    style={{
                      color: city.size === "lg" ? "#4D8EFF" : "#a1a1a1",
                      background: "rgba(17,24,39,0.8)",
                    }}
                  >
                    {city.name}
                  </span>
                </motion.div>
              );
            })}

            {/* Bottom region label */}
            <div className="absolute bottom-6 right-7 z-10">
              <p
                className="text-xs font-medium"
                style={{ color: "#525252" }}
              >
                Southern California Region
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200"
            style={{
              background: "#4D8EFF",
              color: "#000000",
            }}
          >
            Explore the Network
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
