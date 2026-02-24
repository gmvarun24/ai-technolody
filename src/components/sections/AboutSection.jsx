import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ABOUT } from "../../constants";
import { SpotlightEffect } from "../aceternity/SpotlightEffect";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (!ABOUT) return null;

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24 relative section-glow"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary-dim text-xs font-bold text-content-primary mb-6">
            {ABOUT.heading.badge}
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-content-primary mb-4">
            {ABOUT.heading.title}
          </h2>
          <p className="text-content-secondary text-lg max-w-2xl mx-auto">
            {ABOUT.heading.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ABOUT.content.map((paragraph, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative card-surface p-8 rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors"
            >
              <SpotlightEffect className="rounded-2xl" />
              <div className="relative z-10">
                <p className="text-content-secondary text-base leading-relaxed">
                  {paragraph}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
