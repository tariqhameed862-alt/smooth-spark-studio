import { motion } from "framer-motion";

const TechSvgBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Circuit Board Pattern */}
      <svg className="absolute top-10 left-10 w-64 h-64" viewBox="0 0 200 200">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <circle cx="30" cy="30" r="3" fill="hsl(var(--primary))" />
          <circle cx="80" cy="30" r="3" fill="hsl(var(--secondary))" />
          <circle cx="130" cy="30" r="3" fill="hsl(var(--accent))" />
          <circle cx="30" cy="80" r="3" fill="hsl(var(--accent))" />
          <circle cx="80" cy="80" r="3" fill="hsl(var(--primary))" />
          <circle cx="130" cy="80" r="3" fill="hsl(var(--secondary))" />
          
          <motion.line
            x1="30" y1="30" x2="80" y2="30"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="80" y1="30" x2="130" y2="30"
            stroke="hsl(var(--secondary))"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="30" y1="30" x2="30" y2="80"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="80" y1="30" x2="80" y2="80"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.g>
      </svg>

      {/* Geometric Tech Shape */}
      <svg className="absolute top-1/4 right-20 w-96 h-96" viewBox="0 0 400 400">
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.polygon
            points="200,50 300,150 250,280 150,280 100,150"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.polygon
            points="200,80 280,160 240,260 160,260 120,160"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 0.8, opacity: 0.3 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.g>
      </svg>

      {/* Data Flow Lines */}
      <svg className="absolute bottom-20 left-1/4 w-64 h-64" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M 10 100 Q 50 50, 100 100 T 190 100"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 10 120 Q 50 170, 100 120 T 190 120"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 10 140 Q 50 90, 100 140 T 190 140"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Grid Pattern */}
      <svg className="absolute bottom-1/4 right-10 w-80 h-80" viewBox="0 0 300 300">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <motion.rect
              width="30"
              height="30"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </pattern>
        </defs>
        <rect width="300" height="300" fill="url(#grid)" />
        
        {/* Glowing nodes on grid */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx={60 + i * 60}
            cy={60 + i * 40}
            r="4"
            fill="hsl(var(--secondary))"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.6] }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>

      {/* Hexagon Tech Pattern */}
      <svg className="absolute top-1/2 left-10 w-72 h-72" viewBox="0 0 250 250">
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.path
              key={i}
              d={`M ${125 + 60 * Math.cos((angle * Math.PI) / 180)} ${
                125 + 60 * Math.sin((angle * Math.PI) / 180)
              } L ${125 + 80 * Math.cos((angle * Math.PI) / 180)} ${
                125 + 80 * Math.sin((angle * Math.PI) / 180)
              }`}
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          <motion.circle
            cx="125"
            cy="125"
            r="40"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{ scale: 1.2, opacity: 0.8 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default TechSvgBackground;
