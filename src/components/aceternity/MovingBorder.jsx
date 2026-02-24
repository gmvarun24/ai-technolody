"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}) => {
  return (
    <Component
      className={cn(
        "relative h-12 overflow-hidden p-[1px] rounded-full",
        containerClassName,
      )}
      {...otherProps}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-full" style={{ padding: "1px" }}>
        <motion.div
          className={cn("absolute inset-[-100%] rounded-full", borderClassName)}
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, var(--color-primary) 20%, var(--color-secondary) 40%, transparent 50%)`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "relative flex items-center justify-center w-full h-full rounded-full px-6 py-2 text-sm font-medium antialiased",
          className,
        )}
        style={{ background: "var(--surface-raised)" }}
      >
        {children}
      </div>
    </Component>
  );
};
