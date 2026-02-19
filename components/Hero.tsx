"use client";

import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Animated number counter ── */
function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const dur = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    const id = setTimeout(() => requestAnimationFrame(tick), 600);
    return () => clearTimeout(id);
  }, [to]);
  return <>{prefix}{val}{suffix}</>;
}

/* ── Score gauge (SVG semicircle) with draw-in animation ── */
function ScoreGauge({ score }: { score: number }) {
  const r = 28, cx = 40, cy = 44;
  const arcLen = Math.PI * r;
  const filled = (score / 100) * arcLen;
  return (
    <svg viewBox="0 0 80 50" className="w-full h-full">
      <path
        d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none" stroke="#E5E7EB" strokeWidth="5.5" strokeLinecap="round"
      />
      <m.path
        d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none" stroke="#4f46e5" strokeWidth="5.5" strokeLinecap="round"
        initial={{ strokeDasharray: `0 ${arcLen}` }}
        animate={{ strokeDasharray: `${filled} ${arcLen}` }}
        transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
      <text x={cx} y={cy - 5} textAnchor="middle" fill="#111827" fontSize="16" fontWeight="800">
        {score}
      </text>
      <text x={cx} y={cy + 6} textAnchor="middle" fill="#9CA3AF" fontSize="7">
        /100
      </text>
    </svg>
  );
}

