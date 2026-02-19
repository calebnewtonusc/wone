import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = "Wone — The All-in-One Startup Launchpad for SoCal Founders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F172A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blue radial glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)",
          }}
        />

        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* URL top right */}
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 80,
            fontSize: 22,
            color: "#475569",
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.domain}
        </div>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 44 }}>
          <div
            style={{
              width: 60,
              height: 60,
              background: "#2563EB",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 900,
              color: "white",
            }}
          >
            W
          </div>
          <span style={{ fontSize: 38, fontWeight: 700, color: "white", letterSpacing: "-0.03em" }}>{siteConfig.name}</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.05,
            marginBottom: 28,
            letterSpacing: "-0.04em",
            maxWidth: 820,
          }}
        >
          {siteConfig.tagline}
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 26,
            color: "#94A3B8",
            marginBottom: 52,
            maxWidth: 660,
            lineHeight: 1.4,
          }}
        >
          200+ vetted investors · Expert advisors · AI-powered fundraising tools
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: 14 }}>
          {["Free during beta", `${siteConfig.launch.betaDate} launch`, "SoCal founders only"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(37,99,235,0.18)",
                border: "1px solid rgba(37,99,235,0.45)",
                borderRadius: 999,
                padding: "10px 24px",
                fontSize: 18,
                color: "#93C5FD",
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
