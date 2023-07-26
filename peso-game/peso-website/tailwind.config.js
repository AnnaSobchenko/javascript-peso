/** @type {import('tailwindcss').Config} */
module.exports = {
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
      "shadow-background": "rgb(26, 26, 26, 0.45)",

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
        "countdown-timer-bg-desk":
          "linear-gradient(var(--shadow-background), var(--shadow-background)),url(../assets/img/home/bg-desk-2x.jpg);",
      },
      boxShadow: {
        "inner-shadow": "inset 0px -200px 250px var(--main-background)",
        "filter-shadow": " drop-shadow(0px 25px 40px var(--accent-background))",
      },
    },
  },
  plugins: [],
};
