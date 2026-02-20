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
    <section
      id="pricing"
      ref={ref}
      style={{ background: "#f9fafb", borderTop: "1px solid #f3f4f6", padding: "112px 24px" }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4338ca", marginBottom: 12 }}>
            Pricing
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#111827", margin: "0 0 16px" }}>
            Simple, transparent pricing.
          </h2>
          <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 400, margin: "0 auto" }}>No hidden fees. Cancel anytime.</p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          style={{ background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: 16, padding: 20, textAlign: "center", marginBottom: 32 }}
        >
          <p style={{ fontSize: 14, fontWeight: 700, color: "#1e1b4b", marginBottom: 4 }}>
            All plans are <span style={{ textDecoration: "underline" }}>free during our Q2 2026 beta</span>.
          </p>
          <p style={{ fontSize: 14, color: "#4338ca" }}>
            No credit card required. Apply for early access and lock in your rate before launch.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 40 }}
        >
          <span style={{ fontSize: 14, fontWeight: 600, color: !annual ? "#111827" : "#9ca3af" }}>Monthly</span>
          <button
            onClick={() => setAnnual((a) => !a)}
            style={{
              position: "relative",
              width: 44,
              height: 24,
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s",
              background: annual ? "#4f46e5" : "#e5e7eb",
            }}
            aria-label="Toggle annual billing"
          >
            <span
              style={{
                position: "absolute",
                top: 2,
                left: 2,
                width: 20,
                height: 20,
                background: "#fff",
                borderRadius: "50%",
                boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                transition: "transform 0.2s",
                transform: annual ? "translateX(20px)" : "translateX(0)",
              }}
            />
          </button>
          <span style={{ fontSize: 14, fontWeight: 600, color: annual ? "#111827" : "#9ca3af" }}>
            Annual
            <span style={{ marginLeft: 6, fontSize: 10, fontWeight: 700, color: "#15803d", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "2px 6px", borderRadius: 999 }}>
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
                whileHover={!plan.featured ? { y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" } : { y: -4 }}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 16,
                  padding: 28,
                  background: plan.featured ? "#312e81" : "#fff",
                  border: plan.featured ? "none" : "1px solid #e5e7eb",
                  boxShadow: plan.featured ? "0 8px 40px rgba(49,46,129,0.3), 0 0 0 2px #4338ca" : "0 1px 4px rgba(0,0,0,0.05)",
                  cursor: "default",
                }}
              >
                {plan.featured && (
                  <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                    <span style={{ background: "#111827", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 999 }}>
                      Most Popular
                    </span>
                  </div>
                )}
                <div style={{ marginBottom: 28 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12, color: plan.featured ? "#c7d2fe" : "#9ca3af" }}>
                    {plan.name}
                  </p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                    {price === null ? (
                      <span style={{ fontSize: 36, fontWeight: 700, color: plan.featured ? "#fff" : "#111827" }}>Custom</span>
                    ) : (
                      <>
                        <span style={{ fontSize: 36, fontWeight: 700, color: plan.featured ? "#fff" : "#111827" }}>${price}</span>
                        <span style={{ fontSize: 14, color: plan.featured ? "#c7d2fe" : "#9ca3af" }}>/mo{annual ? " billed annually" : ""}</span>
                      </>
                    )}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: plan.featured ? "#e0e7ff" : "#6b7280" }}>{plan.description}</p>
                </div>
                <ul style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                  {plan.features.map((feat) => (
                    <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
                      <Check size={14} style={{ marginTop: 2, flexShrink: 0, color: plan.featured ? "#c7d2fe" : "#4f46e5" }} />
                      <span style={{ color: plan.featured ? "#e0e7ff" : "#374151" }}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaHref}
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "12px 0",
                    borderRadius: 12,
                    textDecoration: "none",
                    background: plan.featured ? "#fff" : "#111827",
                    color: plan.featured ? "#312e81" : "#fff",
                  }}
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
          style={{ textAlign: "center", fontSize: 14, color: "#9ca3af", marginTop: 32 }}
        >
          All plans are free during beta. Paid pricing applies at general availability.
        </m.p>
      </div>
    </section>
  );
}
