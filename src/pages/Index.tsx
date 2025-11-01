import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CompanyFeatureRibbon from "@/components/CompanyFeatureRibbon";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import ClientLogos from "@/components/ClientLogos";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CompanyFeatureRibbon />
        <Services />
        <Features />
        <Stats />
        <ClientLogos />
        <TechStack />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
