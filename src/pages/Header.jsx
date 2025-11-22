import React, { useState, useCallback } from 'react';
import { Menu, X, ChevronDown, User, Phone } from 'lucide-react';

// --- Configuration & Data ---
const THEME_COLOR = "#406796"; // WellIndia Blue
const HOVER_COLOR_CLASS = "hover:text-[#406796]";

const coreServices = [
  { title: "NGO Consulting", href: "/services/ngo-consulting" },
  { title: "Business Development and Strategy", href: "/services/business-development-and-strategy" }, 
  { title: "Marketing Consultation", href: "/services/marketing-consultation" }, 
  { title: "Event Management and Planning", href: "/services/event-management-and-planning" }, 
  { title: "Financial and Accounting Services", href: "/services/financial-and-accounting-services" }, 
  { title: "IT Solutions and Consulting", href: "/services/it-solutions-and-consulting" }, 
  { title: "Legal and Compliance Services", href: "/services/legal-and-compliance-services" }, 
  { title: "Government Project Support", href: "/services/government-project-support" }, 
  { title: "Human Resources (HR) Solutions", href: "/services/hr-solutions" }, 
];
const businessStrategyServices = coreServices.slice(1, 4); 
const supportServices = coreServices.slice(4); 

// --- Custom Components (Simulating UI Libs) ---

// Simple Link Component simulation (replaces react-router-dom Link)
const Link = ({ to, children, className = "", onClick }) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

