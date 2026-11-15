"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

export const sitePages = [
  { href: "/", label: "Home" },
  { href: "/mens-hostel", label: "Mens Hostel" },
  { href: "/womens-hostel", label: "Womens Hostel" },
  { href: "/rooms", label: "Rooms" },
  { href: "/facilities", label: "Facilities" },
  { href: "/branches", label: "Branches" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const showScrolled = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-tight transition-colors ${showScrolled ? "text-primary" : "text-white"}`}>
                Aishwaraya
              </span>
              <span className={`text-[10px] tracking-widest font-semibold uppercase ${showScrolled ? "text-muted" : "text-white/75"}`}>
                Hostels & PG
              </span>
            </div>
          </Link>

          {/* Desktop 6-Page Navigation (Visible md: and up) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {sitePages.map((page) => {
              const isActive = pathname === page.href;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? showScrolled
                        ? "text-primary bg-primary/10 font-bold border border-primary/20"
                        : "text-white bg-white/20 font-bold border border-white/30"
                      : showScrolled
                      ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {page.label}
                </Link>
              );
            })}

            <a
              href="tel:+919043456234"
              className={`hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold ${
                showScrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>90434 56234</span>
            </a>

            <Link
              href="/booking"
              className="ml-2 px-5 py-2.5 rounded-xl gradient-gold text-white text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center gap-1.5"
            >
              Book Bed <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger (< md) */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/booking"
              className="px-3.5 py-1.5 rounded-lg gradient-gold text-white text-xs font-bold shadow-sm"
            >
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                showScrolled ? "text-primary hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-100 px-4 py-6 mt-3 space-y-2 animate-fade-in">
          {sitePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                pathname === page.href
                  ? "bg-primary/10 text-primary font-bold border border-primary/20"
                  : "text-gray-800 hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {page.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:+919043456234"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-gold" /> Call: +91 90434 56234
            </a>
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3.5 rounded-xl gradient-gold text-white text-center font-bold shadow-md"
            >
              Book Bed Online
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
