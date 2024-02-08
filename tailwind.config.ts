import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
<<<<<<< Updated upstream
        screens: {
            "2xl": "1364px",
=======
        extend: {
            screens: {
                "2xl": "1364px",
            },
            fontSize: {
                "2xs": "0.625rem",
            },
            padding: {
                15: "3.75rem",
                18: "4.5rem",
                25: "6.25rem",
            },
            gridTemplateColumns: {
                6: "repeat(6, minmax(0, 3rem))",
                12: "repeat(12, minmax(0, 5rem))",
            },
            colors: {
                "grey-scale-50": "#fafafa",
                "grey-scale-500": "#9e9e9e",
                "grey-scale-700": "#616161",
                "grey-scale-900": "#212121",
                "primary-brand-color": "#0451dd",
            },
>>>>>>> Stashed changes
        },
    },
};
export default config;
