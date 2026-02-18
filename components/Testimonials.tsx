"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    quote: "Wone completely changed how we approach fundraising. We closed our seed round 40% faster than expected. The investor matching and live scorecards are genuinely elite.",
    name: "Priya Sharma",
    title: "CEO & Co-founder, NovaMed",
    initials: "PS",
    bg: "#2563EB",
  },
  {
    quote: "As an angel investor, I've seen dozens of platforms. Wone is the only one that actually curates deal flow worth looking at. The founders on here are serious and well-prepared.",
    name: "Marcus Chen",
    title: "Angel Investor, 20+ portfolio companies",
    initials: "MC",
    bg: "#7C3AED",
  },
  {
    quote: "The analytics alone are worth the price. I know which investors opened my deck, how long they spent on each slide, and exactly what questions are coming next.",
    name: "Danielle Torres",
    title: "Founder, SupplyLoop",
    initials: "DT",
    bg: "#0891B2",
  },
  {
    quote: "Wone's advisor network is the hidden gem. I connected with a CFO who helped us restructure our entire term sheet in 48 hours. That kind of leverage is priceless.",
    name: "James Park",
    title: "CTO, Cartesi Labs",
    initials: "JP",
    bg: "#059669",
  },
  {
    quote: "We were stuck at a $500K valuation conversation for weeks. One Wone advisor session shifted our framing entirely. We closed at $2.1M pre-money a month later.",
    name: "Sofia Reyes",
    title: "Co-founder, Arbor Finance",
    initials: "SR",
    bg: "#DC2626",
  },
  {
    quote: "Southern California finally has the startup infrastructure it deserves. Wone is building the connective tissue that this ecosystem has been missing for years.",
    name: "Aaron Mitchell",
    title: "Partner, Westwood Ventures",
    initials: "AM",
    bg: "#D97706",
  },
];

export default function Testimonials() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-28 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Trusted by industry leaders.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="flex flex-col p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 bg-white"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} fill="#FBBF24" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: t.bg }}
                >
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{t.name}</p>
                  <p className="text-xs text-gray-400 leading-tight mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
