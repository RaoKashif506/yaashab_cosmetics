"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(
      ".shell > *, main > .announcement, img, video, .faq-list details",
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    revealItems.forEach((item) => item.classList.add("scroll-reveal"));
    document.documentElement.classList.add("scroll-reveal-enabled");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-reveal-enabled");
      revealItems.forEach((item) =>
        item.classList.remove("scroll-reveal", "is-visible"),
      );
    };
  }, []);

  return null;
}
