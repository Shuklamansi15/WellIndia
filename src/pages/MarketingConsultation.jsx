import React from "react";
import { ConsultationCard } from "./Card";
import { CheckIcon, MegaphoneIcon, GlobeAltIcon, ChartBarIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

// THEME CONSTANTS
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const CARD_BORDER_ACCENT = "border-[#1a5d91]";

// CONSOLIDATED CONTENT OBJECT
const MarketingConsultationContent = {
  mainTitle: "Marketing Consultation",
  tagline: "We provide expert guidance to help you develop effective marketing strategies that boost your brand and drive customer engagement.",

  // Section 1: Main Overview (Driving Brand Growth)
  mainOverview: {
    title: "Driving Brand Growth and Customer Engagement 📣",
    text: "In today's competitive landscape, a powerful marketing strategy is essential for success. We offer comprehensive marketing consultation, focusing on building a strong brand identity, expanding your digital reach, and converting customer engagement into measurable business results.",
    coreBenefitTitle: "Key Outcomes of Our Consultation",
    coreBenefitList: [
      "Boost Brand Visibility: Increase your market presence and ensure your message reaches the right audience.",
      "Drive Customer Engagement: Create compelling content and campaigns that build lasting customer relationships.",
      "Achieve Measurable ROI: Implement data-driven strategies to track performance and optimize marketing spend.",
    ],
  },

  // Section 2: Core Services (Comprehensive Strategy Areas)
  coreServices: {
    title: "Comprehensive Marketing Strategy Areas",
    list: [
      "Digital Marketing Strategy (SEO, SEM, and PPC campaign management).",
      "Content Strategy and Creation (Web, Social Media, and Video content planning).",
      "Social Media Management and Campaign Execution across all major platforms.",
      "Brand Identity Development, Positioning, and Messaging.",
      "Marketing Technology (MarTech) Implementation and Optimization.",
    ],
  },

  // Section 3: Specialized Support (Strategic Advantages Style - Detailed Cards)
  specializedSupport: {
    title: "Strategic Guidance and Partnership",
    list: [
      {
        icon: <GlobeAltIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Global & Pan-India Reach",
        description: "We leverage our network and expertise to provide consistent, high-quality solutions, whether your market is local, Pan-India, or international.",
      },
      {
        icon: <RocketLaunchIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Experienced Professionals",
        description: "Our team consists of seasoned marketing experts committed to understanding your specific business objectives and delivering high-impact, effective results.",
      },
    ],
  },

  // Section 4: Process Steps (Marketing Roadmap)
  developmentProcess: {
    title: "Our Marketing Strategy Roadmap 🧭",
    steps: [
      "Phase 1: Marketing Audit (Review current activities, strengths, and gaps).",
      "Phase 2: Target Audience Definition & Segmentation.",
      "Phase 3: Strategy & Channel Selection (Defining objectives and choosing the right mix).",
      "Phase 4: Campaign Development & Execution Plan.",
      "Phase 5: Performance Measurement, Reporting, and Optimization.",
    ],
  },
};

export default function MarketingConsultation() {
  const content = MarketingConsultationContent;

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