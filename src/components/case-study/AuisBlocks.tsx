"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { auisCarousels, auisLanyards, auisLogos, auisPalette } from "@/content/caseStudies";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Ticker } from "@/components/Ticker";

/** Custom blocks that only the AUIS case study uses. */
export function AuisBlocks({ id }: { id: string }) {
  switch (id) {
    case "palette":
      return <Palette />;
    case "logos":
      return <Logos />;
    case "type":
      return <TypeBand />;
    case "carousels":
      return <Carousels />;
    case "lanyards":
      return <Lanyards />;
    case "ticker-posts":
      return <Band label="POSTS" />;
    case "ticker-carousels":
      return <Band label="CAROUSELS" reverse />;
    case "ticker-lanyards":
      return <Band label="LANYARD CARDS" />;
    default:
      return null;
  }
}

function Band({ label, reverse }: { label: string; reverse?: boolean }) {
  return (
    <div className="relative left-1/2 my-4 w-screen -translate-x-1/2 border-y-2 border-red">
      <Ticker label={label} reverse={reverse} textClassName="font-grotesk text-[clamp(16px,1.6vw,24px)] font-bold tracking-[0.02em]" starSize={20} className="py-2" />
    </div>
  );
}

function Palette() {
  return (
    <Stagger className="relative left-1/2 grid w-screen -translate-x-1/2 grid-cols-3 sm:grid-cols-6" stagger={0.06}>
      {auisPalette.map((c) => (
        <StaggerItem key={c} className="group relative aspect-[1/1.4] sm:aspect-[440/240]" y={0}>
          <motion.div className="absolute inset-0" style={{ background: c }} whileHover={{ scaleY: 1.06 }} transition={{ type: "spring", stiffness: 200, damping: 18 }} />
          <span className="absolute bottom-3 left-3 font-sans text-[11px] font-semibold uppercase tracking-wider text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
            {c}
          </span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function Logos() {
  return (
    <Reveal className="mx-auto w-full max-w-[1000px]">
      <Image src="/images/auis/logo-variations.png" alt="Four AUIS logo variations" width={1024} height={183} sizes="(min-width: 1000px) 1000px, 92vw" className="h-auto w-full" />
      <ul className="mt-3 grid grid-cols-4 text-center font-sans text-[12px] font-semibold uppercase tracking-wider md:text-[13px]">
        {auisLogos.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </Reveal>
  );
}

function TypeBand() {
  const reduce = useReducedMotion();
  const rows = [
    { label: "Heading - Editorial Today", cls: "font-serif italic text-[clamp(32px,5.5vw,76px)] leading-none" },
    { label: "Subheading - Sloop Script Two", cls: "font-script text-[clamp(40px,6.5vw,92px)] leading-[0.9]" },
    { label: "Body text - Poppins", cls: "font-poppins text-[clamp(20px,2.4vw,34px)] leading-none" },
  ];
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 bg-red px-6 py-12 text-cream md:py-16">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 text-center md:gap-8">
        {rows.map((r, i) => (
          <motion.p
            key={r.label}
            className={r.cls}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {r.label}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

function Carousels() {
  return (
    <Reveal className="relative left-1/2 w-screen -translate-x-1/2">
      <div
        className="mask-fade-x flex snap-x snap-mandatory gap-4 overflow-x-auto px-[6vw] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        data-lenis-prevent
        aria-label="Event recap carousel slides"
      >
        {auisCarousels.map((src, i) => (
          <motion.div
            key={src}
            className="w-[70vw] shrink-0 snap-center overflow-hidden rounded-[12px] sm:w-[44vw] md:w-[310px]"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image src={src} alt={`Recap carousel slide ${i + 1}`} width={820} height={1024} sizes="(min-width: 768px) 310px, 70vw" className="h-auto w-full" />
          </motion.div>
        ))}
      </div>
      <p className="mt-1 text-center font-sans text-[12px] font-medium opacity-70">Swipe →</p>
    </Reveal>
  );
}

function Lanyards() {
  const reduce = useReducedMotion();
  return (
    <motion.ul
      className="relative mx-auto flex h-[420px] w-full max-w-[720px] items-center justify-center md:h-[520px]"
      initial="rest"
      whileHover={reduce ? undefined : "fan"}
      animate="rest"
      aria-label="Exec lanyard cards"
    >
      {auisLanyards.map((c, i) => {
        const offset = i - 1;
        return (
          <motion.li
            key={c.name}
            className="absolute w-[200px] md:w-[250px]"
            style={{ zIndex: i === 1 ? 3 : 1 }}
            variants={{
              rest: { rotate: offset * 10, x: offset * 48, y: Math.abs(offset) * 10 },
              fan: { rotate: offset * 16, x: offset * 150, y: Math.abs(offset) * 20 },
            }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
          >
            {c.image ? (
              <Image src={c.image} alt={`${c.name} — ${c.role} lanyard card`} width={626} height={1024} sizes="250px" className="h-auto w-full rounded-[14px] shadow-[0_18px_40px_rgba(0,0,40,0.35)]" />
            ) : (
              <div className="relative aspect-[626/1024] overflow-hidden rounded-[14px] bg-navy text-white shadow-[0_18px_40px_rgba(0,0,40,0.35)]">
                <Image src="/images/auis/blue-satin-tall.png" alt="" fill sizes="250px" className="object-cover opacity-80" />
                <div className="absolute inset-0 flex flex-col items-center justify-between py-8 text-center">
                  <Image src="/images/projects/peacock.png" alt="" width={512} height={501} sizes="80px" className="w-[36%] drop-shadow-[0_0_14px_rgba(255,255,255,0.6)]" />
                  <p className="font-script text-[44px] leading-none md:text-[54px]">AUIS</p>
                  <div>
                    <p className="font-sans text-[12px] font-semibold uppercase tracking-wider">{c.name}</p>
                    <p className="mt-1 font-serif text-[18px] italic md:text-[22px]">{c.role}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
