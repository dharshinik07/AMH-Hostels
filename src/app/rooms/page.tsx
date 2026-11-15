"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { 
  Utensils, 
  Wifi, 
  Snowflake, 
  Users, 
  ArrowRight, 
  Fan, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Phone,
  Sparkles
} from "lucide-react";

const acRooms = [
  {
    id: "ac-2",
    name: "Premium 2-Sharing AC",
    type: "AC",
    sharing: "2 Sharing",
    desc: "Maximum privacy & luxury. Features split AC, personal full-length wooden wardrobes, attached bathroom, and individual study desks.",
    features: ["Split AC", "Personal Wooden Wardrobe", "Study Desk & Chair", "Attached Bathroom", "High-Speed 5G WiFi"],
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
  },
  {
    id: "ac-3",
    name: "Comfort 3-Sharing AC",
    type: "AC",
    sharing: "3 Sharing",
    desc: "Ideal balance of friendship and personal space. Spacious room with 3 individual beds, designated storage, and split AC cooling.",
    features: ["Split AC", "Dedicated Lockers", "Study Corner", "Attached Washroom", "High-Speed WiFi"],
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ac-4",
    name: "Standard 4-Sharing AC",
    type: "AC",
    sharing: "4 Sharing",
    desc: "Great for college peers and friends. Two heavy-duty steel bunker beds (Upper/Lower choice) with split AC and private lockers.",
    features: ["Split AC", "Personal Steel Lockers", "Common Table", "Attached Washroom", "High-Speed WiFi"],
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
  },
];

