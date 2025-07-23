import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-thai",
  subsets: ["thai"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "jrKitt",
  description: "🐈 Junior Full Stack Developer at APSTH & Web Developer at Student Union KKU. Passionate about modern web technologies including Next.js, TypeScript, and cloud computing.",
  keywords: ["Full Stack Developer", "Web Developer", "Next.js", "TypeScript", "React", "Node.js", "jrKitt", "Kittichai"],
  authors: [{ name: "Kittichai Raksawong", url: "https://github.com/jrKitt" }],
  creator: "Kittichai Raksawong",
  openGraph: {
    title: "Kittichai Raksawong (jrKitt) - Full Stack Developer",
    description: "🐈 Junior Full Stack Developer passionate about modern web technologies",
    url: "https://jrkitt.dev",
    siteName: "jrKitt Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kittichai Raksawong (jrKitt) - Full Stack Developer",
    description: "🐈 Junior Full Stack Developer passionate about modern web technologies",
    creator: "@jrKitt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='60' font-size='60'%3E%F0%9F%98%B8%3C/text%3E%3C/svg%3E" />
      </head>
      <body
        className={`${ibmThai.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
