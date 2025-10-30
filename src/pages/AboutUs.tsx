import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import TechSvgBackground from "@/components/TechSvgBackground";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that drive growth and success in the digital age."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of passionate professionals dedicated to delivering excellence in every project we undertake."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, innovation, and client satisfaction are at the core of everything we do."
    },
    {
      icon: Zap,
      title: "Our Approach",
      description: "Agile methodologies combined with cutting-edge technology to deliver results that exceed expectations."
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "50+", label: "Team Members" },
    { value: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <TechSvgBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">TechFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are a team of innovators, designers, and developers committed to transforming your digital vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2014, TechFlow began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service digital agency.
                </p>
                <p>
                  Over the years, we've worked with startups, SMEs, and Fortune 500 companies across various industries. Our experience spans web development, mobile applications, cloud solutions, and emerging technologies like AI and blockchain.
                </p>
                <p>
                  Today, we're proud to be recognized as a leader in digital innovation, but we haven't forgotten our roots. We still approach every project with the same dedication and attention to detail that defined our early days.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Drives <span className="gradient-text">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every solution we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card-hover h-full">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg shadow-primary/50">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented individuals working together to create exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", expertise: "Strategic Vision" },
              { name: "Michael Chen", role: "CTO", expertise: "Technical Architecture" },
              { name: "Emily Rodriguez", role: "Creative Director", expertise: "Design & UX" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card-hover text-center">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 shadow-lg shadow-primary/50" />
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
