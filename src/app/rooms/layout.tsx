import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Sharing Options | AC & Non-AC Rates | Aishwaraya Hostels",
  description:
    "Compare 2, 3, 4, and 6 sharing AC and Non-AC hostel rooms in Chennai. Detailed amenities checklist, bunk bed guide, and direct room booking.",
  openGraph: {
    title: "Rooms & Sharing Options | Aishwaraya Hostels Chennai",
    description: "Compare 2, 3, 4, 6 sharing AC and Non-AC rooms with personal wardrobes, study desks, and attached bathrooms.",
  },
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
