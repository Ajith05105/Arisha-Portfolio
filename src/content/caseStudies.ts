export type Figure = { src: string; alt: string; w: number; h: number; frame?: boolean };

export type Block =
  | { type: "label"; text: string; align?: "left" | "center" }
  | { type: "p"; text: string }
  | { type: "lead"; lead: string; text: string }
  | { type: "bullets"; items: string[]; intro?: string }
  | { type: "quote"; text: string }
  | { type: "h"; text: string }
  | { type: "figure"; figure: Figure; width?: "full" | "wide" | "narrow" }
  | { type: "figures"; figures: Figure[]; cols: 2 | 3 | 4 }
  | { type: "note"; text: string }
  | { type: "link"; href: string; label: string }
  | { type: "split"; text: string[]; figure: Figure }
  | { type: "custom"; id: string };

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle?: string;
  tagline: string;
  link?: { href: string; label: string };
  meta: { team: string; timeline: string; role: string };
  band: { bg: string; image?: Figure; kind?: "mockup" | "auis" | "uoacs" };
  ticker: string;
  back: string;
  blocks: Block[];
  seo: string;
};

const dark = true;

export const esports: CaseStudy = {
  slug: "esports",
  title: "Esports Club",
  tagline:
    "A centralised staff platform that replaced scattered Google Forms with a single dashboard for managing memberships, events, tournaments, and payments.",
  meta: {
    team: "2 Designers + 5 Developers",
    timeline: "March 25’ – November 25’ (9 months)",
    role: "I focused on the staff dashboard, membership tracker, tournaments view, and invoice tracker from research through dev handoff",
  },
  band: {
    bg: "#d8aef0",
    image: { src: "/images/projects/esports-mockup.png", alt: "The Esports Club staff platform on a laptop", w: 1080, h: 1080 },
  },
  ticker: "Esports",
  back: "/projects/product",
  seo: "Case study: a staff dashboard for a university esports club, replacing Google Forms with a platform built around real usage.",
  blocks: [
    { type: "label", text: "Brief" },
    { type: "p", text: "The club's executives were managing memberships, events, tournaments, and payments entirely through Google Forms; time-consuming to administer, and with no visibility into member or payment status." },
    { type: "p", text: "The goal of this project was to give staff a centralised platform built around how they actually work, replacing manual form-chasing with a system designed around real usage patterns." },
    { type: "p", text: "This project was completed as part of a two-designer team, working alongside a Project Manager and developer team through to handoff." },

    { type: "label", text: "Project overview" },
    {
      type: "bullets",
      intro: "From reviewing the club's existing process, I identified key issues:",
      items: [
        "membership type, event, and payment tracking relied entirely on Google Forms",
        "no centralised visibility into member or payment status",
        "manual admin work for staff with every new form response",
        "no structured way to manage tournaments or reconcile payments",
      ],
    },
    { type: "p", text: "These issues made day-to-day club administration slow and error-prone for staff who were already volunteering their time." },
    { type: "quote", text: "“I have no idea who's actually paid, I have to cross-check multiple spreadsheets.”" },

    { type: "label", text: "Problem space" },
    {
      type: "split",
      text: ["Club executives are responsible for running memberships, events, tournaments, and payments."],
      figure: { src: "/images/esports/team.jpg", alt: "The Esports Club executive team", w: 820, h: 1024 },
    },
    {
      type: "bullets",
      intro: "They needed to:",
      items: [
        "see membership and payment status at a glance",
        "manage tournaments without manual spreadsheet work",
        "reconcile payments without chasing forms",
        "do all of this without added training overhead; execs turn over yearly",
      ],
    },

    { type: "label", text: "Target audience" },
    { type: "p", text: "Club executives; a non-technical, volunteer-run team, with a new group taking over administration each year." },
    { type: "figure", figure: { src: "/images/esports/user-flows.png", alt: "User flow diagrams for key staff scenarios", w: 2048, h: 802 }, width: "full" },

    { type: "label", text: "Opportunity", align: "center" },
    { type: "quote", text: "How might we give club staff a single, intuitive platform to manage memberships, events, and payments without the manual overhead of forms-based tracking?" },

    { type: "label", text: "Process" },
    {
      type: "lead",
      lead: "Research & Design System",
      text: "I started with research and a mood board to establish visual direction, alongside mapping user flows for key staff scenarios. Client feedback shifted the direction toward a darker, more minimal palette with a single accent colour, deliberately excluding green despite it being in the club's logo, in favour of a more modern, tech feel. I translated this into a Figma design system, defining colour, typography, and sizing to keep all four pages consistent.",
    },
    { type: "h", text: "Research" },
    {
      type: "figures",
      cols: 2,
      figures: [
        { src: "/images/esports/mood-colors.png", alt: "Colour exploration board", w: 1024, h: 461 },
        { src: "/images/esports/mood-fonts.png", alt: "Typeface exploration board", w: 1024, h: 459 },
      ],
    },
    { type: "figure", figure: { src: "/images/esports/mood-inspo.png", alt: "Inspiration board of esports interfaces", w: 1024, h: 523 }, width: "wide" },
    { type: "h", text: "Moodboard + Components" },
    { type: "figure", figure: { src: "/images/esports/design-system.png", alt: "The Figma design system: colours, type and components", w: 1024, h: 548, frame: dark }, width: "wide" },
    {
      type: "lead",
      lead: "Low-Fidelity & Iteration",
      text: "I built low-fidelity wireframes for each page based on the mapped user flows and reviewed them with my Project Manager. One key iteration came from the tournaments view; tags replaced my original layout to enable filtering, a small change with a meaningful usability payoff.",
    },
    { type: "figure", figure: { src: "/images/esports/members.png", alt: "Low-fidelity members table", w: 1024, h: 728, frame: dark }, width: "wide" },
    {
      type: "lead",
      lead: "High-Fidelity & Stakeholder Feedback",
      text: "At high-fidelity, I incorporated detailed stakeholder feedback to refine information hierarchy and usability:",
    },
    {
      type: "bullets",
      items: [
        "switched from University ID to email fields, reflecting a non-student membership base",
        "added a bank reference field to support manual payment reconciliation",
        "repositioned approve/decline actions to match how staff naturally scan information",
      ],
    },
    { type: "p", text: "My pagination design and compact table layout were specifically validated by my PM as strong solutions for navigating large data sets." },
    {
      type: "lead",
      lead: "Handoff",
      text: "I collaborated with the developer team ahead of handoff, flagging scope considerations (including a tag feature we deprioritised outside MVP) and clarifying component behaviour to support a smooth build.",
    },

    { type: "label", text: "Final design" },
    {
      type: "lead",
      lead: "A dashboard built around real usage, not form data",
      text: "Gives staff an at-a-glance snapshot of current members, new members, and tournament sign-ups, plus a trend chart showing activity over time.",
    },
    { type: "figure", figure: { src: "/images/esports/dashboard.png", alt: "Staff dashboard with member counts and an activity chart", w: 1024, h: 619, frame: dark }, width: "wide" },
    {
      type: "lead",
      lead: "A tournaments view designed for fast scanning of large lists",
      text: "The layout was shaped around how staff needed to scan tournament data at volume. A tag-based filtering approach was explored during wire framing and validated as a strong direction, but was deprioritised outside MVP scope ahead of dev handoff.",
    },
    { type: "figure", figure: { src: "/images/esports/tournaments.png", alt: "Tournaments view", w: 1024, h: 616, frame: dark }, width: "wide" },
    {
      type: "lead",
      lead: "A membership tracker built around approval and status, not just records",
      text: "Staff can approve or decline membership requests directly from the table, with a separate view for creating and managing membership types (e.g. semester vs. full-year memberships).",
    },
    {
      type: "figures",
      cols: 2,
      figures: [
        { src: "/images/esports/membership.png", alt: "Membership approvals table", w: 1024, h: 730, frame: dark },
        { src: "/images/esports/membership-types.png", alt: "Membership types view", w: 808, h: 488, frame: dark },
      ],
    },
    {
      type: "lead",
      lead: "A compact, pagination-driven invoice tracker",
      text: "specifically praised by the PM as an effective solution for navigating large data sets without overwhelming the page.",
    },
    { type: "figure", figure: { src: "/images/esports/invoices.png", alt: "Invoice tracker with pagination", w: 1024, h: 619, frame: dark }, width: "wide" },

    { type: "label", text: "Result" },
    { type: "p", text: "The final design gave staff a simple, intuitive dashboard to manage memberships, events, and payments; replacing a manual, forms-based process with one built around real usage patterns. The design met all functional requirements ahead of dev handoff, and the platform was adopted and launched by the club." },
  ],
};

