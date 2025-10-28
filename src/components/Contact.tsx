import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@techflow.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "San Francisco, CA",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your digital transformation? Get in touch with our team today
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl border border-border/50 text-center space-y-3 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{info.title}</h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl border border-border/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="John Doe" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="How can we help?" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-background/50"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
