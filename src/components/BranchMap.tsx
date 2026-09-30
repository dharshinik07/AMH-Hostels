"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Branch } from "@/types";
import L from "leaflet";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import { Navigation, Phone } from "lucide-react";

// Fix standard marker icon issue in Leaflet with Next.js
const customIcon = typeof window !== "undefined" ? new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
}) : null;

interface BranchMapProps {
  branches: Branch[];
}

export default function BranchMap({ branches }: BranchMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !customIcon) return null;

  // Center of Chennai Map
  const center: [number, number] = [12.94, 80.14];

  return (
    <div className="w-full h-[500px] sm:h-[600px] overflow-hidden rounded-[1.5rem] relative z-0">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {branches.map((branch) => (
          <Marker 
            key={branch.id} 
            position={[branch.latitude, branch.longitude]}
            icon={customIcon}
          >
            <Popup className="rounded-xl overflow-hidden branch-popup">
              <div className="p-1 min-w-[200px]">
                <Badge variant={branch.category === "mens" ? "primary" : "secondary"} className="mb-2 w-max">
                  {branch.category === "mens" ? "Mens Hostel" : "Womens Hostel"}
                </Badge>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{branch.name.split(" - ")[1]}</h3>
                <p className="text-xs text-gray-500 mb-3">{branch.address}</p>
                
                <div className="flex gap-2">
                  <a href={`tel:${branch.phone.replace(/\\s/g, '')}`} className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs py-1.5 rounded-lg flex items-center justify-center gap-1 transition-colors">
                    <Phone className="w-3 h-3" /> Call
                  </a>
                  <Link href={`https://maps.google.com/?q=${branch.latitude},${branch.longitude}`} target="_blank" className="flex-1 gradient-gold text-white text-xs py-1.5 rounded-lg flex items-center justify-center gap-1 hover:shadow-md transition-shadow">
                    <Navigation className="w-3 h-3" /> Navigate
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          border-radius: 1rem;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        .leaflet-popup-content {
          margin: 12px;
          line-height: normal;
        }
        .leaflet-container a.leaflet-popup-close-button {
          top: 8px;
          right: 8px;
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
}
