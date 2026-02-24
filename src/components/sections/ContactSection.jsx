import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { SpotlightEffect } from "../aceternity/SpotlightEffect";
import { MovingBorder } from "../aceternity/MovingBorder";
import { BRAND } from "../../constants";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email Us",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: BRAND.phone,
    href: `tel:${BRAND.phone}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: BRAND.address,
    href: "#",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[50%] opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary-dim text-xs text-content-primary mb-6">
            Get In Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-content-primary mb-4">
            What do you want to build with AI?
          </h2>
          <p className="text-content-secondary text-base md:text-lg max-w-2xl mx-auto">
            Drop us a line and get in touch. Our team of AI experts typically
            responds within 24 hours to discuss your project requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {CONTACT_INFO.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  className="group relative block card-surface p-6 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                >
                  <SpotlightEffect className="rounded-2xl" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-content-muted mb-1">
                        {item.label}
                      </p>
                      <p className="text-content-primary font-medium text-sm group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Decorative social presence card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="card-surface p-6"
            >
              <p className="text-content-muted text-xs mb-3 uppercase tracking-wider">
                Follow Us
              </p>
              <div className="flex gap-3">
                {Object.entries(BRAND.socials).map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-surface-overlay border border-border flex items-center justify-center text-content-muted hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  >
                    <span className="text-xs font-medium capitalize">
                      {name.charAt(0).toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card-surface p-8 relative overflow-hidden group">
              <SpotlightEffect className="rounded-2xl" />

              {/* Success overlay */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-2xl"
                  style={{ background: "var(--surface-raised)" }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <p className="text-content-primary font-display font-bold text-xl">
                    Message Sent!
                  </p>
                  <p className="text-content-secondary text-sm mt-2">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs text-content-muted mb-2 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full h-11 px-4 rounded-xl bg-surface-overlay border border-border text-content-primary text-sm placeholder:text-content-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs text-content-muted mb-2 uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full h-11 px-4 rounded-xl bg-surface-overlay border border-border text-content-primary text-sm placeholder:text-content-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs text-content-muted mb-2 uppercase tracking-wider"
                  >
                    What do you want to build?
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI Agent for Customer Support"
                    className="w-full h-11 px-4 rounded-xl bg-surface-overlay border border-border text-content-primary text-sm placeholder:text-content-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs text-content-muted mb-2 uppercase tracking-wider"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your business challenges and what you'd like to automate..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-overlay border border-border text-content-primary text-sm placeholder:text-content-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-content-muted hidden sm:block">
                    We respond within 24 hours.
                  </p>
                  <MovingBorder
                    as="button"
                    containerClassName="h-11"
                    className="text-content-primary font-semibold px-8 text-sm"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </MovingBorder>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
