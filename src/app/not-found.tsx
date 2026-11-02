import Link from "next/link";
import { ScriptHeading } from "@/components/ScriptHeading";
import { StarNav } from "@/components/StarNav";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center pt-28 text-center">
        <ScriptHeading as="h1" vw={28} min="6rem" max="26rem">
          Lost?
        </ScriptHeading>
        <p className="page-pad -mt-2 font-sans text-[16px] font-medium">That page doesn&apos;t exist (yet).</p>
        <Link href="/" className="mt-6 rounded-full border-2 border-red px-6 py-2.5 font-sans text-[14px] font-bold uppercase tracking-wider transition-colors hover:bg-red hover:text-cream">
          Back home
        </Link>
      </div>
      <StarNav />
    </>
  );
}
