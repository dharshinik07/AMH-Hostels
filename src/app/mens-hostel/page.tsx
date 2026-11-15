import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Wifi, 
  Utensils, 
  MapPin, 
  Phone, 
  Navigation,
  Sparkles,
  Zap,
  Car,
  Clock,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { branches } from "@/data/branches";

const branchPhotos = [
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
];

export default function MensHostelPage() {
  const mensBranches = branches.filter((b) => b.category === "mens");

  return (
    <div className="min-h-screen bg-surface">
      {/* SECTION 1: Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary-dark pt-24 pb-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1920&q=80"
            alt="Aishwaraya Mens Hostel well-ventilated bedroom with individual study tables and storage in Chennai"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-white text-xs sm:text-sm font-semibold">Exclusively for Students & Working Men in Chennai</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Aishwaraya <span className="text-gradient">Mens Hostels</span>
          </h1>

          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience comfortable, secure, and hassle-free living across {mensBranches.length} prime locations in Chennai. Featuring delicious homestyle food, 5G Wi-Fi, and 24/7 support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" href="/booking?category=mens" className="font-bold shadow-xl">
              Book Bed Online <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" href="#mens-branches" className="text-white border-white/30 hover:bg-white/10">
              View 6 Branches
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Choose Us (3 Pillars) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="gold" className="mb-3">Peace of Mind</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built Around Student & Professional Needs</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              We eliminate daily hassles so you can focus entirely on career advancement and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface border border-gray-100 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Security & Biometrics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Round-the-clock CCTV cameras, biometric fingerprint gates, and secure two-wheeler covered parking.</p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-gray-100 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unlimited Homely Meals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Fresh South Indian breakfast, lunch box options for college/office, and hearty dinners with veg and non-veg curries.</p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-gray-100 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High-Speed 5G Wi-Fi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Dedicated multi-line high-speed internet and uninterrupted power backup ensuring seamless online work and study.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The 6 Dedicated Mens Branches */}
      <section id="mens-branches" className="py-20 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="gold" className="mb-3">Our 6 Locations</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Mens Hostels Across Chennai</h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">Choose the branch closest to your campus, workplace, or transit terminal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mensBranches.map((branch, index) => {
              const baseName = branch.name.replace(/^[^-]+ - /, "");
              const available = branch.totalBeds - branch.occupiedBeds;
              const photo = branchPhotos[index % branchPhotos.length];

              return (
                <Card key={branch.id} className="group overflow-hidden flex flex-col h-full rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                  <div className="w-full h-52 bg-gray-200 relative overflow-hidden">
                    <Image 
                      src={photo} 
                      alt={branch.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    
                    <div className="absolute top-3 left-3 z-20">
                      <Badge variant="primary" className="font-bold text-xs">Mens Hostel</Badge>
                    </div>
                    <div className="absolute top-3 right-3 z-20">
                      <Badge variant="success" className="font-bold text-xs">{available} Beds Available</Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 z-20 text-white">
                      <h3 className="text-lg font-bold drop-shadow">{baseName}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <p className="text-gray-600 text-xs mb-4 line-clamp-2">{branch.address}</p>
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      <li className="flex items-center text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0" /> AC & Non-AC Rooms Available
                      </li>
                      <li className="flex items-center text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0" /> 2, 3, 4, 6 Sharing with Lockers
                      </li>
                      <li className="flex items-center text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 shrink-0" /> Optional 3-Times Food Included
                      </li>
                    </ul>

                    <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-gray-600">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                        {branch.phone}
                      </a>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2 pt-4 border-t border-gray-100">
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
                        Book Bed
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Comprehensive In-Hostel Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="gold" className="mb-3">Standard Amenities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything Included in Your Rent</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">No surprise charges. Your monthly stay covers all critical facilities.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: Wifi, title: "High-Speed 5G Wi-Fi", sub: "Multi-device connectivity" },
              { icon: Sparkles, title: "Daily Housekeeping", sub: "Rooms & restrooms cleaned daily" },
              { icon: Car, title: "Covered Bike Parking", sub: "Secure perimeter" },
              { icon: Zap, title: "100% Inverter Backup", sub: "Zero power cut hassle" },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface border border-gray-100 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h4>
                <p className="text-gray-500 text-xs">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Food & Meal Schedule for Men */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <Badge variant="warning" className="mb-3 bg-amber-100 text-amber-900">Homely Dining</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Fresh, Healthy Food Just Like Home
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our professional cooks prepare healthy South Indian meals with high-quality ingredients, clean oils, and RO purified water.
                </p>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-surface border border-gray-100 flex items-center justify-between text-xs font-semibold">
                    <span>🍳 Breakfast & Filter Coffee</span>
                    <span className="text-gray-500">7:00 AM – 9:30 AM</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface border border-gray-100 flex items-center justify-between text-xs font-semibold">
                    <span>🍱 College & Office Lunch Boxes</span>
                    <span className="text-gray-500">12:30 PM – 2:30 PM</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface border border-gray-100 flex items-center justify-between text-xs font-semibold">
                    <span>🍛 Dinner (Veg & Non-Veg Special)</span>
                    <span className="text-gray-500">7:30 PM – 10:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Aishwaraya Mens Hostel clean dining area where wholesome homestyle breakfast, lunch, and dinner are served"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Instant Reservation CTA */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="gold" className="mb-4 bg-white/10 text-gold border-white/20">Reserve Your Spot</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Ready to Join Aishwaraya Mens PG?</h2>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8">
            Beds fill up quickly across all 6 branches. Reserve your room online today with zero advance payment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" href="/booking?category=mens" className="w-full sm:w-auto font-bold px-10">
              Book Bed Online
            </Button>
            <a
              href="tel:+919043456234"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold" /> Call: 90434 56234
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
