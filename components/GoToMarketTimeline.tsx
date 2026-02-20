"use client";

import { useState, useRef } from "react";
import { m, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Clock, Rocket, Users, TrendingUp, Globe, ChevronDown } from "lucide-react";
import { EASE, BRAND, ACCENT, BRAND_LT, BRAND_BR } from "@/lib/brand";

type Phase = {
  id: string;
  quarter: string;
  label: string;
  status: "done" | "active" | "upcoming";
  icon: React.ElementType;
  color: string;
  description: string;
  milestones: string[];
  metric?: { label: string; value: string };
};

const PHASES: Phase[] = [
  {
    id: "q4-25",
    quarter: "Q4 2025",
    label: "Foundation",
    status: "done",
    icon: CheckCircle2,
    color: "#059669",
    description: "Platform architecture built, investor network seeded, and first pilot founders onboarded.",
    milestones: [
      "Core platform developed",
      "50+ investors vetted and onboarded",
      "10 pilot founders accepted",
      "Advisor network established",
    ],
    metric: { label: "Investors Vetted", value: "50+" },
  },
  {
    id: "q1-26",
    quarter: "Q1 2026",
    label: "Beta Launch",
    status: "active",
    icon: Rocket,
    color: BRAND,
    description: "Private beta opens to select SoCal founders. AI matching engine goes live. Real-time scorecards activated.",
    milestones: [
      "Private beta cohort (50 founders)",
      "Investor matching engine live",
      "Real-time scorecards activated",
      "Grant matching v1 deployed",
    ],
    metric: { label: "Beta Founders", value: "50" },
  },
  {
    id: "q2-26",
    quarter: "Q2 2026",
    label: "Public Launch",
    status: "upcoming",
    icon: Globe,
    color: "#7C3AED",
    description: "Full public launch with all three SoCal markets active. Paid plans introduced. SPV tools live.",
    milestones: [
      "Open to all SoCal founders",
      "Paid plans activated",
      "SPV deal structuring tools",
      "LA, OC, SD markets fully covered",
    ],
    metric: { label: "Target Founders", value: "500+" },
  },
  {
    id: "q3-26",
    quarter: "Q3 2026",
    label: "Scale",
    status: "upcoming",
    icon: TrendingUp,
    color: "#D97706",
    description: "Series A fundraising feature set complete. Enterprise tier for accelerators and studios launches.",
    milestones: [
      "Series A toolkit complete",
      "Enterprise / accelerator tier",
      "Advanced analytics dashboard",
      "API integrations live",
    ],
    metric: { label: "ARR Target", value: "$500K" },
  },
  {
    id: "q4-26",
    quarter: "Q4 2026",
    label: "Expand",
    status: "upcoming",
    icon: Users,
    color: "#0891B2",
    description: "Geographic expansion beyond SoCal. National investor network. $10M+ in founder capital facilitated.",
    milestones: [
      "Bay Area & Austin expansion",
      "500+ investors in network",
      "$10M+ facilitated",
      "Series A for Wone",
    ],
    metric: { label: "Capital Facilitated", value: "$10M+" },
  },
];

