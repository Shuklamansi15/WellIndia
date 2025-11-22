import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// --- Theme Colors ---
const GRADIENT_START = "#325272";
const GRADIENT_END = "#5e86b4";
const TEXT_COLOR = "#406796";

// --- Team Members ---
const teamMembers = [
  {
    name: "Sonu Kumar",
    role: "Head Management & Cyber Expert",
    image: "/member (11).png",
    description:
      "An expert in cybersecurity and IT operations, Sonu ensures data security, system optimization, and smooth tech support.",
  },
  {
    name: "Sakshi Srivastava",
    role: "HR Executive & Project Coordinator",
    image: "/member (1).png",
    description:
      "Sakshi leads recruitment, employee engagement, and manages project flow and team alignment.",
  },
  {
    name: "Yogendra Gupta",
    role: "Senior Relationship Manager",
    image: "/member (5).png",
    description:
      "With 15+ years of experience, he builds strong client relationships through personalized support.",
  },
  {
    name: "Veerpal Shakya",
    role: "H.O.O & Operations Specialist",
    image: "/member (2).png",
    description:
      "Supports key administrative operations, workflows, documentation, and coordination.",
  },
  {
    name: "Sunita Bisht",
    role: "Project Coordinator",
    image: "/member (3).png",
    description:
      "Ensures timely follow-ups, client communication, and internal task coordination.",
  },
  {
    name: "Ritu",
    role: "Project Coordinator",
    image: "/member (4).png",
    description:
      "Brings structure and precision to timelines, coordination, and task management.",
  },
  {
    name: "Somya Mishra",
    role: "HR Manager",
    image: "/member (6).png",
    description:
      "Leads HR operations: hiring, onboarding, engagement, and workforce optimization.",
  },
  {
    name: "Kritika Shukla",
    role: "Junior Project Coordinator",
    image: "/member (9).png",
    description:
      "Supports planning, execution, and cross-functional coordination.",
  },
  {
    name: "Vikash Kumar",
    role: "Project Executive",
    image: "/member (15).png",
    description:
      "Responsible for project execution, resource allocation, and maintaining deliverable quality.",
  },
  {
    name: "Ayaj Singh",
    role: "Business Executive",
    image: "/member (14).png",
    description:
      "Focuses on business development, strategic partnerships, and market expansion initiatives.",
  },
];

// --- Team Card ---
const TeamMemberCard = ({ member }) => {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className="relative group p-5 bg-white border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full hover:scale-[1.02] overflow-hidden"
      style={{ borderColor: TEXT_COLOR }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-48 sm:h-52 lg:h-56 object-cover rounded-xl border-2 shadow-md mb-4 transition-all duration-500 group-hover:border-white"
        onError={(e) => {
          e.target.src = `https://placehold.co/300x300/${TEXT_COLOR.replace(
            "#",
            ""
          )}/fff?text=${initials}`;
        }}
      />

      <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-all duration-500">
        {member.name}
      </h3>

      <p className="text-sm font-semibold mb-2 transition-colors duration-500 text-[#406796] group-hover:text-amber-50">
        {member.role}
      </p>

      <p className="text-gray-600 text-xs italic group-hover:text-gray-200 transition-all duration-500">
        "{member.description}"
      </p>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500 -z-10"
        style={{
          background: `linear-gradient(135deg, ${GRADIENT_START}, ${GRADIENT_END})`,
        }}
      ></div>
    </div>
  );
};

// --- Main Component ---
export default function Members() {
  const autoplayOptions = useMemo(
    () => ({
      delay: 1500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
    []
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay(autoplayOptions)]
  );

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-10 font-sans bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h3
          className="text-sm font-semibold tracking-widest mb-2"
          style={{ color: TEXT_COLOR }}
        >
          OUR LEADERSHIP
        </h3>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Meet Our <span style={{ color: TEXT_COLOR }}>Core Team</span>
        </h2>

        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Dedicated professionals driving success through leadership and strategy.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-[0_0_260px] flex"
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button
          className="py-3 px-6 text-lg font-semibold rounded-lg transition-all duration-500 border-2"
          style={{ borderColor: TEXT_COLOR, color: TEXT_COLOR }}
          onMouseEnter={(e) => {
            e.target.style.background = `linear-gradient(135deg, ${GRADIENT_START}, ${GRADIENT_END})`;
            e.target.style.color = "white";
            e.target.style.borderColor = "transparent";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = TEXT_COLOR;
            e.target.style.borderColor = TEXT_COLOR;
          }}
        >
          Explore All Services
        </button>
      </div>
    </div>
  );
}
