"use client";

import { ScriptHeading } from "@/components/ScriptHeading";
import { StarField } from "@/components/StarField";
import { Reveal } from "@/components/motion";
import { wordSearch } from "@/content/home";
import { site } from "@/content/site";

const links: Record<string, { href: string | null; label: string }> = {
  behance: { href: site.behance, label: "Behance" },
  instagram: { href: site.instagram, label: "Instagram" },
  email: { href: `mailto:${site.email}`, label: "Email" },
  linkedin: { href: site.linkedin, label: "LinkedIn" },
};

export function FindMe() {
  return (
    <section id="contact" className="relative overflow-x-clip pt-2">
      <StarField
        stars={[
          { x: -2, y: 30, size: 12, rotate: 16 },
          { x: 3, y: 40, size: 6, rotate: -8, hideOnMobile: true },
          { x: 86, y: 34, size: 14, rotate: -14, hideOnMobile: true },
          { x: 94, y: 48, size: 6, rotate: 30, hideOnMobile: true },
        ]}
      />
      <div className="flex justify-center">
        <ScriptHeading vw={37} min="8rem" max="38rem">
          Find me
        </ScriptHeading>
      </div>

      <Reveal className="mt-4 flex justify-center px-4 md:mt-8">
        <WordSearch />
      </Reveal>
    </section>
  );
}

function WordSearch() {
  const { rows, words } = wordSearch;

  return (
    <div
      className="grid gap-y-1 font-sans text-[clamp(18px,4.6vw,45px)] font-bold tracking-[0.02em] text-ink"
      role="list"
      aria-label="Find me on"
    >
      {rows.map((row, r) => {
        const hit = words.find((w) => w.row === r);
        const cells: React.ReactNode[] = [];
        let c = 0;
        while (c < row.length) {
          if (hit && c === hit.col) {
            const link = links[hit.key];
            const letters = row.slice(c, c + hit.word.length).split("");
            const inner = letters.map((ch, i) => (
              <span
                key={i}
                className="inline-flex w-[1.15em] justify-center transition-transform duration-300 ease-out-expo group-hover:-translate-y-[0.12em]"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {ch}
              </span>
            ));
            cells.push(
              link.href ? (
                <a
                  key={`w${r}`}
                  role="listitem"
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="group inline-flex text-red underline-offset-[0.2em] focus-visible:underline"
                >
                  {inner}
                </a>
              ) : (
                <span key={`w${r}`} role="listitem" aria-label={link.label} className="group inline-flex text-red">
                  {inner}
                </span>
              ),
            );
            c += hit.word.length;
          } else {
            cells.push(
              <span key={c} aria-hidden className="inline-flex w-[1.15em] justify-center">
                {row[c]}
              </span>,
            );
            c += 1;
          }
        }
        return (
          <div key={r} className="flex justify-center leading-[1.1]">
            {cells}
          </div>
        );
      })}
    </div>
  );
}
