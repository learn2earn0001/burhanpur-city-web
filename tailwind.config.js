/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#a855f7",     // Lavender Purple
          light: "#d8b4fe",
          dark: "#7e22ce",
        },
        secondary: {
          DEFAULT: "#fbbf24",     // Sunny Yellow
          light: "#fde68a",
          dark: "#b45309",
        },
      },

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
    "scroll-horizontal": "scroll-horizontal 40s linear infinite", // ✅ renamed and correct speed
      },

      // ✅ Custom Colors
      colors: {
        primary: {
          DEFAULT: "#fd3a55",
          light: "#ff6f7d",
          dark: "purple-500",
        },
        secondary: {
          DEFAULT: "#FFC13D",
          light: "#ffdc82",
          dark: "#cc9a00",
        },
      },

      

      

      // ✅ Custom Background Gradients
      backgroundImage: {
        'gradient-main': 'linear-gradient(to right, #f3e8ff, #ffffff, #f5e0f5)',
        'gradient-cyan': 'linear-gradient(to right, #f3e8ff, #ffffff, #f5e0f5), #67e8f9',
        'gradient-pink': 'linear-gradient(to right, #f3e8ff, #ffffff, #f5e0f5), #fda4af',
        'gradient-amber': 'linear-gradient(to right, #f3e8ff, #ffffff, #f5e0f5), #fcd34d'
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
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
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
