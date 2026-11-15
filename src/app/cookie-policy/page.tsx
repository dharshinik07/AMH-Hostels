import { Metadata } from "next";
import Link from "next/link";
import { Cookie, Shield, CheckCircle2, Settings } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Cookie Policy | Aishwaraya Hostels Chennai",
  description:
    "Cookie Policy for Aishwaraya Hostels website. Learn what cookies and local storage mechanisms are used, why they are used, and how to manage your privacy preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="gold" className="mb-3">Cookie Compliance</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-sm md:text-base text-gray-600">
            Transparent disclosure of digital cookies and local data storage
          </p>
          <p className="text-xs text-gray-400 mt-1">Effective Date: March 16, 2026</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-12 space-y-10 text-gray-700 leading-relaxed text-sm md:text-base">
          
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-3">
            <Cookie className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-gray-900 text-base mb-1">Overview</h2>
              <p className="text-sm text-gray-600">
                This Cookie Policy explains how Aishwaraya Hostels uses browser cookies and local storage technologies when you visit our website. We do not use third-party behavioral advertising cookies, data broker trackers, or cross-site tracking fingerprints.
              </p>
            </div>
          </div>

          {/* 1. What are cookies */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">1. What Are Cookies and Local Storage?</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device by websites you visit. Similar technologies like <strong>HTML5 LocalStorage</strong> enable websites to remember user preferences (such as your cookie consent choices or hostel booking step progress) across browser sessions.
            </p>
          </section>

          {/* 2. Categorization */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">2. Categories of Cookies We Use</h2>
            
            <div className="space-y-4">
              {/* Category A: Essential */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" /> Strictly Necessary Cookies & Storage
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                    Always Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">
                  These items are strictly essential for core website navigation, network security, and maintaining state during the multi-step booking workflow.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500">
                        <th className="py-2 pr-4">Key / Cookie Name</th>
                        <th className="py-2 pr-4">Type</th>
                        <th className="py-2 pr-4">Duration</th>
                        <th className="py-2">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="py-2 pr-4 font-mono font-bold">aishwaraya_cookie_consent</td>
                        <td className="py-2 pr-4">LocalStorage</td>
                        <td className="py-2 pr-4">12 Months</td>
                        <td className="py-2">Remembers your cookie banner preferences so it is not shown repeatedly.</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono font-bold">admin_token</td>
                        <td className="py-2 pr-4">Session Token</td>
                        <td className="py-2 pr-4">Session only</td>
                        <td className="py-2">Maintains authenticated session state for authorized hostel managers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Category B: Embeds */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                    <Settings className="w-4 h-4 text-blue-600" /> Third-Party Content & Map Embeds
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                    Functional
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Our interactive map uses OpenStreetMap tiles loaded over HTTPS. We do not transmit your GPS location to any server without your explicit one-time prompt. Google Maps iframe on the contact page is protected by strict sandboxing.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Managing Cookies */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">3. How to Manage or Revoke Your Consent</h2>
            <p>
              You can control or clear cookies at any time through your web browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li>View cookies currently stored on your computer and delete them individually.</li>
              <li>Block third-party cookies or block all cookies completely.</li>
              <li>Clear all cookies when you close your browser.</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              Please note that disabling strictly necessary cookies may prevent the online booking form from completing its multi-step validation.
            </p>
          </section>

          {/* 4. Contact */}
          <section className="space-y-2 pt-4 border-t border-gray-100 text-xs sm:text-sm">
            <h3 className="font-bold text-gray-900">Questions on Cookies?</h3>
            <p>Contact our Data Compliance team at <a href="mailto:aishwaryahostels@gmail.com" className="text-primary font-bold hover:underline">aishwaryahostels@gmail.com</a></p>
          </section>

          {/* Footer links */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold">
            <Link href="/" className="text-primary hover:underline">← Return to Homepage</Link>
            <div className="flex gap-4 text-gray-500">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
