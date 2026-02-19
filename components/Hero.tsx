"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE, BRAND, DARK, GRAY1, GRAY2, GRAY4, BORDER, BRAND_LT, BRAND_BR, SURF } from "@/lib/brand";

const INVESTORS = [
  { name: "Alta Capital",   kind: "Series A–C VC",  match: 98, color: BRAND      },
  { name: "Sarah Kim",      kind: "Angel Investor",  match: 94, color: "#7c3aed"  },
  { name: "SoCal Ventures", kind: "Regional VC",     match: 91, color: "#0891b2"  },
];

function Screenshot() {
  return (
    <m.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: EASE }}
      style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 40px 100px -20px rgba(17,24,39,0.25), 0 0 0 1px rgba(0,0,0,0.07)" }}
    >
      {/* Browser chrome */}
      <div style={{ background: "#1a1a2e", padding: "0 16px", height: 44, display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57","#febc2e","#28c840"].map((c) => (
            <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, marginLeft: 8, background: "#252540", borderRadius: 6, height: 24, display: "flex", alignItems: "center", padding: "0 12px" }}>
          <span style={{ fontSize: 11, color: GRAY4, fontFamily: "monospace" }}>app.woneportal.com/dashboard</span>
        </div>
      </div>

      {/* App nav */}
      <div style={{ background: "#fff", borderBottom: `1px solid ${BORDER}`, padding: "0 24px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: DARK, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 900 }}>W</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 700, color: GRAY1 }}>Wone</span>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 13, fontWeight: 500, color: GRAY4 }}>
          {["Dashboard", "Investors", "Analytics", "Advisors"].map((t, i) => (
            <span key={t} style={i === 0 ? { color: BRAND, borderBottom: `2px solid ${BRAND}`, paddingBottom: 2, fontWeight: 600 } : {}}>
              {t}
            </span>
          ))}
        </div>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: BRAND, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>TC</span>
        </div>
      </div>

      {/* Dashboard body */}
      <div style={{ background: "#f8f9fb", padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 12, color: GRAY4, marginBottom: 2 }}>Welcome back,</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: GRAY1 }}>TechVenture Co.</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "#15803d", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 20, padding: "6px 14px" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
            Seed Round Active
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 }}>
          {[
            { label: "Round Score",    value: "94",    sub: "out of 100",    hi: true  },
            { label: "Investor Views", value: "47",    sub: "+12 this week", hi: false },
            { label: "Capital Raised", value: "$420K", sub: "↑ 23% MTM",    hi: false },
          ].map((s) => (
            <div key={s.label} style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: GRAY4, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>{s.label}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: s.hi ? BRAND : GRAY1, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: GRAY4, marginTop: 6 }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: GRAY1 }}>Top Investor Matches</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: BRAND, cursor: "pointer" }}>View all →</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {INVESTORS.map((inv, i) => (
              <div key={inv.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderTop: i > 0 ? `1px solid ${BORDER}` : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: inv.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{inv.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: GRAY1 }}>{inv.name}</div>
                    <div style={{ fontSize: 12, color: GRAY4, marginTop: 1 }}>{inv.kind}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#16a34a" }}>{inv.match}%</span>
                  <button style={{ fontSize: 12, fontWeight: 600, color: "#fff", background: BRAND, border: "none", borderRadius: 8, padding: "6px 14px", cursor: "pointer" }}>Connect</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default function Hero() {
  return (
    <section style={{ background: "#fff", borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "88px 24px 72px", textAlign: "center" }}>
        <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }} style={{ marginBottom: 28 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: BRAND, background: BRAND_LT, border: `1px solid ${BRAND_BR}`, borderRadius: 20, padding: "7px 16px" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: BRAND, display: "inline-block" }} />
            Now in Beta — Free for SoCal Founders
          </span>
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          style={{ fontSize: "clamp(2.6rem, 5.5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, color: GRAY1, margin: "0 0 24px" }}
        >
          The All-in-One<br />
          <span style={{ color: BRAND }}>Startup Launchpad.</span>
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
          style={{ fontSize: 19, color: GRAY2, lineHeight: 1.65, margin: "0 0 40px", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}
        >
          A unified platform where SoCal founders connect with 200+ vetted investors, access expert advisors, and raise capital transparently.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}
        >
          <a
            href="#waitlist"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "#fff", background: DARK, borderRadius: 12, padding: "14px 28px", textDecoration: "none", boxShadow: "0 4px 16px rgba(49,46,129,0.32)" }}
          >
            Get Early Access <ArrowRight size={16} />
          </a>
          <a
            href="#how-it-works"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: GRAY1, background: "#fff", border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: "14px 28px", textDecoration: "none" }}
          >
            See How It Works
          </a>
        </m.div>

        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          style={{ fontSize: 13, color: GRAY4, margin: 0 }}
        >
          ✓ Free during beta &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; SoCal founders only
        </m.p>
      </div>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 0" }}>
        <Screenshot />
      </div>
      <div style={{ height: 80, background: "linear-gradient(to bottom, transparent, #fff)", marginTop: -80, position: "relative", zIndex: 1 }} />

      {/* Stats bar */}
      <div style={{ borderTop: `1px solid ${BORDER}`, background: SURF }}>
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ maxWidth: 960, margin: "0 auto", padding: "24px" }}>
          {[
            { value: "50+",  label: "Pilot Partners"   },
            { value: "200+", label: "Vetted Investors"  },
            { value: "80+",  label: "Expert Advisors"   },
            { value: "Q2 '26", label: "Beta Launch"     },
          ].map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", borderLeft: i > 0 ? `1px solid ${BORDER}` : "none" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: GRAY1, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: GRAY4, fontWeight: 500, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
