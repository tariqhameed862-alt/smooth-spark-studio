import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Users, Award, TrendingUp, Globe, Zap } from "lucide-react";

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2014",
      icon: Rocket,
      title: "Company Founded",
      description: "Started with a vision to revolutionize digital solutions for businesses.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2016",
      icon: Users,
      title: "50+ Team Members",
      description: "Expanded our talented team to serve clients across multiple industries.",
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2018",
      icon: Globe,
      title: "Global Expansion",
      description: "Opened offices in 5 countries and served 200+ international clients.",
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2020",
      icon: Zap,
      title: "AI Integration",
      description: "Pioneered AI-powered solutions, becoming industry leaders in innovation.",
      color: "from-orange-500 to-red-500",
    },
    {
      year: "2022",
      icon: Award,
      title: "Industry Recognition",
      description: "Received multiple awards for excellence in technology and innovation.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      year: "2024",
      icon: TrendingUp,
      title: "500+ Projects",
      description: "Successfully delivered over 500 projects with 98% client satisfaction.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A decade of innovation, growth, and success
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass-card p-6 rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                      <div className={`inline-block mb-4 ${isLeft ? "md:float-right md:ml-4" : "md:float-left md:mr-4"}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="text-4xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative hidden md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${milestone.color} border-4 border-background shadow-lg`}
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${milestone.color} blur-sm`}
                    />
                  </div>

                  {/* Spacer for layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;