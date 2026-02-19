// ─── Wone Design Tokens ──────────────────────────────────────────────────────
// Single source of truth for all brand colours + motion constants.
// Import from here instead of hardcoding values in individual components.

// Brand colours
export const BRAND   = "#4f46e5";   // indigo-600  — primary actions, icons
export const DARK    = "#312e81";   // indigo-900  — hero CTA bg, nav CTA bg
export const ACCENT  = "#4338ca";   // indigo-700  — section eyebrow labels
export const BRAND_LT  = "#eef2ff"; // indigo-50   — light backgrounds
export const BRAND_BR  = "#c7d2fe"; // indigo-200  — borders on light bg

// Neutrals
export const GRAY1  = "#111827";   // gray-900 — primary text
export const GRAY2  = "#374151";   // gray-700 — body text
export const GRAY3  = "#6b7280";   // gray-500 — secondary text
export const GRAY4  = "#9ca3af";   // gray-400 — tertiary text
export const BORDER = "#e5e7eb";   // gray-200 — borders
export const SURF   = "#f9fafb";   // gray-50  — surface / alternate bg

// Semantic feature colours (keep consistent across cards + icons)
export const GREEN   = "#059669";
export const CYAN    = "#0891b2";
export const VIOLET  = "#7c3aed";
export const AMBER   = "#d97706";
export const RED     = "#dc2626";

// Framer Motion easing — spring-like cubic bezier
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Reusable transition presets
export const T = {
  fast:   { duration: 0.35, ease: EASE },
  base:   { duration: 0.5,  ease: EASE },
  slow:   { duration: 0.7,  ease: EASE },
  stagger: (i: number) => ({ duration: 0.5, delay: i * 0.08, ease: EASE }),
} as const;
