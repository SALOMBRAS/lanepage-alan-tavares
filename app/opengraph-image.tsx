import { ImageResponse } from "next/og";

export const alt = "Alan Tavares Advocacia — Direito do Consumidor e Direito Criminal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#eef8fc",
          color: "#17394f",
          fontSize: 40,
        }}
      >
        Alan Tavares Advocacia
      </div>
    ),
    size,
  );
}
