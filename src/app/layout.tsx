import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieConsent from "@/components/legal/CookieConsent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aishwaryahostels.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aishwaraya Hostels | Premium PG Accommodation in Chennai",
    template: "%s | Aishwaraya Hostels Chennai",
  },
  description:
    "Aishwaraya Hostels offers premium PG & hostel accommodation across 6 branches in Chennai (Selaiyur, Tambaram, Madampakkam). Homely 3-time meals, split AC rooms, high-speed 5G Wi-Fi, and 24/7 CCTV security.",
  keywords: [
    "PG in Chennai",
    "Hostel in Chennai",
    "Mens PG Chennai",
    "Womens Hostel Chennai",
    "PG in Selaiyur",
    "Hostel in Tambaram",
    "PG near MCC College",
    "PG near Bharath University",
    "Aishwaraya Hostels",
    "Paying Guest accommodation Chennai",
  ],
  authors: [{ name: "Aishwaraya Hostels Administration" }],
  creator: "Aishwaraya Hostels",
  publisher: "Aishwaraya Hostels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Aishwaraya Hostels Chennai",
    title: "Aishwaraya Hostels | Premium PG Accommodation across 6 Branches in Chennai",
    description:
      "Comfortable living for students and working professionals near MCC, Bharath & SRM. AC/Non-AC rooms, 3 homestyle meals daily, biometric security & 5G Wi-Fi.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aishwaraya Hostels Chennai - Premium PG Accommodation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aishwaraya Hostels Chennai | Premium PG Accommodation",
    description:
      "6 Prime Branches across Tambaram, Selaiyur, and Madampakkam. Homely food, split AC, and 24/7 security.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-surface text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
