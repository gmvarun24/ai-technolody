// src/constants/index.js
// ─── ALL EDITABLE CONTENT LIVES HERE ─────────────────────────────────────────

// ─── BRAND ───────────────────────────────────────────────────────────────────
export const BRAND = {
  name: "Caesers Republica",
  tagline: "Empowering Businesses with AI Solutions",
  logo: "/logo.png",
  email: "hello@aitechnolody.com",
  phone: "+91 97668 32581",
  address: "Bengaluru, KA",
  socials: {
    twitter: "https://twitter.com/aitechnolody",
    linkedin: "https://linkedin.com/company/aitechnolody",
    github: "https://github.com/aitechnolody",
    youtube: "https://youtube.com/@aitechnolody",
  },
};

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const NAV_CTA = {
  label: "Book a Discovery Call",
  href: "#contact",
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const HERO = {
  badge: "🤖 Available For New Projects",
  headline: "Empowering Businesses with",
  flipWords: [
    "AI Solutions",
    "Smart Automation",
    "Intelligent Agents",
    "Data Intelligence",
  ],
  subheadline:
    "We build custom AI agents and workflow automations that help businesses scale faster, reduce costs, and save time — seamlessly integrated with your current systems.",
  primaryCta: { label: "Book a Discovery Call", href: "#contact" },
  secondaryCta: { label: "Explore Services", href: "#services" },
  trustBadges: ["Custom AI Solutions", "Rapid Deployment", "Enterprise Ready"],
};

// ─── LOGO CLOUD ───────────────────────────────────────────────────────────────
export const LOGO_CLOUD = {
  label: "Trusted by forward-thinking companies",
  logos: [
    { name: "OpenAI" },
    { name: "Google Cloud" },
    { name: "Microsoft Azure" },
    { name: "AWS" },
    { name: "Salesforce" },
    { name: "HubSpot" },
    { name: "Slack" },
    { name: "Zapier" },
  ],
};

// ─── STATS ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "200+", label: "AI Solutions Deployed" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "3x", label: "Average ROI Increase" },
  { value: "48h", label: "Average Deployment Time" },
];

// ─── SERVICES (FEATURES) ─────────────────────────────────────────────────────
export const SERVICES_HEADING = {
  badge: "Our Services",
  title: "Custom AI solutions tailored for your business",
  subtitle:
    "From intelligent assistants to workflow automations, we design and deploy AI solutions that integrate seamlessly with your existing systems.",
};

export const SERVICES = [
  {
    icon: "BotMessageSquare",
    title: "Executive AI Assistants",
    description:
      "24/7 executive assistant that handles emails, schedules meetings, manages tasks, and makes calls on your behalf — powered by advanced AI.",
  },
  {
    icon: "TrendingUp",
    title: "AI SDR Agents",
    description:
      "Automate your entire sales development process with AI agents that qualify leads, book meetings, and nurture prospects around the clock.",
  },
  {
    icon: "Headphones",
    title: "Voice AI Agents",
    description:
      "Transform your customer service with intelligent agents that handle inbound calls, book appointments, and make outbound calls naturally.",
  },
  {
    icon: "Database",
    title: "RAG Knowledge Agents",
    description:
      "Get instant, accurate answers from your company's data, policies, and procedures — all while maintaining complete confidentiality.",
  },
  {
    icon: "BarChart3",
    title: "AI Analytics & SQL Agents",
    description:
      "Get instant business insights without writing complex queries. Ask questions in plain English and receive accurate data analysis from your databases.",
  },
  {
    icon: "Workflow",
    title: "Workflow Automations",
    description:
      "Build seamless workflows that eliminate manual tasks, reduce errors, and ensure nothing falls through the cracks — saving hundreds of hours monthly.",
  },
];

// ─── USE CASES ────────────────────────────────────────────────────────────────
export const USE_CASES_HEADING = {
  badge: "Use Cases",
  title: "AI solutions for every industry",
  subtitle:
    "Personalised & integrated seamlessly with your current systems across departments and industries.",
};

export const USE_CASES = [
  {
    icon: "Megaphone",
    title: "Marketing",
    description:
      "Automate campaign management, lead scoring, content generation, and performance analytics with AI-powered marketing tools.",
  },
  {
    icon: "Users",
    title: "Human Resources",
    description:
      "Streamline recruitment, onboarding, employee engagement, and HR analytics with intelligent automation.",
  },
  {
    icon: "HeadsetIcon",
    title: "Customer Support",
    description:
      "Deploy AI agents that handle support tickets, live chat, and phone calls — reducing response times by 80%.",
  },
  {
    icon: "Target",
    title: "Sales",
    description:
      "Accelerate your pipeline with AI-driven lead qualification, outreach automation, and intelligent CRM management.",
  },
  {
    icon: "Calculator",
    title: "Accounting",
    description:
      "Automate invoice processing, expense tracking, reconciliation, and financial reporting with precision AI.",
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce",
    description:
      "Optimize product recommendations, inventory management, pricing strategies, and customer experiences with AI.",
  },
];

