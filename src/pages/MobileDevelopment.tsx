import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Smartphone, Zap, Users, Shield, Cloud, Code, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TechSvgBackground from "@/components/TechSvgBackground";

const MobileDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Native Performance",
      description: "Harness the full power of device capabilities including camera, GPS, sensors, and notifications for smooth, responsive experiences."
    },
    {
      icon: Zap,
      title: "Agile Development",
      description: "Rapid prototyping with React Native and Flutter, continuous delivery, and iterative development to bring your ideas to market quickly."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Built with OAuth 2.0, biometric authentication, encrypted storage, and compliance with GDPR, HIPAA, and app store requirements."
    },
    {
      icon: Users,
      title: "Exceptional UX/UI",
      description: "Intuitive interfaces with Material Design (Android) and Human Interface Guidelines (iOS), ensuring native look and feel."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless backend integration with Firebase, AWS Amplify, or custom APIs with real-time synchronization and offline capabilities."
    },
    {
      icon: Code,
      title: "Cross-Platform Excellence",
      description: "Build once, deploy everywhere with 95%+ code reuse across iOS and Android using React Native or Flutter frameworks."
    }
  ];

  const services = [
    {
      title: "Custom App Development",
      description: "End-to-end mobile application development from concept to deployment, tailored to your specific business needs and requirements."
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with user research, wireframing, prototyping, and usability testing for optimal engagement."
    },
    {
      title: "App Modernization",
      description: "Upgrading legacy applications with modern frameworks, improved performance, new features, and enhanced security measures."
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support with bug fixes, performance monitoring, OS updates, feature enhancements, and 24/7 technical assistance."
    }
  ];

  const platforms = [
    { name: "iOS", icon: Smartphone, description: "Native iOS apps with Swift" },
    { name: "Android", icon: Smartphone, description: "Native Android with Kotlin" },
    { name: "React Native", icon: Zap, description: "Cross-platform development" },
    { name: "Flutter", icon: Zap, description: "Beautiful native apps" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <TechSvgBackground />
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium">
                Mobile Development Services
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              Innovative <span className="gradient-text-secondary">Mobile Apps</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your ideas into powerful mobile applications that users love.
              Native and cross-platform solutions for iOS and Android.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mobile App <span className="gradient-text-secondary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for a successful mobile app
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card-hover h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 shadow-lg shadow-secondary/50">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Development <span className="gradient-text-secondary">Platforms</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="glass-card-hover group">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl">{platform.name}</CardTitle>
                      <p className="text-muted-foreground">{platform.description}</p>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text-secondary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mobile development solutions for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Apps Developed" },
              { number: "10M+", label: "Downloads" },
              { number: "4.8", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-accent/10 to-primary/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build Your <span className="gradient-text-secondary">Mobile App</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your vision into reality with our expert mobile development team
            </p>
            <Button size="lg" className="group">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileDevelopment;
