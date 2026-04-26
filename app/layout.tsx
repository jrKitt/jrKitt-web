import type { Metadata } from "next";
import { JetBrains_Mono, Prompt } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const displayFont = Prompt({
  variable: "--font-display",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kittichai Raksawong | Portfolio",
  description:
    "Junior Full Stack Developer portfolio featuring selected projects, tech stack, and contact links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${monoFont.variable} antialiased bg-white text-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
