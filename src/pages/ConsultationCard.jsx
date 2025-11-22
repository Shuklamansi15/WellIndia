import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ConsultationCard } from "./Card";

const THEME_ACCENT_TEXT = "text-[#406796]";
const COMPANY_NAME = "WELL INDIA";

const marketingServices = [
  { name: "NGO Consulting", path: "/services/ngo-consulting" },
  { name: "Business Development & Strategy", path: "/services/business-strategy" },
  { name: "Financial & Accounting Services", path: "/services/accounting" },
  { name: "IT Solutions & Consulting", path: "/services/it" },
  { name: "Legal & Compliance Services", path: "/services/legal" },
  { name: "HR Solutions & Recruitment Support", path: "/services/hr" },
];

export default function ConsultationSplitBlock() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <div className="relative w-full py-16 lg:py-24 bg-gray-50 overflow-hidden">
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[100]">
          <ConsultationCard onClose={() => setShowPopup(false)} />
        </div>
      )}

      {/* Main Container: Changed from default flex-col to lg:flex-row for better tablet/desktop split */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left Content Block */}
        {/* Adjusted max-width for better use of space on medium screens. Added responsive padding. */}
        <div className="max-w-xl lg:max-w-3xl lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left">
          <p className="mt-6 sm:mt-10 text-sm text-gray-500">Corporate and advisory services</p>
          {/* Title Responsiveness: text-4xl (base) -> sm:text-5xl -> lg:text-6xl -> xl:text-7xl */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            <span className={THEME_ACCENT_TEXT}>Your Trusted Partner for Business Legalities.</span>
          </h1>
          {/* Subtext Responsiveness: text-base (base) -> sm:text-lg -> lg:text-xl */}
          <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
            {COMPANY_NAME} is a New Delhi-based firm providing comprehensive solutions to drive organizational success.
          </p>
          {/* Services Grid: grid-cols-1 (base) -> sm:grid-cols-2 -> lg:grid-cols-3 (on larger screens if needed) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-700">
            {marketingServices.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                // Check icon and link text size adjustments
                className="flex items-start text-base sm:text-lg font-medium hover:text-[#406796] transition-colors"
              >
                <Check className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                {service.name}
              </Link>
            ))}
          </div>
          {/* Button: Added scaling effect and slightly larger size on sm screens */}
          <Link to="/services">
            <Button className="mt-8 bg-[#406796] hover:bg-[#2d4d74] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all text-base sm:text-lg hover:scale-[1.03]">
              Explore Our Services
            </Button>
          </Link>
        </div>

        {/* Right Card Block */}
        {/* Adjusted max-w for the card and added responsive margin control */}
        <div className="flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md mx-auto lg:ml-12 lg:mx-0">
          <ConsultationCard />
        </div>
      </div>
    </div>
  );
}