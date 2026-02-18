"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    quote:
      "Wone completely changed how we think about fundraising. We closed our seed round 40% faster than expected — the investor matching is genuinely elite.",
    name: "Priya Sharma",
    title: "CEO & Co-founder, NovaMed",
    initials: "PS",
    color: "#2563EB",
  },
  {
    quote:
      "As an angel investor, I've seen dozens of platforms. Wone is the only one that actually curates deal flow worth looking at. The founders on here are serious.",
    name: "Marcus Chen",
    title: "Angel Investor, 20+ portfolio companies",
    initials: "MC",
    color: "#7C3AED",
  },
  {
    quote:
      "The analytics alone are worth the price. I know exactly which investors opened my deck, how long they spent on each slide, and what questions are coming.",
    name: "Danielle Torres",
    title: "Founder, SupplyLoop",
    initials: "DT",
    color: "#0891B2",
  },
  {
    quote:
      "Wone's advisor network is the hidden gem. I got connected to a CFO who helped us restructure our term sheet in 48 hours. That kind of leverage is priceless.",
    name: "James Park",
    title: "CTO, Cartesi Labs",
    initials: "JP",
    color: "#059669",
  },
  {
    quote:
      "We were stuck at a $500K valuation conversation for weeks. One session with a Wone advisor shifted our framing entirely. Closed at $2.1M pre-money.",
    name: "Sofia Reyes",
    title: "Co-founder, Arbor Finance",
    initials: "SR",
    color: "#DC2626",
  },
  {
    quote:
      "Southern California finally has the startup infrastructure it deserves. Wone is building the connective tissue that this ecosystem has been missing.",
    name: "Aaron Mitchell",
    title: "Partner, Westwood Ventures",
    initials: "AM",
    color: "#D97706",
  },
];

export default function Testimonials() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#050505", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Trusted by industry leaders.
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="flex flex-col p-6 rounded-2xl border border-[#1a1a1a] hover:border-[#2a2a2a] transition-colors duration-200"
              style={{ background: "#0a0a0a" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} fill="#2563EB" className="text-blue-600" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#a1a1aa] leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: t.color }}
                >
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">{t.name}</p>
                  <p className="text-xs text-[#52525b] leading-tight mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
