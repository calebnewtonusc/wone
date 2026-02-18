"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart3, Users, LineChart, TrendingUp, Shield, Zap,
  ArrowRight,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
  {
    icon: BarChart3,
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    title: "Transparent Fundraising",
    description:
      "Launch a transparent campaign with live investor tracking, data room management, and real-time round analytics — all in one place.",
    stat: "56% faster closes",
  },
  {
    icon: Users,
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    title: "Expert Mentorship",
    description:
      "On-demand sessions with operators, advisors, and domain experts who've built and scaled companies like yours.",
    stat: "80+ available advisors",
  },
  {
    icon: TrendingUp,
    color: "#0891B2",
    bg: "#ECFEFF",
    border: "#A5F3FC",
    title: "Real-Time Scorecards",
    description:
      "Track investor fit, pitch quality, and traction benchmarks. Know exactly where you stand before every conversation.",
    stat: "Live scoring engine",
  },
  {
    icon: LineChart,
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    title: "Predictive Analytics",
    description:
      "AI-powered forecasting helps you time your raise, benchmark valuations, and identify emerging market signals.",
    stat: "AI-powered insights",
  },
  {
    icon: Shield,
    color: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
    title: "Risk Management",
    description:
      "Identify gaps in your pitch, cap table, and investor fit before they become deal-killers. Catch problems early.",
    stat: "Pre-raise diagnostics",
  },
  {
    icon: Zap,
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
    title: "Integrated Ecosystem",
    description:
      "Connect with investors, co-founders, legal partners, and fellow founders. One platform, no fragmented tools.",
    stat: "500+ active members",
  },
];

const spotlights = [
  {
    tag: "Fundraising",
    headline: "Know your round readiness\nbefore you raise.",
    body: "Wone's real-time scorecard engine analyzes your pitch, traction, and investor fit — giving you a live score and actionable recommendations before you ever send an email.",
    cta: "See Scorecards in Action",
    visual: "scorecard",
  },
  {
    tag: "Investor Network",
    headline: "200+ investors mapped\nacross Southern California.",
    body: "From Silicon Beach angels to Century City VCs, Wone's curated network is filtered by stage, check size, and sector. Get warm introductions, not cold email lists.",
    cta: "Explore the Network",
    visual: "network",
  },
  {
    tag: "Advisor Network",
    headline: "Get real guidance from\noperators who've done it.",
    body: "Book on-demand sessions with advisors who've scaled companies like yours. No generic advice — just domain-specific expertise when you actually need it.",
    cta: "Meet Our Advisors",
    visual: "advisors",
  },
];

