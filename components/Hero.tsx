"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ScoreGauge({ score, delay = 0 }: { score: number; delay?: number }) {
  const [current, setCurrent] = useState(0);
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = (current / 100) * circ;

  useEffect(() => {
    const t = setTimeout(() => {
      let frame: number;
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setCurrent(Math.round(ease * score));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }, delay);
    return () => clearTimeout(t);
  }, [score, delay]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width="88" height="88" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
          <circle
            cx="44" cy="44" r={r}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circ}`}
            transform="rotate(-90 44 44)"
            style={{ transition: "stroke-dasharray 0.05s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white tabular-nums leading-none">{current}</span>
          <span className="text-[9px] text-blue-300/60 font-medium">/100</span>
        </div>
      </div>
      <p className="text-[10px] text-white/40 font-medium mt-1 uppercase tracking-wider">Wone Score</p>
    </div>
  );
}

function ReadinessCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [barWidths, setBarWidths] = useState([0, 0, 0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const targets = [96, 87, 82];
    targets.forEach((target, i) => {
      setTimeout(() => {
        const startT = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - startT) / 900, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setBarWidths((prev) => {
            const next = [...prev];
            next[i] = Math.round(ease * target);
            return next;
          });
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, 600 + i * 120);
    });
  }, [started]);

  const metrics = [
    { label: "Investor Fit",    value: barWidths[0], color: "#3B82F6" },
    { label: "Pitch Quality",   value: barWidths[1], color: "#8B5CF6" },
    { label: "Market Timing",   value: barWidths[2], color: "#06B6D4" },
  ];

  return (
    <div
      ref={ref}
      className="relative rounded-2xl border overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #1E293B 0%, #0F172A 100%)",
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px -16px rgba(0,0,0,0.6), 0 0 80px rgba(37,99,235,0.12)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wider">Wone Platform</span>
        </div>
        <span className="text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
          Live Session
        </span>
      </div>

      <div className="p-6">
        {/* Score */}
        <div className="flex items-center gap-5 mb-7">
          {started && <ScoreGauge score={94} delay={400} />}
          <div>
            <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">Fundraising Readiness</p>
            <p className="text-2xl font-bold text-white leading-none">Excellent</p>
            <p className="text-[11px] text-green-400 font-medium mt-1.5">↑ Ready to raise your Seed Round</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-3.5">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] font-medium text-white/50">{m.label}</span>
                <span className="text-[11px] font-bold tabular-nums" style={{ color: m.color }}>{m.value}/100</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div
                  className="h-full rounded-full transition-all duration-100"
                  style={{ width: `${m.value}%`, background: m.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }} />

        {/* Round status */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Investors", value: "14" },
            { label: "Raised",    value: "$420K" },
            { label: "To Close",  value: "~18d" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-3 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-base font-bold text-white">{s.value}</p>
              <p className="text-[9px] text-white/30 font-medium uppercase tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-1.5">
            {["MC", "PV", "TL", "SK"].map((i, idx) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{
                  background: ["#2563EB","#7C3AED","#0891B2","#059669"][idx],
                  borderColor: "#0F172A",
                }}
              >
                <span className="text-[7px] font-bold text-white">{i}</span>
              </div>
            ))}
          </div>
          <span className="text-[11px] text-white/30">4 active investors</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0F172A" }}>
      {/* Subtle noise grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Blue glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(37,99,235,0.12) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24 lg:py-32">

          {/* LEFT — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-7"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
                style={{ background: "rgba(37,99,235,0.12)", color: "#93C5FD", borderColor: "rgba(37,99,235,0.25)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Trusted by 50+ SoCal pilot partners
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.07, ease: EASE }}
              className="text-5xl lg:text-[3.75rem] font-bold tracking-tight leading-[1.05] text-white mb-5"
            >
              The All-in-One
              <br />
              <span style={{ color: "#60A5FA" }}>Startup Launchpad.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14, ease: EASE }}
              className="text-lg leading-relaxed mb-9 max-w-md"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Wone connects SoCal founders with 200+ vetted investors, expert advisors, and the infrastructure to raise faster — all in one platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors duration-150"
              >
                Request a Demo
                <ArrowRight size={15} />
              </a>
              <button className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3.5 rounded-xl border transition-all duration-150 hover:bg-white/5"
                style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.12)" }}
              >
                <Play size={12} fill="currentColor" />
                Watch Overview
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="flex gap-8 pt-8 border-t"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {[
                { value: "500+",  label: "Founders on platform" },
                { value: "200+",  label: "Vetted investors" },
                { value: "$4.2M", label: "Capital facilitated" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          >
            <ReadinessCard />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      {/* Logos bar */}
      <div
        className="relative z-10 border-t py-6 px-6"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
            Backed by operators from
          </p>
          <div className="flex flex-wrap items-center gap-8">
            {["Techstars", "Y Combinator", "500 Global", "Founders Fund", "a16z"].map((name) => (
              <span key={name} className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.18)" }}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
