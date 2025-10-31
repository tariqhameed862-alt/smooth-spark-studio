import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Frontend",
      color: "from-primary to-secondary",
      techs: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      color: "from-secondary to-accent",
      techs: ["Node.js", "Python", "Java", "PHP", "Go", "Ruby", "Express.js"]
    },
    {
      title: "Mobile",
      color: "from-accent to-primary",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"]
    },
    {
      title: "Database",
      color: "from-primary to-accent",
      techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "DynamoDB"]
    },
    {
      title: "Cloud & DevOps",
      color: "from-secondary to-primary",
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      title: "AI & ML",
      color: "from-accent to-secondary",
      techs: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "Computer Vision"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies we use to build world-class solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass-card p-6 rounded-2xl h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-4">
                  <div className={`inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-br ${category.color} text-primary-foreground font-semibold shadow-lg`}>
                    {category.title}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.techs.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-xs px-3 py-1 cursor-default hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
