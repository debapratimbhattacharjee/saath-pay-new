import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import BackButton from '../BackButton/BackButton'; // Import reusable BackButton component
import './QRScanner.css'; // Import CSS for styling

const QRScanner = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="scanner-container">
      {/* Use the BackButton component for consistent navigation */}
      <BackButton onClick={() => navigate('/money-transfer')} label="Back to Money Transfer" />
      
      <h2 className="scanner-heading">Scan QR Code</h2>
      <div id="reader" className="scanner-box"></div> {/* Placeholder for scanner container */}
      <p className="scanner-instructions">
        Align the QR code within the frame to scan.
      </p>
    </div>
  );
};

export default QRScanner;
