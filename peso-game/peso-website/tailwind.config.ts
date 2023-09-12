import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      "pulse-slow1": "pulse 1.2s linear infinite",
      "pulse-slow2": "pulse 1.2s .4s linear infinite",
      "pulse-slow3": "pulse 1.2s .8s linear infinite",
    },
    colors: {
      transparent: "transparent",
      "main-background": "#1a1a1a",
      "accent-background": "#0e0e0e",
      "second-background": "#191919",
      "shadow-second-background": "rgba(25, 25, 25, 0.9)",
      "shadow-background": "rgba(26, 26, 26, 0.45)",
      "shadow-background-hero": "rgba(26, 26, 26, 0.55)",
      "shadow-background-about": "rgba(26, 26, 26, 0.15)",

      "main-font-color": "#fff",
      "second-font-color": "#0e0e0e",
      "opacity-font-1": "rgba(255, 255, 255, 0.7)",
      "opacity-font-2": "rgba(255, 255, 255, 0.5)",
      "opacity-font-3": "rgba(255, 255, 255, 0.35)",
      "opacity-font-4": "rgba(255, 255, 255, 0.25)",
      "opacity-font-5": "rgba(255, 255, 255, 0.05)",

      "accent-color": "#ff0000",
      "error-color": "rgba(255, 0, 0, 0.5)",

      "main-element-color": "#060606",
      "accent-element-color": "#fff",
    },

    screens: {
      sm: "320px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      backgroundImage: {
        "border-main-top": "url(public/assets/img/border/border-top.png)",
        "border-main-left": "url(public/assets/img/border/border-left.png)",
        "border-main-right": "url(public/assets/img/border/border-right.png)",
        "border-main-bottom": "url(public/assets/img/border/border-bottom.png)",
        "countdown-timer-bg-mob":
          "linear-gradient(var(--shadow-background), var(--shadow-background)),url(public/assets/img/home/bg-desk-2x.jpg);",
        "countdown-timer-bg-desk":
          "linear-gradient(var(--shadow-background), var(--shadow-background)),url(public/assets/img/home/bg-desk-2x.jpg);",
        "countdown-timer-bg-tab":
          "linear-gradient(var(--shadow-background), var(--shadow-background)),url(public/assets/img/home/bg-tab-2x.jpg);",
        "mobile-hero-bg-top":
          "linear-gradient(var(--shadow-background-hero), var(--shadow-background-hero)),url(public/assets/img/hero/hero-bg-mob-1-2x.jpg);",
        "tablet-hero-bg-top":
          "linear-gradient(var(--shadow-background-hero), var(--shadow-background-hero)),url(public/assets/img/hero/hero-bg-tab-1-2x.jpg);",
        "desktop-hero-bg-top":
          "linear-gradient(var(--shadow-background-hero), var(--shadow-background-hero)),url(public/assets/img/hero/hero-bg-desk.jpg);",
        "mobile-hero-bg-bottom":
          "linear-gradient(var(--shadow-background-hero), var(--shadow-background-hero)),url(public/assets/img/hero/hero-bg-mob-2x.jpg)",
        "tablet-hero-bg-bottom":
          "linear-gradient(var(--shadow-background-hero), var(--shadow-background-hero)),url(public/assets/img/hero/hero-bg-tab-2x.jpg)",
        "desktop-hero-bg-bottom":
          "linear-gradient(var(--shadow-background-hero), var(--shadow-background-hero)),url(public/assets/img/hero/hero-bg-desk-2x.jpg",
      },
      boxShadow: {
        "inner-shadow": "inset 0px -200px 250px var(--main-background)",
        "inner-shadow-hero": "inset 0px 200px 250px var(--main-background)",
        "filter-shadow": " drop-shadow(0px 25px 40px var(--accent-background))",
        "inset-lg": "0 25px 30px 10px rgba(14,14,14,1)",
      },
      spacing: {
        13: "3.25rem", //52px
        15: "3.75rem", //60px
        67.5: "16.875rem", //270px
        70: "17.5rem", //280px
        106: "26.5rem", //424px
        119.5: "29.875rem", //756px
        128: "32rem",
        144: "36rem",
        189: "47.25rem",
        200: "50rem",
      },
    },
  },
  plugins: [],
};
export default config;
