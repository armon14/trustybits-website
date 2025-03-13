
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Users, Award, PieChart, Code, Mail, Castle, Crown, Check } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    id: "mentoring",
    name: "Mentoring",
    description: "Get personalized guidance from industry experts to accelerate your growth and overcome challenges.",
    features: [
      "One-on-one sessions with experienced professionals",
      "Personalized growth plan and feedback",
      "Regular check-ins and progress tracking",
      "Access to exclusive resources and tools"
    ],
    icon: Users,
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    borderColor: "border-cyber-blue/20",
    ctaText: "Schedule a Session"
  },
  {
    id: "coaching",
    name: "Coaching",
    description: "Structured coaching programs to develop specific skills and achieve measurable results.",
    features: [
      "Structured skill development programs",
      "Goal setting and accountability",
      "Hands-on exercises and assignments",
      "Regular feedback and progress reviews"
    ],
    icon: Award,
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    borderColor: "border-cyber-purple/20",
    ctaText: "Find a Coach"
  },
  {
    id: "ux-audits",
    name: "UX Audits",
    description: "Comprehensive evaluation of your digital products to identify usability issues and improvement opportunities.",
    features: [
      "Detailed heuristic evaluation",
      "User journey mapping and analysis",
      "Accessibility assessment",
      "Prioritized recommendations and action plan"
    ],
    icon: PieChart,
    color: "text-cyber-pink",
    bgColor: "bg-cyber-pink/10",
    borderColor: "border-cyber-pink/20",
    ctaText: "Request an Audit"
  },
  {
    id: "development",
    name: "Development Services",
    description: "Custom software development services tailored to your specific needs and requirements.",
    features: [
      "Full-stack web and mobile development",
      "UI/UX design and implementation",
      "Code reviews and optimization",
      "Ongoing support and maintenance"
    ],
    icon: Code,
    color: "text-medieval-gold",
    bgColor: "bg-medieval-gold/10",
    borderColor: "border-medieval-gold/20",
    ctaText: "Discuss Your Project"
  }
];

const ServicesPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-28 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <div className="medieval-divider">
              <Crown className="h-6 w-6 text-medieval-gold mx-4" />
            </div>
            <h1 className="medieval-heading text-4xl md:text-5xl mb-6">Our Services</h1>
            <p className="text-lg text-cyber-text-secondary">
              Premium services to help you and your team level up your skills and achieve your goals.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 0 ? "lg:grid-flow-col" : "lg:grid-flow-col-dense"
                }`}
              >
                <div className={`animate-slide-from-${index % 2 === 0 ? "left" : "right"}`}>
                  <div className={`rounded-full ${service.bgColor} ${service.borderColor} border w-14 h-14 flex items-center justify-center mb-4`}>
                    <service.icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <h2 className="text-3xl font-cyber mb-4">{service.name}</h2>
                  <p className="text-lg text-cyber-text-secondary mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <Check className="h-5 w-5 text-cyber-blue" />
                        </div>
                        <p className="text-cyber-text-secondary">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="default" size="lg">
                    {service.ctaText}
                  </Button>
                </div>
                
                <div className={`glass-card rounded-lg p-8 animate-fade-in h-[350px] relative overflow-hidden ${
                  index % 2 === 0 ? "order-last" : "order-first"
                }`}>
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:15px_15px] opacity-10 z-0"></div>
                  <div className={`absolute -z-10 ${
                    index % 2 === 0 ? "-bottom-20 -right-20" : "-top-20 -left-20"
                  } w-60 h-60 ${service.bgColor} rounded-full blur-3xl opacity-30`}></div>
                  
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <service.icon className={`h-16 w-16 ${service.color} mx-auto mb-4`} />
                      <p className="text-2xl font-medieval text-medieval-gold mb-2">Coming Soon</p>
                      <p className="text-cyber-text-secondary">
                        Service details and examples will be displayed here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 glass-card rounded-lg p-8 animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid bg-[length:15px_15px] opacity-10 z-0"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyber-blue/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyber-purple/10 rounded-full blur-3xl z-0"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 rounded-full bg-medieval-gold/10 border border-medieval-gold/20 flex items-center justify-center mx-auto mb-4">
                <Castle className="h-7 w-7 text-medieval-gold" />
              </div>
              <h2 className="text-3xl font-medieval mb-4">Ready to Level Up?</h2>
              <p className="text-lg text-cyber-text-secondary mb-8">
                Contact us to discuss your needs and how our services can help you achieve your goals.
              </p>
              <Button variant="medieval" size="xl" className="animate-pulse-glow">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