/* ── Full dashboard mockup ── */
function DashboardMockup() {
  const matches = [
    { name: "Alta Capital",   type: "Series A–C VC",  pct: "98", color: "#4f46e5" },
    { name: "Sarah Kim",      type: "Angel Investor",  pct: "94", color: "#7C3AED" },
    { name: "SoCal Ventures", type: "Regional VC",     pct: "91", color: "#0891B2" },
  ];

  return (
    <div aria-hidden="true" className="relative" style={{ width: 490, maxWidth: "100%" }}>
      <m.div
        initial={{ opacity: 0, y: 32, rotateX: 10, rotateY: -7 }}
        animate={{ opacity: 1, y: 0,  rotateX: 2,  rotateY: -3 }}
        transition={{ duration: 1.1, delay: 0.25, ease: E }}
        style={{ transformStyle: "preserve-3d", perspective: 1200 }}
        className="rounded-2xl overflow-hidden shadow-[0_24px_64px_-12px_rgba(0,0,0,0.18)] border border-gray-200/80 bg-white"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 h-9 bg-[#F2F2F2] border-b border-gray-200">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <div className="flex-1 mx-2.5 bg-white border border-gray-200/80 rounded h-5 flex items-center px-2.5">
            <span className="text-[9px] text-gray-400 font-mono truncate">app.woneportal.com/dashboard</span>
          </div>
        </div>
        {/* App nav */}
        <div className="flex items-center justify-between px-4 h-10 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-indigo-700 flex items-center justify-center">
              <span className="text-white font-black text-[8px]">W</span>
            </div>
            <span className="text-[11px] font-bold text-gray-900">Wone</span>
          </div>
          <div className="flex items-center gap-3.5 text-[10px] font-medium text-gray-400">
            <span className="text-indigo-600 font-semibold border-b border-indigo-600 pb-px">Dashboard</span>
            <span>Investors</span><span>Analytics</span><span>Advisors</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 text-xs">🔔</div>
            <div className="w-6 h-6 rounded-full bg-indigo-700 flex items-center justify-center text-white text-[9px] font-bold">TC</div>
          </div>
        </div>
        {/* Dashboard body */}
        <div className="p-4 bg-[#F7F8FA]">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[9px] text-gray-400 font-medium">Welcome back,</p>
              <p className="text-sm font-bold text-gray-900">TechVenture Co.</p>
            </div>
            <span className="text-[9px] font-semibold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Seed Round Active
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2.5">
            <div className="bg-white rounded-xl border border-gray-200 p-3 flex flex-col items-center">
              <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Round Score</p>
              <div className="w-full" style={{ height: 52 }}><ScoreGauge score={94} /></div>
              <p className="text-[9px] text-green-600 font-semibold flex items-center gap-0.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />Ready
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Investor Views</p>
              <p className="text-[22px] font-black text-gray-900 leading-none"><Counter to={47} /></p>
              <p className="text-[9px] text-indigo-600 font-semibold mt-1">+12 this week</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-3">
              <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Capital Raised</p>
              <p className="text-[22px] font-black text-gray-900 leading-none">$<Counter to={420} suffix="K" /></p>
              <p className="text-[9px] text-green-600 font-semibold mt-1">↑ 23% MTM</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-3">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[10px] font-bold text-gray-800">Top Investor Matches</p>
              <button className="text-[9px] text-indigo-600 font-semibold">View all →</button>
            </div>
            <div className="space-y-2">
              {matches.map((match, i) => (
                <div key={match.name} className={`flex items-center justify-between ${i > 0 ? "pt-2 border-t border-gray-50" : ""}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-[8px] font-bold" style={{ background: match.color }}>
                      {match.name[0]}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-900 leading-none">{match.name}</p>
                      <p className="text-[8px] text-gray-400 leading-none mt-0.5">{match.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-green-600">{match.pct}%</span>
                    <button className="text-[8px] font-bold text-white bg-indigo-600 px-2 py-0.5 rounded-md">Connect</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </m.div>

      {/* Floating badge — top right */}
      <m.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8, x: 16 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.1, ease: E }}
        className="absolute -right-4 top-24 z-20"
      >
        <div className="bg-white rounded-xl border border-gray-200 shadow-xl p-2.5 flex items-center gap-2.5 min-w-[158px]">
          <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 text-base">🎯</div>
          <div>
            <p className="text-[11px] font-bold text-gray-900">New Match!</p>
            <p className="text-[9px] text-gray-400">SoCal VC · 97% fit</p>
          </div>
        </div>
      </m.div>

      {/* Floating badge — bottom left */}
      <m.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8, x: -16 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.3, ease: E }}
        className="absolute -left-4 bottom-24 z-20"
      >
        <div className="bg-white rounded-xl border border-gray-200 shadow-xl p-2.5">
          <p className="text-[9px] font-medium text-gray-400 mb-1.5">Pitch Quality</p>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-20 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-violet-600 rounded-full" style={{ width: "87%" }} />
            </div>
            <span className="text-[10px] font-bold text-gray-900">87%</span>
          </div>
        </div>
      </m.div>
    </div>
  );
}

/* ── Mobile preview card ── */
function MobilePreview() {
  return (
    <m.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: E }}
      className="lg:hidden mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
    >
      <div className="flex items-center gap-1.5 px-4 h-8 bg-[#F2F2F2] border-b border-gray-200">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[9px] text-gray-400 font-mono ml-2">app.woneportal.com</span>
      </div>
      <div className="p-4 bg-[#F7F8FA]">
        <div className="grid grid-cols-2 gap-2.5 mb-2.5">
          <div className="bg-white rounded-xl border border-gray-200 p-3.5 text-center">
            <p className="text-2xl font-black text-gray-900 leading-none">94</p>
            <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider mt-1">Round Score</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-3.5 text-center">
            <p className="text-2xl font-black text-gray-900 leading-none">47</p>
            <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider mt-1">Investor Views</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-3.5 text-center">
            <p className="text-2xl font-black text-gray-900 leading-none">$420K</p>
            <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider mt-1">Capital Raised</p>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-3.5 text-center">
            <p className="text-sm font-black text-green-700">✓ Ready</p>
            <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider mt-1">Round Status</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-3">
          <p className="text-[10px] font-bold text-gray-700 mb-2">Top Matches</p>
          {[
            { name: "Alta Capital",   pct: "98%", color: "#4f46e5" },
            { name: "SoCal Ventures", pct: "91%", color: "#0891B2" },
          ].map((inv) => (
            <div key={inv.name} className="flex items-center justify-between py-1.5 border-t border-gray-50 first:border-0">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[8px] font-bold" style={{ background: inv.color }}>{inv.name[0]}</div>
                <p className="text-[10px] font-semibold text-gray-800">{inv.name}</p>
              </div>
              <span className="text-[10px] font-bold text-green-600">{inv.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 40%, #fdf4ff 70%, #ffffff 100%)" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: "radial-gradient(#4f46e5, transparent 70%)" }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          {/* Left: copy */}
          <div className="max-w-lg">
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: E }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                🚀 Now in Beta — Join the Waitlist
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07, ease: E }}
              className="text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold tracking-[-0.03em] leading-[1.04] text-gray-950 mb-5"
            >
              The All-in-One<br />
              <span className="text-indigo-600">Startup Launchpad.</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: E }}
              className="text-lg text-gray-500 leading-relaxed mb-8"
            >
              A unified ecosystem where founders showcase progress, connect with expert advisors, and raise capital transparently. The future of startup acceleration is here.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: E }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm"
                style={{ background: "#312e81" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#1e1b4b")}
                onMouseLeave={e => (e.currentTarget.style.background = "#312e81")}
              >
                Request a Demo <ArrowRight size={15} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 px-6 py-3.5 rounded-xl transition-all"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-700 flex items-center justify-center flex-shrink-0">
                  <svg width="7" height="8" viewBox="0 0 7 8" fill="white"><path d="M0 0.5L7 4L0 7.5V0.5Z" /></svg>
                </div>
                Watch Overview
              </a>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: E }}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <span className="text-green-600 font-semibold">✓</span>
              <span>Trusted by 50+ pilot partners</span>
            </m.div>

            <MobilePreview />
          </div>

          {/* Right: desktop dashboard */}
          <div className="hidden lg:flex justify-end items-center">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Ecosystem strip */}
      <div className="border-t border-indigo-100/60 bg-white/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-300 w-full sm:w-auto text-center">
              Part of the SoCal startup ecosystem
            </p>
            {["Techstars LA", "USC Marshall", "UCLA Anderson", "UCI Beall", "LACI"].map((n) => (
              <span key={n} className="text-sm font-semibold text-gray-300">{n}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
