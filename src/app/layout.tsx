import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import "./globals.css";

const mitr = Mitr({
  variable: "--font-mitr",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
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
    url: "https://jrkitt.com",
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
        <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Cdefs%3E%3CradialGradient%20id='g'%20cx='30%25'%20cy='30%25'%3E%3Cstop%20offset='0%25'%20stop-color='%2360a5fa'/%3E%3Cstop%20offset='100%25'%20stop-color='%231e3a8a'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle%20cx='50'%20cy='50'%20r='46'%20fill='url(%23g)'/%3E%3C/svg%3E" />
      </head>
      <body
        className={`${mitr.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
