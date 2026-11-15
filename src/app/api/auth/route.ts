import { NextResponse } from "next/server";

// Simple in-memory rate limiting for login attempts
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();

export async function POST(request: Request) {
  try {
    // Basic IP-based rate limiting
    const ip = request.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    const clientAttempts = loginAttempts.get(ip) || { count: 0, lastAttempt: now };

    // Reset counter if last attempt was over 15 minutes ago
    if (now - clientAttempts.lastAttempt > 15 * 60 * 1000) {
      clientAttempts.count = 0;
    }

    if (clientAttempts.count >= 5) {
      return NextResponse.json(
        { success: false, error: "Too many failed attempts. Please try again in 15 minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Credentials read strictly server-side from environment variables
    const validEmail = process.env.ADMIN_EMAIL || "admin@aishwarya.com";
    const validPassword = process.env.ADMIN_PASSWORD || "Admin@Aishwaraya2026!";

    if (email.trim().toLowerCase() === validEmail.toLowerCase() && password === validPassword) {
      // Reset rate limit on successful authentication
      loginAttempts.delete(ip);

      const token = Buffer.from(`${email}:${Date.now()}:${Math.random()}`).toString("base64");

      return NextResponse.json({
        success: true,
        token,
        user: { name: "Aishwaraya Admin", email },
      });
    }

    // Track failed attempt
    clientAttempts.count += 1;
    clientAttempts.lastAttempt = now;
    loginAttempts.set(ip, clientAttempts);

    return NextResponse.json(
      { success: false, error: "Invalid email or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Authentication service unavailable" },
      { status: 500 }
    );
  }
}
