/**
 * Poster gallery. The 21 posters live only in the Figma file; this list is
 * filled in once the images are exported. Aspect ratios come from Figma.
 */
export type Poster = { src: string; alt: string; w: number; h: number };

export const posters: Poster[] = [];
