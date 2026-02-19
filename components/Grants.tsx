"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";
import { DollarSign, FileText, Lightbulb, ArrowRight } from "lucide-react";
import { EASE, ACCENT, BRAND } from "@/lib/brand";

const grantTypes = [
  {
    icon: DollarSign,
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    title: "Federal SBIR / STTR",
    description:
      "Small Business Innovation Research and Technology Transfer programs provide non-dilutive funding for early-stage R&D. Wone helps you identify which agencies are the best fit for your technology.",
    badge: "Up to $2M non-dilutive",
  },
  {
    icon: Lightbulb,
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
    title: "California State Grants",
    description:
      "The Governor's Office of Business and Economic Development (GO-Biz) and CALSTART administer programs specifically for clean tech, climate, and innovation startups headquartered in California.",
    badge: "CA-headquartered startups",
  },
  {
    icon: FileText,
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    title: "City & County Programs",
    description:
      "The City of Los Angeles, LACI, and SoCal Edison all run grant and co-investment programs targeting startups in clean energy, mobility, and economic development.",
    badge: "LA, OC & SD metro areas",
  },
];

const steps = [
  { number: "01", title: "Profile your startup", body: "Complete your Wone profile with your sector, technology readiness level, and funding history." },
  { number: "02", title: "Get matched to grants", body: "Our matching engine surfaces the programs you're most likely to qualify for, ranked by fit and deadline." },
  { number: "03", title: "Apply with confidence", body: "Use Wone's grant-writing resources and advisor network to strengthen your application before you submit." },
];

export default function Grants() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="grants" ref={ref} className="bg-gray-50 py-28 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Grants</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Non-dilutive funding<br />you don&apos;t have to beg for.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Billions in grant dollars go unclaimed every year because founders don&apos;t know they exist. Wone finds and matches you to the programs you actually qualify for.
          </p>
        </m.div>

        {/* Grant types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {grantTypes.map((g, i) => {
            const Icon = g.icon;
            return (
              <m.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: EASE }}
                className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm p-6 flex flex-col transition-all duration-200"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border flex-shrink-0"
                  style={{ background: g.bg, borderColor: g.border }}
                >
                  <Icon size={20} style={{ color: g.color }} />
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 self-start"
                  style={{ color: g.color, background: g.bg, border: `1px solid ${g.border}` }}
                >
                  {g.badge}
                </span>
                <h3 className="text-base font-bold text-gray-900 mb-2">{g.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{g.description}</p>
              </m.div>
            );
          })}
        </div>

        {/* How it works */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: ACCENT }}>How Grant Matching Works</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.number}>
                <p className="text-xs font-bold tracking-widest text-gray-300 mb-2">{s.number}</p>
                <h4 className="text-base font-bold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-400">Grant matching available at launch — join the beta waitlist to be first in line.</p>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 whitespace-nowrap"
              style={{ color: BRAND }}
            >
              Get early access <ArrowRight size={14} />
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
