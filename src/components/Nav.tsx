"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "@/content/site";
import { Star } from "./Star";

const linkClass =
  "font-sans text-[20px] font-bold tracking-[0.02em] text-red transition-transform duration-300 ease-out-expo hover:-translate-y-0.5";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Re-mount the menu per route so it never stays open across navigations.
  const menuKey = pathname;

  // Lock scroll while the mobile menu is open; links close it on click.
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  const all = [...nav.left, ...nav.right];

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="page-pad pointer-events-auto flex items-center justify-between pt-5"
      >
        <ul className="hidden items-center gap-12 md:flex">
          {nav.left.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="hidden items-center gap-12 md:flex">
          {nav.right.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <Link href="/" className="font-sans text-[18px] font-bold md:hidden">
          Arisha
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0, scale: open ? 1.15 : 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Star size={28} />
          </motion.span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key={menuKey}
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-0 z-[55] flex flex-col items-center justify-center gap-7 bg-cream/95 backdrop-blur-md md:hidden"
          >
            {all.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.05 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-grotesk text-[44px] font-bold uppercase leading-none tracking-tight text-red"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
