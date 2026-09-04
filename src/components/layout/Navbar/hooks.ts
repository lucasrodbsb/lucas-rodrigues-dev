"use client";

import { useEffect, useState } from "react";
import { getLenis } from "@/components/providers/SmoothScrollProvider";

const SCROLL_THRESHOLD = 48;

function getScrollY() {
  return getLenis()?.scroll ?? window.scrollY;
}

export function useNavbarScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = (scroll: number) => {
      setAtTop(scroll <= SCROLL_THRESHOLD);
      setScrolled(scroll > SCROLL_THRESHOLD);
    };

    update(getScrollY());

    let lenisCleanup: (() => void) | undefined;
    let retryId: number | undefined;

    const attachLenis = () => {
      const lenis = getLenis();
      if (!lenis) return false;

      const onScroll = ({ scroll }: { scroll: number }) => update(scroll);
      onScroll({ scroll: lenis.scroll });
      lenis.on("scroll", onScroll);
      lenisCleanup = () => lenis.off("scroll", onScroll);
      return true;
    };

    if (!attachLenis()) {
      retryId = window.setInterval(() => {
        if (attachLenis() && retryId) {
          window.clearInterval(retryId);
        }
      }, 50);
    }

    const onWindowScroll = () => update(getScrollY());
    window.addEventListener("scroll", onWindowScroll, { passive: true });

    return () => {
      if (retryId) window.clearInterval(retryId);
      lenisCleanup?.();
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return { scrolled, atTop, mobileOpen, setMobileOpen };
}
