import { Star } from "./Star";

type TickerProps = {
  label: string;
  /** Seconds per loop. */
  duration?: number;
  reverse?: boolean;
  className?: string;
  /** Text classes; defaults to the Figma "Projects ★" row style. */
  textClassName?: string;
  starSize?: number;
  repeat?: number;
};

/**
 * Infinite marquee: "Projects ★ Projects ★ …". Content is duplicated once and
 * translated by -50% so the loop is seamless at any width.
 */
export function Ticker({
  label,
  duration = 28,
  reverse = false,
  className = "",
  textClassName = "font-sans text-[20px] font-bold tracking-[0.02em]",
  starSize = 22,
  repeat = 10,
}: TickerProps) {
  const items = Array.from({ length: repeat });
  const group = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-[63px] pr-[63px]"
    >
      {items.map((_, i) => (
        <span key={i} className="flex items-center gap-[63px]">
          <span className={`whitespace-nowrap ${textClassName}`}>{label}</span>
          <Star size={starSize} />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative flex w-full overflow-hidden py-3 text-red ${className}`}
      role="marquee"
      aria-label={label}
    >
      <div
        className="flex w-max animate-marquee will-change-transform"
        style={{
          ["--marquee-duration" as string]: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
