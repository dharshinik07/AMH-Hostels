import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Wifi, Utensils, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { branches } from "@/data/branches";

export default function MensHostelPage() {
  const mensBranches = branches.filter((b) => b.category === "mens");

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0 opacity-40">
          {/* Abstract representation of boys playing/studying */}
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <Badge variant="primary" className="bg-white/10 text-white border-white/20 mb-6 backdrop-blur-md">
            For Students & Working Professionals
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Aishwaraya Mens Hostels
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Experience comfortable, secure, and hassle-free living across {mensBranches.length} prime locations in Chennai. Tailored specifically for men.
          </p>
          <Button variant="gold" size="lg" href="/booking?category=mens">
            View Availability <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Peace of Mind</h3>
              <p className="text-gray-600">24/7 CCTV surveillance, biometric access, and secure two-wheeler parking.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unlimited & Homely Food</h3>
              <p className="text-gray-600">Delicious South Indian meals (Veg/Non-Veg options) cooked in hygienic kitchens.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High-Speed Connectivity</h3>
              <p className="text-gray-600">Uninterrupted WiFi and dedicated study/work areas for maximum productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mens Hostels in Chennai</h2>
            <p className="text-gray-600">Select a branch near your college or workplace.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mensBranches.map((branch) => {
              const baseName = branch.name.split(" - ")[1];
              return (
                <Card key={branch.id} className="group overflow-hidden flex flex-col sm:flex-row h-full">
                  <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                      <Image 
                        src={`https://ui-avatars.com/api/?name=${branch.name}&background=1a365d&color=fff&size=512`} 
                        alt={branch.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <Badge variant="primary" className="w-max mb-3">Mens Hostel</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{baseName}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{branch.address}</p>
                    
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> AC & Non-AC Rooms
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> 2, 3, 4, 6 Sharing
                      </li>
                    </ul>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <Button variant="outline" size="sm" href={`/booking?branch=${branch.id}`} fullWidth>
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
