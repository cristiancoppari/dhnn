import localFont from "next/font/local";

export const DDINPro = localFont({
    src: [
        {
            path: "../../public/fonts/DINPro.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/DINPro-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/DINPro-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
});
