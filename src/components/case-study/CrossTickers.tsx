import { Ticker } from "@/components/Ticker";

/** Two bordered marquee bands crossing at ±2.7°, as under each case-study hero. */
export function CrossTickers({ label, className = "" }: { label: string; className?: string }) {
  const text = label.toUpperCase();
  const band =
    "absolute left-1/2 top-1/2 w-[120vw] -translate-x-1/2 -translate-y-1/2 border-y-2 border-red bg-cream";
  const textCls = "font-grotesk text-[clamp(16px,1.6vw,24px)] font-bold tracking-[0.02em] blur-[0.6px]";
  return (
    <div aria-hidden className={`relative h-[120px] w-full overflow-hidden md:h-[150px] ${className}`}>
      <div className={`${band} rotate-[2.7deg]`}>
        <Ticker label={text} textClassName={textCls} starSize={20} duration={22} className="py-2" />
      </div>
      <div className={`${band} -rotate-[2.7deg]`}>
        <Ticker label={text} textClassName={textCls} starSize={20} duration={26} reverse className="py-2" />
      </div>
    </div>
  );
}
