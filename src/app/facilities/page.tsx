import Image from "next/image";
import { 
  Wifi, 
  Snowflake, 
  Utensils, 
  Shield, 
  Shirt, 
  Zap, 
  Car, 
  Dumbbell, 
  Droplets, 
  Sparkles, 
  GlassWater, 
  BookOpen, 
  CheckCircle,
  Coffee,
  CheckCircle2,
  ArrowRight,
  Clock,
  KeyRound,
  HeartPulse
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { facilities } from "@/data/facilities";

const iconMap: Record<string, any> = {
  wifi: Wifi,
  snowflake: Snowflake,
  utensils: Utensils,
  shield: Shield,
  shirt: Shirt,
  zap: Zap,
  car: Car,
  dumbbell: Dumbbell,
  droplets: Droplets,
  sparkles: Sparkles,
  "glass-water": GlassWater,
  "book-open": BookOpen,
};

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      {/* SECTION 1: Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <Badge variant="gold" className="mb-4">Comprehensive Amenities</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Everything You Need to <span className="text-primary">Thrive in Chennai</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          We handle daily chores, housekeeping, cooking, and maintenance so you can concentrate completely on your studies or job.
        </p>
      </section>

      {/* SECTION 2: 12 Core Facilities & Amenities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Badge variant="primary" className="mb-1 text-xs">Standard Inclusions</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">12 Essential Amenities</h2>
          </div>
          <span className="text-xs text-gray-500 font-medium hidden sm:block">Available across all 8 branches</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility) => {
            const IconComponent = iconMap[facility.icon] || CheckCircle;
            return (
              <Card key={facility.id} className="group hover:border-gold/40 hover:shadow-lg transition-all rounded-2xl border border-gray-100">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Food & Dining Highlight */}
      <section className="bg-white py-16 border-y border-gray-100 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="warning" className="mb-4 bg-amber-100 text-amber-900 border-amber-200">
                3 Meals Daily
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Authentic & Hygienic South Indian Food
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                Missing homely flavors? Our dedicated in-house kitchen team prepares freshly cooked, nutritious South Indian meals three times a day.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Breakfast & Morning Coffee (7:00 AM - 9:30 AM)</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Idli with Sambar & Chutneys, Crispy Dosa, Pongal, Poori-Masala, and authentic Filter Coffee/Tea.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Lunch & College/Office Lunch Boxes (12:30 PM - 2:30 PM)</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Variety rice options (Lemon, Tomato, Curd, Fried Rice) or South Indian Full Meals (Rice, Sambar, Rasam, Kootu, Poriyal, Appalam).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Dinner (7:30 PM - 10:00 PM)</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Soft Chapathis with Gravies, Variety Dosa, Parotta, and special Non-Veg curries on scheduled days.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="gold" size="md" href="/booking" className="font-bold">
                  Book Room with Food Plan <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
            
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Aishwaraya Hostels hygienic dining hall and kitchen facility serving freshly prepared South Indian meals"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-gold/90 text-primary-dark font-bold text-xs uppercase tracking-wider mb-2 inline-block">
                  Hygienic Kitchens
                </span>
                <h3 className="text-xl font-bold">Cooked with RO Water & Fresh Ingredients Daily</h3>
                <p className="text-xs text-white/80 mt-1">Inspected regularly for cleanliness and top safety standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Hygiene & Housekeeping Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <Badge variant="gold" className="mb-2">Clean Living</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Hospital-Grade Housekeeping Protocols</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-3" />
            <h4 className="font-bold text-base text-gray-900 mb-1">Daily Room Mopping</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Floors swept and mopped daily using certified disinfectants for complete germ protection.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
            <Droplets className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-bold text-base text-gray-900 mb-1">Sanitized Restrooms</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Attached and common bathrooms washed and sanitized daily with fresh air fresheners.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
            <GlassWater className="w-8 h-8 text-teal-500 mx-auto mb-3" />
            <h4 className="font-bold text-base text-gray-900 mb-1">Multi-Stage RO Water</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Commercial RO purifiers with UV filtration installed on every floor with regular filter servicing.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: High-Speed 5G Connectivity & Study Zones */}
      <section className="bg-primary-dark text-white py-16 rounded-3xl mx-4 sm:mx-8 mb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-3 bg-white/10 text-gold border-white/20">Work & Study</Badge>
          <h2 className="text-3xl font-bold mb-4">Dedicated High-Speed 5G Wi-Fi & Study Desks</h2>
          <p className="text-white/75 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Whether coding your college projects, attending online university lectures, or working remote shifts for IT companies, enjoy high bandwidth and zero latency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Wifi className="w-6 h-6 text-gold mb-2" />
              <h4 className="font-bold text-white text-base mb-1">Dual ISP Failover</h4>
              <p className="text-xs text-white/60">Seamless automatic switchover between primary and secondary optical fiber networks.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <BookOpen className="w-6 h-6 text-gold mb-2" />
              <h4 className="font-bold text-white text-base mb-1">Quiet Study Desks</h4>
              <p className="text-xs text-white/60">Individual study desks and reading lamps in rooms for late-night exams and project deadlines.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Zap className="w-6 h-6 text-gold mb-2" />
              <h4 className="font-bold text-white text-base mb-1">100% Inverter Backup</h4>
              <p className="text-xs text-white/60">Heavy-duty power inverters supporting Wi-Fi routers, fans, and lights through any Chennai power grid cut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Hostel Guidelines, Gate Timings & Safety */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="gold" className="mb-3">Community Standards</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Hostel Guidelines & Timings</h2>
        <p className="text-gray-600 text-xs sm:text-sm mb-8">Transparent rules ensuring harmony, safety, and mutual respect among residents.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <Clock className="w-5 h-5 text-primary mb-1.5" />
            <h4 className="text-xs font-bold text-gray-900 mb-1">Gate Closing: 10:30 PM</h4>
            <p className="text-[11px] text-gray-500">Late entry permission granted for official shift workers and student lab work via biometric system.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <KeyRound className="w-5 h-5 text-primary mb-1.5" />
            <h4 className="text-xs font-bold text-gray-900 mb-1">Visitor Policy</h4>
            <p className="text-[11px] text-gray-500">Parents and visitors are warmly welcomed in the ground-floor reception lounge during visiting hours.</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-200">
            <HeartPulse className="w-5 h-5 text-primary mb-1.5" />
            <h4 className="text-xs font-bold text-gray-900 mb-1">Emergency First Aid</h4>
            <p className="text-[11px] text-gray-500">24/7 on-call medical assistance, first aid kits, and partner clinics within 5 minutes of each branch.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
