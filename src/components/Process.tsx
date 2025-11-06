import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, PenTool, Code2, Rocket, CheckCircle, Users } from "lucide-react";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
      color: "from-primary to-secondary"
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Our design team creates intuitive interfaces and user experiences that align with your brand identity and user needs.",
      color: "from-secondary to-accent"
    },
    {
      icon: Code2,
      title: "Development",
      description: "We build scalable, high-performance solutions using cutting-edge technologies and best coding practices.",
      color: "from-accent to-primary"
    },
    {
      icon: CheckCircle,
      title: "Testing",
      description: "Rigorous quality assurance testing ensures your solution is bug-free, secure, and performs optimally across all platforms.",
      color: "from-primary to-accent"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "We deploy your solution with zero downtime and ensure a smooth transition to production environment.",
      color: "from-secondary to-primary"
    },
    {
      icon: Users,
      title: "Support",
      description: "Our dedicated support team provides ongoing maintenance, updates, and optimization to keep your solution running smoothly.",
      color: "from-accent to-secondary"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop view - alternating layout */}
          <div className="hidden md:block space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${isEven ? '' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <motion.div 
                    className="flex-1 space-y-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-3 gradient-text">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl relative z-10`}>
                      <Icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg`}>
                      {index + 1}
                    </div>
                    
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <motion.div 
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b ${step.color} origin-top`}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile view - vertical layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="flex gap-4">
                    {/* Icon column */}
                    <div className="relative flex flex-col items-center">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                      >
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-10`}>
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-primary-foreground font-bold text-xs shadow`}>
                          {index + 1}
                        </div>
                      </motion.div>
                      
                      {/* Connecting line */}
                      {index < steps.length - 1 && (
                        <motion.div 
                          initial={{ scaleY: 0 }}
                          animate={isInView ? { scaleY: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.15 }}
                          className={`w-1 flex-1 min-h-[60px] bg-gradient-to-b ${step.color} origin-top mt-2`}
                        />
                      )}
                    </div>

                    {/* Content column */}
                    <motion.div 
                      className="flex-1 pb-8"
                      whileHover={{ x: 5 }}
                    >
                      <div className="glass-card p-4 rounded-xl relative overflow-hidden group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        <div className="relative z-10">
                          <h3 className="text-lg font-bold mb-2 gradient-text">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
