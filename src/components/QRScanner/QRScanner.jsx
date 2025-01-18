import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './QRScanner.css'; // Import CSS for styling

const QRScanner = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="scanner-container">
      <h2 className="scanner-heading">Scan QR Code</h2>
      <div id="reader" className="scanner-box"></div> {/* Placeholder for scanner container */}
      <p className="scanner-instructions">
        Align the QR code within the frame to scan.
      </p>
      <button
        className="back-button"
        onClick={() => navigate('/money-transfer')} // Navigate back to Money Transfer
      >
        Back to Money Transfer
      </button>
    </div>
  );
};

export default QRScanner;
