import React, { useEffect, useState } from "react";
import { getAllEmotions } from "../../services/safeArea.service";
import EmergencyModal from "./EmergencyModal.component";
import sadbunny from "../../assets/safearea/sadbunny.png";
import "../../styles/SafeArea/safeareabody.style.css";
import { Link } from "react-router-dom";

const SafeAreaBody: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [emotions, setEmotions] = useState([]);
  useEffect(() => {
    const fetchEmotions = async() => {
      try {
        const response = await getAllEmotions();
        setEmotions(response);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
        throw new Error(errorMessage);
      }
    };
    fetchEmotions();
  }, []);

  const handleEmergencyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="safehome-container">
      <div className="safehome-left">
        <img src={sadbunny} alt="Sad Bunny" />
      </div>
      <div className="safehome-right">
        <h2 className="safehome-question">How do you feel now?</h2>
        {emotions.length > 0 ? (
          <div className="safehome-categories">
            <div className="safehome-category-column">
              <Link
                to={`/safearea/${emotions[0].emotion_id}`}
                className="safehome-category-btn"
              >
                {emotions[0].name}
              </Link>
              <Link
                to={`/safearea/${emotions[1].emotion_id}`}
                className="safehome-category-btn"
              >
                {emotions[1].name}
              </Link>
              <Link
                to={`/safearea/${emotions[2].emotion_id}`}
                className="safehome-category-btn"
              >
                {emotions[2].name}
              </Link>
            </div>
            <div className="safehome-category-column">
              <Link
                to={`/safearea/${emotions[3].emotion_id}`}
                className="safehome-category-btn"
              >
                {emotions[3].name}
              </Link>
              <Link
                to={`/safearea/${emotions[4].emotion_id}`}
                className="safehome-category-btn"
              >
                {emotions[4].name}
              </Link>
              <Link
                to={`/safearea/${emotions[5].emotion_id}`}
                className="safehome-category-btn"
              >
                {emotions[5].name}
              </Link>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button className="safehome-emergency-btn" onClick={handleEmergencyClick}>
        Emergency Button
      </button>
      {showModal && <EmergencyModal onClose={handleCloseModal} />}
    </div>
  );
};

export default SafeAreaBody;
