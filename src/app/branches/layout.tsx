import { Metadata } from "next";

export const metadata: Metadata = {
  title: "6 Branches in Chennai & Interactive Map | Aishwaraya Hostels",
  description:
    "Explore all 6 Aishwaraya Hostel locations in Chennai: Selaiyur, Tambaram, Madampakkam. View interactive GPS map, real-time bed availability, and college proximity.",
  openGraph: {
    title: "Our 6 Branches in Chennai | Interactive Map | Aishwaraya Hostels",
    description: "Interactive map and directory for all 6 hostel branches in Tambaram, Selaiyur, and Madampakkam Chennai.",
  },
};

export default function BranchesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
