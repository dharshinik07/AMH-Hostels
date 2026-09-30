"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, BedDouble, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { branches } from "@/data/branches";

// Dynamic import for Leaflet map to avoid SSR issues
import dynamic from "next/dynamic";
const BranchMap = dynamic(() => import("@/components/BranchMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-100 rounded-3xl animate-pulse flex items-center justify-center">
      <div className="text-gray-400 font-medium">Loading Map...</div>
    </div>
  ),
});

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <Badge variant="gold" className="mb-4">Our Locations</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find Your Perfect <span className="text-primary">Stay</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          With prime locations across Chennai, Aishwaraya Mens Hostels offers unparalleled convenience whether you&apos;re a student or working professional.
        </p>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white p-2 rounded-[2rem] shadow-xl border border-gray-100">
          <BranchMap branches={branches} />
        </div>
      </div>

      {/* Branches Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => {
            const available = branch.totalBeds - branch.occupiedBeds;
            
            return (
              <Card key={branch.id} className="group flex flex-col h-full">
                <div className="w-full h-56 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <Badge variant="primary" className="shadow-md backdrop-blur-md bg-white/90">
                      Mens Hostel
                    </Badge>
                    {available < 10 && (
                      <Badge variant="warning" className="shadow-md bg-white/90 backdrop-blur-md animate-pulse">
                        Only {available} beds left
                      </Badge>
                    )}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                    <Image 
                      src={`https://ui-avatars.com/api/?name=${branch.name}&background=1a365d&color=fff&size=512`} 
                      alt={branch.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {branch.name.split(" - ")[1]}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 line-clamp-2">{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <a href={`tel:${branch.phone.replace(/\\s/g, '')}`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <BedDouble className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600">
                        <span className="font-medium text-gray-900">{branch.totalRooms}</span> Rooms • <span className="font-medium text-gray-900">{branch.totalBeds}</span> Beds Total
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-auto grid grid-cols-2 gap-3 pt-6 border-t border-gray-100">
                    <Link href={`https://maps.google.com/?q=${branch.latitude},${branch.longitude}`} target="_blank" className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors">
                      <Navigation className="w-4 h-4" /> Directions
                    </Link>
                    <Link href={`/booking?branch=${branch.id}`} className="flex items-center justify-center gap-2 py-2.5 rounded-xl gradient-gold text-white text-sm font-medium shadow-sm hover:shadow-md transition-all">
                      Book Room
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
