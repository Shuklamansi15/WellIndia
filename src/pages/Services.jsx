import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
// Assuming the data is exported from a file named servicesData.js
import { ALL_SERVICES } from "../servicesData"; 

// --- Theme Colors ---
const THEME_COLOR = "#406796";
const LIGHT_THEME_ACCENT = "#4067961A"; // 10% opacity
const DARK_THEME_ACCENT = "#325272";

// --- INDIVIDUAL CARD COMPONENT ---
export function ServiceCard({ service, index }) {
 // FIX: Use the 'slug' from the service object, which is now assumed to be the full path (e.g., /services/ngo-consulting)
 const slug = service.slug; 

 return (
  <a href={slug} className="block group transition-transform duration-300 hover:scale-[1.02]">
   <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl border-gray-200">

    {/* Header */}
    <CardHeader className="p-6 pb-0">
     <div className="flex items-center justify-between mb-2">
      <CardTitle className="text-xl font-bold" style={{ color: THEME_COLOR }}>
       {service.title}
      </CardTitle>

      <div
       className="text-white text-lg font-extrabold flex items-center justify-center h-10 w-10 rounded-full shadow-md"
       style={{ backgroundColor: THEME_COLOR }}
      >
       {index + 1}
      </div>
     </div>

     <CardDescription className="text-gray-600 mt-2">
      {service.description}
     </CardDescription>
    </CardHeader>

    {/* Key Areas */}
    <CardContent className="flex-grow p-6 pt-4">
     <h4 className="text-base font-semibold mb-3 text-gray-800 border-b pb-1 border-gray-100">
      Key Focus Areas:
     </h4>

     <div className="space-y-2">
      {service.keyAreas.map((area, i) => (
       <p key={i} className="flex items-start text-sm text-gray-700">
        <Check className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
        {area}
       </p>
      ))}
     </div>
    </CardContent>

    {/* Footer Button */}
    <div className="p-6 pt-0">
     <Button
      variant="outline"
      className="w-full text-base font-semibold py-6 border-2 transform hover:scale-[1.03]"
      style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
     >
      Know More
     </Button>
    </div>
   </Card>
  </a>
 );
}

// --- MAIN SERVICES SECTION ---
export default function Services() {
 return (
  <section
   className="container mx-auto px-4 py-16 md:py-24"
   style={{ background: `linear-gradient(to top, #ffffff, ${LIGHT_THEME_ACCENT})` }}
  >
   {/* Header */}
   <div className="max-w-4xl mx-auto text-center mb-16">
    <p
     className="text-sm font-semibold uppercase tracking-wider mb-2"
     style={{ color: DARK_THEME_ACCENT }}
    >
     8 Pillars of Excellence
    </p>

    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
     Comprehensive Solutions for{" "}
     <span style={{ color: THEME_COLOR }}>Organizational Success</span>
    </h2>

    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
     Wellindia Corp Services provides expert guidance across 8 core domains, driving operational
     excellence and financial sustainability for businesses, NGOs, and startups.
    </p>
   </div>

   {/* Track Project Button */}
   <div className="text-center mt-8 mb-12">
    <a
     href="https://wellindia.shipway.com/track"
     target="_blank"
     rel="noopener noreferrer"
     className="inline-block"
    >
     <Button
      variant="outline"
      className="py-6 px-8 text-lg font-semibold border-2 transform hover:scale-[1.03]"
      style={{ borderColor: THEME_COLOR, color: THEME_COLOR }}
     >
      Track Your Project
     </Button>
    </a>
   </div>

   {/* Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {ALL_SERVICES.map((service, index) => (
     <ServiceCard key={index} service={service} index={index} />
    ))}
   </div>

  </section>
 );
}