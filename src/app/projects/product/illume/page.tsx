import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/CaseStudy";
import { illume } from "@/content/caseStudies";

export const metadata: Metadata = { title: illume.title, description: illume.seo };

export default function IllumePage() {
  return <CaseStudy study={illume} />;
}
