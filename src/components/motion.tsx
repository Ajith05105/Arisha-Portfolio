"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

/** Fade-and-rise on scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "li" | "p" | "span";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: easeOut, delay }}
    >
      {children}
    </Tag>
  );
}

/** Stagger children that are `<StaggerItem>`s. */
export function Stagger({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

/**
 * Idle drift + tilt, mirroring how the hero collage pieces on the original
 * site keep gently rotating. On hover the piece lifts and straightens a bit.
 */
export function Floating({
  children,
  rotate = 0,
  amplitude = 8,
  duration = 7,
  delay = 0,
  className = "",
  hoverRotate,
  style,
}: {
  children: ReactNode;
  rotate?: number;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
  hoverRotate?: number;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 30, rotate: rotate - 6, scale: 0.96 }}
      animate={
        reduce
          ? { opacity: 1 }
          : {
              opacity: 1,
              scale: 1,
              y: [0, -amplitude, 0, amplitude * 0.6, 0],
              rotate: [rotate, rotate + 2.2, rotate - 1.6, rotate + 1, rotate],
            }
      }
      transition={{
        opacity: { duration: 0.9, delay, ease: easeOut },
        scale: { duration: 1.1, delay, ease: easeOut },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay: delay + 0.9 },
        rotate: { duration: duration * 1.25, repeat: Infinity, ease: "easeInOut", delay: delay + 0.9 },
      }}
      whileHover={
        reduce
          ? undefined
          : { scale: 1.06, rotate: hoverRotate ?? rotate * 0.4, zIndex: 20, transition: { duration: 0.5, ease: easeOut } }
      }
    >
      {children}
    </motion.div>
  );
}
