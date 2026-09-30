import Link from "next/link";
import { branches } from "@/data/branches";

const quickLinks = [
  { href: "/mens-hostel", label: "Mens Hostel" },
  { href: "/womens-hostel", label: "Womens Hostel (Coming Soon)" },
  { href: "/facilities", label: "Facilities" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/branches", label: "Our Branches" },
  { href: "/contact", label: "Contact Us" },
  { href: "/booking", label: "Book Now" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <div className="text-lg font-bold">Aishwaraya</div>
                <div className="text-xs text-white/60 tracking-wider">HOSTELS</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium PG accommodation in Chennai with 6 branches offering
              comfortable living for students and working professionals.
            </p>
            {/* Instagram Only */}
            <a
              href="https://www.instagram.com/Aishwarya_Hostels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300 group"
            >
              <svg className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="text-sm font-medium text-white/80 group-hover:text-white">Aishwarya_Hostels</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-[10px]">→</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mens Branches */}
          <div>
            <h3 className="text-gold font-semibold mb-6 text-sm uppercase tracking-wider">Our Branches</h3>
            <ul className="space-y-3">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <div className="text-white/90 text-sm font-medium">{branch.name.split(" - ")[1]}</div>
                  <div className="text-white/50 text-xs mt-0.5">{branch.phone}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-semibold mb-6 text-sm uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <div className="text-white/50 text-xs uppercase tracking-wide mb-1">Phone</div>
                <a href="tel:+919043456234" className="text-white/90 text-sm hover:text-gold transition-colors">
                  +91 90434 56234
                </a>
              </div>
              <div>
                <div className="text-white/50 text-xs uppercase tracking-wide mb-1">Email</div>
                <a href="mailto:aishwaryahostels@gmail.com" className="text-white/90 text-sm hover:text-gold transition-colors">
                  aishwaryahostels@gmail.com
                </a>
              </div>
              <div>
                <div className="text-white/50 text-xs uppercase tracking-wide mb-1">Head Office</div>
                <div className="text-white/90 text-sm leading-relaxed">
                  W4CV+83H, Barathi Nagar,<br />
                  IOB Colony, Selaiyur,<br />
                  Chennai, TN 600073
                </div>
              </div>
              <div>
                <div className="text-white/50 text-xs uppercase tracking-wide mb-1">Working Hours</div>
                <div className="text-white/90 text-sm">Mon - Sun: 9:00 AM - 9:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Aishwaraya Hostels. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/50 text-sm">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
