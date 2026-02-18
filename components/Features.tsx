"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Users, Zap, LineChart, Shield, Globe } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Fundraising Scorecards",
    description:
      "Track every metric that matters. Wone gives founders live dashboards showing investor pipeline, conversion rates, and round progress — so you always know where you stand.",
  },
  {
    icon: Users,
    title: "Curated Investor Network",
    description:
      "Access 200+ vetted angels, VCs, and corporate strategics across Southern California. Filter by stage, check size, and sector to find the right partners faster.",
  },
  {
    icon: LineChart,
    title: "Trend Forecasting & Analytics",
    description:
      "Predictive intelligence built for founders. Identify market timing, benchmark against comparable rounds, and surface insights to sharpen your pitch narrative.",
  },
  {
    icon: Zap,
    title: "On-Demand Advisor Network",
    description:
      "Book sessions with operators, lawyers, and domain experts who've been in your shoes. No generic advice — real guidance from people who've scaled companies.",
  },
  {
    icon: Shield,
    title: "SPV & Deal Structuring",
    description:
      "Streamline your cap table with built-in SPV tooling. Wone handles the infrastructure so you can focus on building, not paperwork.",
  },
  {
    icon: Globe,
    title: "Founder Community",
    description:
      "Join a vetted network of SoCal founders. Share learnings, co-invest, find co-founders, and get warm intros to the people who can actually move the needle.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: EASE },
  }),
};

export default function Features() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="relative py-28 px-6 overflow-hidden" style={{ background: "#000" }}>
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-[#222]" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">Platform Features</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Everything your startup needs
            <br />
            <span className="text-[#71717a]">to go from idea to funded.</span>
          </h2>
          <p className="text-base text-[#71717a] max-w-xl mx-auto">
            Wone replaces the fragmented stack of tools founders use with one unified platform built for the SoCal ecosystem.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group relative p-6 rounded-2xl border border-[#1a1a1a] hover:border-[#2a2a2a] transition-all duration-200"
                style={{ background: "#0a0a0a" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)" }}
                >
                  <Icon size={18} className="text-blue-500" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-[#71717a] leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
