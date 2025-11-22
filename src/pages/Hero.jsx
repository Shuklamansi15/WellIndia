import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Check, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

import { ALL_SERVICES } from "../servicesData.js";

const THEME_COLOR = "#406796";
const DARK_ACCENT = "#325272";

export default function HeroSection() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const serviceChips = useMemo(
    () =>
      ALL_SERVICES.slice(0, 4).map((s) => ({
        name: s.title,
        // FIX: Ensure the path is correct. Assuming s.slug is the correct route.
        // If s.slug is just the ID (e.g., 'ngo-consulting'), change 'path: s.slug' to:
        // path: `/services/${s.slug}`, and ensure the slug structure in ALL_SERVICES matches App.jsx routes.
        // Based on the previous context, we'll assume s.slug holds the correct full path.
        path: s.slug,
      })),
    []
  );

  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const query = searchTerm.toLowerCase().trim();

    const firstMatch = ALL_SERVICES.find(
      (service) =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query)
    );

    if (firstMatch) {
      // FIX: Ensure we navigate to the exact path from the service data
      navigate(firstMatch.slug);
      // NOTE: The previous code was navigating to /services#serviceId, 
      // which is usually for scrolling, but navigating directly to the slug is more standard.
      // If the slug is a direct route (e.g., /services/ngo-consulting), this works better.
      // If ALL_SERVICES.slug is NOT a direct route, further adjustment to servicesData.js is needed.
    } else {
      alert(`No service found matching "${searchTerm}".`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const TYPING_SPEED = 100;
    const DELETING_SPEED = 50;
    const PAUSE_DURATION = 1500;

    const currentWord = serviceChips[wordIndex % serviceChips.length].name;
    let timer;

    if (!isDeleting) {
      if (displayedPlaceholder.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedPlaceholder(
            currentWord.substring(0, displayedPlaceholder.length + 1)
          );
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      }
    } else {
      if (displayedPlaceholder.length > 0) {
        timer = setTimeout(() => {
          setDisplayedPlaceholder(
            currentWord.substring(0, displayedPlaceholder.length - 1)
          );
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % serviceChips.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedPlaceholder, isDeleting, wordIndex, serviceChips]);

  const valueProps = [
    "24/7 Support",
    "Global & Pan-India Reach",
    "Value-Driven Pricing",
  ];

  return (
    <section className="container py-16 items-center md:py-24 text-center relative overflow-hidden">
      <Link
        to="/about-us" // FIXED: Path changed from /about to /about-us
        className="inline-flex items-center px-3 py-1 text-sm font-semibold text-[#406796] bg-[#406796]/10 rounded-full mb-4 
                        animate-fadeInUp transition-all duration-500 relative group cursor-pointer"
      >
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-blue-950 text-white text-xs font-normal 
                                  rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        >
          We are online
        </span>
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Your single partner for operational and financial excellence
      </Link>

      {/* Title Responsiveness: text-4xl (base) -> sm:text-5xl -> lg:text-6xl -> xl:text-7xl */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-tight sm:leading-snug lg:leading-none animate-fadeInUp delay-100">
        <span
          className="text-transparent text-center bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(to right, ${THEME_COLOR}, ${DARK_ACCENT})`,
          }}
        >
          Empower Your Organization With Holistic Solutions
        </span>
      </h1>

      {/* Subtext Responsiveness: text-lg (base) -> sm:text-xl */}
      <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fadeInUp delay-200">
        Wellindia Corp Services provides comprehensive solutions in facility
        management, business strategy, IT security, and specialized support for
        NGOs and startups.
      </p>

      {/* Search Bar - Ensure full width on mobile, and better button/input scaling */}
      <div className="flex justify-center mb-10 w-full px-4 sm:px-0 animate-fadeInUp delay-300">
        <div className="relative w-full max-w-xl shadow-2xl rounded-xl flex">
          {/* Search Icon: h-5 w-5 (base) -> sm:h-6 sm:w-6 */}
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6"
            style={{ color: THEME_COLOR }}
          />
          {/* Input: pl-10 (base) -> sm:pl-12, py-5 (base) -> sm:py-7, text-base (base) -> lg:text-lg */}
          <Input
            type="text"
            placeholder={`Search for ${displayedPlaceholder}...`}
            className="w-full pl-10 sm:pl-12 pr-4 py-5 sm:py-7 text-base lg:text-lg rounded-l-xl rounded-r-none border-2 border-gray-300 focus:border-[#406796] transition-colors duration-300 shadow-inner"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {/* Button: py-5 (base) -> sm:py-7, px-6 (base) -> sm:px-8, text-base (base) -> sm:text-lg */}
          <Button
            onClick={handleSearch}
            className="py-5 sm:py-7 px-6 sm:px-8 text-base sm:text-lg font-semibold rounded-l-none "
            style={{ backgroundColor: THEME_COLOR }}
          >
            Search
          </Button>
        </div>
      </div>

      {/* Service Chips: Adjusted gap for mobile */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 animate-fadeInUp delay-350">
        {serviceChips.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            // Chip size: px-3 py-1.5 (base) -> sm:px-4 sm:py-2, text-xs (base) -> sm:text-sm
            className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-gray-800 bg-gray-100 rounded-full transition-shadow duration-300 hover:shadow-md hover:bg-[#406796]/10 hover:text-[#406796]"
          >
            {service.name}
          </Link>
        ))}
      </div>

      {/* CTA Buttons: force full width on xs/sm, stacked (flex-col) then row (sm:flex-row) */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 animate-fadeInUp delay-400 px-4 sm:px-0">
        {/* Link to Contact page */}
        <Link to="/contact" className="w-full sm:w-auto">
          <Button
            style={{
              backgroundImage: `linear-gradient(to right, ${THEME_COLOR}, ${DARK_ACCENT})`,
            }}
            // Button size: py-5 px-6 (base) -> sm:py-6 sm:px-8, text-base (base) -> sm:text-lg, w-full
            className="w-full text-white py-5 px-6 text-base sm:py-6 sm:px-8 sm:text-lg font-semibold shadow-lg hover:scale-[1.03] hover:opacity-90 transition-all"
          >
            Get Strategic Guidance
          </Button>
        </Link>

        {/* Link to All Services page */}
        <Link to="/services" className="w-full sm:w-auto">
          <Button
            variant="outline"
            style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
            // Button size: py-5 px-6 (base) -> sm:py-6 sm:px-8, text-base (base) -> sm:text-lg, w-full
            className="w-full py-5 px-6 text-base sm:py-6 sm:px-8 sm:text-lg font-semibold hover:bg-[#406796]/10 hover:scale-[1.03] transition-all"
          >
            Explore All {ALL_SERVICES.length} Services
          </Button>
        </Link>
      </div>

      {/* Value Props: Responsive gaps and text size */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4 pt-4 border-t border-gray-100 animate-fadeInUp delay-500">
        {valueProps.map((prop, index) => (
          <div
            key={index}
            // Text size: text-sm (base) -> sm:text-base
            className="flex items-center text-sm sm:text-base text-gray-700 font-medium"
          >
            {/* Icon size: w-4 h-4 (base) -> sm:w-5 sm:h-5, mr-1.5 (base) -> sm:mr-2 */}
            <Check className="w-4 h-4 mr-1.5 sm:w-5 sm:h-5 sm:mr-2 mt-0.5 text-green-500" />
            {prop}
          </div>
        ))}
      </div>

      {/* Theme Circles: Added classes to hide some circles on smaller screens for cleaner mobile view */}
      <div className="theme-circles">
        <div
          className="theme-circle"
          style={{
            width: "120px",
            height: "120px",
            top: "10%",
            left: "20%",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="theme-circle hidden md:block" /* Hidden on screens < md */
          style={{
            width: "180px",
            height: "180px",
            top: "60%",
            left: "70%",
            animationDelay: "5s",
          }}
        ></div>
        <div
          className="theme-circle hidden sm:block" /* Hidden on screens < sm */
          style={{
            width: "90px",
            height: "90px",
            top: "30%",
            left: "80%",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="theme-circle hidden lg:block" /* Hidden on screens < lg */
          style={{
            width: "150px",
            height: "150px",
            top: "75%",
            left: "15%",
            animationDelay: "8s",
          }}
        ></div>
      </div>
    </section>
  );
}