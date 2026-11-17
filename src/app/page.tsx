"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  MapPin, 
  BedDouble, 
  Users, 
  Shield, 
  Wifi, 
  Utensils, 
  CheckCircle2, 
  Phone, 
  Navigation, 
  Snowflake, 
  Fan, 
  Sparkles, 
  Shirt, 
  Zap, 
  Car, 
  ChevronDown,
  Star,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { branches } from "@/data/branches";
import { testimonials } from "@/data/testimonials";

const hostelImages = [
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
];

const roomPlans = [
  {
    name: "2-Sharing Premium AC",
    type: "AC",
    sharing: "2 Sharing",
    desc: "Maximum privacy & comfort with split AC, individual wardrobes, study desks, and attached bathroom.",
    features: ["Split Air Conditioner", "Personal Wooden Wardrobe", "Individual Study Desk & Chair", "Attached Washroom", "High-Speed 5G Wi-Fi"],
    popular: true,
    img: hostelImages[0],
  },
  {
    name: "3-Sharing Comfort AC",
    type: "AC",
    sharing: "3 Sharing",
    desc: "Great blend of friendly roommate community, split AC cooling, and generous personal storage.",
    features: ["Split AC", "Dedicated Lockers", "Study Corner", "Attached Bathroom", "High-Speed Wi-Fi"],
    popular: false,
    img: hostelImages[1],
  },
  {
    name: "4-Sharing Standard AC",
    type: "AC",
    sharing: "4 Sharing",
    desc: "Sturdy ergonomic bunker beds with upper/lower preferences, personal secure lockers, and split AC.",
    features: ["AC Cooling", "Personal Steel Locker", "Common Study Space", "Attached/Adjacent Bath", "Regular Housekeeping"],
    popular: false,
    img: hostelImages[2],
  },
  {
    name: "2-Sharing Deluxe Non-AC",
    type: "Non-AC",
    sharing: "2 Sharing",
    desc: "Well-ventilated corner room with large windows, ceiling fans, and personal wardrobes.",
    features: ["High-Airflow Ceiling Fans", "Great Natural Ventilation", "Personal Wardrobe", "Attached Bathroom", "5G Wi-Fi Access"],
    popular: false,
    img: hostelImages[4],
  },
  {
    name: "4-Sharing Economy Non-AC",
    type: "Non-AC",
    sharing: "4 Sharing",
    desc: "Spacious dorm layout with sturdy bunk beds, natural airflow, and individual secure lockers.",
    features: ["Ceiling Fans", "Individual Secure Lockers", "Daily Cleaning", "High-Speed Wi-Fi", "RO Water Access"],
    popular: true,
    img: hostelImages[0],
  },
  {
    name: "6-Sharing Budget Non-AC",
    type: "Non-AC",
    sharing: "6 Sharing",
    desc: "Our most economical option. Perfect for students and entry-level professionals seeking affordability.",
    features: ["Individual Lockers", "Common Washroom Facilities", "Daily Housekeeping", "Wi-Fi & Inverter Backup", "Most Budget Friendly"],
    popular: false,
    img: hostelImages[2],
  },
];

const facilitiesList = [
  { icon: Wifi, title: "High-Speed 5G Wi-Fi", desc: "Dual ISP high-bandwidth connection on all floors for lag-free study and work." },
  { icon: Utensils, title: "Homely South Indian Food", desc: "Healthy 3 times food (Breakfast, Lunch & Dinner) prepared fresh in hygienic kitchens." },
  { icon: Shield, title: "24/7 CCTV & Security", desc: "Round-the-clock security personnel, biometric door access, and complete CCTV coverage." },
  { icon: Sparkles, title: "Daily Housekeeping", desc: "Daily room sweeping, mopping, bathroom sanitization, and trash clearance." },
  { icon: Shirt, title: "Washing Machines", desc: "Multiple fully automatic washing machines and designated clothes drying terraces." },
  { icon: Snowflake, title: "Split AC Rooms", desc: "Energy-efficient split AC units in all air-conditioned rooms for optimal comfort." },
  { icon: Zap, title: "Inverter Power Backup", desc: "Dedicated inverter power backup to maintain essential lighting, fans, and Wi-Fi during local outages." },
  { icon: Car, title: "Covered 2-Wheeler Parking", desc: "Spacious dedicated parking slots for bikes and scooters under CCTV vigilance." },
];

