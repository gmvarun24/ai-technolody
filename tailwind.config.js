import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dim": "var(--color-primary-dim)",
        "primary-glow": "var(--color-primary-glow)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        surface: {
          page: "var(--surface-page)",
          raised: "var(--surface-raised)",
          overlay: "var(--surface-overlay)",
        },
        border: "var(--surface-border)",
        content: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Bricolage Grotesque", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-radial": "var(--gradient-radial)",
        "gradient-card": "var(--gradient-card)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px var(--color-primary-dim)",
        "glow-md": "0 0 30px var(--color-primary-dim)",
        "glow-lg": "0 0 60px var(--color-primary-glow)",
        "glow-accent": "0 0 40px var(--color-accent)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        aitechnology: {
          primary: "#06b6d4",
          secondary: "#818cf8",
          accent: "#22d3ee",
          neutral: "#0a1128",
          "base-100": "#030712",
          "base-200": "#0a1128",
          "base-300": "#111b3a",
          "base-content": "#f0f9ff",
        },
      },
    ],
    darkTheme: "aitechnology",
  },
};
