import { motion } from "framer-motion";

const ClientLogos = () => {
  const clients = [
    { name: "TechCorp", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=TechCorp" },
    { name: "InnovateLabs", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=InnovateLabs" },
    { name: "DataFlow", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=DataFlow" },
    { name: "CloudSync", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=CloudSync" },
    { name: "DigitalWave", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=DigitalWave" },
    { name: "SmartSolutions", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=SmartSolutions" },
    { name: "FutureTech", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=FutureTech" },
    { name: "NexGen", logo: "https://api.dicebear.com/7.x/shapes/svg?seed=NexGen" },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center">
          Trusted by <span className="gradient-text">Leading Companies</span>
        </h3>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex gap-16 items-center py-8"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto object-contain filter brightness-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
