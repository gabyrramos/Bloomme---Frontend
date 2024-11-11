import React from 'react';
import '../../styles/SafeArea/emergencyModal.style.css';
import sosbunny from "../../assets/safearea/sosbunny.png";
import wspsos from "../../assets/safearea/wspsos.png";
import Siren from "../../assets/safearea/Siren.png";

const EmergencyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const emergencyPhoneNumber = "+1234567890"; // Replace with dynamic data as needed

  return (
    <div className="emergency-modal">
      <div className="emergencymodal-content">
        <button onClick={onClose} className="sosclose-btn">X</button>
        <img src={Siren} alt="Siren Icon" className="siren-icon" />
        <h2 className="emergency-title">Emergency</h2>
        <p className="emergency-text">Everything will be fine, I will always be here for you.</p>
        <p className="emergency-text">You can contact any of these numbers if you need further help</p>
        <div className="contact-container">
          <img src={wspsos} alt="WhatsApp Icon" className="soswsp-icon" />
          <span className="phone-number-box">{emergencyPhoneNumber}</span>
        </div>
        <img src={sosbunny} alt="SOS Bunny" className="sos-bunny" />
      </div>
    </div>
  );
};

export default EmergencyModal;
