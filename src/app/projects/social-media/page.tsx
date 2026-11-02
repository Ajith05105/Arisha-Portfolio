import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { StarNav } from "@/components/StarNav";
import { Reveal } from "@/components/motion";
import { site } from "@/content/site";
import { auisCarousels } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Social Media",
  description: "Content designed across club social media and @ririinprogress.",
};

export default function SocialMediaPage() {
  return (
    <>
      <PageHeader title="Social Media" vw={23} />

      <Reveal className="page-pad mx-auto mt-2 max-w-[760px] text-center font-sans text-[clamp(16px,1.4vw,20px)] font-medium leading-snug">
        Content designed across club social media and my own{" "}
        <a href={site.instagram} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">
          @ririinprogress
        </a>
      </Reveal>

      <section className="page-pad mx-auto mt-14 max-w-[1180px]">
        <SectionLabel align="center">AUIS</SectionLabel>
        <Reveal className="mx-auto mt-8 w-full max-w-[1000px] overflow-hidden rounded-[12px]">
          <Image src="/images/auis/posts-collage.png" alt="Grid of AUIS Instagram posts" width={2048} height={1704} sizes="(min-width: 1000px) 1000px, 92vw" className="h-auto w-full" />
        </Reveal>
        <Reveal className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
          {auisCarousels.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-[8px]">
              <Image src={src} alt={`AUIS recap slide ${i + 1}`} width={820} height={1024} sizes="(min-width: 768px) 12vw, 45vw" className="h-auto w-full transition-transform duration-700 ease-out-expo hover:scale-105" />
            </div>
          ))}
        </Reveal>
      </section>

      <section className="page-pad mx-auto mt-16 max-w-[1180px] md:mt-24">
        <SectionLabel align="center">@ririinprogress</SectionLabel>
        <Reveal className="mx-auto mt-8 max-w-[560px] text-center font-sans text-[16px] font-medium leading-snug">
          <p>My own content design is on Instagram.</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full border-2 border-red px-6 py-2.5 font-sans text-[14px] font-bold uppercase tracking-wider transition-colors hover:bg-red hover:text-cream"
          >
            Open Instagram ↗
          </a>
        </Reveal>
      </section>

      <StarNav className="mt-16" />
    </>
  );
}
