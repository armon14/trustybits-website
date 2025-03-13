
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Shield, Sword, Castle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden cyberpunk-grid min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-glow z-0 opacity-60"></div>
      <div className="absolute w-1/2 h-1/2 -bottom-12 -right-12 bg-cyber-purple/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute w-1/3 h-1/3 -bottom-24 -left-24 bg-cyber-blue/10 rounded-full blur-3xl z-0"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-sm font-cyber animate-pulse-glow">
              <div className="flex items-center">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-blue"></span>
                </span>
                Welcome to the future of community
              </div>
            </div>

            <h1 className="font-cyber text-5xl sm:text-6xl md:text-7xl leading-tight tracking-wide">
              <span className="text-glitch" data-text="TRUSTY">TRUSTY</span>
              <span className="text-cyber-blue">BITS</span>
            </h1>

            <p className="text-xl text-cyber-text-secondary max-w-xl">
              Level up through real-world, bite-size projects with our tech community. Connect with peers, stay updated, and forge your path in tech.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="default" 
                size="xl" 
                className="group"
                onClick={() => window.open("https://discord.gg/trustybits", "_blank")}
              >
                <MessageSquare className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Join Our Discord
              </Button>
              <Button variant="medieval" size="xl">
                <Sword className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-cyber-blue/10 mb-2">
                  <Shield className="h-6 w-6 text-cyber-blue" />
                </div>
                <p className="text-sm text-cyber-text-secondary">Community Support</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-cyber-purple/10 mb-2">
                  <Sword className="h-6 w-6 text-cyber-purple" />
                </div>
                <p className="text-sm text-cyber-text-secondary">Skills Training</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-medieval-gold/10 mb-2">
                  <Castle className="h-6 w-6 text-medieval-gold" />
                </div>
                <p className="text-sm text-cyber-text-secondary">Expert Mentoring</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-full max-w-lg mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-cyber-glow rotate-45 opacity-20 z-0 animate-pulse-glow"></div>
                <div className="glass-card rounded-lg p-6 backdrop-blur-xl relative z-10 animate-float shadow-neon-blue">
                  <div className="absolute -top-3 -right-3 bg-cyber-blue text-cyber-black px-3 py-1 text-sm font-cyber rounded">
                    <span className="animate-text-flicker">LIVE</span>
                  </div>
                  <div className="p-2 border border-cyber-blue/20 rounded-md bg-cyber-black/50 mb-4 animate-pulse-glow">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-cyber-pink"></div>
                      <div className="w-3 h-3 rounded-full bg-cyber-accent"></div>
                      <div className="w-3 h-3 rounded-full bg-cyber-blue"></div>
                      <div className="flex-1 text-right text-xs text-cyber-text-secondary font-mono">76Forge Training Ground</div>
                    </div>
                    <div className="font-medieval text-xl text-center py-2 text-medieval-gold">Weekly Events</div>
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center space-x-3 p-2 rounded bg-cyber-darkgray/50 border border-cyber-blue/10">
                        <div className="text-xs font-mono text-cyber-text-secondary">THU</div>
                        <div className="flex-1">Trusty Threads Thursdays</div>
                      </div>
                      <div className="flex items-center space-x-3 p-2 rounded bg-cyber-darkgray/50 border border-cyber-blue/10">
                        <div className="text-xs font-mono text-cyber-text-secondary">DAILY</div>
                        <div className="flex-1">MLP (Most Lovable Product)</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-1.5 w-full bg-cyber-darkgray rounded-full overflow-hidden">
                      <div className="h-full bg-cyber-blue w-3/4 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-cyber-text-secondary">
                      <span>Next Event: 2d 14h 22m</span>
                      <span className="text-cyber-blue">Join Now</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-medieval-gold/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-cyber-purple/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
