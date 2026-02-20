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
    <section style={{ background: "#fff", borderBottom: `1px solid ${BORDER}`, position: "relative", overflow: "hidden" }}>
      {/* Subtle gradient backdrop */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 600,
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(79,70,229,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "96px 24px 80px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }} style={{ marginBottom: 32 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: BRAND, background: BRAND_LT, border: `1px solid ${BRAND_BR}`, borderRadius: 20, padding: "7px 16px" }}>
            <m.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block" }}
            />
            Now in Beta — Free for SoCal Founders
          </span>
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          style={{ fontSize: "clamp(2.8rem, 6vw, 4.4rem)", fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.05, color: GRAY1, margin: "0 0 28px" }}
        >
          The All-in-One<br />
          <span style={{ color: BRAND, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Startup Launchpad.
          </span>
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
          style={{ fontSize: 20, color: GRAY2, lineHeight: 1.65, margin: "0 0 44px", maxWidth: 580, marginLeft: "auto", marginRight: "auto", fontWeight: 400 }}
        >
          A unified platform where SoCal founders connect with <strong style={{ color: GRAY1 }}>200+ vetted investors</strong>, access expert advisors, and raise capital transparently.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}
        >
          <m.a
            href="#waitlist"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(49,46,129,0.42)" }}
            whileTap={{ scale: 0.98 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "#fff", background: DARK, borderRadius: 14, padding: "15px 30px", textDecoration: "none", boxShadow: "0 4px 16px rgba(49,46,129,0.32)", transition: "background 0.2s" }}
          >
            Get Early Access <ArrowRight size={16} />
          </m.a>
          <m.a
            href="#how-it-works"
            whileHover={{ scale: 1.02, background: "#f9fafb" }}
            whileTap={{ scale: 0.98 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: GRAY1, background: "#fff", border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: "15px 30px", textDecoration: "none" }}
          >
            See How It Works
          </m.a>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, fontSize: 13, color: GRAY4 }}
        >
          {["Free during beta", "No credit card", "SoCal founders only"].map((item, i) => (
            <span key={item} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {i > 0 && <span style={{ opacity: 0.3 }}>·</span>}
              <span style={{ color: "#22c55e", fontWeight: 700 }}>✓</span> {item}
            </span>
          ))}
        </m.div>
      </div>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 0" }}>
        <Screenshot />
      </div>
      <div style={{ height: 80, background: "linear-gradient(to bottom, transparent, #fff)", marginTop: -80, position: "relative", zIndex: 1 }} />

      {/* Stats bar */}
      <div style={{ borderTop: `1px solid ${BORDER}`, background: SURF }}>
        <div className="grid grid-cols-2 sm:grid-cols-4" style={{ maxWidth: 960, margin: "0 auto", padding: "28px 24px" }}>
          {[
            { value: "50+",   label: "Pilot Partners",  sub: "Active beta founders"  },
            { value: "200+",  label: "Vetted Investors", sub: "Ready to back you"     },
            { value: "80+",   label: "Expert Advisors",  sub: "4.9 avg rating"        },
            { value: "Q2 '26", label: "Beta Launch",     sub: "Spots limited"         },
          ].map((s, i) => (
            <m.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: EASE }}
              style={{ textAlign: "center", borderLeft: i > 0 ? `1px solid ${BORDER}` : "none", padding: "0 16px" }}
            >
              <div style={{ fontSize: 26, fontWeight: 900, color: GRAY1, lineHeight: 1, letterSpacing: "-0.03em" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: GRAY1, fontWeight: 600, marginTop: 5 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: GRAY4, fontWeight: 400, marginTop: 2 }}>{s.sub}</div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
