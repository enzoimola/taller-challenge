import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Taller challenge",
    description: "-",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <div className="flex flex-col min-h-screen">

            {/* Main content */}
            <main className="flex-grow p-4 bg-[#F9F9F7]">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4">
                <p className="text-center">© 2025 Taller</p>
            </footer>
        </div>
        </body>
        </html>
    );
}
