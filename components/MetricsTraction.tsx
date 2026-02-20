"use client";

import { useRef, useEffect, useState } from "react";
import { m, useInView } from "framer-motion";
import { TrendingUp, Users, DollarSign, Zap, Star, ArrowUpRight } from "lucide-react";
import { EASE, BRAND, ACCENT, BRAND_LT, BRAND_BR, DARK } from "@/lib/brand";

// Animated counter hook
function useCounter(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);

  return count;
}

type MetricItem = {
  icon: React.ElementType;
  color: string;
  bg: string;
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  sub: string;
  trend: string;
};

const METRICS: MetricItem[] = [
  {
    icon: Users,
    color: BRAND,
    bg: BRAND_LT,
    value: 50,
    suffix: "+",
    prefix: "",
    label: "Pilot Partners",
    sub: "SoCal founders in beta",
    trend: "+12 this month",
  },
  {
    icon: TrendingUp,
    color: "#059669",
    bg: "#ecfdf5",
    value: 200,
    suffix: "+",
    prefix: "",
    label: "Vetted Investors",
    sub: "Ready to deploy capital",
    trend: "+30 this quarter",
  },
  {
    icon: DollarSign,
    color: "#D97706",
    bg: "#fffbeb",
    value: 2,
    suffix: "M+",
    prefix: "$",
    label: "Capital Facilitated",
    sub: "Through early connections",
    trend: "↑ 340% vs last quarter",
  },
  {
    icon: Star,
    color: "#7C3AED",
    bg: "#f5f3ff",
    value: 80,
    suffix: "+",
    prefix: "",
    label: "Expert Advisors",
    sub: "Rated 4.9/5 average",
    trend: "Avg booking: 48hrs",
  },
  {
    icon: Zap,
    color: "#0891B2",
    bg: "#ecfeff",
    value: 14,
    suffix: "",
    prefix: "",
    label: "Avg Investor Matches",
    sub: "Per startup campaign",
    trend: "vs 2-3 cold outreach avg",
  },
  {
    icon: ArrowUpRight,
    color: "#DC2626",
    bg: "#fef2f2",
    value: 60,
    suffix: " days",
    prefix: "<",
    label: "Avg Time to Close",
    sub: "Seed rounds on platform",
    trend: "Industry avg: 4–6 months",
  },
];

function MetricCard({ metric, index, trigger }: { metric: MetricItem; index: number; trigger: boolean }) {
  const Icon = metric.icon;
  const count = useCounter(metric.value, 1500 + index * 100, trigger);

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-default"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
    >
      {/* Gradient top line */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, transparent, ${metric.color}, transparent)` }}
      />

      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: metric.bg, border: `1px solid ${metric.color}25` }}
        >
          <Icon size={18} style={{ color: metric.color }} />
        </div>
        <span
          className="text-[10px] font-semibold px-2 py-1 rounded-lg"
          style={{ color: metric.color, background: `${metric.color}12` }}
        >
          {metric.trend}
        </span>
      </div>

      <div className="mb-1">
        <span className="text-3xl font-black text-gray-900 tabular-nums tracking-tight">
          {metric.prefix}{count}{metric.suffix}
        </span>
      </div>
      <p className="text-sm font-bold text-gray-800 mb-1">{metric.label}</p>
      <p className="text-xs text-gray-400 leading-relaxed">{metric.sub}</p>
    </m.div>
  );
}

export default function MetricsTraction() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <section
      id="traction"
      ref={ref}
      className="py-28 px-6 border-t border-gray-100"
      style={{ background: "#fff" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <TrendingUp className="w-3.5 h-3.5" style={{ color: ACCENT }} />
            <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ACCENT }}>
              Traction
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5 leading-tight">
            The numbers speak<br />
            <span style={{ color: BRAND }}>for themselves.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Early traction from our beta cohort shows the platform is already delivering results before full launch.
          </p>
        </m.div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {METRICS.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} trigger={inView} />
          ))}
        </div>

        {/* Quote highlight */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
          style={{
            background: `linear-gradient(135deg, #1e1b4b 0%, ${DARK} 60%, #1e1b4b 100%)`,
          }}
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10">
            <div className="text-5xl font-black text-white/10 mb-4 leading-none">&ldquo;</div>
            <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed max-w-2xl mx-auto mb-6">
              Wone cut our investor outreach time in half. 14 qualified matches in the first week — investors who actually aligned with our stage, sector, and check size.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                SM
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Sara M.</p>
                <p className="text-indigo-300 text-xs">Co-founder & CEO — HealthTech Startup, Seed Stage</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-900 bg-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
              >
                Join 50+ SoCal Founders in Beta
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
