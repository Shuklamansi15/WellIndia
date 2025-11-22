import React, { useMemo, memo, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ALL_SERVICES } from "../servicesData"; // Ensure this path is correct

// --- Theme Colors ---
const GRADIENT_START = "#325272";
const GRADIENT_END = "#5e86b4";
const TEXT_COLOR = "#406796";

const SpotlightCard = memo(({ title, description, icon }) => {
  return (
    <div
      className="group relative flex flex-col justify-start p-6 bg-white border border-[#406796] rounded-xl shadow-md transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl overflow-hidden service-card h-[250px] w-full"
      style={{
        "--gradient-start": GRADIENT_START,
        "--gradient-end": GRADIENT_END,
        "--text-color": TEXT_COLOR,
      }}
    >
      <div
        className="text-5xl mb-4 transition-colors duration-500 text-[var(--text-color)] group-hover:text-white"
        aria-hidden="true"
      >
        {icon}
      </div>

      <h4 className="text-xl font-bold mb-2 text-gray-800 transition-colors duration-500 group-hover:text-white">
        {title}
      </h4>

      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-200">
        {description}
      </p>
    </div>
  );
});
SpotlightCard.displayName = "SpotlightCard";

// --- CoreServices Component ---
export default function CoreServices() {
  const location = useLocation();
  const themeColorClass = `text-[${TEXT_COLOR}]`;

  const autoplayOptions = useMemo(
    () => ({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
    []
  );

  const getServicePath = useCallback((slug) => {
    return slug;
  }, []);

  const servicesToDisplay = ALL_SERVICES;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [Autoplay(autoplayOptions)]
  );

  useEffect(() => {
    if (location.hash && emblaApi) {
      const idToScrollTo = location.hash.substring(1);

      const serviceIndex = ALL_SERVICES.findIndex(
        (service) => service.slug.split("/").pop() === idToScrollTo
      );

      const timeout = setTimeout(() => {
        const element = document.getElementById(idToScrollTo);

        if (serviceIndex !== -1 && emblaApi) {
          emblaApi.scrollTo(serviceIndex, true);
        }

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });

          element.classList.add("highlight-service-card");
          setTimeout(() => {
            element.classList.remove("highlight-service-card");
          }, 2500);
        } else {
          console.warn(
            `Element with ID: ${idToScrollTo} not found after Embla initialization.`
          );
        }
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [location.hash, emblaApi]);

  return (
    <>
      <style>
        {`
          .service-card { transition: background 0.5s ease-in-out, transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, border 0.5s ease-in-out; background-image: none; }
          .service-card:hover { background-image: linear-gradient(to bottom right, ${GRADIENT_START}, ${GRADIENT_END}); border-color: transparent !important; }
          .service-link { display: flex; height: 100%; width: 100%; text-decoration: none; }
          .theme-button { transition: all 0.5s ease-in-out; border-color: ${TEXT_COLOR} !important; color: ${TEXT_COLOR} !important; }
          .theme-button:hover {
            background-image: linear-gradient(to bottom right, ${GRADIENT_START}, ${GRADIENT_END});
            border-color: transparent !important;
            color: white !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          
          .highlight-service-card { 
            box-shadow: 0 0 0 4px ${TEXT_COLOR} !important;
            transform: scale(1.03) !important;
            transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
            border-radius: 1rem; 
          }
        `}
      </style>

      {/* --- Section --- */}
      <div className="container items-center py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-sans">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3
            className={`text-sm font-semibold uppercase tracking-wider ${themeColorClass} mb-2`}
          >
            What We Do
          </h3>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Core Business Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 mb-1">
            A holistic approach to organizational success — covering strategic,
            operational, and financial needs.
          </p>
        </div>

        {/* --- Carousel --- */}
        <div className="overflow-hidden items-center mb-12" ref={emblaRef}>
          <div className="flex gap-8 flex-container">
            {servicesToDisplay.map((service) => (
              <div
                key={service.slug}
                id={service.slug.split("/").pop()}
                // **UPDATED: Responsive Classes for Carousel Items**
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%] flex justify-center items-stretch p-4"
              >
                <Link
                  to={getServicePath(service.slug)}
                  className="service-link"
                  title={`Go to ${service.title}`}
                >
                  <SpotlightCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon} // Passing the icon prop
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/services">
            <Button
              variant="outline"
              className="theme-button py-6 px-8 text-lg font-semibold border-2 transform hover:scale-[1.03]"
            >
              Explore All {ALL_SERVICES.length} Services
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}