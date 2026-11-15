"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { X, ZoomIn } from "lucide-react";

const realGallery = [
  {
    id: 1,
    category: "Rooms",
    title: "Premium 2-Sharing AC Room",
    alt: "Spacious 2-sharing room with split air conditioner and study tables",
    src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
    height: "h-72",
  },
  {
    id: 2,
    category: "Branches",
    title: "Selaiyur Branch Exterior",
    alt: "Exterior view of modern hostel building in Selaiyur Chennai",
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    height: "h-96",
  },
  {
    id: 3,
    category: "Dining",
    title: "Hygienic Dining Hall",
    alt: "Clean dining area serving fresh South Indian meals",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    height: "h-64",
  },
  {
    id: 4,
    category: "Rooms",
    title: "4-Sharing Room with Bunk Beds",
    alt: "Sturdy ergonomic bunker beds in a spacious ventilated room",
    src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
    height: "h-80",
  },
  {
    id: 5,
    category: "Facilities",
    title: "Quiet Study & Work Lounge",
    alt: "Dedicated high-speed Wi-Fi study zone for students and professionals",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    height: "h-72",
  },
  {
    id: 6,
    category: "Rooms",
    title: "Personal Study Desk & Wardrobe",
    alt: "Neat study corner with ergonomic chair and personal locker",
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80",
    height: "h-88",
  },
  {
    id: 7,
    category: "Facilities",
    title: "Covered 2-Wheeler Parking & Reception",
    alt: "Secure entrance lobby with CCTV surveillance",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    height: "h-64",
  },
];

const categories = ["All", "Rooms", "Branches", "Facilities", "Dining"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof realGallery[0] | null>(null);

  const filteredImages = activeTab === "All" 
    ? realGallery 
    : realGallery.filter(img => img.category === activeTab);

  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <Badge variant="gold" className="mb-4">Visual Tour</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Life at <span className="text-primary">Aishwaraya Hostels</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Browse through authentic photos of our rooms, dining areas, study lounges, and branch facilities across Chennai.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === category
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className={`relative w-full rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-300 ${image.height}`}
              onClick={() => setSelectedImage(image)}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="gold" className="text-xs font-bold">{image.category}</Badge>
                  <ZoomIn className="w-5 h-5 text-white/80" />
                </div>
                <h3 className="text-white font-bold text-base">{image.title}</h3>
                <p className="text-white/70 text-xs mt-1">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in" 
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black" 
            onClick={e => e.stopPropagation()}
          >
            <Image 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              fill 
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
              <Badge variant="gold" className="text-xs font-bold mb-2">{selectedImage.category}</Badge>
              <h2 className="text-xl font-bold">{selectedImage.title}</h2>
              <p className="text-xs text-white/75 mt-1">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
