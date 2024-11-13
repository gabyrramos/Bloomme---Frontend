import React, { useEffect, useState } from "react";

import EmergencyModal from "./EmergencyModal.component";
import sadbunny from "../../assets/safearea/sadbunny.png";
import "../../styles/SafeArea/safeareabody.style.css";
import { Link, useParams } from "react-router-dom";
import { getExercisesByEmotion } from "../../services/safeArea.service";

const SafeAreaExercisesBody: React.FC = () => {
  const { exercises } = useParams();
  const [exercisesApi, setExercisesApi] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchEmotions = async () => {
      try {
        const response = await getExercisesByEmotion(exercises || "");
        setExercisesApi(response);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
        throw new Error(errorMessage);      }
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
        <h2 className="safehome-question">
          Lets try to manage our emotions with some exercises
        </h2>
        <div className="safehome-categories">
          <div className="safehome-category-column">
            {exercisesApi.map((item) => (
              <Link
                to={`/safearea/${exercises}/${item.exercises_id}`}
                className="safehome-category-btn"
              >
                {item.name}
              </Link>
            ))}
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
