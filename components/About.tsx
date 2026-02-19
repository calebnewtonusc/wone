"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const values = [
  {
    title: "Radical Transparency",
    body: "We believe founders deserve full visibility into every stage of the fundraising process — no black boxes, no guesswork.",
  },
  {
    title: "Built for SoCal",
    body: "Los Angeles, Orange County, and San Diego have one of the most diverse startup ecosystems in the country. Wone is purpose-built for it.",
  },
  {
    title: "Non-Dilutive First",
    body: "Before taking on equity investment, explore grants and non-dilutive funding. We help you find both so you keep more of your company.",
  },
  {
    title: "Access, Not Gatekeeping",
    body: "Great ideas don't only come from Stanford or Y Combinator. We open the doors to capital and mentorship for every founder who deserves a shot.",
  },
];

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="bg-white py-28 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: mission */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">About Wone</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Built to level the<br />playing field.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Wone was founded on a simple belief: Southern California has world-class founders who deserve world-class infrastructure. Too often, access to investors, advisors, and grant capital depends on who you know — not what you&apos;ve built.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              We&apos;re changing that. Wone is an all-in-one platform that gives every SoCal founder the same tools, connections, and transparency that top-tier founders have always had.
            </p>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition-colors"
            >
              Join the Beta <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Right: values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6"
              >
                <h3 className="text-sm font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
