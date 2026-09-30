"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Building2, 
  BedDouble, 
  Users, 
  CalendarCheck, 
  MessageSquare,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { clearAdminSession, getAdminSession } from "@/lib/storage";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userName, setUserName] = useState("Admin");

  useEffect(() => {
    const session = getAdminSession();
    if (!session) {
      router.push("/admin/login");
    } else if (session.user?.name) {
      setUserName(session.user.name);
    }
  }, [router]);

  const handleLogout = () => {
    clearAdminSession();
    router.push("/admin/login");
  };

  const navItems = [
    { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Branches", href: "/admin/dashboard/branches", icon: Building2 },
    { label: "Rooms & Beds", href: "/admin/dashboard/rooms", icon: BedDouble },
    { label: "Tenants", href: "/admin/dashboard/tenants", icon: Users },
    { label: "Bookings", href: "/admin/dashboard/bookings", icon: CalendarCheck },
    { label: "Enquiries", href: "/admin/dashboard/enquiries", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row relative z-[60]">
      {/* Mobile Header */}
      <div className="md:hidden bg-primary-dark text-white p-4 flex items-center justify-between sticky top-0 z-[70] shadow-md">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
            <span className="text-gold font-bold">A</span>
          </div>
          vAdmin
        </h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-lg bg-white/10">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 bg-primary-dark text-white w-64 z-[75] transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? "translate-x-0 overflow-y-auto" : "-translate-x-full"}
      `}>
        <div className="min-h-full flex flex-col p-6">
          <div className="hidden md:block mb-10">
            <h1 className="text-2xl font-bold">Aishwaraya<span className="text-gold">Admin</span></h1>
            <p className="text-xs text-white/50 mt-1 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
               Management Portal v1.0
            </p>
          </div>

          <div className="mb-8 flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold to-gold-dark text-white flex items-center justify-center font-bold shadow-lg">
              {userName.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold truncate max-w-[120px]">{userName}</p>
              <p className="text-xs text-white/50">Super Administrator</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2 mb-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors group"
                >
                  <Icon className="w-5 h-5 group-hover:text-gold transition-colors" />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <button 
            onClick={handleLogout}
            className="mt-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors border border-red-500/20"
          >
            <LogOut className="w-4 h-4" />
            <span className="font-bold text-sm">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 sm:p-8 overflow-x-hidden md:h-screen md:overflow-y-auto bg-gray-50/50 relative">
        <div className="absolute top-0 left-0 right-0 h-64 bg-primary-dark/5 z-0"></div>
        <div className="relative z-10">
          {children}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
