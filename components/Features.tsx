"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Users, TrendingUp, LineChart, Shield, Zap, CheckCircle2, Clock, Star } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------- mini UI components inside feature cards ---------- */

function FundraisingPreview() {
  return (
    <div className="mt-5 space-y-2.5">
      {[
        { label: "Investor Fit Score", value: 94, color: "#2563EB" },
        { label: "Pitch Completeness", value: 87, color: "#7C3AED" },
        { label: "Traction Benchmark", value: 72, color: "#0891B2" },
      ].map((item) => (
        <div key={item.label}>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-500 font-medium">{item.label}</span>
            <span className="font-bold" style={{ color: item.color }}>{item.value}/100</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${item.value}%`, background: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function InvestorPreview() {
  const investors = [
    { initials: "MC", name: "Marcus Chen", tag: "Angel · SoCal" },
    { initials: "PV", name: "Priya Ventures", tag: "Seed · FinTech" },
    { initials: "WV", name: "Westwood VC", tag: "Series A · Tech" },
  ];
  return (
    <div className="mt-5 space-y-2">
      {investors.map((inv) => (
        <div key={inv.name} className="flex items-center justify-between p-2.5 bg-white border border-gray-100 rounded-xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-white">{inv.initials}</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">{inv.name}</p>
              <p className="text-[10px] text-gray-400">{inv.tag}</p>
            </div>
          </div>
          <button className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg hover:bg-blue-100 transition-colors">
            Connect
          </button>
        </div>
      ))}
    </div>
  );
}

function AnalyticsPreview() {
  const points = [40, 55, 45, 70, 60, 80, 75, 92, 85, 95];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const normalize = (v: number) => ((v - min) / (max - min)) * 48;

  const pathD = points
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * (100 / (points.length - 1))},${52 - normalize(v)}`)
    .join(" ");

  return (
    <div className="mt-5">
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-xs text-gray-500 font-medium">Fundraising Velocity</span>
        <span className="text-sm font-bold text-green-600">↑ +23%</span>
      </div>
      <svg viewBox="0 0 100 60" className="w-full h-16" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${pathD} L 100,60 L 0,60 Z`} fill="url(#chartGrad)" />
        <path d={pathD} fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex justify-between mt-2">
        {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
          <span key={m} className="text-[10px] text-gray-400">{m}</span>
        ))}
      </div>
    </div>
  );
}

function AdvisorPreview() {
  const advisors = [
    { initials: "SK", name: "Sarah Kim", role: "CFO · 12 yrs exp", rating: 5, available: true },
    { initials: "JR", name: "James Rodriguez", role: "GTM · Series B", rating: 5, available: false },
  ];
  return (
    <div className="mt-4 space-y-2.5">
      {advisors.map((a) => (
        <div key={a.name} className="flex items-center justify-between p-2.5 bg-white border border-gray-100 rounded-xl">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">{a.initials}</span>
              </div>
              {a.available && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
              )}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">{a.name}</p>
              <p className="text-[10px] text-gray-400">{a.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(a.rating)].map((_, i) => (
              <Star key={i} size={9} fill="#FBBF24" className="text-yellow-400" />
            ))}
          </div>
        </div>
      ))}
      <button className="w-full text-center text-[11px] font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 py-2 rounded-lg transition-colors">
        Book a Session →
      </button>
    </div>
  );
}

function SPVPreview() {
  return (
    <div className="mt-4 space-y-2">
      {[
        { label: "Wone SPV Fund I", status: "Active", amount: "$175K", icon: CheckCircle2, color: "green" },
        { label: "Draft Term Sheet", status: "Pending", amount: "$500K", icon: Clock, color: "yellow" },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl">
            <div className="flex items-center gap-2">
              <Icon size={14} className={item.color === "green" ? "text-green-500" : "text-amber-500"} />
              <div>
                <p className="text-xs font-semibold text-gray-800">{item.label}</p>
                <span className={`text-[10px] font-medium ${item.color === "green" ? "text-green-600" : "text-amber-600"}`}>{item.status}</span>
              </div>
            </div>
            <span className="text-sm font-bold text-gray-700">{item.amount}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- feature card definitions ---------- */

export default function Features() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const fadeCard = (i: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE },
  });

  return (
    <section id="features" ref={ref} className="bg-gray-50 py-28 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4">Platform</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Why Choose Wone?</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Everything a SoCal founder needs — fundraising, analytics, investors, and advisors — built into one platform.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Card 1 — Fundraising Scorecards (large, spans 2 cols on lg) */}
          <motion.div
            {...fadeCard(0)}
            className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <BarChart3 size={18} className="text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1.5">Real-Time Fundraising Scorecards</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                  Live dashboards track investor fit, pitch quality, and traction benchmarks — so you always know exactly where you stand.
                </p>
              </div>
              <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-100 flex-shrink-0 ml-4">
                Live
              </span>
            </div>
            <FundraisingPreview />
          </motion.div>

          {/* Card 2 — Investor Network */}
          <motion.div
            {...fadeCard(1)}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-4">
              <Users size={18} className="text-violet-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1.5">Curated Investor Network</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              200+ vetted angels, VCs, and strategics across SoCal. Matched by stage, check size, and sector.
            </p>
            <InvestorPreview />
          </motion.div>

          {/* Card 3 — Analytics */}
          <motion.div
            {...fadeCard(2)}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-4">
              <LineChart size={18} className="text-sky-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1.5">Trend Forecasting & Analytics</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              AI-powered analytics help you time your raise, benchmark valuations, and surface market signals early.
            </p>
            <AnalyticsPreview />
          </motion.div>

          {/* Card 4 — Advisor Network */}
          <motion.div
            {...fadeCard(3)}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4">
              <TrendingUp size={18} className="text-amber-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1.5">On-Demand Advisor Network</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Book sessions with operators and domain experts who&apos;ve scaled companies like yours.
            </p>
            <AdvisorPreview />
          </motion.div>

          {/* Card 5 — SPV */}
          <motion.div
            {...fadeCard(4)}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-4">
              <Shield size={18} className="text-green-600" />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1.5">SPV & Deal Structuring</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Streamline your cap table with built-in SPV tooling. Handle the infrastructure, not the paperwork.
            </p>
            <SPVPreview />
          </motion.div>

          {/* Card 6 — Ecosystem (full width on lg) */}
          <motion.div
            {...fadeCard(5)}
            className="lg:col-span-3 bg-blue-600 border border-blue-600 rounded-2xl p-8 text-white"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center mb-4">
                  <Zap size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrated Startup Ecosystem</h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-lg">
                  Connect with investors, co-founders, legal partners, and fellow SoCal founders. Wone is the connective tissue the SoCal ecosystem has been missing.
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3">
                {[
                  { label: "Founders", value: "500+" },
                  { label: "Investors", value: "200+" },
                  { label: "Advisors", value: "80+" },
                  { label: "Deals Closed", value: "42+" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-center">
                    <p className="text-xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-blue-200 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
