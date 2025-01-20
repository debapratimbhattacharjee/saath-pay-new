import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} // Goes to the previous page      
      style={{
        position: "fixed", // Fixes the button in the viewport
        top: "20px", // Adjust the top distance
       left: "30px", // Adjust the right distance
        zIndex: "1000", // Ensures it's above other content
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "0", // Removes any default padding
      }}
    >
      {/* Reference the image from the public folder */}
      <img
        src="/backbutton.png" // Directly reference image from the public folder
        alt="Back Button"
        style={{ width: "24px", height: "24px" }} // Adjust size as needed
      />
    </button>
  );
};

export default BackButton;
