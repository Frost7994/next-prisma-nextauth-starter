// Tailwind 3.1 added types for autocompletion
/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: {
                    50: "#F5B48E",
                    100: "#F4A87C",
                    200: "#F39B68",
                    300: "#F18E55",
                    400: "#F08242",
                    500: "#EE752F",
                    600: "#ED691D",
                    700: "#E25F12",
                    800: "#D05711",
                    900: "#BD4F0F",
                },
                secondary: {
                    50: "#fdf4ff",
                    100: "#fae8ff",
                    200: "#f5d0fe",
                    300: "#f0abfc",
                    400: "#e879f9",
                    500: "#d946ef",
                    600: "#c026d3",
                    700: "#a21caf",
                    800: "#86198f",
                    900: "#701a75",
                },
            },
        },
    },
    plugins: [],
};
