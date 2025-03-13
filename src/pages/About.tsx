import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Sword, Castle, Shield, Crown, MessageSquare } from "lucide-react";
import { useEffect } from "react";
const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-28 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-medieval-gold/10 border border-medieval-gold/20 text-medieval-gold text-sm font-medieval mb-4">
              Our Story
            </span>
            <h1 className="medieval-heading text-4xl md:text-5xl mb-6">About Trustybits</h1>
            <div className="medieval-divider">
              <Crown className="h-6 w-6 text-medieval-gold mx-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="animate-slide-from-left">
              <h2 className="text-2xl font-cyber mb-6 text-cyber-blue">Our Mission</h2>
              <p className="text-lg text-cyber-text-secondary mb-6">
                Trustybits exists to help tech professionals level up through real-world, bite-size projects and meaningful community connections. We believe in learning by doing, sharing knowledge, and supporting each other's growth.
              </p>
              <p className="text-lg text-cyber-text-secondary mb-6">
                Our training ground, 76Forge, provides a space for both new and experienced adventurers to hone their skills through practical challenges that mirror real-world scenarios.
              </p>
              <div className="glass-card rounded-lg p-6 bg-cyber-darkgray/50">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-medieval-gold mr-3" />
                  <h3 className="text-xl font-medieval text-medieval-gold">Community Values</h3>
                </div>
                <ul className="space-y-2 text-cyber-text-secondary">
                  <li className="flex items-start">
                    <div className="h-6 w-6 flex items-center justify-center mr-2">•</div>
                    <span>Continuous learning and growth</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 flex items-center justify-center mr-2">•</div>
                    <span>Supportive and inclusive environment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 flex items-center justify-center mr-2">•</div>
                    <span>Practical, hands-on experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 flex items-center justify-center mr-2">•</div>
                    <span>Knowledge sharing and collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-8 relative overflow-hidden animate-slide-from-right h-[400px] md:h-auto">
              <div className="absolute inset-0 bg-cyber-grid bg-[length:15px_15px] opacity-10 z-0"></div>
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyber-blue/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-medieval-gold/5 rounded-full blur-3xl z-0"></div>
              
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6">
                    <img src="/lovable-uploads/ba3bc776-07be-4023-8e74-03fdd75a7f71.png" alt="Trustybits Logo" className="w-full h-auto" />
                  </div>
                  <h2 className="text-2xl font-cyber mb-4">Join the Adventure</h2>
                  <p className="text-cyber-text-secondary mb-6">
                    Connect with like-minded professionals, access exclusive resources, and participate in our weekly events.
                  </p>
                  <Button variant="default" size="lg" onClick={() => window.open("https://discord.gg/6WWTT2bxwE", "_blank")} className="mi-4">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Join Our Discord
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-cyber mb-6">What We Offer</h2>
              <p className="text-lg text-cyber-text-secondary">
                Trustybits brings together a range of resources and opportunities to help tech professionals thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card rounded-lg p-6 animate-fade-in" style={{
              animationDelay: "0ms"
            }}>
                <div className="rounded-full bg-cyber-blue/10 border border-cyber-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <Castle className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-cyber mb-2">76Forge</h3>
                <p className="text-cyber-text-secondary">Our training ground for real-world projects and skill development.</p>
              </div>
              
              <div className="glass-card rounded-lg p-6 animate-fade-in" style={{
              animationDelay: "100ms"
            }}>
                <div className="rounded-full bg-cyber-purple/10 border border-cyber-purple/20 w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-cyber mb-2">Community</h3>
                <p className="text-cyber-text-secondary">A supportive network of peers for knowledge sharing and collaboration.</p>
              </div>
              
              <div className="glass-card rounded-lg p-6 animate-fade-in" style={{
              animationDelay: "200ms"
            }}>
                <div className="rounded-full bg-cyber-pink/10 border border-cyber-pink/20 w-12 h-12 flex items-center justify-center mb-4">
                  <Crown className="h-6 w-6 text-cyber-pink" />
                </div>
                <h3 className="text-xl font-cyber mb-2">Events</h3>
                <p className="text-cyber-text-secondary">Regular events for learning, networking, and skill enhancement.</p>
              </div>
              
              <div className="glass-card rounded-lg p-6 animate-fade-in" style={{
              animationDelay: "300ms"
            }}>
                <div className="rounded-full bg-medieval-gold/10 border border-medieval-gold/20 w-12 h-12 flex items-center justify-center mb-4">
                  <Sword className="h-6 w-6 text-medieval-gold" />
                </div>
                <h3 className="text-xl font-cyber mb-2">Services</h3>
                <p className="text-cyber-text-secondary">Professional services including mentoring, coaching, and UX audits.</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-lg p-8 animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid bg-[length:15px_15px] opacity-10 z-0"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyber-purple/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-medieval-gold/10 rounded-full blur-3xl z-0"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-medieval mb-6">Join Us on This Quest</h2>
              <p className="text-lg text-cyber-text-secondary mb-8">
                Whether you're a seasoned adventurer or just starting your journey, there's a place for you in our community.
              </p>
              <Button variant="medieval" size="xl" onClick={() => window.open("https://discord.gg/6WWTT2bxwE", "_blank")} className="">
                <Shield className="mr-2 h-5 w-5" />
                Embark on the Adventure
              </Button>
            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>;
};
export default AboutPage;
