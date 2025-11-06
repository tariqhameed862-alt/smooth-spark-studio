import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Database, BarChart3, Mail, Phone, Calendar, FileText, Zap, Shield, Cloud, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TechSvgBackground from "@/components/TechSvgBackground";
import TechIllustration from "@/components/TechIllustration";

const CRMDevelopment = () => {
  const features = [
    {
      icon: Users,
      title: "Contact Management",
      description: "Centralize customer data with comprehensive contact profiles, interaction history, and smart segmentation."
    },
    {
      icon: Database,
      title: "Lead Management",
      description: "Track and nurture leads through the sales pipeline with automated workflows and scoring systems."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Gain insights with real-time dashboards, custom reports, and predictive analytics to drive decisions."
    },
    {
      icon: Mail,
      title: "Email Integration",
      description: "Sync emails, automate campaigns, and track engagement directly from your CRM platform."
    },
    {
      icon: Calendar,
      title: "Task & Calendar",
      description: "Manage appointments, set reminders, and automate follow-ups to never miss an opportunity."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Store, share, and collaborate on documents with version control and secure access."
    }
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks, notifications, and processes to boost team productivity."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with role-based access, audit trails, and compliance features."
    },
    {
      icon: Cloud,
      title: "Cloud-Based Solution",
      description: "Access your CRM anywhere with cloud deployment, ensuring scalability and reliability."
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Microsoft Dynamics", "Zoho CRM",
    "Mailchimp", "Google Workspace", "Slack", "QuickBooks"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <TechSvgBackground />
        <div className="absolute top-20 right-10 w-96 h-96 opacity-20">
          <TechIllustration variant="network" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="gradient-text font-semibold">CRM Development</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom CRM Solutions for <span className="gradient-text">Growing Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build stronger customer relationships with tailored CRM systems that streamline sales, marketing, and customer service operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg shadow-primary/50">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage customer relationships effectively
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card-hover h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg shadow-primary/50">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-64 h-64 opacity-20">
          <TechIllustration variant="data" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-level features to scale your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card-hover text-center h-full">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/50">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
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
              Seamless <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your favorite tools and platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                    >
                      <span className="font-medium text-center">{integration}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Customer Experience?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build a CRM solution tailored to your business needs
            </p>
            <Button size="lg" className="shadow-lg shadow-primary/50">
              Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRMDevelopment;