export const illume: CaseStudy = {
  slug: "illume",
  title: "Illume",
  tagline:
    "A peer-to-peer credential system that lets people prove their identity and qualifications after a global data blackout, designed and built in under 48 hours.",
  meta: {
    team: "1 Designer + 4 Developers",
    timeline: "16th May 26’ – 17th May 26’ (48 hours)",
    role: "I led the UI/UX design for Illume, translating a complex, three-layer trust system into a single, scannable, easy-to-understand interface in just under 2 days.",
  },
  band: {
    bg: "#f0c5ae",
    image: { src: "/images/projects/illume-mockup.png", alt: "The Illume landing page on a laptop", w: 1080, h: 1080 },
  },
  ticker: "Illume",
  back: "/projects/product",
  seo: "Case study: Illume, a 48-hour hackathon project for proving identity and skills without institutional records. Placed 3rd overall.",
  blocks: [
    { type: "label", text: "Brief" },
    { type: "p", text: "At the GDGC UoA Hackathon, teams were challenged to solve the “Blackout” scenario: a global solar flare wipes out all data worldwide, leaving professionals unable to prove their identity or qualifications; imagine a doctor who can no longer get into a hospital, because the ID that proved they were a doctor no longer exists." },
    { type: "p", text: "The goal of this project was to design a system that replaces institutional records with something that can't be wiped out: biometric identity, community vouching, and live skill verification." },
    { type: "p", text: "This project was completed as part of a 4-5 person team, where I led UI/UX design end-to-end." },

    { type: "label", text: "Project overview" },
    {
      type: "bullets",
      intro: "From unpacking the “Blackout” brief, my team identified the core issues a solution needed to solve:",
      items: [
        "no institutions, servers, or centralised records to verify identity against",
        "no way to prove qualifications without certificates or transcripts",
        "credentials needed to come from something unforgeable, not a database",
        "the system needed to be trustworthy enough for real, high-stakes decisions, like letting a doctor into a hospital",
      ],
    },
    { type: "p", text: "These issues shaped Illume: a peer-to-peer credential system built on biometric identity, community vouching, and live skill verification." },
    { type: "quote", text: "“How does a doctor prove they're a doctor, when the only proof that ever existed is gone?”" },

    { type: "label", text: "Problem space" },
    { type: "p", text: "Professionals needing to re-establish their identity and qualifications in a post-blackout world." },
    {
      type: "bullets",
      intro: "They needed to:",
      items: [
        "prove who they are with no ID",
        "prove what they can do with no certificates or transcripts",
        "do both in a way trustworthy enough for someone to act on immediately",
      ],
    },

    { type: "label", text: "Target audience" },
    { type: "p", text: "People in high-stakes professions where credentials matter immediately and getting it wrong has real consequences, starting with cases like medical professionals needing hospital access." },

    { type: "label", text: "Opportunity", align: "center" },
    { type: "quote", text: "How might we help someone prove their identity and skills using only what can't be erased: their body, their community, and what they can demonstrate live?" },

    { type: "label", text: "Moodboard", align: "center" },
    { type: "figure", figure: { src: "/images/illume/moodboard-dark.png", alt: "Moodboard of dark, cosmic interface references", w: 1024, h: 455, frame: dark }, width: "wide" },

    { type: "label", text: "Process" },
    {
      type: "lead",
      lead: "Rapid Ideation",
      text: "Given the time constraint, I kicked off with a rapid ideation exercise, each team member had 3 minutes to generate 3 ideas, which we then narrowed down together. This surfaced a strong direction quickly and aligned the whole team on the concept before any design work began. One of the ideas I contributed was using biometric patterns as the core of the identity layer, which became central to grounding Illume's trust system in something genuinely unforgeable.",
    },
    {
      type: "figures",
      cols: 2,
      figures: [
        { src: "/images/illume/notes-1.png", alt: "Ideation notes, page one", w: 897, h: 1024, frame: true },
        { src: "/images/illume/notes-2.png", alt: "Ideation notes, page two", w: 885, h: 1024, frame: true },
      ],
    },
    {
      type: "lead",
      lead: "Design & Iteration",
      text: "From there, I moved into an iterative design process, prototyping and gathering feedback from my teammates at each stage. Given the system's complexity: biometric registration, a web-of-trust network, and live skill verification via video interview, I focused on distilling each layer into a clear, low-friction UI so a user could understand their credential status at a glance.",
    },
    {
      type: "bullets",
      intro: "Team feedback led to two key changes:",
      items: [
        "an adjustment to the colour palette to better align with the product's tone (Blue → Yellow)",
        "a revised hero page graphic to more clearly communicate what Illume actually does at first glance",
      ],
    },
    { type: "p", text: "I refined the interface through several rounds until the flow felt intuitive and cohesive across all three trust layers." },
    { type: "h", text: "Colour Palette Change" },
    { type: "figure", figure: { src: "/images/illume/lofi-1.png", alt: "Early blue screens", w: 2048, h: 707, frame: dark }, width: "wide" },
    { type: "figure", figure: { src: "/images/illume/lofi-2.png", alt: "Revised yellow screens", w: 2048, h: 706, frame: dark }, width: "wide" },
    { type: "h", text: "Revised Hero Page" },
    {
      type: "figures",
      cols: 2,
      figures: [
        { src: "/images/illume/vouch-blue-hand.png", alt: "First hero concept with a hand graphic", w: 1024, h: 721, frame: dark },
        { src: "/images/illume/vouch-blue-orb.png", alt: "Revised hero with the network orb", w: 1024, h: 721, frame: dark },
      ],
    },

    { type: "label", text: "Final design" },
    {
      type: "lead",
      lead: "A single, scannable credential card",
      text: "Distills biometric identity, community vouching, and live skill verification into one clear view; a user's entire trust status readable at a glance. (Requires Gemini API tokens to generate, so it isn't viewable as a screenshot or in the live demo.)",
    },
    {
      type: "lead",
      lead: "Landing page",
      text: "Introduces Illume and the trust system at a glance, before a user goes any further.",
    },
    { type: "figure", figure: { src: "/images/illume/hero-yellow.png", alt: "Illume landing page: reclaiming trust in a world without records", w: 2048, h: 990, frame: dark }, width: "wide" },
    {
      type: "lead",
      lead: "Scan + Verify",
      text: "Where a user actually goes through identity scanning and verification — the core interaction of the whole system.",
    },
    { type: "figure", figure: { src: "/images/illume/scan-verify.png", alt: "Scan & verify screen", w: 2048, h: 974, frame: dark }, width: "wide" },
    { type: "p", text: "Biometric registration and web-of-trust are best seen in the live demo, since they weren't accessible as static screenshots. Live skill verification also requires Gemini API tokens to run, so it isn't viewable as a screenshot or in the live demo." },

    { type: "label", text: "Try it yourself", align: "center" },
    { type: "p", text: "Illume runs on live Gemini API calls for parts of the experience (like the video-based skill verification), so not every screen will show up." },
    { type: "note", text: "Note: usage runs on Gemini API tokens, so functionality may be limited depending on availability." },
    { type: "link", href: "https://gdgc-hackathon-2026.vercel.app/", label: "Open the live demo" },

    { type: "label", text: "Result" },
    { type: "p", text: "The team placed 3rd overall. My design gave Illume's technical concept a clear, usable interface, turning a fairly abstract, multi-layered trust system into something a user could navigate simply, via a single scannable credential card." },
  ],
};

