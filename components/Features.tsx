"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Users, TrendingUp, LineChart, Shield, Zap } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const features = [
  {
    icon: BarChart3,
    title: "Transparent Fundraising",
    description:
      "Launch a fully transparent fundraising campaign with live investor tracking, data room management, and real-time round progress — all in one place.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Book on-demand sessions with advisors who've built and scaled companies. Get domain-specific guidance from operators, not generalists.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Scorecards",
    description:
      "Track every KPI that matters to investors. Wone surfaces milestones, conversion data, and engagement metrics on a single live dashboard.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "AI-powered trend forecasting helps you time your raise, benchmark valuations, and identify emerging market opportunities before the competition.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Identify and mitigate fundraising risks early. Wone's intelligence layer flags gaps in your pitch, cap table, and investor fit before they become problems.",
  },
  {
    icon: Zap,
    title: "Integrated Ecosystem",
    description:
      "Connect with investors, co-founders, legal partners, and other SoCal founders through Wone's curated network. One platform, zero silos.",
  },
];

export default function Features() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="bg-gray-50 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4">Platform Features</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
            Why Choose Wone?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Everything a SoCal founder needs to go from idea to funded — built into one platform.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
