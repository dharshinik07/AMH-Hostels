import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, AlertCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy | DPDP Act 2023 Compliant | Aishwaraya Hostels Chennai",
  description:
    "Privacy Policy for Aishwaraya Hostels Chennai in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act India). Learn how we collect, process, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge variant="gold" className="mb-3">Legal & Compliance</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm md:text-base text-gray-600">
            Compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act, India)
          </p>
          <p className="text-xs text-gray-400 mt-1">Effective Date: March 16, 2026 | Last Revised: March 16, 2026</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-12 space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
          
          {/* Executive Summary */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-gray-900 text-base mb-1">Our Privacy Commitment</h2>
                <p className="text-sm text-gray-600">
                  Aishwaraya Hostels operates 6 student and professional PG branches across Chennai, Tamil Nadu. We collect only the minimum data strictly necessary to process your hostel booking enquiry, verify identity, and manage resident safety. We do not sell, rent, or monetize your personal data under any circumstances.
                </p>
              </div>
            </div>
          </div>

          {/* 1. Legal Basis & Notice */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">1. Notice and Grounds for Processing (DPDP Act 2023)</h2>
            <p>
              Under Section 5 and Section 6 of the Digital Personal Data Protection Act, 2023 (DPDP Act), we provide this notice prior to requesting your consent to collect personal data. By checking the explicit consent box on our booking or enquiry forms, you provide free, specific, informed, unconditional, and unambiguous consent for the specified purposes stated below.
            </p>
          </section>

          {/* 2. Data We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. Personal Data We Collect (Data Minimization)</h2>
            <p>
              We adhere strictly to the principle of <strong>Data Minimization</strong>. We only collect details essential to providing hostel accommodation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-gray-900 text-sm mb-2">A. Booking & Enquiry Data</h3>
                <ul className="text-xs space-y-1.5 text-gray-600">
                  <li>• Full Name (for resident registry and identification)</li>
                  <li>• 10-Digit Mobile Phone Number (for WhatsApp/call booking confirmation)</li>
                  <li>• Email Address (for booking vouchers and invoices)</li>
                  <li>• Tenant Category (Student, Working Professional, Job Seeker)</li>
                  <li>• Planned Move-in Date and Preferred Branch (e.g. Selaiyur, Tambaram)</li>
                  <li>• Room Preferences (AC / Non-AC, 2/3/4/6 Sharing, Bunk preference)</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-gray-900 text-sm mb-2">B. Check-in & Regulatory Data (Collected Offline on Admission)</h3>
                <ul className="text-xs space-y-1.5 text-gray-600">
                  <li>• Government Photo ID Proof (Aadhaar / Passport / College or Employee ID) as mandated by Chennai Police & Municipal Hostel Regulations</li>
                  <li>• Emergency Contact / Guardian Name & Phone Number</li>
                  <li>• Biometric scan for hostel entry access control (stored securely locally, never uploaded to third parties)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Purpose of Processing */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. Purpose of Data Processing (Purpose Limitation)</h2>
            <p>Your personal data is collected and processed solely for the following specified purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
              <li>Processing, verifying, and confirming your hostel bed reservation.</li>
              <li>Providing real-time room availability and responding to your enquiries.</li>
              <li>Complying with the Tamil Nadu Hostels and Accommodations Regulation Act and local law enforcement verification standards.</li>
              <li>Ensuring resident safety, fire evacuation registers, and security within the hostel premises.</li>
              <li>Administering billing, security deposit accounting, and refund settlement.</li>
            </ul>
          </section>

          {/* 4. Third-Party Integrations & Tracking */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">4. Third-Party Services, Embeds & Tracking Disclosures</h2>
            <p>Our website utilizes minimal, carefully sandboxed third-party integrations:</p>
            <div className="space-y-3 text-sm">
              <div className="p-3.5 rounded-lg border border-gray-200">
                <strong className="text-gray-900">OpenStreetMap & Leaflet:</strong> Used on our Branches page to render interactive maps. OpenStreetMap tiles are loaded directly with zero tracking beacons or behavioral advertising trackers.
              </div>
              <div className="p-3.5 rounded-lg border border-gray-200">
                <strong className="text-gray-900">Google Maps Embed:</strong> Rendered with sandbox protection and <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">referrerpolicy="no-referrer-when-downgrade"</code> for head office driving directions.
              </div>
              <div className="p-3.5 rounded-lg border border-gray-200">
                <strong className="text-gray-900">WhatsApp Direct Contact:</strong> When clicking "Chat on WhatsApp", you are redirected directly to WhatsApp's application. No tracking pixel or personal information is transmitted to Meta without your explicit initiation.
              </div>
            </div>
          </section>

          {/* 5. Rights of the Data Principal */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">5. Your Rights as a Data Principal (DPDP Act, Sections 11–14)</h2>
            <p>Under the DPDP Act 2023, you hold the following statutory rights regarding your personal data:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong>Right to Access Information:</strong> Request a summary of personal data held about you and processing activities undertaken.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong>Right to Correction & Erasure:</strong> Request immediate correction of misleading data, or deletion of data no longer required for legal obligations.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong>Right to Withdraw Consent:</strong> You may withdraw your consent at any time as easily as it was given by emailing our Grievance Officer.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong>Right of Grievance Redressal:</strong> File a formal grievance regarding data processing, resolved within 30 days.
                </div>
              </div>
            </div>
          </section>

          {/* 6. Children's Data */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">6. Protection of Children&apos;s Personal Data (Section 9)</h2>
            <p>
              In accordance with Section 9 of the DPDP Act 2023, Aishwaraya Hostels does not knowingly process personal data of individuals under 18 years of age without verifiable parental or legal guardian consent. For college students under 18 seeking hostel accommodation, admission forms and agreements must be co-signed by a parent or legal guardian.
            </p>
          </section>

          {/* 7. Data Retention & Erasure */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">7. Data Retention and Erasure (Storage Limitation)</h2>
            <p>
              Enquiry data from individuals who do not proceed with a booking is erased within 90 days. Resident records, billing ledgers, and police verification registers are retained for the statutory period required under Tamil Nadu State tenancy laws and Indian tax regulations (typically 3 to 7 years), after which they are securely wiped or shredded.
            </p>
          </section>

          {/* 8. Grievance Officer & Redressal */}
          <section className="space-y-4 p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
            <h2 className="text-xl font-bold text-amber-950 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-700" />
              8. Grievance Redressal Mechanism & Officer Details (Mandatory under DPDP Act)
            </h2>
            <p className="text-xs sm:text-sm text-amber-900">
              If you have any questions, concerns, or wish to exercise your data principal rights, you may submit a formal request to our designated Data Grievance Officer:
            </p>
            <div className="bg-white p-4 rounded-xl border border-amber-200 text-xs sm:text-sm space-y-1.5 text-gray-800">
              <p><strong>Designation:</strong> Data Protection & Grievance Officer</p>
              <p><strong>Entity:</strong> Aishwaraya Hostels & PG Accommodations</p>
              <p><strong>Address:</strong> W4CV+83H, Avvai Street, Barathi Nagar, IOB Colony, Selaiyur, Chennai, Tamil Nadu 600073</p>
              <p><strong>Email:</strong> <a href="mailto:aishwaryahostels@gmail.com" className="text-primary font-bold hover:underline">aishwaryahostels@gmail.com</a> (Subject: Attention Grievance Officer)</p>
              <p><strong>Helpline:</strong> +91 90434 56234</p>
              <p><strong>Turnaround Time:</strong> Initial acknowledgment within 48 business hours; complete redressal within 30 days.</p>
            </div>
            <p className="text-xs text-amber-800">
              If your grievance is not resolved to your satisfaction within 30 days, you hold the statutory right to escalate your complaint to the <strong>Data Protection Board of India (DPBI)</strong>.
            </p>
          </section>

          {/* Back links */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold">
            <Link href="/" className="text-primary hover:underline">← Return to Homepage</Link>
            <div className="flex gap-4 text-gray-500">
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
              <Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
