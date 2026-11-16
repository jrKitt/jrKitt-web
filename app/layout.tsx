import type { Metadata } from "next";
import { JetBrains_Mono, Prompt } from "next/font/google";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
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
  title: "Kittichai Raksawong | Full Stack Developer",
  description:
    "Junior Full Stack Developer portfolio featuring selected projects, tech stack, and contact links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var p=window.matchMedia("(prefers-color-scheme: dark)").matches;if(t==="dark"||(!t&&p)){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${displayFont.variable} ${monoFont.variable} antialiased selection:bg-sky-500/20 selection:text-sky-900 dark:selection:text-sky-200`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
