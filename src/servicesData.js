// --- Helper to Create Slugs ---
const createSlug = (title) =>
  title
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-")
    .replace(/[^\w-]/g, "");

// --- Service Data ---
export const ALL_SERVICES = [
  {
    title: "NGO Consulting",
    slug: `/services/${createSlug("NGO Consulting")}`,
    description:
      "We help non-governmental organizations improve their operations, strategy, outreach, and secure funding and grants to maximize their impact.",
    keyAreas: ["Improve operations", "Strategy & Outreach", "Secure Funding and Grants"],
    icon: "🤝",
  },
  {
    title: "Business Development and Strategy",
    slug: `/services/${createSlug("Business Development and Strategy")}`,
    description:
      "We work with businesses to identify new growth opportunities and create a clear, actionable plan to achieve their goals.",
    keyAreas: ["Identify growth opportunities", "Create actionable plans", "Achieve business goals"],
    icon: "🎯",
  },
  {
    title: "Marketing Consultation",
    slug: `/services/${createSlug("Marketing Consultation")}`,
    description:
      "We provide expert guidance to help you develop effective marketing strategies that boost your brand and drive customer engagement.",
    keyAreas: ["Develop effective strategies", "Boost your brand", "Drive customer engagement"],
    icon: "📣",
  },
  {
    title: "Event Management and Planning",
    slug: `/services/${createSlug("Event Management and Planning")}`,
    description:
      "We handle all aspects of event coordination, from initial planning to final execution, to ensure a successful and memorable experience.",
    keyAreas: ["Initial planning", "Event coordination", "Final execution"],
    icon: "📆",
  },
  {
    title: "Financial and Accounting Services",
    slug: `/services/${createSlug("Financial and Accounting Services")}`,
    description:
      "We offer comprehensive financial management, bookkeeping, and accounting support to help you maintain a healthy financial standing.",
    keyAreas: ["Financial management", "Bookkeeping & Accounting support", "Maintain financial health"],
    icon: "💰",
  },
  {
    title: "IT Solutions and Consulting",
    slug: `/services/${createSlug("IT Solutions and Consulting")}`,
    description:
      "We deliver tailored technology solutions and professional advice to help your business operate efficiently and securely.",
    keyAreas: ["Tailored technology solutions", "Professional IT advice", "Operate efficiently and securely"],
    icon: "💻",
  },
  {
    title: "Legal and Compliance Services",
    slug: `/services/${createSlug("Legal and Compliance Services")}`,
    description:
      "We offer legal expertise and guidance to help you navigate complex regulations and ensure your business remains compliant.",
    keyAreas: ["Legal expertise & guidance", "Navigate complex regulations", "Ensure business compliance"],
    icon: "⚖️",
  },
  {
    title: "Government Project Support",
    slug: `/services/${createSlug("Government Project Support")}`,
    description:
      "We help NGOs confidently navigate government schemes and apply for grants with end-to-end guidance.",
    keyAreas: ["Navigate government schemes", "Apply for grants", "End-to-end guidance"],
    icon: "🏛️",
  },
];
