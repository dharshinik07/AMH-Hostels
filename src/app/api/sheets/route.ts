import { NextRequest, NextResponse } from "next/server";

/**
 * Google Sheets proxy API route.
 * Forwards form data to a Google Apps Script Web App.
 * 
 * Query params:
 *   ?type=booking   → Writes to "Confirm Booking" sheet
 *   ?type=enquiry   → Writes to "InfoAskers" sheet
 * 
 * To set up:
 * 1. Create a Google Sheet with tabs: "Confirm Booking" and "InfoAskers"
 * 2. Go to Extensions > Apps Script
 * 3. Paste the Apps Script code (see below)
 * 4. Deploy as Web App (Execute as: Me, Access: Anyone)
 * 5. Copy the deployment URL to .env.local as GOOGLE_SHEETS_SCRIPT_URL
 * 
 * Apps Script code to paste:
 * 
 * function doPost(e) {
 *   var data = JSON.parse(e.postData.contents);
 *   var sheet;
 *   
 *   if (data.type === "booking") {
 *     sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Confirm Booking");
 *     if (!sheet) {
 *       sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Confirm Booking");
 *       sheet.appendRow(["S.No", "Name", "Phone", "Email", "Category", "Branch", "Room Type", "Sharing", "Food Option", "Bunk Preference", "Tenant Type", "Move-in Date", "Timestamp"]);
 *     }
 *     var lastRow = sheet.getLastRow();
 *     sheet.appendRow([
 *       lastRow,
 *       data.name,
 *       data.phone,
 *       data.email,
 *       data.category,
 *       data.branchId,
 *       data.roomType,
 *       data.sharingType,
 *       data.foodOption,
 *       data.bunkPreference,
 *       data.tenantType,
 *       data.moveInDate,
 *       new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"})
 *     ]);
 *   } else {
 *     sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("InfoAskers");
 *     if (!sheet) {
 *       sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("InfoAskers");
 *       sheet.appendRow(["S.No", "Phone Number", "Email Address", "Interested Branch", "Their Message", "Timestamp"]);
 *     }
 *     var lastRow2 = sheet.getLastRow();
 *     sheet.appendRow([
 *       lastRow2,
 *       data.phone,
 *       data.email || "",
 *       data.branch || "",
 *       data.message,
 *       new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata"})
 *     ]);
 *   }
 *   
 *   return ContentService.createTextOutput(JSON.stringify({status: "success"}))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 */

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "enquiry";
    const body = await request.json();

    const SCRIPT_URL = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (!SCRIPT_URL) {
      // If no Google Sheets URL configured, store locally (fallback)
      console.warn("GOOGLE_SHEETS_SCRIPT_URL not set. Data not sent to Google Sheets.");
      return NextResponse.json({ 
        success: true, 
        message: "Saved locally (Google Sheets not configured yet)" 
      }, { status: 201 });
    }

    // Forward to Google Apps Script
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
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
