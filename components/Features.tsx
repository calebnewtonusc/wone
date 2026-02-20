"use client";

import { useRef, useState } from "react";
import { m, useInView, AnimatePresence } from "framer-motion";
import { BarChart3, Users, LineChart, TrendingUp, Shield, Zap, ArrowRight, Target, DollarSign, Handshake } from "lucide-react";

const E: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STRATEGY_TABS = [
  {
    id: "fundraising",
    label: "Fundraising",
    icon: DollarSign,
    color: "#4f46e5",
    headline: "End-to-end fundraising infrastructure.",
    body: "From building your data room to closing your round, Wone handles every step. Live campaign tracking, investor CRM, and real-time scorecard updates keep you in control throughout the entire process.",
    bullets: [
      "Data room with version control",
      "Live investor engagement tracking",
      "Round analytics and benchmarking",
      "Built-in SPV deal tools",
    ],
    metric: { value: "$420K", label: "Avg committed per campaign" },
  },
  {
    id: "matching",
    label: "Investor Matching",
    icon: Target,
    color: "#7C3AED",
    headline: "AI-matched investors, not cold lists.",
    body: "Our matching engine analyzes 50+ data points — your sector, stage, traction, team background, and more — to surface only investors who are statistically likely to invest in companies like yours.",
    bullets: [
      "50+ matching parameters",
      "Stage and check-size alignment",
      "Warm intro facilitation",
      "Investor response analytics",
    ],
    metric: { value: "14", label: "Avg qualified matches per startup" },
  },
  {
    id: "advisory",
    label: "Advisory Network",
    icon: Handshake,
    color: "#059669",
    headline: "Real operators, on-demand.",
    body: "80+ advisors with actual operating experience — CFOs, GTM leads, legal specialists — available for booking within 48 hours. No retainers, no lock-in. Pay per session or roll into your plan.",
    bullets: [
      "CFOs, lawyers, GTM experts",
      "Book within 48 hours",
      "Session notes and follow-ups",
      "No retainer required",
    ],
    metric: { value: "4.9", label: "Average advisor rating" },
  },
];


