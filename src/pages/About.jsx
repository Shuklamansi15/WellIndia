import React from "react";
import Members from "./Members";

const PRIMARY_COLOR_CLASS = "bg-[#1a5d91]";
const PRIMARY_TEXT_CLASS = "text-[#1a5d91]";
const PRIMARY_HOVER_CLASS = "hover:bg-[#154a70]";
const CARD_STYLE =
  "border-4 border-[#1a5d91] p-5 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:bg-blue-50 hover:scale-[1.02] transition-all duration-300";

const About = () => {
  const FIRM_NAME = "Wellindia";
  const FULL_FIRM_NAME = "Wellindia Corp Services";

  const AdvantageCard = ({ title, description }) => (
    <div
      className="border-l border-[#1a5d91] p-6 sm:p-8 flex flex-col gap-3 text-base w-full rounded-xl bg-white shadow-md transition-all duration-300 cursor-pointer hover:shadow-xl hover:bg-blue-50 hover:scale-[1.02]"
    >
      <b
        className={`text-lg font-bold text-gray-800 ${PRIMARY_TEXT_CLASS}`}
      >
        {title}
      </b>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          ABOUT <span className={PRIMARY_TEXT_CLASS}>{FIRM_NAME}</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mt-2">
          Comprehensive solutions to drive organizational success.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="my-10 flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
        {/* Image */}
        <div className="w-full md:w-5/12">
          <img
            className="w-full rounded-2xl shadow-2xl border-4 border-white object-cover transition-transform duration-300 hover:scale-[1.01]"
            src="/about.webp"
            alt="Corporate business setting"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6 md:w-7/12 text-gray-700">
          <p className="text-lg sm:text-xl font-semibold text-gray-900">
            {FULL_FIRM_NAME} is a New Delhi-based firm established since 2014.
          </p>

          <div className={CARD_STYLE}>
            <p className="leading-relaxed text-sm sm:text-base">
              The firm provides comprehensive solutions across facility
              management, business strategy, IT security, and financial advisory.
              We are a single-point partner for clients seeking operational and
              financial excellence. We also offer specialized support for NGOs
              and startups in securing critical grants and funding.
            </p>
          </div>

          <div className={CARD_STYLE}>
            <b className={`text-lg font-bold text-gray-800 mb-2 ${PRIMARY_TEXT_CLASS}`}>
              ★ Our Vision
            </b>
            <p className="text-sm leading-relaxed text-gray-700">
              We aim to empower organizations with strategic solutions, focusing
              on NGOs and startups to help them achieve operational excellence
              and financial sustainability.
            </p>
          </div>

          <div className={CARD_STYLE}>
            <b className={`text-lg font-bold text-gray-800 mb-2 ${PRIMARY_TEXT_CLASS}`}>
              🎯 Our Mission
            </b>
            <p className="text-sm leading-relaxed text-gray-700">
              To be the most trusted partner for businesses and non-profits,
              delivering holistic solutions backed by expert guidance and a
              commitment to success and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 border-b pb-3">
          OUR <span className={PRIMARY_TEXT_CLASS}>ADVANTAGES</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
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

      {/* Team Members Section */}
      <Members />

      {/* Core Services */}
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 pb-3">
          KEY <span className={PRIMARY_TEXT_CLASS}>CORE SERVICES</span>
        </h2>
      </div>

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
            className="flex items-start gap-2 p-3 border-l-4 border-[#1a5d91] bg-gray-50/90 rounded"
          >
            <span className={PRIMARY_TEXT_CLASS}>✔</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
