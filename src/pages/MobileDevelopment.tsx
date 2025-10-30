import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Smartphone, Zap, Users, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechSvgBackground from "@/components/TechSvgBackground";

const MobileDevelopment = () => {
  const features = [
    "Native Performance",
    "Cross-Platform Support",
    "Offline Functionality",
    "Push Notifications",
    "Secure Payment Integration",
    "Real-time Updates",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card-hover h-full">
                  <CardContent className="p-6 flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-lg font-medium">{feature}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
