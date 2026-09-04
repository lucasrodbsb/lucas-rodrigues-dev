import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants/site";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: SITE.brand.background,
          color: SITE.brand.foreground,
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        L
        <span style={{ color: SITE.brand.accent, marginLeft: 4 }}>.</span>
      </div>
    ),
    { ...size },
  );
}
