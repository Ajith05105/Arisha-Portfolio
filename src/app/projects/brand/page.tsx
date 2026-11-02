import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectGrid } from "@/components/ProjectGrid";
import { StarNav } from "@/components/StarNav";
import { brandProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Brand & Graphic Design",
  description: "Brand identities, posters and graphic design: AUIS redesign, poster gallery and more.",
};

export default function BrandPage() {
  return (
    <>
      <PageHeader title="Brand & Graphic" vw={19} />
      <ProjectGrid projects={brandProjects} />
      <StarNav className="mt-10" />
    </>
  );
}
