import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@techflow.com",
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      gradient: "from-secondary/20 to-accent/20",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "San Francisco, CA",
      gradient: "from-accent/20 to-primary/20",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your digital transformation? Get in touch with our team today
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid lg:grid-cols-3 gap-8 mb-12"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colors = [
                { bg: "bg-primary" },
                { bg: "bg-secondary" },
                { bg: "bg-accent" },
              ];
              const colorScheme = colors[index % colors.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass-card-hover p-6 rounded-xl border border-border/50 text-center space-y-3 relative overflow-hidden group"
                >
                  <div className={`w-14 h-14 rounded-full ${colorScheme.bg} flex items-center justify-center mx-auto relative z-10 transition-all duration-500`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold relative z-10">{info.title}</h3>
                  <p className="text-muted-foreground relative z-10">{info.content}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-2xl border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="John Doe" className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300" />
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="How can we help?" className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <Button variant="gradient-accent" size="lg" className="w-full md:w-auto group">
                  Send Message
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
