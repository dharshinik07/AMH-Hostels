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
    default: "PGs in Tambaram | PG for Men at Tambaram | Mens Hostel in Tambaram - Aishwaraya Hostels",
    template: "%s | PGs in Tambaram | Aishwaraya Hostels",
  },
  description:
    "Looking for top PGs in Tambaram or the best PG for men at Tambaram? Aishwaraya Hostels offers 8 premium branches across East Tambaram, West Tambaram, Tambaram Sanitorium, Selaiyur, Camp Road, Sembakkam, and Madampakkam. Homely 3-time meals, split AC, 5G Wi-Fi & 24/7 CCTV.",
  keywords: [
    "PGs in Tambaram",
    "PG for men at Tambaram",
    "Mens Hostel in Tambaram",
    "PG in Tambaram East",
    "PG in Tambaram West",
    "PG in Selaiyur",
    "PG in Camp Road",
    "PG in Sembakkam",
    "Mens Hostel in Selaiyur",
    "PG near MCC College Tambaram",
    "PG near Bharath University Selaiyur",
    "Hostel in Tambaram Sanitorium",
    "PG for gents in Tambaram",
    "Hostels in Tambaram with food",
    "Paying Guest in Tambaram",
    "Aishwaraya Hostels Chennai",
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
    siteName: "Aishwaraya Hostels - PGs in Tambaram & Chennai",
    title: "PGs in Tambaram | PG for Men at Tambaram | Mens Hostel in Tambaram",
    description:
      "Premier Mens PG accommodation across 8 branches in Tambaram, Selaiyur, Camp Road, Sembakkam & Madampakkam. Homely meals, split AC rooms, 5G Wi-Fi, and 24/7 security.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aishwaraya Hostels Chennai - PGs in Tambaram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PGs in Tambaram | PG for Men at Tambaram | Aishwaraya Hostels",
    description:
      "8 Prime Branches across Tambaram, Selaiyur, Camp Road, Sembakkam & Madampakkam. Homely food, split AC, and 24/7 security.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LodgingBusiness",
                  "@id": "https://aishwaryahostels.com/#business",
                  "name": "Aishwaraya Hostels - PGs in Tambaram & Mens Hostels",
                  "alternateName": "Aishwaraya Mens Hostel Chennai",
                  "url": "https://aishwaryahostels.com",
                  "logo": "https://aishwaryahostels.com/favicon.svg",
                  "image": "https://aishwaryahostels.com/og-image.jpg",
                  "description": "Top-rated PGs in Tambaram and best PG for men at Tambaram, Selaiyur, Camp Road, and Sembakkam. Offering AC and Non-AC rooms with 3 homestyle South Indian meals, 5G Wi-Fi, and 24/7 security.",
                  "telephone": "+919043456234",
                  "priceRange": "₹₹",
                  "currenciesAccepted": "INR",
                  "paymentAccepted": "Cash, UPI, Net Banking",
                  "areaServed": [
                    "Tambaram",
                    "East Tambaram",
                    "West Tambaram",
                    "Tambaram Sanitorium",
                    "Selaiyur",
                    "Camp Road",
                    "Sembakkam",
                    "Madampakkam",
                    "Chennai"
                  ],
                  "department": [
                    {
                      "@type": "Hostel",
                      "name": "Aishwaraya Mens Hostel - East Tambaram (Near MCC College)",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Door No.37/10 Old No.14, Valmiki Street, East Tambaram",
                        "addressLocality": "Chennai",
                        "postalCode": "600059",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.928632,
                        "longitude": 80.129902
                      },
                      "telephone": "+919043456234"
                    },
                    {
                      "@type": "Hostel",
                      "name": "Aishwaraya Mens Hostel - West Tambaram (Near Railway Station)",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "10, Brindavan Ave, Rajaraththinam street, West Tambaram",
                        "addressLocality": "Chennai",
                        "postalCode": "600045",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.926587,
                        "longitude": 80.111066
                      },
                      "telephone": "+919043456234"
                    },
                    {
                      "@type": "Hostel",
                      "name": "Aishwaraya Mens Hostel - Tambaram Sanitorium",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Sanitorium railway station back side, Bharatha madha street, Tambaram Sanitorium",
                        "addressLocality": "Chennai",
                        "postalCode": "600047",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.930821,
                        "longitude": 80.127613
                      },
                      "telephone": "+919043456234"
                    },
                    {
                      "@type": "Hostel",
                      "name": "Aishwaraya Mens Hostel - Selaiyur (Bharathi Nagar)",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "No. 3, Avvai Street, Barathi Nagar, Selaiyur",
                        "addressLocality": "Chennai",
                        "postalCode": "600073",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.920311,
                        "longitude": 80.141296
                      },
                      "telephone": "+919043456234"
                    },
                    {
                      "@type": "Hostel",
                      "name": "Aishwaraya Mens Hostel - Selaiyur (Camp Road)",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "No:5A, 1st Main Road, IOB Colony, Camp Road, Selaiyur",
                        "addressLocality": "Chennai",
                        "postalCode": "600073",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.920457,
                        "longitude": 80.142896
                      },
                      "telephone": "+919043456234"
                    },
                    {
                      "@type": "Hostel",
                      "name": "Aishwaraya Mens Hostel - Camp Road (IOB Colony North Ext)",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "7/3 SRS Twinkle Star Apartment, 1st Cross Street, IOB Colony North Extension, Selaiyur, Camp Road",
                        "addressLocality": "Chennai",
                        "postalCode": "600073",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.922105,
                        "longitude": 80.143520
                      },
                      "telephone": "+919043456234"
                    },
                    {
                      "@type": "Hostel",
                      "name": "Aishwaraya Mens Hostel - Sembakkam (Arunagiri Nathar St)",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "No. 5, Arunagiri Nathar Street, Sembakkam",
                        "addressLocality": "Chennai",
                        "postalCode": "600073",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.928945,
                        "longitude": 80.151240
                      },
                      "telephone": "+919043456234"
                    },
                    {
                      "@type": "Hostel",
                      "name": "Aishwaraya Mens Hostel - Madampakkam",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Plot no:55A, Dr.S.R road, Devaraj Nagar, Madampakkam",
                        "addressLocality": "Chennai",
                        "postalCode": "600126",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                      },
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.906778,
                        "longitude": 80.145823
                      },
                      "telephone": "+919043456234"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://aishwaryahostels.com/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Which is the best PG for men at Tambaram?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aishwaraya Hostels is recognized as one of the best PGs for men at Tambaram, featuring 8 verified branches near MCC College, Tambaram Railway Station, Sanitorium, Selaiyur, Camp Road, and Sembakkam with homestyle South Indian food, split AC rooms, and 24/7 security."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are the room sharing options available in PGs in Tambaram?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aishwaraya Hostels provides 2-sharing, 3-sharing, 4-sharing, and 6-sharing rooms in AC and non-AC formats with personal lockers and attached bathrooms."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How to check bed availability in Aishwaraya Mens Hostel Tambaram?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To check real-time bed availability and pricing across all 8 branches, prospective residents can fill out our website enquiry form or call +91 90434 56234."
                      }
                    }
                  ]
                }
              ]
            }),
          }}
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
