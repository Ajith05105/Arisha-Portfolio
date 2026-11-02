import { Reveal } from "./motion";

/** The bordered box headings ("BRIEF", "PROCESS", …) from the case studies. */
export function SectionLabel({
  children,
  align = "left",
  id,
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <Reveal className={align === "center" ? "flex justify-center" : ""}>
      <h2
        id={id}
        className="inline-block border-2 border-red px-6 py-2 font-grotesk text-[clamp(16px,1.7vw,24px)] font-bold uppercase tracking-[0.02em]"
      >
        {children}
      </h2>
    </Reveal>
  );
}
