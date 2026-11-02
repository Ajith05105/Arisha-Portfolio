"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ScriptHeading } from "@/components/ScriptHeading";
import { StarField } from "@/components/StarField";
import { Reveal } from "@/components/motion";
import { about } from "@/content/home";
import { site } from "@/content/site";

const photos = [
  { src: "/images/home/bedroom-3.png", rotate: -7, x: -18, y: 10 },
  { src: "/images/home/bedroom-2.png", rotate: 5, x: 14, y: -6 },
  { src: "/images/home/bedroom-1.png", rotate: -1.5, x: 0, y: 0 },
];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative overflow-x-clip pb-20 pt-4 md:pb-32">
      <StarField
        stars={[
          { x: 4, y: 20, size: 7, rotate: -16, hideOnMobile: true },
          { x: 88, y: 26, size: 6, rotate: 22, hideOnMobile: true },
          { x: 44, y: 92, size: 5, rotate: 8, hideOnMobile: true },
          { x: -2, y: 84, size: 14, rotate: 40 },
          { x: 90, y: 90, size: 9, rotate: -30, hideOnMobile: true },
        ]}
      />

      <div className="flex justify-center">
        <ScriptHeading vw={20} min="6rem" max="19rem">
          About me
        </ScriptHeading>
      </div>

      <div className="page-pad mx-auto mt-6 grid max-w-[1200px] items-center gap-12 md:mt-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
        {/* Photo pile */}
        <Reveal className="relative mx-auto w-full max-w-[560px]">
          <motion.div
            className="group relative aspect-[1024/729]"
            initial="rest"
            whileHover={reduce ? undefined : "fan"}
            animate="rest"
          >
            {photos.map((p, i) => (
              <motion.div
                key={p.src}
                className="absolute inset-0 origin-bottom"
                style={{ zIndex: i }}
                variants={{
                  rest: { rotate: p.rotate * 0.5, x: p.x * 0.3, y: p.y * 0.3 },
                  fan: { rotate: p.rotate, x: p.x, y: p.y },
                }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
              >
                <Image
                  src={p.src}
                  alt={i === photos.length - 1 ? "Arisha sitting in a room covered in posters and records, lit in pink" : ""}
                  aria-hidden={i !== photos.length - 1}
                  width={1024}
                  height={729}
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="h-full w-full rounded-sm object-cover shadow-[0_18px_40px_rgba(120,0,0,0.16)]"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* locket */}
          <motion.div
            className="absolute -bottom-10 -right-2 w-[32%] md:-right-8 md:w-[38%]"
            animate={reduce ? undefined : { y: [0, -8, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06 }}
          >
            <Image
              src="/images/home/locket.png"
              alt="A golden heart locket, open, reading Poster Gallery"
              width={512}
              height={500}
              sizes="20vw"
              className="h-auto w-full drop-shadow-[0_12px_20px_rgba(120,0,0,0.2)]"
            />
          </motion.div>
        </Reveal>

        {/* Copy */}
        <div className="font-body text-[16px] leading-[1.45] md:pt-6">
          <Reveal>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 font-body text-[12px] font-bold tracking-wide"
            >
              {about.resumeLabel}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 * (i + 1)}>
              <p className="mt-4 text-pretty">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <h3 className="mt-6 font-body text-[20px] font-bold">{about.skillsLabel}</h3>
            <ul className="mt-1 flex flex-wrap gap-x-1.5">
              {about.skills.map((s, i) => (
                <li key={s}>
                  {s}
                  {i < about.skills.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
