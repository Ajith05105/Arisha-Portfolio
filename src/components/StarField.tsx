"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star } from "./Star";

export type StarSpec = {
  /** Percent of container width, may be negative to bleed off-canvas. */
  x: number;
  /** Percent of container height. */
  y: number;
  /** Size as a percentage of viewport width (desktop). */
  size: number;
  rotate?: number;
  blur?: number;
  /** Hide on small screens. */
  hideOnMobile?: boolean;
};

/**
 * Decorative blurred stars scattered around a section. Each star drifts
 * slowly, like the collage pieces on the original site.
 */
export function StarField({
  stars,
  className = "",
}: {
  stars: StarSpec[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-visible ${className}`}
    >
      {stars.map((s, i) => {
        const len = `clamp(44px, ${s.size}vw, ${Math.round(s.size * 16)}px)`;
        return (
          <motion.div
            key={i}
            className={`absolute text-red ${s.hideOnMobile ? "hidden md:block" : ""}`}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -10, 0, 8, 0],
                    rotate: [0, 6, -4, 0],
                  }
            }
            transition={{
              duration: 9 + (i % 5) * 1.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 4) * 0.8,
            }}
          >
            <Star size={len} blur={s.blur ?? 0.07} rotate={s.rotate ?? 0} />
          </motion.div>
        );
      })}
    </div>
  );
}
