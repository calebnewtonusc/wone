"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

const stats = [
  { icon: Users,       label: "Founders",       value: 500,   suffix: "+" },
  { icon: TrendingUp,  label: "Investors",       value: 200,   suffix: "+" },
  { icon: DollarSign,  label: "Facilitated",     value: 4,     suffix: ".2M+" },
];

export default function Hero() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const c0 = useCountUp(stats[0].value, 1600, started);
  const c1 = useCountUp(stats[1].value, 1600, started);
  const c2 = useCountUp(stats[2].value, 1600, started);
  const counts = [c0, c1, c2];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue glow — subtle, single spot */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: "rgba(37,99,235,0.12)", color: "#3B82F6", border: "1px solid rgba(37,99,235,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Now in Beta — Join the Waitlist
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6"
        >
          The All-in-One
          <br />
          <span style={{ color: "#3B82F6" }}>Startup Launchpad.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="text-lg md:text-xl text-[#71717a] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Wone connects SoCal founders, investors, and advisors in one unified platform.
          Launch your fundraising campaign, access real-time analytics, and scale with confidence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-colors duration-150"
            style={{ background: "#2563EB" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2563EB")}
          >
            Get Early Access
            <ArrowRight size={15} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#a1a1aa] px-6 py-3 rounded-xl border border-[#222] hover:border-[#333] hover:text-white transition-all duration-150"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-[#1a1a1a]"
          style={{ background: "#1a1a1a" }}
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center py-6 px-4 gap-2"
                style={{ background: "#000" }}
              >
                <Icon size={18} className="text-blue-500 mb-1" />
                <p className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                  {counts[i]}{s.suffix}
                </p>
                <p className="text-xs text-[#52525b] font-medium uppercase tracking-wider">{s.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
