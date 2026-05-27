/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#020617",
          surface: "#0b1220",
          muted: "#111827",
        },
        accent: {
          DEFAULT: "#f97316",
          bright: "#ff9a3f",
          glow: "#ffb46f",
        },
      },
      boxShadow: {
        glow: "0 20px 120px rgba(249, 115, 22, 0.16)",
        soft: "0 24px 80px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at top left, rgba(249,115,22,0.14), transparent 24%), radial-gradient(circle at bottom right, rgba(248,113,20,0.08), transparent 28%), linear-gradient(180deg, rgba(15,23,42,0.96) 0%, rgba(8,12,24,0.98) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(249,115,22,0.25)" },
          "50%": { boxShadow: "0 0 32px rgba(249,115,22,0.22)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.9s ease-out forwards",
        glowPulse: "glowPulse 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};