const nonAcRooms = [
  {
    id: "non-ac-2",
    name: "Premium 2-Sharing Non-AC",
    type: "Non-AC",
    sharing: "2 Sharing",
    desc: "Corner room with large sliding windows, cross-ventilation, ceiling fans, and personal wardrobes. Excellent privacy on a budget.",
    features: ["High-Airflow Ceiling Fans", "Good Natural Ventilation", "Personal Wardrobe", "Attached Bathroom", "5G WiFi"],
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "non-ac-4",
    name: "Standard 4-Sharing Non-AC",
    type: "Non-AC",
    sharing: "4 Sharing",
    desc: "Spacious layout with two sturdy bunk beds, natural airflow, individual secure lockers, and daily cleaning.",
    features: ["Ceiling Fans", "Individual Secure Lockers", "Common Washroom", "5G WiFi Access", "Daily Housekeeping"],
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    badge: "Best Value",
  },
  {
    id: "non-ac-6",
    name: "Economy 6-Sharing Non-AC",
    type: "Non-AC",
    sharing: "6 Sharing",
    desc: "Three bunker beds creating an energetic, friendly dorm community. Highly affordable with complete hostel amenity access.",
    features: ["Ceiling Fans", "Individual Lockers", "Common Washrooms", "WiFi Access", "Most Affordable"],
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
  },
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      {/* SECTION 1: Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <Badge variant="gold" className="mb-4">Room Configurations</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Rooms Designed for <span className="text-primary">Comfort & Peace of Mind</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Whether you need the privacy of a 2-sharing room or the community of a 6-sharing dorm, all rooms include daily housekeeping and maintenance.
        </p>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs sm:text-sm font-medium">
          <Utensils className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Optional 3-times South Indian meal plans (Breakfast, Lunch & Dinner) available with all rooms.</span>
        </div>
      </section>

      {/* SECTION 2: AC Rooms Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Badge variant="primary" className="mb-1 text-xs">Air Conditioned</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">AC Room Configurations</h2>
          </div>
          <span className="text-xs text-gray-500 font-medium hidden sm:block">Split AC Units in all rooms</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {acRooms.map((room) => (
            <Card key={room.id} className="group overflow-hidden flex flex-col h-full rounded-2xl border border-gray-100 hover:border-primary/20 shadow-md hover:shadow-xl transition-all">
              <div className="w-full h-52 relative overflow-hidden bg-gray-100">
                <Image
                  src={room.img}
                  alt={`Aishwaraya Hostels ${room.name} with split air conditioning, personal storage, and study amenities`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                
                {room.badge && (
                  <div className="absolute top-3 right-3 z-20">
                    <Badge variant="gold" className="shadow-lg backdrop-blur-md bg-white/95 text-xs font-bold">
                      {room.badge}
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-3 left-3 z-20 flex gap-1.5">
                  <Badge variant="primary" className="shadow-md text-xs font-bold">
                    <Snowflake className="w-3 h-3 mr-1 inline" /> {room.type}
                  </Badge>
                  <Badge variant="outline" className="shadow-md bg-white/95 text-gray-800 text-xs font-bold border-transparent">
                    <Users className="w-3 h-3 mr-1 inline text-gray-500" /> {room.sharing}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-3 z-20 text-white">
                  <h3 className="text-lg font-bold drop-shadow">{room.name}</h3>
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-1">
                <p className="text-gray-600 text-xs mb-5 leading-relaxed">{room.desc}</p>
                
                <div className="space-y-1.5 mb-6 flex-1">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Room Inclusions</h4>
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Pricing</span>
                    <span className="text-xs font-bold text-gray-900">Direct Rates</span>
                  </div>
                  <Button variant="gold" size="sm" href={`/booking?roomType=${room.type}&sharing=${room.sharing.charAt(0)}`} className="gap-1.5 font-bold text-xs">
                    Book Now <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 3: Non-AC Rooms Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Badge variant="secondary" className="mb-1 text-xs">Budget Friendly</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Non-AC Room Configurations</h2>
          </div>
          <span className="text-xs text-gray-500 font-medium hidden sm:block">Well-ventilated & economical</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nonAcRooms.map((room) => (
            <Card key={room.id} className="group overflow-hidden flex flex-col h-full rounded-2xl border border-gray-100 hover:border-primary/20 shadow-md hover:shadow-xl transition-all">
              <div className="w-full h-52 relative overflow-hidden bg-gray-100">
                <Image
                  src={room.img}
                  alt={`Aishwaraya Hostels ${room.name} with split air conditioning, personal storage, and study amenities`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                
                {room.badge && (
                  <div className="absolute top-3 right-3 z-20">
                    <Badge variant="gold" className="shadow-lg backdrop-blur-md bg-white/95 text-xs font-bold">
                      {room.badge}
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-3 left-3 z-20 flex gap-1.5">
                  <Badge variant="secondary" className="shadow-md text-xs font-bold">
                    <Fan className="w-3 h-3 mr-1 inline" /> {room.type}
                  </Badge>
                  <Badge variant="outline" className="shadow-md bg-white/95 text-gray-800 text-xs font-bold border-transparent">
                    <Users className="w-3 h-3 mr-1 inline text-gray-500" /> {room.sharing}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-3 z-20 text-white">
                  <h3 className="text-lg font-bold drop-shadow">{room.name}</h3>
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-1">
                <p className="text-gray-600 text-xs mb-5 leading-relaxed">{room.desc}</p>
                
                <div className="space-y-1.5 mb-6 flex-1">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Room Inclusions</h4>
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Pricing</span>
                    <span className="text-xs font-bold text-gray-900">Direct Rates</span>
                  </div>
                  <Button variant="gold" size="sm" href={`/booking?roomType=${room.type}&sharing=${room.sharing.charAt(0)}`} className="gap-1.5 font-bold text-xs">
                    Book Now <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 4: Bunker Bed Selection Guide */}
      <section className="bg-primary-dark text-white py-16 rounded-3xl mx-4 sm:mx-8 mb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-3 bg-white/10 text-gold border-white/20">Custom Comfort</Badge>
          <h2 className="text-3xl font-bold mb-4">Choose Your Bunk Preference: Upper or Lower</h2>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            For 4-sharing and 6-sharing rooms, our bunker beds are custom fabricated from heavy-gauge steel with safety railings and sturdy ladders. You can select your preference during online booking.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-left">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-3 border border-white/20 text-white font-bold text-base">
                U
              </div>
              <h3 className="text-base font-bold text-white mb-2">Upper Bunk Bed</h3>
              <ul className="text-xs text-white/70 space-y-1.5">
                <li>• Higher privacy and zero disturbance from floor movements</li>
                <li>• Direct breeze from ceiling fans and ambient cooling</li>
                <li>• Sturdy safety guardrails and anti-slip ladder rungs</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-left">
              <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center mb-3 border border-white/20 text-white font-bold text-base">
                L
              </div>
              <h3 className="text-base font-bold text-white mb-2">Lower Bunk Bed</h3>
              <ul className="text-xs text-white/70 space-y-1.5">
                <li>• Instant effortless bed access without climbing</li>
                <li>• Quick access to under-bed storage space and personal lockers</li>
                <li>• Highly requested by regular long-term residents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Comprehensive What's Included Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-lg">
          <div className="text-center mb-10">
            <Badge variant="gold" className="mb-2">Standard Inclusions</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What Every Resident Gets</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { icon: Sparkles, title: "Comfortable Mattress", sub: "Cleaned & disinfected" },
              { icon: ShieldCheck, title: "Steel Wardrobe/Locker", sub: "Individual key" },
              { icon: Wifi, title: "5G High-Speed Wi-Fi", sub: "Unlimited daily data" },
              { icon: Layers, title: "Study Desk & Chair", sub: "Ergonomic seating" },
              { icon: Utensils, title: "Daily Meal Options", sub: "Breakfast, Lunch, Dinner" },
              { icon: CheckCircle2, title: "Housekeeping", sub: "Daily room cleaning" },
            ].map((inc, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface border border-gray-100">
                <inc.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="text-xs font-bold text-gray-900 mb-0.5">{inc.title}</h4>
                <p className="text-[11px] text-gray-500">{inc.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Instant Room Booking CTA */}
      <section className="bg-surface py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">Reserve Your Preferred Room Today</h2>
          <p className="text-gray-600 text-sm mb-8">
            Select your desired sharing, AC preference, and branch location in under 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" href="/booking" className="font-bold px-9">
              Proceed to Booking Form <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <a
              href="tel:+919043456234"
              className="px-8 py-3.5 rounded-xl border border-gray-300 text-gray-800 font-bold hover:bg-gray-100 flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-primary" /> Call: 90434 56234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
