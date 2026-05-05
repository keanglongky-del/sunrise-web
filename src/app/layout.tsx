import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunrise Organic Kampot Pepper — The World's Finest Pepper",
  description:
    "Authentic Kampot pepper, organically grown in Cambodia's legendary pepper region. PGI-certified, hand-harvested, sun-dried. Premium black, white, and red pepper for discerning palates.",
  keywords: [
    "Kampot pepper",
    "organic pepper",
    "Cambodian pepper",
    "PGI certified pepper",
    "black pepper",
    "white pepper",
    "red pepper",
    "Sunrise Pepper",
  ],
  openGraph: {
    title: "Sunrise Organic Kampot Pepper",
    description:
      "Authentic Kampot pepper, organically grown in Cambodia. PGI-certified, hand-harvested, sun-dried.",
    type: "website",
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
