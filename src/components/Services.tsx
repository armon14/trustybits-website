
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Users, Award, PieChart, Code, Castle } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    name: "Mentoring",
    description: "One-on-one guidance from industry experts to help you achieve your career goals.",
    icon: Users,
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    borderColor: "border-cyber-blue/20",
    animation: "animate-slide-from-left"
  },
  {
    id: 2,
    name: "Coaching",
    description: "Structured coaching programs to develop your skills and overcome challenges.",
    icon: Award,
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    borderColor: "border-cyber-purple/20",
    animation: "animate-slide-from-bottom"
  },
  {
    id: 3,
    name: "UX Audits",
    description: "Comprehensive review of your digital products to identify usability issues and opportunities.",
    icon: PieChart,
    color: "text-cyber-pink",
    bgColor: "bg-cyber-pink/10",
    borderColor: "border-cyber-pink/20",
    animation: "animate-slide-from-right"
  },
  {
    id: 4,
    name: "Development Services",
    description: "Custom software development services tailored to your specific needs.",
    icon: Code,
    color: "text-medieval-gold",
    bgColor: "bg-medieval-gold/10",
    borderColor: "border-medieval-gold/20",
    animation: "animate-slide-from-left"
  },
];

export function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-5 z-0"></div>
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-cyber-pink/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-medieval-gold/5 rounded-full blur-3xl z-0"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="medieval-divider">
            <Castle className="h-6 w-6 text-medieval-gold mx-4" />
          </div>
          <h2 className="medieval-heading text-3xl md:text-4xl mb-4">Premium Services</h2>
          <p className="text-lg text-cyber-text-secondary">
            Beyond our community offerings, we provide professional services to help you and your team level up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={cn(
                "glass-card rounded-lg p-6 transition-all duration-500 hover:shadow-neon-blue relative overflow-hidden",
                service.animation
              )}
            >
              <div className="relative z-10">
                <div className={`rounded-full ${service.bgColor} ${service.borderColor} border w-12 h-12 flex items-center justify-center mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-cyber mb-2">{service.name}</h3>
                <p className="text-cyber-text-secondary mb-4">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-cyber-blue group"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-cyber-black via-cyber-darkgray to-transparent opacity-60 z-0"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            variant="medieval" 
            size="lg"
            onClick={() => window.location.href = "/services"}
          >
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
