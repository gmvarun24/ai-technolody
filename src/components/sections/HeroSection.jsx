import {
  ArrowRight,
  Shield,
  Zap,
  Bot,
  BrainCircuit,
  Network,
  Cpu,
  CircuitBoard,
  Workflow,
  Database,
  Globe,
} from "lucide-react";
import { BackgroundBeams } from "../aceternity/BackgroundBeams";
import { TypewriterEffect } from "../aceternity/TypewriterEffect";
import { TextGenerateEffect } from "../aceternity/TextGenerateEffect";
import { MovingBorder } from "../aceternity/MovingBorder";
import { HERO } from "../../constants";
import { motion } from "framer-motion";

const BADGE_ICONS = {
  "Custom AI Solutions": BrainCircuit,
  "Rapid Deployment": Zap,
  "Enterprise Ready": Shield,
};

// Floating icons around the hero — AI-themed
const FLOATING_ICONS = [
  { Icon: BrainCircuit, x: "8%", y: "20%", size: 28, delay: 0, duration: 6 },
  { Icon: Bot, x: "88%", y: "25%", size: 24, delay: 0.5, duration: 7 },
  { Icon: Network, x: "12%", y: "65%", size: 22, delay: 1, duration: 5.5 },
  { Icon: Cpu, x: "85%", y: "70%", size: 26, delay: 1.5, duration: 6.5 },
  { Icon: CircuitBoard, x: "5%", y: "45%", size: 20, delay: 2, duration: 7.5 },
  { Icon: Zap, x: "92%", y: "48%", size: 18, delay: 0.8, duration: 5 },
  { Icon: Workflow, x: "18%", y: "82%", size: 20, delay: 1.2, duration: 6.8 },
  { Icon: Database, x: "80%", y: "85%", size: 22, delay: 1.8, duration: 5.8 },
];

// Neural network nodes
const NEURAL_NODES = Array.from({ length: 20 }, (_, i) => ({
  x: `${10 + Math.random() * 80}%`,
  y: `${10 + Math.random() * 80}%`,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 3,
  duration: 3 + Math.random() * 4,
}));

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Beams */}
      <BackgroundBeams className="z-0" />

      {/* Large gradient orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Top-left orb — cyan */}
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[100px]"
          style={{ background: "var(--color-primary)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Top-right orb — indigo */}
        <motion.div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.1] blur-[80px]"
          style={{ background: "var(--color-secondary)" }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        {/* Bottom-center orb — mixed */}
        <motion.div
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.12] blur-[120px]"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Center accent pulse */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-[0.06] blur-[60px]"
          style={{ background: "var(--color-accent, var(--color-primary))" }}
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] opacity-30 pointer-events-none z-[1]"
        style={{ background: "var(--gradient-radial)" }}
      />

      {/* Neural network dots */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block">
        {NEURAL_NODES.map((node, idx) => (
          <motion.div
            key={`node-${idx}`}
            className="absolute rounded-full"
            style={{
              left: node.x,
              top: node.y,
              width: node.size,
              height: node.size,
              background: "var(--color-primary)",
            }}
            animate={{
              opacity: [0, 0.3, 0.6, 0.3, 0],
              scale: [0.5, 1, 1.2, 1, 0.5],
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block">
        {FLOATING_ICONS.map(({ Icon, x, y, size, delay, duration }, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0.7, 0.4, 0],
              scale: [0.8, 1, 1.1, 1, 0.8],
              y: [0, -15, 0, 15, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="p-3 rounded-2xl backdrop-blur-sm border"
              style={{
                background: "var(--color-primary-glow)",
                borderColor: "var(--color-primary)",
                borderWidth: "1px",
              }}
            >
              <Icon
                style={{
                  width: size,
                  height: size,
                  color: "var(--color-primary)",
                }}
                strokeWidth={2}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24 md:py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary-dim mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm text-content-primary">{HERO.badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-content-primary leading-tight mb-6"
        >
          {HERO.headline} <br className="hidden sm:block" />
          <TypewriterEffect
            words={HERO.flipWords}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            typingSpeed={100}
            deletingSpeed={60}
            delayBetweenWords={2500}
          />
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <TextGenerateEffect
            words={HERO.subheadline}
            className="text-base md:text-lg leading-relaxed"
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <MovingBorder
            as="a"
            containerClassName="h-12"
            className="text-content-primary font-semibold px-8"
          >
            {HERO.primaryCta.label}
            <ArrowRight className="w-4 h-4 ml-2" />
          </MovingBorder>

          <a
            href={HERO.secondaryCta.href}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border text-content-secondary hover:text-content-primary hover:border-primary/30 transition-all text-sm font-medium group"
          >
            <Globe className="w-4 h-4 group-hover:text-primary transition-colors" />
            {HERO.secondaryCta.label}
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {HERO.trustBadges.map((badge) => {
            const Icon = BADGE_ICONS[badge] || Shield;
            return (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-xs text-content-muted"
              >
                <Icon className="w-3.5 h-3.5 text-primary/60" />
                {badge}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
