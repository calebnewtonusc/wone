"use client";

import { motion, useReducedMotion, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ─── Easing ──────────────────────────────────────────────────────────────────
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, decimals = 0, delay = 0) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (started.current) return;
      started.current = true;

      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(parseFloat((eased * target).toFixed(decimals)));
        if (progress < 1) requestAnimationFrame(step);
        else setValue(target);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timer);
  }, [target, duration, decimals, delay]);

  return value;
}

// ─── Animated progress bar ────────────────────────────────────────────────────
function ProgressBar({ target, delay = 0 }: { target: number; delay?: number }) {
  const controls = useAnimation();
  useEffect(() => {
    const t = setTimeout(() => {
      controls.start({ width: `${target}%`, transition: { duration: 1.2, ease: EASE_OUT_EXPO } });
    }, delay);
    return () => clearTimeout(t);
  }, [target, delay, controls]);

  return (
    <div className="w-full h-1.5 rounded-full bg-[#1f1f1f] overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg, #4D8EFF, #2563EB)" }}
        initial={{ width: "0%" }}
        animate={controls}
      />
    </div>
  );
}

// ─── Activity row ─────────────────────────────────────────────────────────────
interface ActivityItem {
  text: string;
  time: string;
}

function ActivityRow({ item, index }: { item: ActivityItem; index: number }) {
  return (
    <motion.div
      className="flex items-start gap-2.5"
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.1 + index * 0.12, duration: 0.5, ease: "easeOut" }}
    >
      <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#4D8EFF]" />
      <span className="text-[11px] text-[#a1a1a1] leading-tight flex-1">{item.text}</span>
      <span className="text-[10px] text-[#525252] flex-shrink-0 tabular-nums">{item.time}</span>
    </motion.div>
  );
}

