import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { IndianRupee, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy | Aishwaraya Hostels Chennai",
  description:
    "Official Refund, Cancellation, and Security Deposit Policy for Aishwaraya Hostels residents in Chennai. Clear timelines and conditions for advance booking refunds.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="gold" className="mb-3">Financial Terms</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Refund & Cancellation Policy</h1>
          <p className="text-sm md:text-base text-gray-600">
            Clear guidelines for security deposit returns, notice periods, and booking fee cancellations
          </p>
          <p className="text-xs text-gray-400 mt-1">Effective Date: March 16, 2026</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-12 space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
          
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <h2 className="font-bold text-gray-900 text-base mb-1 flex items-center gap-2">
              <IndianRupee className="w-5 h-5 text-primary" /> Transparent Financial Guarantees
            </h2>
            <p className="text-sm text-gray-600">
              At Aishwaraya Hostels, we value transparency with students, parents, and working professionals. This policy outlines exactly when and how advance booking tokens and security deposits are refunded.
            </p>
          </div>

          {/* 1. Advance Booking Token */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">1. Advance Booking Token / Reservation Fee</h2>
            <p>
              When reserving a bed prior to move-in, an advance reservation token is paid to hold the spot across our 8 branches:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                <h3 className="font-bold text-green-950 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-700" /> Cancellation 7+ Days Prior
                </h3>
                <p className="text-green-900">
                  If written cancellation is received at least <strong>7 calendar days</strong> prior to your scheduled move-in date, <strong>100% of the advance reservation token</strong> will be refunded without deductions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <h3 className="font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700" /> Cancellation Less Than 7 Days
                </h3>
                <p className="text-amber-900">
                  Cancellations requested under 7 days before check-in or failure to check in on the agreed date forfeit the holding token, as the bed was kept off the market for other applicants.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Security Deposit */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. Security Deposit Return Policy</h2>
            <p>
              Every admitted resident places a refundable security deposit upon signing the admission agreement. Security deposits are handled under strict escrow guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
              <li>
                <strong>30 Days Notice Period:</strong> To receive a full security deposit refund, the resident must submit a written move-out notice (via email or physical notice form) at least <strong>30 calendar days</strong> prior to the planned departure date.
              </li>
              <li>
                <strong>Room Inspection & Clearance:</strong> Upon move-out, a joint room inspection is completed with the branch manager. Provided all locker keys are returned, room fixtures remain undamaged, and monthly rent is settled, the deposit is refunded in full.
              </li>
              <li>
                <strong>Permitted Deductions:</strong> Management may deduct costs exclusively for: (a) repair of physical property damage exceeding normal wear and tear; (b) unreturned biometric key cards or locker keys (charged at ₹200 replacement fee); (c) pending electricity sub-meter shares.
              </li>
            </ul>
          </section>

          {/* 3. Monthly Rent Policy */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. Monthly Accommodation Fee</h2>
            <p>
              Monthly accommodation rent is billed in advance on or before the 5th of each calendar month. Once a rental month has commenced, rental charges for that active billing cycle are non-refundable, as meal provisions and room allocations have been scheduled.
            </p>
          </section>

          {/* 4. Processing Timelines & Modes */}
          <section className="space-y-4 p-5 rounded-2xl bg-gray-50 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" /> 4. Refund Settlement Timeline
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Approved refunds are credited within <strong>7 to 10 business days</strong> directly to the bank account (via NEFT/IMPS) or UPI ID registered under the resident&apos;s name. Cash refunds are strictly avoided to maintain transparent accounting records.
            </p>
          </section>

          {/* 5. Contact */}
          <section className="space-y-2 pt-4 border-t border-gray-100 text-xs sm:text-sm">
            <h3 className="font-bold text-gray-900">Need Assistance with a Refund Request?</h3>
            <p>Submit your booking receipt and bank details to <a href="mailto:aishwaryahostels@gmail.com" className="text-primary font-bold hover:underline">aishwaryahostels@gmail.com</a> or speak with our central accounts manager at +91 90434 56234.</p>
          </section>

          {/* Footer links */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold">
            <Link href="/" className="text-primary hover:underline">← Return to Homepage</Link>
            <div className="flex gap-4 text-gray-500">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
