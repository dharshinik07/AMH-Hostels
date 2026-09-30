import { NextResponse } from "next/server";
import { Booking } from "@/types";

// In-memory store before DB connection
let bookings: Booking[] = [];

export async function GET() {
  return NextResponse.json({ success: true, data: bookings });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate booking creation
    const newBooking: Booking = {
      ...body,
      id: `booking-${Date.now()}`,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);

    return NextResponse.json({ success: true, data: newBooking }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Booking failed" }, { status: 500 });
  }
}
