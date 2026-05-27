import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "./JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Sunrise Organic Kampot Pepper — Single Origin, Hand-Harvested",
    template: "%s — Sunrise Organic Kampot Pepper",
  },
  description:
    "Authentic Kampot pepper from Cambodia. PGI-certified, organically grown on our family farm. Black, white, and red peppercorns — the world's finest pepper, from our soil to your table.",
  keywords: [
    "Kampot pepper",
    "organic Kampot pepper",
    "PGI certified pepper",
    "Cambodian pepper",
    "black peppercorn",
    "white peppercorn",
    "red peppercorn",
    "Sunrise Pepper",
    "Kampot province",
    "sunrise organic kampot pepper",
    "kampot peppercorn",
    "buy kampot pepper",
    "premium pepper",
    "artisan pepper",
    "single origin pepper",
    "fair trade pepper",
  ],
  metadataBase: new URL("https://sunrisepepper.com"),
  openGraph: {
    title: "Sunrise Organic Kampot Pepper",
    description:
      "Single origin, hand-harvested Kampot pepper from our family farm in Cambodia. PGI-certified.",
    type: "website",
    url: "https://sunrisepepper.com",
    siteName: "Sunrise Pepper",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunrise Organic Kampot Pepper",
    description:
      "Single origin, hand-harvested Kampot pepper from our family farm in Cambodia.",
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
  alternates: {
    canonical: "https://sunrisepepper.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
        <JsonLd />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
