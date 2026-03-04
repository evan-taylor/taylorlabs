import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
});

const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Taylor Labs",
  url: "https://taylorlabs.co",
  logo: "https://taylorlabs.co/taylor-labs-logo.png",
  description:
    "Design and engineering, shipped fast for startups and small businesses.",
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
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taylorlabs.co"),
  title: "Taylor Labs | Design & Engineering for Startups",
  description:
    "Turn startup and small-business ideas into reliable, launch-ready websites and digital products through integrated design and engineering delivered fast.",
  keywords:
    "web development, startup websites, digital products, design engineering, Taylor Labs, Evan Taylor, same-day mockups",
  authors: [{ name: "Evan Taylor" }],
  creator: "Evan Taylor",
  publisher: "Taylor Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taylorlabs.co",
    siteName: "Taylor Labs",
    title: "Taylor Labs | Design & Engineering for Startups",
    description:
      "Turn startup and small-business ideas into reliable, launch-ready websites and digital products through integrated design and engineering delivered fast.",
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
    title: "Taylor Labs | Design & Engineering for Startups",
    description:
      "Turn startup and small-business ideas into reliable, launch-ready websites and digital products through integrated design and engineering delivered fast.",
    creator: "@evantaylor1104",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

/**
 * Root layout component that defines the HTML structure and global metadata for the application.
 *
 * Renders the main HTML scaffold with language set to English, injects organization structured data via JSON-LD,
 * and applies Roboto Flex as the brand typeface.
 *
 * @param children - The React node(s) to be rendered within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html className={robotoFlex.variable} lang="en">
      <head>
        <meta content="Taylor Labs" name="apple-mobile-web-app-title" />
        <script type="application/ld+json">{organizationJsonLd}</script>
        {isProduction ? (
          <>
            <Script
              src="https://assets.onedollarstats.com/stonks.js"
              strategy="lazyOnload"
            />
            <Script
              data-token="dda4b87e-22eb-48e3-9206-63d71b804e28"
              src="https://cdn.visitors.now/v.js"
              strategy="lazyOnload"
            />
          </>
        ) : null}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
