"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { footerStars } from "@/content/site";
import { Star } from "./Star";

const SIZE = "clamp(64px, 14vw, 215px)";

/**
 * The footer: five big soft stars with rotated labels, each one a link.
 * They sit at staggered heights like the Figma layout and bob independently.
 */
export function StarNav({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <nav
      aria-label="Footer"
      className={`relative mx-auto flex w-full max-w-[1100px] items-start justify-center gap-1 px-2 pb-20 pt-16 sm:gap-3 md:gap-6 ${className}`}
    >
      {footerStars.map((s, i) => (
        <motion.div
          key={s.label}
          className="relative"
          style={{ marginTop: `clamp(0px, ${s.offset / 7}vw, ${s.offset}px)` }}
          animate={reduce ? undefined : { y: [0, -8, 0, 6, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        >
          <Link href={s.href} className="group relative block focus-visible:outline-none" aria-label={s.label}>
            <motion.div
              className="relative"
              style={{ width: SIZE, height: SIZE }}
              whileHover={reduce ? undefined : { scale: 1.12, rotate: s.rotate * -0.6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              <Star size={SIZE} blur={0.07} rotate={s.rotate} className="text-red" />
              <span
                className="absolute inset-0 flex items-center justify-center font-sans text-[clamp(9px,1.4vw,20px)] font-bold tracking-[0.02em] text-cream drop-shadow-sm transition-transform duration-300 group-focus-visible:underline"
                style={{ transform: `rotate(${s.rotate}deg)` }}
              >
                {s.label}
              </span>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
