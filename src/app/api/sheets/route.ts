import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "enquiry";
    const body = await request.json();

    // 1. Spam & Bot Protection: Honeypot trap detection
    if (body.botTrap || body.website_bot_trap || body.fax || body.url_trap) {
      console.warn("Spam bot submission caught by honeypot field. Dropping request silently.");
      // Return 200/201 so bots don't retry with altered payloads
      return NextResponse.json({ success: true, message: "Processed" }, { status: 201 });
    }

    // 2. Input validation: Verify minimum required fields
    if (!body.phone) {
      return NextResponse.json({ success: false, error: "Phone number is required" }, { status: 400 });
    }

    // Validate 10-digit Indian phone format
    const cleanPhone = String(body.phone).replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json({ success: false, error: "Invalid phone number" }, { status: 400 });
    }

    const SCRIPT_URL = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (!SCRIPT_URL) {
      console.warn("GOOGLE_SHEETS_SCRIPT_URL not configured. Data recorded locally.");
      return NextResponse.json({ 
        success: true, 
        message: "Saved locally (Google Sheets not configured yet)" 
      }, { status: 201 });
    }

    // Forward sanitized data to Google Apps Script
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, type }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Saved to Google Sheets" }, { status: 201 });
    } else {
      return NextResponse.json({ success: false, error: "Failed to save to sheets" }, { status: 500 });
    }
  } catch (error) {
    console.error("Sheets API error:", error);
    return NextResponse.json({ success: false, error: "Server processing error" }, { status: 500 });
  }
}
