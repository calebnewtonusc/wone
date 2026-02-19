"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { BarChart3, Users, LineChart, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";

const E: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
  { icon: BarChart3, color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE", title: "Transparent Fundraising", body: "Live campaign tracking, data room management, and round analytics. Every metric that matters, in one dashboard." },
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
        <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex flex-col items-center justify-center">
          <span className="text-xl">✓</span>
          <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide mt-0.5">Ready</span>
        </div>
      </div>
      <div className="space-y-4">
        {[
          { label: "Investor Fit",  pct: 96, color: "#2563EB" },
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
        <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full">This Quarter</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-28 mt-4 mb-2" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#ag)" />
        <path d={path} fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={x(pts.length - 1)} cy={y(pts[pts.length - 1])} r="4" fill="#2563EB" />
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
    { initials:"SK", name:"Sarah Kim",        role:"CFO · SoftBank alum",      color:"#2563EB", available:true  },
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
                p.available ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
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
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">{tag}</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-5 leading-tight">{headline}</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-7">{body}</p>
            <a href="#waitlist" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
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

  return (
    <>
      <section id="features" ref={ref} className="bg-gray-50 py-28 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: E }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Platform</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Why Choose Wone?</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              The full stack for SoCal founders — fundraising tools, investor access, analytics, and expert guidance in one place.
            </p>
          </m.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <m.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: E }}
                  className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-2xl p-6 transition-all duration-200 cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border" style={{ background: f.bg, borderColor: f.border }}>
                    <Icon size={20} style={{ color: f.color }} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
                </m.div>
              );
            })}
          </div>
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
