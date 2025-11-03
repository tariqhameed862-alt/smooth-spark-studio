import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code, Database, Lock, Smartphone, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TechIllustration from "./TechIllustration";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for seamless business operations.",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Tailored web solutions built with cutting-edge technologies to meet your unique needs.",
      gradient: "from-secondary/20 to-accent/20",
      link: "/services/web-development",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization.",
      gradient: "from-accent/20 to-primary/20",
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and maintain compliance.",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      gradient: "from-secondary/20 to-primary/20",
      link: "/services/mobile-development",
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Leverage artificial intelligence to automate processes and drive innovation.",
      gradient: "from-accent/20 to-secondary/20",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      {/* Tech Illustrations */}
      <motion.div 
        className="absolute top-10 right-10 w-64 h-64 opacity-20"
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <TechIllustration variant="network" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-10 w-64 h-64 opacity-20"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <TechIllustration variant="circuit" />
      </motion.div>

      <motion.div 
        className="absolute top-1/2 right-1/4 w-56 h-56 opacity-15"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{ 
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <TechIllustration variant="data" />
      </motion.div>

      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-52 h-52 opacity-12"
        animate={{ 
          rotate: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <TechIllustration variant="code" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card className="glass-card-hover group h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/50">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground mb-4">
                      {service.description}
                    </CardDescription>
                    {service.link && (
                      <Link to={service.link}>
                        <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
