"use client";

import { useRef } from "react";
import { m, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// TODO: Replace text logos with actual SVG logos from confirmed partners
const logos: { name: string; sub: string }[] = [
  { name: "Techstars",        sub: "LA Accelerator"         },
  { name: "TechCoast",        sub: "Angel Network"          },
  { name: "Mucker Capital",   sub: "Seed + Series A"        },
  { name: "Amplify.LA",       sub: "Venture Accelerator"    },
  { name: "Upfront",          sub: "Ventures"               },
  { name: "Bonfire",          sub: "Ventures"               },
  { name: "Cross Culture",    sub: "Ventures"               },
  { name: "SoCal SBDC",       sub: "Business Network"       },
  { name: "USC Stevens",      sub: "Innovation Center"      },
  { name: "UCLA Anderson",    sub: "Venture Accelerator"    },
];

const stats = [
  { value: "200+", label: "Vetted Investors" },
  { value: "18",   label: "Angel Networks"   },
  { value: "40+",  label: "VC Firms"         },
  { value: "80+",  label: "Expert Advisors"  },
];

export default function SocialProof() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{ background: "#fafafa", borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6", padding: "72px 24px" }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 12 }}>
            The SoCal Ecosystem
          </p>
          <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
            Investors and advisors in the Wone network include professionals from leading SoCal firms, accelerators, and institutions.
          </p>
        </m.div>

        {/* Logo grid */}
        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 56 }}
        >
          {logos.map((logo, i) => (
            <m.div
              key={logo.name}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.04, ease: EASE }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 20px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                minWidth: 130,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", letterSpacing: "-0.01em", lineHeight: 1 }}>
                {logo.name}
              </span>
              <span style={{ fontSize: 10, fontWeight: 500, color: "#9ca3af", marginTop: 3, letterSpacing: "0.01em" }}>
                {logo.sub}
              </span>
            </m.div>
          ))}
        </m.div>

        {/* Stats row */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}
          className="grid-cols-2 sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                padding: "20px 16px",
                borderLeft: i > 0 ? "1px solid #e5e7eb" : "none",
              }}
              className={i > 1 ? "border-t border-gray-200 sm:border-t-0" : ""}
            >
              <p style={{ fontSize: 28, fontWeight: 800, color: "#111827", lineHeight: 1, letterSpacing: "-0.03em" }}>{s.value}</p>
              <p style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500, marginTop: 6 }}>{s.label}</p>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
