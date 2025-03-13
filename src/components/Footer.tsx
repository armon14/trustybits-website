
import { Container } from "@/components/ui/Container";
import { Link } from "react-router-dom";
import { 
  Discord, 
  Youtube, 
  Facebook, 
  Instagram, 
  ArrowUp,
  Twitter, 
  Linkedin,
  Mail
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-cyber-black relative pb-8">
      {/* Top border with gradient */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent"></div>
      
      {/* Scroll to top button */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-5">
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-cyber-blue text-cyber-black flex items-center justify-center hover:bg-cyber-blue/90 transition-all group"
          >
            <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      <Container className="pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/ba3bc776-07be-4023-8e74-03fdd75a7f71.png" 
                alt="Trustybits Logo" 
                className="h-8 w-auto mr-2" 
              />
              <span className="font-cyber text-lg tracking-wider text-cyber-blue">TRUSTYBITS</span>
            </div>
            <p className="text-cyber-text-secondary mb-6">
              A community for tech professionals looking to level up through real-world projects and meaningful connections.
            </p>
            <div className="flex space-x-4">
              <a href="https://discord.gg/trustybits" target="_blank" rel="noopener noreferrer" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">
                <Discord className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medieval text-lg mb-4 text-medieval-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/resources" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/services" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medieval text-lg mb-4 text-medieval-gold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#mentoring" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">Mentoring</Link>
              </li>
              <li>
                <Link to="/services#coaching" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">Coaching</Link>
              </li>
              <li>
                <Link to="/services#ux-audits" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">UX Audits</Link>
              </li>
              <li>
                <Link to="/services#development" className="text-cyber-text-secondary hover:text-cyber-blue transition-colors">Development</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medieval text-lg mb-4 text-medieval-gold">Contact</h3>
            <div className="space-y-4">
              <p className="text-cyber-text-secondary">
                Have questions or want to learn more about our community?
              </p>
              <a 
                href="mailto:contact@trustybits.com" 
                className="flex items-center text-cyber-text-secondary hover:text-cyber-blue transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                contact@trustybits.com
              </a>
              <a 
                href="https://discord.gg/trustybits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-cyber-text-secondary hover:text-cyber-blue transition-colors"
              >
                <Discord className="h-5 w-5 mr-2" />
                Join our Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cyber-blue/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cyber-text-secondary text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Trustybits. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-cyber-text-secondary hover:text-cyber-blue transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-cyber-text-secondary hover:text-cyber-blue transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
