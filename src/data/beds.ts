import { Bed } from "@/types";

function generateBeds(roomId: string, capacity: number): Bed[] {
  const beds: Bed[] = [];
  for (let i = 1; i <= capacity; i++) {
    beds.push({
      id: `${roomId}-bed-${i}`,
      roomId,
      bedNumber: i,
      bunkPosition: i % 2 === 0 ? "Upper" : "Lower",
      status: Math.random() > 0.35 ? "Occupied" : "Available",
    });
  }
  return beds;
}

export const beds: Bed[] = [
  ...generateBeds("room-101", 4),
  ...generateBeds("room-102", 2),
  ...generateBeds("room-103", 6),
  ...generateBeds("room-104", 4),
  ...generateBeds("room-201", 3),
  ...generateBeds("room-202", 5),
  ...generateBeds("room-301", 4),
  ...generateBeds("room-302", 6),
  ...generateBeds("room-303", 2),
  ...generateBeds("room-304", 4),
  ...generateBeds("room-501", 4),
  ...generateBeds("room-502", 2),
  ...generateBeds("room-503", 6),
  ...generateBeds("room-504", 3),
];

export function getBedsByRoom(roomId: string): Bed[] {
  return beds.filter((b) => b.roomId === roomId);
}

export function getAvailableBedsByRoom(roomId: string): Bed[] {
  return beds.filter((b) => b.roomId === roomId && b.status === "Available");
}
