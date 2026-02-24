// src/theme/index.js
// ─────────────────────────────────────────────────────────────────────────────
// 🎨 THEME CONFIGURATION — Caesers Republica
// Change PRIMARY_HEX below to retheme the entire application.
// ─────────────────────────────────────────────────────────────────────────────

export const PRIMARY_HEX = "#06b6d4"; // ← Vibrant Cyan

export const THEME = {
  surface: {
    page: "#030712",
    raised: "#0a1128",
    overlay: "#111b3a",
    border: "rgba(100, 200, 255, 0.08)",
  },
  color: {
    primary: PRIMARY_HEX,
    primaryDim: `${PRIMARY_HEX}1F`,
    primaryGlow: `${PRIMARY_HEX}40`,
    secondary: "#818cf8",
    accent: "#22d3ee",
    muted: "rgba(255, 255, 255, 0.08)",
  },
  text: {
    primary: "#f0f9ff",
    secondary: "#94a3b8",
    muted: "#475569",
  },
  gradient: {
    primary: `linear-gradient(135deg, ${PRIMARY_HEX}, #818cf8, #a78bfa)`,
    radialGlow: `radial-gradient(ellipse 80% 50% at 50% -10%, ${PRIMARY_HEX}33, transparent)`,
    cardGlow: `radial-gradient(circle at center, ${PRIMARY_HEX}1A, transparent 70%)`,
  },
};

export const CSS_VARS = {
  "--color-primary": THEME.color.primary,
  "--color-primary-dim": THEME.color.primaryDim,
  "--color-primary-glow": THEME.color.primaryGlow,
  "--color-secondary": THEME.color.secondary,
  "--color-accent": THEME.color.accent,
  "--surface-page": THEME.surface.page,
  "--surface-raised": THEME.surface.raised,
  "--surface-overlay": THEME.surface.overlay,
  "--surface-border": THEME.surface.border,
  "--text-primary": THEME.text.primary,
  "--text-secondary": THEME.text.secondary,
  "--text-muted": THEME.text.muted,
  "--gradient-primary": THEME.gradient.primary,
  "--gradient-radial": THEME.gradient.radialGlow,
  "--gradient-card": THEME.gradient.cardGlow,
};
