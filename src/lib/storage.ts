import { Booking, Enquiry, Tenant } from "@/types";

const isBrowser = typeof window !== "undefined";

// Bookings
export function getBookings(): Booking[] {
  if (!isBrowser) return [];
  try {
    return JSON.parse(localStorage.getItem("bookings") || "[]");
  } catch {
    return [];
  }
}

export function saveBooking(booking: Booking): void {
  if (!isBrowser) return;
  const bookings = getBookings();
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

export function updateBookingStatus(id: string, status: Booking["status"]): void {
  if (!isBrowser) return;
  const bookings = getBookings();
  const idx = bookings.findIndex((b) => b.id === id);
  if (idx !== -1) {
    bookings[idx].status = status;
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }
}

// Enquiries
export function getEnquiries(): Enquiry[] {
  if (!isBrowser) return [];
  try {
    return JSON.parse(localStorage.getItem("enquiries") || "[]");
  } catch {
    return [];
  }
}

export function saveEnquiry(enquiry: Enquiry): void {
  if (!isBrowser) return;
  const enquiries = getEnquiries();
  enquiries.push(enquiry);
  localStorage.setItem("enquiries", JSON.stringify(enquiries));
}

// Tenants
export function getTenants(): Tenant[] {
  if (!isBrowser) return [];
  try {
    return JSON.parse(localStorage.getItem("tenants") || "[]");
  } catch {
    return [];
  }
}

export function saveTenant(tenant: Tenant): void {
  if (!isBrowser) return;
  const tenants = getTenants();
  tenants.push(tenant);
  localStorage.setItem("tenants", JSON.stringify(tenants));
}

// Admin Auth
export function getAdminSession(): { token: string, user?: { name: string, email: string } } | null {
  if (!isBrowser) return null;
  const token = localStorage.getItem("admin_token");
  const userStr = localStorage.getItem("admin_user");
  
  if (!token) return null;
  
  try {
    const user = userStr ? JSON.parse(userStr) : undefined;
    return { token, user };
  } catch {
    return { token };
  }
}

export function setAdminSession(token: string, user?: { name: string, email: string }): void {
  if (!isBrowser) return;
  localStorage.setItem("admin_token", token);
  if (user) {
    localStorage.setItem("admin_user", JSON.stringify(user));
  }
}

export function clearAdminSession(): void {
  if (!isBrowser) return;
  localStorage.removeItem("admin_token");
  localStorage.removeItem("admin_user");
}
