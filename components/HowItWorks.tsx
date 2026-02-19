"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { UserPlus, Rocket, TrendingUp } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const bars = [
  { h: 30, w: "W1" }, { h: 48, w: "W2" }, { h: 42, w: "W3" }, { h: 65, w: "W4" },
  { h: 58, w: "W5" }, { h: 80, w: "W6" }, { h: 72, w: "W7" }, { h: 95, w: "Now" },
];

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up & Build Your Profile",
    description:
      "Create your startup profile in minutes. Add your deck, traction metrics, funding targets, and team. Wone instantly calculates your fundraising readiness score and personalizes your experience.",
    detail: "Takes less than 10 minutes",
    visual: (
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-3">Profile Completeness</p>
        <div className="space-y-2.5">
          {[
            { label: "Pitch Deck",       pct: 100, color: "#2563EB" },
            { label: "Traction Metrics", pct: 85,  color: "#059669" },
            { label: "Team Bios",        pct: 100, color: "#2563EB" },
            { label: "Funding Targets",  pct: 60,  color: "#D97706" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-[9px] mb-1">
                <span className="text-gray-500 font-medium">{item.label}</span>
                <span className="font-bold" style={{ color: item.color }}>{item.pct}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] text-gray-400">Readiness Score</span>
          <span className="text-sm font-black text-blue-600">86 / 100</span>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: Rocket,
    title: "Launch Your Campaign",
    description:
      "Publish your round to 200+ vetted SoCal investors — filtered by stage, sector, and check size. Wone handles warm introductions so you spend time in conversations, not outreach.",
    detail: "Average 14 investor matches per campaign",
    visual: (
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-3">Investor Matches</p>
        {[
          { initials: "AC", name: "Andreessen Capital", match: "98%", color: "#2563EB" },
          { initials: "SK", name: "Sarah Kim · Angel",   match: "94%", color: "#7C3AED" },
          { initials: "SV", name: "SoCal Ventures",      match: "91%", color: "#0891B2" },
        ].map((inv) => (
          <div key={inv.name} className="flex items-center justify-between py-2 border-t border-gray-50 first:border-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[8px] font-bold" style={{ background: inv.color }}>
                {inv.initials}
              </div>
              <span className="text-[10px] font-semibold text-gray-800">{inv.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-green-600">{inv.match}</span>
              <button className="text-[8px] font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded">Intro</button>
            </div>
          </div>
        ))}
        <p className="text-[9px] text-blue-600 font-semibold mt-2 text-center">+ 11 more matches waiting</p>
      </div>
    ),
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Close & Scale",
    description:
      "Track investor engagement live, book advisor sessions on demand, and close with built-in SPV tooling. After your raise, use Wone's analytics to plan what comes next.",
    detail: "Most founders close in under 60 days",
    visual: (
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-3">Round Progress</p>
        <div className="flex items-end gap-1 h-16 mb-3">
          {bars.map((bar, i) => (
            <div
              key={bar.w}
              className="flex-1 rounded-sm"
              style={{ height: `${bar.h}%`, background: i === 7 ? "#2563EB" : `rgba(37,99,235,${0.15 + i * 0.1})` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-gray-300 font-medium mb-3">
          {bars.map((bar) => <span key={bar.w}>{bar.w}</span>)}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-lg p-2 text-center">
            <p className="text-base font-black text-gray-900">$420K</p>
            <p className="text-[9px] text-gray-400 font-medium">Committed</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-center">
            <p className="text-base font-black text-blue-700">Day 38</p>
            <p className="text-[9px] text-blue-500 font-medium">Into Round</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="bg-white py-28 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-20"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            From signup to funded.
          </h2>
        </m.div>

        <div className="space-y-16">
          {steps.map((step, i) => {
            const Icon  = step.icon;
            const isOdd = i % 2 !== 0;
            return (
              <m.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: EASE }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isOdd ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-300">{step.number}</span>
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                      {step.detail}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed">{step.description}</p>
                </div>
                <div>{step.visual}</div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
