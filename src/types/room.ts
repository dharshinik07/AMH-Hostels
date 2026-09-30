export type RoomType = "AC" | "Non-AC";
export type SharingType = 2 | 3 | 4 | 5 | 6;

export interface Room {
  id: string;
  branchId: string;
  roomNumber: string;
  roomType: RoomType;
  sharingType: SharingType;
  capacity: number;
  floor: number;
}
