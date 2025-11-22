import React from "react";

const MAX_CONTAINER_WIDTH = "1200px";

const fullDisplayWrapperStyle = {
  minHeight: "100vh",
  width: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

const trackingContainerStyle = {
  maxWidth: MAX_CONTAINER_WIDTH,
  width: "100%",
  margin: "0 auto",

  overflow: "hidden",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
};

const iframeStyle = {
  width: "100%",
  height: "90vh",
  alignItems: "center",
  border: "0",
  display: "block",
};

export default function Employe() {
  return (
    <div style={fullDisplayWrapperStyle}>
      <div style={trackingContainerStyle}>
        <iframe
          src="https://wellindia.sumhr.io"
          style={iframeStyle}
          title="Employee Portal - sumHR"
        ></iframe>
      </div>
    </div>
  );
}