const features = [
  { icon: BarChart3, color: "#4f46e5", bg: "#eef2ff", border: "#c7d2fe", title: "Transparent Fundraising", body: "Live campaign tracking, data room management, and round analytics. Every metric that matters, in one dashboard." },
  { icon: Users,    color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE", title: "Expert Mentorship",      body: "On-demand sessions with operators who've scaled companies like yours. Real guidance, not generic advice." },
  { icon: TrendingUp, color: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC", title: "Real-Time Scorecards", body: "Know your investor fit, pitch quality, and traction score before you send a single deck." },
  { icon: LineChart, color: "#059669", bg: "#ECFDF5", border: "#A7F3D0", title: "Predictive Analytics",  body: "AI-powered trend forecasting helps you time your raise, benchmark valuations, and surface signals early." },
  { icon: Shield,   color: "#DC2626", bg: "#FEF2F2", border: "#FECACA", title: "Risk Management",       body: "Identify gaps in your pitch, cap table, and investor fit before they become deal-killers." },
  { icon: Zap,      color: "#D97706", bg: "#FFFBEB", border: "#FDE68A", title: "Integrated Ecosystem",  body: "Connect with investors, co-founders, and legal partners. One platform, no fragmented tools." },
];

function ScorecardCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm max-w-sm w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Fundraising Readiness</p>
          <p className="text-5xl font-bold text-gray-900 tracking-tight">94<span className="text-2xl text-gray-300 font-normal">/100</span></p>
        </div>
        <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <span className="text-xl">✓</span>
          <span className="text-[10px] font-bold uppercase tracking-wide mt-0.5" style={{ color: "#15803d" }}>Ready</span>
        </div>
      </div>
      <div className="space-y-4">
        {[
          { label: "Investor Fit",  pct: 96, color: "#4f46e5" },
          { label: "Pitch Quality", pct: 87, color: "#7C3AED" },
          { label: "Market Timing", pct: 82, color: "#0891B2" },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium text-gray-600">{item.label}</span>
              <span className="font-bold tabular-nums" style={{ color: item.color }}>{item.pct}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-gray-400 text-center">Updated in real time as you improve your profile</p>
    </div>
  );
}

function AnalyticsCard() {
  const pts = [28, 35, 30, 52, 48, 65, 58, 74, 70, 88, 82, 95];
  const max = Math.max(...pts), min = Math.min(...pts);
  const W = 100, H = 60;
  const x = (i: number) => (i / (pts.length - 1)) * W;
  const y = (v: number) => H - ((v - min) / (max - min)) * (H - 8) - 4;
  const path = pts.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v)}`).join(" ");
  const area = `${path} L${W},${H} L0,${H}Z`;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm max-w-sm w-full">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Fundraising Velocity</p>
          <p className="text-4xl font-bold text-gray-900 tracking-tight">↑ 23%</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ color: "#15803d", background: "#f0fdf4", border: "1px solid #bbf7d0" }}>This Quarter</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-28 mt-4 mb-2" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#ag)" />
        <path d={path} fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={x(pts.length - 1)} cy={y(pts[pts.length - 1])} r="4" fill="#4f46e5" />
      </svg>
      <div className="flex justify-between text-[11px] text-gray-300 font-medium">
        {["Jan","Mar","May","Jul","Sep","Nov","Now"].map((month) => <span key={month}>{month}</span>)}
      </div>
      <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
        {[["142","Deck Views"],["$420K","Raised"],["14","Investors"]].map(([v,l]) => (
          <div key={l}>
            <p className="text-lg font-bold text-gray-900">{v}</p>
            <p className="text-[10px] text-gray-400 font-medium mt-0.5">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdvisorsCard() {
  const people = [
    { initials:"SK", name:"Sarah Kim",        role:"CFO · SoftBank alum",      color:"#4f46e5", available:true  },
    { initials:"JR", name:"James Rodriguez",  role:"GTM Lead · 3 exits",       color:"#7C3AED", available:true  },
    { initials:"AT", name:"Aisha Tran",        role:"Legal · Tech specialist",  color:"#0891B2", available:false },
  ];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm max-w-sm w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Advisor Network</p>
          <p className="text-2xl font-bold text-gray-900">80+ Experts</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Avg rating</p>
          <p className="text-lg font-bold text-gray-900">4.9 ★</p>
        </div>
      </div>
      <div className="space-y-3">
        {people.map((p) => (
          <div key={p.name} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 transition-all duration-150">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: p.color }}>
                  {p.initials}
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${p.available ? "bg-green-500" : "bg-gray-300"}`} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{p.name}</p>
                <p className="text-xs text-gray-400">{p.role}</p>
              </div>
            </div>
            <button
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                p.available ? "" : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              style={p.available ? { background: "#4f46e5", color: "#fff" } : undefined}
            >
              {p.available ? "Book" : "Full"}
            </button>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-gray-400 text-center">Sessions typically within 24–48 hours</p>
    </div>
  );
}

