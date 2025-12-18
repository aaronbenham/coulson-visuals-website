import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // EXAMPLE
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
    url: "https://example.com", // EXAMPLE
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-black text-white antialiased">{children}</body>
    </html>
  );
}
