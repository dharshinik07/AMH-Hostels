import { NextResponse } from "next/server";
import { Enquiry } from "@/types";

// In-memory store for Next.js API before DB connection
let enquiries: Enquiry[] = [];

export async function GET() {
  try {
    return NextResponse.json({ success: true, data: enquiries });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch enquiries" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { success: false, error: "Name, phone, and message are required" },
        { status: 400 }
      );
    }

    const newEnquiry: Enquiry = {
      id: `enquiry-${Date.now()}`,
      name: body.name,
      phone: body.phone,
      email: body.email || "",
      message: body.message,
      createdAt: new Date().toISOString(),
    };

    enquiries.push(newEnquiry);

    return NextResponse.json({ success: true, data: newEnquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to submit enquiry" }, { status: 500 });
  }
}
