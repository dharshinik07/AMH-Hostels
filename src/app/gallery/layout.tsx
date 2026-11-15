import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Real Rooms & Amenities | Aishwaraya Hostels",
  description:
    "Browse authentic photographs of Aishwaraya Hostels in Chennai: bedrooms, dining facilities, study areas, and residential surroundings.",
  openGraph: {
    title: "Hostel Photo Gallery | Aishwaraya Hostels Chennai",
    description: "View real photos of our rooms, study zones, dining halls, and hostel buildings in Chennai.",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
