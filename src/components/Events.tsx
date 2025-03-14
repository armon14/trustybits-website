
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CalendarDays, MessageSquare, Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
  {
    id: 1,
    name: "Trusty Threads Thursdays",
    description: "A bi-weekly AMA Discord event where community members can ask questions and discuss trending topics.",
    day: "Thursday, March 27",
    frequency: "Bi-weekly",
    time: "10:30 PM EST",
    icon: MessageSquare,
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    borderColor: "border-cyber-blue/20"
  },
  {
    id: 2,
    name: "MLP (Most Lovable Product) Daily",
    description: "A daily shared journey with Lovable, exploring product development through practical exercises and discussions.",
    day: "Weekdays",
    frequency: "Daily",
    time: "4:00 PM EST",
    icon: Calendar,
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    borderColor: "border-cyber-purple/20"
  },
];

export function Events() {
  return (
    <section className="py-24 relative overflow-hidden bg-cyber-darkgray">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-5 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-cyber-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyber-black to-transparent"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-sm font-cyber mb-6">
            <CalendarDays className="mr-2 h-4 w-4" />
            Join our community events
          </div>
          <h2 className="cyber-heading text-3xl md:text-4xl mb-4">Weekly Events</h2>
          <p className="text-lg text-cyber-text-secondary">
            Connect with our community through regular events designed to help you learn, network, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className={cn(
                "glass-card rounded-lg p-6 transition-all duration-500 hover:shadow-neon-blue",
                index === 0 ? "animate-slide-from-left" : "animate-slide-from-right"
              )}
            >
              <div className="flex items-start">
                <div className={`rounded-full ${event.bgColor} ${event.borderColor} border w-16 h-16 flex items-center justify-center flex-shrink-0 mr-6`}>
                  <event.icon className={`h-8 w-8 ${event.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-cyber mb-2">{event.name}</h3>
                  <p className="text-cyber-text-secondary mb-4">{event.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-cyber-text-secondary">
                      <Calendar className="mr-2 h-4 w-4 text-cyber-blue" />
                      <span>{event.day}</span>
                    </div>
                    <div className="flex items-center text-sm text-cyber-text-secondary">
                      <Clock className="mr-2 h-4 w-4 text-cyber-blue" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="neon" 
            size="lg"
            onClick={() => window.open("https://discord.gg/jeZqcuMVum?event=1349882515837685770", "_blank")}
          >
            Join Discord for Event Updates
          </Button>
        </div>
      </Container>
    </section>
  );
}
