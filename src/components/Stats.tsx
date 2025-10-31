import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Users, Code, Trophy } from "lucide-react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { 
      icon: Users, 
      value: 500, 
      suffix: "+", 
      label: "Happy Clients",
      gradient: "from-primary to-secondary"
    },
    { 
      icon: Code, 
      value: 1200, 
      suffix: "+", 
      label: "Projects Completed",
      gradient: "from-secondary to-accent"
    },
    { 
      icon: Award, 
      value: 15, 
      suffix: "+", 
      label: "Years Experience",
      gradient: "from-accent to-primary"
    },
    { 
      icon: Trophy, 
      value: 50, 
      suffix: "+", 
      label: "Awards Won",
      gradient: "from-primary to-accent"
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our excellence and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="glass-card p-8 rounded-2xl text-center space-y-4 relative overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <CountUpAnimation 
                      end={stat.value} 
                      duration={2000}
                      isInView={isInView}
                      suffix={stat.suffix}
                    />
                    
                    <p className="text-sm text-muted-foreground font-medium mt-2">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CountUpAnimation = ({ 
  end, 
  duration, 
  isInView, 
  suffix = "" 
}: { 
  end: number; 
  duration: number; 
  isInView: boolean; 
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return (
    <div className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </div>
  );
};

export default Stats;
