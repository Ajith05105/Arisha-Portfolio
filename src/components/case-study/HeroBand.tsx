"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { CaseStudy } from "@/content/caseStudies";

/** Full-width colour band with the hero visual (laptop mockup or AUIS satin). */
export function HeroBand({ study }: { study: CaseStudy }) {
  const reduce = useReducedMotion();
  const { band } = study;

  return (
    <section
      aria-label="Project preview"
      className="relative mt-12 w-full overflow-hidden md:mt-16"
      style={{ background: band.bg }}
    >
      {band.kind === "auis" ? (
        <div className="relative mx-auto flex min-h-[320px] max-w-[1440px] items-center justify-center gap-[6vw] px-6 py-10 md:min-h-[600px] md:py-16">
          <Image src="/images/auis/blue-satin-tall.png" alt="" fill sizes="100vw" className="object-cover opacity-90 mix-blend-soft-light" />
          <Image src="/images/projects/blue-satin.png" alt="" fill sizes="100vw" className="object-cover opacity-70 mix-blend-soft-light" />
          <motion.div
            className="relative w-[34vw] max-w-[380px]"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/projects/peacock.png"
              alt="The AUIS peacock logo"
              width={512}
              height={501}
              sizes="34vw"
              className="h-auto w-full drop-shadow-[0_0_30px_rgba(255,255,255,0.65)]"
            />
          </motion.div>
          <motion.div
            className="relative w-[26vw] max-w-[260px]"
            initial={reduce ? false : { opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/projects/auis-instagram.png"
              alt="The AUIS Instagram profile"
              width={283}
              height={439}
              sizes="26vw"
              className="h-auto w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      ) : band.kind === "uoacs" ? (
        <div className="mx-auto flex max-w-[1440px] items-center justify-center px-6 py-12 md:py-20">
          <motion.div
            className="w-full max-w-[720px] overflow-hidden rounded-[15px] border-[3px] border-red"
            initial={reduce ? false : { opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src="/images/uoacs/frame-39.png" alt="UOACS — Computer Science Society, University of Auckland" width={2604} height={1400} sizes="(min-width: 768px) 720px, 92vw" priority className="h-auto w-full" />
          </motion.div>
        </div>
      ) : band.image ? (
        <div className="mx-auto flex max-w-[1440px] justify-center px-4 py-8 md:py-10">
          <motion.div
            className="w-full max-w-[1000px]"
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={band.image.src}
              alt={band.image.alt}
              width={band.image.w}
              height={band.image.h}
              sizes="(min-width: 1100px) 1000px, 92vw"
              priority
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
