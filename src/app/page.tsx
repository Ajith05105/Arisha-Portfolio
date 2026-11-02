import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { About } from "@/components/home/About";
import { FindMe } from "@/components/home/FindMe";
import { Ticker } from "@/components/Ticker";
import { StarNav } from "@/components/StarNav";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker label="Projects" className="mt-10 md:mt-14" />
      <Projects />
      <Ticker label="About Me" reverse />
      <About />
      <Ticker label="Contact" />
      <FindMe />
      <StarNav />
    </>
  );
}
