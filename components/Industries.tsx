"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { Leaf, Zap, Microscope, ArrowRight } from "lucide-react";
import { EASE, ACCENT, BRAND } from "@/lib/brand";

const industries = [
  {
    icon: Leaf,
    label: "AgTech & Sustainability",
    description:
      "From precision agriculture to sustainable supply chains, Wone connects AgTech founders with investors actively backing the next generation of food and land systems.",
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    stats: [
      { value: "AgTech",  sub: "Primary Focus" },
      { value: "Seed–A",  sub: "Stage"         },
      { value: "SoCal",   sub: "Region"        },
    ],
    tags: ["Precision Ag", "Supply Chain", "Food Systems", "Sustainability"],
  },
  {
    icon: Zap,
    label: "Renewable Energy",
    description:
      "Clean energy is Southern California's fastest-growing investment sector. Wone gives energy founders direct access to climate-focused VCs, grant programs, and strategic partners.",
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
    stats: [
      { value: "CleanTech",  sub: "Primary Focus" },
      { value: "Pre-Seed–B", sub: "Stage"         },
      { value: "SoCal + SW", sub: "Region"        },
    ],
    tags: ["Solar", "Grid Storage", "EV Infrastructure", "Carbon Markets"],
  },
  {
    icon: Microscope,
    label: "Biotech & Healthcare",
    description:
      "LA's life sciences corridor is expanding fast. Wone helps biotech and digital health founders navigate the unique capital and regulatory landscape of healthcare innovation.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    stats: [
      { value: "Life Sciences", sub: "Primary Focus" },
      { value: "Seed–Series B", sub: "Stage"         },
      { value: "LA Corridor",   sub: "Region"        },
    ],
    tags: ["Digital Health", "MedTech", "Drug Discovery", "Diagnostics"],
  },
];

export default function Industries() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" ref={ref} className="bg-gray-50 py-28 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Industries</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Built for the sectors<br />shaping tomorrow.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Wone focuses on the high-impact industries reshaping Southern California — connecting founders with investors who specialize in their sector.
          </p>
        </m.div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <m.div
                key={ind.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="p-6 pb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border"
                    style={{ background: ind.bg, borderColor: ind.border }}
                  >
                    <Icon size={22} style={{ color: ind.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{ind.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{ind.description}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mx-6" />

                {/* Stats row */}
                <div className="grid grid-cols-3 divide-x divide-gray-100 px-2 py-4">
                  {ind.stats.map((s) => (
                    <div key={s.sub} className="text-center px-2">
                      <p className="text-[11px] font-bold text-gray-900 leading-tight">{s.value}</p>
                      <p className="text-[9px] text-gray-400 font-medium mt-0.5 uppercase tracking-wider">{s.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 px-6 pb-6">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md border"
                      style={{ color: ind.color, background: ind.bg, borderColor: ind.border }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
          className="text-center"
        >
          <p className="text-sm text-gray-400 mb-4">
            Don&apos;t see your sector? We&apos;re expanding our industry coverage every quarter.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: BRAND }}
          >
            Join the waitlist and tell us your industry
            <ArrowRight size={14} />
          </a>
        </m.div>
      </div>
    </section>
  );
}
