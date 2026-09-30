import { Wifi, Snowflake, Utensils, Shield, Shirt, Zap, Car, Dumbbell, Droplets, Sparkles, GlassWater, BookOpen, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { facilities } from "@/data/facilities";

// Map icon strings to actual Lucide components
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <Badge variant="gold" className="mb-4">Amenities</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Everything You Need to <span className="text-primary">Thrive</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive facilities so you can focus on your studies or career without worrying about daily chores.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility) => {
            const IconComponent = iconMap[facility.icon] || CheckCircle;
            return (
              <Card key={facility.id} className="group hover:border-gold/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Food Highlight Section */}
      <section className="bg-white py-20 border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-50/50 skew-x-12 translate-x-1/3 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="warning" className="mb-4 bg-amber-100 text-amber-800">Homely Meals</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Delicious & Nutritious South Indian Food</h2>
              <p className="text-lg text-gray-600 mb-8">
                Missing home food? Our dedicated kitchens across all branches serve pure, hygienic, and tasty South Indian meals perfectly balanced for daily nutrition.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Breakfast & Coffee</h4>
                    <p className="text-sm text-gray-600 mt-1">Idli, Dosa, Pongal, Poori with authentic chutneys and sambar. Hot Tea/Coffee included.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Lunch Box Options</h4>
                    <p className="text-sm text-gray-600 mt-1">Variety rice (Lemon, Tomato, Curd), Meals (Rice, Sambar, Rasam, Kootu, Poriyal).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Dinner</h4>
                    <p className="text-sm text-gray-600 mt-1">Chapathi, Dosa, Parotta with flavorful veg and non-veg curries depending on the day.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-transparent z-10"></div>
               {/* Decorative fallback since we don't have food images yet */}
              <div className="absolute inset-0 bg-amber-100 flex items-center justify-center">
                <Utensils className="w-32 h-32 text-amber-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
