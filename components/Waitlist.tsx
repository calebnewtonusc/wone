"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
type State = "idle" | "loading" | "success" | "error";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state !== "idle") return;
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
      setEmail("");
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
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

      <div style={{ position: "relative", zIndex: 10, maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", marginBottom: 20, lineHeight: 1.1 }}>
            Ready to Transform Your<br />Startup Journey?
          </h2>
          <p style={{ fontSize: 18, color: "#c7d2fe", marginBottom: 40, maxWidth: 420, margin: "0 auto 40px", lineHeight: 1.65 }}>
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
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "24px 0" }}
              >
                <CheckCircle2 size={40} color="#fff" />
                <p style={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>You&apos;re on the list!</p>
                <p style={{ fontSize: 14, color: "#c7d2fe" }}>We&apos;ll be in touch when your spot opens up.</p>
              </m.div>
            ) : (
              <m.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <m.form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 420, margin: "0 auto" }}
                  className="sm:flex-row"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@startup.com"
                    required
                    style={{ flex: 1, padding: "12px 16px", borderRadius: 12, fontSize: 14, color: "#111827", background: "#fff", border: "none", outline: "none" }}
                  />
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#312e81", background: "#fff", padding: "12px 24px", borderRadius: 12, border: "none", cursor: "pointer", whiteSpace: "nowrap", opacity: state === "loading" ? 0.7 : 1 }}
                  >
                    {state === "loading" ? (
                      <Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} />
                    ) : (
                      <>Apply for Early Access <ArrowRight size={15} /></>
                    )}
                  </button>
                </m.form>
                {state === "error" && (
                  <m.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 12, fontSize: 14, color: "#fca5a5" }}
                  >
                    <AlertCircle size={14} />
                    Something went wrong — please try again.
                  </m.p>
                )}
              </m.div>
            )}
          </AnimatePresence>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 32 }}>
            {["No credit card required", "14-day free trial", "Cancel anytime"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#a5b4fc" }} />
                <span style={{ fontSize: 12, color: "#c7d2fe" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }} className="sm:flex-row sm:justify-center">
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
