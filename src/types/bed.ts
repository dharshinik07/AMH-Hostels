export type BunkPosition = "Upper" | "Lower";
export type BedStatus = "Available" | "Occupied";

export interface Bed {
  id: string;
  roomId: string;
  bedNumber: number;
  bunkPosition: BunkPosition;
  status: BedStatus;
  tenantId?: string;
}
