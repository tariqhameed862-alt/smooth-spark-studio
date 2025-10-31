import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Web Development", href: "/services/web-development", description: "Custom web applications and responsive websites" },
    { name: "Mobile Development", href: "/services/mobile-development", description: "Native and cross-platform mobile apps" },
    { name: "CRM Development", href: "/services/crm-development", description: "Customer relationship management solutions" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass-card border-b border-border/30"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="text-2xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="gradient-text">TechFlow</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {serviceLinks.map((service) => (
                        <li key={service.name}>
                          <Link to={service.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks.map((link, index) => (
              <Link key={link.name} to={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group cursor-pointer"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"
                  />
                </motion.div>
              </Link>
            ))}
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="hero" size="sm">Get Started</Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 space-y-4">
                <div className="space-y-2">
                  <div className="font-semibold text-sm text-muted-foreground px-2">Services</div>
                  {serviceLinks.map((service, index) => (
                    <Link key={service.name} to={service.href}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="block text-foreground/80 hover:text-primary transition-colors duration-300 py-2 px-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>
                {navLinks.map((link, index) => (
                  <Link key={link.name} to={link.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + serviceLinks.length) * 0.1 }}
                      className="block text-foreground/80 hover:text-primary transition-colors duration-300 py-2 px-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                ))}
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
