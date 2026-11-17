import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { FileText, Building2, ShieldCheck, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Aishwaraya Hostels Chennai",
  description:
    "Terms of Use and Accommodation Agreement conditions for Aishwaraya Hostels across Chennai. Read our policies regarding room reservations, house rules, and resident agreements.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="gold" className="mb-3">Legal Agreement</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-sm md:text-base text-gray-600">
            Terms of Use for Website Services & Provisional Accommodation Bookings
          </p>
          <p className="text-xs text-gray-400 mt-1">Effective Date: March 16, 2026 | Last Updated: March 16, 2026</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-12 space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
          
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <h2 className="font-bold text-gray-900 text-base mb-1 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> Important Notice
            </h2>
            <p className="text-sm text-gray-600">
              By accessing or submitting an enquiry or booking request on this website (aishwaryahostels.com), you enter into a binding agreement to adhere to these Terms of Use and the governing laws of Tamil Nadu, India. If you disagree with any portion of these terms, please refrain from submitting information or using our services.
            </p>
          </div>

          {/* 1. Entity & Scope */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">1. Business Identification & Scope of Services</h2>
            <p>
              This website is operated by <strong>Aishwaraya Hostels &amp; PG Accommodations</strong>, operating across 8 branches in Tambaram, Selaiyur, Camp Road, Sembakkam, Madampakkam, and surrounding educational corridors in Chennai, Tamil Nadu, India.
            </p>
            <p>
              The digital platform serves as an informational directory and provisional reservation management tool. It enables students, job seekers, and corporate working professionals to review hostel amenities, browse floor layouts, verify approximate branch proximity to colleges/tech parks, and submit reservation requests.
            </p>
          </section>

          {/* 2. Nature of Online Reservations */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. Provisional Nature of Online Booking Requests</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
              <li>
                <strong>No Automatic Guarantee:</strong> Submitting a booking or inquiry form via this website represents an expression of interest and creates a <em>provisional reservation inquiry</em>. A legally binding tenancy or hostel license agreement is only established upon:
                <ul className="list-circle pl-6 mt-1 space-y-1 text-xs text-gray-600">
                  <li>(a) Completion and physical signing of the official Hostel Admission Form;</li>
                  <li>(b) Submission and verification of valid government photo identification (Aadhaar / Passport / College ID / Company ID);</li>
                  <li>(c) Receipt of the agreed security deposit and advance monthly maintenance fee.</li>
                </ul>
              </li>
              <li>
                <strong>Right to Refuse Admission:</strong> In compliance with hostel safety regulations and branch capacity constraints, the management reserves the right to accept or decline any reservation request at its discretion.
              </li>
              <li>
                <strong>Price Quotations:</strong> Room fees, meal inclusions, and utility sub-metering policies are subject to the specific room variant selected and will be confirmed in writing by the branch manager prior to check-in.
              </li>
            </ul>
          </section>

          {/* 3. House Rules & Resident Code of Conduct */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. Resident Guidelines & Essential House Rules</h2>
            <p>All admitted residents agree to uphold hostel standards designed for community welfare and safety:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1.5">🕒 Curfew & Biometric Timings</h3>
                <p className="text-gray-600">Main gates lock at 10:30 PM for student safety. Late entry for shift-workers requires prior warden permission and valid corporate work badges.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1.5">🚫 Substance Prohibition</h3>
                <p className="text-gray-600">Strict zero-tolerance policy regarding alcohol, drugs, narcotics, smoking, and gambling inside hostel premises. Violators face immediate eviction and police reporting.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1.5">👥 Visitor Policy</h3>
                <p className="text-gray-600">Day visitors and parents are permitted in designated lounge areas only between 10:00 AM and 7:00 PM. No external visitors are permitted in dorm rooms without manager clearance.</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1.5">⚡ Appliance Usage</h3>
                <p className="text-gray-600">High-wattage immersion rods, electric stoves, and personal induction cooktops are strictly forbidden in bedrooms due to electrical fire hazard codes.</p>
              </div>
            </div>
          </section>

          {/* 4. Intellectual Property & Image Rights */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">4. Intellectual Property & Image Copyright Disclosures</h2>
            <p>
              All trademarks, site styling, graphics, layout, and written content are the proprietary property of Aishwaraya Hostels.
            </p>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900">
              <strong>Image Copyright & Representation Notice:</strong> Photographic assets displayed across our rooms, gallery, and branch banners are sourced under commercial licenses from Unsplash (Unsplash License) or photographed on-premise. Visuals serve an illustrative representation of interior cleanliness, bunk designs, and lighting. Specific wall finishes, drapery, and minor fittings may vary slightly across individual branch properties.
            </div>
          </section>

          {/* 5. Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by Indian law, Aishwaraya Hostels, its partners, and employees shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li>Temporary technical interruptions, website downtime, or transmission delays in electronic enquiry delivery.</li>
              <li>Loss of personal items or valuables kept unsecured within shared room premises (all residents are provided individual lockers and are advised to maintain personal padlocks).</li>
              <li>Unscheduled municipal power or water interruptions caused by civic board works beyond hostel administrative control (inverter backup is provided for essential lighting and Wi-Fi).</li>
            </ul>
          </section>

          {/* 6. Governing Law & Jurisdiction */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">6. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. In the event of any legal dispute or claim arising from these terms or hostel residency, the parties submit to the exclusive jurisdiction of the competent civil courts in <strong>Chennai, Tamil Nadu, India</strong>.
            </p>
          </section>

          {/* 7. Contact Details */}
          <section className="space-y-2 pt-4 border-t border-gray-100 text-xs sm:text-sm">
            <h3 className="font-bold text-gray-900">Official Contact Information</h3>
            <p>Aishwaraya Hostels & PG Accommodations</p>
            <p>Head Office: W4CV+83H, Avvai Street, Barathi Nagar, IOB Colony, Selaiyur, Chennai, Tamil Nadu 600073</p>
            <p>Phone: +91 90434 56234 | Email: aishwaryahostels@gmail.com</p>
          </section>

          {/* Footer links */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold">
            <Link href="/" className="text-primary hover:underline">← Return to Homepage</Link>
            <div className="flex gap-4 text-gray-500">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
              <Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
