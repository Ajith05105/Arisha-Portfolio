import type { CSSProperties } from "react";

export const STAR_PATH =
  "M50 2 L61.8 36.6 L98 36.6 L68.6 58 L79.8 93 L50 71.4 L20.2 93 L31.4 58 L2 36.6 L38.2 36.6 Z";

type StarProps = {
  /** CSS length (px number or any length expression such as a clamp()). */
  size?: number | string;
  /** Gaussian blur as a fraction of size (Figma stars use ~0.06–0.08). 0 = crisp. */
  blur?: number;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
  color?: string;
  title?: string;
};

/**
 * The soft red star used all over the design. Inline SVG so it scales to any
 * size with no asset; the blur is a CSS filter derived from the same length
 * expression as the size, so it scales with the star.
 */
export function Star({
  size = 24,
  blur = 0,
  rotate = 0,
  className = "",
  style,
  color = "currentColor",
  title,
}: StarProps) {
  const len = typeof size === "number" ? `${size}px` : size;
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={className}
      style={{
        width: len,
        height: len,
        display: "block",
        overflow: "visible",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        filter: blur ? `blur(calc(${len} * ${blur}))` : undefined,
        color,
        ...style,
      }}
    >
      {title ? <title>{title}</title> : null}
      <path d={STAR_PATH} fill="currentColor" />
    </svg>
  );
}
