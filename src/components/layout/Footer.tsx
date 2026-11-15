import Link from "next/link";
import { branches } from "@/data/branches";
import { ShieldCheck, MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/mens-hostel", label: "Mens Hostel" },
  { href: "/womens-hostel", label: "Womens Hostel" },
  { href: "/rooms", label: "Rooms & Sharing" },
  { href: "/facilities", label: "Facilities & Dining" },
  { href: "/branches", label: "Our 6 Branches" },
  { href: "/booking", label: "Book Bed Online" },
  { href: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy (DPDP Act)" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Business Details */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center text-primary-dark font-black text-xl shadow-md">
                A
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">Aishwaraya Hostels</div>
                <div className="text-[11px] text-gold font-semibold tracking-wider uppercase">Chennai • 6 Branches</div>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Verified paying guest accommodation across Tambaram, Selaiyur, and Madampakkam. Homely food, split AC rooms, and 24/7 security for students and working professionals.
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 space-y-1 mb-6">
              <div className="flex items-center gap-1.5 text-gold font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>TN Hostels Act & DPDP Compliant</span>
              </div>
              <p className="text-slate-400">
                Registered Accommodation Provider • Chennai Corporation Jurisdiction
              </p>
            </div>

            {/* Instagram Social Link */}
            <a
              href="https://www.instagram.com/Aishwarya_Hostels"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Aishwaraya Hostels on Instagram"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 text-slate-200 hover:text-white transition-all duration-300 text-xs font-semibold"
            >
              <svg className="w-4 h-4 text-pink-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span>@Aishwarya_Hostels</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold mb-5 text-xs uppercase tracking-wider">
              Explore Our Website
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-gold text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-gold text-[10px]">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our 6 Branches */}
          <div>
            <h3 className="text-gold font-bold mb-5 text-xs uppercase tracking-wider">
              Chennai Branches
            </h3>
            <ul className="space-y-3">
              {branches.map((branch, i) => (
                <li key={branch.id} className="text-xs">
                  <div className="text-slate-100 font-semibold flex items-center gap-1.5">
                    <span className="text-gold font-bold">{i + 1}.</span> {branch.name.replace(/^[^-]+ - /, "")}
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{branch.address}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Compliance */}
          <div>
            <h3 className="text-gold font-bold mb-5 text-xs uppercase tracking-wider">
              Contact & Support
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-[11px]">Direct Central Booking</div>
                  <a href="tel:+919043456234" className="text-slate-100 font-bold hover:text-gold transition-colors">
                    +91 90434 56234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-[11px]">Enquiries & Grievances</div>
                  <a href="mailto:aishwaryahostels@gmail.com" className="text-slate-100 font-semibold hover:text-gold transition-colors break-all">
                    aishwaryahostels@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-[11px]">Head Administrative Office</div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    W4CV+83H, Avvai Street, Barathi Nagar, IOB Colony, Selaiyur, Chennai, TN 600073
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-[11px]">Office Hours</div>
                  <p className="text-slate-300 text-xs">Mon - Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Policies Grid */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} Aishwaraya Hostels. All rights reserved. Registered under the laws of India.
            </p>
            <nav aria-label="Legal policies navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-300">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-gold transition-colors underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
