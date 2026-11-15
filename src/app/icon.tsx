import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#1a365d",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#d4a843",
          borderRadius: "8px",
          fontWeight: 800,
          fontFamily: "sans-serif",
          border: "1.5px solid #d4a843",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
