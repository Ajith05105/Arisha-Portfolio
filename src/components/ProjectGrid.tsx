import { ProjectCard } from "./ProjectCard";
import { Stagger, StaggerItem } from "./motion";
import type { Project } from "@/content/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <Stagger className="page-pad mx-auto mt-6 grid max-w-[1120px] gap-5 sm:grid-cols-2 md:mt-10 md:gap-6" stagger={0.12}>
      {projects.map((p) => (
        <StaggerItem key={p.slug} className="h-full">
          <ProjectCard project={p} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
