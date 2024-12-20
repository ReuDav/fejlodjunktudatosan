import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../../components/navbar";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Fejlődjünk Tudatosan!",
    description: "Reucov Dávid - Junior Full-Stack Fejlesztő portfólió oldala",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-10E1EG9EM5" />
        </body>
        </html>
    );
}
