import { useState, useEffect, useCallback } from "react";
import { ThemeContext } from "./useTheme";

// ── Dark Theme ──────────────────────────────────────────────────────────────
const DARK_THEME = {
  surface: {
    page: "#030712",
    raised: "#0a1128",
    overlay: "#111b3a",
    border: "rgba(100, 200, 255, 0.08)",
  },
  color: {
    primary: "#06b6d4",
    primaryDim: "rgba(6, 182, 212, 0.12)",
    primaryGlow: "rgba(6, 182, 212, 0.25)",
    secondary: "#818cf8",
    accent: "#22d3ee",
  },
  text: {
    primary: "#f0f9ff",
    secondary: "#94a3b8",
    muted: "#475569",
  },
  gradient: {
    primary: "linear-gradient(135deg, #06b6d4, #818cf8, #a78bfa)",
    radialGlow:
      "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6, 182, 212, 0.2), transparent)",
    cardGlow:
      "radial-gradient(circle at center, rgba(6, 182, 212, 0.1), transparent 70%)",
  },
};

// ── Light Theme ─────────────────────────────────────────────────────────────
const LIGHT_THEME = {
  surface: {
    page: "#f8fafc",
    raised: "#ffffff",
    overlay: "#f1f5f9",
    border: "rgba(0, 0, 0, 0.08)",
  },
  color: {
    primary: "#0891b2",
    primaryDim: "rgba(8, 145, 178, 0.08)",
    primaryGlow: "rgba(8, 145, 178, 0.15)",
    secondary: "#6366f1",
    accent: "#06b6d4",
  },
  text: {
    primary: "#0f172a",
    secondary: "#475569",
    muted: "#94a3b8",
  },
  gradient: {
    primary: "linear-gradient(135deg, #0891b2, #6366f1, #8b5cf6)",
    radialGlow:
      "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(8, 145, 178, 0.1), transparent)",
    cardGlow:
      "radial-gradient(circle at center, rgba(8, 145, 178, 0.05), transparent 70%)",
  },
};

function applyThemeVars(theme) {
  const root = document.documentElement;
  root.style.setProperty("--surface-page", theme.surface.page);
  root.style.setProperty("--surface-raised", theme.surface.raised);
  root.style.setProperty("--surface-overlay", theme.surface.overlay);
  root.style.setProperty("--surface-border", theme.surface.border);
  root.style.setProperty("--color-primary", theme.color.primary);
  root.style.setProperty("--color-primary-dim", theme.color.primaryDim);
  root.style.setProperty("--color-primary-glow", theme.color.primaryGlow);
  root.style.setProperty("--color-secondary", theme.color.secondary);
  root.style.setProperty("--color-accent", theme.color.accent);
  root.style.setProperty("--text-primary", theme.text.primary);
  root.style.setProperty("--text-secondary", theme.text.secondary);
  root.style.setProperty("--text-muted", theme.text.muted);
  root.style.setProperty("--gradient-primary", theme.gradient.primary);
  root.style.setProperty("--gradient-radial", theme.gradient.radialGlow);
  root.style.setProperty("--gradient-card", theme.gradient.cardGlow);
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("aitechnolody-theme");
      return stored ? stored === "dark" : false;
    }
    return false;
  });

  useEffect(() => {
    const theme = isDark ? DARK_THEME : LIGHT_THEME;
    applyThemeVars(theme);

    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.style.setProperty("background-color", DARK_THEME.surface.page);
    } else {
      root.classList.remove("dark");
      root.style.setProperty("background-color", LIGHT_THEME.surface.page);
    }

    localStorage.setItem("aitechnolody-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
