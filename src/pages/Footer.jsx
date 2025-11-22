import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Copyright,
  Linkedin,
  Facebook,
  X as Twitter,
  Instagram,
} from "lucide-react";
import PartnerSection from "./Partners";

const THEME_COLOR = "#406796";
const DARK_THEME_ACCENT = "#325272";

/* ----------------------------------------
  Simple Button
-----------------------------------------*/
const Button = ({ onClick, children, className = "", style = {}, variant = "default" }) => {
  let base = "inline-flex items-center justify-center rounded-lg transition-all duration-300";

  if (variant === "default") base += " bg-blue-500 text-white hover:bg-blue-600";
  if (variant === "outline") base += " bg-white border hover:bg-gray-100";

  return (
    <button onClick={onClick} className={`${base} ${className}`} style={style}>
      {children}
    </button>
  );
};

/* ----------------------------------------
  Tracking Popup
-----------------------------------------*/
const TrackingPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100]" onClick={onClose}>
      <div
        className="bg-white w-11/12 max-w-4xl h-[90vh] rounded-xl shadow-xl p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h3 className="text-2xl font-bold" style={{ color: THEME_COLOR }}>
            Project Tracking Status
          </h3>

          <button onClick={onClose} className="text-3xl leading-none hover:text-red-500 transition">
            ×
          </button>
        </div>

        <div className="flex-grow">
          <iframe
            src="https://wellindia.shipway.com/track"
            className="w-full h-full"
            style={{ border: "none" }}
            title="Tracking"
          />
        </div>

        <div className="pt-4 border-t text-center">
          <Button
            variant="outline"
            onClick={onClose}
            className="py-2 px-8 font-semibold"
            style={{ color: THEME_COLOR, borderColor: DARK_THEME_ACCENT }}
          >
            Close Tracker
          </Button>
        </div>
      </div>
    </div>
  );
};

/* ----------------------------------------
  Footer Static Content
-----------------------------------------*/
const FOOTER_CONTENT = {
  mainText:
    "Wellindia Corp Services is a New Delhi-based firm providing comprehensive solutions to drive organizational success.",

  services: [
    { name: "NGO Consulting", href: "/services/ngo-consulting" },
    { name: "Business Strategy", href: "/services/business-development-and-strategy" },
    { name: "IT Solutions & Consulting", href: "/services/it-solutions-and-consulting" },
    { name: "Financial Services", href: "/services/financial-and-accounting-services" },
    { name: "Legal & Compliance", href: "/services/legal-and-compliance-services" },
    { name: "HR Solutions", href: "/services" },
  ],

  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
    { name: "Projects", href: "#projects" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
  ],

  contact: {
    email: "management@wellindia.in",
    phone1: "+91 79821 40425",
    address: "202, Hans Bhawan, Bahadur Shah Zafar Marg, ITO Central Delhi 110002",
  },

  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ],
};

/* ----------------------------------------
  Footer Link
-----------------------------------------*/
const FooterLink = ({ name, href }) => (
  <a href={href} className="flex items-center text-sm text-gray-700 hover:text-blue-500">
    <ChevronRight className="w-4 h-4 mr-1" style={{ color: DARK_THEME_ACCENT }} />
    {name}
  </a>
);

/* ----------------------------------------
  Contact Item
-----------------------------------------*/
const ContactItem = ({ Icon, text, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-blue-500">
    <Icon className="w-5 h-5 mt-0.5" style={{ color: DARK_THEME_ACCENT }} />
    <span className="text-sm">{text}</span>
  </a>
);


/* ----------------------------------------
  MAIN FOOTER
-----------------------------------------*/
const Footer = () => {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  // The mapsLink generation was slightly incorrect; fixing it to point to a valid Google Maps search
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FOOTER_CONTENT.contact.address)}`;

  return (
    <>
      {/* FIX: Wrap PartnerSection in a centering div (max-w-7xl mx-auto) 
        to ensure it aligns with the rest of the main content.
      */}
      <div className="max-w-7xl mx-auto px-4">
        <PartnerSection />
      </div>

      <footer
        className="text-gray-700 border-t bg-cover bg-center relative"
        style={{ backgroundImage: "url('footer.jpg')" }}
      >
        <div className="absolute inset-0 bg-white opacity-75"></div>

        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          {/* UPDATED: Added responsive grid classes for sm, md, lg, and xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {/* Brand Section */}
            <div>
              <img src="/logo.png" alt="Wellindia Logo" className="w-40" />
              <p className="text-sm mt-4">{FOOTER_CONTENT.mainText}</p>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full py-3 font-semibold shadow-md"
                  style={{ borderColor: DARK_THEME_ACCENT, color: DARK_THEME_ACCENT }}
                  onClick={() => setIsTrackingOpen(true)}
                >
                  Track Your Project
                </Button>
              </div>

              {/* Fixed Social Media Links */}
              <div className="flex gap-4 pt-6">
                {/* LinkedIn - Fixed URL and added external link attributes/styles */}
                <a
                  href="https://linkedin.com/company/well-india/"
                  className="text-gray-700 hover:text-[#0077B5] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                {/* Facebook - Added external link attributes and specific hover color */}
                <a
                  href="https://www.facebook.com/wellindia.in/"
                  className="text-gray-700 hover:text-[#1877F2] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6" />
                </a>

                {/* Instagram - Added external link attributes and specific hover color */}
                <a
                  href="https://www.instagram.com/wellindia.in/"
                  className="text-gray-700 hover:text-[#E4405F] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold text-[#406796] border-b-2 pb-1 inline-block">Services</h4>
              <div className="mt-3 space-y-2">
                {FOOTER_CONTENT.services.map((item) => (
                  <FooterLink key={item.name} {...item} />
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xl font-semibold text-[#406796] border-b-2 pb-1 inline-block">Company</h4>
              <div className="mt-3 space-y-2">
                {FOOTER_CONTENT.company.map((item) => (
                  <FooterLink key={item.name} {...item} />
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold text-[#406796] border-b-2 pb-1 inline-block">Contact</h4>

              <div className="mt-4 space-y-4">
                <ContactItem Icon={Mail} text={FOOTER_CONTENT.contact.email} link={`mailto:${FOOTER_CONTENT.contact.email}`} />
                <ContactItem Icon={Phone} text={FOOTER_CONTENT.contact.phone1} link={`tel:${FOOTER_CONTENT.contact.phone1}`} />
                <ContactItem Icon={MapPin} text={FOOTER_CONTENT.contact.address} link={mapsLink} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-1">
              <Copyright className="w-4 h-4" />
              <span>2025 Wellindia. All rights reserved.</span>
            </div>

            <div className="flex gap-4 mt-3 sm:mt-0">
              {FOOTER_CONTENT.legal.map((l) => (
                <a key={l.name} href={l.href} className="hover:text-blue-600">{l.name}</a>
              ))}
            </div>
          </div>
        </div>

        <TrackingPopup isOpen={isTrackingOpen} onClose={() => setIsTrackingOpen(false)} />
      </footer>
    </>
  );
};

export default Footer;