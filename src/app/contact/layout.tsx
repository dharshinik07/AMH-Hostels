import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Head Office Directions | Aishwaraya Hostels Chennai",
  description:
    "Contact Aishwaraya Hostels Chennai by phone (+91 90434 56234), email, or visit our central office in Selaiyur. Fast enquiry response and site visit assistance.",
  openGraph: {
    title: "Contact Us | Aishwaraya Hostels Chennai",
    description: "Get in touch with Aishwaraya Hostels management for booking enquiries, branch visits, and resident support.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
