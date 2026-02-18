"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "For early-stage founders just getting started on their fundraising journey.",
    cta: "Start Free Trial",
    featured: false,
    features: [
      "Fundraising campaign builder",
      "Basic investor matching (up to 20)",
      "Pitch deck hosting",
      "Email support",
      "Community access",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    description: "For serious founders actively raising and ready to scale their network.",
    cta: "Get Early Access",
    featured: true,
    features: [
      "Everything in Starter",
      "Full investor network (200+)",
      "Real-time fundraising scorecards",
      "On-demand advisor sessions (4/mo)",
      "SPV & deal structuring tools",
      "Trend forecasting & analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For accelerators, venture studios, and funds managing multiple portfolios.",
    cta: "Contact Us",
    featured: false,
    features: [
      "Everything in Growth",
      "Unlimited portfolio companies",
      "White-label options",
      "Custom integrations & API",
      "Dedicated success manager",
      "SLA & compliance support",
      "Custom reporting",
    ],
  },
];

export default function Pricing() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#000", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Simple, transparent pricing.
          </h2>
          <p className="text-base text-[#71717a] max-w-md mx-auto">
            No hidden fees. No lock-in contracts. Cancel anytime.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              className={`relative flex flex-col rounded-2xl p-7 border ${
                plan.featured ? "border-blue-500/50" : "border-[#1a1a1a]"
              }`}
              style={{
                background: plan.featured ? "linear-gradient(180deg, rgba(37,99,235,0.08) 0%, #0a0a0a 100%)" : "#0a0a0a",
              }}
            >
              {plan.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-0.5 rounded-b-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-[#a1a1aa] uppercase tracking-wider mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-sm text-[#52525b]">{plan.period}</span>}
                </div>
                <p className="text-sm text-[#71717a] leading-relaxed">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-2.5 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-[#a1a1aa]">
                    <Check size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all duration-150 ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border border-[#222] hover:border-[#333] text-white hover:bg-white/4"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
