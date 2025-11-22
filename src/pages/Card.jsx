import React, { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input"; 
import { Check, Lock, Phone, MessageSquare, X, Send } from "lucide-react";
import emailjs from '@emailjs/browser'; 

// --- Constants ---
const CONTACT_PHONE = "+91-79821 40425";

// --- EmailJS Configuration ---
const EMAILJS_SERVICE_ID = "service_x60a7l2"; 
const EMAILJS_TEMPLATE_ID = "template_i2b9aja"; 
const EMAILJS_PUBLIC_KEY = "P_-jvssNZgyk_xOtU"; 

// --- Dropdown options ---
const servicesLookingFor = [
  "Private Limited Registration",
  "LLP Registration",
  "One Person Company Registration",
  "Sole Proprietorship Registration",
  "Trademark Registration",
  "GST Registration",
  "MSME Registration",
  "ISO Certification",
  "Other Services",
];

export function ConsultationCard({ onClose }) {
  const phoneForLinks = CONTACT_PHONE.replace(/[^0-9+]/g, "");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); 
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  const [formData, setFormData] = useState({
    user_name: '',
    mobile_number: '',
    email: '',
    city: '',
    service_looking_for: 'Looking For Service*', 
    country_code: '+91'
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (submissionStatus || showSuccessPopup) {
      setSubmissionStatus(null);
      setShowSuccessPopup(false);
    }
  };

  // --- Email Sending Logic ---
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setShowSuccessPopup(false);

    // Validation
    if (
      !formData.user_name ||
      !formData.mobile_number ||
      !formData.email ||
      formData.service_looking_for === "Looking For Service*"
    ) {
      setSubmissionStatus("error_validation");
      setIsSubmitting(false);
      return;
    }

    const full_mobile_number = `${formData.country_code} ${formData.mobile_number}`;
    
    const templateParams = {
      user_name: formData.user_name,
      mobile_number: full_mobile_number,
      email: formData.email,
      city: formData.city,
      service_looking_for: formData.service_looking_for,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("EmailJS SUCCESS!");
          setSubmissionStatus("success");
          setShowSuccessPopup(true);

          // Reset form
          setFormData({
            user_name: "",
            mobile_number: "",
            email: "",
            city: "",
            service_looking_for: "Looking For Service*",
            country_code: "+91",
          });
        },
        (error) => {
          console.log("EmailJS FAILED...", error.text);
          setSubmissionStatus("error");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  // --- Success Popup ---
  const SuccessPopup = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm p-6 rounded-lg z-30 transition-all duration-300">
      <div className="text-center space-y-4">
        <Check className="w-12 h-12 text-green-500 mx-auto animate-pulse" />
        <h3 className="text-2xl font-bold text-gray-800">Request Received!</h3>
        <p className="text-lg font-semibold text-gray-600">
          We'll contact you within 24 hours.
        </p>
        <p className="text-sm text-gray-500">
          Thank you for reaching out. An expert will be in touch shortly.
        </p>

        <Button 
          onClick={onClose} 
          className="w-full py-3 mt-4 text-lg font-bold bg-green-600 hover:bg-green-700 text-white"
        >
          Close
        </Button>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-sm relative mx-auto z-0">
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 z-20"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>
      )}

      {/* Red Banner */}
      <div className="absolute top-0 inset-x-0 mx-auto w-11/12 transform -translate-y-1/2 flex items-center justify-center py-2 px-3 bg-red-600 text-white text-md font-bold shadow-xl rounded-lg z-10 text-center">
        Get Started <span className="text-sm align-top line-through mx-1">@ Rs.499</span> FREE for Consultation
      </div>

      {/* Form */}
      <div className="w-full p-6 pt-10 pb-4 bg-white shadow-2xl rounded-lg space-y-4 min-h-[500px] relative">
        {showSuccessPopup && <SuccessPopup />}

        {!showSuccessPopup && (
          <>
            <div className="text-center mb-4 border-b border-dashed pb-4 border-gray-200">
              <p className="text-lg font-semibold text-gray-800 flex items-center justify-center">
                <Check className="w-5 h-5 mr-2 text-green-500" />
                Expert Consultation in Minutes
              </p>
            </div>

            <form className="space-y-4" onSubmit={sendEmail}>
              <Input
                type="text"
                placeholder="Name*"
                className="w-full h-12"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <div className="flex space-x-2">
                <select
                  name="country_code"
                  value={formData.country_code}
                  onChange={handleChange}
                  className="h-12 w-24 border rounded-lg text-sm px-2"
                  disabled={isSubmitting}
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>

                <Input
                  type="tel"
                  placeholder="Mobile Number*"
                  className="flex-1 h-12"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Input
                type="email"
                placeholder="Email Address*"
                className="w-full h-12"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <Input
                type="text"
                placeholder="City / Location"
                className="w-full h-12"
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={isSubmitting}
              />

              <select
                className="w-full h-12 border rounded-lg px-3"
                name="service_looking_for"
                value={formData.service_looking_for}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                <option value="Looking For Service*" disabled>
                  Looking For Service
                </option>
                {servicesLookingFor.map((service, i) => (
                  <option key={i} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              {submissionStatus === "error" && (
                <p className="text-sm text-center font-semibold text-red-600 flex items-center justify-center">
                  <X className="w-4 h-4 mr-1" /> Submission failed. Please try again.
                </p>
              )}

              {submissionStatus === "error_validation" && (
                <p className="text-sm text-center font-semibold text-orange-600">
                  Please fill out all required fields (*).
                </p>
              )}

              <Button
                type="submit"
                className="w-full py-3 text-lg font-bold bg-[rgb(45,77,116)] hover:bg-[#406796] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> GET FREE CONSULTATION
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-center text-gray-500 flex items-center justify-center pt-2">
              <Lock className="w-3 h-3 mr-1" />
              Your information is 100% secure and encrypted
            </p>
          </>
        )}
      </div>

      {/* Contact Buttons */}
      <div className="bg-gray-50 rounded-b-lg border border-t-0 p-4 shadow-lg">
        <div className="flex justify-around space-x-2">
          <a
            href={`tel:${phoneForLinks}`}
            className="flex items-center text-gray-700 hover:text-[#406796] text-sm font-semibold"
          >
            <Phone className="w-4 h-4 mr-1 text-green-500" />
            {CONTACT_PHONE}
          </a>

          <a
            href={`https://wa.me/${phoneForLinks.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold flex items-center text-green-600 hover:text-green-700"
          >
            <MessageSquare className="w-4 h-4 mr-1" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
