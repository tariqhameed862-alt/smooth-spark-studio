import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative overflow-hidden group"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 0 : 180,
            scale: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="h-5 w-5" />
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
