
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Book, Video, File, Link as LinkIcon, Download, BookOpen } from "lucide-react";
import { useEffect } from "react";

// Mock resource data
const resources = [
  {
    id: 1,
    title: "Ultimate Guide to UX Research",
    description: "A comprehensive guide to conducting effective UX research for your projects.",
    type: "Guide",
    icon: Book,
    category: "Design",
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    borderColor: "border-cyber-blue/20"
  },
  {
    id: 2,
    title: "Frontend Development Best Practices",
    description: "Learn the latest best practices for modern frontend development.",
    type: "Article",
    icon: File,
    category: "Development",
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    borderColor: "border-cyber-purple/20"
  },
  {
    id: 3,
    title: "Intro to AI for Product Managers",
    description: "How product managers can leverage AI to build better products.",
    type: "Video",
    icon: Video,
    category: "AI",
    color: "text-cyber-pink",
    bgColor: "bg-cyber-pink/10",
    borderColor: "border-cyber-pink/20"
  },
  {
    id: 4,
    title: "Building User-Centered Products",
    description: "A framework for creating products that truly serve user needs.",
    type: "Guide",
    icon: BookOpen,
    category: "Product",
    color: "text-medieval-gold",
    bgColor: "bg-medieval-gold/10",
    borderColor: "border-medieval-gold/20"
  },
  {
    id: 5,
    title: "Research Methods Toolkit",
    description: "Essential research methods for gathering actionable insights.",
    type: "Template",
    icon: Download,
    category: "Research",
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    borderColor: "border-cyber-blue/20"
  },
  {
    id: 6,
    title: "Workshop Facilitation Techniques",
    description: "Learn how to run effective workshops that drive results.",
    type: "Article",
    icon: LinkIcon,
    category: "Facilitation",
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    borderColor: "border-cyber-purple/20"
  },
];

// Resource categories
const categories = [
  "All", "Design", "Development", "Product", "Research", "AI", "Facilitation", "Startups"
];

const ResourcesPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-x-hidden">
      <Header />
      
      <main className="pt-28 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-sm font-cyber mb-4">
              Knowledge Base
            </span>
            <h1 className="cyber-heading text-4xl md:text-5xl mb-6">Resources</h1>
            <p className="text-lg text-cyber-text-secondary">
              Access our curated collection of resources to help you level up your tech skills.
            </p>
          </div>

          <div className="mb-12 overflow-x-auto hide-scrollbar">
            <div className="flex space-x-2 py-2 px-4 min-w-max">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "ghost"}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div 
                key={resource.id}
                className="glass-card rounded-lg p-6 transition-all duration-500 hover:shadow-neon-blue animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className={`rounded-full ${resource.bgColor} ${resource.borderColor} border w-10 h-10 flex items-center justify-center mr-4`}>
                    <resource.icon className={`h-5 w-5 ${resource.color}`} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyber-text-secondary">
                      {resource.category} • {resource.type}
                    </span>
                    <h3 className="font-cyber text-lg">{resource.title}</h3>
                  </div>
                </div>
                <p className="text-cyber-text-secondary mb-4">{resource.description}</p>
                <Button variant="ghost" className="w-full justify-start text-cyber-blue p-0 h-auto hover:bg-transparent hover:underline">
                  View Resource
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="medieval" size="lg">
              View All Resources
            </Button>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
