export interface Branch {
  id: string;
  name: string;
  category: "mens" | "womens";
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  totalRooms: number;
  totalBeds: number;
  occupiedBeds: number;
  image: string;
}
