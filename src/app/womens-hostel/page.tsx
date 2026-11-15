import Image from "next/image";
import Link from "next/link";
import { 
  Bell, 
  ArrowRight, 
  Shield, 
  Heart, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Lock, 
  UserCheck, 
  Coffee,
  Sparkles,
  Wifi
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function WomensHostelPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919043456234";
  const whatsappMessage = encodeURIComponent("Hi! I am interested in Aishwaraya Women's Hostel launch in Chennai. Please register my early-bird waitlist.");

  return (
    <div className="min-h-screen bg-surface">
      {/* SECTION 1: Hero Banner */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#581c87] pt-24 pb-16 text-white text-center">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1920&q=80"
            alt="Aishwaraya Womens Hostel modern and secure furnished residential bedroom interior in Chennai"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e1065]/95 via-[#4c1d95]/85 to-[#2e1065]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-pulse">
            <Bell className="w-4 h-4 text-pink-300" />
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Coming Soon to Chennai • Priority Waitlist Open
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Aishwaraya <br />
            <span className="bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Women&apos;s Hostels
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bringing our trusted hospitality to female students and working professionals in Chennai. Designed with top-tier security, resident female wardens, homestyle food, and peaceful study spaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-105"
            >
              <span>Join Priority Waitlist on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Button href="/" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Explore Active Mens Hostels
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: Safety & Security Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="gold" className="mb-3">Zero Compromise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Uncompromising Safety & Security
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              We understand that parents and residents prioritize safety above all else. Our facilities are built around 24/7 vigilant oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: UserCheck, title: "Female Wardens On-Site", desc: "Resident female wardens available 24/7 to address any comfort or medical needs." },
              { icon: Lock, title: "Biometric Access Control", desc: "Digital fingerprint entry systems ensuring strictly authorized resident access only." },
              { icon: Shield, title: "24/7 CCTV Surveillance", desc: "Continuous perimeter and common area video recording for complete resident safety." },
              { icon: Heart, title: "Visitor Screening & Safety", desc: "Strict ID verification and designated visitor reception lounges." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-surface border border-gray-100 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Planned Accommodations */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="gold" className="mb-3">Room Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comfortable, Hygienic Rooms
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Choose from 2, 3, and 4 sharing rooms with split AC or ceiling fan cooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium 2-Sharing AC",
                desc: "Spacious private room with split air conditioning, personal full-length wooden wardrobes, and individual study desks.",
                features: ["Split AC", "Attached Bathroom", "Personal Wardrobe", "5G Wi-Fi"],
                img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Comfort 3-Sharing AC",
                desc: "Balanced community room with 3 individual beds, designated storage lockers, and quiet study zones.",
                features: ["Split AC", "Dedicated Lockers", "Study Desks", "Housekeeping"],
                img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Standard 4-Sharing Non-AC",
                desc: "Economical and airy room with high-airflow fans, large windows, and secure lockable storage.",
                features: ["Ceiling Fans", "Lockers", "Common Washroom", "Daily Cleaning"],
                img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
              },
            ].map((room, i) => (
              <Card key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-md flex flex-col h-full">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image src={room.img} alt={room.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{room.title}</h3>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed flex-1">{room.desc}</p>
                  <div className="space-y-1.5 pt-4 border-t border-gray-100">
                    {room.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Nutritious Food & Water */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="warning" className="mb-3 bg-pink-100 text-pink-900">Pure & Nutritious</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Homestyle Cooking with RO Water & Hygiene
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Just like at home, our kitchen staff maintains strict hygiene protocols. Meals are prepared fresh 3 times a day with balanced nutrition.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/50 border border-purple-100 text-xs text-gray-800">
                  <Coffee className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Healthy Breakfast: Idli, Dosa, Pongal, Upma with Sambar & fresh Chutneys</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/50 border border-purple-100 text-xs text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Wholesome Lunch: Packed lunch options or hot meals with vegetables & curries</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/50 border border-purple-100 text-xs text-gray-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Balanced Dinner: Light rotis, veg kurma, and special weekend non-veg options</span>
                </div>
              </div>
            </div>

            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Communal dining space and cafeteria serving hygienic homestyle meals for womens hostel residents"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Strategic Locations Under Development */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="gold" className="mb-3">Prime Connectivity</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planned Near Top Colleges & IT Parks</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Our upcoming Womens PG locations are situated within 10 minutes of major educational institutions and corporate IT corridors in South Chennai.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-900 text-base mb-1">Selaiyur & Tambaram</h4>
              <p className="text-xs text-gray-500">Close to MCC College, Bharath University, Tambaram Railway Station.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-900 text-base mb-1">Medavakkam & Sholinganallur</h4>
              <p className="text-xs text-gray-500">Direct connectivity to OMR IT Corridor, ELCOT SEZ, and TCS.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-900 text-base mb-1">Camp Road Junction</h4>
              <p className="text-xs text-gray-500">Centrally located with super markets, clinics, bus terminals at walking distance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Priority Waitlist Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="gold" className="mb-4 bg-white/10 text-gold border-white/20">Early-Bird Privilege</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Get Notified Upon Launch</h2>
          <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed">
            Join our priority WhatsApp waitlist to receive room opening dates, photos, and exclusive introductory discounts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold shadow-xl flex items-center justify-center gap-2"
            >
              <span>Join WhatsApp Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919043456234"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold" /> Speak with Supervisor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
