import React from "react";
// Assuming ConsultationCard is available in the current directory or context
import { ConsultationCard } from "./Card";
import { CheckIcon, BanknotesIcon, CalculatorIcon, AcademicCapIcon, WalletIcon } from "@heroicons/react/24/outline";

// THEME CONSTANTS
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const CARD_BORDER_ACCENT = "border-[#1a5d91]";

// CONSOLIDATED CONTENT OBJECT
const FinancialServicesContent = {
  mainTitle: "Financial and Accounting Services",
  tagline: "We offer comprehensive financial management, bookkeeping, and advisory support to ensure your organization's healthy financial standing and compliance.",

  // Section 1: Main Overview (Delivering Financial Health)
  mainOverview: {
    title: "Securing Your Financial Health and Compliance 💰",
    text: "Maintaining accurate and compliant financial records is foundational to sustainable business growth. Our experienced team provides robust accounting and financial management solutions, allowing you to gain deep insights into your operations, optimize cash flow, and confidently meet regulatory deadlines. We handle the complexity so you can focus on your core mission.",
    coreBenefitTitle: "Key Benefits of Professional Financial Support",
    coreBenefitList: [
      "Regulatory Compliance: Ensure timely and accurate filing of all statutory returns and taxes.",
      "Informed Decision Making: Receive clear, actionable financial reports to guide strategic choices.",
      "Optimized Cash Flow: Professional management and forecasting to improve liquidity and financial stability.",
    ],
  },

  // Section 2: Core Services (Accounting, Tax, and Management)
  coreServices: {
    title: "Comprehensive Financial & Accounting Solutions",
    list: [
      "Bookkeeping and Record Management (Daily transaction recording and ledger maintenance).",
      "Statutory Audit Assistance and Internal Audits for financial transparency.",
      "Taxation Services (GST, Income Tax, TDS compliance, and filing).",
      "Payroll Processing and Employee Expense Management.",
      "Financial Analysis and Reporting (P&L, Balance Sheet, and customized MIS reports).",
    ],
  },

  // Section 3: Specialized Support (Strategic Advantages Style - Detailed Cards)
  specializedSupport: {
    title: "Specialized Financial Expertise",
    list: [
      {
        icon: <AcademicCapIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Expert Chartered Accountants",
        description: "Our team includes Chartered Accountants (CAs) led by Mayank Gupta, ensuring specialized knowledge and the highest standards of financial practice and audit preparation.",
      },
      {
        icon: <WalletIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "NGO and Startup Funding Focus",
        description: "Specialized financial advisory focused on helping startups and non-profits manage grants, comply with donor requirements, and optimize resource allocation for maximum impact.",
      },
    ],
  },

  // Section 4: Process Steps (The Financial Reporting Cycle)
  developmentProcess: {
    title: "Our Standard Financial Management Cycle 📊",
    steps: [
      "Phase 1: Setup & Onboarding (Establishing ledgers, chart of accounts, and software integration).",
      "Phase 2: Daily Transaction Recording (Accurate and timely data entry and reconciliation).",
      "Phase 3: Monthly Closure & Reporting (Generating key financial statements and variance analysis).",
      "Phase 4: Quarterly Tax Compliance (Calculating and filing required statutory returns and deposits).",
      "Phase 5: Annual Audit Preparation and Finalization (Ensuring documentation is audit-ready).",
    ],
  },
};

export default function FinancialServices() {
  const content = FinancialServicesContent;

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
                <BanknotesIcon className="w-6 h-6 mr-2" />
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
                <CalculatorIcon className="w-6 h-6 mr-2" />
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