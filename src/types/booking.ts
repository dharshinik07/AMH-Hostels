import { BunkPosition } from "./bed";
import { RoomType, SharingType } from "./room";
import { TenantType, FoodOption } from "./tenant";

export type BookingStatus = "Pending" | "Approved" | "Rejected";

export interface Booking {
  id: string;
  category: "mens" | "womens";
  name: string;
  phone: string;
  email: string;
  tenantType: TenantType;
  branchId: string;
  roomType: RoomType;
  sharingType: SharingType;
  foodOption: FoodOption;
  bunkPreference: BunkPosition;
  moveInDate: string;
  status: BookingStatus;
  createdAt: string;
}
