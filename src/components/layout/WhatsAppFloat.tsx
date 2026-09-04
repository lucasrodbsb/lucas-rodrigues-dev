"use client";

import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { SITE } from "@/lib/constants/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      title="WhatsApp"
      className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] right-4 z-120 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-[rgba(8,8,12,0.84)] text-[rgba(248,249,252,0.96)] shadow-[0_20px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(99,102,241,0.42)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/75 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-[rgba(255,255,255,0.05)] dark:text-white md:right-6"
    >
      <WhatsAppIcon size={22} />
    </a>
  );
}
