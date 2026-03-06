import { BRAND } from "../../constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { BackgroundBeams } from "../aceternity/BackgroundBeams";

export default function Footer() {
  return (
    <footer className="border-t border-border relative overflow-hidden bg-surface-page pt-32 pb-16 antialiased mt-10">
      {/* Background Beams from Aceternity UI */}
      <BackgroundBeams />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 mb-24 text-center">
          {/* Logo */}
          <div className="relative p-2 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent flex items-center justify-center shadow-[0_0_30px_var(--color-primary-dim)] border border-primary/20 backdrop-blur-sm">
            <img
              src={BRAND.logo}
              alt={BRAND.name}
              className="w-16 h-16 rounded-xl object-contain bg-surface-raised"
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-content-primary max-w-3xl">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              scale faster
            </span>{" "}
            with AI?
          </h2>

          <p className="text-content-secondary text-lg md:text-xl max-w-2xl mx-auto font-medium">
            {BRAND.tagline}. We build custom AI agents that integrate seamlessly
            with your existing systems.
          </p>
        </div>

        <div className="border-t border-border pt-8 flex items-center justify-center">
          <p className="text-sm text-content-muted font-medium">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