export const auis: CaseStudy = {
  slug: "auis",
  title: "AUIS Redesign",
  subtitle: "(Auckland University Indian Society)",
  tagline:
    "A bright, distinctive visual identity for AUIS, built to flex across merch, events, and socials while staying recognisable.",
  link: { href: "https://www.instagram.com/au.indiansociety/", label: "@au.indiansociety" },
  meta: {
    team: "Me, myself, and I :D",
    timeline: "Ongoing",
    role: "The only Graphic Designer for AUIS, I was responsible for developing the club’s visual identity: designing merch & producing graphic content to represent the club.",
  },
  band: { bg: "#01136e", kind: "auis" },
  ticker: "AUIS",
  back: "/projects/brand",
  seo: "Case study: rebuilding the Auckland University Indian Society's visual identity across social posts, carousels, lanyards and merch.",
  blocks: [
    { type: "label", text: "The challenge" },
    { type: "p", text: "For this year's AUIS branding, I wanted to create a visual identity that felt exciting, modern, and distinctive without relying on stereotypical cultural imagery. I wanted the branding to appeal to students looking for events that felt exciting and worth showing up for, while helping AUIS stand out among other university clubs." },
    { type: "p", text: "At the beginning of the year, I struggled to establish a consistent visual direction. Although I had a colour palette and typography in place, my posts often felt disconnected, with different styles competing across the society's social media." },
    { type: "p", text: "With the final major events of the year approaching, I saw an opportunity to reassess my approach and become more intentional about how I developed and applied the visual identity." },

    { type: "label", text: "Building a visual direction" },
    { type: "p", text: "I started by creating a moodboard of visual references that captured the direction I wanted to take AUIS. I was drawn to bold editorial layouts, expressive typography, vibrant colour combinations, and playful graphic elements." },
    { type: "figure", figure: { src: "/images/auis/moodboard.jpg", alt: "Moodboard of editorial layouts and expressive type", w: 2048, h: 887, frame: true }, width: "wide" },
    { type: "p", text: "My goal was to create designs that would catch someone's attention while scrolling through Instagram. I wanted the branding to feel contemporary and expressive, using bright colours and bold motifs to build excitement around the society's events." },
    { type: "p", text: "Rather than approaching each design independently, I began referring to the moodboard more closely when making creative decisions. It became a point of reference for the colours, typography, compositions, and visual elements I wanted to carry throughout the branding." },

    { type: "label", text: "Colour palette", align: "center" },
    { type: "custom", id: "palette" },
    { type: "p", text: "I explored how a bold colour palette could help AUIS stand out and create a recognisable visual presence. Colour became an important part of establishing the overall energy of the branding and connecting different designs." },

    { type: "label", text: "Logo variations", align: "center" },
    { type: "custom", id: "logos" },
    { type: "p", text: "The logo variations formed another part of the visual identity. I considered how the different versions could represent an event and work alongside the wider branding." },

    { type: "label", text: "Typography", align: "center" },
    { type: "custom", id: "type" },
    { type: "p", text: "Typography helped establish the personality of the identity. Drawing on my editorial design references, I explored how bold headings and contrasting type styles could create visual hierarchy and make the designs feel more expressive." },

    { type: "label", text: "Social media posts", align: "center" },
    { type: "note", text: "Real life applications plus two special event posters based on a certain theme" },
    { type: "figure", figure: { src: "/images/auis/posts-collage.png", alt: "Grid of AUIS Instagram posts: Interclub, Clubs Café, Trailblazer, Movie Night, Shaam Nastani, Sitaare", w: 2048, h: 1704 }, width: "wide" },
    { type: "p", text: "One of my main goals was to make the posts feel more cohesive. I started paying closer attention to how colour, typography, composition, layout, and graphic elements worked together." },
    { type: "p", text: "Instead of treating each post as an isolated design, I began considering how the pieces would look as a collection and how their elements can be shared. Although each post had a different purpose, I wanted them to share a recognisable visual style." },
    { type: "custom", id: "ticker-posts" },

    { type: "label", text: "Carousels", align: "center" },
    { type: "p", text: "The event recap carousels were an opportunity to capture the energy of AUIS events and bring those moments together in a continuous visual experience. Rather than treating each slide as a separate graphic, I designed the layouts to flow into one another, encouraging viewers to swipe through the recap." },
    { type: "custom", id: "carousels" },
    { type: "p", text: "I wanted the carousels to feel engaging and expressive while remaining consistent with the wider visual identity. This meant considering how typography, graphic elements, and photography could work together across the sequence without interrupting the overall flow." },
    { type: "custom", id: "ticker-carousels" },

    { type: "label", text: "Lanyard cards", align: "center" },
    { type: "lead", lead: "Exec lanyard", text: "Made for the 2026 exec to wear at events; quick, at-a-glance ID that still carries the brand beyond graphic design." },
    { type: "custom", id: "lanyards" },
    { type: "custom", id: "ticker-lanyards" },

    { type: "label", text: "Merch", align: "center" },
    { type: "note", text: "under construction with matcha, modern family, and procrastination :D" },

    { type: "label", text: "Evaluating my practice" },
    { type: "p", text: "I evaluated my progress by comparing my earlier designs with my newer work and paying attention to feedback from my team." },
    { type: "p", text: "Looking back at the earlier posts, I could identify several inconsistencies in composition, typography, elements, layout, and colour. In my newer designs, these elements worked together more cohesively, creating a more consistent visual style across the different applications." },
    { type: "h", text: "Old posts: Semester one" },
    {
      type: "figures",
      cols: 4,
      figures: [
        { src: "/images/auis/clubs-expo.png", alt: "Clubs Expo '26 poster", w: 820, h: 1024 },
        { src: "/images/auis/socials-execs.png", alt: "Introducing socials executives post", w: 820, h: 1024 },
        { src: "/images/auis/movie-night.png", alt: "Movie Night poster", w: 813, h: 1024 },
        { src: "/images/auis/jashan-e-eid.png", alt: "Jashan e Eid poster", w: 820, h: 1024 },
      ],
    },
    { type: "p", text: "My team also responded positively to the overall aesthetic and colour choices. This feedback gave me an outside perspective on the direction I was developing and helped me recognise the value of creating a cohesive visual language." },
    { type: "p", text: "Although this feedback was useful, it was an informal way of evaluating the work rather than a structured measure of audience response. In future projects, I want to document feedback more in depth and gather perspectives from the intended audience as well." },

    { type: "label", text: "Reflection & next steps" },
    { type: "p", text: "This experience taught me the importance of having a clear visual direction before developing individual designs. While I had already set a colour palette and typography earlier in the year, I realised that having these elements alone did not mean consistency." },
    { type: "p", text: "Referring to my moodboard more often helped me make more considered decisions and connect the different applications through a shared visual style and elements." },
    { type: "p", text: "Moving forward, I want to carry this approach into my future design work by establishing clearer visual references, documenting my decisions throughout the process, and creating more intentional ways to evaluate my designs. I also want to continue exploring how bold, expressive visual identities can communicate a brand's personality without relying on predictable conventions." },
  ],
};

