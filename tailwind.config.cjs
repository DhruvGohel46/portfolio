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
      },
  },
  plugins: [],
};
