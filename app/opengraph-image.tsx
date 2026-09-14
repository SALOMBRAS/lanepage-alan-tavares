import { ImageResponse } from "next/og";

export const alt = "Imagem de compartilhamento provisória — advocacia criminal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Technical placeholder only; replace when the visual identity is implemented. */
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
        Advocacia criminal · Imagem provisória
      </div>
    ),
    size,
  );
}
