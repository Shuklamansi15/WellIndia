import React from "react";
import { ConsultationCard } from "./Card";
import {
  CheckIcon,
  BanknotesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

// THEME CONSTANTS
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const CARD_BORDER_ACCENT = "border-[#1a5d91]";

// CONSOLIDATED CONTENT OBJECT
const NgoConsultingContent = {
  mainTitle: "NGO Consulting",
  tagline:
    "We help non-governmental organizations improve their operations, strategy, outreach, and secure funding and grants to maximize their impact.",

  // NEW SECTION: NGO Types (Trust vs. Society vs. Section 8 Company)
  ngoTypes: {
    title: "NGO Legal Structures: Trust, Society, and Section 8 Company",
    description:
      "In India, NGOs can be primarily registered as a Trust, a Society, or a Section 8 Company, each governed by different acts and having distinct structural requirements.",
    types: [
      {
        name: "Trust",
        law: "Governed by the Indian Trusts Act, 1882 (or state-specific acts).",
        requirements:
          "Requires a Minimum of 2 Trustees. Registration is mandatory only in some states but generally advised.",
        structure: "Easier to form and manage with minimal compliance.",
      },
      {
        name: "Society",
        law: "Governed by the Societies Registration Act, 1860.",
        requirements: "Requires a Minimum of 7 members. Registration mandatory.",
        structure: "More structured and democratic, governed by an MOA.",
      },
      {
        name: "Section 8 Company",
        law: "Governed by the Companies Act, 2013.",
        requirements:
          "Requires a Minimum of 2 Directors. Registration with the ROC.",
        structure:
          "Highest compliance, national jurisdiction + corporate credibility.",
      },
    ],
  },

  // Section 1
  legalOverview: {
    title: "Online Society Registration in India - An Overview",
    text: "A Society is an association of multiple individuals with a common interest, focused on governing and taking initiative for achieving a common goal. The Society Registration Act, 1860 governs the registration and functioning process.",
    purposeTitle: "Purpose of Society Registration",
    purposeList: [
      "Give the society a legal personality with rights to own property, sue & be sued.",
      "Provide an operational framework through the Memorandum of Association (MOA).",
      "Protect the interests of the members by defining rights & obligations.",
    ],
  },

  // Section 2
  keyServices: {
    title: "Our Core Consulting Services 💡",
    list: [
      "Strategy & Planning for long-term organizational growth.",
      "Compliance & Governance (FCRA, Income Tax, Society Acts).",
      "Grant Writing & Funding Strategy.",
      "Digital Transformation for optimized operations.",
      "Impact Measurement & KPI Frameworks.",
    ],
  },

  // Section 3
  complianceAndFunding: {
    title: "Specialized Support & Compliance",
    list: [
      {
        icon: (
          <BanknotesIcon
            className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`}
          />
        ),
        heading: "Securing Grants and Funding",
        description:
          "Support in grant identification, proposal writing, and long-term fundraising strategy.",
      },
      {
        icon: (
          <ShieldCheckIcon
            className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`}
          />
        ),
        heading: "FCRA & Legal Compliance",
        description:
          "Expert guidance on FCRA filings, governance audits, & Income Tax compliance.",
      },
    ],
  },

  // Section 4
  registrationProcess: {
    title: "Simplified Registration Process 📝",
    steps: [
      "Drafting the Memorandum of Association (MOA) and Rules & Regulations.",
      "Collecting affidavits and ID proofs.",
      "Selecting & verifying the society name.",
      "Submitting online/physical application to Registrar.",
      "Receiving Registration Certificate after approval.",
    ],
  },
};

export default function NgoConsulting() {
  const content = NgoConsultingContent;

  return (
    <div className="min-h-screen py-16 bg-gray-50">
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

        {/* 2 Columns */}
        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT COLUMN */}
          <div className="w-full md:w-2/3 lg:w-8/12">
            <div
              className={`bg-white shadow-lg rounded-xl p-8 border-t-4 ${CARD_BORDER_ACCENT}`}
            >
              {/* NGO TYPES */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2`}
              >
                {content.ngoTypes.title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {content.ngoTypes.description}
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {content.ngoTypes.types.map((type, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 p-5 rounded-lg bg-blue-50/50 shadow-sm h-full"
                  >
                    <h3
                      className={`text-xl font-extrabold ${PRIMARY_TEXT_CLASS} mb-3`}
                    >
                      {type.name}
                    </h3>

                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="font-semibold w-1/4">Law:</span>
                        <span className="w-3/4">{type.law}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold w-1/4">Reqs:</span>
                        <span className="w-3/4">{type.requirements}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold w-1/4">Struct:</span>
                        <span className="w-3/4">{type.structure}</span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>

              <hr className="my-8" />

              {/* SECTION 1 */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2`}
              >
                {content.legalOverview.title}
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {content.legalOverview.text}
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-8">
                {content.legalOverview.purposeTitle}
              </h3>

              <ul className="space-y-3 mb-10">
                {content.legalOverview.purposeList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon
                      className={`w-5 h-5 ${PRIMARY_TEXT_CLASS} mt-1 mr-3`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-8" />

              {/* SECTION 2 */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2`}
              >
                {content.keyServices.title}
              </h2>

              <ul className="space-y-3 mb-10">
                {content.keyServices.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon
                      className={`w-5 h-5 ${PRIMARY_TEXT_CLASS} mt-1 mr-3`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-8" />

              {/* SECTION 3 */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2`}
              >
                {content.complianceAndFunding.title}
              </h2>

              <div className="space-y-6">
                {content.complianceAndFunding.list.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    {item.icon}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {item.heading}
                      </h4>
                      <p className="text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="my-8" />

              {/* SECTION 4 */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2`}
              >
                {content.registrationProcess.title}
              </h2>

              <ol className="space-y-4 list-decimal list-inside ml-4 text-gray-700">
                {content.registrationProcess.steps.map((item, index) => (
                  <li key={index} className="font-medium">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT COLUMN — STICKY CARD */}
          <div className="w-full md:w-1/3 lg:w-4/12 md:sticky md:top-24 z-0 self-start">
            <ConsultationCard />
          </div>
        </div>
      </div>
    </div>
  );
}
