"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Utensils, Wifi, Snowflake, Sun, Users, ArrowRight, Fan, BedDouble } from "lucide-react";

export default function RoomsPage() {
  const roomTypes = [
    {
      id: "ac-2",
      name: "Premium 2-Sharing AC",
      type: "AC",
      sharing: "2 Sharing",
      desc: "Perfect for those who prefer privacy and comfort. Comes with premium bunker beds, personal wardrobes, and split AC.",
      features: ["Split AC", "Personal Wardrobe", "Study Table", "Attached Bathroom", "High-Speed WiFi"],
      imageBg: "bg-blue-100",
      badge: "Most Popular",
    },
    {
      id: "ac-3",
      name: "Comfort 3-Sharing AC",
      type: "AC",
      sharing: "3 Sharing",
      desc: "A great balance of community and comfort. Spacious room with 3 beds and ample storage space.",
      features: ["Split AC", "Shared Wardrobe", "Study Area", "Attached Bathroom", "High-Speed WiFi"],
      imageBg: "bg-indigo-100",
    },
    {
      id: "ac-4",
      name: "Standard 4-Sharing AC",
      type: "AC",
      sharing: "4 Sharing",
      desc: "Ideal for a group of friends. Two standard bunker beds (Upper/Lower) with centralized cooling.",
      features: ["Window/Split AC", "Lockers", "Common Table", "Attached/Common Washroom", "WiFi Access"],
      imageBg: "bg-cyan-100",
    },
    {
      id: "non-ac-2",
      name: "Premium 2-Sharing Non-AC",
      type: "Non-AC",
      sharing: "2 Sharing",
      desc: "Well-ventilated room with ceiling fans. Perfect privacy on a budget.",
      features: ["Ceiling Fan", "Good Ventilation", "Personal Wardrobe", "Attached Bathroom", "WiFi Access"],
      imageBg: "bg-emerald-100",
    },
    {
      id: "non-ac-4",
      name: "Standard 4-Sharing Non-AC",
      type: "Non-AC",
      sharing: "4 Sharing",
      desc: "Two bunker beds in a spacious, airy room. Our most economical option for groups.",
      features: ["Ceiling Fans", "Lockers", "Common Washroom", "WiFi Access", "Regular Housekeeping"],
      imageBg: "bg-teal-100",
      badge: "Best Value",
    },
    {
      id: "non-ac-6",
      name: "Economy 6-Sharing Non-AC",
      type: "Non-AC",
      sharing: "6 Sharing",
      desc: "Three bunker beds creating a vibrant dorm-style living experience. Highly affordable.",
      features: ["Ceiling Fans", "Individual Lockers", "Common Washrooms", "WiFi Access", "Budget Friendly"],
      imageBg: "bg-slate-200",
    },
  ];

  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <Badge variant="gold" className="mb-4">Accommodation</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Rooms Designed for <span className="text-primary">Comfort</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Whether you need the privacy of a 2-sharing room or the vibrant community of a 6-sharing dorm, we have the perfect space for you.
        </p>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm font-medium">
          <Utensils className="w-4 h-4 text-amber-600" />
          <span>All rooms available with optional South Indian meal plans (Breakfast, Lunch, Dinner).</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <Card key={room.id} className="group overflow-hidden flex flex-col h-full border-gray-100 hover:border-primary/20 transition-all">
              <div className={`w-full h-56 relative overflow-hidden ${room.imageBg}`}>
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                
                {room.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="gold" className="shadow-lg backdrop-blur-md bg-white/90">
                      {room.badge}
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <Badge variant={room.type === "AC" ? "primary" : "secondary"} className="shadow-md backdrop-blur-md bg-white/90">
                    {room.type === "AC" ? <Snowflake className="w-3 h-3 mr-1 inline" /> : <Fan className="w-3 h-3 mr-1 inline" />}
                    {room.type}
                  </Badge>
                  <Badge variant="outline" className="shadow-md backdrop-blur-md bg-white/90 border-transparent">
                    <Users className="w-3 h-3 mr-1 inline text-gray-500" />
                    {room.sharing}
                  </Badge>
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-gray-500/30">
                  <BedDouble className="w-24 h-24 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {room.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {room.desc}
                </p>
                
                <div className="space-y-2 mb-6 flex-1">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Room Highlights</h4>
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">Pricing</span>
                    <span className="text-sm font-bold text-gray-900">Contact Us</span>
                  </div>
                  <Button variant="outline" size="sm" href={`/booking?roomType=${room.type}&sharing=${room.sharing.charAt(0)}`} className="gap-2">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bunk Bed Selection Info */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Select Your Bunk Preference</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            For 4-sharing and 6-sharing rooms, we feature premium, sturdy bunker beds. During your booking process, you can preference an Upper or Lower bunk based on availability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm w-full">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 border border-white/20">
                <span className="text-lg font-bold">U</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Upper Bunk</h3>
              <p className="text-sm text-white/50">More privacy, better ventilation from ceiling fans, away from floor traffic.</p>
            </div>
            
            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm w-full">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mx-auto mb-4 border border-white/20">
                <span className="text-lg font-bold">L</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Lower Bunk</h3>
              <p className="text-sm text-white/50">Easy access, cooler during summers, highly demanded by regular residents.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
