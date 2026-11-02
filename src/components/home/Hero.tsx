"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ScriptHeading } from "@/components/ScriptHeading";
import { Floating } from "@/components/motion";
import { StarField } from "@/components/StarField";
import { hero, categories } from "@/content/home";

/* Collage pieces. Positions are % of the collage box, one set per breakpoint. */
const pieces = [
  {
    src: "/images/home/bangbang.png",
    alt: "A red 'Bang Bang' card",
    w: 724,
    h: 1024,
    rotate: -12,
    delay: 0.1,
    desktop: { left: "3.5%", top: "4%", width: "13.5%" },
    mobile: { left: "2%", top: "0%", width: "27%" },
    z: 3,
  },
  {
    src: "/images/home/photostrip.png",
    alt: "A black and white photo-booth strip of Arisha",
    w: 500,
    h: 1294,
    rotate: -6,
    delay: 0.2,
    desktop: { left: "19%", top: "6%", width: "14.2%" },
    mobile: { left: "33%", top: "-2%", width: "25%" },
    z: 4,
  },
  {
    src: "/images/home/lily.png",
    alt: "A deep red lily",
    w: 500,
    h: 500,
    rotate: 0,
    delay: 0.35,
    desktop: { left: "0.5%", top: "40%", width: "22%" },
    mobile: { left: "-4%", top: "50%", width: "42%" },
    z: 2,
  },
  {
    src: "/images/home/hibiscus.png",
    alt: "A red hibiscus flower",
    w: 512,
    h: 512,
    rotate: 0,
    delay: 0.15,
    desktop: { left: "68.5%", top: "0%", width: "27%" },
    mobile: { left: "60%", top: "2%", width: "42%" },
    z: 2,
  },
  {
    src: "/images/home/receipt.png",
    alt: "A 'Dawn FM' receipt",
    w: 716,
    h: 1460,
    rotate: 4,
    delay: 0.3,
    desktop: { left: "83.5%", top: "26%", width: "11%" },
    mobile: { left: "72%", top: "44%", width: "23%" },
    z: 3,
  },
  {
    src: "/images/home/heart-note.png",
    alt: "A lace heart note: Hiya! Welcome to my portfolio! Enjoy your stay",
    w: 1012,
    h: 1024,
    rotate: -8,
    delay: 0.45,
    desktop: { left: "66%", top: "48%", width: "15.5%" },
    mobile: { left: "36%", top: "58%", width: "32%" },
    z: 4,
  },
];

const diagram = [
  { ...categories[0], x: 30, y: 78, labelY: 100, lines: ["Product", "Design"] },
  { ...categories[1], x: 110, y: 22, labelY: -22, lines: ["Brand +", "Graphic Design"] },
  { ...categories[2], x: 190, y: 86, labelY: 108, lines: ["Social", "Media"] },
  { ...categories[3], x: 270, y: 30, labelY: -14, lines: ["Video", "Editing"] },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-x-clip pt-20 md:pt-14"
      aria-label="Welcome"
    >
      {/* Big blurred "Welcome" */}
      <div className="relative -mb-[6vw] flex justify-center md:-mb-[5vw]">
        <ScriptHeading as="h1" vw={42} min="9rem" max="44rem" className="leading-[1]">
          Welcome
        </ScriptHeading>
      </div>

      {/* Name block – inline on mobile, centred over the collage on desktop */}
      <NameBlock className="relative z-10 mx-auto mt-2 flex flex-col items-center px-4 text-center md:hidden" />

      <div className="relative mx-auto mt-6 w-full max-w-[1440px] md:mt-0">
        <StarField
          stars={[
            { x: -3, y: 68, size: 9, rotate: 16, hideOnMobile: true },
            { x: 92, y: -6, size: 6, rotate: -20, hideOnMobile: true },
          ]}
        />

        {/* Collage box */}
        <div className="relative mx-auto aspect-[1/0.95] w-full max-w-[560px] sm:aspect-[1/0.8] md:aspect-[1440/560] md:max-w-none">
          {pieces.map((p) => (
            <CollagePiece key={p.src} piece={p} />
          ))}

          <NameBlock className="absolute left-1/2 top-[18%] z-10 hidden w-[32%] -translate-x-1/2 flex-col items-center text-center md:flex" />
        </div>
      </div>

      {/* Reduced-motion users still get the full layout; this only tags the box */}
      {reduce ? <span className="sr-only">Animations reduced</span> : null}
    </section>
  );
}

function CollagePiece({ piece: p }: { piece: (typeof pieces)[number] }) {
  return (
    <>
      {/* mobile position */}
      <Floating
        className="absolute md:hidden"
        style={{ ...p.mobile, zIndex: p.z }}
        rotate={p.rotate}
        delay={p.delay}
        duration={6.5 + p.delay * 4}
      >
        <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="45vw" priority className="h-auto w-full drop-shadow-[0_10px_18px_rgba(120,0,0,0.12)]" />
      </Floating>
      {/* desktop position */}
      <Floating
        className="absolute hidden md:block"
        style={{ ...p.desktop, zIndex: p.z }}
        rotate={p.rotate}
        delay={p.delay}
        duration={6.5 + p.delay * 4}
      >
        <Image src={p.src} alt="" aria-hidden width={p.w} height={p.h} sizes="(min-width: 768px) 28vw, 0px" priority className="h-auto w-full drop-shadow-[0_14px_24px_rgba(120,0,0,0.14)]" />
      </Floating>
    </>
  );
}

function NameBlock({ className }: { className: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-serif text-[clamp(2.5rem,4.5vw,4rem)] italic leading-none tracking-tight">
        {hero.name}
      </p>
      <ul className="mt-2 font-grotesk text-[clamp(13px,1.1vw,16px)] leading-[1.25] tracking-[-0.03em]">
        {hero.roles.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <Diagram />
    </motion.div>
  );
}

/** The little zig-zag star map linking to the four categories. */
function Diagram() {
  return (
    <svg
      viewBox="-10 -40 320 190"
      className="mt-4 w-[min(300px,80vw)] overflow-visible md:w-full"
      role="list"
      aria-label="Areas of work"
    >
      <polyline
        points={diagram.map((d) => `${d.x},${d.y}`).join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      {diagram.map((d) => (
        <Link key={d.href} href={d.href} role="listitem" className="group focus-visible:outline-none">
          <g className="cursor-pointer transition-transform duration-300 ease-out-expo group-hover:scale-[1.04] group-hover:[transform-box:fill-box] group-hover:[transform-origin:center]">
            <g transform={`translate(${d.x - 9} ${d.y - 9}) scale(0.18)`}>
              <path
                d="M50 2 L61.8 36.6 L98 36.6 L68.6 58 L79.8 93 L50 71.4 L20.2 93 L31.4 58 L2 36.6 L38.2 36.6 Z"
                fill="currentColor"
                className="transition-transform duration-500 group-hover:rotate-[72deg] [transform-box:fill-box] [transform-origin:center]"
              />
            </g>
            <text
              x={d.x}
              y={d.labelY}
              textAnchor="middle"
              className="font-grotesk text-[11px] tracking-[-0.03em] group-hover:underline"
              fill="currentColor"
            >
              {d.lines.map((l, i) => (
                <tspan key={l} x={d.x} dy={i === 0 ? 0 : 12}>
                  {l}
                </tspan>
              ))}
            </text>
          </g>
        </Link>
      ))}
    </svg>
  );
}
