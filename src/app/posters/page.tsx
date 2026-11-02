import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { StarNav } from "@/components/StarNav";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Star } from "@/components/Star";
import { posters } from "@/content/posters";

export const metadata: Metadata = {
  title: "Posters",
  description: "A gallery of poster designs by Arisha Azmi.",
};

export default function PostersPage() {
  return (
    <>
      <PageHeader title="Posters" vw={26} back="/projects/brand" />

      {posters.length === 0 ? (
        <Reveal className="page-pad mx-auto mt-6 flex max-w-[760px] flex-col items-center gap-3 rounded-[15px] border-2 border-dashed border-red/60 px-6 py-16 text-center">
          <Star size={36} blur={0.08} />
          <p className="font-grotesk text-[clamp(16px,1.6vw,22px)] font-bold uppercase tracking-[0.04em]">Gallery loading soon</p>
          <p className="font-sans text-[15px] font-medium">The poster collection is being exported from Figma.</p>
        </Reveal>
      ) : (
        <Stagger className="page-pad mx-auto mt-6 columns-2 gap-3 md:columns-3 md:gap-4 [column-fill:balance]" stagger={0.05}>
          {posters.map((p) => (
            <StaggerItem key={p.src} className="mb-3 break-inside-avoid md:mb-4">
              <figure className="group overflow-hidden rounded-[8px]">
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width: 768px) 30vw, 46vw" className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]" />
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      )}

      <StarNav className="mt-16" />
    </>
  );
}
