/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Launchpad Pine - Deep evergreen palette
        pine: {
          50: "hsl(var(--pine-50))",
          100: "hsl(var(--pine-100))",
          200: "hsl(var(--pine-200))",
          300: "hsl(var(--pine-300))",
          400: "hsl(var(--pine-400))",
          500: "hsl(var(--pine-500))",
          600: "hsl(var(--pine-600))",
          700: "hsl(var(--pine-700))",
          800: "hsl(var(--pine-800))",
          900: "hsl(var(--pine-900))",
          950: "hsl(var(--pine-950))",
        },
        // Interface Zinc - Clean neutral palette
        zinc: {
          50: "hsl(var(--zinc-50))",
          100: "hsl(var(--zinc-100))",
          200: "hsl(var(--zinc-200))",
          300: "hsl(var(--zinc-300))",
          400: "hsl(var(--zinc-400))",
          500: "hsl(var(--zinc-500))",
          600: "hsl(var(--zinc-600))",
          700: "hsl(var(--zinc-700))",
          800: "hsl(var(--zinc-800))",
          900: "hsl(var(--zinc-900))",
          950: "hsl(var(--zinc-950))",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto-flex)", "system-ui", "sans-serif"],
        serif: ["var(--font-roboto-flex)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      // Taylor Labs spacing system
      spacing: {
        "tl-1": "5px",
        "tl-2": "9px",
        "tl-3": "14px",
        "tl-4": "18px",
        "tl-5": "23px",
        "tl-6": "27px",
        "tl-7": "32px",
        "tl-8": "36px",
        "tl-9": "45px",
        "tl-10": "54px",
        "tl-11": "63px",
        "tl-12": "72px",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        "accordion-down":
          "accordion-down 0.2s cubic-bezier(.25, .46, .45, .94)",
        "accordion-up": "accordion-up 0.2s cubic-bezier(.25, .46, .45, .94)",
        float: "float 3s cubic-bezier(.645, .045, .355, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
