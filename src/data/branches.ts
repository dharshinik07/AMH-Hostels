import { Branch } from "@/types";

// Real 6 Mens PG Branches provided by user
export const branches: Branch[] = [
  {
    id: "branch-1",
    name: "Aishwaraya Mens Hostel - Madampakkam",
    category: "mens",
    address: "Plot no:55A, Dr.S.R road, Devaraj Nagar, Madampakkam, Chennai - 600126",
    latitude: 12.906778,
    longitude: 80.145823,
    phone: "+91 90434 56234",
    totalRooms: 15,
    totalBeds: 60,
    occupiedBeds: 45,
    image: "/images/branch-1.jpg",
  },
  {
    id: "branch-2",
    name: "Aishwaraya Mens Hostel - Sanitorium",
    category: "mens",
    address: "Sanitorium railway station back side, Bharatha madha street",
    latitude: 12.930821,
    longitude: 80.127613,
    phone: "+91 90434 56234",
    totalRooms: 12,
    totalBeds: 48,
    occupiedBeds: 36,
    image: "/images/branch-2.jpg",
  },
  {
    id: "branch-3",
    name: "Aishwaraya Mens Hostel - East Tambaram",
    category: "mens",
    address: "Door No.37/10 Old No.14, Previous Old No.1, Valmiki Street, East Tambaram, Chennai 600059",
    latitude: 12.928632,
    longitude: 80.129902,
    phone: "+91 90434 56234",
    totalRooms: 10,
    totalBeds: 40,
    occupiedBeds: 28,
    image: "/images/branch-3.jpg",
  },
  {
    id: "branch-4",
    name: "Aishwaraya Mens Hostel - West Tambaram",
    category: "mens",
    address: "10, Brindavan Ave, Rajaraththinam street, West Tambaram, Tambaram, Chennai, Tamil Nadu 600045 (Near vidhya theater)",
    latitude: 12.926587,
    longitude: 80.111066,
    phone: "+91 90434 56234",
    totalRooms: 8,
    totalBeds: 32,
    occupiedBeds: 20,
    image: "/images/branch-4.jpg",
  },
  {
    id: "branch-5",
    name: "Aishwaraya Mens Hostel - Selaiyur (Bharathi Nagar)",
    category: "mens",
    address: "No. 3, avvai Street, barathi nagar, selaiyur, Chennai-600073 (Near viveks show room)",
    latitude: 12.920311,
    longitude: 80.141296,
    phone: "+91 90434 56234",
    totalRooms: 10,
    totalBeds: 40,
    occupiedBeds: 25,
    image: "/images/branch-5.jpg",
  },
  {
    id: "branch-6",
    name: "Aishwaraya Mens Hostel - Selaiyur (IOB Colony)",
    category: "mens",
    address: "No:5A, 1st Main Road, IOB Colony, Camp Road, Selaiyur, Chennai-600073 (Near Bethesda hospital)",
    latitude: 12.920457,
    longitude: 80.142896,
    phone: "+91 90434 56234",
    totalRooms: 12,
    totalBeds: 45,
    occupiedBeds: 30,
    image: "/images/branch-6.jpg",
  },
];

export const mensBranches = branches.filter((b) => b.category === "mens");

export function getBranchById(id: string): Branch | undefined {
  return branches.find((b) => b.id === id);
}
