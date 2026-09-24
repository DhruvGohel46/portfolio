/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
      extend: {
          colors: {
              background: "var(--background)",
              foreground: "var(--foreground)",
              border: "var(--border)",
              muted: "var(--muted)",
              "muted-foreground": "var(--muted-foreground)",
              primary: "var(--primary)",
              "primary-foreground": "var(--primary-foreground)",
              accent: {
                  DEFAULT: "var(--accent)",
                  hover: "var(--accent-hover)",
              }
          },
          fontFamily: {
              sans: ['var(--font-inter)', 'sans-serif'],
              mono: ['var(--font-mono)', 'monospace'],
          },
          fontSize: {
              'display-xl': ['clamp(3rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
              'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
          },
      },
  },
  plugins: [],
};
