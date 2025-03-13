
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-32 pb-20">
        <Container className="relative">
          <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-5 z-0"></div>
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyber-blue/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl z-0"></div>
          
          <div className="max-w-xl mx-auto text-center relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-cyber-blue animate-pulse" />
            </div>
            
            <h1 className="text-glitch text-7xl font-cyber mb-6" data-text="404">404</h1>
            <h2 className="text-2xl font-medieval text-medieval-gold mb-6">Quest Not Found</h2>
            <p className="text-lg text-cyber-text-secondary mb-8">
              The path you seek doesn't exist in this realm. Perhaps it was moved, or never existed at all.
            </p>
            <Button 
              variant="default" 
              size="lg"
              className="animate-pulse-glow"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Return to Home
              </Link>
            </Button>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
