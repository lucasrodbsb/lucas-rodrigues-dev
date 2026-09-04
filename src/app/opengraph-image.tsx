import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants/site";

export const alt = `${SITE.name} — Software Engineer`;
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
          justifyContent: "space-between",
          background: SITE.brand.background,
          color: SITE.brand.foreground,
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: `radial-gradient(circle, ${SITE.brand.accent}55 0%, transparent 70%)`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -40,
            width: 480,
            height: 480,
            borderRadius: 999,
            background: `radial-gradient(circle, ${SITE.brand.accentCyan}33 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            color: SITE.brand.foreground,
          }}
        >
          {SITE.shortName.replace(".", "")}
          <span style={{ color: SITE.brand.accent }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 1.02,
            }}
          >
            <span>{SITE.name.split(" ")[0]}</span>
            <span>
              {SITE.name.split(" ")[1]}
              <span style={{ color: SITE.brand.accent }}>.</span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: SITE.brand.muted,
              letterSpacing: "-0.02em",
            }}
          >
            Engenheiro de Software · Software Engineer
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 8,
              fontSize: 22,
              color: SITE.brand.accentCyan,
            }}
          >
            React · Next.js · React Native · TypeScript
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: SITE.brand.muted,
          }}
        >
          <span>Brasília, Brasil</span>
          <span>{SITE.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
