export const timelineStyles = {
  container: "relative mt-16",
  line: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-timeline-line md:-translate-x-px",
  dot: "absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 -translate-x-1/2 mt-2 z-10 border-[var(--timeline-dot-border)]",
} as const;
