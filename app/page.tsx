import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SkillsMatrix from "@/components/sections/SkillsMatrix";
import WorkShowcase from "@/components/sections/WorkShowcase";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";
import StarsCanvas from "@/components/canvas/Stars";
import Section3DWrapper from "@/components/layout/Section3DWrapper";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <div className="relative z-0">
        <Hero />

        <Section3DWrapper>
          <About />
        </Section3DWrapper>

        <Section3DWrapper>
          <SkillsMatrix />
        </Section3DWrapper>

        <Section3DWrapper>
          <WorkShowcase />
        </Section3DWrapper>

        <Section3DWrapper>
          <Insights />
        </Section3DWrapper>

        <div className="relative z-0">
          <Section3DWrapper>
            <Contact />
          </Section3DWrapper>
          <StarsCanvas />
        </div>
      </div>

      <footer className="py-10 border-t border-border/50 text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm font-medium">
            &copy; {new Date().getFullYear()} MEETVA. Designed & Engineered with precision.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-muted-foreground">
            <a href="#" className="hover:text-brand-primary transition-colors text-xs font-bold uppercase tracking-widest">Next.js</a>
            <a href="#" className="hover:text-brand-primary transition-colors text-xs font-bold uppercase tracking-widest">Tailwind</a>
            <a href="#" className="hover:text-brand-primary transition-colors text-xs font-bold uppercase tracking-widest">Framer Motion</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
