import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import { TracingBeam } from "../aceternity/TracingBeam";
import { PROCESS_HEADING, PROCESS_STEPS } from "../../constants";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24 relative section-glow"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary-dim text-xs text-content-primary mb-6">
            {PROCESS_HEADING.badge}
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-content-primary mb-4">
            {PROCESS_HEADING.title}
          </h2>
          <p className="text-content-secondary text-lg max-w-2xl mx-auto">
            {PROCESS_HEADING.subtitle}
          </p>
        </motion.div>

        {/* Steps with tracing beam */}
        <TracingBeam>
          <div className="space-y-16">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = Icons[step.icon] || Icons.Zap;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Step number background */}
                  <span className="absolute -left-4 md:-left-16 top-0 font-display font-extrabold text-6xl md:text-8xl gradient-text opacity-10 select-none">
                    {step.step}
                  </span>

                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "var(--color-primary-dim)" }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-content-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-content-secondary leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
