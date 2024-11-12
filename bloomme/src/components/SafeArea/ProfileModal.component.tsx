import React from "react";
import cancelX from "../../assets/safearea/cancelX.png";
import saveicon from "../../assets/safearea/saveicon.png";
import toolsbunny from "../../assets/safearea/toolsbunny.png";
import servicesarrow from "../../assets/servicesarrow.png";
import "../../styles/SafeArea/profilemodal.style.css";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="profile-modal-overlay">
      <div className="profile-modal">
        <h2>Profile</h2>
        <img src={servicesarrow} alt="servicearrow" />
        <div className="profile-form">
          <div className="profileform-group">
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </div> 
          <div className="profileform-group">
            <label>Age</label>
            <input type="text" placeholder="Age" />
          </div>
          <div className="profileform-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="profileform-group">
            <label>Country</label>
            <input type="text" placeholder="Country" />
          </div>
          <div className="profileform-group">
            <label>Assistant Name</label>
            <input type="text" placeholder="Assistant Name" />
          </div>
        </div>
        <div className="profilemodal-buttons">
          <button onClick={onClose} className="profilecancel-btn">
            <img src={cancelX} alt="Cancel" /> Cancel
          </button>
          <button className="profilesave-btn">
            <img src={saveicon} alt="Save" /> Save
          </button>
        </div>
        <img src={toolsbunny} alt="Bunny" className="tools-bunny" />
      </div>
    </div>
  );
};

export default ProfileModal;