function PhaseCard({ phase, index, isOpen, onClick }: {
  phase: Phase;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  const Icon = phase.icon;

  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
      className="relative"
    >
      {/* Connector line */}
      {index < PHASES.length - 1 && (
        <div
          className="absolute top-7 left-7 w-0.5 hidden md:block"
          style={{
            height: "calc(100% + 16px)",
            background: phase.status === "done"
              ? "#10b981"
              : "linear-gradient(to bottom, #e5e7eb, #e5e7eb)",
            zIndex: 0,
          }}
        />
      )}

      <button
        onClick={onClick}
        className="relative z-10 w-full text-left group"
        aria-expanded={isOpen}
      >
        <div
          className="flex items-start gap-4 p-4 rounded-2xl border transition-all duration-200"
          style={{
            background: isOpen ? `${phase.color}08` : "#fff",
            borderColor: isOpen ? phase.color : "#e5e7eb",
            boxShadow: isOpen ? `0 0 0 1px ${phase.color}30` : undefined,
          }}
        >
          {/* Icon */}
          <div
            className="flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center gap-0.5 border"
            style={{
              background: phase.status === "upcoming" ? "#f9fafb" : `${phase.color}15`,
              borderColor: phase.status === "upcoming" ? "#e5e7eb" : `${phase.color}30`,
            }}
          >
            {phase.status === "done" ? (
              <CheckCircle2 size={20} style={{ color: phase.color }} />
            ) : phase.status === "active" ? (
              <m.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon size={20} style={{ color: phase.color }} />
              </m.div>
            ) : (
              <Icon size={20} className="text-gray-300" />
            )}
            <span
              className="text-[8px] font-bold uppercase tracking-wider"
              style={{ color: phase.status === "upcoming" ? "#9ca3af" : phase.color }}
            >
              {phase.status === "done" ? "Done" : phase.status === "active" ? "Live" : "Soon"}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: phase.color }}>
                  {phase.quarter}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-tight">{phase.label}</h3>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {phase.metric && (
                  <div
                    className="text-center px-2.5 py-1.5 rounded-xl border"
                    style={{ background: `${phase.color}10`, borderColor: `${phase.color}25` }}
                  >
                    <p className="text-sm font-black" style={{ color: phase.color }}>{phase.metric.value}</p>
                    <p className="text-[8px] text-gray-400 font-medium uppercase tracking-wider">{phase.metric.label}</p>
                  </div>
                )}
                <m.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} className="text-gray-400" />
                </m.div>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{phase.description}</p>
          </div>
        </div>

        {/* Expanded milestones */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              style={{ overflow: "hidden" }}
            >
              <div className="ml-18 mt-2 mb-2 pl-4 border-l-2" style={{ borderColor: `${phase.color}40`, marginLeft: 72 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-2">
                  {phase.milestones.map((m2, mi) => (
                    <div key={mi} className="flex items-center gap-2 text-sm">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: phase.status === "done" ? phase.color : "#d1d5db" }}
                      />
                      <span className={phase.status === "done" ? "text-gray-700 line-through opacity-60" : "text-gray-700"}>
                        {m2}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </button>
    </m.div>
  );
}

export default function GoToMarketTimeline() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });
  const [openPhase, setOpenPhase] = useState<string>("q1-26");

  const activeIndex = PHASES.findIndex((p) => p.status === "active");
  const progress = ((activeIndex + 0.5) / PHASES.length) * 100;

  return (
    <section
      id="roadmap"
      ref={ref}
      className="py-28 px-6 border-t border-gray-100"
      style={{ background: "#f9fafb" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Clock className="w-3.5 h-3.5" style={{ color: ACCENT }} />
            <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ACCENT }}>
              Roadmap
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Go-to-Market <span style={{ color: BRAND }}>Roadmap.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            From foundation to full launch — every milestone mapped out. Click any phase to expand details.
          </p>
        </m.div>

        {/* Progress bar */}
        <m.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="mb-8 p-4 bg-white rounded-2xl border border-gray-200"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Overall Progress</span>
            <span className="text-xs font-bold" style={{ color: BRAND }}>{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <m.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${progress}%` } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(to right, #059669, ${BRAND})` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {PHASES.map((p) => (
              <span
                key={p.id}
                className="text-[9px] font-medium"
                style={{ color: p.status === "done" ? "#059669" : p.status === "active" ? BRAND : "#d1d5db" }}
              >
                {p.quarter.split(" ")[0]}
              </span>
            ))}
          </div>
        </m.div>

        {/* Phase cards */}
        <div className="space-y-3">
          {PHASES.map((phase, i) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              index={i}
              isOpen={openPhase === phase.id}
              onClick={() => setOpenPhase(openPhase === phase.id ? "" : phase.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="mt-10 text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border mb-4"
            style={{ background: BRAND_LT, borderColor: BRAND_BR }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold" style={{ color: ACCENT }}>
              Beta is live — join the Q1 2026 cohort now
            </span>
          </div>
          <br />
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
            style={{ background: BRAND }}
          >
            Secure Your Beta Spot
          </a>
        </m.div>
      </div>
    </section>
  );
}
