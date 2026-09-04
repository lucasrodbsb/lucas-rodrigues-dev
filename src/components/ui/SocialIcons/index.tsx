interface IconProps {
  size?: number;
  className?: string;
}

export function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GithubIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.52 3.449A11.76 11.76 0 0 0 12.117 0C5.62 0 .335 5.286.335 11.785c0 2.08.544 4.11 1.578 5.902L.258 23.035l5.48-1.438a11.74 11.74 0 0 0 5.637 1.438h.005c6.495 0 11.78-5.286 11.78-11.786 0-3.151-1.228-6.113-3.44-8.327Zm-8.399 17.62h-.004a9.86 9.86 0 0 1-5.026-1.378l-.361-.214-3.248.852.867-3.166-.235-.374a9.86 9.86 0 0 1-1.51-5.244C2.607 6.108 6.957 1.76 12.121 1.76c2.744 0 5.32 1.068 7.26 3.009 1.939 1.94 3.006 4.518 3.005 7.26-.002 5.166-4.352 9.515-9.264 9.515Zm5.092-6.687c-.278-.139-1.642-.81-1.896-.903-.254-.093-.44-.139-.625.14-.185.278-.718.903-.88 1.088-.162.186-.324.209-.602.07-.278-.139-1.173-.432-2.235-1.378-.826-.737-1.384-1.646-1.546-1.924-.162-.279-.017-.429.122-.568.125-.124.278-.325.417-.487.139-.163.186-.279.278-.464.093-.186.047-.348-.023-.487-.069-.139-.625-1.507-.857-2.062-.226-.543-.457-.469-.625-.478l-.533-.01c-.185 0-.486.069-.741.348-.255.278-.973.95-.973 2.317s.996 2.687 1.134 2.873c.14.186 1.96 2.995 4.747 4.198.664.287 1.182.459 1.586.588.666.212 1.271.182 1.75.11.533-.08 1.642-.67 1.873-1.317.232-.648.232-1.202.163-1.317-.07-.116-.255-.186-.533-.325Z" />
    </svg>
  );
}
