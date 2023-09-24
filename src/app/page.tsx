import ServiceNav from "@/components/ServiceNav";
import About from "@/sections/About";
import Collaboration from "@/sections/Collaboration";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main>
      <ServiceNav />
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <Collaboration />
        <About />
      </div>
    </main>
  );
}
