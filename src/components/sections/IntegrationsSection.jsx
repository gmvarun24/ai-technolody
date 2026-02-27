import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plug, CheckCircle } from "lucide-react";
import { INTEGRATIONS } from "../../constants";

export default function IntegrationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 50%, var(--color-primary-dim), transparent)`,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary-dim text-xs font-bold text-content-primary mb-6">
            <Plug className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            Integrations
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-content-primary mb-4">
            {INTEGRATIONS.heading.title}
          </h2>
          <p className="text-content-secondary text-lg max-w-2xl mx-auto">
            {INTEGRATIONS.heading.subtitle}
          </p>
        </motion.div>

        {/* Integration Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {INTEGRATIONS.tools.map((tool, idx) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + idx * 0.04, duration: 0.4 }}
              className="group flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-surface-raised/50 hover:border-primary/30 hover:bg-primary-dim/30 transition-all duration-300 cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-content-secondary group-hover:text-content-primary transition-colors">
                {tool}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-content-muted text-sm mt-10"
        >
          + 100 more integrations available via API and custom connectors
        </motion.p>
      </div>
    </section>
  );
}
