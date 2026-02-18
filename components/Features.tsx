"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Gem, TrendingUp, Users, BarChart3, BookUser } from "lucide-react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const AMBER = "#4D8EFF";
const TEAL = "#14b8a6";
const GREEN = "#22c55e";

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

// ─── Card 1: Live Round Dashboard ─────────────────────────────────────────────
function FundraisingCard() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const duration = 1600;
      const target = 68;

      const animate = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setProgress(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, 200);

    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="group relative col-span-12 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 transition-colors duration-300 hover:border-[#333] md:col-span-7"
      style={{ minHeight: 340 }}
    >
      {/* Amber glow at bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-3/4 -translate-x-1/2 translate-y-1/3 rounded-full blur-[80px]"
        style={{ background: "rgba(77,142,255,0.12)" }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#525252]">
            Live Round Dashboard
          </p>
          <h3 className="text-xl font-bold text-white">Real-Time Fundraising</h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-[#4D8EFF]/20 bg-[#4D8EFF]/10 px-3 py-1 text-xs font-semibold text-[#4D8EFF]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4D8EFF] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4D8EFF]" />
          </span>
          LIVE
        </span>
      </div>

      {/* Progress widget */}
      <div className="relative z-10 mt-8 flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-bold text-white">$3.4M</span>
          <span className="text-sm text-[#525252]">of $5M goal</span>
        </div>

        {/* Progress bar track */}
        <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-[#1a1a1a]">
          <div
            className="h-full rounded-full transition-none"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${AMBER}, #2563EB)`,
              boxShadow: `0 0 12px rgba(77,142,255,0.5)`,
              transition: "none",
            }}
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#4D8EFF]">{progress}% funded</span>
        </div>
      </div>

      {/* Stat badges */}
      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
        {[
          { label: "24 investors" },
          { label: "42 days left" },
          { label: "$140K avg check" },
        ].map(({ label }) => (
          <span
            key={label}
            className="rounded-lg border border-[#1f1f1f] bg-[#1a1a1a] px-3 py-1.5 text-xs font-medium text-[#a1a1a1]"
          >
            {label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Card 2: SPV Infrastructure ───────────────────────────────────────────────
function SpvCard() {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative col-span-12 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 transition-colors duration-300 hover:border-[#333] md:col-span-5"
      style={{ minHeight: 340 }}
    >
      {/* Teal glow */}
      <div
        className="pointer-events-none absolute -right-8 top-0 h-48 w-48 rounded-full blur-[80px]"
        style={{ background: "rgba(20,184,166,0.10)" }}
      />

      {/* Icon + header */}
      <div className="relative z-10">
        <div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: "rgba(20,184,166,0.12)", border: "1px solid rgba(20,184,166,0.2)" }}
        >
          <Gem className="h-5 w-5" style={{ color: TEAL }} strokeWidth={1.5} />
        </div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#525252]">
          SPV Tools Built In
        </p>
        <h3 className="mb-3 text-xl font-bold text-white">SPV Infrastructure</h3>
        <p className="text-sm leading-relaxed text-[#a1a1a1]">
          Launch a Special Purpose Vehicle in minutes — not months. Full cap table
          management, pro-rata rights, and investor docs automated.
        </p>
      </div>

      {/* SPV structure diagram */}
      <div className="relative z-10 mt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#525252]">
          Structure
        </p>
        <div className="flex items-center gap-0">
          {/* Investors box */}
          <div className="flex flex-1 flex-col items-center gap-1 rounded-xl border border-[#1f1f1f] bg-[#1a1a1a] px-3 py-3">
            <Users className="h-4 w-4 text-[#a1a1a1]" strokeWidth={1.5} />
            <span className="text-center text-[11px] font-medium text-[#a1a1a1]">Investors</span>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center px-1">
            <div className="h-px w-6 bg-[#1f1f1f]" />
            <svg width="8" height="8" className="-ml-1.5 mt-[-4px]" viewBox="0 0 8 8">
              <path d="M0 4 L8 4 M5 1 L8 4 L5 7" stroke="#525252" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* SPV box */}
          <div
            className="flex flex-1 flex-col items-center gap-1 rounded-xl px-3 py-3"
            style={{
              border: `1px solid rgba(20,184,166,0.3)`,
              background: "rgba(20,184,166,0.07)",
            }}
          >
            <span className="text-[11px] font-bold" style={{ color: TEAL }}>◆</span>
            <span className="text-center text-[11px] font-medium" style={{ color: TEAL }}>SPV LLC</span>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center px-1">
            <div className="h-px w-6 bg-[#1f1f1f]" />
            <svg width="8" height="8" className="-ml-1.5 mt-[-4px]" viewBox="0 0 8 8">
              <path d="M0 4 L8 4 M5 1 L8 4 L5 7" stroke="#525252" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Startup box */}
          <div className="flex flex-1 flex-col items-center gap-1 rounded-xl border border-[#1f1f1f] bg-[#1a1a1a] px-3 py-3">
            <span className="text-[11px]">🚀</span>
            <span className="text-center text-[11px] font-medium text-[#a1a1a1]">Your Startup</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Card 3: Curated Advisors ─────────────────────────────────────────────────
function MentorCard() {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative col-span-12 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 transition-colors duration-300 hover:border-[#333] md:col-span-4"
    >
      {/* Amber glow top-left */}
      <div
        className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full blur-[60px]"
        style={{ background: "rgba(77,142,255,0.08)" }}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-[#525252]">
              Curated Advisors
            </p>
            <h3 className="text-lg font-bold text-white">Mentorship</h3>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[#4D8EFF]/20 bg-[#4D8EFF]/10 px-2.5 py-1 text-[11px] font-semibold text-[#4D8EFF]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4D8EFF]" />
            Matched
          </div>
        </div>

        {/* Mentor card */}
        <div className="mt-2 rounded-xl border border-[#1f1f1f] bg-[#1a1a1a] p-4">
          <div className="flex items-center gap-3">
            {/* Avatar gradient circle */}
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${AMBER}, #2563EB)` }}
            >
              SK
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Sarah K.</p>
              <p className="text-xs text-[#a1a1a1]">Partner @ Andreessen</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["SaaS", "GTM", "Series A"].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#1f1f1f] bg-[#0f0f0f] px-2 py-0.5 text-[11px] font-medium text-[#525252]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <p className="text-xs text-[#525252]">
          Precision-paired by stage, industry, and growth objective — not randomized.
        </p>
      </div>
    </motion.div>
  );
}

// ─── Card 4: Predictive Analytics ─────────────────────────────────────────────
function AnalyticsCard() {
  // Sparkline points (normalized 0–100 within a 240×60 viewBox)
  const points: [number, number][] = [
    [0, 52],
    [48, 45],
    [96, 38],
    [144, 28],
    [192, 18],
    [240, 8],
  ];

  const pathD = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");

  const areaD = `${pathD} L 240 60 L 0 60 Z`;

  return (
    <motion.div
      variants={fadeUp}
      className="group relative col-span-12 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 transition-colors duration-300 hover:border-[#333] md:col-span-4"
    >
      <div className="relative z-10">
        <div className="mb-1 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-[#525252]" strokeWidth={1.5} />
          <p className="text-xs font-semibold uppercase tracking-widest text-[#525252]">
            Predictive Analytics
          </p>
        </div>
        <h3 className="mb-1 text-lg font-bold text-white">Analytics</h3>
        <p className="text-xs text-[#525252]">AI-powered KPI forecasting</p>
      </div>

      {/* MRR highlight */}
      <div className="relative z-10 mt-4 flex items-baseline gap-2">
        <span className="text-2xl font-bold" style={{ color: AMBER }}>
          MRR ↑34%
        </span>
        <span className="text-xs text-[#525252]">projected</span>
      </div>

      {/* Sparkline SVG */}
      <div className="relative z-10 mt-4 overflow-hidden rounded-lg">
        <svg
          viewBox="0 0 240 60"
          preserveAspectRatio="none"
          className="h-16 w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sparkArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={AMBER} stopOpacity="0.25" />
              <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <path d={areaD} fill="url(#sparkArea)" />
          {/* Line */}
          <path
            d={pathD}
            fill="none"
            stroke={AMBER}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Terminal dot */}
          <circle cx="240" cy="8" r="3" fill={AMBER} />
        </svg>
      </div>
    </motion.div>
  );
}

// ─── Card 5: Investor Pipeline ────────────────────────────────────────────────
function CrmCard() {
  const investors = [
    { name: "Sequoia Capital", status: "Warm intro", dotColor: AMBER },
    { name: "Lightspeed", status: "Outreach sent", dotColor: "#525252" },
    { name: "a16z", status: "Meeting scheduled", dotColor: GREEN },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="group relative col-span-12 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 transition-colors duration-300 hover:border-[#333] md:col-span-4"
    >
      {/* Green glow bottom-right */}
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full blur-[60px]"
        style={{ background: "rgba(34,197,94,0.07)" }}
      />

      <div className="relative z-10">
        <div className="mb-1 flex items-center gap-2">
          <BookUser className="h-4 w-4 text-[#525252]" strokeWidth={1.5} />
          <p className="text-xs font-semibold uppercase tracking-widest text-[#525252]">
            Investor Pipeline
          </p>
        </div>
        <h3 className="mb-0.5 text-lg font-bold text-white">Investor CRM</h3>
        <p className="mb-5 text-xs text-[#525252]">Never lose track of a relationship</p>

        {/* Investor rows */}
        <div className="flex flex-col gap-2">
          {investors.map(({ name, status, dotColor }) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-xl border border-[#1f1f1f] bg-[#1a1a1a] px-4 py-3"
            >
              <span className="text-sm font-medium text-white">{name}</span>
              <div className="flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: dotColor }}
                />
                <span className="text-xs text-[#a1a1a1]">{status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <motion.span
        variants={headingVariants}
        className="mb-5 inline-block rounded-full border border-[#1f1f1f] bg-[#0f0f0f] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#525252]"
      >
        Platform
      </motion.span>

      <motion.h2
        variants={headingVariants}
        className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
      >
        <span className="block">Everything you need to</span>
        <span
          className="block bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(90deg, ${AMBER}, #2563EB)`,
          }}
        >
          raise and scale.
        </span>
      </motion.h2>

      <motion.p variants={headingVariants} className="text-base text-[#525252] sm:text-lg">
        One platform. Zero friction.
      </motion.p>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full py-24 sm:py-32"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Subtle dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        {/* Bento grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-12 gap-4"
        >
          {/* Row 1: Card 1 (7 cols) + Card 2 (5 cols) */}
          <FundraisingCard />
          <SpvCard />

          {/* Row 2: Card 3 + Card 4 + Card 5 (4 cols each) */}
          <MentorCard />
          <AnalyticsCard />
          <CrmCard />
        </motion.div>
      </div>
    </section>
  );
}
