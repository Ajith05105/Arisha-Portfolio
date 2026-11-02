import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/CaseStudy";
import { auis } from "@/content/caseStudies";
import { AuisBlocks } from "@/components/case-study/AuisBlocks";

export const metadata: Metadata = { title: auis.title, description: auis.seo };

export default function AuisPage() {
  return <CaseStudy study={auis} renderCustom={(id) => <AuisBlocks id={id} />} />;
}
