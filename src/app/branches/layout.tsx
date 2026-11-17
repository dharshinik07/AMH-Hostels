import { Metadata } from "next";

export const metadata: Metadata = {
  title: "8 Branches in Tambaram & Chennai | PGs in Tambaram & Mens Hostels",
  description:
    "Explore all 8 Aishwaraya Hostel locations across East Tambaram, West Tambaram, Tambaram Sanitorium, Selaiyur, Camp Road, Sembakkam, and Madampakkam. View interactive GPS map, room amenities, and real-time admissions status.",
  openGraph: {
    title: "Our 8 Branches in Tambaram & Chennai | PGs in Tambaram & Mens Hostels",
    description: "Interactive map and directory for all 8 Mens PG hostel branches in Tambaram, Selaiyur, Camp Road, Sembakkam, and Madampakkam Chennai.",
  },
};

export default function BranchesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
