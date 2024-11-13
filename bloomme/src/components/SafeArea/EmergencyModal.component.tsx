import React, { useEffect, useState } from 'react';
import '../../styles/SafeArea/emergencyModal.style.css';
import sosbunny from "../../assets/safearea/sosbunny.png";
import wspsos from "../../assets/safearea/wspsos.png";
import Siren from "../../assets/safearea/Siren.png";
import { getEmergencyNum } from '../../services/safeArea.service';

interface IEmergencyNumbersData {
  data: Data;
}

interface Data {
  country: string;
  emergencyNumbers: EmergencyNumbers;
}

interface EmergencyNumbers {
  general: string;
  violenceAgainstWomenAndGirls: string;
  mentalHealthCrisis: string;
}

const EmergencyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [emergencyNumbers, setEmergencyNumbers] = useState<EmergencyNumbers | null>(null);
  const emergencyPhoneNumber = "+1234567890"; // Replace with dynamic data as needed

  const fetchEmergencyNumbers = async() => {//yo lo puse
    //TODO: create the api function to fetch data and save it into emergencyNumbers state
    try {
      const data:IEmergencyNumbersData = await getEmergencyNum();
      setEmergencyNumbers(data.data.emergencyNumbers);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  //   try {
  //     const data = await userIdApi();
  //     console.log("🚀 ~ fetchUserData ~ data:", data); // Verifica la estructura de los datos aquí
  //     setFormData({
  //       username: data.username || '',
  //       country: data.country || '',
  //       age: data.age || 0,
  //       password: data.password || '',
  //       assistant_name: data.assistant_name || ''
  //     });
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  };

  useEffect(() => {
    fetchEmergencyNumbers();
  },[]);

  return (
    <div className="emergency-modal">
      <div className="emergencymodal-content">
        <button onClick={onClose} className="sosclose-btn">X</button>
        <img src={Siren} alt="Siren Icon" className="siren-icon" />
        <h2 className="emergency-title">Emergency</h2>
        <p className="emergency-text">Everything will be fine, I will always be here for you.</p>
        <p className="emergency-text">You can contact any of these numbers if you need further help</p>
        {emergencyNumbers ? (
          <>
            <div className="contact-container">
              <img src={wspsos} alt="WhatsApp Icon" className="soswsp-icon" />
              <span className="phone-number-box">General: {emergencyNumbers.general}</span>
            </div>
            <div className="contact-container">
              <img src={wspsos} alt="WhatsApp Icon" className="soswsp-icon" />
              <span className="phone-number-box">Violence against woman and girls: {emergencyNumbers.violenceAgainstWomenAndGirls}</span>
            </div>
            <div className="contact-container">
              <img src={wspsos} alt="WhatsApp Icon" className="soswsp-icon" />
              <span className="phone-number-box">Mental health crisis: {emergencyNumbers.mentalHealthCrisis}</span>
            </div>
          </>
        ):(
          <div className="contact-container">
            <p>Emergency numbers not found</p>
          </div>
        )}
        <img src={sosbunny} alt="SOS Bunny" className="sos-bunny" />
      </div>
    </div>
  );
};

export default EmergencyModal;
