import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunrise Organic Kampot Pepper — Single Origin, Hand-Harvested",
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
  ],
  openGraph: {
    title: "Sunrise Organic Kampot Pepper",
    description:
      "Single origin, hand-harvested Kampot pepper from our family farm in Cambodia. PGI-certified.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
