export function NoiseTexture() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[2]"
      aria-hidden="true"
      style={{
        opacity: "var(--noise-opacity)",
        backgroundImage: "url(/noise.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}
