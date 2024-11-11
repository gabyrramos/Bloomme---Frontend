import React, { useState } from 'react';
import EmergencyModal from "./EmergencyModal.component";
import sadbunny from "../../assets/safearea/sadbunny.png";
import '../../styles/SafeArea/safeareabody.style.css';
import { Link } from 'react-router-dom';


const SafeAreaExercisesBody: React.FC = () => {
  
  const [showModal, setShowModal] = useState(false);
  
  const handleEmergencyClick = () => {
    setShowModal(true);
    console.log("Emergency button clicked, showModal is:", showModal);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="safehome-container">
      {/* <div className="safehome-divider">
        <img src={safearealine} alt="Divider" />
      </div>  */}
      <div className="safehome-left">
        <img src={sadbunny} alt="Sad Bunny" />
      </div>
      <div className="safehome-right">
      <h2 className="safehome-question">Lets try to manage our emotions with some exercises</h2>
        <div className="safehome-categories">
          <div className="safehome-category-column">
          <Link to="/safearea/:exercises/:task" className="safehome-category-btn">Breathing exercise</Link>
          <Link to="/safearea/:exercises/:task" className="safehome-category-btn">Meditation</Link>
          </div>
          <div className="safehome-category-column">
          <Link to="/safearea/:exercises/:task" className="safehome-category-btn">Meditation</Link>
          <Link to="/safearea/:exercises/:task" className="safehome-category-btn">Meditation</Link>
          </div>
        </div>
      </div>
      <button className="safehome-emergency-btn" onClick={handleEmergencyClick}>
        Emergency Button
      </button>
      {showModal && <EmergencyModal onClose={handleCloseModal} />}
    </div>
  );
};

export default SafeAreaExercisesBody;
