"use client";

import { useRef, useState } from "react";
import { m, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { EASE, ACCENT, BRAND } from "@/lib/brand";

const faqs = [
  {
    q: "Is Wone really free during beta?",
    a: "Yes — all features are completely free for accepted beta founders through our Q2 2026 launch. No credit card required. Accepted founders also lock in early-adopter pricing when paid plans begin.",
  },
  {
    q: "Who is Wone built for?",
    a: "Wone is built for early-stage founders based in Southern California (Los Angeles, Orange County, San Diego) who are raising their first institutional round — from pre-seed through Series A.",
  },
  {
    q: "How does investor matching work?",
    a: "When you complete your Wone profile, our algorithm matches you with investors from our 200+ vetted network based on your sector, funding stage, check size requirements, and company traction. Each match is scored 0–100 based on alignment. Warm introductions are facilitated through the platform — no cold outreach needed.",
  },
  {
    q: "What makes Wone different from AngelList or LinkedIn?",
    a: "Wone is exclusively focused on the SoCal ecosystem and features only pre-vetted, active investors. We combine investor matching with fundraising scorecards, on-demand advisor booking, and grant matching in one platform — no cold outreach, no browsing profiles hoping someone responds.",
  },
  {
    q: "Do I need to be in Southern California to apply?",
    a: "For the beta, yes. We're starting focused on Los Angeles, Orange County, and San Diego, where our investor and advisor networks are strongest. We plan to expand to additional markets after the beta.",
  },
  {
    q: "How are advisors vetted?",
    a: "Every advisor in our network is personally screened by the Wone team. We verify their operating experience, prior advisory roles, domain expertise, and references before listing them. Average advisor rating in our beta cohort is 4.9 / 5.",
  },
  {
    q: "When does the beta launch?",
    a: "We're onboarding our first cohort in Q2 2026. Applications are reviewed on a rolling basis — apply now to secure your spot and avoid the waitlist.",
  },
  {
    q: "Can investors join Wone too?",
    a: "Yes. Investors can apply to join our vetted investor network separately. Reach out via the Contact section or email hello@woneportal.com to learn about the vetting process.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: EASE }}
      style={{ borderBottom: "1px solid #e5e7eb" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 0", background: "none", border: "none", cursor: "pointer",
          textAlign: "left", gap: 16,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>{faq.q}</span>
        <span
          style={{
            flexShrink: 0, width: 24, height: 24, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: open ? BRAND : "#f3f4f6", transition: "background 0.2s",
          }}
        >
          {open
            ? <Minus size={12} color="#fff" />
            : <Plus size={12} color="#6b7280" />
          }
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.75, paddingBottom: 20 }}>{faq.a}</p>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export default function FAQ() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} style={{ background: "#f9fafb", borderTop: "1px solid #f3f4f6", padding: "112px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ACCENT, marginBottom: 12 }}>
            FAQ
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#111827", margin: "0 0 16px" }}>
            Common questions.
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 440, margin: "0 auto", lineHeight: 1.65 }}>
            Everything you need to know about Wone and the beta.
          </p>
        </m.div>

        <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e5e7eb", padding: "0 16px" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <m.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
          style={{ textAlign: "center", fontSize: 14, color: "#9ca3af", marginTop: 32 }}
        >
          Still have questions?{" "}
          <a href="#contact" style={{ color: ACCENT, fontWeight: 600, textDecoration: "none" }}>
            Contact us →
          </a>
        </m.p>
      </div>
    </section>
  );
}
