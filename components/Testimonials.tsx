"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    quote:
      "Wone cut our investor outreach time in half. We had 14 qualified matches in our first week — investors actually aligned with our stage, sector, and check size. We'd been grinding LinkedIn cold outreach for months before this.",
    name: "Sara M.",
    title: "Co-founder & CEO",
    company: "HealthTech startup, Seed stage",
    initials: "SM",
    color: "#4f46e5",
    score: { label: "Investor Fit Score", value: "96%" },
  },
  {
    quote:
      "The fundraising scorecard was a wake-up call — in the best way. It showed me exactly why my deck was getting ignored. Our market sizing slide was too vague. Fixed it, updated my profile, and had three callbacks within a week.",
    name: "Marcus T.",
    title: "Founder",
    company: "DTC Consumer Brand, Pre-seed",
    initials: "MT",
    color: "#7c3aed",
    score: { label: "Pitch Quality", value: "↑ 31pts" },
  },
  {
    quote:
      "Having an advisor on-demand was the difference. I had a term sheet question at 9pm before a board meeting the next morning. Booked a session in 20 minutes with a former CFO and got the clarity I needed. Nothing else on the market offers that.",
    name: "Priya N.",
    title: "CEO & Co-founder",
    company: "B2B SaaS, Series A prep",
    initials: "PN",
    color: "#0891b2",
    score: { label: "Round Closed", value: "$1.2M" },
  },
];

export default function Testimonials() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ background: "#fff", borderTop: "1px solid #f3f4f6", padding: "112px 24px" }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4338ca", marginBottom: 12 }}>
            Early Access Founders
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#111827", margin: "0 0 16px" }}>
            Built for founders who move fast.
          </h2>
          <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
            Here&apos;s what our beta cohort had to say after their first 30 days on the platform.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <m.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -6, boxShadow: `0 16px 40px ${t.color}15` }}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 20,
                padding: 32,
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                cursor: "default",
                transition: "border-color 0.2s",
              }}
            >
              {/* Quote mark */}
              <div
                style={{ fontSize: 48, lineHeight: 1, fontWeight: 900, marginBottom: 16, marginTop: -8 }}
              >
                <span style={{ color: t.color, opacity: 0.25 }}>&ldquo;</span>
              </div>

              {/* Quote text */}
              <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.75, flex: 1, marginBottom: 28 }}>
                {t.quote}
              </p>

              {/* Metric badge */}
              <div
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 10, marginBottom: 24, background: "#f9fafb", border: "1px solid #e5e7eb" }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 500 }}>{t.score.label}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: t.color, marginLeft: 2 }}>{t.score.value}</span>
              </div>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: t.color }}
                >
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.initials}</span>
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>{t.title}</p>
                  <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{t.company}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <p style={{ fontSize: 14, color: "#9ca3af" }}>
            Join <span style={{ fontWeight: 700, color: "#6b7280" }}>50+ SoCal founders</span> already in early access.{" "}
            <a href="#waitlist" style={{ color: "#4338ca", fontWeight: 600, textDecoration: "none" }}>
              Apply now →
            </a>
          </p>
        </m.div>
      </div>
    </section>
  );
}
