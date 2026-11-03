export const site = {
  name: "Arisha Azmi",
  tagline: "UX Designer · Social Media Creator · Brand Designer",
  description:
    "Portfolio of Arisha Azmi — product design, brand & graphic design, social media content and video editing.",
  url: "https://arishaazmi.vercel.app",
  email: "arishaazm29@gmail.com",
  instagram: "https://www.instagram.com/ririinprogress/",
  linkedin: "https://www.linkedin.com/in/arisha-azmi-94530731a/",
  /** TODO: mock — replace with the real Behance profile URL. */
  behance: "https://www.behance.net/arishaazmi" as string | null,
  /** TODO: mock — replace with the real Illume live-demo URL. */
  illumeDemo: "https://illume-demo.vercel.app",
  resume:
    "https://drive.google.com/file/d/1Wp2kn90oAKb60VVOgOr3ATG5N3xqhmAN/view?usp=sharing",
};

export const nav = {
  left: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
  ],
  right: [
    { label: "Posters", href: "/posters" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const footerStars = [
  { label: "Home", href: "/#home", rotate: -12.9, offset: 0 },
  { label: "About", href: "/#about", rotate: 15, offset: 70 },
  { label: "Posters", href: "/posters", rotate: -8.6, offset: 28 },
  { label: "Projects", href: "/#projects", rotate: 11.5, offset: 64 },
  { label: "Contact", href: "/#contact", rotate: -16.2, offset: 10 },
];