function ScorecardVisual() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm font-semibold text-gray-900">Fundraising Readiness</p>
        <span className="text-[11px] font-bold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">Excellent</span>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-shrink-0">
          <svg width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="28" fill="none" stroke="#F3F4F6" strokeWidth="6" />
            <circle cx="36" cy="36" r="28" fill="none" stroke="#2563EB" strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${175.9 * 0.94} ${175.9}`}
              transform="rotate(-90 36 36)" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-900">94</span>
          </div>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-900">94/100</p>
          <p className="text-sm text-gray-500">Overall Score</p>
          <p className="text-xs text-green-600 font-medium mt-1">↑ +8 from last week</p>
        </div>
      </div>
      {[
        { label: "Investor Fit",    score: 96, color: "#2563EB" },
        { label: "Pitch Quality",   score: 87, color: "#7C3AED" },
        { label: "Market Timing",   score: 82, color: "#0891B2" },
      ].map((m) => (
        <div key={m.label} className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-500 font-medium">{m.label}</span>
            <span className="font-bold" style={{ color: m.color }}>{m.score}/100</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${m.score}%`, background: m.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function NetworkVisual() {
  const nodes = [
    { x: 50, y: 50, r: 18, label: "You", color: "#2563EB", big: true },
    { x: 15, y: 20, r: 10, label: "Angel", color: "#7C3AED" },
    { x: 80, y: 18, r: 11, label: "VC", color: "#0891B2" },
    { x: 85, y: 55, r: 10, label: "Corp", color: "#059669" },
    { x: 20, y: 75, r: 9, label: "Fund", color: "#D97706" },
    { x: 55, y: 85, r: 9, label: "Angel", color: "#DC2626" },
    { x: 30, y: 45, r: 8, label: "VC", color: "#7C3AED" },
    { x: 70, y: 38, r: 8, label: "Angel", color: "#0891B2" },
  ];
  const connections = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,6],[2,7],[3,5]];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-gray-900">SoCal Investor Network</p>
        <span className="text-[11px] font-semibold text-blue-600">200+ investors</span>
      </div>
      <svg viewBox="0 0 100 100" className="w-full h-48 mb-4">
        {connections.map(([a, b], i) => (
          <line key={i}
            x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
            x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
            stroke="#E5E7EB" strokeWidth="0.8"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={`${n.x}%`} cy={`${n.y}%`} r={`${n.r * 0.7}%`} fill={n.color} opacity={n.big ? 1 : 0.85} />
            {n.big && (
              <text x={`${n.x}%`} y={`${n.y + 1}%`} textAnchor="middle" fontSize="3.5" fill="white" fontWeight="700">
                {n.label}
              </text>
            )}
          </g>
        ))}
      </svg>
      <div className="flex gap-3">
        {[["80+","Angels"],["70+","VCs"],["50+","Strategics"]].map(([v,l]) => (
          <div key={l} className="flex-1 bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-base font-bold text-gray-900">{v}</p>
            <p className="text-[10px] text-gray-500 font-medium">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdvisorsVisual() {
  const advisors = [
    { initials: "SK", name: "Sarah Kim", role: "CFO · SoftBank alum", color: "#2563EB", available: true },
    { initials: "JR", name: "James Rodriguez", role: "GTM · Series B exits", color: "#7C3AED", available: true },
    { initials: "AT", name: "Aisha Tran", role: "Legal · Tech specialist", color: "#0891B2", available: false },
  ];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm font-semibold text-gray-900">Advisor Network</p>
        <span className="text-[11px] font-semibold text-blue-600">80+ experts</span>
      </div>
      <div className="space-y-3 mb-4">
        {advisors.map((a) => (
          <div key={a.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: a.color }}>
                  <span className="text-[11px] font-bold text-white">{a.initials}</span>
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${a.available ? "bg-green-500" : "bg-gray-300"}`} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">{a.name}</p>
                <p className="text-[10px] text-gray-400">{a.role}</p>
              </div>
            </div>
            <button className={`text-[10px] font-semibold px-2.5 py-1 rounded-lg transition-colors ${
              a.available ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}>
              {a.available ? "Book" : "Full"}
            </button>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-gray-400 text-center">Average 4.9★ rating across 2,400+ sessions</p>
    </div>
  );
}

const VISUALS: Record<string, React.FC> = {
  scorecard: ScorecardVisual,
  network:   NetworkVisual,
  advisors:  AdvisorsVisual,
};

export default function Features() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      {/* ─── Feature cards grid ─── */}
      <section id="features" ref={ref} className="bg-white py-28 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3">Platform</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Why Choose Wone?</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              The full stack for SoCal founders — fundraising, network, analytics, and advisors in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                  className="group p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer bg-white"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border"
                    style={{ background: f.bg, borderColor: f.border }}
                  >
                    <Icon size={20} style={{ color: f.color }} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full border"
                      style={{ color: f.color, background: f.bg, borderColor: f.border }}
                    >
                      {f.stat}
                    </span>
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all duration-150" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Feature spotlights ─── */}
      {spotlights.map((spot, i) => {
        const Visual = VISUALS[spot.visual];
        const isEven = i % 2 === 0;
        return (
          <SpotlightSection key={spot.tag} spot={spot} isEven={isEven} Visual={Visual} />
        );
      })}
    </>
  );
}

function SpotlightSection({
  spot,
  isEven,
  Visual,
}: {
  spot: typeof spotlights[number];
  isEven: boolean;
  Visual: React.FC;
}) {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className={`py-24 px-6 border-t border-gray-100 ${isEven ? "bg-gray-50" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? "lg:[&>div:first-child]:order-2" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4 block">{spot.tag}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 whitespace-pre-line leading-tight">
              {spot.headline}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-7">{spot.body}</p>
            <a href="#waitlist" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              {spot.cta} <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <Visual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
