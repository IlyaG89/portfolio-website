import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

/**
 * Home page - Brittany Chiang style layout
 * Content-first with fixed sidebar navigation
 */
export default function Home() {
  return (
    <div className="max-w-3xl">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
