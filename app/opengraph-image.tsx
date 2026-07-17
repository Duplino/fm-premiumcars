import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FM Premium Cars — Te ayudo a comprar tu coche sin equivocarte";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -1 }}>
          FM PREMIUM CARS
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#D50000",
            marginTop: 24,
            fontWeight: 700,
          }}
        >
          Te ayudo a comprar tu coche sin equivocarte
        </div>
      </div>
    ),
    { ...size }
  );
}
