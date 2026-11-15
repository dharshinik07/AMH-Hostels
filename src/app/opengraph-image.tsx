import { ImageResponse } from "next/og";

export const alt = "Aishwaraya Hostels - Premium PG Accommodation in Chennai";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0b1a30 0%, #1a365d 60%, #132540 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top bar with branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #d4a843 0%, #e8c766 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 800,
              color: "#0b1a30",
            }}
          >
            A
          </div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>
              AISHWARAYA HOSTELS
            </div>
            <div style={{ fontSize: 14, color: "#d4a843", letterSpacing: 3, fontWeight: 700 }}>
              CHENNAI • 6 PRIME BRANCHES
            </div>
          </div>
        </div>

        {/* Center Main Punchline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 950,
            }}
          >
            Premium PG Accommodation for Students & Working Professionals
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#94a3b8",
              maxWidth: 850,
              lineHeight: 1.4,
            }}
          >
            Near Premier Colleges (MCC, Bharath, SRM) & Transit Corridors. Homely Meals, High-Speed Wi-Fi, AC & Non-AC Rooms.
          </div>
        </div>

        {/* Bottom feature badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            paddingTop: 30,
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 18, color: "#e2e8f0" }}>
            ✓ 6 Verified Branches
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 18, color: "#e2e8f0" }}>
            ✓ 3 Homely Meals Daily
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 18, color: "#e2e8f0" }}>
            ✓ 24/7 CCTV & Biometric
          </div>
          <div
            style={{
              marginLeft: "auto",
              padding: "10px 24px",
              background: "#d4a843",
              color: "#0b1a30",
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            Call: 90434 56234
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
