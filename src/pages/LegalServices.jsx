import React from "react";
// Assuming ConsultationCard is available in the current directory or context
import { ConsultationCard } from "./Card";
import { CheckIcon, ScaleIcon, FingerPrintIcon, DocumentTextIcon, BanknotesIcon } from "@heroicons/react/24/outline";

// THEME CONSTANTS
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const CARD_BORDER_ACCENT = "border-[#1a5d91]";

// CONSOLIDATED CONTENT OBJECT
const LegalServicesContent = {
  mainTitle: "Legal and Compliance Services",
  tagline: "We offer essential legal expertise and guidance to help you navigate complex regulations and ensure your business remains compliant and risk-free.",

  // Section 1: Main Overview (Delivering Compliance)
  mainOverview: {
    title: "Navigating Complex Regulations with Confidence ⚖️",
    text: "Operating successfully in today's business environment requires meticulous adherence to local and global regulatory standards. Our legal services are designed to mitigate risk, establish robust legal frameworks, and ensure all statutory obligations are met. We provide proactive advisory to keep your organization legally sound, allowing you to execute your strategy without compliance worries.",
    coreBenefitTitle: "Key Benefits of Dedicated Legal Support",
    coreBenefitList: [
      "Risk Mitigation: Proactive identification and avoidance of legal pitfalls and penalties.",
      "Clarity on Regulations: Clear guidance on complex laws, including corporate and labour regulations.",
      "Streamlined Documentation: Professional drafting and review of all essential business contracts and policies.",
    ],
  },

  // Section 2: Core Services (Registrations, Audits, and Advisory)
  coreServices: {
    title: "Comprehensive Legal and Regulatory Solutions",
    list: [
      "Statutory Compliance Audits (Ensuring adherence to all required Indian laws and filings).",
      "Entity Registration Services (Company formation, NGO registration, and trust/society setup).",
      "Contract Drafting and Review (Vetting agreements, MoUs, and vendor contracts).",
      "Corporate Governance Consulting and Secretarial Compliance.",
      "Labour Law Compliance and Policy Development.",
    ],
  },

  // Section 3: Specialized Support (Strategic Advantages Style - Detailed Cards)
  specializedSupport: {
    title: "Specialized Expertise and Team Highlights",
    list: [
      {
        icon: <FingerPrintIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Expert Chief Legal Advisor",
        description: "Our services are backed by the expertise of **Dr. S Bhadkariya, our Chief Legal Advisor**, ensuring that all advice meets the highest standards of legal professionalism and strategic insight.",
      },
      {
        icon: <BanknotesIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "NGO and Startup Regulatory Filings",
        description: "Specialized assistance with critical regulatory filings unique to NGOs and startups, including FCRA compliance, tax exemptions, and government licenses.",
      },
    ],
  },

  // Section 4: Process Steps (The Compliance Roadmap)
  developmentProcess: {
    title: "Our 4-Step Compliance and Advisory Process 📋",
    steps: [
      "Phase 1: Legal Audit (Comprehensive review of current status, contracts, and regulatory exposure).",
      "Phase 2: Compliance Roadmap (Developing a prioritized plan for registrations and regulatory filings).",
      "Phase 3: Documentation & Implementation (Drafting contracts, policies, and completing all required filings).",
      "Phase 4: Ongoing Advisory (Continuous monitoring of regulatory changes and on-call legal support).",
    ],
  },
};

export default function LegalServices() {
  const content = LegalServicesContent;

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
                <ScaleIcon className="w-6 h-6 mr-2" />
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
                <DocumentTextIcon className="w-6 h-6 mr-2" />
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