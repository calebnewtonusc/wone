"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { EASE } from "@/lib/brand";

type State = "idle" | "loading" | "success" | "error";

const STAGES = ["Idea Stage", "Pre-Revenue", "Pre-Seed", "Seed", "Series A+"];

export default function Waitlist() {
  const [name,    setName]    = useState("");
  const [company, setCompany] = useState("");
  const [stage,   setStage]   = useState("");
  const [email,   setEmail]   = useState("");
  const [state,   setState]   = useState<State>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state !== "idle") return;
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, stage, email }),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
      setName(""); setCompany(""); setStage(""); setEmail("");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.2)",
    fontSize: 14,
    color: "#fff",
    background: "rgba(255,255,255,0.08)",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#c7d2fe",
    marginBottom: 6,
  };

  return (
    <section
      id="waitlist"
      style={{ position: "relative", padding: "112px 24px", overflow: "hidden", background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #1e1b4b 100%)" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.04,
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 580, margin: "0 auto", textAlign: "center" }}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>
            Ready to Transform Your<br />Startup Journey?
          </h2>
          <p style={{ fontSize: 17, color: "#c7d2fe", maxWidth: 440, margin: "0 auto 40px", lineHeight: 1.65 }}>
            We&apos;re onboarding a select group of SoCal founders for our Q2 2026 beta launch. Free during beta — no credit card required.
          </p>

          <AnimatePresence mode="wait">
            {state === "success" ? (
              <m.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "32px 0" }}
              >
                <CheckCircle2 size={44} color="#fff" />
                <p style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>You&apos;re on the list!</p>
                <p style={{ fontSize: 15, color: "#c7d2fe" }}>We&apos;ll be in touch when your spot opens up.</p>
              </m.div>
            ) : (
              <m.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480, margin: "0 auto", textAlign: "left" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label style={labelStyle} htmlFor="wl-name">Your Name</label>
                    <input
                      id="wl-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="wl-company">Startup Name</label>
                    <input
                      id="wl-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Inc."
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label style={labelStyle} htmlFor="wl-stage">Funding Stage</label>
                    <select
                      id="wl-stage"
                      value={stage}
                      onChange={(e) => setStage(e.target.value)}
                      required
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" disabled>Select stage</option>
                      {STAGES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="wl-email">Work Email</label>
                    <input
                      id="wl-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@startup.com"
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                {state === "error" && (
                  <m.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#fca5a5" }}
                  >
                    <AlertCircle size={14} />
                    Something went wrong — please try again.
                  </m.p>
                )}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                    fontSize: 14, fontWeight: 700, color: "#312e81", background: "#fff",
                    padding: "14px 24px", borderRadius: 12, border: "none", cursor: "pointer",
                    whiteSpace: "nowrap", opacity: state === "loading" ? 0.7 : 1, marginTop: 4,
                  }}
                >
                  {state === "loading" ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <>Apply for Early Access <ArrowRight size={15} /></>
                  )}
                </button>
              </m.form>
            )}
          </AnimatePresence>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 28 }}>
            {["No credit card required", "Free during beta", "SoCal founders only"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#a5b4fc" }} />
                <span style={{ fontSize: 12, color: "#c7d2fe" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }} className="sm:flex-row sm:justify-center">
            <a
              href="#contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "12px 24px", borderRadius: 12, textDecoration: "none" }}
            >
              Schedule a Demo <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              style={{ display: "inline-flex", alignItems: "center", fontSize: 14, fontWeight: 500, color: "#c7d2fe", border: "1px solid rgba(255,255,255,0.2)", padding: "12px 20px", borderRadius: 12, textDecoration: "none" }}
            >
              Contact Sales
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
