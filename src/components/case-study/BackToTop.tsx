"use client";

import { useLenis } from "lenis/react";
import { Star } from "@/components/Star";

export function BackToTop() {
  const lenis = useLenis();
  return (
    <div className="mt-16 flex justify-center md:mt-24">
      <button
        type="button"
        onClick={() => {
          if (lenis) lenis.scrollTo(0, { duration: 1.4 });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="group inline-flex items-center gap-3 font-grotesk text-[clamp(18px,1.7vw,24px)] font-bold tracking-[0.02em]"
      >
        <span className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:rotate-[72deg]">
          <Star size={22} />
        </span>
        Back To Top
      </button>
    </div>
  );
}
