import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mens Hostel & PG in Chennai | 6 Prime Branches",
  description:
    "Explore Aishwaraya Mens PG across 6 Chennai locations (Selaiyur, Tambaram, Madampakkam). AC/Non-AC rooms, 3 homestyle meals daily, biometric access & 5G Wi-Fi.",
  openGraph: {
    title: "Mens Hostel & PG in Chennai | Aishwaraya Hostels",
    description: "6 Prime Mens Branches across Tambaram, Selaiyur, and Madampakkam. Homely food, split AC, and 24/7 security.",
  },
};

export default function MensHostelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
