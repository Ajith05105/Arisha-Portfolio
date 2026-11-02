import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study/CaseStudy";
import { esports } from "@/content/caseStudies";

export const metadata: Metadata = { title: esports.title, description: esports.seo };

export default function EsportsPage() {
  return <CaseStudy study={esports} />;
}
