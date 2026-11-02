"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/content/projects";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-[29px] items-center rounded-[5px] border-2 border-red bg-red/30 px-3 font-sans text-[12px] font-semibold tracking-[0.02em] text-red">
      {children}
    </span>
  );
}

export function ProjectCard({ project: p }: { project: Project }) {
  const reduce = useReducedMotion();
  const disabled = !p.href;

  const body = (
    <motion.article
      className="relative flex h-full flex-col overflow-hidden rounded-[15px] border-2 border-red bg-cream p-[22px]"
      whileHover={reduce || disabled ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div
        className="relative aspect-[467/258] w-full overflow-hidden rounded-[9px]"
        style={{ background: p.tint }}
      >
        <Thumb project={p} />
        {disabled && (
          <span className="absolute inset-x-0 bottom-3 mx-auto w-max rounded-full border-2 border-red bg-cream/90 px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-wider">
            Coming soon
          </span>
        )}
      </div>
      <h2 className="mt-5 font-sans text-[clamp(18px,1.8vw,24px)] font-semibold uppercase leading-none tracking-[0.02em]">
        {p.title}
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tags">
        {p.tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
    </motion.article>
  );

  if (disabled) return <div aria-disabled className="h-full">{body}</div>;
  return (
    <Link href={p.href!} className="group block h-full focus-visible:outline-none">
      {body}
    </Link>
  );
}

function Thumb({ project: p }: { project: Project }) {
  const common =
    "absolute transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]";
  switch (p.thumb.kind) {
    case "mockup":
      return (
        <Image
          src={p.thumb.src}
          alt=""
          width={1080}
          height={1080}
          sizes="(min-width: 768px) 32vw, 90vw"
          className={`${common} left-1/2 top-[-18%] w-[92%] -translate-x-1/2 ${p.thumb.blur ? "blur-[3px]" : ""}`}
        />
      );
    case "cover":
      return (
        <Image
          src={p.thumb.src}
          alt=""
          width={1600}
          height={900}
          sizes="(min-width: 768px) 32vw, 90vw"
          className={`${common} inset-0 h-full w-full object-cover ${p.thumb.blur ? "blur-[6px] scale-110" : ""}`}
        />
      );
    case "auis":
      return (
        <>
          <Image src="/images/projects/blue-satin.png" alt="" fill sizes="(min-width: 768px) 32vw, 90vw" className="object-cover" />
          <Image
            src="/images/projects/peacock.png"
            alt=""
            width={512}
            height={501}
            sizes="12vw"
            className={`${common} left-[10%] top-[16%] w-[32%] drop-shadow-[0_0_18px_rgba(255,255,255,0.55)]`}
          />
          <Image
            src="/images/projects/auis-instagram.png"
            alt=""
            width={283}
            height={439}
            sizes="12vw"
            className={`${common} right-[6%] top-[10%] w-[30%] rounded-md shadow-xl`}
          />
        </>
      );
  }
}
