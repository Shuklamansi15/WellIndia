import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const themeColor = "#406796";

const staticItem = {
  title: "Complete Business Solutions",
  description:
    "We are your single partner for a full range of services. We manage your facilities, provide business advice, and secure your IT, offering an all-in-one approach to business success.",
  link: "/services/complete-business-solutions",
};

const accordionItems = [
  {
    value: "expert-guidance",
    title: "Expert Guidance & Experienced Professionals",
    description:
      "Our team is made up of seasoned experts with deep industry knowledge. We are committed to understanding your specific needs and delivering effective results.",
    link: "/about/expert-guidance",
  },
  {
    value: "value-pricing",
    title: "Value-Driven Pricing",
    description:
      "We offer straightforward and competitive pricing to ensure maximum value and ROI for your business.",
    link: "/pricing",
  },
  {
    value: "client-centric",
    title: "Client-Centric Approach",
    description:
      "We build long-term partnerships based on trust, collaboration, and a deep understanding of your unique needs.",
    link: "/about/client-centric",
  },
  {
    value: "it-security",
    title: "Strong IT Security",
    description:
      "We protect your business with advanced cybersecurity and compliance solutions for a worry-free digital environment.",
    link: "/services/it-security",
  },
  {
    value: "reach",
    title: "Global & Pan-India Reach",
    description:
      "Headquartered in New Delhi, we proudly serve clients across India and around the world with consistent, high-quality solutions.",
    link: "/contact",
  },
];

export default function WhyChooseUs() {
  const themeColorClass = "text-[#406796]";
  const hoverColorClass = "hover:text-[#406796]";

  return (
    // Container: Increased vertical padding and improved grid responsiveness
    <div className="container mt-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
      {/* Left Text Block */}
      <div className="mb-10 lg:mb-0 text-center lg:text-left">
        {/* Title: Adjusted text size for better scaling across screens (4xl -> sm:5xl -> lg:6xl) */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-6 mb-4 leading-tight sm:leading-snug">
          WHY CHOOSE <span className={themeColorClass}>WELLINDIA</span>
        </h2>
        {/* Paragraph: Adjusted text size for readability (lg -> sm:xl) */}
        <p className="text-lg sm:text-xl text-gray-700 mt-5 leading-relaxed mb-6">
          At Wellindia Corp Services, we are a New Delhi-based firm established
          since 2014, providing comprehensive solutions to drive organizational
          success. With a proven track record and a customer-first approach, we
          are the partner you can trust for lasting success.
        </p>

        <a href="/services">
          {/* Button: Increased padding for better touch targets and minor scale on hover */}
          <Button className="outline mt-6 rounded-lg text-white bg-[#406796] hover:bg-[#325272] transition-colors duration-300 py-3 px-6 text-base sm:text-lg hover:scale-[1.03]">
            Our Services
          </Button>
        </a>
      </div>

      {/* Right Content Block (Static Item + Accordion) */}
      <div className="pt-4 lg:pt-0">
        {/* Static Item Card */}
        <a
          href={staticItem.link}
          // Added responsive padding and border to enhance separation
          className="block border-b border-gray-200 pb-6 mb-6 sm:pb-8 sm:mb-8 transition-all hover:translate-x-1 hover:shadow-md p-4 rounded-lg bg-white"
        >
          <div className="flex items-start">
            {/* Bullet: Adjusted size */}
            <span className={`text-xl sm:text-2xl font-bold mr-3 ${themeColorClass} flex-shrink-0`}>
              -
            </span>
            <div className="flex-1">
              {/* Title: Adjusted text size */}
              <h4 className={`text-xl sm:text-2xl font-semibold ${themeColorClass} mb-1`}>
                {staticItem.title}
              </h4>
              {/* Description: Adjusted text size */}
              <p className="text-gray-600 text-base sm:text-lg">
                {staticItem.description}
              </p>
            </div>
          </div>
        </a>

        {/* Accordion List */}
        <Accordion type="single" collapsible className="w-full">
          {accordionItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-gray-200"
            >
              <AccordionTrigger
                // Adjusted text size for trigger
                className={`text-lg sm:text-xl font-semibold ${hoverColorClass} group`}
              >
                <a
                  href={item.link}
                  className="flex items-center w-full text-left py-4"
                  title={`Go to ${item.title} page`}
                >
                  {/* Plus Icon: Adjusted size */}
                  <span
                    className={`text-xl sm:text-2xl font-bold mr-3 transition-transform duration-200 group-data-[state=open]:rotate-45 ${themeColorClass} flex-shrink-0`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                  {item.title}
                </a>
              </AccordionTrigger>
              <AccordionContent className="p-0 pb-4 text-gray-600 pl-6 sm:pl-8 text-base sm:text-lg">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}