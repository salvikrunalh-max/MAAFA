import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteMetadata } from "@/lib/seo";
import "./globals.css";

const FloatingBookingCTA = dynamic(
  () => import("@/components/layout/FloatingBookingCTA")
);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans">
        <Navbar />
        <main className="page-bottom-space">{children}</main>
        <Footer />
        <FloatingBookingCTA />
      </body>
    </html>
  );
}
