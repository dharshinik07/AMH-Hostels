import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Womens Hostel in Chennai | Upcoming Launch & Priority Waitlist",
  description:
    "Aishwaraya Womens Hostel is coming soon to Chennai. Safe, secure PG accommodation with 24/7 female wardens, biometric access, nutritious dining, and prime transit proximity.",
  openGraph: {
    title: "Womens Hostel in Chennai | Aishwaraya Hostels",
    description: "Upcoming safe & secure women's PG in Chennai with 24/7 female wardens, CCTV, and homestyle food.",
  },
};

export default function WomensHostelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
