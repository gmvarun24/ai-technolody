"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }) => {
  const svgRef = useRef(null);
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const generatePaths = () => {
      const newPaths = [];
      for (let i = 0; i < 12; i++) {
        const startX = Math.random() * 100;
        const startY = -10;
        const endX = 40 + Math.random() * 20;
        const endY = 100;
        const cp1X = startX + (Math.random() - 0.5) * 40;
        const cp1Y = 20 + Math.random() * 30;
        const cp2X = endX + (Math.random() - 0.5) * 20;
        const cp2Y = 50 + Math.random() * 30;
        newPaths.push(
          `M${startX} ${startY} C${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${endX} ${endY}`,
        );
      }
      setPaths(newPaths);
    };
    generatePaths();
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor="var(--color-primary)"
              stopOpacity="0"
            />
            <stop
              offset="50%"
              stopColor="var(--color-primary)"
              stopOpacity="0.12"
            />
            <stop
              offset="100%"
              stopColor="var(--color-primary)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#beam-gradient)"
            strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 4 + Math.random() * 4,
              delay: i * 0.4,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};
