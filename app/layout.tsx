import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

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
      <body className="min-h-full flex flex-col bg-black text-white">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
