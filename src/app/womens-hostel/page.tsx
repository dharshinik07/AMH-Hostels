"use client";

import Link from "next/link";
import { Bell, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function WomensHostelPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919043456234";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in Aishwaraya Women's Hostel. Please notify me when it launches.");

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4c1d95] via-[#5b21b6] to-[#7c3aed]">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-bounce">
            <Bell className="w-4 h-4 text-pink-300" />
            <span className="text-white/90 text-sm font-medium tracking-wide">Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Aishwaraya
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-300 bg-clip-text text-transparent">
              Women&apos;s Hostel
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are bringing the same trusted Aishwaraya experience to women. Safe, secure, and homely PG accommodation designed exclusively for women — launching soon in Chennai.
          </p>

          {/* Features Preview */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["24/7 Security", "Female Wardens", "Biometric Access", "CCTV Surveillance", "Homely Food", "Prime Locations"].map((feature) => (
              <span
                key={feature}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm font-medium backdrop-blur-sm"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Notified on WhatsApp
            </a>
            <Button href="/" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md">
              Explore Mens Hostels <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Currently 6 Mens Branches */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-4">Currently Available</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Explore Our <span className="text-primary">6 Mens PG Branches</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            While our Women&apos;s Hostel is under development, explore our well-established network of 6 Mens PG branches across Chennai offering premium accommodation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/mens-hostel" variant="primary" size="lg">
              View Mens Hostels <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/branches" variant="outline" size="lg">
              See All Branches
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
