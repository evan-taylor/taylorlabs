import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taylor Labs | Innovative Software Solutions",
  description:
    "Taylor Labs creates intuitive, high-performance applications with a focus on beautiful design and exceptional functionality.",
  keywords:
    "software development, app development, Mac apps, iOS apps, Taylor Labs, Evan Taylor, SoundSnooze",
  authors: [{ name: "Evan Taylor" }],
  creator: "Evan Taylor",
  publisher: "Taylor Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taylorlabs.co",
    siteName: "Taylor Labs",
    title: "Taylor Labs | Innovative Software Solutions",
    description:
      "Taylor Labs creates intuitive, high-performance applications with a focus on beautiful design and exceptional functionality.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taylor Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor Labs | Innovative Software Solutions",
    description:
      "Taylor Labs creates intuitive, high-performance applications with a focus on beautiful design and exceptional functionality.",
    creator: "@evantaylor1104",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

/**
 * Root layout component that defines the HTML structure and global metadata for the application.
 *
 * Renders the main HTML scaffold with language set to English, injects organization structured data via JSON-LD, and applies a monospace font to the body. All page content is rendered within the body via the {@link children} prop.
 *
 * @param children - The React node(s) to be rendered within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Taylor Labs",
              url: "https://taylorlabs.co",
              logo: "https://taylorlabs.co/taylor-labs-logo.png",
              sameAs: [
                "https://twitter.com/evantaylor1104",
                "https://www.linkedin.com/in/evan-l-taylor/",
                "https://github.com/evan-taylor",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-360-207-1844",
                email: "hello@taylorlabs.co",
                contactType: "customer service",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "2261 Market Street #86329",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94114",
                addressCountry: "US",
              },
            }),
          }}
          type="application/ld+json"
        />
        <script defer src="https://assets.onedollarstats.com/stonks.js" />
      </head>
      <body className="font-mono">{children}</body>
    </html>
  );
}
