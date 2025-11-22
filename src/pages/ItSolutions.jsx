import React from "react";
// Assuming ConsultationCard is available in the current directory or context
import { ConsultationCard } from "./Card";
import { CheckIcon, CommandLineIcon, ShieldCheckIcon, CloudArrowUpIcon, CpuChipIcon } from "@heroicons/react/24/outline";

// THEME CONSTANTS
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const CARD_BORDER_ACCENT = "border-[#1a5d91]";

// CONSOLIDATED CONTENT OBJECT
const ITSolutionsContent = {
  mainTitle: "IT Solutions and Consulting",
  tagline: "We deliver tailored technology solutions and professional advice to help your business operate efficiently, securely, and scale effectively.",

  // Section 1: Main Overview (Delivering Secure Efficiency)
  mainOverview: {
    title: "Driving Operational Efficiency Through Technology 🚀",
    text: "In today's digital landscape, technology is the engine of productivity and growth. Our IT Solutions service ensures your infrastructure is robust, secure, and perfectly aligned with your business objectives. We move beyond simple maintenance, offering strategic consulting to implement future-proof technologies that give you a competitive edge and safeguard your critical assets.",
    coreBenefitTitle: "Core Advantages of Strategic IT Partnership",
    coreBenefitList: [
      "Enhanced Security: Protection against digital threats, ensuring data integrity and regulatory compliance.",
      "Optimized Operations: Streamlining workflows with modern software and infrastructure management.",
      "Scalability and Growth: Implementing technology that can grow seamlessly alongside your organization.",
    ],
  },

  // Section 2: Core Services (Security, Infrastructure, and Software)
  coreServices: {
    title: "Key Areas of Our IT Expertise",
    list: [
      "Cybersecurity and Data Protection (Firewall setup, anti-malware, and regular vulnerability audits).",
      "Cloud Services (Migration, management, and optimization across platforms like AWS and Google Cloud).",
      "Infrastructure Management (Network design, hardware procurement, and maintenance).",
      "Custom Software and Application Development (Tailored tools for process automation).",
      "IT Policy and Governance Consulting (Creating internal policies and compliance frameworks).",
    ],
  },

  // Section 3: Specialized Support (Strategic Advantages Style - Detailed Cards)
  specializedSupport: {
    title: "Strategic Focus Areas",
    list: [
      {
        icon: <ShieldCheckIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Strong IT Security Focus",
        description: "Our approach prioritizes robust security, safeguarding your data and systems so you can operate without the worry of digital threats, as highlighted in our company advantages.",
      },
      {
        icon: <CloudArrowUpIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Cloud Integration and Optimization",
        description: "Expertise in managing and utilizing partner services like AWS and Google Cloud, ensuring you leverage scalable, cost-effective, and highly available computing resources.",
      },
    ],
  },

  // Section 4: Process Steps (The IT Implementation Roadmap)
  developmentProcess: {
    title: "Our 4-Step Technology Implementation Roadmap ⚙️",
    steps: [
      "Step 1: Needs Assessment & Audit (Analyzing current systems, identifying gaps, and defining requirements).",
      "Step 2: Solution Design & Planning (Developing a tailored architecture, selecting appropriate hardware/software).",
      "Step 3: Implementation & Migration (Installation, configuration, and seamless data transfer with minimal downtime).",
      "Step 4: Training & Post-Implementation Support (Training staff and providing ongoing 24/7 technical support and maintenance).",
    ],
  },
};

export default function ItSolutions() {
  const content = ITSolutionsContent;

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
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2 flex items-center`}
              >
                <CpuChipIcon className="w-6 h-6 mr-2" />
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

              {/* SECTION 2: Core Services (Core Focus Style) */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2 mt-8 flex items-center`}
              >
                <CommandLineIcon className="w-6 h-6 mr-2" />
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

              {/* SECTION 4: Process Steps (Numbered List) */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2 mt-8 flex items-center`}
              >
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