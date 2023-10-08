import ServiceNav from "@/components/ServiceNav";
import About from "@/sections/About";
import Carosul from "@/sections/Carosul";
import Collaboration from "@/sections/Collaboration";
import CtaSection from "@/sections/CtaSection";
import Hero from "@/sections/Hero";
import HorizontalScroller from "@/sections/HorizontalScroller";
import Services from "@/sections/Services";
import Stats from "@/sections/Stats";
import Teams from "@/sections/Teams";
import Video from "@/sections/Video";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <ServiceNav />
      <Hero />
      <div className="relative z-10 w-full overflow-x-clip">
        <Collaboration />
        <About />
        <Video />
        <Services />
        <Carosul />
        <CtaSection />
        <Stats />
        <HorizontalScroller />
        <Teams />
        <Footer />
      </div>
    </main>
  );
}
