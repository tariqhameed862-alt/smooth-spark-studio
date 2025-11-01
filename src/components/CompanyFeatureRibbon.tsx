import { motion } from "framer-motion";
import { Award, Users, Code, Zap, Shield, TrendingUp } from "lucide-react";

const CompanyFeatureRibbon = () => {
  const features = [
    { icon: Award, text: "Award-Winning Solutions" },
    { icon: Users, text: "500+ Happy Clients" },
    { icon: Code, text: "1000+ Projects Delivered" },
    { icon: Zap, text: "Lightning Fast Development" },
    { icon: Shield, text: "100% Secure & Reliable" },
    { icon: TrendingUp, text: "Industry Leading Expertise" },
    { icon: Award, text: "ISO Certified Company" },
    { icon: Users, text: "24/7 Customer Support" },
  ];

  // Duplicate features for seamless loop
  const duplicatedFeatures = [...features, ...features];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary py-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <motion.div
        className="flex gap-12 items-center"
        animate={{
          x: [0, -50 + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 text-white whitespace-nowrap"
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold text-sm">{feature.text}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CompanyFeatureRibbon;
