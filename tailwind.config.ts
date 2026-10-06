import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#FDFBF7",
          100: "#FAF5EE",
          200: "#F5EBE0",
          300: "#ECDCC8",
          400: "#DFCAAF",
          500: "#CDB291",
        },
        espresso: {
          900: "#1E140F",
          800: "#2B1D16",
          700: "#3E2B22",
          600: "#553D32",
          500: "#745749",
        },
        terracotta: {
          DEFAULT: "#D97752",
          dark: "#B85834",
          light: "#EBA384",
          soft: "#FDF0EB",
        },
        coral: {
          DEFAULT: "#F07073",
          dark: "#D64E52",
          light: "#F79DA0",
          soft: "#FDF2F3",
        },
        sage: {
          DEFAULT: "#8B9E6E",
          dark: "#697B4D",
          light: "#AEC094",
          soft: "#F2F5ED",
        },
        ochre: {
          DEFAULT: "#DE9B26",
          dark: "#BA7C14",
          light: "#EBB95F",
          soft: "#FEF7EA",
        },
        tealbrand: {
          DEFAULT: "#187787",
          dark: "#105B68",
          light: "#3FA1B1",
          soft: "#EBF5F7",
        },
        crimsonbrand: {
          DEFAULT: "#B4223A",
          dark: "#8F1529",
          light: "#D44E64",
          soft: "#FDF0F2",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Didot", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        'soft-lift': '0 20px 40px -15px rgba(43, 29, 22, 0.08)',
        'tactile': '0 10px 30px -10px rgba(43, 29, 22, 0.06), 0 1px 3px rgba(43, 29, 22, 0.04)',
        'glow-terracotta': '0 0 35px -5px rgba(217, 119, 82, 0.3)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 4s ease-in-out infinite',
        'spin-very-slow': 'spin 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
