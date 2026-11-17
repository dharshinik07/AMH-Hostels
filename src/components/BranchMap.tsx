"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import "leaflet/dist/leaflet.css";
import { Branch } from "@/types";

interface BranchMapProps {
  branches: Branch[];
}

export default function BranchMap({ branches }: BranchMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});
  const leafletRef = useRef<any>(null);
  const [activeBranchId, setActiveBranchId] = useState<string | null>(null);

  // Helper to generate crisp, self-contained SVG Pin Icons (no external CDN dependency)
  const createMarkerHtml = (index: number, isSelected: boolean) => {
    const pinColor = isSelected ? "#d4a843" : "#1a365d";
    const scale = isSelected ? "scale(1.15)" : "scale(1)";
    return `
      <div style="position: relative; width: 38px; height: 46px; display: flex; align-items: center; justify-content: center; cursor: pointer; transform: ${scale}; transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);">
        <svg width="38" height="46" viewBox="0 0 38 46" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.35));">
          <path d="M19 0C8.50659 0 0 8.50659 0 19C0 29.5 16.5 44.5 18.05 45.6C18.6 46 19.4 46 19.95 45.6C21.5 44.5 38 29.5 38 19C38 8.50659 29.4934 0 19 0Z" fill="${pinColor}"/>
          <circle cx="19" cy="19" r="11" fill="#FFFFFF"/>
          <text x="19" y="23.5" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" fill="${pinColor}" text-anchor="middle">${index + 1}</text>
        </svg>
      </div>
    `;
  };

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    let isMounted = true;

    import("leaflet").then((L) => {
      if (!isMounted || !mapContainerRef.current || mapInstanceRef.current) return;
      leafletRef.current = L;

      try {
        // Calculate initial bounds from branch GPS coordinates
        const validCoords = branches.filter((b) => b.latitude && b.longitude);
        const defaultCenter: [number, number] = validCoords.length > 0 
          ? [validCoords[0].latitude, validCoords[0].longitude] 
          : [12.924, 80.138];

        const map = L.map(mapContainerRef.current, {
          center: defaultCenter,
          zoom: 12,
          scrollWheelZoom: true,
          zoomControl: true,
        });

        // OpenStreetMap Carto tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add markers for all branches
        markersRef.current = {};
        const bounds = L.latLngBounds([]);

        branches.forEach((branch, index) => {
          const latLng: [number, number] = [branch.latitude, branch.longitude];
          bounds.extend(latLng);

          const icon = L.divIcon({
            className: "bg-transparent border-0",
            html: createMarkerHtml(index, false),
            iconSize: [38, 46],
            iconAnchor: [19, 46],
            popupAnchor: [0, -42],
          });

          const marker = L.marker(latLng, { icon, title: branch.name }).addTo(map);

          const branchShortName = branch.name.replace(/^[^-]+ - /, "");
          const cleanPhone = branch.phone.replace(/\s/g, "");
          const availableBeds = branch.totalBeds - branch.occupiedBeds;

          const popupContent = `
            <div style="padding: 4px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; min-width: 220px; max-width: 280px;">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px;">
                <span style="display: inline-block; padding: 3px 8px; border-radius: 9999px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: #1a365d; color: #ffffff;">
                  ${branch.category === "mens" ? "Mens Hostel" : "Womens Hostel"}
                </span>
                <span style="font-size: 10px; font-weight: 700; color: #1e3a8a; background: #eff6ff; padding: 2px 8px; border-radius: 9999px; border: 1px solid #bfdbfe;">
                  Admissions Open
                </span>
              </div>
              <h4 style="margin: 0 0 4px 0; font-size: 15px; font-weight: 700; color: #0f172a; line-height: 1.3;">
                ${branchShortName}
              </h4>
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b; line-height: 1.45;">
                ${branch.address}
              </p>
              <p style="margin: 0 0 10px 0; font-size: 11px; color: #b45309; font-weight: 600; line-height: 1.3;">
                📞 Call or submit enquiry for current room vacancies & rates
              </p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px; padding-top: 8px; border-top: 1px solid #e2e8f0;">
                <a href="tel:${cleanPhone}" style="display: flex; align-items: center; justify-content: center; gap: 4px; padding: 7px 10px; background: #f1f5f9; color: #0f172a; text-decoration: none; border-radius: 8px; font-size: 11px; font-weight: 700; transition: background 0.15s ease;">
                  📞 Call
                </a>
                <a href="https://maps.google.com/?q=${branch.latitude},${branch.longitude}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 4px; padding: 7px 10px; background: #d4a843; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 11px; font-weight: 700; box-shadow: 0 1px 3px rgba(0,0,0,0.12);">
                  📍 Directions
                </a>
              </div>
            </div>
          `;

          marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: "custom-branch-popup",
          });

          marker.on("click", () => {
            setActiveBranchId(branch.id);
          });

          markersRef.current[branch.id] = marker;
        });

        // Fit map bounds to show all branches with comfortable padding
        if (validCoords.length > 0) {
          map.fitBounds(bounds, {
            padding: [40, 40],
            maxZoom: 13,
          });
        }

        map.on("popupclose", () => {
          setActiveBranchId(null);
        });

        mapInstanceRef.current = map;

        // Invalidate size to ensure zero grey tiles after DOM layout completes
        setTimeout(() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
          }
        }, 300);

      } catch (err) {
        console.error("Leaflet initialization failed:", err);
      }
    });

    // ResizeObserver to keep Leaflet synchronized if container dimensions resize
    const container = mapContainerRef.current;
    let observer: ResizeObserver | null = null;
    if (container && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      });
      observer.observe(container);
    }

    return () => {
      isMounted = false;
      if (observer) {
        observer.disconnect();
      }
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (_) {}
        mapInstanceRef.current = null;
      }
    };
  }, [branches]);

  // Update marker styles when active branch changes
  useEffect(() => {
    if (!leafletRef.current || !mapInstanceRef.current) return;
    const L = leafletRef.current;

    branches.forEach((branch, index) => {
      const marker = markersRef.current[branch.id];
      if (marker) {
        const isSelected = branch.id === activeBranchId;
        const newIcon = L.divIcon({
          className: "bg-transparent border-0",
          html: createMarkerHtml(index, isSelected),
          iconSize: [38, 46],
          iconAnchor: [19, 46],
          popupAnchor: [0, -42],
        });
        marker.setIcon(newIcon);
      }
    });
  }, [activeBranchId, branches]);

  // Handle clicking a branch pill button
  const handleSelectBranch = useCallback((branch: Branch) => {
    setActiveBranchId(branch.id);

    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([branch.latitude, branch.longitude], 15, {
        duration: 0.9,
      });

      const marker = markersRef.current[branch.id];
      if (marker) {
        setTimeout(() => {
          marker.openPopup();
        }, 350);
      }
    }
  }, []);

  // Reset to full Chennai view showing all 6 locations
  const handleResetView = useCallback(() => {
    setActiveBranchId(null);
    if (mapInstanceRef.current && leafletRef.current) {
      const L = leafletRef.current;
      const bounds = L.latLngBounds(branches.map((b) => [b.latitude, b.longitude]));
      mapInstanceRef.current.fitBounds(bounds, {
        padding: [40, 40],
        maxZoom: 13,
      });
      mapInstanceRef.current.closePopup();
    }
  }, [branches]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Branch Selector Pills & Reset View Button */}
      <div className="flex flex-wrap items-center justify-center gap-2 px-1">
        <button
          onClick={handleResetView}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
            activeBranchId === null
              ? "bg-gray-900 text-white border-gray-900 shadow-sm"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
        >
          🗺️ Show All 8 Branches
        </button>

        {branches.map((b, index) => {
          const isSelected = activeBranchId === b.id;
          const shortName = b.name.replace(/^[^-]+ - /, "");
          return (
            <button
              key={b.id}
              onClick={() => handleSelectBranch(b)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                isSelected
                  ? "bg-primary text-white border-primary shadow-md scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              <span className={`w-4 h-4 rounded-full text-[10px] font-extrabold flex items-center justify-center ${
                isSelected ? "bg-gold text-white" : "bg-primary/10 text-primary"
              }`}>
                {index + 1}
              </span>
              <span>{shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Map Container */}
      <div className="w-full h-[450px] sm:h-[550px] overflow-hidden rounded-[1.5rem] relative z-0 border border-gray-200 shadow-inner bg-slate-50">
        <div ref={mapContainerRef} className="w-full h-full" />
      </div>

      <div className="flex items-center justify-between px-2 text-[11px] text-gray-500">
        <span>💡 Tap any branch pill or pin to see address, contact & instant navigation</span>
        <span className="hidden sm:inline">Use mouse wheel or pinch to zoom</span>
      </div>
    </div>
  );
}
