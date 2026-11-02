"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ScriptHeading } from "@/components/ScriptHeading";
import { Star } from "@/components/Star";
import { StarField } from "@/components/StarField";
import { Stagger, StaggerItem } from "@/components/motion";
import { categories } from "@/content/home";

export function Projects() {
  return (
    <section id="projects" className="relative overflow-x-clip pb-16 pt-6 md:pb-28">
      <StarField
        stars={[
          { x: 86, y: 10, size: 17, rotate: -12, hideOnMobile: true },
          { x: 93, y: 2, size: 8, rotate: 18, hideOnMobile: true },
          { x: -3, y: 58, size: 18, rotate: 16 },
          { x: -1, y: 52, size: 8, rotate: -19, hideOnMobile: true },
        ]}
      />

      <div className="flex justify-center">
        <ScriptHeading vw={20} min="6rem" max="19rem">
          Projects
        </ScriptHeading>
      </div>

      <Stagger className="page-pad mx-auto mt-6 max-w-[1100px] md:mt-10" stagger={0.1}>
        {categories.map((c) => (
          <StaggerItem key={c.href}>
            <Link
              href={c.href}
              className="group relative flex items-center justify-between gap-6 border-b-2 border-red py-5 md:py-7"
            >
              <span className="relative overflow-hidden">
                <motion.span
                  className="block font-grotesk text-[clamp(1.6rem,4.3vw,58px)] font-bold uppercase leading-[1] tracking-[-0.03em] transition-transform duration-500 ease-out-expo group-hover:translate-x-3"
                >
                  {c.label}
                </motion.span>
              </span>
              <span className="relative shrink-0 transition-transform duration-500 ease-out-expo group-hover:rotate-[144deg] group-hover:scale-125">
                <Star size="clamp(26px, 3.6vw, 52px)" />
              </span>
              {/* sweeping underline */}
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-red transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
              />
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