// ─── HOW IT WORKS (PROCESS) ──────────────────────────────────────────────────
export const PROCESS_HEADING = {
  badge: "Our Proven Process",
  title: "From discovery to deployment in weeks, not months",
  subtitle:
    "We follow a proven three-step process to deliver AI solutions that drive real results.",
};

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Plan Your Roadmap",
    description:
      "We take the time to understand your needs, laying out a strategic roadmap for your bespoke AI solution. Every project starts with deep-dive discovery to map your workflows and identify automation opportunities.",
    icon: "Map",
  },
  {
    step: "02",
    title: "Build Your MVP",
    description:
      "Our developers build your custom AI solution — intuitive, powerful, and functional. We design and develop intelligent agents, automations, and integrations tailored precisely to your business needs.",
    icon: "Hammer",
  },
  {
    step: "03",
    title: "Iterate & Launch",
    description:
      "We work in agile bi-weekly sprints, iterating in real-time to refine and perfect your solution. Once deployed, we provide ongoing support and optimization to ensure peak performance.",
    icon: "Rocket",
  },
];

// ─── INTEGRATIONS ─────────────────────────────────────────────────────────────
export const INTEGRATIONS = {
  heading: {
    badge: "Integrations",
    title: "Direct integration with your systems",
    subtitle:
      "Our AI solutions connect with 100+ tools and platforms your team already uses.",
  },
  tools: [
    "Slack",
    "Salesforce",
    "HubSpot",
    "Google Workspace",
    "Microsoft 365",
    "Zapier",
    "Notion",
    "Airtable",
    "Stripe",
    "Twilio",
    "Zendesk",
    "Jira",
    "Monday.com",
    "Shopify",
    "QuickBooks",
    "Calendly",
  ],
};

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS_HEADING = {
  badge: "What Our Clients Say",
  title: "Trusted by businesses worldwide to deliver AI excellence",
};

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "CEO at GrowthStack",
    quote:
      "Caesers Republica transformed our customer support entirely. Their Voice AI agents handle 80% of our calls now, and customer satisfaction has actually increased. The ROI was visible within the first month.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "VP of Sales at CloudSync",
    quote:
      "The AI SDR agents are incredible. They qualified more leads in one week than our team did in a month. Our pipeline has tripled since deploying Caesers Republica's solutions.",
    rating: 5,
  },
  {
    name: "Amara Osei",
    role: "COO at NexaRetail",
    quote:
      "We automated 15 manual workflows in under 3 weeks. The team at Caesers Republica understood our e-commerce challenges instantly and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Director of Ops at FinEdge",
    quote:
      "Their RAG knowledge agents revolutionized how our team accesses internal documentation. Questions that took hours to research now get answered in seconds.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Head of Marketing at BrandWave",
    quote:
      "Caesers Republica's Executive AI Assistant manages my entire calendar and email workflow. I've saved 15+ hours per week. It's like having a world-class EA that never sleeps.",
    rating: 5,
  },
  {
    name: "Michael Turner",
    role: "CTO at DataPulse",
    quote:
      "The AI SQL agents they built let our non-technical team pull complex reports in plain English. It democratized data access across the entire company overnight.",
    rating: 5,
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_HEADING = {
  badge: "FAQ",
  title: "Questions? We've got answers.",
};

export const FAQS = [
  {
    question: "How is Caesers Republica different from other AI consultancies?",
    answer:
      "Unlike generic consultancies, we build custom AI agents and automations tailored specifically to your business workflows. We don't sell off-the-shelf tools — every solution is bespoke, integrating seamlessly with your existing systems for maximum impact.",
  },
  {
    question: "How long does it take to deploy an AI solution?",
    answer:
      "Most of our AI solutions go from discovery to deployment in 2-6 weeks. We work in agile sprints and deliver your MVP fast, then iterate based on real-world performance and your feedback.",
  },
  {
    question: "Do I need technical expertise to use your AI solutions?",
    answer:
      "Not at all. Our solutions are designed for business teams, not engineers. We handle all the technical complexity so your team can focus on what they do best. Everything is intuitive and requires no coding knowledge.",
  },
  {
    question: "Can your AI solutions integrate with our existing tools?",
    answer:
      "Absolutely. We integrate with 100+ platforms including Salesforce, HubSpot, Slack, Google Workspace, Microsoft 365, Zapier, and many more. If you use it, we can connect to it.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across all industries — from e-commerce and SaaS to real estate, law firms, healthcare, non-profits, and financial services. Our AI solutions are adaptable to any business context.",
  },
  {
    question: "What does the pricing look like?",
    answer:
      "Every project is unique, so we provide custom quotes based on your specific needs and scope. Book a free discovery call to discuss your requirements and get a detailed proposal with transparent pricing.",
  },
];

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export const FOOTER_LINKS = [
  {
    heading: "Services",
    links: [
      { label: "AI Assistants", href: "#services" },
      { label: "Voice AI", href: "#services" },
      { label: "Workflow Automation", href: "#services" },
      { label: "RAG Agents", href: "#services" },
      { label: "AI Analytics", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/docs" },
      { label: "Community", href: "/community" },
      { label: "AI Newsletter", href: "/newsletter" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];
