import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "CORE HQ — Building intelligence for a better world",
    template: "%s | CORE HQ",
  },
  description:
    "CORE HQ is building technology to understand the physical world, explore complex challenges, and support better human decisions.",
  openGraph: {
    type: "website",
    siteName: "CORE HQ",
    images: [
      {
        url: "/brand/og.png",
        width: 1200,
        height: 630,
        alt: "CORE HQ — Understand the world. Shape what comes next.",
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
