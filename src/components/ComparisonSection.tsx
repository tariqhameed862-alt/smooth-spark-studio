import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const ComparisonSection = () => {
  const features = [
    { feature: "Custom Development", us: true, others: false },
    { feature: "24/7 Support", us: true, others: "Limited" },
    { feature: "Scalable Architecture", us: true, others: true },
    { feature: "Modern Tech Stack", us: true, others: "Varies" },
    { feature: "AI Integration", us: true, others: false },
    { feature: "Cloud-Native", us: true, others: "Varies" },
    { feature: "Security Audit", us: true, others: "Extra Cost" },
    { feature: "Performance Optimization", us: true, others: "Basic" },
    { feature: "Free Consultation", us: true, others: false },
    { feature: "Transparent Pricing", us: true, others: false },
    { feature: "Agile Methodology", us: true, others: true },
    { feature: "Post-Launch Support", us: "12 Months", others: "3 Months" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-text">Choose Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we compare to other development agencies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-card overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="col-span-1" />
                <CardTitle className="text-center">
                  <Badge className="text-base py-2 px-4">TechFlow</Badge>
                </CardTitle>
                <CardTitle className="text-center text-muted-foreground text-lg">
                  Others
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`grid grid-cols-3 gap-4 items-center p-4 ${
                    index % 2 === 0 ? "bg-background/50" : ""
                  } border-b border-border/50 last:border-0 hover:bg-primary/5 transition-colors`}
                >
                  <div className="col-span-1 font-medium">{item.feature}</div>
                  
                  <div className="text-center">
                    {typeof item.us === "boolean" ? (
                      item.us ? (
                        <div className="inline-flex w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center shadow-lg shadow-primary/30">
                          <Check className="w-5 h-5 text-primary-foreground" />
                        </div>
                      ) : (
                        <div className="inline-flex w-8 h-8 rounded-full bg-muted items-center justify-center">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )
                    ) : (
                      <Badge className="bg-gradient-to-r from-primary to-secondary">
                        {item.us}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-center">
                    {typeof item.others === "boolean" ? (
                      item.others ? (
                        <div className="inline-flex w-8 h-8 rounded-full bg-muted items-center justify-center">
                          <Check className="w-5 h-5 text-muted-foreground" />
                        </div>
                      ) : (
                        <div className="inline-flex w-8 h-8 rounded-full bg-muted items-center justify-center">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )
                    ) : (
                      <Badge variant="outline" className="text-muted-foreground">
                        {item.others}
                      </Badge>
                    )}
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;