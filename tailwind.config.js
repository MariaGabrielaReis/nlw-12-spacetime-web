/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)",
        alt: "var(--font-bai-jamjuree)",
      },

      colors: {
        gray: {
          50: "#eaeaea",
          100: "#bebebf",
          200: "#9e9ea0",
          300: "#727275",
          400: "#56565a",
          500: "#2c2c31",
          600: "#28282d",
          700: "#1f1f23",
          800: "#18181b",
          900: "#121215",
        },
        purple: {
          50: "#F3EEFC",
          100: "#D8CBF7",
          200: "#C6B2F3",
          300: "#AB8EEE",
          400: "#9B79EA",
          500: "#8257E5",
          600: "#764FD0",
          700: "#5C3EA3",
          800: "#48307E",
          900: "#372560",
        },
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
      },

      blur: {
        full: "180px",
      },

      backgroundImage: {
        stripes:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)",
      },

      backgroundSize: {
        stripes: "100% 8px",
      },

      fontSize: {
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
