/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "25%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "auto-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        shine: "shine 3s ease-out infinite",
        "gradient-flow": "gradientFlow 10s ease infinite",
        "slide-in-left": "slide-in-left 0.3s ease-out forwards",
        "slide-out-left": "slide-out-left 0.3s ease-in forwards",
        "auto-scroll": "auto-scroll 40s linear infinite",
      },
      colors: {
        ternary: "#E7A100",
      },
      fontFamily: {
        inter: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE 10+ */
          "-ms-overflow-style": "none",
          /* Chrome, Safari and Opera */
          "overflow": "auto",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
          width: "0px",
          height: "0px",
        },
      });
    },
  ],
};
