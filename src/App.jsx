import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutPage from "./pages/About";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Ai from "./pages/Ai";
import Employe from "./pages/Employe";

import NgoConsulting from "./pages/NgoConsulting";
import BusinessDevelopment from "./pages/BusinessDevelopment";
import MarketingConsultation from "./pages/MarketingConsultation";
import EventManagement from "./pages/EventManagement";
import FinancialServices from "./pages/FinancialServices";
import ItSolutions from "./pages/ItSolutions";
import LegalServices from "./pages/LegalServices";
import GovernmentProjectServices from "./pages/GovernmentProjectServices";
import CoreServices from "./pages/OurServices";

const App = () => {
  return (
    <BrowserRouter>
      <div className="theme-circles fixed inset-0 -z-10 pointer-events-none">
        <div className="theme-circle" style={{ width: "80px", height: "80px", top: "10%", left: "15%", animationDelay: "0s" }} />
        <div className="theme-circle" style={{ width: "140px", height: "140px", top: "30%", left: "50%", animationDelay: "2s" }} />
        <div className="theme-circle" style={{ width: "100px", height: "100px", top: "70%", left: "25%", animationDelay: "4s" }} />
        <div className="theme-circle" style={{ width: "200px", height: "200px", top: "50%", left: "80%", animationDelay: "6s" }} />
        <div className="theme-circle" style={{ width: "60px", height: "60px", top: "20%", left: "75%", animationDelay: "8s" }} />
        <div className="theme-circle" style={{ width: "110px", height: "110px", top: "65%", left: "60%", animationDelay: "10s" }} />
        <div className="theme-circle" style={{ width: "130px", height: "130px", top: "80%", left: "10%", animationDelay: "12s" }} />
        <div className="theme-circle" style={{ width: "160px", height: "160px", top: "40%", left: "5%", animationDelay: "14s" }} />
        <div className="theme-circle" style={{ width: "70px", height: "70px", top: "5%", left: "55%", animationDelay: "16s" }} />
        <div className="theme-circle" style={{ width: "90px", height: "90px", top: "85%", left: "45%", animationDelay: "18s" }} />
        <div className="theme-circle" style={{ width: "150px", height: "150px", top: "60%", left: "35%", animationDelay: "20s" }} />
        <div className="theme-circle" style={{ width: "120px", height: "120px", top: "25%", left: "90%", animationDelay: "22s" }} />
      </div>

      <div className="relative min-h-screen flex flex-col">
        <Header />

        
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/employe" element={<Employe />} />
            <Route path="/services/ngo-consulting" element={<NgoConsulting />} />
            <Route path="/services/business-development-and-strategy" element={<BusinessDevelopment />} />

            <Route path="/services/marketing-consultation" element={<MarketingConsultation />} />
            <Route path="/services/event-management-and-planning" element={<EventManagement />} />
            <Route path="/services/financial-and-accounting-services" element={<FinancialServices />} />
            <Route path="/services/it-solutions-and-consulting" element={<ItSolutions />} />
            <Route path="/services/legal-and-compliance-services" element={<LegalServices />} />
            <Route path="/services/government-project-support" element={<GovernmentProjectServices />} />

            <Route path="/services" element={<Services />} />
            <Route path="/our-core-services" element={<CoreServices />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutPage />} />
          </Routes>
       

        <Ai />
        <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
