import { Check, Rocket, Shield, TrendingUp, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Fast Deployment",
      description: "Get your solutions up and running quickly with our streamlined deployment process.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security measures to keep your data and operations protected.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow without limits with infrastructure that scales with your business.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 access to our team of experienced engineers and consultants.",
    },
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase productivity with automation",
    "Improve customer satisfaction",
    "Stay ahead of the competition",
    "Data-driven decision making",
    "Seamless integration with existing systems",
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose <span className="gradient-text">TechFlow</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We combine innovation with reliability to deliver exceptional results
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="space-y-3 p-6 rounded-lg glass-card border border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-bold mb-6">Business Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Ready to Transform?</h3>
                <p className="text-muted-foreground">
                  Join hundreds of companies that trust us with their digital transformation
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Trusted by 500+ clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