export const auisPalette = ["#ffa909", "#ec000c", "#f44027", "#dd3d97", "#031eab", "#2da3fb"];
export const auisLogos = ["Original", "Wax Seal", "Stamp", "Glow"];
export const auisCarousels = Array.from({ length: 16 }, (_, i) => `/images/auis/carousel-${String(i + 1).padStart(2, "0")}.png`);
export const auisLanyards = [
  { name: "Shaurya Sriram", role: "Director of Events" },
  { name: "Arisha Azmi", role: "Designer", image: "/images/auis/lanyard-arisha.png" },
  { name: "Kathie Bahad", role: "President" },
];

export const uoacs: CaseStudy = {
  slug: "uoacs",
  title: "UOACS",
  subtitle: "(University of Auckland Compsci Society)",
  tagline: "Applying UOACS's existing brand across posters, lanyards, ID cards, and exec merch.",
  link: { href: "https://www.instagram.com/uoacompsci/", label: "@uoacompsci" },
  meta: {
    team: "3 designers",
    timeline: "Ongoing",
    role: "Working within UOACS's existing brand guidelines, I applied the system to new formats, starting with exec merch, then extending into posters, lanyards, and IDs.",
  },
  band: { bg: "#ffffff", kind: "uoacs" },
  ticker: "UOACS",
  back: "/projects/brand",
  seo: "Applying the University of Auckland Computer Science Society's brand to posters, lanyards, ID cards and exec merch.",
  blocks: [
    { type: "quote", text: "Working within UOACS's existing brand guidelines, I applied the system to new formats; from exec merch, posters, lanyards, and IDs." },

    { type: "label", text: "Social media posts", align: "center" },
    {
      type: "figures",
      cols: 4,
      figures: [
        { src: "/images/uoacs/arisha-1.webp", alt: "Arisha Azmi — Design Executive introduction post", w: 897, h: 1120 },
        { src: "/images/uoacs/studysesh.webp", alt: "404: Sleep Not Found — study session poster", w: 1121, h: 1400 },
        { src: "/images/uoacs/bingo.webp", alt: "Programming Bingo Night poster", w: 1121, h: 1400 },
        { src: "/images/uoacs/tower.webp", alt: "Decode the Markets — Quant trading at Tower Research Capital poster", w: 1121, h: 1400 },
      ],
    },

    { type: "label", text: "Lanyard & ID", align: "center" },
    { type: "custom", id: "lanyard" },

    { type: "label", text: "Merch", align: "center" },
    { type: "figure", figure: { src: "/images/uoacs/frame-39.png", alt: "UOACS Computer Science Society logo lock-up with the fox mascot", w: 2604, h: 1400, frame: true }, width: "narrow" },

    { type: "label", text: "Secret project", align: "center" },
    { type: "note", text: "under construction with matcha, modern family, and procrastination :D" },
  ],
};

export const caseStudies = { esports, illume, auis, uoacs };