const faqs = [
  {
    q: "What is the advance / security deposit amount?",
    a: "We collect an affordable, refundable security deposit of ₹3,000 to ₹5,000 depending on the room type (AC/Non-AC). This is fully refundable upon vacating with prior 30-day notice.",
  },
  {
    q: "Is South Indian food included in the monthly rent?",
    a: "Yes! We offer flexible plans: you can opt for room with 3-times daily food (Breakfast, Lunch Box/Lunch, Dinner) or room-only packages based on your preference.",
  },
  {
    q: "What are the hostel gate timings?",
    a: "Standard gate closing time is 10:30 PM. For working professionals on night shifts or college students with late lab hours, permission is provided via biometric entry and warden approval.",
  },
  {
    q: "Can I choose between Upper and Lower bunk beds?",
    a: "Yes! While booking online or visiting the branch, you can select your preferred bunk (Upper or Lower) based on real-time availability in 4-sharing and 6-sharing rooms.",
  },
  {
    q: "Are there branches near major colleges and IT hubs?",
    a: "Yes, our 8 branches are strategically located across East Tambaram (Near MCC College), West Tambaram (Near Railway Station), Tambaram Sanitorium, Selaiyur Bharathi Nagar (Near Bharath University), Selaiyur Camp Road (IOB Colony), Sembakkam (Arunagiri Nathar St), and Madampakkam.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleQuickEnquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const botTrap = formData.get("website_bot_trap");
    if (botTrap) {
      setFormSubmitted(true);
      setFormLoading(false);
      form.reset();
      return;
    }

    try {
      await fetch("/api/sheets?type=enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          branch: formData.get("branch"),
          message: formData.get("message") || "Quick homepage enquiry",
        }),
      });
      setFormSubmitted(true);
      form.reset();
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (_) {
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-primary-dark pt-20 pb-16">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1920&q=80"
            alt="Aishwaraya Hostels modern furnished bedroom interior with comfortable bedding and personal wardrobe in Chennai"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/85 to-primary-dark"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
              Admissions Open across 8 Branches in Tambaram, Selaiyur &amp; Sembakkam
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Top PGs in Tambaram <br className="hidden sm:block" />
            <span className="text-gradient">Best PG for Men at Tambaram</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Looking for the finest Mens Hostel in Tambaram? Aishwaraya Hostels offers safe, hygienic, and affordable accommodation across 8 prime locations in Tambaram, Selaiyur, Camp Road, and Sembakkam with homestyle South Indian food, 5G Wi-Fi, and 24/7 security.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" href="/booking" className="w-full sm:w-auto px-9 py-4 font-bold shadow-xl">
              Book Bed Online
            </Button>
            <Button variant="outline" size="lg" href="/branches" className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10">
              Explore 8 Branches <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Quick Features Row */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/85 text-xs sm:text-sm font-medium">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span>3 Times Homely Meals</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span>AC & Non-AC Rooms</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span>Biometric & CCTV 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span>No Hidden Brokerage</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section id="stats" className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Prime Chennai Branches", value: "8 Locations", icon: MapPin },
            { label: "Room Configurations", value: "AC & Non-AC", icon: BedDouble },
            { label: "Happy Residents", value: "1,000+", icon: Users },
            { label: "Care & Security", value: "24/7 On-Duty", icon: Shield },
          ].map((stat, i) => (
            <Card key={i} className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl rounded-2xl">
              <CardContent className="p-5 sm:p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-0.5">{stat.value}</h3>
                <p className="text-xs sm:text-sm font-medium text-gray-500">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Hostel Category Cards */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="gold" className="mb-2">Accommodations</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Designed for <span className="text-primary">Your Convenience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mens PG Card */}
            <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg p-8 flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div className="flex justify-between items-start mb-6">
                <Badge variant="primary" className="text-xs px-3 py-1">8 Active Branches</Badge>
                <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  Admissions Open
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Aishwaraya Mens PG</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Operating across 8 prime locations in East Tambaram, West Tambaram, Tambaram Sanitorium, Selaiyur (Bharathi Nagar &amp; IOB Colony), Camp Road, Sembakkam, and Madampakkam. Available with split AC/Non-AC, homestyle food, and high-speed Wi-Fi.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["2, 3, 4, 6 Sharing", "AC & Non-AC", "Homely Meals", "Parking", "Biometric Access"].map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                    ✓ {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Button variant="primary" href="/mens-hostel" className="flex-1">
                  View Mens Branches <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button variant="gold" href="/booking?category=mens" className="px-6 font-bold">
                  Book Bed
                </Button>
              </div>
            </div>

            {/* Womens PG Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8 flex flex-col justify-between group shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <Badge variant="gold" className="text-xs px-3 py-1 bg-white/20 text-white border-white/20">Coming Soon</Badge>
                <span className="text-xs font-bold text-pink-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Priority Waitlist Open
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Aishwaraya Womens PG</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Bringing our signature hospitality to women. Equipped with round-the-clock female wardens, robust biometric security, CCTV surveillance, nutritious meals, and prime locations in Chennai.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Female Wardens", "High Security", "Nutritious Food", "Quiet Study Zone", "Prime Locations"].map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-white/90">
                    ✓ {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Button variant="gold" href="/womens-hostel" className="flex-1 font-bold">
                  Get Launch Updates <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <a
                  href="https://wa.me/919043456234?text=Hi%2C%20I%20am%20interested%20in%20Aishwaraya%20Womens%20Hostel%20launch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md flex items-center gap-1.5 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Live Availability & 8 Branches Section */}
      <section id="branches" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="gold" className="mb-3">Real-Time Status</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our 8 Prime <span className="text-primary">Chennai Branches</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Explore our verified Mens PG branches across East Tambaram, West Tambaram, Tambaram Sanitorium, Selaiyur, Camp Road, Sembakkam, and Madampakkam. For current room vacancies and rates, fill out our enquiry form or call our central office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => {
              const branchShortName = branch.name.replace(/^[^-]+ - /, "");
              const branchImage = hostelImages[index % hostelImages.length];

              return (
                <Card key={branch.id} className="group overflow-hidden flex flex-col h-full rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={branchImage}
                      alt={`Aishwaraya Mens Hostel at ${branchShortName} Tambaram Chennai`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="primary" className="bg-primary/90 text-white text-xs font-bold">
                        Mens PG
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="success" className="font-bold text-xs shadow-md bg-green-600 text-white border-none">
                        Admissions Open
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="text-lg font-bold drop-shadow-sm">{branchShortName}</h3>
                    </div>
                  </div>

                  <CardContent className="p-5 flex flex-col flex-1">
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600 line-clamp-2">{branch.address}</p>
                    </div>

                    <div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-3 mb-4 text-xs text-amber-900">
                      <div className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Admissions Fast Filling</span>
                      </div>
                      <p className="text-[11px] text-amber-800 leading-tight">
                        For real-time bed availability &amp; sharing fees: Call 90434 56234 or fill out the enquiry form.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-xs font-medium text-gray-500">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                        {branch.phone}
                      </a>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
                      <a
                        href={`https://maps.google.com/?q=${branch.latitude},${branch.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5 text-gray-600" /> Map
                      </a>
                      <Button
                        variant="gold"
                        size="sm"
                        href={`/booking?branch=${branch.id}&category=mens`}
                        className="font-bold text-xs"
                      >
                        Book / Enquire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" href="/branches" size="lg" className="px-8 font-bold">
              View All 8 Branches &amp; Interactive Map
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Rooms & Sharing Types Section */}
      <section id="rooms" className="py-20 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="gold" className="mb-3">Room Options</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Rooms Crafted for <span className="text-primary">Comfort & Study</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              From premium 2-sharing rooms with split AC to cost-effective 6-sharing rooms with sturdy bunk beds, choose the plan that suits you best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomPlans.map((room, idx) => (
              <Card key={idx} className="group overflow-hidden flex flex-col h-full rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                <div className="relative h-52 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={room.img}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant={room.type === "AC" ? "primary" : "secondary"} className="text-xs font-bold shadow-md">
                      {room.type === "AC" ? <Snowflake className="w-3 h-3 mr-1 inline" /> : <Fan className="w-3 h-3 mr-1 inline" />}
                      {room.type}
                    </Badge>
                    <Badge variant="outline" className="bg-white/90 text-gray-800 text-xs font-bold border-transparent shadow-md">
                      {room.sharing}
                    </Badge>
                  </div>
                  {room.popular && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="gold" className="text-xs font-bold shadow-md">
                        Popular Choice
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold drop-shadow">{room.name}</h3>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-600 mb-5 leading-relaxed">{room.desc}</p>
                  
                  <div className="space-y-2 mb-6 flex-1">
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Key Highlights</h4>
                    {room.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">Food Plan</span>
                      <span className="text-xs font-bold text-primary">Veg & Non-Veg Available</span>
                    </div>
                    <Button
                      variant="gold"
                      size="sm"
                      href={`/booking?roomType=${room.type}&sharing=${room.sharing.charAt(0)}`}
                      className="font-bold text-xs"
                    >
                      Book This Room
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" href="/rooms" size="lg" className="px-8 font-bold">
              View Detailed Room Specifications & Bunk Details
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Facilities & Amenities Section */}
      <section id="facilities" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="gold" className="mb-3">All-Inclusive Living</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Premium Hostel <span className="text-primary">Facilities</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Everything you need for a comfortable stay without having to worry about chores, maintenance, or cooking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilitiesList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" href="/facilities" size="lg" className="px-8 font-bold">
              Explore All Amenities & Food Menu
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us / Real Image Showcase */}
      <section id="why-us" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="gold" className="mb-3">Why Aishwaraya?</Badge>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Redefining <span className="text-primary">PG Accommodation</span> in Chennai
              </h2>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                We know that leaving home for college or a career is a major transition. We ensure a warm, respectful, and safe community where you can focus on your ambitions without stress.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Hygienic Homely Cooking",
                    desc: "Delicious, home-style South Indian food with fresh ingredients, balanced daily nutrition, and pure filter coffee.",
                  },
                  {
                    title: "Strict Security & Wardens",
                    desc: "24/7 CCTV surveillance, biometric access, gated perimeter, and attentive management on premises.",
                  },
                  {
                    title: "Unmatched Cleanliness",
                    desc: "Daily professional housekeeping for rooms, clean restrooms, and continuous maintenance support.",
                  },
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center shrink-0 font-bold mt-1">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">{point.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Imagery Grid (Replacing empty gray placeholders) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={hostelImages[0]}
                    alt="Clean and comfortable hostel bedroom accommodation with ample natural lighting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={hostelImages[3]}
                    alt="Hygienic communal hostel dining hall serving three nutritious homestyle South Indian meals daily"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={hostelImages[1]}
                    alt="Dedicated quiet hostel study workstation with ergonomic desk and high-speed 5G Wi-Fi"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src={hostelImages[4]}
                    alt="Secure exterior entrance of Aishwaraya Hostel residential building with 24/7 CCTV surveillance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Resident Reviews / Testimonials */}
      <section id="testimonials" className="py-20 bg-primary-dark text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="gold" className="mb-3 bg-white/10 text-gold border-white/20">Verified Experiences</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">What Our Residents Say</h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto">
              Real reviews from students studying at MCC, Bharath, SRM, and IT professionals working in Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex text-gold mb-4 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-white/70">{testimonial.role} • {testimonial.branch}</p>
                  <p className="text-[11px] text-gold mt-1 font-semibold">{testimonial.stayDuration}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Testimonial Legal Disclaimer */}
          <p className="text-center text-xs text-slate-300 mt-10 max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-6">
            * <strong>Disclaimer:</strong> Testimonials reflect voluntary resident feedback collected via tenant exit and semester surveys. Individual experiences, food preferences, and accommodation comfort may vary based on chosen sharing configuration and branch property.
          </p>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-3">Answers & Clarifications</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm">Everything you need to know before joining Aishwaraya Hostels.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-gray-900 text-sm sm:text-base hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Quick Callback & Contact Section */}
      <section id="contact" className="py-20 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <Badge variant="gold" className="mb-3 bg-white/10 text-gold border-white/20">Instant Assistance</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                  Need Help Choosing a Room or Branch?
                </h2>
                <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed">
                  Leave your details and our branch supervisor will call you within 15 minutes to share real-time room availability, bed pictures, and directions.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block">Direct Hotline</span>
                      <a href="tel:+919043456234" className="text-base font-bold text-white hover:text-gold transition-colors">
                        +91 90434 56234
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block">Head Office</span>
                      <span className="text-sm text-white font-medium">Barathi Nagar, IOB Colony, Selaiyur, Chennai</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Form */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-gray-900 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Request a Fast Callback</h3>
                
                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center text-green-800">
                    <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
                    <h4 className="font-bold text-base mb-1">Thank you!</h4>
                    <p className="text-xs text-green-700">We have received your enquiry. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleQuickEnquiry} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Kumar"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">10-Digit Mobile Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Select Branch Preference</label>
                      <select
                        name="branch"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                      >
                        <option value="">Choose a branch...</option>
                        {branches.map((b) => (
                          <option key={b.id} value={b.name}>
                            {b.name.replace(/^[^-]+ - /, "")}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Bot Honeypot */}
                    <input
                      type="text"
                      name="website_bot_trap"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* DPDP Act 2023 Explicit Consent */}
                    <div className="flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        required
                        id="quick_enquiry_consent"
                        name="quick_enquiry_consent"
                        className="mt-1 w-3.5 h-3.5 rounded text-primary focus:ring-primary border-gray-300"
                      />
                      <label htmlFor="quick_enquiry_consent" className="text-[11px] text-gray-600 leading-tight">
                        I consent to Aishwaraya Hostels contacting me regarding room availability in compliance with the{" "}
                        <Link href="/privacy" target="_blank" className="text-primary font-bold underline">
                          DPDP Act 2023
                        </Link>.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      fullWidth
                      disabled={formLoading}
                      className="py-3 font-bold text-sm shadow-md"
                    >
                      {formLoading ? "Submitting..." : "Get Instant Callback"} <Send className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
