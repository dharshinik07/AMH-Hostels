"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, BedDouble, Users, Shield, Wifi, Utensils } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { branches } from "@/data/branches";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  const totalBeds = branches.reduce((acc, b) => acc + b.totalBeds, 0);
  const totalBranches = branches.length;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-primary-dark z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-float"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary-light rounded-full mix-blend-screen filter blur-[150px] opacity-60 animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-gold/20 rounded-full mix-blend-screen filter blur-[80px] opacity-50 animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <Badge variant="gold" className="mb-6 animate-fade-in border border-gold/30">
            Premium Living in Chennai
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Experience Premium <br className="hidden md:block" />
            <span className="text-gradient">Hostel Living</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Discover the perfect balance of comfort, security, and community across our {totalBranches} prime locations in Chennai for students and professionals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="lg" href="/booking" className="w-full sm:w-auto px-10">
              Book Now
            </Button>
            <Button variant="outline" size="lg" href="/branches" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:border-white">
              Explore Branches <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-gold rounded-full animate-[slideUp_1.5s_ease-out_infinite] opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: "Prime Locations", value: totalBranches, icon: MapPin },
            { label: "Comfortable Beds", value: `${totalBeds}+`, icon: BedDouble },
            { label: "Happy Residents", value: "1000+", icon: Users },
            { label: "Security & Support", value: "24/7", icon: Shield },
          ].map((stat, i) => (
            <Card key={i} className="bg-white/90 backdrop-blur-xl border-white/20 shadow-xl" hover={false}>
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Live Availability Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Live <span className="text-primary">Availability</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check real-time bed availability across our top branches and secure your spot today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6 lg:gap-8">
            {branches.slice(0, 4).map((branch) => {
              const available = branch.totalBeds - branch.occupiedBeds;
              const isLow = available < 10;

              return (
                <Card key={branch.id} className="group overflow-hidden flex flex-col sm:flex-row h-full">
                  <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
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
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={branch.category === "mens" ? "primary" : "secondary"}>
                        {branch.category === "mens" ? "Mens" : "Womens"}
                      </Badge>
                      <Badge variant={isLow ? "warning" : "success"} className="animate-pulse">
                        {available} Beds Available
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">{branch.name.split(" - ")[1]}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{branch.address}</p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 text-xs font-bold"><Wifi className="w-3 h-3"/></div>
                        <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-green-600 text-xs font-bold"><Utensils className="w-3 h-3"/></div>
                        <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-purple-600 text-xs font-bold"><Shield className="w-3 h-3"/></div>
                      </div>
                      <Link href="/booking" className="text-primary font-medium text-sm hover:text-gold transition-colors flex items-center">
                        Book Room <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" href="/branches">View All Branches</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-1/2 z-0 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Redefining <span className="text-primary">PG Accommodation</span> in Chennai
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that a hostel should be more than just a place to sleep. It should be a community where you can thrive, connect, and feel completely at home.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Premium Amenities", desc: "High-speed WiFi, AC rooms, and regular housekeeping." },
                  { title: "Uncompromising Security", desc: "24/7 CCTV surveillance and biometric access control." },
                  { title: "Homely Food", desc: "Nutritious and delicious meals prepared in hygienic kitchens." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold-dark mt-1">
                      <div className="w-4 h-4 rounded-full bg-gold"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="h-48 rounded-2xl bg-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary/20"></div>
                </div>
                <div className="h-64 rounded-2xl bg-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary/40"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 rounded-2xl bg-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gold/30"></div>
                </div>
                <div className="h-48 rounded-2xl bg-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Residents Say</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it. Read the experiences of students and professionals living with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardContent className="p-8">
                  <div className="flex text-gold mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/50">{testimonial.role} • {testimonial.branch}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
