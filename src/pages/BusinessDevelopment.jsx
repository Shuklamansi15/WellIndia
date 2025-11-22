import React from "react";
import { ConsultationCard } from "./Card";
import { CheckIcon, LightBulbIcon, WrenchScrewdriverIcon, ChartBarIcon } from "@heroicons/react/24/outline";

// THEME CONSTANTS
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const CARD_BORDER_ACCENT = "border-[#1a5d91]";

// CONSOLIDATED CONTENT OBJECT
const BusinessDevelopmentContent = {
  mainTitle: "Business Development and Strategy",
  tagline: "We work with businesses to identify new growth opportunities and create a clear, actionable plan to achieve their goals.",

  // Section 1: Main Overview (Mirrors LegalOverview)
  mainOverview: {
    title: "Driving Organizational Success 🚀",
    text: "Wellindia Corp Services provides comprehensive solutions to drive organizational success. With a strong foundation in facility management, we offer expert guidance across business strategy, IT security, and specialized support. We are your single-point partner committed to understanding your unique needs and delivering effective results.",
    coreBenefitTitle: "Achieving Operational Excellence",
    coreBenefitList: [
      "Improve Operations: Professional advice to streamline your processes and enhance day-to-day operations.",
      "Identify New Growth Opportunities: We help you find new market segments and avenues for expansion.",
      "Ensure Financial Stability: Build a plan for a stable financial future and strong return on investment.",
    ],
  },

  // Section 2: Core Services (Mirrors Key Services)
  coreServices: {
    title: "Core Components of our Strategy Consulting",
    list: [
      "Market Entry Strategy: Comprehensive plans for expanding into new geographical or product markets.",
      "Digital Transformation: Integrating technology to improve efficiency, customer experience, and data utilization.",
      "Operational Efficiency: Auditing and redesigning processes to reduce costs and increase productivity.",
      "Sales & Marketing Alignment: Ensuring sales and marketing efforts work synergistically to drive revenue.",
      "Organizational Design: Structuring your team and governance for optimal performance and scale.",
    ],
  },

  // Section 3: Specialized Support (Mirrors Compliance and Funding Cards)
  specializedSupport: {
    title: "Strategic Guidance and Partnership",
    list: [
      {
        icon: <WrenchScrewdriverIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Complete Business Solutions",
        description: "We are your single partner for a full range of services. We manage your facilities, provide business advice, and secure your IT, offering an all-in-one approach to business success.",
      },
      {
        icon: <LightBulbIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Client-Centric Approach",
        description: "Your success is our primary goal. We build long-term partnerships based on trust, collaboration, and a deep understanding of your unique needs.",
      },
    ],
  },

  // Section 4: Process Steps (Mirrors Registration Process)
  developmentProcess: {
    title: "Our Strategic Planning Process 📈",
    steps: [
      "Phase 1: Discovery & Analysis (Market, Competitor, Internal Audit).",
      "Phase 2: Strategy Formulation (Vision, Goals, and Strategic Pillars).",
      "Phase 3: Actionable Planning (Implementation Roadmap and Resource Allocation).",
      "Phase 4: Execution & Monitoring (KPI tracking and performance reporting).",
      "Phase 5: Iterative Refinement (Adjusting strategy based on real-world results).",
    ],
  },
};

export default function BusinessDevelopment() {
  const content = BusinessDevelopmentContent;

  return (
    <div className=" min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-8 xl:max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl font-extrabold ${PRIMARY_TEXT_CLASS} sm:text-5xl`}
          >
            {content.mainTitle}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {content.tagline}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* LEFT COLUMN – Content */}
          <div className="w-full md:w-2/3 lg:w-8/12">
            <div
              className={`bg-white shadow-lg rounded-xl p-8 border-t-4 ${CARD_BORDER_ACCENT} h-full`}
            >
              
              {/* SECTION 1: Main Overview (Introduction Style) */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2`}
              >
                {content.mainOverview.title}
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {content.mainOverview.text}
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-8">
                {content.mainOverview.coreBenefitTitle}
              </h3>

              <ul className="space-y-3 mb-10">
                {content.mainOverview.coreBenefitList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon
                      className={`w-5 h-5 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mt-1 mr-3`}
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <hr className="my-8" />

              {/* SECTION 2: Core Consulting Services (Core Focus Style) */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2 mt-8`}
              >
                {content.coreServices.title}
              </h2>

              <ul className="space-y-3 mb-10">
                {content.coreServices.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon
                      className={`w-5 h-5 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mt-1 mr-3`}
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <hr className="my-8" />

              {/* SECTION 3: Specialized Support (Strategic Advantages Style - Detailed Cards) */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2 mt-8`}
              >
                {content.specializedSupport.title}
              </h2>
              <div className="space-y-6">
                {content.specializedSupport.list.map((item, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm">
                    {item.icon}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.heading}</h4>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <hr className="my-8" />

              {/* SECTION 4: Strategic Planning Process (Numbered List) */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2 mt-8 flex items-center`}
              >
                <ChartBarIcon className="w-6 h-6 mr-2" />
                {content.developmentProcess.title}
              </h2>

              <ol className="space-y-4 list-decimal list-inside text-gray-700 ml-4">
                {content.developmentProcess.steps.map((item, index) => (
                  <li key={index} className="font-medium">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT COLUMN – Consultation Card (Sticky) */}
          <div className="w-full md:w-1/3 lg:w-4/12 mt-5 md:sticky md:top-10 self-start">
            <ConsultationCard />
          </div>
        </div>
      </div>
    </div>
  );
}