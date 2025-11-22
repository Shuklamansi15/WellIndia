// AutoPopupConsultation.jsx

import React, { useEffect, useState } from "react";
import { ConsultationCard } from "./Card";

export default function AutoPopupConsultation() {
  const [showPopup, setShowPopup] = useState(false);

  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    if (isCancelled) return;

    const timer = setTimeout(() => {
      if (!isCancelled) {
        setShowPopup(true);
      }
    }, 10000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCancel = () => {
    setShowPopup(false);

    setIsCancelled(true);
  };

  if (isCancelled) {
    return null;
  }

  return (
    <>
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-90 transition-opacity duration-500"
          onClick={handleCancel}
        ></div>
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-100 animate-fadeIn">
          <ConsultationCard onClose={handleCancel} />
        </div>
      )}
    </>
  );
}
