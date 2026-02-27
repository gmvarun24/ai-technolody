import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Lock } from "lucide-react";
import { InfiniteMovingCards } from "../aceternity/InfiniteMovingCards";
import { TESTIMONIALS_HEADING, TESTIMONIALS } from "../../constants";

function TestimonialCard({ item }) {
  return (
    <div className="card-surface px-6 py-5 w-[380px] max-w-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-content-secondary text-sm leading-relaxed flex-1 mb-4">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-border">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-content-primary"
          style={{ background: "var(--color-primary-dim)" }}
        >
          {item.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-content-primary">
            {item.name}
          </p>
          <p className="text-xs text-content-muted">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const firstHalf = TESTIMONIALS.slice(0, Math.ceil(TESTIMONIALS.length / 2));
  const secondHalf = TESTIMONIALS.slice(Math.ceil(TESTIMONIALS.length / 2));

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6 relative z-20"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary-dim text-xs font-bold text-content-primary">
          {TESTIMONIALS_HEADING.badge}
        </span>
      </motion.div>

      {/* Blurred "Coming Soon" Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pt-32">
        {/* Backdrop blur layer */}
        <div className="absolute inset-0 backdrop-blur-[4px] bg-surface-page/50" />

        {/* Coming Soon Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          className="relative z-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 px-8 py-4 rounded-full border border-primary/30 bg-surface-raised shadow-2xl backdrop-blur-md">
            <Lock className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-lg md:text-xl text-content-primary tracking-wide uppercase">
              Coming Soon
            </span>
          </div>
          <p className="mt-4 text-sm font-medium text-content-primary/80 bg-surface-page/80 px-4 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
            We will be back soon with amazing stories.
          </p>
        </motion.div>
      </div>

      {/* Background Content (Blurred) */}
      <div className="relative opacity-40 mix-blend-luminosity select-none pointer-events-none">
        {/* Row 1 — scrolls left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 blur-[2px]"
        >
          <InfiniteMovingCards
            items={firstHalf}
            direction="left"
            speed="normal"
            renderItem={(item) => <TestimonialCard item={item} />}
          />
        </motion.div>

        {/* Row 2 — scrolls right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="blur-[2px]"
        >
          <InfiniteMovingCards
            items={secondHalf}
            direction="right"
            speed="normal"
            renderItem={(item) => <TestimonialCard item={item} />}
          />
        </motion.div>
      </div>
    </section>
  );
}
