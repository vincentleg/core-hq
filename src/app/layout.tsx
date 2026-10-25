import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "CORE — Building intelligence for the physical world",
    template: "%s | CORE",
  },
  description:
    "CORE is building a shared intelligence layer for the physical world, beginning with CORE World.",
  openGraph: {
    type: "website",
    siteName: "CORE",
    images: [
      {
        url: "/brand/og.png",
        width: 1200,
        height: 630,
        alt: "CORE — Understand our world. Build a better one.",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/brand/og.png"] },
  icons: { icon: "/brand/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
