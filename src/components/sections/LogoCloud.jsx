import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InfiniteMovingCards } from "../aceternity/InfiniteMovingCards";
import { LOGO_CLOUD } from "../../constants";

export default function LogoCloud() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-xs uppercase tracking-[0.2em] text-content-muted mb-8">
          {LOGO_CLOUD.label}
        </p>

        <InfiniteMovingCards
          items={LOGO_CLOUD.logos}
          direction="left"
          speed="slow"
          renderItem={(item) => (
            <div className="flex items-center gap-2 px-8 py-3 rounded-full border border-border bg-surface-raised/50 opacity-50 hover:opacity-100 transition-opacity">
              <span className="text-sm font-semibold text-content-secondary tracking-wide">
                {item.name}
              </span>
            </div>
          )}
        />
      </motion.div>
    </section>
  );
}
