import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            height: {
                "screen-mobile": "calc(100dvh - 3.75rem)",
                "screen-desktop": "calc(100dvh - 5rem)",
            },
            screens: {
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
            colors: {
                "grey-scale-50": "#e1e5ec",
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