// ─── Dashboard mockup ─────────────────────────────────────────────────────────
function DashboardMockup() {
  const prefersReducedMotion = useReducedMotion();
  const investorCount = useCountUp(24, 1200, 0, 800);
  const avgCheck = useCountUp(180, 1200, 0, 900);

  const activity: ActivityItem[] = [
    { text: "Tiger VC committed $500K", time: "2h ago" },
    { text: "Maya Chen joined as advisor", time: "1d ago" },
    { text: "KPI report sent to investors", time: "2d ago" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 0.5, duration: 0.85, ease: EASE_OUT_EXPO }}
      style={{
        animationName: prefersReducedMotion ? "none" : undefined,
      }}
    >
      {/* Float wrapper */}
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Outer ambient glow */}
        <div
          className="relative rounded-2xl"
          style={{
            filter: "drop-shadow(0 0 40px rgba(77,142,255,0.12)) drop-shadow(0 24px 48px rgba(0,0,0,0.6))",
          }}
        >
          {/* Card */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "#0f0f0f",
              border: "1px solid #1f1f1f",
              width: "100%",
              maxWidth: 420,
            }}
          >
            {/* Subtle inner top gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(77,142,255,0.3), transparent)" }}
            />

            {/* Header bar */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: "1px solid #1f1f1f" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-5 w-5 rounded-md flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #4D8EFF, #2563EB)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1L9 5L5 9L1 5L5 1Z" fill="#000" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-[#a1a1a1] tracking-wide">Wone Dashboard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4D8EFF]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
              </div>
            </div>

            {/* Body */}
            <div className="px-4 pt-4 pb-5 space-y-4">

              {/* Round info */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-white">Series A Round</span>
                  <span
                    className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
                    style={{ background: "rgba(77,142,255,0.12)", color: "#4D8EFF", border: "1px solid rgba(77,142,255,0.2)" }}
                  >
                    Active
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-[22px] font-bold text-white leading-none">$2.4M</span>
                  <span className="text-[11px] text-[#525252]">raised of $5M target</span>
                </div>
                <ProgressBar target={48} delay={700} />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-[#525252]">48% funded</span>
                  <span className="text-[10px] text-[#525252]">$2.6M remaining</span>
                </div>
              </div>

              {/* Stat mini-cards */}
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="rounded-lg px-3 py-2.5"
                  style={{ background: "#161616", border: "1px solid #1f1f1f" }}
                >
                  <div className="text-[18px] font-bold text-white leading-none tabular-nums">
                    {Math.round(investorCount)}
                  </div>
                  <div className="text-[10px] text-[#525252] mt-0.5 uppercase tracking-widest">Investors</div>
                </div>
                <div
                  className="rounded-lg px-3 py-2.5"
                  style={{ background: "#161616", border: "1px solid #1f1f1f" }}
                >
                  <div className="text-[18px] font-bold text-white leading-none tabular-nums">
                    ${Math.round(avgCheck)}K
                  </div>
                  <div className="text-[10px] text-[#525252] mt-0.5 uppercase tracking-widest">Avg Check</div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "#1f1f1f" }} />

              {/* Recent activity */}
              <div>
                <div className="text-[10px] font-semibold text-[#525252] uppercase tracking-widest mb-2.5">
                  Recent Activity
                </div>
                <div className="space-y-2">
                  {activity.map((item, i) => (
                    <ActivityRow key={i} item={item} index={i} />
                  ))}
                </div>
              </div>

              {/* CTA button inside card */}
              <motion.button
                className="w-full rounded-lg py-2 text-[11px] font-semibold text-[#4D8EFF] flex items-center justify-center gap-1.5 transition-colors"
                style={{ background: "rgba(77,142,255,0.08)", border: "1px solid rgba(77,142,255,0.18)" }}
                whileHover={{ backgroundColor: "rgba(77,142,255,0.14)" }}
              >
                View Round Dashboard
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5" stroke="#4D8EFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Stats row ────────────────────────────────────────────────────────────────
const statsData = [
  { raw: 500, suffix: "+", label: "Founders", decimals: 0 },
  { raw: 120, suffix: "+", label: "Investors", decimals: 0 },
  { raw: 4.2, suffix: "M+", label: "Facilitated", prefix: "$", decimals: 1 },
];

function StatItem({
  raw,
  suffix,
  prefix = "",
  label,
  decimals,
  delay,
}: {
  raw: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals: number;
  delay: number;
}) {
  const val = useCountUp(raw, 1300, decimals, delay);
  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();

  return (
    <div className="flex flex-col items-start">
      <span className="text-3xl font-bold text-white leading-none tabular-nums">
        {prefix}{display}{suffix}
      </span>
      <span
        className="mt-1 text-[10px] uppercase tracking-widest"
        style={{ color: "#525252" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Main Hero component ──────────────────────────────────────────────────────
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16"
      style={{ background: "#000000" }}
    >
      {/* ── Background: dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.15,
        }}
      />

      {/* ── Background: single amber glow top-right ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(77,142,255,0.22) 0%, rgba(37,99,235,0.08) 50%, transparent 70%)",
          filter: "blur(150px)",
          opacity: 0.3,
        }}
      />

      {/* ── Main content wrapper ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 xl:gap-20">

          {/* ── LEFT: Text content ── */}
          <motion.div
            className="flex-1 flex flex-col items-start max-w-xl lg:max-w-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Chip badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(15,15,15,0.9)",
                  border: "1px solid #1f1f1f",
                  color: "#a1a1a1",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Pulsing amber dot */}
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{
                      background: "#4D8EFF",
                      animation: prefersReducedMotion ? "none" : "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                    }}
                  />
                  <span
                    className="relative inline-flex h-1.5 w-1.5 rounded-full"
                    style={{ background: "#4D8EFF" }}
                  />
                </span>
                <span>Beta</span>
                <span style={{ width: 1, height: 12, background: "#1f1f1f", display: "inline-block" }} />
                <span style={{ color: "#4D8EFF" }}>Q2 2026 Launch</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-black tracking-tight leading-none mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              <span className="block text-white">The All-in-One</span>
              <span className="block text-white">Startup</span>
              <span
                className="block"
                style={{
                  backgroundImage: "linear-gradient(90deg, #4D8EFF 0%, #2563EB 50%, #4D8EFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "200% auto",
                }}
              >
                Launchpad.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: "#a1a1a1" }}
            >
              Wone connects high-growth startups with investors, advisors, and the infrastructure
              to raise, scale, and launch&nbsp;— faster.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #4D8EFF 0%, #2563EB 100%)",
                }}
              >
                Request Early Access
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-[#4D8EFF]"
              >
                Watch the demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-0"
            >
              {statsData.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <StatItem
                    raw={stat.raw}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    label={stat.label}
                    decimals={stat.decimals}
                    delay={900 + i * 120}
                  />
                  {i < statsData.length - 1 && (
                    <div
                      className="mx-6 self-stretch"
                      style={{ width: 1, background: "#1f1f1f", minHeight: 40 }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Dashboard mockup ── */}
          <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* ── Bottom section fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #000000, transparent)" }}
      />

      {/* Ping keyframe injected inline for the badge dot */}
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
