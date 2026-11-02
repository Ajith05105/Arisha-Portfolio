import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectGrid } from "@/components/ProjectGrid";
import { StarNav } from "@/components/StarNav";
import { productProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Product Design",
  description: "UI/UX case studies: Esports Club staff platform, Illume, and more.",
};

export default function ProductPage() {
  return (
    <>
      <PageHeader title="Product design" vw={24} />
      <ProjectGrid projects={productProjects} />
      <StarNav className="mt-10" />
    </>
  );
}
