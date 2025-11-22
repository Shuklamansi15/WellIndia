import React from "react";
import Members from "./Members";

// --- STYLE CONSTANTS ---
const PRIMARY_COLOR_CLASS = "bg-[#1a5d91]";
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const PRIMARY_HOVER_CLASS = "hover:bg-[#154a70]";

// Refined card style for better visual feedback and responsiveness
const CARD_STYLE =
  "border-4 border-[#1a5d91] p-4 sm:p-5 rounded-xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:bg-blue-50 hover:scale-[1.01] transition-all duration-300";

const About = () => {
  const FIRM_NAME = "Wellindia";
  const FULL_FIRM_NAME = "Wellindia Corp Services";

  // --- COMPONENT: AdvantageCard (Optimized for text scaling) ---
  const AdvantageCard = ({ title, description }) => (
    <div
      // Added group for easier hover styling if needed later, better responsiveness for padding/gap
      className="border-l-4 border-[#1a5d91] p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 w-full rounded-xl bg-white shadow-md transition-all duration-300 cursor-pointer hover:shadow-xl hover:bg-blue-50 hover:scale-[1.02]"
    >
      <b
        // Title size scales from base-lg to sm-xl
        className={`text-lg sm:text-xl font-bold text-gray-800 ${PRIMARY_TEXT_CLASS}`}
      >
        {title}
      </b>
      {/* Description size scales from base-sm to sm-base */}
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  return (
    // Main Container: Consistent max-width and responsive padding
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 min-h-screen">
      {/* 🚀 Header Section */}
      <div className="text-center mb-10 sm:mb-14">
        {/* H1 Scaling: text-3xl -> sm:text-4xl -> lg:text-5xl */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          ABOUT <span className={PRIMARY_TEXT_CLASS}>{FIRM_NAME}</span>
        </h1>
        {/* Subtitle Scaling: text-base -> sm:text-lg -> lg:text-xl */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-2">
          Comprehensive solutions to drive organizational success.
        </p>
      </div>

      <hr className="my-8 sm:my-10" />

      {/* 🖼️ Image + Text Section (FIXED: Horizontal on SM+, Vertical on Mobile) */}
      {/* Changed md:flex-row to sm:flex-row */}
      <div className="my-10 flex flex-col sm:flex-row gap-8 lg:gap-12 items-start">
        {/* Image Container: Full width on mobile, 5/12 width from SM+ */}
        {/* Changed md:w-5/12 to sm:w-5/12 */}
        <div className="w-full sm:w-5/12">
          <img
            // Image scales to fill its container
            className="w-full h-auto rounded-xl shadow-lg"
            src="/about.webp"
            alt="Corporate business setting"
          />
        </div>

        {/* Text Content Container: Full width on mobile, 7/12 width from SM+ */}
        {/* Changed md:w-7/12 to sm:w-7/12 */}
        <div className="flex flex-col justify-center gap-4 sm:gap-6 w-full sm:w-7/12 text-gray-700">
          {/* Main Intro Text Scaling: text-lg -> sm:text-xl -> lg:text-2xl */}
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
            {FULL_FIRM_NAME} is a New Delhi-based firm established since 2014.
          </p>

          {/* Core Description Card (Text Scaling: text-sm -> sm:text-base) */}
          <div className={CARD_STYLE}>
            <p className="leading-relaxed text-sm sm:text-base">
              The firm provides comprehensive solutions across facility
              management, business strategy, IT security, and financial advisory.
              We are a single-point partner for clients seeking operational and
              financial excellence. We also offer specialized support for NGOs
              and startups in securing critical grants and funding.
            </p>
          </div>

          {/* Vision Card (Text Scaling: text-sm -> sm:text-base) */}
          <div className={CARD_STYLE}>
            {/* Title Scaling: text-lg -> sm:text-xl */}
            <b className={`text-lg sm:text-xl font-bold text-gray-800 mb-2 ${PRIMARY_TEXT_CLASS}`}>
              ★ Our Vision
            </b>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              We aim to empower organizations with strategic solutions, focusing
              on NGOs and startups to help them achieve operational excellence
              and financial sustainability.
            </p>
          </div>

          {/* Mission Card (Text Scaling: text-sm -> sm:text-base) */}
          <div className={CARD_STYLE}>
            {/* Title Scaling: text-lg -> sm:text-xl */}
            <b className={`text-lg sm:text-xl font-bold text-gray-800 mb-2 ${PRIMARY_TEXT_CLASS}`}>
              🎯 Our Mission
            </b>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              To be the most trusted partner for businesses and non-profits,
              delivering holistic solutions backed by expert guidance and a
              commitment to success and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* 🌟 Advantages Section */}
      <div className="mt-16 sm:mt-20 mb-8 sm:mb-10">
        {/* Section Header Scaling: text-3xl -> sm:text-4xl */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 border-b pb-3">
          OUR <span className={PRIMARY_TEXT_CLASS}>ADVANTAGES</span>
        </h2>
      </div>

      {/* Advantage Cards Grid: Responsive columns (1, 2, 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        <AdvantageCard
          title="Complete Business Solutions"
          description="A single partner for facility management, business strategy, and secure IT solutions."
        />
        <AdvantageCard
          title="Client-Centric Approach"
          description="We build long-term trust through collaboration and deep understanding."
        />
        <AdvantageCard
          title="Global & Pan-India Reach"
          description="We serve clients across India and globally with consistent, high-quality solutions."
        />
        <AdvantageCard
          title="Experienced Professionals"
          description="Our team brings deep industry knowledge to deliver impactful results."
        />
        <AdvantageCard
          title="Strong IT Security"
          description="We safeguard your data and systems with advanced digital security solutions."
        />
        <AdvantageCard
          title="24/7 Support"
          description="Round-the-clock support ensuring seamless business operations."
        />
      </div>

      {/* 👥 Team Members Section (Assumes 'Members' component is also responsive) */}
      <Members />

      {/* 💼 Core Services Section */}
      <div className="mt-16 sm:mt-20 mb-8 sm:mb-10">
        {/* Section Header Scaling: text-3xl -> sm:text-4xl */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 pb-3">
          KEY <span className={PRIMARY_TEXT_CLASS}>CORE SERVICES</span>
        </h2>
      </div>

      {/* Core Services List: Responsive columns (1, 2, 3) */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
        {[
          "NGO Consulting: Enhancing operations, strategy, outreach & funding.",
          "Business Development & Strategy: Growth planning and execution.",
          "Financial & Accounting Services: Management, bookkeeping & compliance.",
          "IT Solutions & Consulting: Secure, scalable technology solutions.",
          "Legal & Compliance: Navigating regulations with expert support.",
          "Human Resources (HR) Solutions: Talent management & policy development.",
        ].map((item, idx) => (
          <li
            key={idx}
            // List item text scaling: text-base -> sm:text-lg
            className="flex items-start gap-2 p-3 border-l-4 border-[#1a5d91] bg-gray-50/90 rounded text-base sm:text-lg"
          >
            <span className={PRIMARY_TEXT_CLASS}>✔</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;