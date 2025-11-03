import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const VideoShowcase = () => {
  const features = [
    "Cloud-Native Architecture",
    "Microservices Design",
    "AI Integration",
    "Real-Time Analytics",
    "Enterprise Security",
    "Scalable Infrastructure",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Our <span className="gradient-text">Solutions</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how we transform businesses with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card overflow-hidden group cursor-pointer">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/50 group-hover:shadow-primary/70 transition-all duration-500"
                >
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </motion.div>
                
                {/* Animated pulse rings */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 rounded-full border-2 border-primary" />
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Platform Demo</h3>
                <p className="text-muted-foreground">
                  Discover how our enterprise solutions drive digital transformation
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                Enterprise-Grade <span className="gradient-text">Technology</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Our platform is built on cutting-edge technologies that ensure scalability, security, and performance.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg glass-card-hover"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                    <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="w-full group">
              Schedule a Live Demo
              <Play className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;