import React, { useEffect, useState } from "react";
import EmergencyModal from "./EmergencyModal.component";
import { Assistant } from "../Assistant.component";
import "../../styles/SafeArea/safeareabody.style.css";
import "../../styles/SafeArea/safeareatask.style.css";
import { Link, useParams } from "react-router-dom";
import sadbunny from "../../assets/safearea/sadbunny.png";
import { generateTaskByExercises } from "../../services/safeArea.service";

const SafeAreaTaskBody: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAssistant, setShowAssistant] = useState(true);
  const [message, setMessage] = useState("");
  const { exercises, task } = useParams();
  useEffect(() => {
    const fetchEmotions = async () => {
      try {
        const response = await generateTaskByExercises(
          exercises || "",
          task || ""
        );
        console.log(response);
        setMessage(response.text);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmotions();
  }, []);
  const handleEmergencyClick = () => {
    setShowModal(true);
    console.log("Emergency button clicked, showModal is:", showModal);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleAssistantClick = () => setShowAssistant(true);

  return (
    <div className="safehome-container">
       <style>
        {`
          .emotion-btn:hover {
            background-color: #e5c867;
          }
          .exercise-btn:hover {
            background-color: #ff8a61;
          }
          .assistant-btn:hover {
            background-color: #8bb284;
          }
        `}
      </style>
      {/* <div className="safehome-divider">
        <img src={safearealine} alt="Divider" />
      </div>  */}
      <div className="safehome-left">
        <img src={sadbunny} alt="Sad Bunny" />
      </div>
      <div className="safehome-right">
        <h2 className="safehome-question">
          Everything will be fine, I will always be here for you.
        </h2>
        <div className="safehome-message-box">
          <p className="safehome-message">{message}</p>
        </div>
        <div className="safehometask-categories">
        <div className="safehometask-category-row" >
            <Link
              to="/safearea"
              className="safehometask-category-btn"
              style={{ backgroundColor: "#f1db93", color: "#ffffff" }}
            >
              Select another emotion
            </Link>
            <Link
              to={`/safearea/${exercises}`}
              className="safehometask-category-btn"
              style={{ backgroundColor: "#ffa97b", color: "#ffffff" }}
            >
              Choose another exercise
            </Link>
          </div>
        </div>
      </div>
      <button className="safehome-emergency-btn" onClick={handleEmergencyClick}>
        Emergency Button
      </button>
      {showModal && <EmergencyModal onClose={handleCloseModal} />}
      {showAssistant && (
        <Assistant
          text="If you need help I’m here to chat!"
        />
      )}
    </div>
  );
};

export default SafeAreaTaskBody;
