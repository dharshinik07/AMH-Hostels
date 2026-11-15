"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  BedDouble, 
  Navigation, 
  ArrowRight,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Building2,
  Car
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { branches } from "@/data/branches";
import dynamic from "next/dynamic";

const branchPhotos = [
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
];

const BranchMap = dynamic(() => import("@/components/BranchMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] sm:h-[550px] bg-gray-100 rounded-3xl animate-pulse flex items-center justify-center">
      <div className="text-gray-500 font-semibold text-sm">📍 Initializing Interactive Chennai Map...</div>
    </div>
  ),
});

export default function BranchesPage() {
  const totalBeds = branches.reduce((acc, b) => acc + b.totalBeds, 0);
  const totalOccupied = branches.reduce((acc, b) => acc + b.occupiedBeds, 0);
  const totalAvailable = totalBeds - totalOccupied;

  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      {/* SECTION 1: Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <Badge variant="gold" className="mb-4">6 Prime Locations</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find Your Perfect <span className="text-primary">Stay in Chennai</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Strategically located near premier colleges (MCC, Bharath, SRM) and key transit stations across Chennai. {totalAvailable} beds currently available.
        </p>
      </section>

      {/* SECTION 2: Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white p-4 sm:p-6 rounded-[2rem] shadow-xl border border-gray-100">
          <div className="flex items-center justify-between mb-4 px-2">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Interactive Location Map</h2>
              <p className="text-xs text-gray-500">Click any marker or pill above to pan to the branch.</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full">
              Live GPS Verified
            </span>
          </div>
          <BranchMap branches={branches} />
        </div>
      </section>

      {/* SECTION 3: Branches Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Badge variant="primary" className="mb-1 text-xs">Directory</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">All 6 Branches in Detail</h2>
          </div>
          <span className="text-xs text-gray-500 font-medium hidden sm:block">Sorted by location</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => {
            const available = branch.totalBeds - branch.occupiedBeds;
            const isLow = available < 8;
            const photo = branchPhotos[index % branchPhotos.length];

            return (
              <Card key={branch.id} className="group flex flex-col h-full rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all">
                <div className="w-full h-56 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={photo}
                    alt={`Aishwaraya Hostels accommodation branch at ${branch.name.replace(/^[^-]+ - /, "")} Chennai`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
                    <Badge variant="primary" className="shadow-md bg-primary/90 text-white font-bold text-xs">
                      Mens Hostel
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 z-20">
                    <Badge variant={isLow ? "warning" : "success"} className="shadow-md text-xs font-bold">
                      {available} Beds Left
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white z-20">
                    <h3 className="text-lg font-bold drop-shadow">
                      {branch.name.replace(/^[^-]+ - /, "")}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-600 line-clamp-2">{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="text-xs font-semibold text-gray-700 hover:text-primary transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <BedDouble className="w-4 h-4 text-gray-400 shrink-0" />
                      <span className="text-xs text-gray-600">
                        <strong className="text-gray-900">{branch.totalRooms}</strong> Rooms • <strong className="text-gray-900">{branch.totalBeds}</strong> Total Beds
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-auto grid grid-cols-2 gap-2.5 pt-4 border-t border-gray-100">
                    <a
                      href={`https://maps.google.com/?q=${branch.latitude},${branch.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-gray-600" /> Directions
                    </a>
                    <Link
                      href={`/booking?branch=${branch.id}&category=mens`}
                      className="flex items-center justify-center gap-1 py-2.5 rounded-xl gradient-gold text-white text-xs font-bold shadow-sm hover:shadow-md transition-all"
                    >
                      Book Bed <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: College & IT Hub Proximity Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-lg">
          <div className="text-center mb-10">
            <Badge variant="gold" className="mb-2">Connectivity</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Proximity to Premier Colleges & Tech Corridors</h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              All 6 Aishwaraya branches are situated within 5–15 minutes travel time from major institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-surface border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Nearby Educational Institutions</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-gray-700">
                <li className="flex items-center justify-between">
                  <span>• Madras Christian College (MCC), Tambaram</span>
                  <span className="font-semibold text-primary">5-8 mins</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Bharath Institute of Higher Education (BIHER)</span>
                  <span className="font-semibold text-primary">5 mins</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• SRM University, Kattankulathur</span>
                  <span className="font-semibold text-primary">15-20 mins</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• ASAN Memorial College of Arts & Science</span>
                  <span className="font-semibold text-primary">8 mins</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• BS Abdur Rahman Crescent Institute</span>
                  <span className="font-semibold text-primary">12 mins</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Nearby IT Parks & Transit</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-gray-700">
                <li className="flex items-center justify-between">
                  <span>• Tambaram Railway Station & Bus Terminus</span>
                  <span className="font-semibold text-primary">6 mins</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• MEPZ Special Economic Zone (SEZ)</span>
                  <span className="font-semibold text-primary">10 mins</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Sholinganallur & OMR IT Corridor (TCS, Infosys)</span>
                  <span className="font-semibold text-primary">15 mins</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Chennai International Airport (MAA)</span>
                  <span className="font-semibold text-primary">20 mins</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Medavakkam Bus Stand & Commercial Junction</span>
                  <span className="font-semibold text-primary">5 mins</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Branch Amenities & Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <Badge variant="gold" className="mb-2">Quick Reference</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Branch Amenities Matrix</h2>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-primary text-white text-[11px] uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Branch</th>
                <th className="py-3 px-4">AC Available</th>
                <th className="py-3 px-4">Sharing Types</th>
                <th className="py-3 px-4">Food Facility</th>
                <th className="py-3 px-4">Covered Parking</th>
                <th className="py-3 px-4">Biometric Entry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {branches.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-gray-900">{b.name.replace(/^[^-]+ - /, "")}</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Yes (Split)</td>
                  <td className="py-3 px-4">2, 3, 4, 6 Sharing</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ 3 Meals/Day</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ Bikes</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">✓ 24/7</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6: Visit & Booking Assistance CTA */}
      <section className="bg-primary-dark text-white py-16 rounded-3xl mx-4 sm:mx-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Badge variant="gold" className="mb-3 bg-white/10 text-gold border-white/20">Direct Support</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to Visit Any Branch in Person?</h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto mb-8">
            Walk-ins and site visits are welcomed every day between 9:00 AM and 8:00 PM. Call our branch manager directly for parking guidance and room previews.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" href="/booking" className="font-bold px-10">
              Book Bed Online Now
            </Button>
            <a
              href="tel:+919043456234"
              className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold" /> Call Central Office: 90434 56234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
