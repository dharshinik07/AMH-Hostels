import { Booking, Enquiry } from "@/types";
import { branches } from "@/data/branches";
import { rooms } from "@/data/rooms";
import { beds } from "@/data/beds";
import { saveBooking, saveEnquiry, getBookings, getEnquiries } from "./storage";

// Branches
export async function getBranches() {
  return branches;
}

export async function getMensBranches() {
  return branches.filter((b) => b.category === "mens");
}

export async function getWomensBranches() {
  return branches.filter((b) => b.category === "womens");
}

// Rooms
export async function getRooms(branchId?: string) {
  if (branchId) {
    return rooms.filter((r) => r.branchId === branchId);
  }
  return rooms;
}

// Beds
export async function getBeds(roomId?: string) {
  if (roomId) {
    return beds.filter((b) => b.roomId === roomId);
  }
  return beds;
}

// Bookings
export async function submitBooking(data: Omit<Booking, "id" | "status" | "createdAt">) {
  const booking: Booking = {
    ...data,
    id: `booking-${Date.now()}`,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };
  saveBooking(booking);
  return booking;
}

export async function fetchBookings() {
  return getBookings();
}

// Enquiries
export async function submitEnquiry(data: Omit<Enquiry, "id" | "createdAt">) {
  const enquiry: Enquiry = {
    ...data,
    id: `enquiry-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  saveEnquiry(enquiry);
  return enquiry;
}

export async function fetchEnquiries() {
  return getEnquiries();
}

// Admin Auth
export async function adminLogin(email: string, password: string) {
  const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@aishwarya.com";
  const ADMIN_PASSWORD = "admin123";
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return { success: true, token: "authenticated" };
  }
  return { success: false, token: null };
}
