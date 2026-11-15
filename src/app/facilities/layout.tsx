import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostel Facilities & Dining Menu | Aishwaraya Hostels Chennai",
  description:
    "Explore 12 essential PG amenities at Aishwaraya Hostels: 3 times daily homestyle meals, high-speed 5G Wi-Fi, daily housekeeping, inverter power backup, and 24/7 biometric security.",
  openGraph: {
    title: "Facilities & Dining Menu | Aishwaraya Hostels Chennai",
    description: "Homely meals 3 times a day, 5G Wi-Fi, split AC, daily housekeeping, and 24/7 security in Chennai.",
  },
};

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
