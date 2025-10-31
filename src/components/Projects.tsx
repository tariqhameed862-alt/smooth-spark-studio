import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      description: "Comprehensive patient management solution with appointment scheduling, electronic health records, and telemedicine capabilities for modern healthcare providers.",
      tech: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
      category: "Enterprise Software",
      gradient: "from-secondary/20 to-accent/20",
    },
    {
      title: "Fintech Mobile App",
      description: "Secure mobile banking application featuring biometric authentication, real-time transactions, investment tracking, and personal finance management tools.",
      tech: ["React Native", "Firebase", "Express", "Plaid"],
      category: "Mobile Development",
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced business intelligence platform with machine learning insights, predictive analytics, and customizable reporting for data-driven decision making.",
      tech: ["Angular", "Python", "TensorFlow", "AWS"],
      category: "Data Analytics",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "IoT Smart Home System",
      description: "Integrated smart home solution connecting multiple devices with voice control, automation rules, energy monitoring, and mobile app management.",
      tech: ["React", "MQTT", "Node.js", "Raspberry Pi"],
      category: "IoT Solutions",
      gradient: "from-secondary/20 to-primary/20",
    },
    {
      title: "Social Media Platform",
      description: "Next-generation social networking application with real-time messaging, content sharing, AI content moderation, and advanced privacy controls.",
      tech: ["Next.js", "GraphQL", "Redis", "Cloudflare"],
      category: "Social Media",
      gradient: "from-accent/20 to-secondary/20",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="absolute top-0 left-0 w-full h-full mesh-gradient opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and innovation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="h-full"
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
                        <p className="text-sm text-muted-foreground line-clamp-3">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/portfolio">
            <Button size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
