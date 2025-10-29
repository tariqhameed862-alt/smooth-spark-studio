import { motion } from "framer-motion";

interface TechIllustrationProps {
  variant?: "circuit" | "data" | "network" | "code";
  className?: string;
}

const TechIllustration = ({ variant = "circuit", className = "" }: TechIllustrationProps) => {
  if (variant === "circuit") {
    return (
      <svg className={`w-full h-full ${className}`} viewBox="0 0 400 400">
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(180 85% 55%)" />
            <stop offset="100%" stopColor="hsl(280 70% 60%)" />
          </linearGradient>
        </defs>
        
        {/* Circuit board paths */}
        <motion.path
          d="M 50 200 L 150 200 L 150 100 L 250 100"
          stroke="url(#circuitGrad)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 50 250 L 100 250 L 100 300 L 200 300"
          stroke="url(#circuitGrad)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Circuit nodes */}
        {[
          { x: 50, y: 200 },
          { x: 150, y: 200 },
          { x: 150, y: 100 },
          { x: 250, y: 100 },
          { x: 100, y: 250 },
          { x: 200, y: 300 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="6"
            fill="hsl(320 75% 65%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 * i, duration: 0.5 }}
          >
            <animate
              attributeName="r"
              values="6;9;6"
              dur="2s"
              repeatCount="indefinite"
            />
          </motion.circle>
        ))}
      </svg>
    );
  }

  if (variant === "data") {
    return (
      <svg className={`w-full h-full ${className}`} viewBox="0 0 400 400">
        <defs>
          <linearGradient id="dataGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(280 70% 60%)" />
            <stop offset="100%" stopColor="hsl(320 75% 65%)" />
          </linearGradient>
        </defs>
        
        {/* Data bars */}
        {[80, 140, 200, 260, 320].map((x, i) => (
          <motion.rect
            key={i}
            x={x - 20}
            y={350 - (i + 1) * 40}
            width="30"
            height={(i + 1) * 40}
            fill="url(#dataGrad)"
            opacity="0.6"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            style={{ transformOrigin: "bottom" }}
          />
        ))}
        
        {/* Connection line */}
        <motion.path
          d="M 70 310 L 130 270 L 190 230 L 250 190 L 310 150"
          stroke="hsl(180 85% 55%)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </svg>
    );
  }

  if (variant === "network") {
    return (
      <svg className={`w-full h-full ${className}`} viewBox="0 0 400 400">
        <defs>
          <radialGradient id="networkGrad">
            <stop offset="0%" stopColor="hsl(180 85% 55%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(280 70% 60%)" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        
        {/* Central node */}
        <motion.circle
          cx="200"
          cy="200"
          r="15"
          fill="url(#networkGrad)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Outer nodes and connections */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 200 + 120 * Math.cos((angle * Math.PI) / 180);
          const y = 200 + 120 * Math.sin((angle * Math.PI) / 180);
          
          return (
            <g key={i}>
              <motion.line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="hsl(180 85% 55%)"
                strokeWidth="2"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r="10"
                fill="hsl(320 75% 65%)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 + 0.5, duration: 0.5 }}
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            </g>
          );
        })}
      </svg>
    );
  }

  // code variant
  return (
    <svg className={`w-full h-full ${className}`} viewBox="0 0 400 400">
      <defs>
        <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(180 85% 55%)" />
          <stop offset="50%" stopColor="hsl(280 70% 60%)" />
          <stop offset="100%" stopColor="hsl(320 75% 65%)" />
        </linearGradient>
      </defs>
      
      {/* Code brackets */}
      <motion.path
        d="M 100 150 L 80 200 L 100 250"
        stroke="url(#codeGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M 300 150 L 320 200 L 300 250"
        stroke="url(#codeGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Code lines */}
      {[170, 200, 230].map((y, i) => (
        <motion.line
          key={i}
          x1="140"
          y1={y}
          x2="260"
          y2={y}
          stroke="hsl(180 85% 55%)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
          style={{ transformOrigin: "center" }}
        />
      ))}
    </svg>
  );
};

export default TechIllustration;
