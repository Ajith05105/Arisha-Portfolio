export type Project = {
  slug: string;
  title: string;
  tags: string[];
  href: string | null;
  tint: string;
  thumb:
    | { kind: "mockup"; src: string; blur?: boolean }
    | { kind: "cover"; src: string; blur?: boolean }
    | { kind: "auis" };
};

export const productProjects: Project[] = [
  {
    slug: "esports",
    title: "Esports Club",
    tags: ["UI/UX Design", "Web", "Shipped"],
    href: "/projects/product/esports",
    tint: "#d8aef0",
    thumb: { kind: "mockup", src: "/images/projects/esports-mockup.png" },
  },
  {
    slug: "illume",
    title: "Illume",
    tags: ["UI/UX Design", "Web", "Hackathon"],
    href: "/projects/product/illume",
    tint: "#f0c5ae",
    thumb: { kind: "mockup", src: "/images/projects/illume-mockup.png" },
  },
  {
    slug: "project-playground",
    title: "Project Playground",
    tags: ["UI/UX Design", "Web"],
    href: null,
    tint: "#f0aeaf",
    thumb: { kind: "mockup", src: "/images/projects/playground-mockup.png", blur: true },
  },
];

export const brandProjects: Project[] = [
  {
    slug: "auis",
    title: "AUIS Redesign",
    tags: ["Brand Design", "Graphic", "Social Media"],
    href: "/projects/brand/auis",
    tint: "#01136e",
    thumb: { kind: "auis" },
  },
  {
    slug: "charles-keith-weeknd",
    title: "Charles & Keith x The Weeknd",
    tags: ["Brand Design", "Personal", "Social Media"],
    href: null,
    tint: "#d8aef0",
    thumb: { kind: "cover", src: "/images/projects/ck-weeknd-moodboard.jpg", blur: true },
  },
  {
    slug: "posters",
    title: "Poster Gallery",
    tags: ["Brand Design", "Graphic"],
    href: "/posters",
    tint: "#d8aef0",
    thumb: { kind: "cover", src: "/images/projects/poster-gallery.webp" },
  },
  {
    slug: "uoacs",
    title: "UOACS",
    tags: ["Brand Design", "Graphic", "Merch"],
    href: "/projects/brand/uoacs",
    tint: "#ff5e7a",
    thumb: { kind: "cover", src: "/images/uoacs/arisha-2.webp" },
  },
];
