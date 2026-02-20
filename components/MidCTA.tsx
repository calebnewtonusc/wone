"use client";

import { m } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { EASE, BRAND, DARK, BRAND_LT, BRAND_BR } from "@/lib/brand";

export default function MidCTA() {
  return (
    <section
      className="py-16 px-6 border-t border-gray-100"
      style={{ background: BRAND_LT }}
    >
      <m.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: EASE }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Social proof indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {/* Avatar stack */}
          <div className="flex -space-x-2">
            {["#4f46e5", "#7c3aed", "#059669", "#d97706"].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
                style={{ background: color, zIndex: 4 - i }}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">
            <strong className="text-gray-900">50+ founders</strong> already in early access
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
          Don&apos;t raise in the dark.<br />
          <span style={{ color: BRAND }}>Join Wone today.</span>
        </h2>

        <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto">
          Free during beta. No credit card. SoCal founders only. Limited spots available for Q2 2026 cohort.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <m.a
            href="#waitlist"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(49,46,129,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3.5 rounded-xl"
            style={{ background: DARK, boxShadow: "0 4px 16px rgba(49,46,129,0.25)" }}
          >
            Apply for Early Access <ArrowRight size={15} />
          </m.a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 px-6 py-3.5 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
          >
            See How It Works
          </a>
        </div>
      </m.div>
    </section>
  );
}
