import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Users, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import TechSvgBackground from "@/components/TechSvgBackground";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      client: "RetailCo Global",
      industry: "Retail",
      challenge: "Legacy system limiting growth and customer experience",
      solution: "Built scalable cloud-native platform with microservices architecture",
      results: [
        { metric: "300%", label: "Increase in Sales" },
        { metric: "50%", label: "Faster Load Times" },
        { metric: "99.9%", label: "Uptime Achieved" },
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Healthcare Management System",
      client: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Disconnected systems causing inefficiencies in patient care",
      solution: "Integrated healthcare platform with real-time data synchronization",
      results: [
        { metric: "60%", label: "Time Saved" },
        { metric: "95%", label: "Patient Satisfaction" },
        { metric: "40%", label: "Cost Reduction" },
      ],
      technologies: ["React Native", "Python", "Azure", "MongoDB"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "FinTech Mobile Banking App",
      client: "NeoBank",
      industry: "Financial Services",
      challenge: "Need for secure, user-friendly mobile banking experience",
      solution: "Native mobile apps with biometric authentication and real-time processing",
      results: [
        { metric: "1M+", label: "Active Users" },
        { metric: "4.8", label: "App Store Rating" },
        { metric: "85%", label: "User Retention" },
      ],
      technologies: ["Flutter", "Firebase", "Stripe", "Cloud Functions"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "AI-Powered CRM Platform",
      client: "SalesTech Inc",
      industry: "SaaS",
      challenge: "Manual processes slowing down sales team productivity",
      solution: "AI-driven CRM with predictive analytics and workflow automation",
      results: [
        { metric: "200%", label: "Sales Increase" },
        { metric: "70%", label: "Time Saved" },
        { metric: "150%", label: "ROI" },
      ],
      technologies: ["Vue.js", "TensorFlow", "GCP", "Redis"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Supply Chain Optimization",
      client: "LogiFlow Corp",
      industry: "Logistics",
      challenge: "Lack of visibility and inefficiencies in supply chain",
      solution: "IoT-enabled tracking system with predictive analytics dashboard",
      results: [
        { metric: "45%", label: "Cost Savings" },
        { metric: "99%", label: "Tracking Accuracy" },
        { metric: "30%", label: "Faster Delivery" },
      ],
      technologies: ["Angular", "IoT", "Kafka", "Elasticsearch"],
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "EdTech Learning Platform",
      client: "EduFuture",
      industry: "Education",
      challenge: "Engaging remote students and tracking learning outcomes",
      solution: "Interactive platform with gamification and adaptive learning",
      results: [
        { metric: "500K+", label: "Students" },
        { metric: "92%", label: "Completion Rate" },
        { metric: "4.7", label: "Satisfaction Score" },
      ],
      technologies: ["Next.js", "WebRTC", "MongoDB", "Socket.io"],
      color: "from-teal-500/20 to-green-500/20",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <TechSvgBackground />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-6"
            >
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm">Success Stories</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real results from real companies. See how we've helped businesses transform through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, value: "500+", label: "Projects Delivered" },
              { icon: TrendingUp, value: "98%", label: "Success Rate" },
              { icon: BarChart3, value: "$50M+", label: "Revenue Generated" },
              { icon: Award, value: "15+", label: "Industry Awards" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card-hover h-full flex flex-col overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge variant="outline">{study.client}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-4">{study.title}</CardTitle>
                    
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="font-semibold text-primary">Challenge: </span>
                        <span className="text-muted-foreground">{study.challenge}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-secondary">Solution: </span>
                        <span className="text-muted-foreground">{study.solution}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 mt-auto">
                    {/* Results */}
                    <div>
                      <h4 className="font-semibold mb-4">Key Results:</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center p-3 rounded-lg bg-background/50">
                            <div className="text-2xl font-bold gradient-text mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full group">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve similar results
            </p>
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;