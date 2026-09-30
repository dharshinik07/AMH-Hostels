"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { X } from "lucide-react";

// Gallery images — mens hostel and facilities only
const mockGallery = [
  { id: 1, category: "Rooms", title: "Premium AC Room", alt: "2-sharing premium AC room showing comfortable beds and study desks", height: "h-64" },
  { id: 2, category: "MENS", title: "Selaiyur Branch Exterior", alt: "Exterior view of mens hostel building in Selaiyur", height: "h-96" },
  { id: 3, category: "Facilities", title: "Dining Area", alt: "Clean and spacious dining hall with tables and chairs", height: "h-64" },
  { id: 5, category: "Rooms", title: "4-Sharing Non AC", alt: "Spacious 4 sharing room with robust bunker beds", height: "h-96" },
  { id: 6, category: "Facilities", title: "Common Recreation Area", alt: "Students relaxing in common area", height: "h-64" },
  { id: 7, category: "MENS", title: "Camp Road Recreation", alt: "Students playing carrom board in common area", height: "h-80" },
  { id: 9, category: "Facilities", title: "Washing Machines", alt: "Laundry area with multiple automatic washing machines", height: "h-64" },
];

const categories = ["All", "MENS", "Rooms", "Facilities"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof mockGallery[0] | null>(null);

  const filteredImages = activeTab === "All" 
    ? mockGallery 
    : mockGallery.filter(img => img.category === activeTab);

  return (
    <div className="min-h-screen bg-surface pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <Badge variant="gold" className="mb-4">Gallery</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Life at <span className="text-primary">Aishwaraya</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Take a visual tour of our facilities, rooms, and spaces across our mens hostel branches.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === category
                  ? "bg-primary text-white shadow-md transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid Simulation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className={`relative w-full rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300 ${image.height}`}
              onClick={() => setSelectedImage(image)}
            >
              {/* Fallback pattern while waiting for real images */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <Image 
                  src={`https://ui-avatars.com/api/?name=${image.title}&background=f1f5f9&color=64748b&size=512&font-size=0.1`} 
                  alt={image.alt} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Badge variant="gold" className="w-max mb-2">{image.category}</Badge>
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <Image 
                src={`https://ui-avatars.com/api/?name=${selectedImage.title}&background=1e293b&color=fff&size=512&font-size=0.1`} 
                alt={selectedImage.alt} 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6 sm:p-10 pt-32">
              <Badge variant="gold" className="mb-3">{selectedImage.category}</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedImage.title}</h2>
              <p className="text-white/70 text-sm sm:text-base">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
