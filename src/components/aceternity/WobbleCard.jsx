"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const WobbleCard = ({ children, className, containerClassName }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className={cn("relative overflow-hidden rounded-2xl", containerClassName)}
    >
      <motion.div
        className="relative h-full [transform-style:preserve-3d] [backface-visibility:hidden]"
        animate={{
          rotateX: isHovering ? -(mousePosition.y - 150) / 20 : 0,
          rotateY: isHovering ? (mousePosition.x - 200) / 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div
          className={cn("h-full card-surface p-6 sm:p-8 relative", className)}
        >
          {/* Glow effect on hover */}
          {isHovering && (
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0"
              animate={{ opacity: 0.15 }}
              style={{
                background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-primary), transparent 40%)`,
              }}
            />
          )}
          {children}
        </div>
      </motion.div>
    </motion.section>
  );
};
