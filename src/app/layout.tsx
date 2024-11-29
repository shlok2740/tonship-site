import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "TONShip",
    description: "TONShip is a blockchain-based space escape game app.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={clsx(dmSans.className, "antialiased")}>
        {children}
        </body>
        </html>
    );
}
