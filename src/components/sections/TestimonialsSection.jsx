import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
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
        className="text-center mb-16 px-6"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary-dim text-xs text-content-primary mb-6">
          {TESTIMONIALS_HEADING.badge}
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-content-primary">
          {TESTIMONIALS_HEADING.title}
        </h2>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-4"
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
      >
        <InfiniteMovingCards
          items={secondHalf}
          direction="right"
          speed="normal"
          renderItem={(item) => <TestimonialCard item={item} />}
        />
      </motion.div>
    </section>
  );
}
