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
                "2xl": "1364px",
            },
            fontSize: {
                "2xs": "0.625rem",
            },

            colors: {
                "grey-scale-500": "#9e9e9e",
                "grey-scale-700": "#616161",
                "grey-scale-900": "#212121",
                "primary-brand-color": "#0451dd",
            },
        },
    },
};
export default config;
