"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Star } from "./Star";

const SIZE = "clamp(84px, 9vw, 126px)";

/** The tilted "Back" star that sits top-left on sub pages. */
export function BackStar({ href, label = "Back" }: { href: string; label?: string }) {
  const reduce = useReducedMotion();
  return (
    <Link href={href} aria-label={`${label} to previous page`} className="group inline-block focus-visible:outline-none">
      <motion.span
        className="relative block"
        style={{ width: SIZE, height: SIZE }}
        whileHover={reduce ? undefined : { scale: 1.1, rotate: 8, x: -4 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 240, damping: 16 }}
      >
        <Star size={SIZE} blur={0.07} rotate={-16.5} />
        <span
          className="absolute inset-0 flex items-center justify-center font-sans text-[clamp(14px,1.4vw,20px)] font-bold tracking-[0.02em] text-cream group-focus-visible:underline"
          style={{ transform: "rotate(-16.5deg)" }}
        >
          ← {label}
        </span>
      </motion.span>
    </Link>
  );
}
