import { Check, Rocket, Shield, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Rocket,
      title: "Fast Deployment",
      description: "Get your solutions up and running quickly with our streamlined deployment process.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security measures to keep your data and operations protected.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow without limits with infrastructure that scales with your business.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 access to our team of experienced engineers and consultants.",
    },
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase productivity with automation",
    "Improve customer satisfaction",
    "Stay ahead of the competition",
    "Data-driven decision making",
    "Seamless integration with existing systems",
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-[120px] floating" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[120px]" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose <span className="gradient-text">TechFlow</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We combine innovation with reliability to deliver exceptional results
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="space-y-3 p-6 rounded-xl glass-card-hover relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative z-10 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-500">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold relative z-10">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground relative z-10">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Benefits List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="glass-card p-8 rounded-2xl border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="text-2xl font-bold mb-6 relative z-10">Business Benefits</h3>
              <ul className="space-y-4 relative z-10">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-primary/30">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-bold">Ready to Transform?</h3>
                <p className="text-muted-foreground">
                  Join hundreds of companies that trust us with their digital transformation
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background shadow-lg"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Trusted by 500+ clients</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
