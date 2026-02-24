import { BRAND, FOOTER_LINKS } from "../../constants";

export default function Footer() {
  return (
    <footer className="border-t border-border relative">
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, var(--color-primary-dim), transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        {/* Top: Logo + description + socials */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img
                src={BRAND.logo}
                alt={BRAND.name}
                className="w-14 h-14 rounded-xl object-contain"
              />
              <span className="font-display font-bold text-lg text-content-primary">
                {BRAND.name}
              </span>
            </a>
            <p className="text-content-secondary text-sm leading-relaxed max-w-sm mb-6">
              {BRAND.tagline}. Building custom AI agents and workflow
              automations that help businesses scale faster and smarter.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h4 className="font-semibold text-content-primary text-sm mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-content-secondary hover:text-content-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-content-muted">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
