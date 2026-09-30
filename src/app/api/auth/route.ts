import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Hardcoded credentials for MVP demo
    if (email === "admin@aishwarya.com" && password === "admin123") {
      // In a real app, generate a JWT here
      const token = Buffer.from(`${email}:${Date.now()}`).toString("base64");
      
      return NextResponse.json({ 
        success: true, 
        token,
        user: { name: "Aishwaraya Admin", email }
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    );
  }
}
