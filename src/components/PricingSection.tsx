import { motion } from "framer-motion";
import { Check, Zap, Building2, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$2,999",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Custom Web Application",
        "Responsive Design",
        "Basic SEO Optimization",
        "3 Months Support",
        "Cloud Deployment",
        "Analytics Integration",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      icon: Building2,
      price: "$7,999",
      period: "per project",
      description: "For growing businesses with advanced needs",
      features: [
        "Everything in Starter",
        "Advanced Features",
        "Mobile App Development",
        "6 Months Support",
        "API Integration",
        "Advanced Analytics",
        "Database Design",
        "User Authentication",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "Custom",
      period: "tailored pricing",
      description: "Large-scale solutions for enterprises",
      features: [
        "Everything in Professional",
        "Unlimited Revisions",
        "12 Months Support",
        "Microservices Architecture",
        "AI/ML Integration",
        "DevOps Setup",
        "24/7 Monitoring",
        "Dedicated Team",
        "SLA Guarantee",
      ],
      popular: false,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] floating" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include our commitment to quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={plan.popular ? "md:-mt-4 md:mb-4" : ""}
              >
                <Card className={`glass-card-hover h-full flex flex-col relative overflow-hidden ${plan.popular ? "border-primary shadow-2xl shadow-primary/20" : ""}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground text-center py-2 text-sm font-semibold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <CardHeader className={plan.popular ? "pt-12" : ""}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period !== "tailored pricing" && <span className="text-muted-foreground">+</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass-card max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-6 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">✓</Badge>
                  <span className="text-sm">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">✓</Badge>
                  <span className="text-sm">Flexible Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">✓</Badge>
                  <span className="text-sm">Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">✓</Badge>
                  <span className="text-sm">Free Consultation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;