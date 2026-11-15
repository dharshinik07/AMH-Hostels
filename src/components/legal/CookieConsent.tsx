"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("aishwaraya_cookie_consent");
      if (!consent) {
        // Small delay so it animates in smoothly after initial render
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      }
    } catch (_) {
      // LocalStorage access may fail in private mode
    }
  }, []);

  const handleConsent = (choice: "all" | "essential") => {
    try {
      localStorage.setItem(
        "aishwaraya_cookie_consent",
        JSON.stringify({ choice, timestamp: new Date().toISOString() })
      );
    } catch (_) {}
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie and Privacy Consent Banner"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-fade-in"
    >
      <div className="bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-slate-700/60 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-gold font-bold text-sm">
            <Cookie className="w-4 h-4 text-gold shrink-0" />
            <span>Your Privacy & Cookie Choices</span>
          </div>
          <button
            onClick={() => handleConsent("essential")}
            aria-label="Close cookie consent banner"
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-gray-300 leading-relaxed">
          We use strictly necessary cookies for core website functionality, maps, and secure forms in compliance with India&apos;s <strong>DPDP Act 2023</strong>. We do not sell your personal data or use cross-site tracking cookies.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={() => handleConsent("all")}
            className="flex-1 py-2 px-3 rounded-xl bg-gold hover:bg-gold-light text-primary-dark font-bold text-xs transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Accept All
          </button>
          <button
            onClick={() => handleConsent("essential")}
            className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-200 font-semibold text-xs border border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-white"
          >
            Essential Only
          </button>
          <Link
            href="/cookie-policy"
            className="text-[11px] text-gray-400 hover:text-gold underline transition-colors px-1 py-1"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </aside>
  );
}
