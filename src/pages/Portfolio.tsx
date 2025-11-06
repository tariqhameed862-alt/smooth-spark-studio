import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";
import TechSvgBackground from "@/components/TechSvgBackground";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "Mobile Development", "Enterprise Software", "Data Analytics", "IoT Solutions"];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive online shopping platform with real-time inventory management, secure payment gateway integration, and AI-powered product recommendations.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management solution with appointment scheduling, electronic health records, and telemedicine capabilities.",
      tech: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
      category: "Enterprise Software",
      gradient: "from-secondary/20 to-accent/20",
    },
    {
      title: "Fintech Mobile App",
      description: "Secure mobile banking application featuring biometric authentication, real-time transactions, and personal finance management.",
      tech: ["React Native", "Firebase", "Express", "Plaid"],
      category: "Mobile Development",
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced business intelligence platform with machine learning insights and predictive analytics.",
      tech: ["Angular", "Python", "TensorFlow", "AWS"],
      category: "Data Analytics",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "IoT Smart Home System",
      description: "Integrated smart home solution connecting multiple devices with voice control and automation rules.",
      tech: ["React", "MQTT", "Node.js", "Raspberry Pi"],
      category: "IoT Solutions",
      gradient: "from-secondary/20 to-primary/20",
    },
    {
      title: "Restaurant Management Suite",
      description: "Complete restaurant solution with POS, inventory management, online ordering, and analytics.",
      tech: ["Next.js", "PostgreSQL", "Redis", "Stripe"],
      category: "Enterprise Software",
      gradient: "from-accent/20 to-secondary/20",
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive fitness application with workout plans, nutrition tracking, and progress monitoring.",
      tech: ["Flutter", "Firebase", "TensorFlow Lite"],
      category: "Mobile Development",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tours, mortgage calculators, and agent dashboard.",
      tech: ["React", "Express", "MongoDB", "Mapbox"],
      category: "Web Development",
      gradient: "from-secondary/20 to-accent/20",
    },
    {
      title: "Logistics Dashboard",
      description: "Real-time logistics tracking system with route optimization and delivery management.",
      tech: ["Vue.js", "Node.js", "PostgreSQL", "Google Maps"],
      category: "Data Analytics",
      gradient: "from-accent/20 to-primary/20",
    },
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <TechSvgBackground />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our successful projects showcasing innovation, quality, and client satisfaction
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 flex-wrap justify-center"
            >
              <Filter className="w-5 h-5 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="glass-card-hover group h-full relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Project image placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl animate-pulse-glow" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                    </div>

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                          View Details
                          <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
