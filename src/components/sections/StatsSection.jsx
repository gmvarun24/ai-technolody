import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "../../constants";

function AnimatedValue({ value, isInView }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    // Extract numeric part for animation
    const numericMatch = value.match(/[\d,]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    const numStr = numericMatch[0].replace(/,/g, "");
    const target = parseInt(numStr, 10);
    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    let current = 0;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      const formatted = Math.round(current).toLocaleString();
      setDisplayValue(
        value
          .replace(numStr, formatted)
          .replace(/,/g, "")
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
      );
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span>{displayValue}</span>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center relative"
            >
              {/* Separator */}
              {idx > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 hidden md:block"
                  style={{
                    background: `linear-gradient(to bottom, transparent, var(--surface-border), transparent)`,
                  }}
                />
              )}
              <div className="text-3xl md:text-4xl font-display font-extrabold gradient-text mb-2">
                <AnimatedValue value={stat.value} isInView={isInView} />
              </div>
              <p className="text-sm text-content-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
