"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto", className)}
    >
      {/* Beam line */}
      <div className="absolute left-8 top-3 bottom-0 hidden md:block">
        {/* Background track */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-surface-overlay" />

        {/* Animated beam */}
        <motion.div
          className="absolute top-0 w-[2px] origin-top"
          style={{
            height: y2,
            opacity,
            background: `linear-gradient(to bottom, var(--color-primary), var(--color-secondary), transparent)`,
          }}
        />

        {/* Dot at top */}
        <motion.div
          className="absolute -left-[5px] top-0 h-3 w-3 rounded-full border-2"
          style={{
            borderColor: "var(--color-primary)",
            background: "var(--surface-page)",
            opacity,
          }}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative md:pl-20">
        {children}
      </div>
    </motion.div>
  );
};
