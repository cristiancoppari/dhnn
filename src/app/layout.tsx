import type { Metadata } from "next";

import { DDINPro } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
    title: "DHNN Challenge",
    description: "Challenge built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={DDINPro.className}>{children}</body>
        </html>
    );
}
