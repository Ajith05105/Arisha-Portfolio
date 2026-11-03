export type Poster = { src: string; alt: string; w: number; h: number };

const p = (file: string, alt: string, w = 1131, h = 1600): Poster => ({
  src: `/images/posters/${file}.webp`,
  alt,
  w,
  h,
});

/** Poster gallery, in the order of the Figma grid. */
export const posters: Poster[] = [
  p("01-posters7", "In The Loop — navy poster with a bold illustrated face, florals and gold chain, 25 October 2023"),
  p("02-concept1-2", "In The Loop / LOOP — lilac poster with an illustrated figure and giant LOOP wordmark"),
  p("03-concept1-1", "In The Loop Identity — teal poster with illustrated hands and a swirling red ribbon"),
  p("04-posters06", "In The Loop — pink and navy poster with an eye illustration and vertical type"),
  p("05-concept3", "In The Loop — red and blue poster on reconnecting children of immigrants with their heritage"),
  p("06-posters-02", "LOOP — coral poster with an illustrated figure and oversized blue wordmark"),
  p("07-recreations-1", "Cherry Red — cream poster with an illustrated cocktail glass on a grid"),
  p("08-trisci-01", "Trigun Stampede recreation — illustrated figure leaping across a purple sky"),
  p("09-posterdesign-07", "Nostrum Paradiso — Grand Opening poster with a copper disc and scattered birds"),
  p("10-recreations-2", "RIRI — red monotone portrait poster, 'The Great'"),
  p("11-recreations-3", "POW POW POW — blurred portrait with large red type, Pow Pow Strike issue"),
  p("12-tutorials-04", "Bang Bang — red poster with 3D extruded black type"),
  p("13-tutorials-02", "My Heart — pink poster with red wavy line art"),
  p("14-tutorials-03", "Ever Since I Was A Kid I've Been Legit — halftone red circle on cream"),
  p("15-tutorials-05", "Soft pink gradient poster with a glowing 7"),
  p("16-tutorials-01", "Can You Feel The Rain — purple and orange gradient poster"),
  p("17-tutorials-10", "DES 100 — red graphic design poster with a rotated frame"),
  p("18-tutorials-06", "The Arcane — pastel geometric shapes poster"),
  p("19-tutorials-07", "New Jeans — warped black type with cherries on pink"),
  p("20-ep2", "RIRI magazine cover — Radiant! Whos That Girl? December 2005"),
  p("21-first-affinity", "Introducing RIRI — crossword poster: developer, designer, vlogger, dancing queen"),
];
