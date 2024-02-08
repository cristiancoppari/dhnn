import type { Metadata } from "next";

import Navbar from "@/components/organisms/navbar";
import { DDINPro } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
    title: "Aeronex",
    description:
        "Aeronex is a platform for managing your aircraft maintenance.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={DDINPro.className}>
                <Navbar />

                {children}
            </body>
        </html>
    );
}
