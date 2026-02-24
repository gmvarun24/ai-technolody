import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { SpotlightEffect } from "../aceternity/SpotlightEffect";
import { MovingBorder } from "../aceternity/MovingBorder";
import { BRAND } from "../../constants";

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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary-dim text-xs font-bold text-content-primary mb-6">
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

        {/* Contact Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="card-surface p-2 md:p-3 relative overflow-hidden group rounded-3xl border border-border">
            <SpotlightEffect className="rounded-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 relative z-10">
              {/* Left Side: Contact Info (Email Only) */}
              <div
                className="lg:col-span-2 p-8 md:p-10 rounded-2xl flex flex-col justify-between overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-dim), transparent)",
                }}
              >
                {/* Decorative element inside left panel */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />

                <div className="relative z-10">
                  <h3 className="font-display font-bold text-2xl text-content-primary mb-3">
                    Contact Information
                  </h3>
                  <p className="text-content-secondary text-sm leading-relaxed max-w-sm">
                    Fill out the form and our team will get back to you within
                    24 hours. Let&apos;s build something extraordinary together.
                  </p>
                </div>

                <div className="relative z-10 mt-12 mb-8 lg:mt-auto lg:mb-0 space-y-6">
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-4 group/email w-fit"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover/email:bg-primary group-hover/email:text-primary-foreground transition-colors duration-300">
                      <Mail className="w-5 h-5 text-primary group-hover/email:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-content-muted mb-1 uppercase tracking-wider">
                        Email Us
                      </p>
                      <p className="text-content-primary font-medium text-base group-hover/email:text-primary transition-colors">
                        {BRAND.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="lg:col-span-3 p-8 md:p-12 relative">
                {/* Success overlay */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-2xl bg-surface-page/95 backdrop-blur-sm"
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
                    <p className="text-content-primary font-display font-bold text-2xl">
                      Message Sent!
                    </p>
                    <p className="text-content-secondary mt-2">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs text-content-muted mb-2 uppercase tracking-wider font-semibold"
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
                        className="w-full h-12 px-4 rounded-xl bg-surface-raised border border-border text-content-primary text-sm placeholder:text-content-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs text-content-muted mb-2 uppercase tracking-wider font-semibold"
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
                        className="w-full h-12 px-4 rounded-xl bg-surface-raised border border-border text-content-primary text-sm placeholder:text-content-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs text-content-muted mb-2 uppercase tracking-wider font-semibold"
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
                      className="w-full h-12 px-4 rounded-xl bg-surface-raised border border-border text-content-primary text-sm placeholder:text-content-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs text-content-muted mb-2 uppercase tracking-wider font-semibold"
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
                      className="w-full px-4 py-3 rounded-xl bg-surface-raised border border-border text-content-primary text-sm placeholder:text-content-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none shadow-sm"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-xs text-content-muted hidden sm:block">
                      Secure and confidential.
                    </p>
                    <MovingBorder
                      as="button"
                      containerClassName="h-12"
                      className="text-content-primary font-semibold px-8 text-sm"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </MovingBorder>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
