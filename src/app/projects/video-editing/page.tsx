import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { StarNav } from "@/components/StarNav";
import { Reveal } from "@/components/motion";
import { Star } from "@/components/Star";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Video Editing",
  description: "Reels and vlogs edited by Arisha Azmi.",
};

function Placeholder({ label }: { label: string }) {
  return (
    <Reveal className="mx-auto mt-8 flex aspect-[16/7] w-full max-w-[1000px] flex-col items-center justify-center gap-3 rounded-[15px] border-2 border-dashed border-red/60 text-center">
      <Star size={36} blur={0.08} />
      <p className="font-grotesk text-[clamp(16px,1.6vw,22px)] font-bold uppercase tracking-[0.04em]">{label} coming soon</p>
      <a href={site.instagram} target="_blank" rel="noreferrer" className="font-sans text-[14px] font-medium underline underline-offset-4 hover:no-underline">
        Watch the latest on Instagram ↗
      </a>
    </Reveal>
  );
}

export default function VideoEditingPage() {
  return (
    <>
      <PageHeader title="Video Editing" vw={23} />
      <section className="page-pad mx-auto mt-6 max-w-[1180px]">
        <SectionLabel align="center">Reels</SectionLabel>
        <Placeholder label="Reels" />
      </section>
      <section className="page-pad mx-auto mt-16 max-w-[1180px] md:mt-24">
        <SectionLabel align="center">Vlogs</SectionLabel>
        <Placeholder label="Vlogs" />
      </section>
      <StarNav className="mt-16" />
    </>
  );
}
