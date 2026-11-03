"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion";

/** UOACS lanyard: two printed straps crossing behind the exec ID card. */
export function UoacsBlocks({ id }: { id: string }) {
  if (id !== "lanyard") return null;
  return <Lanyard />;
}

function Lanyard() {
  const reduce = useReducedMotion();
  return (
    <Reveal className="relative left-1/2 h-[360px] w-screen -translate-x-1/2 overflow-hidden md:h-[460px]">
      {[
        { src: "/images/uoacs/frame-38.png", rot: -2.8, top: "38%" },
        { src: "/images/uoacs/frame-49.png", rot: 2.8, top: "52%" },
      ].map((s) => (
        <motion.div
          key={s.src}
          className="absolute left-1/2 w-[160vw] -translate-x-1/2 md:w-[120vw]"
          style={{ top: s.top, rotate: s.rot }}
          animate={reduce ? undefined : { x: ["-50%", "-52%", "-50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src={s.src} alt="" aria-hidden width={4096} height={101} sizes="160vw" className="h-auto w-full" />
        </motion.div>
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[min(70vw,420px)] -translate-x-1/2 -translate-y-1/2"
        initial={reduce ? false : { rotate: -3.6, scale: 0.95 }}
        whileInView={{ rotate: -3.6, scale: 1 }}
        whileHover={reduce ? undefined : { rotate: 0, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        <Image src="/images/uoacs/arisha-2.webp" alt="UOACS 2026 exec ID card — Arisha Azmi, Design Executive" width={1361} height={832} sizes="(min-width: 768px) 420px, 70vw" className="h-auto w-full rounded-[12px] shadow-[0_18px_40px_rgba(120,0,0,0.25)]" />
      </motion.div>
    </Reveal>
  );
}
