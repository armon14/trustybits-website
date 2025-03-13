import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "Resources",
    href: "/resources"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "About",
    href: "/about"
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4", scrolled ? "bg-cyber-black/90 backdrop-blur-md border-b border-cyber-blue/10 shadow-md" : "bg-transparent")}>
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/ba3bc776-07be-4023-8e74-03fdd75a7f71.png" alt="Trustybits Logo" className={cn("h-10 w-auto transition-all duration-300", scrolled ? "opacity-100" : "opacity-90")} />
              <span className={cn("font-cyber text-lg tracking-wider transition-all duration-300", scrolled ? "text-cyber-blue" : "text-white")}>TRUSTYBITS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            {navigation.map(item => <Link key={item.name} to={item.href} className={cn("px-3 py-2 text-sm font-medium rounded-md transition-all duration-300", location.pathname === item.href ? "text-cyber-blue bg-cyber-blue/10" : "text-cyber-text-secondary hover:text-cyber-blue hover:bg-cyber-blue/5")}>
                {item.name}
              </Link>)}
            <Button variant="neon" size="lg" className="ml-4 animate-pulse-glow" onClick={() => window.open("https://discord.gg/6WWTT2bxwE", "_blank")}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button type="button" className="text-gray-400 hover:text-white focus:outline-none" onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6 text-cyber-blue" /> : <Menu className="h-6 w-6 text-cyber-blue" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 bg-cyber-black/90 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <Container className="flex flex-col h-full pt-20 pb-8">
          <nav className="flex flex-col space-y-2 mt-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={cn("px-4 py-3 text-lg font-cyber rounded-md border border-transparent transition-all duration-300", location.pathname === item.href ? "text-cyber-blue border-cyber-blue/30 bg-cyber-blue/5" : "text-cyber-text-secondary hover:text-cyber-blue hover:border-cyber-blue/20")}>
                {item.name}
              </Link>)}
          </nav>
          <div className="mt-auto">
            <Button variant="default" size="xl" className="w-full animate-pulse-glow" onClick={() => window.open("https://discord.gg/6WWTT2bxwE", "_blank")}>
              <MessageSquare className="mr-2 h-6 w-6" />
              Join Our Discord
            </Button>
          </div>
        </Container>
      </div>
    </header>;
}