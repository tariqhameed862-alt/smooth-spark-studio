import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About", "Careers", "Blog", "Press"],
    Services: ["Cloud Solutions", "Development", "Consulting", "Support"],
    Resources: ["Documentation", "Help Center", "Community", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Compliance"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-2xl font-bold">
              <span className="gradient-text">TechFlow</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming businesses with innovative technology solutions since 2020.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} TechFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