function Spotlight({
  tag, headline, body, cta, flip, bg, children,
}: {
  tag: string; headline: string; body: string; cta: string;
  flip?: boolean; bg?: string; children: React.ReactNode;
}) {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className={`py-24 px-6 border-t border-gray-100 ${bg ?? "bg-white"}`}>
      <div className="max-w-5xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${flip ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: E }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-4">{tag}</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-5 leading-tight">{headline}</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-7">{body}</p>
            <a href="#waitlist" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              {cta} <ArrowRight size={14} />
            </a>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: E }}
            className="flex justify-center lg:justify-end"
          >
            {children}
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState("fundraising");

  const activeStrategy = STRATEGY_TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      <section id="features" ref={ref} style={{ background: "#fff", borderTop: "1px solid #e5e7eb", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: E }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4338ca", marginBottom: 16 }}>Platform</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#111827", margin: "0 0 16px" }}>Why Choose Wone?</h2>
            <p style={{ fontSize: 18, color: "#6b7280", lineHeight: 1.65, maxWidth: 560, margin: "0 auto" }}>
              Revolutionizing how startups, investors, and advisors connect and collaborate in the modern economy.
            </p>
          </m.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 80 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <m.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: E }}
                  whileHover={{ y: -6, boxShadow: `0 12px 32px ${f.color}18` }}
                  style={{
                    background: "#fff",
                    border: `1px solid #e5e7eb`,
                    borderRadius: 16,
                    padding: 32,
                    textAlign: "center",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    cursor: "default",
                    transition: "border-color 0.2s",
                  }}
                  className="group hover:border-gray-300"
                >
                  <m.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    style={{ width: 56, height: 56, borderRadius: 14, background: f.bg, border: `1px solid ${f.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}
                  >
                    <Icon size={26} style={{ color: f.color }} />
                  </m.div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#111827", margin: "0 0 10px" }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, margin: 0 }}>{f.body}</p>
                </m.div>
              );
            })}
          </div>

          {/* Tabbed Strategy Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3, ease: E }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4338ca", marginBottom: 12, textAlign: "center" }}>
              Deep Dive
            </p>
            <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#111827", margin: "0 0 32px", textAlign: "center" }}>
              Explore what Wone does for you.
            </h3>

            {/* Tab buttons */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 32, flexWrap: "wrap" }}>
              {STRATEGY_TABS.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 20px",
                      borderRadius: 12,
                      border: isActive ? `1.5px solid ${tab.color}` : "1.5px solid #e5e7eb",
                      background: isActive ? `${tab.color}10` : "#fff",
                      color: isActive ? tab.color : "#6b7280",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "color 0.15s, background 0.15s, border-color 0.15s",
                    }}
                  >
                    <TabIcon size={15} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <m.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: E }}
                style={{
                  background: "#fff",
                  border: `1px solid #e5e7eb`,
                  borderRadius: 20,
                  padding: 40,
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 48,
                  alignItems: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
                className="grid-cols-1 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16, padding: "4px 12px", borderRadius: 999, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", background: `${activeStrategy.color}12`, color: activeStrategy.color, border: `1px solid ${activeStrategy.color}25` }}>
                    {activeStrategy.label}
                  </div>
                  <h4 style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 800, color: "#111827", margin: "0 0 12px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    {activeStrategy.headline}
                  </h4>
                  <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 20 }}>
                    {activeStrategy.body}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {activeStrategy.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: activeStrategy.color, flexShrink: 0 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#waitlist"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: "#fff", background: activeStrategy.color, borderRadius: 12, padding: "12px 24px", textDecoration: "none", boxShadow: `0 4px 16px ${activeStrategy.color}35`, transition: "opacity 0.15s" }}
                  >
                    Get Access <ArrowRight size={15} />
                  </a>
                </div>

                {/* Metric highlight */}
                <div style={{ textAlign: "center", background: `${activeStrategy.color}08`, border: `1.5px solid ${activeStrategy.color}25`, borderRadius: 20, padding: "32px 28px", minWidth: 160 }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: activeStrategy.color, lineHeight: 1, letterSpacing: "-0.04em" }}>
                    {activeStrategy.metric.value}
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7280", marginTop: 8, fontWeight: 500, lineHeight: 1.4 }}>
                    {activeStrategy.metric.label}
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </m.div>
        </div>
      </section>

      <Spotlight
        tag="Real-Time Scorecards"
        headline="Know your round readiness before you raise."
        body="Wone's scoring engine analyzes your pitch, traction, and investor fit in real time — giving you a live score and specific recommendations before you ever send a deck."
        cta="See Scorecards in Action"
        bg="bg-white"
      >
        <ScorecardCard />
      </Spotlight>

      <Spotlight
        tag="Trend-Forecasting & Analytics"
        headline="AI-powered insights to time your raise perfectly."
        body="Wone surfaces market signals, benchmarks your round against comparable raises, and forecasts optimal timing — so you raise with conviction, not guesswork."
        cta="Explore Analytics"
        flip
        bg="bg-gray-50"
      >
        <AnalyticsCard />
      </Spotlight>

      <Spotlight
        tag="On-Demand Advisor Network"
        headline="Real guidance from operators who've been there."
        body="Book sessions with 80+ advisors — CFOs, GTM leads, legal specialists, and domain experts who've scaled companies just like yours. Book within 48 hours, no retainers."
        cta="Meet Our Advisors"
        bg="bg-white"
      >
        <AdvisorsCard />
      </Spotlight>
    </>
  );
}
