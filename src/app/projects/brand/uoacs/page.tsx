import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/CaseStudy";
import { uoacs } from "@/content/caseStudies";
import { UoacsBlocks } from "@/components/case-study/UoacsBlocks";

export const metadata: Metadata = { title: uoacs.title, description: uoacs.seo };

export default function UoacsPage() {
  return <CaseStudy study={uoacs} renderCustom={(id) => <UoacsBlocks id={id} />} />;
}
