import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DotGrid from "./components/DotGrid";
import CursorTrail from "./components/CursorTrail";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tom Kerlin — AI-Enhanced Marketing Ops",
  description: "Helping businesses modernize their marketing workflows with AI and agentic systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        {/* Cyan-to-navy gradient background */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 95% 120% at 5% 50%, rgba(34,237,227,0.60) 0%, #0a1a3e 70%, black 90%)",
          }}
        />
        {/* Interactive dot grid */}
        <DotGrid />
        {/* Pink cursor trail */}
        <CursorTrail />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
