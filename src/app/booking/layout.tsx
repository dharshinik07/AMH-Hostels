import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Bed Online | Provisional Reservation | Aishwaraya Hostels",
  description:
    "Reserve your hostel bed online across 6 Aishwaraya branches in Chennai. Select branch, AC/Non-AC room, sharing preference, and move-in date.",
  openGraph: {
    title: "Book Bed Online | Aishwaraya Hostels Chennai",
    description: "Online booking form for student and working professional hostel accommodation in Chennai.",
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
