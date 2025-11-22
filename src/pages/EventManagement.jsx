import React from "react";
// Assuming ConsultationCard is available in the current directory or context
import { ConsultationCard } from "./Card";
import { CheckIcon, CalendarDaysIcon, UserGroupIcon, GlobeAltIcon, SunIcon } from "@heroicons/react/24/outline";

// THEME CONSTANTS
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const CARD_BORDER_ACCENT = "border-[#1a5d91]";

// CONSOLIDATED CONTENT OBJECT
const EventManagementContent = {
  mainTitle: "Event Management and Planning",
  tagline: "We handle all aspects of event coordination, from initial planning to final execution, to ensure a successful and memorable experience.",

  // Section 1: Main Overview (Delivering Memorable Experiences)
  mainOverview: {
    title: "Delivering Flawless and Memorable Experiences ✨",
    text: "A well-executed event is a powerful tool for brand building, client engagement, and celebrating success. Our expert team manages every detail of your event, ensuring it aligns perfectly with your objectives, budget, and brand identity. We turn complex logistics into seamless realities.",
    coreBenefitTitle: "Key Benefits of Professional Event Management",
    coreBenefitList: [
      "Stress-Free Execution: We handle the logistics so you can focus on your guests and objectives.",
      "Cost-Effective Solutions: Leverage our vendor network to secure the best pricing without sacrificing quality.",
      "Enhanced Brand Image: Deliver a professional, polished, and memorable experience that reflects positively on your organization.",
    ],
  },

  // Section 2: Core Services (Types of Events Managed)
  coreServices: {
    title: "Comprehensive Event Support Categories",
    list: [
      "Corporate Events (Conferences, Seminars, Product Launches, Team Building).",
      "Non-Profit Events (Fundraisers, Galas, Community Outreach Programs).",
      "Institutional Events (Educational Workshops, Convocation Ceremonies).",
      "Exhibitions and Trade Shows (Stall Design, Logistics, Delegate Management).",
      "Social and Private Events (Custom celebrations and high-profile gatherings).",
    ],
  },

  // Section 3: Specialized Support (Strategic Advantages Style - Detailed Cards)
  specializedSupport: {
    title: "Our Operational Advantages",
    list: [
      {
        icon: <GlobeAltIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "Global & Pan-India Coverage",
        description: "Our New Delhi base allows us to manage and execute events across all major cities in India and coordinate seamless logistics for international participants.",
      },
      {
        icon: <SunIcon className={`w-6 h-6 ${PRIMARY_TEXT_CLASS} flex-shrink-0 mr-3`} />,
        heading: "24/7 Support and Coordination",
        description: "We provide round-the-clock support leading up to and during the event, ensuring every unforeseen detail is handled quickly and professionally.",
      },
    ],
  },

  // Section 4: Process Steps (The Event Planning Roadmap)
  developmentProcess: {
    title: "Our 5-Step Event Planning Roadmap 🗓️",
    steps: [
      "Step 1: Consultation & Concept Development (Defining goals, audience, and theme).",
      "Step 2: Budgeting & Venue Selection (Securing the ideal location and managing costs).",
      "Step 3: Logistics & Vendor Management (Handling F&B, sound, lighting, accommodation, and transportation).",
      "Step 4: On-Site Execution & Coordination (Flawless setup, guest flow, and real-time management).",
      "Step 5: Post-Event Analysis (Feedback collection, financial reconciliation, and performance review).",
    ],
  },
};

export default function EventManagement() {
  const content = EventManagementContent;

  return (
    <div className="min-h-screen py-16">
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
                <CalendarDaysIcon className="w-6 h-6 mr-2" />
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

              {/* SECTION 2: Core Event Types (Core Focus Style) */}
              <h2
                className={`text-2xl font-bold ${PRIMARY_TEXT_CLASS} mb-4 border-b pb-2 mt-8 flex items-center`}
              >
                <UserGroupIcon className="w-6 h-6 mr-2" />
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

              {/* SECTION 4: Planning Process (Numbered List) */}
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