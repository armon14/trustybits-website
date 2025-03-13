
import { Container } from "@/components/ui/Container";
import { Code, Globe, Users, Book, Zap, Sword, Shield } from "lucide-react";

const features = [
  {
    name: "Real-World Projects",
    description: "Gain hands-on experience with bite-sized, practical projects on 76Forge, our training ground for tech adventurers.",
    icon: Code,
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    borderColor: "border-cyber-blue/20"
  },
  {
    name: "Community Support",
    description: "Connect with like-minded professionals, build relationships, and get answers to your technical questions.",
    icon: Users,
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    borderColor: "border-cyber-purple/20"
  },
  {
    name: "Knowledge Resources",
    description: "Access our carefully curated content and resources covering design, development, product, research, and more.",
    icon: Book,
    color: "text-cyber-pink",
    bgColor: "bg-cyber-pink/10",
    borderColor: "border-cyber-pink/20"
  },
  {
    name: "Weekly Events",
    description: "Participate in our regular events including AMAs, project showcases, and collaborative learning sessions.",
    icon: Globe,
    color: "text-cyber-accent",
    bgColor: "bg-cyber-accent/10",
    borderColor: "border-cyber-accent/20"
  },
  {
    name: "Cutting-Edge Topics",
    description: "Stay updated with the latest trends and technologies in design, AI, development, and product management.",
    icon: Zap,
    color: "text-medieval-gold",
    bgColor: "bg-medieval-gold/10",
    borderColor: "border-medieval-gold/20"
  },
  {
    name: "Expert Guidance",
    description: "Learn from seasoned professionals through mentoring, coaching, and expert feedback on your work.",
    icon: Sword,
    color: "text-medieval-silver",
    bgColor: "bg-medieval-silver/10",
    borderColor: "border-medieval-silver/20"
  },
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-5 z-0"></div>
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-cyber-blue/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl z-0"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="medieval-heading text-3xl md:text-4xl mb-6">Forge Your Future</h2>
          <div className="medieval-divider">
            <Shield className="h-6 w-6 text-medieval-gold mx-4" />
          </div>
          <p className="text-lg text-cyber-text-secondary mt-6">
            Trustybits exists to help tech professionals level up through real-world experience, shared knowledge, and a supportive community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className={`glass-card rounded-lg p-6 transition-all duration-500 hover:shadow-neon-blue animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`rounded-full ${feature.bgColor} ${feature.borderColor} border w-12 h-12 flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-cyber mb-2">{feature.name}</h3>
              <p className="text-cyber-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
