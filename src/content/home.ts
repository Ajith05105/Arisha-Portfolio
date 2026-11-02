export const hero = {
  name: "Arisha Azmi",
  roles: ["UX Designer", "Social Media Creator", "Brand Designer"],
  note: "Hiya! Welcome to my portfolio!! Enjoy your stay <3",
};

export const categories = [
  { label: "Product Design", href: "/projects/product" },
  { label: "Brand + Graphic Design", href: "/projects/brand" },
  { label: "Social Media", href: "/projects/social-media" },
  { label: "Video Editing", href: "/projects/video-editing" },
];

/** Copy from the Figma "Updated" frame. */
export const about = {
  resumeLabel: "Link to Resume",
  paragraphs: [
    "Hi, I'm Arisha! A penultimate-year Design and Computer Science student who loves taking a simple idea and turning it into something people actually stop for, something cool, a little unexpected, made to be looked at twice. I design and I build websites, posters, content, whatever the idea needs.",
    "Glad you're here, have fun looking around!",
  ],
  skillsLabel: "SKILLS",
  skills: [
    "Figma",
    "Prototyping",
    "HTML/CSS",
    "Python",
    "Java",
    "User Flows",
    "AI Tools",
    "Illustrator",
    "Photoshop",
    "Cavalry",
  ],
};

/** Word-search grid from Figma; highlighted words link out. */
export const wordSearch = {
  rows: [
    "XGLWMATCHA",
    "IHKBEHANCE",
    "INSTAGRAMR",
    "TCCWUEMAIL",
    "LINKEDINKS",
    "JDESIGNQFV",
  ],
  words: [
    { word: "BEHANCE", row: 1, col: 3, key: "behance" },
    { word: "INSTAGRAM", row: 2, col: 0, key: "instagram" },
    { word: "EMAIL", row: 3, col: 5, key: "email" },
    { word: "LINKEDIN", row: 4, col: 0, key: "linkedin" },
  ] as const,
};
