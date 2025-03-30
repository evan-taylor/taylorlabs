import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Taylor Labs | Tech Playground & Digital Studio",
  description: "Building intuitive, delightful software that tackles real-world challenges—with clean code, seamless UX, and just the right amount of magic.",
  keywords: ["Taylor Labs", "Tech Studio", "Evan Taylor", "Web Development", "Mobile Apps", "Software Development"],
  authors: [{ name: "Evan Taylor", url: "https://www.linkedin.com/in/evan-l-taylor/" }],
  creator: "Evan Taylor",
  metadataBase: new URL("https://taylorlabs.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taylorlabs.co",
    title: "Taylor Labs | Tech Playground & Digital Studio",
    description: "Building intuitive, delightful software that tackles real-world challenges.",
    siteName: "Taylor Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor Labs | Tech Playground & Digital Studio",
    description: "Building intuitive, delightful software that tackles real-world challenges.",
    creator: "@evantaylor1104",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
