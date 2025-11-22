import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const PARTNERS = [
  { name: "SumHR", logo: "/sumhr.png", description: "HR Management Platform" },
  { name: "HDFC BANK", logo: "/hdfc.jpg", description: "Leading Financial Institution" },
  { name: "Jupiter", logo: "/jupiter.png", description: "Digital Banking Partner" },
  { name: "YES BANK", logo: "/yes_bank.jpg", description: "Modern Banking Services" },
  { name: "AWS Partner Network", logo: "/aws.png", description: "Cloud Infrastructure Provider" },
  { name: "Google Cloud", logo: "/google_cloud.png", description: "Enterprise Cloud Computing" },
  { name: "FEDERAL BANK", logo: "/federal_bank.png", description: "Your Perfect Banking Partner" },
  { name: "Razorpay", logo: "/razorpay.jpg", description: "Payment Gateway Solutions" },
  { name: "HackHalt", logo: "/hackhalt.jpg", description: "Cybersecurity Partner" },
  { name: "PECB", logo: "/pecb.png", description: "Certification & Examination Partner" },
  { name: "IDFC FIRST Bank", logo: "/idfc.png", description: "Premium Financial Institution" },
];

export default function PartnerSection() {
  const autoplayOptions = useMemo(
    () => ({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 6,
    }),
    []
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    <section className="w-full py-16 sm:py-20 font-sans overflow-hidden">
      <div className="container px-3 items-center w-full sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-500">
            Our Network
          </h3>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-900 mt-2 leading-snug">
            Trusted Partners and Collaborators
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg px-2">
            We work closely with industry-leading companies to deliver complete integrated solutions.
          </p>
        </div>

        {/* EMBLA CAROUSEL */}
        <div ref={emblaRef} className="overflow-hidden items-center w-full">
          {/* Added a margin class for a small gap on the right if needed, but 'gap-3 sm:gap-4' takes care of internal spacing */}
          <div className="flex gap-3 sm:gap-4 select-none">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="
                  flex-shrink-0
                  w-[45%]                 /* Changed: Show more slides on very small screens */
                  xs:w-[31%]               /* Changed: Show ~3 slides on xs screens */
                  sm:w-[23%]               /* Changed: Show 4 slides on sm screens (tablets) */
                  md:w-[18%]               /* Changed: Show 5 slides on md screens */
                  lg:w-[15%]               /* Changed: Show 6 slides on lg screens */
                  xl:w-[15%]               /* Kept similar for larger screens */
                "
              >
                <div
                  className="
                    flex flex-col items-center justify-center
                    p-4 sm:p-6 bg-white border border-blue-200 rounded-2xl
                    h-48 xs:h-52 sm:h-52
                    transition-all duration-300
                    hover:bg-blue-50 hover:shadow-xl hover:border-transparent
                    cursor-pointer group
                  "
                >
                  {/* LOGO BOX */}
                  <div
                    className="
                      h-16 xs:h-20 w-full max-w-[140px]
                      mb-3 sm:mb-4 flex items-center justify-center
                      p-2 sm:p-3 bg-white rounded-xl border border-blue-100 shadow-inner
                    "
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="
                        max-h-full max-w-full object-contain
                        transition-transform duration-300 group-hover:scale-110
                      "
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/140x60/CCCCCC/000000?text=${partner.name
                          .split(" ")[0]
                          .toUpperCase()}`;
                      }}
                    />
                  </div>

                  <h4 className="text-sm font-bold text-gray-900 text-center px-1 leading-tight">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 text-center hidden sm:block">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}