"use client";

import { useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import { Check } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const plans = [
  {
    name: "Starter",
    monthlyPrice: 99,
    annualPrice: 79,
    period: "/month",
    description: "For early-stage founders beginning their fundraising journey.",
    cta: "Start Free Trial",
    ctaHref: "#waitlist",
    featured: false,
    features: [
      "Fundraising campaign builder",
      "Investor matching (up to 20)",
      "Pitch deck & data room hosting",
      "Fundraising readiness scorecard",
      "Community forum access",
      "Email support",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 299,
    annualPrice: 239,
    period: "/month",
    description: "For founders actively raising who need the full platform.",
    cta: "Get Early Access",
    ctaHref: "#waitlist",
    featured: true,
    features: [
      "Everything in Starter",
      "Full investor network (200+)",
      "Live fundraising scorecards",
      "Trend forecasting & analytics",
      "Advisor sessions (4/month)",
      "SPV & deal structuring tools",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    period: "",
    description: "For accelerators, studios, and funds managing multiple startups.",
    cta: "Contact Sales",
    ctaHref: "#contact",
    featured: false,
    features: [
      "Everything in Growth",
      "Unlimited portfolio companies",
      "White-label options",
      "Custom API integrations",
      "Dedicated success manager",
      "SLA & compliance support",
      "Custom reporting",
    ],
  },
];

export default function Pricing() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" ref={ref} className="bg-gray-50 py-28 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-gray-500 max-w-md mx-auto">No hidden fees. Cancel anytime.</p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 text-center mb-8"
        >
          <p className="text-sm font-bold text-blue-900 mb-1">
            All plans are <span className="underline">free during our Q2 2026 beta</span>.
          </p>
          <p className="text-sm text-blue-700">
            No credit card required. Apply for early access and lock in your rate before launch.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className={`text-sm font-semibold ${!annual ? "text-gray-900" : "text-gray-400"}`}>Monthly</span>
          <button
            onClick={() => setAnnual((a) => !a)}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${annual ? "bg-indigo-600" : "bg-gray-200"}`}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${annual ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
          <span className={`text-sm font-semibold ${annual ? "text-gray-900" : "text-gray-400"}`}>
            Annual
            <span className="ml-1.5 text-[10px] font-bold text-green-700 bg-green-50 border border-green-100 px-1.5 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => {
            const price = plan.monthlyPrice === null ? null : annual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <m.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.09, ease: EASE }}
                className={`relative flex flex-col rounded-2xl p-7 transition-all duration-200 ${
                  plan.featured
                    ? "ring-2 ring-indigo-700 ring-offset-2 ring-offset-gray-50 shadow-lg shadow-indigo-100"
                    : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                }`}
                style={plan.featured ? { background: "#312e81" } : undefined}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gray-900 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-7">
                  <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${plan.featured ? "text-indigo-200" : "text-gray-400"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-3">
                    {price === null ? (
                      <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}>Custom</span>
                    ) : (
                      <>
                        <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}>${price}</span>
                        <span className={`text-sm ${plan.featured ? "text-indigo-200" : "text-gray-400"}`}>/mo{annual ? " billed annually" : ""}</span>
                      </>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.featured ? "text-indigo-100" : "text-gray-500"}`}>{plan.description}</p>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.featured ? "text-indigo-200" : "text-indigo-600"}`} />
                      <span className={plan.featured ? "text-indigo-50" : "text-gray-600"}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaHref}
                  className={`block text-center text-sm font-semibold py-3 rounded-xl transition-colors duration-150 ${
                    plan.featured
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </m.div>
            );
          })}
        </div>

        <m.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          All plans are free during beta. Paid pricing applies at general availability.
        </m.p>
      </div>
    </section>
  );
}
