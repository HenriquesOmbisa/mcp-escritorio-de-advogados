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
          width: "100%",
          height: "100%",
          display: "flex",
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
            width: 20,
            height: 20,
            border: "2px solid #a97a34",
            fontSize: 13,
            fontWeight: 800,
            color: "#a97a34",
            fontFamily: "serif",
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size }
  );
}