import Link from "next/link";
import { ArrowLeft, Home, MapPin, BedDouble, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface pt-32 pb-24 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 text-center">
        
        {/* Large 404 Visual */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary/10 text-primary font-extrabold text-4xl mb-6">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
          The page or room link you are looking for has been moved, renamed, or does not exist. Let&apos;s get you back to the right accommodation.
        </p>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-left">
          <Link
            href="/"
            className="p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors flex flex-col gap-1 text-xs"
          >
            <Home className="w-4 h-4 text-primary" />
            <span className="font-bold text-gray-900">Homepage</span>
            <span className="text-gray-500 text-[11px]">Start from beginning</span>
          </Link>

          <Link
            href="/branches"
            className="p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors flex flex-col gap-1 text-xs"
          >
            <MapPin className="w-4 h-4 text-gold" />
            <span className="font-bold text-gray-900">6 Branches</span>
            <span className="text-gray-500 text-[11px]">Interactive map</span>
          </Link>

          <Link
            href="/rooms"
            className="p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors flex flex-col gap-1 text-xs col-span-2 sm:col-span-1"
          >
            <BedDouble className="w-4 h-4 text-primary" />
            <span className="font-bold text-gray-900">Rooms & Rates</span>
            <span className="text-gray-500 text-[11px]">AC & Non-AC sharing</span>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 border-t border-gray-100">
          <Button variant="primary" href="/" className="w-full sm:w-auto font-bold px-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
          <a
            href="tel:+919043456234"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-primary" /> Need Help? Call 90434 56234
          </a>
        </div>
      </div>
    </div>
  );
}
