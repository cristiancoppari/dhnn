import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                // "2xl": "1364px",
                "lg-2": "1130px",
                "2xl": "1410px",
            },
            fontSize: {
                "2xs": "0.625rem",
            },
            margin: {
                30: "7.5rem",
            },
            padding: {
                15: "3.75rem",
                18: "4.5rem",
                25: "6.25rem",
                30: "7.5rem",
            },
            // gridTemplateColumns: {
            //     12: "1fr repeat(12, 5rem 1rem) 1fr",
            // },
            colors: {
                "grey-scale-100": "#fafafa",
                "grey-scale-500": "#9e9e9e",
                "grey-scale-700": "#616161",
                "grey-scale-900": "#212121",
                "primary-brand-color": "#0451dd",
            },
        },
    },
};
export default config;
