import Image from "next/image";
import type { Block, CaseStudy as CaseStudyType, Figure } from "@/content/caseStudies";
import { BackStar } from "@/components/BackStar";
import { SectionLabel } from "@/components/SectionLabel";
import { StarField } from "@/components/StarField";
import { StarNav } from "@/components/StarNav";
import { Reveal } from "@/components/motion";
import { CrossTickers } from "./CrossTickers";
import { BackToTop } from "./BackToTop";
import { HeroBand } from "./HeroBand";

export function CaseStudy({
  study,
  renderCustom,
}: {
  study: CaseStudyType;
  renderCustom?: (id: string) => React.ReactNode;
}) {
  return (
    <article className="relative overflow-x-clip">
      <StarField
        stars={[
          { x: -4, y: 12, size: 15, rotate: 16, hideOnMobile: true },
          { x: 90, y: 8, size: 15, rotate: -12, hideOnMobile: true },
          { x: -3, y: 30, size: 10, rotate: 60 },
          { x: 92, y: 35, size: 12, rotate: -70, hideOnMobile: true },
          { x: -5, y: 55, size: 16, rotate: 10, hideOnMobile: true },
          { x: 91, y: 62, size: 9, rotate: 35 },
          { x: -3, y: 80, size: 12, rotate: -20, hideOnMobile: true },
          { x: 88, y: 88, size: 15, rotate: -110, hideOnMobile: true },
        ]}
      />

      {/* Hero */}
      <header className="page-pad relative pt-24 md:pt-20">
        <div className="md:absolute md:left-[4vw] md:top-20">
          <BackStar href={study.back} />
        </div>
        <Reveal className="mx-auto max-w-[900px] text-center">
          <h1 className="font-grotesk text-[clamp(2.4rem,7vw,96px)] font-bold uppercase leading-[0.95] tracking-[0.02em]">
            {study.title}
          </h1>
          {study.subtitle && (
            <p className="mt-2 font-grotesk text-[clamp(12px,1vw,14px)] tracking-[0.02em]">{study.subtitle}</p>
          )}
          <p className="mx-auto mt-4 max-w-[520px] font-sans text-[clamp(14px,1.15vw,16px)] font-medium leading-snug text-balance">
            {study.tagline}
          </p>
          {study.link && (
            <a
              href={study.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-sans text-[12px] underline underline-offset-4 hover:no-underline"
            >
              {study.link.label} ↗
            </a>
          )}
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 grid max-w-[1200px] gap-6 sm:grid-cols-3 md:mt-14 md:gap-10">
          {(
            [
              ["Team", study.meta.team],
              ["Timeline", study.meta.timeline],
              ["Role", study.meta.role],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="sm:text-center sm:first:text-left sm:last:text-right">
              <h2 className="font-grotesk text-[clamp(18px,1.7vw,24px)] font-bold tracking-[0.02em]">{k}</h2>
              <p className="mt-1 font-sans text-[12px] font-medium leading-[1.6] tracking-[0.02em] md:text-[13px]">{v}</p>
            </div>
          ))}
        </Reveal>
      </header>

      <HeroBand study={study} />
      <CrossTickers label={study.ticker} />

      {/* Body */}
      <div className="page-pad relative mx-auto mt-10 flex max-w-[1180px] flex-col gap-6 md:mt-16 md:gap-7">
        {study.blocks.map((b, i) => (
          <BlockView key={i} block={b} renderCustom={renderCustom} />
        ))}
      </div>

      <BackToTop />
      <StarNav />
    </article>
  );
}

function BlockView({ block: b, renderCustom }: { block: Block; renderCustom?: (id: string) => React.ReactNode }) {
  switch (b.type) {
    case "label":
      return (
        <div className={b.align === "center" ? "mt-8 md:mt-12" : "mt-8 md:mt-12"}>
          <SectionLabel align={b.align}>{b.text}</SectionLabel>
        </div>
      );
    case "p":
      return (
        <Reveal as="p" className="max-w-[1100px] font-sans text-[16px] font-medium leading-[1.55] md:text-[17px]">
          {b.text}
        </Reveal>
      );
    case "lead":
      return (
        <Reveal as="p" className="max-w-[1100px] font-sans text-[16px] font-medium leading-[1.55] md:text-[17px]">
          <strong className="font-bold">{b.lead}</strong> {b.text}
        </Reveal>
      );
    case "bullets":
      return (
        <Reveal className="max-w-[1100px] font-sans text-[16px] font-medium leading-[1.55] md:text-[17px]">
          {b.intro && <p>{b.intro}</p>}
          <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-red">
            {b.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </Reveal>
      );
    case "quote":
      return (
        <Reveal className="my-4 flex justify-center md:my-8">
          <blockquote className="max-w-[900px] text-center font-sans text-[clamp(18px,1.8vw,24px)] font-semibold italic leading-snug text-balance">
            {b.text}
          </blockquote>
        </Reveal>
      );
    case "h":
      return (
        <Reveal className="mt-4 text-center font-grotesk text-[clamp(16px,1.5vw,20px)] font-bold uppercase tracking-[0.04em]">
          {b.text}
        </Reveal>
      );
    case "note":
      return (
        <Reveal as="p" className="text-center font-sans text-[15px] font-medium italic leading-snug md:text-[16px]">
          {b.text}
        </Reveal>
      );
    case "link":
      return (
        <Reveal className="flex justify-center">
          <a
            href={b.href}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border-2 border-red px-6 py-2 font-sans text-[14px] font-bold uppercase tracking-wider transition-colors hover:bg-red hover:text-cream"
          >
            {b.label} ↗
          </a>
        </Reveal>
      );
    case "figure":
      return (
        <Reveal className={`${b.width === "narrow" ? "max-w-[720px]" : b.width === "wide" ? "max-w-[1000px]" : "max-w-[1180px]"} mx-auto w-full`}>
          <Fig f={b.figure} sizes="(min-width: 1200px) 1000px, 92vw" />
        </Reveal>
      );
    case "figures":
      return (
        <Reveal className={`mx-auto grid w-full max-w-[1000px] gap-4 md:gap-6 ${b.cols === 4 ? "grid-cols-2 md:grid-cols-4" : b.cols === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
          {b.figures.map((f) => (
            <Fig key={f.src} f={f} sizes="(min-width: 768px) 45vw, 92vw" />
          ))}
        </Reveal>
      );
    case "split":
      return (
        <Reveal className="grid items-start gap-6 md:grid-cols-[1fr_280px] md:gap-10">
          <div className="font-sans text-[16px] font-medium leading-[1.55] md:text-[17px]">
            {b.text.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <Fig f={b.figure} sizes="280px" className="mx-auto w-[220px] md:w-full" />
        </Reveal>
      );
    case "custom":
      return <>{renderCustom?.(b.id) ?? null}</>;
  }
}

function Fig({ f, sizes, className = "" }: { f: Figure; sizes: string; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden ${f.frame ? "rounded-[15px] border-[3px] border-red bg-[#0b0b0b]" : "rounded-[12px]"} ${className}`}>
      <Image
        src={f.src}
        alt={f.alt}
        width={f.w}
        height={f.h}
        sizes={sizes}
        className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.015]"
      />
    </figure>
  );
}
