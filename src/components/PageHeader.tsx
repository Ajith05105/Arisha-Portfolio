import { ScriptHeading } from "./ScriptHeading";
import { StarField, type StarSpec } from "./StarField";
import { BackStar } from "./BackStar";

const defaultStars: StarSpec[] = [
  { x: 88, y: -4, size: 15, rotate: 16, hideOnMobile: true },
  { x: 86, y: 40, size: 16, rotate: -68, hideOnMobile: true },
  { x: -3, y: 46, size: 16, rotate: 16 },
  { x: 7, y: 42, size: 8, rotate: -19, hideOnMobile: true },
];

/** Script title + Back star used on every listing page. */
export function PageHeader({
  title,
  vw,
  back = "/#projects",
  stars = defaultStars,
  children,
}: {
  title: string;
  vw: number;
  back?: string;
  stars?: StarSpec[];
  children?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-x-clip pt-24 md:pt-16">
      <StarField stars={stars} />
      <div className="flex justify-center">
        <ScriptHeading as="h1" vw={vw} min="5rem" max="26rem">
          {title}
        </ScriptHeading>
      </div>
      <div className="page-pad relative z-10 -mt-2 md:mt-0 md:pl-[6vw]">
        <BackStar href={back} />
      </div>
      {children}
    </div>
  );
}
