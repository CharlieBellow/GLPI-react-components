/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { mobile }

      // => @media (min-width: 960px) { Tablet }
      md: "960px",

      // => @media (min-width: 1024px) { desktops pequenos }
      lg: "1024px",

      // => @media (min-width: 1440px) { monitores e TVs }
      tv: "1440px",
    },
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        25: "6.25rem",
        26: "6.5rem",
        31: "7.75rem",
        53: "13.25rem",
        57: "14.25rem",
        68: "17rem",
        80: "20rem",
        100: "25rem",
        103: "25.75rem",
        118: "29.5rem",
        128: "32rem",
        202: "50.5rem",
      },
      maxWidth: {
        "13xl": "128rem",
        card: "50.5rem",
      },
      fontSize: {
        base: ["16px", "24px"],
        xl: ["20px", "32px"],
        "3xl": "26px",
        "4xl": ["32px", "52px"],
      },

      colors: {
        bg: "#212532",
        "light-bg": "#333849",
        "red-ufal": "#ED1C24",
        black: {
          text: "#333849",
          black: "#000000",
        },
        white: {
          100: "#FFFFFF",
          ice: "#F7FAFC",
          "strong-ice": "#EDF2F7",
        },
        blue: {
          ufal: "#0095DA",
          "ufal-hover": "#33AAE1",
          "final-gradient": "#4FB4E4",
          "dark-final-gradient": "#0B70A2",
        },
        gray: {
          text: "#797D9A",
          medium: "#EDF2F7",
          dark: "#D9D9D9",
        },
        primary: {
          blue: "hsl(var(--primary-blue))",
          red: "hsl(var(--primary-red))",
        },
        secondary: {
          1: "hsl(var(--secondary-1))",
          2: "hsl(var(--secondary-2))",
        },
        tertiary: {
          1: "hsl(var(--tertiary-1))",
          2: "hsl(var(--tertiary-2))",
        },
        danger: "hsl(var(--danger))",
        destructive: "hsl(var(--destructive))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        ufalBackground:
          "url('/images/ufal-sigla-branca-fundo-transparente-40por-cento.png')",
      },
      boxShadow: {
        card: "0px 8px 16px rgba(0, 0, 0, 0.16)",
        button: "0px 4px 4px rgba(0, 0, 0, 0.16)",
        tab: "0 3px 0 0 #DEE2E6",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
