/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0B0F19",
                primary: "#FFFFFF",
                secondary: "#9CA3AF",
                accent: {
                    start: "#4f46e5",
                    end: "#7c3aed",
                },
                glass: {
                    bg: "rgba(255,255,255,0.05)",
                    border: "rgba(255,255,255,0.1)",
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(to right, #4f46e5, #7c3aed)',
            }
        },
    },
    plugins: [],
};
