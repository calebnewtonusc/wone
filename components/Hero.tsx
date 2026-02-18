"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, DollarSign, Lock } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const INVESTORS = [
  { name: "Marcus Chen", firm: "Angel", status: "Committed", amount: "$50K", color: "green" },
  { name: "Priya Ventures", firm: "VC", status: "In Diligence", amount: "$100K", color: "yellow" },
  { name: "TechAngels LA", firm: "Syndicate", status: "Interested", amount: "—", color: "blue" },
  { name: "Sara Kim", firm: "Angel", status: "Committed", amount: "$25K", color: "green" },
];

const ACTIVITY = [
  { text: "Marcus Chen viewed your deck", time: "2h ago" },
  { text: "Priya Ventures requested a call", time: "4h ago" },
  { text: "3 new investor matches found", time: "1d ago" },
];

const STATS = [
  { icon: Users, value: "500+", label: "Founders" },
  { icon: TrendingUp, value: "200+", label: "Investors" },
  { icon: DollarSign, value: "$4.2M+", label: "Facilitated" },
];

function ProgressBar({ target }: { target: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setWidth(target), 400); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function DashboardMockup() {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden w-full"
      style={{ boxShadow: "0 32px 64px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.05)" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-gray-50/80">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex items-center justify-center min-w-0">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-gray-200 text-xs text-gray-400 max-w-[200px] w-full">
            <Lock size={9} className="flex-shrink-0" />
            <span className="truncate">app.wone.io/dashboard</span>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] text-gray-500 font-medium">Live</span>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-5 space-y-5">
        {/* Round overview */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Seed Round</p>
              <p className="text-xl font-bold text-gray-900 mt-0.5">$420,000 <span className="text-sm font-normal text-gray-400">/ $750,000</span></p>
            </div>
            <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">56%</span>
          </div>
          <ProgressBar target={56} />
          <div className="flex justify-between mt-1.5">
            <span className="text-[11px] text-gray-400">14 investors committed</span>
            <span className="text-[11px] text-gray-400">$330K remaining</span>
          </div>
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Deck Views", value: "142", change: "+12 this week" },
            { label: "Meetings", value: "8", change: "3 this week" },
            { label: "Intros Made", value: "23", change: "+5 this week" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-3">
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mb-1">{s.label}</p>
              <p className="text-lg font-bold text-gray-900">{s.value}</p>
              <p className="text-[10px] text-green-600 font-medium mt-0.5">{s.change}</p>
            </div>
          ))}
        </div>

        {/* Investor pipeline */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider">Investor Pipeline</p>
            <span className="text-[11px] text-blue-600 font-medium cursor-pointer hover:underline">View all →</span>
          </div>
          <div className="space-y-1.5">
            {INVESTORS.map((inv) => (
              <div key={inv.name} className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-white">{inv.name[0]}{inv.name.split(" ")[1]?.[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-800 truncate">{inv.name}</p>
                    <p className="text-[10px] text-gray-400">{inv.firm}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    inv.color === "green" ? "bg-green-50 text-green-700" :
                    inv.color === "yellow" ? "bg-amber-50 text-amber-700" :
                    "bg-blue-50 text-blue-700"
                  }`}>{inv.status}</span>
                  <span className="text-[11px] font-semibold text-gray-700 w-12 text-right">{inv.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-2.5">Recent Activity</p>
          <div className="space-y-2">
            {ACTIVITY.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-[11px] text-gray-600 truncate">{item.text}</span>
                </div>
                <span className="text-[11px] text-gray-400 flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden" style={{ paddingTop: "80px" }}>
      {/* Very subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-96 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(239,246,255,0.6) 0%, rgba(255,255,255,0) 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-24">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Trusted by 50+ pilot partners
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07, ease: EASE }}
              className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06] mb-5"
            >
              The All-in-One
              <br />
              <span className="text-blue-600">Startup Launchpad.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.13, ease: EASE }}
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              Wone gives SoCal founders everything they need to raise capital, connect with 200+ investors, and scale — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.19, ease: EASE }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors duration-150"
              >
                Request a Demo
                <ArrowRight size={15} />
              </a>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 px-6 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-150">
                <Play size={13} fill="currentColor" />
                Watch Overview
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
              className="flex gap-8 pt-6 border-t border-gray-100"
            >
              {STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">{s.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="relative"
          >
            {/* Floating accent */}
            <div
              className="absolute -top-6 -right-6 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
            />
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Trusted by logos */}
      <div className="relative z-10 border-t border-gray-100 bg-gray-50/60 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-0 md:justify-between">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest w-full text-center mb-4 md:mb-0 md:w-auto">
            Backed by operators from
          </p>
          {["Techstars", "Y Combinator", "500 Global", "Founders Fund", "a16z", "First Round"].map((name) => (
            <span key={name} className="text-sm font-semibold text-gray-300 md:px-6">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
