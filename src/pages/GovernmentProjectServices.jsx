import React from "react";
// Assuming ConsultationCard is available in the current directory or context
import { ConsultationCard } from "./Card";
import { CheckIcon, BuildingOffice2Icon, MegaphoneIcon, RocketLaunchIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

// THEME CONSTANTS
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const CARD_BORDER_ACCENT = "border-[#1a5d91]";

// CONSOLIDATED CONTENT OBJECT
const GovernmentProjectServicesContent = {
  mainTitle: "Government Project & Liaison Services",
  tagline: "Leveraging our experience with Government Agencies, we provide end-to-end support for project coordination, proposal development, and effective public sector engagement.",

  // Section 1: Main Overview (Delivering Public Sector Impact)
  mainOverview: {
    title: "Bridging the Gap Between Concept and Public Impact 🤝",
    text: "Successfully executing projects with public sector entities requires a deep understanding of governance, procurement processes, and stakeholder management. We specialize in coordinating complex initiatives, from initial proposal drafting and regulatory compliance to on-the-ground implementation. Our goal is to ensure your government-funded or collaborative project achieves its goals efficiently and transparently.",
    coreBenefitTitle: "Why Partner with Us for Government Projects?",
    coreBenefitList: [
      "Proven Track Record: Experience supporting 5+ Government Agencies in project execution and management.",
      "Regulatory Expertise: Navigating complex government tender, compliance, and reporting requirements.",
      "Coordinated Execution: Utilizing dedicated Senior Project Coordinators for seamless implementation.",
    ],
  },

  // Section 2: Core Services (Liaison, Project Management, and Funding)
  coreServices: {
    title: "Comprehensive Public Sector Project Support",
    list: [
      "Government Liaison and Stakeholder Management (Facilitating communication and approvals with public bodies).",
      "Proposal and Tender Document Drafting (Creating compelling bids that meet specific government criteria).",
      "Project Coordination and Monitoring (End-to-end management by Senior Project Coordinators).",
      "Grant and Scheme Funding Application Support (Assisting NGOs and firms in securing public funds).",
      "Compliance and Audit Reporting for Public Funds (Ensuring transparent use and documentation of government funds).",
    ],
  },

  // Section 3: Specialized Support (Team and Regional Strength)
  specializedSupport: {
    title: "Project Management and Regional Focus",
    list: [
      {
        icon: <RocketLaunchIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Dedicated Coordination Team",
        description: "Our projects are managed by dedicated professionals like **Sakshi Srivastava, Ritu Saxena, and Sunita Bisht (Senior Project Coordinators)**, ensuring rigorous quality control and timely delivery.",
      },
      {
        icon: <GlobeAltIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Pan-India and International Reach",
        description: "Our capacity to serve clients across India and globally ensures we can manage projects for central agencies or those with multi-state or international scope.",
      },
    ],
  },

  // Section 4: Process Steps (The Project Execution Cycle)
  developmentProcess: {
    title: "The 4 Phases of Government Project Execution 📊",
    steps: [
      "Phase 1: Opportunity Identification & Proposal (Vetting Tenders, initial feasibility study, and bid submission).",
      "Phase 2: Project Planning & Approval (Detailed work breakdown structure, resource allocation, and formal sanction process).",
      "Phase 3: Implementation & Monitoring (Execution of on-site and remote activities, managed by Project Coordinators with continuous reporting).",
      "Phase 4: Evaluation & Handover (Final performance audit, documentation completion, and formal project handover).",
    ],
  },
};

export default function GovernmentProjectServices() {
  const content = GovernmentProjectServicesContent;

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
                <BuildingOffice2Icon className="w-6 h-6 mr-2" />
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
                <MegaphoneIcon className="w-6 h-6 mr-2" />
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