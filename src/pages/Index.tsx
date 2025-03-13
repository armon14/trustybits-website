
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Events } from "@/components/Events";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Events />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
