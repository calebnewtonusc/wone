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
    description: "Perfect for early-stage founders beginning their fundraising journey.",
    cta: "Start Free Trial",
    featured: false,
    features: [
      "Fundraising campaign builder",
      "Investor matching (up to 20)",
      "Pitch deck & data room hosting",
      "Basic analytics dashboard",
      "Community access",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    description: "For founders actively raising and ready to access the full network.",
    cta: "Get Early Access",
    featured: true,
    features: [
      "Everything in Starter",
      "Full investor network (200+)",
      "Real-time fundraising scorecards",
      "Trend forecasting & analytics",
      "On-demand advisor sessions (4/mo)",
      "SPV & deal structuring tools",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For accelerators, venture studios, and funds with multiple portfolio companies.",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Everything in Growth",
      "Unlimited portfolio companies",
      "White-label options",
      "Custom integrations & API",
      "Dedicated success manager",
      "SLA & compliance support",
      "Custom reporting & dashboards",
    ],
  },
];

export default function Pricing() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="bg-gray-50 py-28 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-gray-500 max-w-md mx-auto">
            No hidden fees. Cancel anytime. Free during beta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className={`relative flex flex-col rounded-2xl p-7 border ${
                plan.featured
                  ? "bg-blue-600 border-blue-600 shadow-xl shadow-blue-100"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm"
              } transition-all duration-200`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-gray-900 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 ${plan.featured ? "text-blue-200" : "text-gray-400"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                  {plan.period && <span className={`text-sm ${plan.featured ? "text-blue-200" : "text-gray-400"}`}>{plan.period}</span>}
                </div>
                <p className={`text-sm leading-relaxed ${plan.featured ? "text-blue-100" : "text-gray-500"}`}>{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.featured ? "text-blue-200" : "text-blue-600"}`} />
                    <span className={plan.featured ? "text-blue-50" : "text-gray-600"}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all duration-150 ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-gray-900 text-white hover:bg-gray-800"
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
