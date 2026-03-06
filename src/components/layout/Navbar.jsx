import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../../lib/utils";
import { MovingBorder } from "../aceternity/MovingBorder";
import { BRAND, NAV_LINKS, NAV_CTA } from "../../constants";
import { useTheme } from "../../theme/useTheme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface-page/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <img
                src={BRAND.logo}
                alt={BRAND.name}
                className="w-14 h-14 rounded-xl object-contain"
              />
              <span className="font-display font-bold text-lg text-content-primary">
                {BRAND.name}
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-content-secondary hover:text-content-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop right side: Theme toggle + CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 rounded-xl border border-border bg-surface-raised flex items-center justify-center text-content-secondary hover:text-content-primary hover:border-primary/30 transition-all duration-300"
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <MovingBorder
                as="a"
                href={NAV_CTA.href}
                containerClassName="h-10"
                className="text-content-primary text-sm font-medium px-5"
              >
                {NAV_CTA.label}
              </MovingBorder>
            </div>

            {/* Mobile right side: theme toggle + hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-lg border border-border bg-surface-raised flex items-center justify-center text-content-secondary hover:text-content-primary transition-all"
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
              <button
                className="text-content-primary"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface-page/95 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-content-secondary hover:text-content-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={NAV_CTA.href}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center h-12 px-6 rounded-full text-content-primary font-medium"
                style={{ background: "var(--color-primary)" }}
              >
                {NAV_CTA.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
