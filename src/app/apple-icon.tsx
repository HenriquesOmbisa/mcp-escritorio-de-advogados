import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
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
          backgroundColor: "#192923",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            border: "3px solid #a97a34",
            fontSize: 52,
            fontWeight: 800,
            color: "#a97a34",
            fontFamily: "serif",
          }}
        >
          M
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 20,
            letterSpacing: 6,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "sans-serif",
          }}
        >
          MPC
        </div>
      </div>
    ),
    { ...size }
  );
}