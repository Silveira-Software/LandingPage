import { ImageResponse } from "next/og";

export const alt =
  "Silveira Software — Full Stack, Automação, Fintech, IA. Do zero ao scale.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(180deg, #0d0d18 0%, #131324 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -80,
            bottom: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#6366f1",
            opacity: 0.3,
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#a855f7",
            opacity: 0.3,
            filter: "blur(120px)",
          }}
        />

        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: 8,
            backgroundImage: "linear-gradient(90deg, #6366f1, #a855f7)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          SILVEIRA SOFTWARE
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 6,
            color: "#8b8ba7",
            display: "flex",
          }}
        >
          FULL STACK • AUTOMAÇÃO • FINTECH • iGAMING • IA
        </div>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            alignItems: "center",
            fontSize: 30,
          }}
        >
          <span style={{ color: "#6366f1" }}>~ $</span>
          <span style={{ color: "#cfcfe2", marginLeft: 14 }}>
            do zero ao scale
          </span>
          <div
            style={{
              width: 16,
              height: 34,
              marginLeft: 10,
              background: "#a855f7",
              display: "flex",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 12,
            background: "linear-gradient(90deg, #6366f1, #a855f7)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
