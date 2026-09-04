export function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-100"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(var(--grid-line) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  );
}
