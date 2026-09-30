import { Room } from "@/types";

export const rooms: Room[] = [
  // Branch 1 - Selaiyur
  { id: "room-101", branchId: "branch-1", roomNumber: "101", roomType: "AC", sharingType: 4, capacity: 4, floor: 1 },
  { id: "room-102", branchId: "branch-1", roomNumber: "102", roomType: "AC", sharingType: 2, capacity: 2, floor: 1 },
  { id: "room-103", branchId: "branch-1", roomNumber: "103", roomType: "Non-AC", sharingType: 6, capacity: 6, floor: 1 },
  { id: "room-104", branchId: "branch-1", roomNumber: "104", roomType: "Non-AC", sharingType: 4, capacity: 4, floor: 1 },
  { id: "room-201", branchId: "branch-1", roomNumber: "201", roomType: "AC", sharingType: 3, capacity: 3, floor: 2 },
  { id: "room-202", branchId: "branch-1", roomNumber: "202", roomType: "Non-AC", sharingType: 5, capacity: 5, floor: 2 },
  // Branch 2 - Camp Road
  { id: "room-301", branchId: "branch-2", roomNumber: "101", roomType: "AC", sharingType: 4, capacity: 4, floor: 1 },
  { id: "room-302", branchId: "branch-2", roomNumber: "102", roomType: "Non-AC", sharingType: 6, capacity: 6, floor: 1 },
  { id: "room-303", branchId: "branch-2", roomNumber: "201", roomType: "AC", sharingType: 2, capacity: 2, floor: 2 },
  { id: "room-304", branchId: "branch-2", roomNumber: "202", roomType: "Non-AC", sharingType: 4, capacity: 4, floor: 2 },
  // Branch 5 - Womens Tambaram
  { id: "room-501", branchId: "branch-5", roomNumber: "101", roomType: "AC", sharingType: 4, capacity: 4, floor: 1 },
  { id: "room-502", branchId: "branch-5", roomNumber: "102", roomType: "AC", sharingType: 2, capacity: 2, floor: 1 },
  { id: "room-503", branchId: "branch-5", roomNumber: "201", roomType: "Non-AC", sharingType: 6, capacity: 6, floor: 2 },
  { id: "room-504", branchId: "branch-5", roomNumber: "202", roomType: "Non-AC", sharingType: 3, capacity: 3, floor: 2 },
];

export function getRoomsByBranch(branchId: string): Room[] {
  return rooms.filter((r) => r.branchId === branchId);
}

export function getRoomById(id: string): Room | undefined {
  return rooms.find((r) => r.id === id);
}