// Simple Button Component
const Button = ({ children, className = "", variant = "default", style = {}, onClick }) => {
  let baseClasses = "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]";
  
  if (variant === "default") {
    baseClasses += " h-10 px-4 py-2 text-white shadow-md";
    style.backgroundColor = style.backgroundColor || THEME_COLOR;
    baseClasses += " hover:bg-[#325272]"; // Darker hover
  } else if (variant === "ghost") {
    baseClasses += " h-10 px-4 py-2 text-gray-700 hover:bg-gray-100";
  } else if (variant === "icon") {
    baseClasses += " h-10 w-10 p-0 text-gray-700 hover:bg-gray-100";
  } else if (variant === "link") {
    baseClasses += " h-auto p-0 text-gray-700 hover:text-[#406796] underline-offset-4";
  }

  return (
    <button className={`${baseClasses} ${className}`} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

// Simple Separator Component
const Separator = ({ className = "my-4" }) => (
  <div className={`h-px w-full bg-gray-200 ${className}`} />
);

// --- Navigation Item Component ---
const ListItem = ({ title, children, href, onClick }) => {
  return (
    <li>
      <Link
        to={href}
        onClick={onClick}
        className="block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors duration-300 hover:bg-[#406796]/10 focus:bg-[#406796]/10 group"
      >
        <div className={`text-sm font-medium leading-none group-hover:text-gray-900 transition-colors`}>{title}</div>
        {children && <p className="text-sm text-gray-500">{children}</p>}
      </Link>
    </li>
  );
};

// --- Dropdown Menu Component (Simulating NavigationMenu) ---
const DesktopDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <div 
      className="relative h-16 flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button variant="link" className={`flex items-center text-base h-full px-4 rounded-none ${HOVER_COLOR_CLASS}`}>
        {title}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </Button>

      {isOpen && (
        <div 
          className="absolute top-full -left-4 mt-0 w-max z-50 bg-white border border-gray-200 rounded-lg shadow-xl animate-in fade-in-0 slide-in-from-top-1"
          style={{ minWidth: '400px' }}
        >
          <ul className="grid w-full grid-cols-2 gap-2 p-4">
            {items.map((item) => (
              <ListItem key={item.title} title={item.title} href={item.href} onClick={closeMenu} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// --- Mobile Sheet Component ---
const MobileSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <Button
        variant="outline"
        className={`h-10 w-10 lg:hidden ${HOVER_COLOR_CLASS} border-gray-300`}
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sheet Content */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[60] overflow-hidden" 
          aria-labelledby="slide-over-title" 
          role="dialog" 
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-sm bg-white shadow-2xl transform transition ease-in-out duration-500 sm:duration-700">
              <div className="h-full flex flex-col py-6 overflow-y-auto px-4">
                <div className="flex items-start justify-between">
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <img src="/logo.png" alt="WellIndia Logo" className="h-8 w-auto" />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <Separator className="my-6" />

                <nav className="flex flex-col space-y-4 text-gray-700">
                  {/* Menu Items */}
                  <Link to="/" className="text-base font-medium hover:text-[#406796]" onClick={() => setIsOpen(false)}>Home</Link>
                  <Link to="/services" className="text-base font-medium hover:text-[#406796]" onClick={() => setIsOpen(false)}>Services</Link>
                  <Link to="/about-us" className="text-base font-medium hover:text-[#406796]" onClick={() => setIsOpen(false)}>About Us</Link>
                  <Link to="/contact" className="text-base font-medium hover:text-[#406796]" onClick={() => setIsOpen(false)}>Contact Us</Link>

                  <Separator className="my-4" />
                  
                  {/* Core Services Section */}
                  <h4 className="font-semibold text-lg text-[#406796]">Core Services</h4>
                  <ul className="pl-4 space-y-2">
                    {coreServices.slice(0, 4).map((item) => (
                      <li key={item.title}>
                        <Link
                          to={item.href}
                          className="text-sm hover:text-[#406796]"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/services"
                        className="text-sm font-bold text-[#406796]"
                        onClick={() => setIsOpen(false)}
                      >
                        ... View All Services
                      </Link>
                    </li>
                  </ul>
                  
                  <Separator className="my-4" />

                  {/* Employee Login Button */}
                  <Link to="/employe" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">
                      <User className="h-4 w-4 mr-2" /> Employe LogIn
                    </Button>
                  </Link>
                  
                  {/* Consultation Button */}
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gray-100 text-[#406796] hover:bg-gray-200">
                      <Phone className="h-4 w-4 mr-2" /> Free Consultation
                    </Button>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- Main Header Component ---
export default function Header() {
  return (
    // Header with white background
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="WellIndia Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu - Hidden below lg */}
        <nav className="hidden lg:flex h-16 items-center">
          <ul className="flex space-x-0 h-full">
            {/* Home link */}
            <li className="flex items-center h-full">
              <Link
                to="/"
                className={`flex items-center h-full px-4 text-base font-medium transition-colors duration-200 ${HOVER_COLOR_CLASS}`}
              >
                Home
              </Link>
            </li>
            
            {/* Services link */}
            <li className="flex items-center h-full">
              <Link
                to="/services"
                className={`flex items-center h-full px-4 text-base font-medium transition-colors duration-200 ${HOVER_COLOR_CLASS}`}
              >
                Services
              </Link>
            </li>

            {/* NGO Consulting link (Standalone) */}
            <li className="flex items-center h-full">
              <Link
                to="/services/ngo-consulting"
                className={`flex items-center h-full px-4 text-base font-medium transition-colors duration-200 ${HOVER_COLOR_CLASS}`}
              >
                NGO Consulting
              </Link>
            </li>

            {/* Business & Strategy Dropdown */}
            <DesktopDropdown 
              title="Business & Strategy" 
              items={businessStrategyServices}
            />

            {/* Operations Support Dropdown */}
            <DesktopDropdown 
              title="Operations Support" 
              items={supportServices}
            />

            {/* About Us link */}
            <li className="flex items-center h-full">
              <Link
                to="/about-us"
                className={`flex items-center h-full px-4 text-base font-medium transition-colors duration-200 ${HOVER_COLOR_CLASS}`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Section (Contact, Login, Mobile Menu) */}
        <div className="flex items-center space-x-4">
          
          {/* Contact and Login - Hidden below lg */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-200 ${HOVER_COLOR_CLASS}`}
            >
              Contact Us
            </Link>
            <Link to="/employe">
              <Button>
                Employe LogIn
              </Button>
            </Link>
          </div>

          {/* Mobile Menu - Visible below lg */}
          <MobileSheet />
        </div>
      </div>
    </header>
  );
}