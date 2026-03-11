import type { Metadata } from "next";
import "./globals.css";

import { siteConfig } from "@/src/lib/site-config";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Coulson Visuals | Premium Automotive Photography",
    template: "%s | Coulson Visuals",
  },
  description:
    "Premium automotive and exotic car photography for detailers, collectors, and brands. Cinematic visuals, fast turnaround, professional delivery.",
  openGraph: {
    title: "Coulson Visuals | Premium Automotive Photography",
    description:
      "Premium automotive and exotic car photography for detailers, collectors, and brands.",
    type: "website",
    url: siteConfig.siteUrl,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-black text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
