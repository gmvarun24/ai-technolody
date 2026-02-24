import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import { USE_CASES_HEADING, USE_CASES } from "../../constants";

// Gradient colors for each use case card
const CARD_GRADIENTS = [
  { from: "rgba(6, 182, 212, 0.12)", to: "rgba(6, 182, 212, 0.02)" },
  { from: "rgba(129, 140, 248, 0.12)", to: "rgba(129, 140, 248, 0.02)" },
  { from: "rgba(34, 211, 238, 0.12)", to: "rgba(34, 211, 238, 0.02)" },
  { from: "rgba(167, 139, 250, 0.12)", to: "rgba(167, 139, 250, 0.02)" },
  { from: "rgba(6, 182, 212, 0.12)", to: "rgba(6, 182, 212, 0.02)" },
  { from: "rgba(129, 140, 248, 0.12)", to: "rgba(129, 140, 248, 0.02)" },
];

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="use-cases"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24 relative"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, transparent 0%, var(--surface-raised) 50%, transparent 100%)`,
          opacity: 0.3,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary-dim text-xs font-bold text-content-primary mb-6">
            {USE_CASES_HEADING.badge}
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-content-primary mb-4">
            {USE_CASES_HEADING.title}
          </h2>
          <p className="text-content-secondary text-lg max-w-2xl mx-auto">
            {USE_CASES_HEADING.subtitle}
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {USE_CASES.map((useCase, idx) => {
            const Icon = Icons[useCase.icon] || Icons.Zap;
            const gradient = CARD_GRADIENTS[idx % CARD_GRADIENTS.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative rounded-2xl border border-border p-6 cursor-pointer transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 40px var(--color-primary-dim)",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: "var(--color-primary-dim)" }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-content-primary text-base group-hover:text-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-content-secondary text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
