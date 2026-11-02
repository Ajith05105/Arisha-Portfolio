"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";

type Props = {
  children: string;
  /** Font size in vw at desktop; clamped so it never gets silly. */
  vw: number;
  min?: string;
  max?: string;
  as?: "h1" | "h2" | "div";
  className?: string;
  style?: CSSProperties;
  align?: "left" | "center" | "right";
};

/**
 * The big blurred Sloop script titles ("Welcome", "Projects", "Find me").
 * Real text (not images) so it scales with the viewport and stays selectable
 * for screen readers; the blur is part of the design, so it eases in from a
 * heavier blur rather than from plain opacity.
 */
export function ScriptHeading({
  children,
  vw,
  min = "4rem",
  max = "40rem",
  as = "h2",
  className = "",
  style,
  align = "center",
}: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={`script-heading ${className}`}
      style={{
        fontSize: `clamp(${min}, ${vw}vw, ${max})`,
        textAlign: align,
        ...style,
      }}
      initial={reduce ? false : { opacity: 0, scale: 0.94, filter: "blur(0.08em)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0.014em)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
